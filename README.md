# Dora - Decentralized Quora on Ethereum

Dora works similar to Quora or Stackoverflow. 

Every user can post questions which can be answered by other users. When a question is posted a reward for the best answer is locked in a smart contract. The creator of the question also needs to pay a deposit. After a certain time frame the user who asked the question can pick the best answer, the deposit is returned then. Afer that the creator of the best answer can then claim the reward.

## User Stories

As a user, I want to get answers to questions which I can't solve by myself. In order to give an incentive to others to provide the best answers,  I am willing to pay a reward in Ether for the answer. I also need to pay a deposit in Ether so that I will pick the best answer when the time for answer submissions is expired. When I chose the best answer the deposit is transferred back to my account. If nobody answered my question, I can withdraw the deposit and reward from the contract.

As a user who knows the answer, I post an answer so that I have the chance to get the reward if my answer is chosen. If so I can withdraw the reward from the account.

## Installation

1. Run local blockchain.
    ```javascript
    ganache-cli
    ```
2. Restore metamask account with mnemonic seed from ganache and select Localhost 8545.

3. Migrate the smart contracts.
    ```javascript
    // in another terminal
    truffle migrate
    ```
4. In the client directory, run the React app. 
   ```javascript
    cd client
    npm run start
   ```

