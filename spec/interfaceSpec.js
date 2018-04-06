'use strict';
(function(exports) {
  const SHORT_LENGTH = 20;
  const TEST_NOTE = 'hello, my name is Ricky and this is a cool test';

  let interfaceTests =
  [
    {
     describe: '.abbreviate',
     it: 'returns shorter version of a given string if more than ' + SHORT_LENGTH,
     test: function() {
       let iFace = new Interface();
       return (iFace.abbreviate(TEST_NOTE) == "hello, my name is Ri...");
     }
    },
    {
      describe: '.abbreviate',
      it: 'returns same string if shorter than '+ SHORT_LENGTH,
      test: function() {
        let iFace = new Interface();
        return (iFace.abbreviate('hello') == 'hello');
      }
    },
    // example of wrapper test
    // {
    //  describe: '.create',
    //  it: 'calls .create on the notebook',
    //  test: function() {
    //    var count = 0
    //    var notebook = new Notebook
    //    var iFace = new Interface(notebook)
    //
    //    notebook.create = function() {
    //      count ++
    //    }
    //
    //    iFace.create('string')
    //
    //    return count > 0
    //  }
    // }
  ]


  exports.interfaceTests = interfaceTests
})(this);
