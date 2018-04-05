'use strict';
(function(exports) {
  function jerry(unitTests, featureTests) {
    let string = '<h3>UNIT TESTS</h3>'
    for (var i = 0; i < unitTests.length; i++) {
      string += _testToHTML(unitTests[i])
    }
    string += '<h3>FEATURE TESTS</h3>'
    for (var i = 0; i < featureTests.length; i++) {
      createTestEnviroment()
      string += _testToHTML(featureTests[i])
    }

    let element = document.getElementById('test_div')
    element.innerHTML = string
  }

  function _testToHTML(testObj) {
    let resultColour = testObj.test() ? 'green' : 'red'
    return `<p style="color:${resultColour}">${testObj.describe}:<br>${testObj.it}</p>`
  }

  function createTestEnviroment() {
    let testNotebook = new Notebook();
    testNotebook.create('test note')
    iFace = new Interface(testNotebook);
    iFace.show();

  }

  exports.jerry = jerry
})(this)
