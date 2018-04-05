'use strict';
(function(exports) {
  const TEST_NOTE = 'hello, my name is Ricky and this is a cool test';

  let featureTests =
  [
    {
      describe: '#showing notes',
      it: 'displays notes in the body',
      test: function(){
        return document.body.innerHTML.includes('test note')
      }
    },
    {
      describe: '#creating new notes',
      it: 'creates and displays notes in the body',
      test: function(){
        return document.body.innerHTML.includes('new test note created')
      }
    }
  ]

  exports.featureTests = featureTests
})(this)
