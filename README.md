# Dora - Decentralized Quora on Ethereum

Dora works similar to Quora or Stackoverflow. Every user can post questions which can be answered by other users. When a question is posted a reward for the best answer is locked in a smart contract. The creator of the question also needs to pay a deposit. After a certain time frame the user who asked the question can pick the best answer, the deposit is returned then. Afer that the creator of the best answer can then claim the reward. 

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

