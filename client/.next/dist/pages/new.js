'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _Layout = require('../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _getWeb = require('../src/utils/getWeb3');

var _getWeb2 = _interopRequireDefault(_getWeb);

var _truffleContract = require('truffle-contract');

var _truffleContract2 = _interopRequireDefault(_truffleContract);

var _DoraFactory = require('../src/contracts/DoraFactory');

var _DoraFactory2 = _interopRequireDefault(_DoraFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Jan\\bootcamp\\final-project-hochbruj\\client\\pages\\new.js?entry';


var DoraNew = function (_Component) {
  (0, _inherits3.default)(DoraNew, _Component);

  function DoraNew() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, DoraNew);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = DoraNew.__proto__ || (0, _getPrototypeOf2.default)(DoraNew)).call.apply(_ref, [this].concat(args))), _this), _this.state = { web3: null, accounts: null, contract: null }, _this.componentDidMount = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var web3, accounts, Contract, instance;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return (0, _getWeb2.default)();

            case 3:
              web3 = _context.sent;
              _context.next = 6;
              return web3.eth.getAccounts();

            case 6:
              accounts = _context.sent;

              // Get the contract instance.
              Contract = (0, _truffleContract2.default)(_DoraFactory2.default);

              Contract.setProvider(web3.currentProvider);
              _context.next = 11;
              return Contract.deployed();

            case 11:
              instance = _context.sent;

              _this.setState({ web3: web3, accounts: accounts, contract: instance });
              _context.next = 19;
              break;

            case 15:
              _context.prev = 15;
              _context.t0 = _context['catch'](0);

              // Catch any errors for any of the above operations.
              alert('Failed to load web3, accounts, or contract. Check console for details.');
              console.log(_context.t0);

            case 19:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, _this2, [[0, 15]]);
    })), _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(DoraNew, [{
    key: 'render',
    value: function render() {
      if (!this.state.accounts) {
        return _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 37
          }
        }, 'Loading Web3, accounts, and contract...');
      }
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, this.state.accounts), _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, 'Dora - The decentralized Quora on Ethereum'), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, 'Dora works simliar to Quora or Stackoverflow. Users can post questions to be answered by other users. '));
    }
  }]);

  return DoraNew;
}(_react.Component);

//     postQuestion = async (event) => {
//         const { accounts, contract } = this.state;
//         this.setState({ loading: true, errorMessage: '' });

//         try {
//             console.log(this.question)
//             console.log(this.reward)
//             // await contract.createDora('this.question',
//             //      { from: accounts[0],
//             //        value: 10000});
//             //Router.pushRoute('/');
//         } catch (err) {
//             this.setState({ errorMessage: err.message })
//             console.log(err)
//         }

//         this.setState({ loading: false});


//     };

//     render() {
//         const address = this.props.accounts[0]
//         if (this.props.error) {
//             return <div>this.props.error</div>;
//           }
//         return (
//             <Layout>
//                 <h3>{address}</h3>
//                 <h3>What do you want to know?</h3>
//                 <Form onSubmit={this.postQuestion}>
//                     <Form.Field>
//                     <label>Question</label>
//                      <Input
//                      type='text'
//                      placeholder='Post a precise question...'
//                      value={this.state.question}
//                      onChange={event =>
//                              this.setState({question: event.target.value})}
//                     />
//                     </Form.Field>
//                     <Form.Field>
//                         <label>Reward</label>
//                         <Input
//                             type='number'
//                             placeholder='Enter reward for best answer'
//                             label="ether"
//                             labelPosition="right"
//                             value={this.state.reward}
//                             onChange={event =>
//                              this.setState({reward: event.target.value})}
//                         />
//                     </Form.Field>
//                     <Message error header="Oops!" content={this.state.errorMessage} />
//                     <Button loading={!!this.state.loading} primary>Post question</Button>
//                 </Form>
//                 {this.state.reward &&
//                    <Message warning>
//                    <Message.Header>Your total payment is {(this.state.reward*1.1).toFixed(2)} ether now. {(this.state.reward*0.1).toFixed(2)} ether will be returned to your account when you pick the best answer.</Message.Header>
//                </Message> 
//                 }
//             </Layout>
//         )
//     }
// }

