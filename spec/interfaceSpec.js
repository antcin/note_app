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
    }
  ]


  exports.interfaceTests = interfaceTests
})(this);
