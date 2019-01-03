import React, { Component } from 'react';
import NewQuestion from './new_question'
import QuestionList from './question_list'

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Dora - The decentralized Quora on Ethereum</h1>
                <p>Dora works similar to Quora or Stackoverflow. Every user can post questions which can be answered by others. When a question is posted a reward for the best answer is transferred into a smart contract. The creator of the question also needs to pay a deposit. After a certain time frame the user who asked the question can pick the best answer, the deposit is returned then. Afer that the winner can claim the reward.</p>
            <NewQuestion
                web3={this.props.web3}
                accounts={this.props.accounts}
                contract={this.props.contract}
            />
            <QuestionList
                web3={this.props.web3}
                accounts={this.props.accounts}
                contract={this.props.contract}
            />
            </div>
        );
    }


}

export default Home;