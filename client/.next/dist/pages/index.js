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

var _routes = require('../routes');

var _getWeb = require('../src/utils/getWeb3');

var _getWeb2 = _interopRequireDefault(_getWeb);

var _truffleContract = require('truffle-contract');

var _truffleContract2 = _interopRequireDefault(_truffleContract);

var _DoraFactory = require('../src/contracts/DoraFactory');

var _DoraFactory2 = _interopRequireDefault(_DoraFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Users\\Jan\\bootcamp\\final-project-hochbruj\\client\\pages\\index.js?entry';


var Dora = function (_Component) {
  (0, _inherits3.default)(Dora, _Component);

  function Dora() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, Dora);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Dora.__proto__ || (0, _getPrototypeOf2.default)(Dora)).call.apply(_ref, [this].concat(args))), _this), _this.state = { web3: null, accounts: null, contract: null }, _this.componentDidMount = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
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

  (0, _createClass3.default)(Dora, [{
    key: 'render',
    value: function render() {
      if (!this.state.accounts) {
        return _react2.default.createElement('div', {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 38
          }
        }, 'Loading Web3, accounts, and contract...');
      }
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41
        }
      }, _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, this.state.accounts), _react2.default.createElement('h1', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }, 'Dora - The decentralized Quora on Ethereum'), _react2.default.createElement('p', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        }
      }, 'Dora works simliar to Quora or Stackoverflow. Users can post questions to be answered by other users. '), _react2.default.createElement(_routes.Link, { route: '/new', __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { content: 'Ask question', primary: true, __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }))));
    }
  }]);

  return Dora;
}(_react.Component);

exports.default = Dora;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzXFxpbmRleC5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkJ1dHRvbiIsIkxheW91dCIsIkxpbmsiLCJnZXRXZWIzIiwidHJ1ZmZsZUNvbnRyYWN0IiwiRG9yYUZhY3RvcnkiLCJEb3JhIiwic3RhdGUiLCJ3ZWIzIiwiYWNjb3VudHMiLCJjb250cmFjdCIsImNvbXBvbmVudERpZE1vdW50IiwiZXRoIiwiZ2V0QWNjb3VudHMiLCJDb250cmFjdCIsInNldFByb3ZpZGVyIiwiY3VycmVudFByb3ZpZGVyIiwiZGVwbG95ZWQiLCJpbnN0YW5jZSIsInNldFN0YXRlIiwiYWxlcnQiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFTOzs7O0FBQ2hCLEFBQVM7O0FBQ1QsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQVMsQUFBWTs7QUFDckIsQUFBTyxBQUFhOzs7O0FBQ3BCLEFBQU87Ozs7QUFDUCxBQUFPLEFBQWlCOzs7Ozs7Ozs7SUFHbEIsQTs7Ozs7Ozs7Ozs7Ozs7O3dNLEFBQ0YsUUFBUSxFQUFFLE1BQUYsQUFBUSxNQUFNLFVBQWQsQUFBd0IsTUFBTSxVQUFVLEEsQUFBeEMsY0FFUixBLDZGQUFvQixtQkFBQTtvQ0FBQTtvRUFBQTtrQkFBQTsyQ0FBQTtpQkFBQTs4QkFBQTs4QkFBQTtxQkFBQSxBQUdHOztpQkFBYjtBQUhVLDhCQUFBOzhCQUFBO3FCQU1PLEtBQUEsQUFBSyxJQU5aLEFBTU8sQUFBUzs7aUJBQTFCO0FBTlUsa0NBUWhCOztBQUNNO0FBVFUseUJBQUEsQUFTQyxBQUFnQixBQUNqQzs7dUJBQUEsQUFBUyxZQUFZLEtBVkwsQUFVaEIsQUFBMEI7OEJBVlY7cUJBV08sU0FYUCxBQVdPLEFBQVM7O2lCQUExQjtBQVhVLGtDQWFoQjs7b0JBQUEsQUFBSyxTQUFTLEVBQUUsTUFBRixNQUFRLFVBQVIsVUFBa0IsVUFiaEIsQUFhaEIsQUFBYyxBQUE0Qjs4QkFiMUI7QUFBQTs7aUJBQUE7OEJBQUE7OENBZWhCOztBQUNBO29CQUdBO3NCQUFBLEFBQVEsYUFuQlE7O2lCQUFBO2lCQUFBOzhCQUFBOztBQUFBOytCQUFBO0E7Ozs7OzZCQXVCWCxBQUNMO1VBQUksQ0FBQyxLQUFBLEFBQUssTUFBVixBQUFnQixVQUFVLEFBQ3RCOytCQUFPLGNBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxTQUFBLEVBQVAsQUFBTyxBQUNSO0FBQ0g7NkJBQ0ksQUFBQzs7b0JBQUQ7c0JBQUEsQUFDSTtBQURKO0FBQUEsT0FBQSxrQkFDSSxjQUFBOztvQkFBQTtzQkFBQSxBQUFLO0FBQUw7QUFBQSxjQUFLLEFBQUssTUFEZCxBQUNJLEFBQWdCLEFBQ2hCLDJCQUFBLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUZKLEFBRUksQUFDQSwrREFBQSxjQUFBOztvQkFBQTtzQkFBQTtBQUFBO0FBQUEsU0FISixBQUdJLEFBQ0QsMkhBQUEsQUFBQyw4QkFBSyxPQUFOLEFBQVk7b0JBQVo7c0JBQUEsQUFDQztBQUREO3lCQUNDLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0k7QUFESjtBQUFBLHlCQUNJLEFBQUMseUNBQU8sU0FBUixBQUFnQixnQkFBZSxTQUEvQjtvQkFBQTtzQkFQWixBQUNJLEFBSUcsQUFDQyxBQUNJLEFBS1Y7QUFMVTs7Ozs7O0FBckNELEEsQUE4Q25COztrQkFBQSxBQUFlIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6IkM6L1VzZXJzL0phbi9ib290Y2FtcC9maW5hbC1wcm9qZWN0LWhvY2hicnVqL2NsaWVudCJ9