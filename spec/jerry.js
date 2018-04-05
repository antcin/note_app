'use strict';
(function(exports) {
  function jerry(arrayOfTestObj) {
  let element = document.getElementById('test_div')
  let string = ''
  for (let i = 0;i < arrayOfTestObj.length;i++) {
    string += _testToHTML(arrayOfTestObj[i])
  }
  element.innerHTML = string
}

function _testToHTML(testObj) {
  let resultColour = testObj.test() ? 'green' : 'red'
  return `<p style="color:${resultColour}">${testObj.describe}:<br>${testObj.it}</p>`
}

exports.jerry = jerry
})(this)
