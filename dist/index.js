'use strict';

var _prompt = require('prompt');

var _prompt2 = _interopRequireDefault(_prompt);

var _child_process = require('child_process');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_prompt2.default.start();
_prompt2.default.message = "";
_prompt2.default.get([{
  name: "hackName",
  description: "Enter userhack's name",
  type: 'string',
  message: "Please don't use spaces"
}], function (err, result) {
  console.log(result.hackName);
  (0, _child_process.exec)('npx create-react-app hacks/' + result.hackName, function (err, stdout, stderr) {
    if (err) {
      return;
    }
    console.log(stdout);
    console.log(stderr);
  });
});
