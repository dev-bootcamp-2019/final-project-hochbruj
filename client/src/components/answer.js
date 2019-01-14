import React, { Component } from 'react';
import { Button, Modal, Form, Card } from 'semantic-ui-react'

class Answer extends Component {
    constructor(props) {
        super(props);

        this.state = { answer: '', loading: false };
    }
    render() {
        return ( 
                <Modal
                    trigger={<Button secondary onClick={this.handleOpen}>Post answer</Button>}
                >
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
                        <Button loading={!!this.state.loading} color='green' onClick={this.submit}>Submit answer</Button>
                    </Modal.Actions>

                </Modal>
        );
    }


    submit = async () => {
        try {
            this.setState({ loading: true})
            await this.props.contract.postAnswer(this.state.answer,
                {
                    from: this.props.accounts[0],
                })

            this.setState({ modalOpen: false, loading: false })
            this.props.setPage('myAnswers')
        } catch (err) {
            console.log(err)
            this.setState({ loading: false})
        }
    }


}

export default Answer;