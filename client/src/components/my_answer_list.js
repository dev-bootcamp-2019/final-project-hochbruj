import React, { Component } from 'react';
import { Divider, Card, Segment, Message } from 'semantic-ui-react'
import AnswerItem from './answer_item'

class MyAnswerList extends Component {
    constructor(props) {
        super(props);

        this._isMounted = false;
        this.state = { log: null };
    }

    componentDidMount = async () => {
        this._isMounted = true
        this.updateLog()
    }
    
    componentDidUpdate = async () => {
        this._isMounted = true
        this.updateLog()
    }
    
    componentWillUnmount() {
        this._isMounted = false;
    }

    updateLog = async () => {
        var log = await this.props.contract.getPastEvents('QuestionAnswered',
            { filter: { answerer: this.props.accounts[0]},
                fromBlock: 0,
                toBlock: 'latest'
            })

        log.sort((a,b) => b.blockNumber - a.blockNumber)
        this._isMounted && this.setState({ log })
     
    }

    renderMessage() {
        if (this.state.log.length === 0) {
            return (
                <Segment>
                <Message warning>You haven't answered any questions with this account.</Message>
                </Segment>
            )
        }
    }

    
    render() {
        if (!this.state.log) {
            return <div>Loading your answered questions...</div>;
          }

        const questions = this.state.log.map((item) => {
            return (
            <AnswerItem
                key={item.transactionHash}
                contract={item.returnValues.dora}
                web3={this.props.web3}
                accounts={this.props.accounts}
                answerIndex={item.returnValues.index}
             />
            );
        });

        return (
            <div><Divider/>
            <h2>Questions I have answered</h2>
            <Card.Group>{questions}</Card.Group>
            {this.renderMessage()}</div>    
        )
    }
    
}

export default MyAnswerList;