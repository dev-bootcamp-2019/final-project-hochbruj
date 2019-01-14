import React, { Component } from 'react';
import { Card, Message, Button } from 'semantic-ui-react'
import Dora from '../contracts/Dora'
import truffleContract from "truffle-contract";


class AnswerItem extends Component {
    constructor(props) {
        super(props);

        this.state = { question: null, answer: null, contract: null, loading: false };
    }


    componentDidMount = async () => {
        const DoraContract = truffleContract(Dora)
        DoraContract.setProvider(this.props.web3.currentProvider)
        const contract = await DoraContract.at(this.props.contract)
        this.setState({ contract })
        const question = await contract.getSummary()
        console.log(question)
        const answer = await contract.answers(this.props.answerIndex)
        this.setState({ question, answer })

    }

    renderMessage() {
        if (this.state.question[3].toNumber() === 1) {
            return (<Message warning>Thanks! We'll let you know if your answer is picked as the best one.</Message>)
        }
        if (this.state.question[3].toNumber() === 2 && this.state.question[5].toString() === this.props.answerIndex.toString()) {
            return (<Message success>Congratulations, your answer has been chosen! Please claim your reward.</Message>)
        }
        if (this.state.question[3].toNumber() === 2 && this.state.question[5].toString() !== this.props.answerIndex.toString()) {
            return (<Message warning>Sorry, your answer has not been chosen!</Message>)
        }
        if (this.state.question[3].toNumber() === 3 && this.state.question[5].toString() === this.props.answerIndex.toString()) {
            return (<Message success>The reward has been transferred to your account</Message>)
        }

    }

    renderRedeem() {
        if (this.state.question[3].toNumber() === 2 && this.state.question[5].toString() === this.props.answerIndex.toString()) {
            return (<Card.Content>
                        <Button loading={!!this.state.loading} color='green' onClick={this.redeem}>
                            Transfer {parseFloat(this.props.web3.utils.fromWei(this.state.question[1].toString(), 'Ether'))
                    .toFixed(2)} Ether to my account
                        </Button>
                    </Card.Content>)
        }
    }

    redeem = async () => {
        try {
            this.setState({ loading: true})
            await this.state.contract.withdrawReward({from: this.props.accounts[0]})

            window.location.reload()
        } catch (err) {
            console.log(err)
            this.setState({ loading: false})
        }
    }


    render() {
        if (!this.state.question) {
            return <div>Loading your answered questions...</div>;
        }
        return (
            <Card fluid>
                <Card.Content>
                    <Card.Header>{this.state.question[0]}</Card.Header>
                    <Card.Meta>Reward: {parseFloat(this.props.web3.utils.fromWei(this.state.question[1].toString(), 'Ether'))
                        .toFixed(2)} Ether</Card.Meta>
                </Card.Content>
                <Card.Content>
                    <Card.Meta>Your answer:<br />{this.state.answer[0]}
                    </Card.Meta>
                </Card.Content>
                <Card.Content>
                    {this.renderMessage()}
                </Card.Content>
                    {this.renderRedeem()}
            </Card>
        )
    }

}

export default AnswerItem;