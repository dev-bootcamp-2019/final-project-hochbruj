import React, { Component } from 'react';
import { Divider, Card, Message, Segment } from 'semantic-ui-react'
import MyQuestionItem from './my_question_item'

class MyQuestionList extends Component {
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
        this.updateLog()
    }

    componentWillUnmount() {
        this._isMounted = false
    }

    updateLog = async () => {
        var log = await this.props.contract.getPastEvents('QuestionAsked',
            { filter: { asker: this.props.accounts[0]},
                fromBlock: 0,
                toBlock: 'latest'
            })
            
        log.sort((a,b) => b.blockNumber - a.blockNumber);
        this._isMounted && this.setState({ log })
    }

    renderMessage() {
        if (this.state.log.length === 0) {
            return (
                <Segment>
                <Message warning>You haven't asked any questions with this account.</Message>
                </Segment>
            )
        }
    }
    render() {
        if (!this.state.log) {
            return <div>Loading your asked questions...</div>;
          }

        const questions = this.state.log.map((item) => {
            return (
            <MyQuestionItem
                key={item.returnValues.dora}
                contract={item.returnValues.dora}
                web3={this.props.web3}
                accounts={this.props.accounts}
             />
            );
        });

        return (
            <div><Divider/>
            <h2>Questions I have asked</h2>
            <Card.Group>{questions}
            </Card.Group>
            {this.renderMessage()}
            </div>    
        )
    }
    
}

export default MyQuestionList;