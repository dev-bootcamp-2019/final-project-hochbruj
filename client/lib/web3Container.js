import React from 'react'
import getWeb3 from "../src/utils/getWeb3";
import truffleContract from "truffle-contract";
import DoraFactory from '../src/contracts/DoraFactory'

export default class Web3Container extends React.Component {
  state = { web3: null, accounts: null, contract: null };

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
      
      this.setState({ web3, accounts, contract: instance});
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`
      );
      console.log(error);
    }
  };

  render () {
    const { web3, accounts, contract } = this.state
    return web3 && accounts 
      ? this.props.render({ web3, accounts, contract })
      : this.props.renderLoading()
  }
}