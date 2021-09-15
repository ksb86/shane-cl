"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useAxios = () => {
  const [error, setError] = (0, _react.useState)(false);
  const [pending, setPending] = (0, _react.useState)(false);
  const [data, setData] = (0, _react.useState)(null);
  const request = (0, _react.useCallback)(async config => {
    setPending(true);

    try {
      const {
        data: resData
      } = await (0, _axios.default)(config);
      setData(resData);
      setError(false);
    } catch (error) {
      setError(true);
    }

    setPending(false);
  }, []);
  return {
    pending,
    data,
    request,
    error
  };
};

var _default = useAxios;
exports.default = _default;