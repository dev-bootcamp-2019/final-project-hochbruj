import React, { Component } from 'react';
import NewQuestion from './new_question'
import QuestionList from './question_list'

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Dora - The decentralized Quora on Ethereum</h1>
                <p>Dora works similar to Quora or Stackoverflow. Users can post questions to be answered by other users.</p>
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