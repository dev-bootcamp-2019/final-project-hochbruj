import React, { Component } from 'react';
import { Card, Table, Message, Button } from 'semantic-ui-react'
import Dora from '../contracts/Dora'
import truffleContract from "truffle-contract"
import PickWinner from './pick_winner'

class MyQuestionItem extends Component {
    constructor(props) {
        super(props);

        this.state = { question: null,
                         contract: null,
                          answers: null,
                            deadline: null,
                             loading: false };
    }


    componentDidMount = async () => {
        const DoraContract = truffleContract(Dora)
        DoraContract.setProvider(this.props.web3.currentProvider)
        const contract = await DoraContract.at(this.props.contract)
        const question = await contract.getSummary()
        const deadline = new Date(question[2] * 1000)

        const answers = await Promise.all(
            Array(parseInt(question[4]))
                .fill()
                .map((element, index) => {
                    return contract.answers(index)
            })
        );

        this.setState({ question, contract, answers, deadline })

    }

    redeem = async () => {
        try {
            this.setState({ loading: true})
            await this.state.contract.withdrawDepositReward({from: this.props.accounts[0]})

            window.location.reload()
        } catch (err) {
            this.setState({ loading: false})
            console.log(err)
        }
    }
    

    renderMessage() {
        if (this.state.question[3].toNumber() === 2) {
            return (<Message success>You picked a winner and your deposit is credited to your account</Message>)
        }
        if (this.state.deadline > Date.now()) {
            return (<Message warning>You can pick the best answer after {this.state.deadline.toString()}.</Message>)
        }
        if (this.state.deadline < Date.now() && this.state.question[3].toNumber() === 1) {
            return (<Message warning>Please pick a winner!</Message>)
        }
        if (this.state.deadline < Date.now() && this.state.question[3].toNumber() === 0) {
            return (<Button secondary loading={!!this.state.loading} onClick={this.redeem}>Transfer deposit and reward to my account!</Button>)
        }

        if (this.state.deadline < Date.now() && this.state.question[3].toNumber() === 3) {
            return  (<Message success>The reward (and deposit) has been transferred.</Message>)
        }

    }
        
    renderCell(index) {
        if (this.state.deadline < Date.now() && this.state.question[3].toNumber() === 1) {
            return (
                <PickWinner
                    answerIndex={index}
                    contract={this.state.contract}
                    accounts={this.props.accounts} />
            )
        }
        if (this.state.deadline > Date.now()) {
            return (
                <Button disabled color="green">
                Best answer
            </Button>)

        }

        if (this.state.question[3].toNumber() !== 1
             && this.state.question[5].toString() === index.toString()) {
            return (
                <Message success>
                Winner 
            </Message>)
        }
    }
    
    renderRows() {
        if (this.state.answers.length >0) {
            return this.state.answers.map((answer, index) => {
                return (
                <Table.Row key={index} >
                    <Table.Cell>{answer[0]}</Table.Cell>
                    <Table.Cell collapsing>
                    {this.renderCell(index)}
                </Table.Cell>
                </Table.Row> )

        })
        } else {
            return (
                <Table.Row>
                    <Table.Cell>Nobody has answered your question yet.</Table.Cell>
                </Table.Row>
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
                    <Card.Content>
                    <Card.Header>Answers</Card.Header>
                    <Table>
                        <Table.Body>
                            {this.renderRows()}
                        </Table.Body>
                    </Table>
                    </Card.Content>
                    <Card.Content extra>
                    {this.renderMessage()}
                    </Card.Content>
                </Card>  
        )
    }
    
}

export default MyQuestionItem;