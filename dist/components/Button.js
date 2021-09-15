"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Button;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Button(_ref) {
  let {
    onClick,
    children
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("button", {
    style: {
      color: 'blue'
    },
    onClick: onClick
  }, children);
}