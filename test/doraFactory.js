var Dora = artifacts.require("./Dora.sol");
var DoraFactory = artifacts.require("./DoraFactory.sol");


contract('DoraFactory', async (accounts) => {
  let FactoryInstance
  let DoraAddress
  const alice = accounts[0]
  const bob = accounts[1]


  it("... should deploy a factory ", async () => {
    FactoryInstance = await DoraFactory.deployed();
    assert.ok(FactoryInstance)
  });

  it("... should set a owner ", async () => {
    FactoryInstance = await DoraFactory.deployed();
    assert.equal(alice, await FactoryInstance.owner())
  });

  it("... should create a new Dora ", async () => {
    FactoryInstance = await DoraFactory.deployed();
    DoraAddress = await FactoryInstance.createDora("What is the weather?", { from: accounts[1], value: 1000 })
    assert.ok(DoraAddress)
  });

  it("... should emit an event when Dora created ", async () => {
    FactoryInstance = await DoraFactory.deployed();
    DoraAddress = await FactoryInstance.createDora.call("What is the weather?", { from: accounts[1], value: 1000 })
    
    const QuestionAsked = await FactoryInstance.QuestionAsked();
    const log = await new Promise(function(resolve, reject) {
      QuestionAsked.watch(function(error, log){ resolve(log);});
    });

    const logAsker = log.args.asker
  
    assert.equal(accounts[1], logAsker)
  });

  it("... should pause creating a new Dora (circuit breaker) ", async () => {
    FactoryInstance = await DoraFactory.deployed();

    //only alice (owner) can pause the factory
    try {
      await FactoryInstance.pause({from: bob})
      errorThrown = false
    } catch (err) {
      errorThrown = true
    }
    assert(errorThrown, 'error was thrown')

    // Set circuit braker
    await FactoryInstance.pause({from: alice})
    //nobody can create a dora
    try {
      DoraAddress = await FactoryInstance.createDora("What is the weather?", { from: bob, value: 1000 })
      errorThrown = false
    } catch (err) {
      errorThrown = true
    }
    assert(errorThrown, 'error was thrown')

    // Remove circuit braker
    await FactoryInstance.unpause({from: alice})
    DoraAddress = await FactoryInstance.createDora("What is the weather?", { from: accounts[1], value: 1000 })
    assert.ok(DoraAddress)
  });

  

});
