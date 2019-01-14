### Factory Approach

Every new question (dora) is a new smart contract which is created by the factory. This has two major advantages:
 - Less risk, because one contract only stores the reward for one question asked
 - Lower gas cost when interacting with a question, because it contains less data

### Restricting Access

- Only the owner of a question can pick the best answer
- Only the address of the winning answer is able to withdraw funds
- Only the owner can withdraw deposit and reward if nobody answered the question

### Pull over Push Payments

The address of the best answer needs to withdraw the reward, the funds are not automatically transferred.

### State Machine

The question (dora) has different states from "asked", "answered", "winner picked" to "redeemed". Within each state, only certain interactions with the contract are possible, e.g. the reward can only be withdrawn if the best answer is picked.

### Events and Logs

Every time a question is asked, answered or a winner is picked, an event is logged. Therefore it is possible to show in the UI the questions and answers per user. It is cheaper than storing this information in the contract.

### Circuit Breaker

The owner of the factory can pause the contract so that if there is a security issue, no more questions can be created.