exports.default = DoraNew;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxuZXcuanMiXSwibmFtZXMiOlsiUmVhY3QiLCJDb21wb25lbnQiLCJGb3JtIiwiQnV0dG9uIiwiSW5wdXQiLCJNZXNzYWdlIiwiTGF5b3V0IiwiZ2V0V2ViMyIsInRydWZmbGVDb250cmFjdCIsIkRvcmFGYWN0b3J5IiwiRG9yYU5ldyIsInN0YXRlIiwid2ViMyIsImFjY291bnRzIiwiY29udHJhY3QiLCJjb21wb25lbnREaWRNb3VudCIsImV0aCIsImdldEFjY291bnRzIiwiQ29udHJhY3QiLCJzZXRQcm92aWRlciIsImN1cnJlbnRQcm92aWRlciIsImRlcGxveWVkIiwiaW5zdGFuY2UiLCJzZXRTdGF0ZSIsImFsZXJ0IiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBUzs7OztBQUNoQixBQUFTLEFBQU0sQUFBUSxBQUFPOztBQUM5QixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU87Ozs7QUFDUCxBQUFPLEFBQWlCOzs7Ozs7Ozs7SSxBQUVsQjs7Ozs7Ozs7Ozs7Ozs7OzhNQUVGLEEsUUFBUSxFQUFFLE1BQUYsQUFBUSxNQUFNLFVBQWQsQUFBd0IsTUFBTSxVQUFVLEEsQUFBeEMsY0FFUixBLDZGQUFvQixtQkFBQTtvQ0FBQTtvRUFBQTtrQkFBQTsyQ0FBQTtpQkFBQTs4QkFBQTs4QkFBQTtxQkFBQSxBQUdHOztpQkFBYjtBQUhVLDhCQUFBOzhCQUFBO3FCQU1PLEtBQUEsQUFBSyxJQU5aLEFBTU8sQUFBUzs7aUJBQTFCO0FBTlUsa0NBUWhCOztBQUNNO0FBVFUseUJBQUEsQUFTQyxBQUFnQixBQUNqQzs7dUJBQUEsQUFBUyxZQUFZLEtBVkwsQUFVaEIsQUFBMEI7OEJBVlY7cUJBV08sU0FYUCxBQVdPLEFBQVM7O2lCQUExQjtBQVhVLGtDQWFoQjs7b0JBQUEsQUFBSyxTQUFTLEVBQUUsTUFBRixNQUFRLFVBQVIsVUFBa0IsVUFiaEIsQUFhaEIsQUFBYyxBQUE0Qjs4QkFiMUI7QUFBQTs7aUJBQUE7OEJBQUE7OENBZWhCOztBQUNBO29CQUdBO3NCQUFBLEFBQVEsYUFuQlE7O2lCQUFBO2lCQUFBOzhCQUFBOztBQUFBOytCQUFBO0E7Ozs7OzZCQXVCWCxBQUNMO1VBQUksQ0FBQyxLQUFBLEFBQUssTUFBVixBQUFnQixVQUFVLEFBQ3RCOytCQUFPLGNBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxTQUFBLEVBQVAsQUFBTyxBQUNSO0FBQ0g7NkJBQ0ksQUFBQzs7b0JBQUQ7c0JBQUEsQUFDSTtBQURKO0FBQUEsT0FBQSxrQkFDSSxjQUFBOztvQkFBQTtzQkFBQSxBQUFLO0FBQUw7QUFBQSxjQUFLLEFBQUssTUFEZCxBQUNJLEFBQWdCLEFBQ2hCLDJCQUFBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUZKLEFBRUksQUFDQSwrREFBQSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FKUixBQUNJLEFBR0ksQUFJTjs7Ozs7QSxBQXZDWTs7QUE2Q3RCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEFBRUE7O2tCQUFBLEFBQWUiLCJmaWxlIjoibmV3LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L1VzZXJzL0phbi9ib290Y2FtcC9maW5hbC1wcm9qZWN0LWhvY2hicnVqL2NsaWVudCJ9