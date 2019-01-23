# Dora - Decentralized Quora on Ethereum

Dora is a platform similar to Quora or Stackoverflow, except the best answers get you paid.


## User Stories

Like Quora, this platform brings 2 types of users together:
(1) askers of questions and
(2) responders to questions.

As an asker, I want to crowdsource answers to a question I ask, so that I get help from others with problems I can't solve myself.

As an asker, I want to incentivise others (with a reward in Ether) to provide the best answer, so that I get more quality answers, and quicker.

As an asker, I need to be able to pay a (refundable) deposit in Ether (currently set to 10% of reward), so that I myself am incentivised to actually pick the best answer when the time for answer submissions has expired (currently set to 3 days). When I chose the best answer, the deposit is transferred back to my account. If nobody answered my question, I can withdraw the deposit and reward from the contract.

As a responder, I want to be able to post an answer so that I have the chance to get the reward if my answer is chosen as 'best answer'. 

As a responder, I want to withdraw the reward from the account if my answer is chosen as 'best answer', so that I am paid.

## Dowload and install
```
git clone https://github.com/dev-bootcamp-2019/final-project-hochbruj.git
cd final-project-hochbruj/client
npm install
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

## dApp hosted on IPFS (using Rinkeby Testnet)

Initial loading might take several minutes, because file size of the react app is pretty large.
If web3 doesn't get injected at first time, please try a refresh.

https://ipfs.io/ipfs/QmQT59MDoAw1GXTNK1wtX4ixVBwq91V4hiVwVx2ssxWmiD/

