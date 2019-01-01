var Dora = artifacts.require('./Dora.sol');
var DoraFactory = artifacts.require('./DoraFactory.sol');


contract('Dora', async (accounts) => {
  let FactoryInstance
  let DoraInstance
  let doraAddress
  let log
  let answer
  let errorThrown

  const alice = accounts[0]
  const bob = accounts[1]
  const eve = accounts[2]

  const value = web3.toWei(1.1, 'ether')
  const question = 'What is the best cypto to invest in 2019?'
  const answer1 = 'Ether'
  const answer2 = 'Bitcoin'

  beforeEach(async () => {
    
  FactoryInstance = await DoraFactory.deployed();

   await FactoryInstance.createDora(question, {from: alice, value: value});
  
  const QuestionAsked = await FactoryInstance.QuestionAsked();
  log = await new Promise(function(resolve, reject) {
             QuestionAsked.watch(function(error, log){ resolve(log);});
           });
      
         doraAddress = log.args.dora
         DoraInstance = Dora.at(doraAddress)

  })

  it('... should create a question with attributes', async () => {
    assert.equal(alice, await DoraInstance.owner(), 'alice should be owner of the question')
 
    const balanceDora = await web3.eth.getBalance(doraAddress)
    assert.equal(value,balanceDora, 'the value should be transferred to question')

    assert.equal(FactoryInstance.address, await DoraInstance.factory(),
                'the factory address should be stored in smart contract' )

    assert.equal(question, await DoraInstance.question(),
                'the question should be set');
  
    assert.equal(0, await DoraInstance.status(), 'status should be "asked" (0)')
     
    const reward = await DoraInstance.reward()

    //assert.equal(value.toString(), reward.toNumber()*1.1,
    //            'reward should be the value sent to contract minus 10%')
 
  })

  it('... should answer a question', async () => {
    await DoraInstance.postAnswer(answer1, {from: bob})
    
    // Answer is first elemnt in returned answers array
    answer = await DoraInstance.answers(0)
    
    //Answer
    assert.equal(answer1, answer[0])
    
    //Answerer
    assert.equal(bob, answer[1])

    //Event logs answerer of question
    const QuestionAnswered = await FactoryInstance.QuestionAnswered();
    log = await new Promise(function(resolve, reject) {
      QuestionAnswered.watch(function(error, log){ resolve(log);});
           });  
    assert.equal(bob, log.args.answerer)

    //Status should be 'answered' (1)
    assert.equal(1, await DoraInstance.status())
  })

  it('... should pick a winner', async () => {
    
    await DoraInstance.postAnswer(answer1, {from: bob})
    await DoraInstance.postAnswer(answer2, {from: eve})
    
    //Alice picks answer 1 as winner
    //Simulate 8 days later
    await web3.currentProvider.send({
      jsonrpc: '2.0',
      method: 'evm_increaseTime',
      params: [8*24*3600],
      id: new Date().getTime()
    })

    await web3.currentProvider.send({
      jsonrpc: '2.0',
      method: 'evm_mine',
      id: new Date().getTime()
    })

    const aliceBalanceBefore = await web3.eth.getBalance(alice).toNumber()
    await DoraInstance.pickWinner(0, {from: alice})
    const aliceBalanceAfter = await web3.eth.getBalance(alice).toNumber()
 
    // Check winner
    const winner = await DoraInstance.winner()
    assert.equal(answer1, winner[0])
    
    // Alice should receive about 10% of reward  deposit back
    const reward = await DoraInstance.reward()
    //little bit less because of gas cost
    const depositBack = reward.toNumber() * 0.09
    assert.isAbove(aliceBalanceAfter, aliceBalanceBefore + depositBack)
  })

  it('... should withdraw reward', async () => {
    
    await DoraInstance.postAnswer(answer1, {from: bob})
    await DoraInstance.postAnswer(answer2, {from: eve})
    
    //Alice picks answer 2 as winner
    //Simulate 8 days later
    await web3.currentProvider.send({
      jsonrpc: '2.0',
      method: 'evm_increaseTime',
      params: [8*24*3600],
      id: new Date().getTime()
    })

    await web3.currentProvider.send({
      jsonrpc: '2.0',
      method: 'evm_mine',
      id: new Date().getTime()
    })
    
    await DoraInstance.pickWinner(0, {from: alice})
    const bobBalanceBefore = await web3.eth.getBalance(bob).toNumber()
    
    //only bob can claim reward
    try {
      await DoraInstance.withdrawReward({from: eve})
      errorThrown = false
    } catch (err) {
      errorThrown = true
    }
    
    assert(errorThrown, 'error was thrown')

    await DoraInstance.withdrawReward({from: bob})
    const bobBalanceAfter = await web3.eth.getBalance(bob).toNumber()
 
    // Bob should withdraw reward minus gast cost
    const reward = await DoraInstance.reward()
    //little bit less because of gas cost
    const rewardAdjusted = reward.toNumber() * 0.99
    assert.isAbove(bobBalanceAfter, bobBalanceBefore + rewardAdjusted)
  })

  it('... should withdraw reward and deposit', async () => {
    
    //Nobody posted ans answer
    //Simulate 8 days later
    await web3.currentProvider.send({
      jsonrpc: '2.0',
      method: 'evm_increaseTime',
      params: [8*24*3600],
      id: new Date().getTime()
    })

    await web3.currentProvider.send({
      jsonrpc: '2.0',
      method: 'evm_mine',
      id: new Date().getTime()
    })
    
    const aliceBalanceBefore = await web3.eth.getBalance(alice).toNumber()
    
    //only alice as owner can claim reward and deposit
    try {
      await DoraInstance.withdrawDepositReward({from: eve})
      errorThrown = false
    } catch (err) {
      errorThrown = true
    }
    
    assert(errorThrown, 'error was thrown')

    await DoraInstance.withdrawDepositReward({from: alice})
    const aliceBalanceAfter = await web3.eth.getBalance(alice).toNumber()
 
    // Bob should withdraw reward minus gast cost
    const reward = await DoraInstance.reward()
    //Reward and deposit
    const rewardDeposit = reward.toNumber() * 1.1
    //Adjusted because of gas costs
    const rewardDepositAdjusted = rewardDeposit * 0.99
    assert.isAbove(aliceBalanceAfter, aliceBalanceBefore + rewardDepositAdjusted)
  })


  

  
});
