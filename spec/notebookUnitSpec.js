'use strict';
(function(exports) {
  const SHORT_LENGTH = 20;
  const TEST_NOTE = 'hello, my name is Ricky and this is a cool test';

  let unitTests =
  [
    {
      describe: '.create',
      it: 'adds a string to notebook.all',
      test: function() {
        let notebook = new Notebook();
        notebook.create(TEST_NOTE);
        return notebook.all.includes(TEST_NOTE);
      }
    },
    {
     describe: '.abbreviate',
     it: 'returns shorter version of a given string if more than ' + SHORT_LENGTH,
     test: function() {
       let notebook = new Notebook();
       return (notebook.abbreviate(TEST_NOTE) == "hello, my name is Ri...");
     }
    },
    {
      describe: '.abbreviate',
      it: 'returns same string if shorter than '+ SHORT_LENGTH,
      test: function() {
        let notebook = new Notebook();
        return (notebook.abbreviate('hello') == 'hello');
      }
    }
  ]
  
  exports.unitTests = unitTests
})(this)
