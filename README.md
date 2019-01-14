# Dora - Decentralized Quora on Ethereum

Dora works similar to Quora or Stackoverflow. 

Every user can post questions which can be answered by other users. When a question is posted a reward for the best answer is locked in a smart contract. The creator of the question also needs to pay a deposit. After a certain time frame the user who asked the question can pick the best answer, the deposit is returned then. Afer that the creator of the best answer can then claim the reward.

## User Stories

Like Quora, this platform brings 2 types of users together:
(1) askers of questions and
(2) posters of answers.

As an asker, I want to crowdsource answers to a question I ask, so that I get help from others with problems I can't solve myself.

As an asker, I want to incentivise others (with a reward in Ether) to provide the best answer, so that I get more quality answers, and quicker.

As an asker, I need to be able to pay a (refundable) deposit in Ether, so that I myself am incentivised to actually pick the best answer when the time for answer submissions has expired. When I chose the best answer, the deposit is transferred back to my account. If nobody answered my question, I can withdraw the deposit and reward from the contract.

As a poster, I want to be able to post an answer so that I have the chance to get the reward if my answer is chosen as 'best answer'. 

As a poster, I want to withdraw the reward from the account if my answer is chosen as 'besst answer', so that I am paid.

## Clone git repo
```
git clone https://github.com/dev-bootcamp-2019/final-project-hochbruj.git
cd final-project-hochbruj
```

## Test

Tests have been written in Truffle v4. therefore please use Truffle v4. when testing

```
truffle develop
test
```

## Installation

### On local blockchain

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

### On Rinkeby Testnet

1. Connect Metamask to Rinkeby Testnet

2. In the client directory, run the React app. 
   ```javascript
    cd client
    npm run start
   ```