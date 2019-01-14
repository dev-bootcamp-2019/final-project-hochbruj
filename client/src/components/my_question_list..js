import React, { Component } from 'react';
import { Divider, Card } from 'semantic-ui-react'
import MyQuestionItem from './my_question_item'

class MyQuestionList extends Component {
    constructor(props) {
        super(props);

        this.state = { log: null };
    }


    componentDidMount = async () => {
        this.updateLog()
      }
    
    componentDidUpdate = async () => {
        this.updateLog()
      }

    updateLog = async () => {
        var log = await this.props.contract.getPastEvents('QuestionAsked',
            { filter: { asker: this.props.accounts[0]},
                fromBlock: 0,
                toBlock: 'latest'
            })
            
        log.sort((a,b) => b.blockNumber - a.blockNumber);
        this.setState({ log })
    }

    
    render() {
        if (!this.state.log) {
            return <div>You haven't asked any questions yet with this logged in account...</div>;
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
            <h2>Questions which I have asked</h2>
            <Card.Group>{questions}</Card.Group></div>    
        )
    }
    
}

export default MyQuestionList;