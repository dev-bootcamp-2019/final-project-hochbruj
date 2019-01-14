import React, { Component } from "react";
import DoraFactory from './contracts/DoraFactory'
import getWeb3 from "./utils/getWeb3";
import truffleContract from "truffle-contract";
import { Container, Menu } from 'semantic-ui-react'
import "./App.css";
import Home from './components/home'
import MyAnswerList from './components/my_answer_list'
import MyQuestionList from './components/my_question_list.'
 
class App extends Component {
  state = { storageValue: 0, web3: null, accounts: null, contract: null, activeItem: 'dora' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  setPage(name) { this.setState({ activeItem: name }) }

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // Get the contract instance.
      const Contract = truffleContract(DoraFactory);
      Contract.setProvider(web3.currentProvider);
      const instance = await Contract.deployed();
      
      this.setState({ web3, accounts, contract: instance}, this.setEventMonitors);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      );
      console.log(error);
    }
  };

  setEventMonitors = async () => {
    window.ethereum.on('accountsChanged', this.changeAccount);
  };

  changeAccount = async (accounts) => {
    console.log("Account change detected :" + accounts);
    this.setState({accounts});
  };


  renderPage() {
    const { activeItem } = this.state
    if (activeItem === 'dora')
      return <Home
      accounts={this.state.accounts}
      web3={this.state.web3}
      contract={this.state.contract}
      setPage={this.setPage.bind(this)}
      />
    if (activeItem === 'myAnswers')
      return <MyAnswerList
      accounts={this.state.accounts}
      web3={this.state.web3}
      contract={this.state.contract}
      />
    if (activeItem === 'myQuestions')
      return <MyQuestionList
      accounts={this.state.accounts}
      web3={this.state.web3}
      contract={this.state.contract}
      />  
  }

  render() {
     if (!this.state.web3) {
       return <div>Loading Web3, accounts, and contract...</div>;
     }

    const { activeItem } = this.state

    return (
      <div className="App">
       <Container>
       <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.0/dist/semantic.min.css"></link>
       <Menu>
        <Menu.Item
          name='dora'
          active={activeItem === 'dora'}
          onClick={this.handleItemClick}
        >
          Dora
        </Menu.Item>

        <Menu.Item 
          name='myQuestions'
          active={activeItem === 'myQuestions'}
          onClick={this.handleItemClick}>
          My questions
        </Menu.Item>

        <Menu.Item
          name='myAnswers'
          active={activeItem === 'myAnswers'}
          onClick={this.handleItemClick}
        >
          My answers
        </Menu.Item>

        <Menu.Menu position='right'>
            <Menu.Item>
                Your account: {this.state.accounts[0]}
            </Menu.Item>
          </Menu.Menu>
      </Menu>
     
      {this.renderPage()}
        </Container>
      </div>
    );
  }
}

export default App;
