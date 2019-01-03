pragma solidity ^0.4.24;
import "../node_modules/openzeppelin-solidity/contracts/ownership/Ownable.sol";

library SafeMath {
    function add(uint a, uint b) internal pure returns (uint c) {
        c = a + b;
        require(c >= a);
    }
    function sub(uint a, uint b) internal pure returns (uint c) {
        require(b <= a);
        c = a - b;
    }
    function mul(uint a, uint b) internal pure returns (uint c) {
        c = a * b;
        require(a == 0 || c / a == b);
    }
    function div(uint a, uint b) internal pure returns (uint c) {
        require(b > 0);
        c = a / b;
    }
}


/**
 * @title Dora Factory
 * @dev The decentralized quora (Dora) factory contract creates a question and transfers Ether 
 * to the created smart contract. This amount includes the deposit of the asker and the reward for the answerer 

 */
contract DoraFactory is Ownable {
    using SafeMath for uint;
    bool private _paused;
     
    event QuestionAsked(address indexed dora, address indexed asker);
    event QuestionAnswered(address indexed dora, address indexed answerer, uint index);
    event WinnerPicked(address indexed dora, address indexed winner, uint index);

    event Paused(address account);
    event Unpaused(address account);

    constructor() public {
        _paused = false;
    }    
    
    /** @dev Creates a question
      * @param _question Question to be answered for reward in Ether
      * @return address of created Dora
     */
    function createDora(string _question) public payable whenNotPaused returns (address) {
        require(msg.value > 0, "No value");
    // Create new Dora and fund it with sent value and set 10% of this as deposit
        address newDora = (new Dora).value(msg.value)(this, msg.sender, _question);
    // Emit event
        emit QuestionAsked(newDora,msg.sender);
        return newDora;
    }

    function registerAnswered(address _dora, address _answerer, uint _index) external {
        emit QuestionAnswered(_dora, _answerer, _index);
    }

    function registerWinner(address _dora, address _winner, uint _index) external {
        emit WinnerPicked(_dora, _winner, _index);
    }

    /**
   * @dev Modifier to make a function callable only when the contract is not paused.
   */
    modifier whenNotPaused() {
        require(!_paused);
        _;
    }

  /**
   * @dev Modifier to make a function callable only when the contract is paused.
   */
    modifier whenPaused() {
        require(_paused);
        _;
    }

     /**
       * @return true if the contract is paused, false otherwise.
     */
    function paused() public view returns(bool) {
        return _paused;
    }

    /**
   * @dev called by the owner to pause, triggers stopped state
   */
    function pause() public onlyOwner() whenNotPaused {
        _paused = true;
        emit Paused(msg.sender);
    }

  /**
   * @dev called by the owner to unpause, returns to normal state
   */
    function unpause() public onlyOwner() whenPaused {
        _paused = false;
        emit Unpaused(msg.sender);
    }

    
}

/**
 * @title Dora 
 * @dev The decentralized quora (Dora) which contains the question. A reward is set when
 * the question is created. Everybody can answer the question and the creator of the question
 * picks a winner

 */
contract Dora is Ownable {
    using SafeMath for uint;
    enum Status {Asked, Answered, WinnerPicked, Redeemed}
    Status public status;
    
    address public factory;
    string public question;
    uint public deadline;
    uint public selectedAnswerIndex;
    uint public reward;
    
  
    struct Answer {
        string description;
        address answerer;
    }
    
    Answer[] public answers;
    
    /** @dev Creates a question
      * @param _factory Dora factory address
      * @param _creator Who asks the question
      * @param _question Question
     */    
    constructor(address _factory, address _creator, string _question) public payable {
        factory = _factory;
        transferOwnership(_creator);
        question = _question;
        status = Status.Asked;
        // 10% of sent ether is deposit
        reward = (msg.value.div(11).mul(10));
        // deadline in one week
        deadline = now.add(5 minutes);
    
    }
       
     /** @dev Post answer to question
      * @param _answer Answer
     */ 
    function postAnswer (string _answer) public {
    // Can only answer if winner not picked already
        require(status != Status.WinnerPicked, "Winner has been picked already"); 
    // Add answer to answers array
        Answer memory newAnswer = Answer({
            description: _answer,
            answerer: msg.sender
        });
        
        answers.push(newAnswer);
    // Change status to answered
        if (status != Status.Answered) status = Status.Answered;
    
    // Emit event in Factory
        DoraFactory(factory).registerAnswered(address(this), msg.sender, (answers.length-1));

    }  
    
    /** @dev Selects best answer
      * @param _index Index of best answer
    */
    function pickWinner(uint _index) public onlyOwner() {
        require(status != Status.WinnerPicked, "Winner has been picked already");
        require(now > deadline, "Too early to pick winner");
    // set status to Winner picked
        status = Status.WinnerPicked;
    // set selected answers
        selectedAnswerIndex = _index;

    // Transfer deposit (10% of reward) back to creator
        owner().transfer(reward.div(100).mul(10));
        
    // register in factory that winner is picked
        DoraFactory(factory).registerWinner(address(this), msg.sender, _index);
    
    }

    /** @dev Winner can withdraw reward
    */
    function withdrawReward() public {
        require(status == Status.WinnerPicked, "Winner has not been picked");
        require(msg.sender == answers[selectedAnswerIndex].answerer, "Did not provide winning answer");
        //Set status to reward redeemed
        status = Status.Redeemed;

        //Transfer reward to winner
        msg.sender.transfer(address(this).balance);
    }

    /** @dev Owner can withdraw reward and deposit if nobody answered
    */
    function withdrawDepositReward() public onlyOwner {
        require(status == Status.Asked, "Someone answered question");
        //Set status to reward redeemed
        status = Status.Redeemed;

        //Transfer reward to winner
        msg.sender.transfer(address(this).balance);
    }

    /** @dev Gets best answer and address of answerer
      * @return answer which cerator of question selected
      * @return address of answerer
     */
    function winner() public view returns (string answer, address answerer) {
        require(status == Status.WinnerPicked, "Winner has not been picked");
        answer = answers[selectedAnswerIndex].description;
        answerer = answers[selectedAnswerIndex].answerer;
    }

    /** @dev Gets attributes of question
      * @return Question
      * @return Reward
      * @return Deadline
      * @return Status
      * @return Answers count
      * @return Index of best answer
     */
    function getSummary() public view returns (string, uint, uint, Status, uint, uint) {
        return (question, reward, deadline, status, answers.length, selectedAnswerIndex);
    }
    


}