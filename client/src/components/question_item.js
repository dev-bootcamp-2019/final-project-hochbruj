import React, { Component } from 'react';
import { Card, Message } from 'semantic-ui-react'
import Dora from '../contracts/Dora'
import truffleContract from "truffle-contract";
import Answer from './answer'

class QuestionItem extends Component {
    constructor(props) {
        super(props);

        this.state = { question: null, contract: null, deadline: null };
    }


    componentDidMount = async () => {
        const DoraContract = truffleContract(Dora)
        DoraContract.setProvider(this.props.web3.currentProvider)
        const contract = await DoraContract.at(this.props.contract)
        const question = await contract.getSummary()
        const deadline = new Date(question[2] * 1000)
        this.setState({ question, contract, deadline })
     
      }
    
    renderAnswer() {
        if (this.state.deadline > Date.now()) {
            return (
                <Card.Content>
                <Answer
                    web3={this.props.web3}
                    contract={this.state.contract}
                    accounts={this.props.accounts}
                    question={this.state.question[0]}
                    setPage={this.props.setPage.bind(this)}/>  
                </Card.Content>  
            )
        }
    }

    renderMessage() {
        if (this.state.deadline > Date.now()) {
            return (
                <Card.Content>
                    <Message warning>To be answered by {this.state.deadline.toString()}</Message>
                </Card.Content>
            )
        } else {
            return (
                <Card.Content>
                    <Message error>The deadline for answer submission has been expired.</Message>
                </Card.Content>
            )
        }
    }

  
    
    render() {
        if (!this.state.question) {
            return <div>Loading question...</div>;
          }
        
        return (
                <Card fluid>
                    <Card.Content>
                    <Card.Header>{this.state.question[0]}</Card.Header>
                    <Card.Meta>Reward: {parseFloat(this.props.web3.utils.fromWei(this.state.question[1].toString(), 'Ether'))
                                .toFixed(2)} Ether</Card.Meta>
                    </Card.Content>
                   {this.renderAnswer()}
                   {this.renderMessage()}                 
                </Card>  
        )
    }
    
}

export default QuestionItem;