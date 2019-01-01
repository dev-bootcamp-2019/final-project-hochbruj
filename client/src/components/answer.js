import React, { Component } from 'react';
import { Button, Modal, Form } from 'semantic-ui-react'

class Answer extends Component {
    constructor(props) {
        super(props);

        this.state = { answer: '', modalOpen: false };
    }
    render() {
        return (
                <Modal
                    trigger={<Button secondary onClick={this.handleOpen}>Post answer</Button>}
                    centered={false}
                    open={this.state.modalOpen}
                    onClose={this.handleClose}>
                    <Modal.Header>{this.props.question}</Modal.Header>
                    <Modal.Content>
                        <Modal.Description>
                            <Form>
                                <Form.TextArea
                                    label='Your answer'
                                    placeholder='Provide a detailed answer...'
                                    onChange={event => this.setState({ answer: event.target.value })} />
                            </Form>
                        </Modal.Description>
                        
                    </Modal.Content>
                    <Modal.Actions>
                        <Button color='green' onClick={this.handleClose}>Submit answer</Button>
                    </Modal.Actions>

                </Modal>
        );
    }

    handleOpen = () => this.setState({ modalOpen: true })

    handleClose = async () => {
        try {
            await this.props.contract.postAnswer(this.state.answer,
                {
                    from: this.props.accounts[0],
                })

            this.setState({ modalOpen: false })
            window.location.reload()
        } catch (err) {
            console.log(err)
        }
    }


}

export default Answer;