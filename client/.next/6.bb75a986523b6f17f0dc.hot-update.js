webpackHotUpdate(6,{

/***/ 1327:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(86);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(87);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = __webpack_require__(41);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(15);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(16);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(46);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(17);

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = __webpack_require__(567);

var _Layout = __webpack_require__(1043);

var _Layout2 = _interopRequireDefault(_Layout);

var _getWeb = __webpack_require__(1060);

var _getWeb2 = _interopRequireDefault(_getWeb);

var _truffleContract = __webpack_require__(1243);

var _truffleContract2 = _interopRequireDefault(_truffleContract);

var _DoraFactory = __webpack_require__(1325);

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

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } /* eslint-disable camelcase, no-undef */ var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : module.exports; /* eslint-enable camelcase, no-undef */ if (typeof webpackExports === 'function') { __REACT_HOT_LOADER__.register(webpackExports, 'module.exports', "C:\\Users\\Jan\\bootcamp\\final-project-hochbruj\\client\\pages\\new.js"); return; } /* eslint-disable no-restricted-syntax */ for (var key in webpackExports) { /* eslint-enable no-restricted-syntax */ if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) { continue; } var namedExport = void 0; try { namedExport = webpackExports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "C:\\Users\\Jan\\bootcamp\\final-project-hochbruj\\client\\pages\\new.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(84)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/new")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5iYjc1YTk4NjUyM2I2ZjE3ZjBkYy5ob3QtdXBkYXRlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvbmV3LmpzPzYxOTRkZTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgRm9ybSwgQnV0dG9uLCBJbnB1dCwgTWVzc2FnZSB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0JztcclxuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCc7XHJcbmltcG9ydCBnZXRXZWIzIGZyb20gXCIuLi9zcmMvdXRpbHMvZ2V0V2ViM1wiO1xyXG5pbXBvcnQgdHJ1ZmZsZUNvbnRyYWN0IGZyb20gXCJ0cnVmZmxlLWNvbnRyYWN0XCI7XHJcbmltcG9ydCBEb3JhRmFjdG9yeSBmcm9tICcuLi9zcmMvY29udHJhY3RzL0RvcmFGYWN0b3J5J1xyXG5cclxuY2xhc3MgRG9yYU5ldyBleHRlbmRzIENvbXBvbmVudCB7XHJcblxyXG4gICAgc3RhdGUgPSB7IHdlYjM6IG51bGwsIGFjY291bnRzOiBudWxsLCBjb250cmFjdDogbnVsbCB9O1xyXG5cclxuICAgIGNvbXBvbmVudERpZE1vdW50ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICB0cnkge1xyXG4gICAgICAgIC8vIEdldCBuZXR3b3JrIHByb3ZpZGVyIGFuZCB3ZWIzIGluc3RhbmNlLlxyXG4gICAgICAgIGNvbnN0IHdlYjMgPSBhd2FpdCBnZXRXZWIzKCk7XHJcbiAgXHJcbiAgICAgICAgLy8gVXNlIHdlYjMgdG8gZ2V0IHRoZSB1c2VyJ3MgYWNjb3VudHMuXHJcbiAgICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xyXG4gIFxyXG4gICAgICAgIC8vIEdldCB0aGUgY29udHJhY3QgaW5zdGFuY2UuXHJcbiAgICAgICAgY29uc3QgQ29udHJhY3QgPSB0cnVmZmxlQ29udHJhY3QoRG9yYUZhY3RvcnkpO1xyXG4gICAgICAgIENvbnRyYWN0LnNldFByb3ZpZGVyKHdlYjMuY3VycmVudFByb3ZpZGVyKTtcclxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IGF3YWl0IENvbnRyYWN0LmRlcGxveWVkKCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHdlYjMsIGFjY291bnRzLCBjb250cmFjdDogaW5zdGFuY2V9KTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAvLyBDYXRjaCBhbnkgZXJyb3JzIGZvciBhbnkgb2YgdGhlIGFib3ZlIG9wZXJhdGlvbnMuXHJcbiAgICAgICAgYWxlcnQoXHJcbiAgICAgICAgICBgRmFpbGVkIHRvIGxvYWQgd2ViMywgYWNjb3VudHMsIG9yIGNvbnRyYWN0LiBDaGVjayBjb25zb2xlIGZvciBkZXRhaWxzLmBcclxuICAgICAgICApO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgICAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnN0YXRlLmFjY291bnRzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiA8ZGl2PkxvYWRpbmcgV2ViMywgYWNjb3VudHMsIGFuZCBjb250cmFjdC4uLjwvZGl2PjtcclxuICAgICAgICAgIH1cclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgICAgICAgICA8aDE+e3RoaXMuc3RhdGUuYWNjb3VudHN9PC9oMT5cclxuICAgICAgICAgICAgICAgIDxoMT5Eb3JhIC0gVGhlIGRlY2VudHJhbGl6ZWQgUXVvcmEgb24gRXRoZXJldW08L2gxPlxyXG4gICAgICAgICAgICAgICAgPHA+RG9yYSB3b3JrcyBzaW1saWFyIHRvIFF1b3JhIG9yIFN0YWNrb3ZlcmZsb3cuIFVzZXJzIGNhbiBwb3N0IHF1ZXN0aW9ucyB0byBiZSBhbnN3ZXJlZCBieSBvdGhlciB1c2Vycy4gPC9wPlxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICl9O1xyXG5cclxufVxyXG4gXHJcbiBcclxuICAgIFxyXG4vLyAgICAgcG9zdFF1ZXN0aW9uID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbi8vICAgICAgICAgY29uc3QgeyBhY2NvdW50cywgY29udHJhY3QgfSA9IHRoaXMuc3RhdGU7XHJcbi8vICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxvYWRpbmc6IHRydWUsIGVycm9yTWVzc2FnZTogJycgfSk7XHJcblxyXG4vLyAgICAgICAgIHRyeSB7XHJcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucXVlc3Rpb24pXHJcbi8vICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucmV3YXJkKVxyXG4vLyAgICAgICAgICAgICAvLyBhd2FpdCBjb250cmFjdC5jcmVhdGVEb3JhKCd0aGlzLnF1ZXN0aW9uJyxcclxuLy8gICAgICAgICAgICAgLy8gICAgICB7IGZyb206IGFjY291bnRzWzBdLFxyXG4vLyAgICAgICAgICAgICAvLyAgICAgICAgdmFsdWU6IDEwMDAwfSk7XHJcbi8vICAgICAgICAgICAgIC8vUm91dGVyLnB1c2hSb3V0ZSgnLycpO1xyXG4vLyAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4vLyAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZXJyb3JNZXNzYWdlOiBlcnIubWVzc2FnZSB9KVxyXG4vLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbi8vICAgICAgICAgfVxyXG5cclxuLy8gICAgICAgICB0aGlzLnNldFN0YXRlKHsgbG9hZGluZzogZmFsc2V9KTtcclxuXHJcblxyXG4vLyAgICAgfTtcclxuXHJcbi8vICAgICByZW5kZXIoKSB7XHJcbi8vICAgICAgICAgY29uc3QgYWRkcmVzcyA9IHRoaXMucHJvcHMuYWNjb3VudHNbMF1cclxuLy8gICAgICAgICBpZiAodGhpcy5wcm9wcy5lcnJvcikge1xyXG4vLyAgICAgICAgICAgICByZXR1cm4gPGRpdj50aGlzLnByb3BzLmVycm9yPC9kaXY+O1xyXG4vLyAgICAgICAgICAgfVxyXG4vLyAgICAgICAgIHJldHVybiAoXHJcbi8vICAgICAgICAgICAgIDxMYXlvdXQ+XHJcbi8vICAgICAgICAgICAgICAgICA8aDM+e2FkZHJlc3N9PC9oMz5cclxuLy8gICAgICAgICAgICAgICAgIDxoMz5XaGF0IGRvIHlvdSB3YW50IHRvIGtub3c/PC9oMz5cclxuLy8gICAgICAgICAgICAgICAgIDxGb3JtIG9uU3VibWl0PXt0aGlzLnBvc3RRdWVzdGlvbn0+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPEZvcm0uRmllbGQ+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlF1ZXN0aW9uPC9sYWJlbD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbi8vICAgICAgICAgICAgICAgICAgICAgIHR5cGU9J3RleHQnXHJcbi8vICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdQb3N0IGEgcHJlY2lzZSBxdWVzdGlvbi4uLidcclxuLy8gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUucXVlc3Rpb259XHJcbi8vICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtldmVudCA9PlxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoe3F1ZXN0aW9uOiBldmVudC50YXJnZXQudmFsdWV9KX1cclxuLy8gICAgICAgICAgICAgICAgICAgICAvPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8Rm9ybS5GaWVsZD5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlJld2FyZDwvbGFiZWw+XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT0nbnVtYmVyJ1xyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0VudGVyIHJld2FyZCBmb3IgYmVzdCBhbnN3ZXInXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cImV0aGVyXCJcclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsUG9zaXRpb249XCJyaWdodFwiXHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5yZXdhcmR9XHJcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZXZlbnQgPT5cclxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHtyZXdhcmQ6IGV2ZW50LnRhcmdldC52YWx1ZX0pfVxyXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDwvRm9ybS5GaWVsZD5cclxuLy8gICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZSBlcnJvciBoZWFkZXI9XCJPb3BzIVwiIGNvbnRlbnQ9e3RoaXMuc3RhdGUuZXJyb3JNZXNzYWdlfSAvPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gbG9hZGluZz17ISF0aGlzLnN0YXRlLmxvYWRpbmd9IHByaW1hcnk+UG9zdCBxdWVzdGlvbjwvQnV0dG9uPlxyXG4vLyAgICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4vLyAgICAgICAgICAgICAgICAge3RoaXMuc3RhdGUucmV3YXJkICYmXHJcbi8vICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZSB3YXJuaW5nPlxyXG4vLyAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2UuSGVhZGVyPllvdXIgdG90YWwgcGF5bWVudCBpcyB7KHRoaXMuc3RhdGUucmV3YXJkKjEuMSkudG9GaXhlZCgyKX0gZXRoZXIgbm93LiB7KHRoaXMuc3RhdGUucmV3YXJkKjAuMSkudG9GaXhlZCgyKX0gZXRoZXIgd2lsbCBiZSByZXR1cm5lZCB0byB5b3VyIGFjY291bnQgd2hlbiB5b3UgcGljayB0aGUgYmVzdCBhbnN3ZXIuPC9NZXNzYWdlLkhlYWRlcj5cclxuLy8gICAgICAgICAgICAgICAgPC9NZXNzYWdlPiBcclxuLy8gICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgPC9MYXlvdXQ+XHJcbi8vICAgICAgICAgKVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG5leHBvcnQgZGVmYXVsdCBEb3JhTmV3XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL25ldy5qcz9lbnRyeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7OztBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBREE7QUFIQTtBQUFBO0FBTUE7QUFDQTtBQURBO0FBTkE7QUFDQTtBQVFBO0FBVEE7QUFDQTtBQVNBO0FBVkE7QUFXQTtBQUNBO0FBREE7QUFYQTtBQUNBO0FBWUE7QUFiQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBZUE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBcEJBO0FBQUE7QUFBQTs7QUFBQTtBQUFBOzs7Ozs7QUF3QkE7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQURBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=