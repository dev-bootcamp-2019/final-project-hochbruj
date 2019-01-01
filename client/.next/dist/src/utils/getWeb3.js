"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

var _web3 = require("web3");

var _web4 = _interopRequireDefault(_web3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _this = undefined;

var getWeb3 = function getWeb3() {
  return new _promise2.default(function (resolve, reject) {
    // Wait for loading completion to avoid race conditions with web3 injection timing.
    window.addEventListener("load", (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
      var web3, _web, provider, _web2;

      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!window.ethereum) {
                _context.next = 13;
                break;
              }

              web3 = new _web4.default(window.ethereum);
              _context.prev = 2;
              _context.next = 5;
              return window.ethereum.enable();

            case 5:
              // Acccounts now exposed
              resolve(web3);
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](2);

              reject(_context.t0);

            case 11:
              _context.next = 14;
              break;

            case 13:
              // Legacy dapp browsers...
              if (window.web3) {
                // Use Mist/MetaMask's provider.
                _web = window.web3;

                console.log("Injected web3 detected.");
                resolve(_web);
              }
              // Fallback to localhost; use dev console port by default...
              else {
                  provider = new _web4.default.providers.HttpProvider("http://127.0.0.1:9545");
                  _web2 = new _web4.default(provider);

                  console.log("No web3 instance injected, using Local web3.");
                  resolve(_web2);
                }

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this, [[2, 8]]);
    })));
  });
};

exports.default = getWeb3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyY1xcdXRpbHNcXGdldFdlYjMuanMiXSwibmFtZXMiOlsiV2ViMyIsImdldFdlYjMiLCJyZXNvbHZlIiwicmVqZWN0Iiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV0aGVyZXVtIiwid2ViMyIsImVuYWJsZSIsImNvbnNvbGUiLCJsb2ciLCJwcm92aWRlciIsInByb3ZpZGVycyIsIkh0dHBQcm92aWRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTzs7Ozs7Ozs7QUFFUCxJQUFNLFVBQVUsU0FBVixBQUFVLFVBQUE7K0JBQ0YsVUFBQSxBQUFDLFNBQUQsQUFBVSxRQUFXLEFBQy9CO0FBQ0E7V0FBQSxBQUFPLGlCQUFQLEFBQXdCLGlGQUFRLG1CQUFBO2dDQUFBOztvRUFBQTtrQkFBQTsyQ0FBQTtpQkFBQTttQkFFMUIsT0FGMEIsQUFFbkIsVUFGbUI7Z0NBQUE7QUFBQTtBQUd0Qjs7QUFIc0IscUJBR2YsQUFBSSxrQkFBSyxPQUhNLEFBR2YsQUFBZ0I7OEJBSEQ7OEJBQUE7cUJBTXBCLE9BQUEsQUFBTyxTQU5hLEFBTXBCLEFBQWdCOztpQkFDdEI7QUFDQTtzQkFSMEIsQUFRMUIsQUFBUTs4QkFSa0I7QUFBQTs7aUJBQUE7OEJBQUE7OENBVTFCOzs4QkFWMEI7O2lCQUFBOzhCQUFBO0FBQUE7O2lCQWE5QjtBQUNLO2tCQUFJLE9BQUosQUFBVyxNQUFNLEFBQ3BCO0FBQ007QUFGYyx1QkFFUCxPQUZPLEFBRUEsQUFDcEI7O3dCQUFBLEFBQVEsSUFBUixBQUFZLEFBQ1o7d0JBQUEsQUFBUSxBQUNUO0FBQ0Q7QUFOSzttQkFPQSxBQUNHO0FBREgsNkJBQ2MsSUFBSSxjQUFBLEFBQUssVUFBVCxBQUFtQixhQURqQyxBQUNjLEFBQ2YsQUFFSTtBQUpILDBCQUlVLEFBQUksa0JBSmQsQUFJVSxBQUFTLEFBQ3RCOzswQkFBQSxBQUFRLElBQVIsQUFBWSxBQUNaOzBCQUFBLEFBQVEsQUFDVDtBQTVCNkI7O2lCQUFBO2lCQUFBOzhCQUFBOztBQUFBOzhCQUFBO0FBQWhDLEFBOEJEO0FBakNhLEFBQ2QsR0FBQTtBQURGLEFBbUNBOztrQkFBQSxBQUFlIiwiZmlsZSI6ImdldFdlYjMuanMiLCJzb3VyY2VSb290IjoiQzovVXNlcnMvSmFuL2Jvb3RjYW1wL2ZpbmFsLXByb2plY3QtaG9jaGJydWovY2xpZW50In0=