'use strict';
(function(exports) {
  const SHORT_LENGTH = 20;
  const TEST_NOTE = 'hello, my name is Ricky and this is a cool test';

  let featureTests =
  [
    {
      describe: '#showing notes',
      it: 'displays notes in the body',
      test: function(){
        return document.body.innerHTML.includes('test note')
      }
    }
  ]

  exports.featureTests = featureTests
})(this)
