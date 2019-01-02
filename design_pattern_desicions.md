### Factory Approach

Every new question (dora) is a new smat contract whic is created by the factory. This has several advantages:
 - Less risk, because one contarct only contains the rewar of one question
 - Lower gas cost when interacting with question, because it contains les data

### Restricting Access

Only the owner of a question can pick the winning answer
Only the address of the winning answer is able to withdraw funds

### Pull over Push Payments

The address of the winnig answer needs to withdraw the reward, the funds are not automatically transferred.

### State Machine

The question (dora) has different states from "asked", "answered", "winner picked" to "redeemed". Based on the theses states only specific interactions are possible, e.g. the reward can just be withdrawn if the winning answer is picked.

