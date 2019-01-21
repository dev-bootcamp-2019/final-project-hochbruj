import React, { Component } from 'react';
import { Button, Modal, Form, Message } from 'semantic-ui-react'

class NewQuestion extends Component {
    constructor(props) {
        super(props);

        this.state = { question: '', reward: '', loading: false };
    }
    render() {
        return (
                <Modal
                    trigger={<Button primary>Ask Question</Button>}>
                    <Modal.Header>What do you want to know?</Modal.Header>
                    <Modal.Content>
                        <Modal.Description>
                            <Form>
                                <Form.TextArea
                                    label='Question'
                                    placeholder='Keep your question short and to the point'
                                    onChange={event => this.setState({ question: event.target.value })} />
                                <Form.Input
                                    type='number'
                                    placeholder='Enter reward for best answer'
                                    label="Reward in Ether"
                                    onChange={event => this.setState({ reward: event.target.value })} />
                            </Form>
                        </Modal.Description>
                        {this.state.reward &&
                            <Message warning>
                                <Message.Header>
                                    <li>Deposit (returned when you pick best answer): {(this.state.reward * 0.1).toFixed(4)} Ether</li>
                                    <li>Total payment: {(this.state.reward * 1.1).toFixed(4)} Ether</li>
                                    </Message.Header>
                            </Message>
                        }
                    </Modal.Content>
                    <Modal.Actions>
                        <Button loading={!!this.state.loading} color='green' onClick={this.postQuestion}>Add Question</Button>
                    </Modal.Actions>

                </Modal>
        );
    }

    postQuestion = async () => {
        try {
            const value = Math.round((this.props.web3.utils.toWei(this.state.reward, 'ether') * 1.1))
            this.setState({ loading: true})
            await this.props.contract.createDora(this.state.question,
                {
                    from: this.props.accounts[0],
                    value: value
                })
            this.setState({ loading: false})
            this.props.setPage('myQuestions')
 //           window.location.reload()
        } catch (err) {
            console.log(err)
            this.setState({ loading: false})
        }
          

    }


}

export default NewQuestion;