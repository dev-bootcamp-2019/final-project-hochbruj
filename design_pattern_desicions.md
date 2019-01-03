### Factory Approach

Every new question (dora) is a new smart contract which is created by the factory. This has two major advantages:
 - Less risk, because one contract only contains the reward for one question
 - Lower gas cost when interacting with question, because it contains less data

### Restricting Access

- Only the owner of a question can pick the winning answer
- Only the address of the winning answer is able to withdraw funds
- Only the owner can withdraw deposit and reward if nobody answered the question

### Pull over Push Payments

The address of the winnig answer needs to withdraw the reward, the funds are not automatically transferred.

### State Machine

The question (dora) has different states from "asked", "answered", "winner picked" to "redeemed". Based on the theses states only specific interactions are possible, e.g. the reward can just be withdrawn if the winning answer is picked. 

### Events and Logs

Everytime when a question is asked, answered or a winner is picked, an event is logged. Therefore it is possible to show in the UI the questions and answers per user. It is cheaper than storing this information in the contract.

### Circuit Breaker

The owner of the factory can pause the contract, so no more questions can be created if there is a security issue.
