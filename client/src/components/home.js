import React, { Component } from 'react';
import NewQuestion from './new_question'
import QuestionList from './question_list'

class Home extends Component {
    render() {
        return (
            <div>
                <h1>Dora - The decentralized Quora on Ethereum</h1>
            <NewQuestion
                web3={this.props.web3}
                accounts={this.props.accounts}
                contract={this.props.contract}
                setPage={this.props.setPage.bind(this)}
            />
            <QuestionList
                web3={this.props.web3}
                accounts={this.props.accounts}
                contract={this.props.contract}
                setPage={this.props.setPage.bind(this)}
            />
            </div>
        );
    }


}

export default Home;