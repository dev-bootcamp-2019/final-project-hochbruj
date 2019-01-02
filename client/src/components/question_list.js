import React, { Component } from 'react';
import { Divider, Card } from 'semantic-ui-react'
import QuestionItem from './question_item'

class QuestionList extends Component {
    constructor(props) {
        super(props);

        this.state = { log: null };
    }


    componentDidMount = async () => {
        var log = await this.props.contract.getPastEvents('QuestionAsked',
            { fromBlock: 0,
               toBlock: 'latest'
            })
        
        log.sort((a,b) => b.blockNumber - a.blockNumber);

        this.setState({ log })
     
      }

    
    render() {
        if (!this.state.log) {
            return <div>Loading questions...</div>;
          }

        const questions = this.state.log.map((item) => {
            return (
            <QuestionItem
                key={item.returnValues.dora}
                contract={item.returnValues.dora}
                web3={this.props.web3}
                accounts={this.props.accounts}
             />
            );
        })

        if (questions.length > 0) {

        return (
            <div><Divider/>
            <h2>Questions asked by other users</h2>
            <Card.Group>{questions}</Card.Group></div>    
        )
        }

        else {
            return <div><Divider/></div>              
        }
    }
    
}

export default QuestionList;