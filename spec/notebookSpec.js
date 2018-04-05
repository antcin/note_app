'use strict';
(function(exports) {
  const TEST_NOTE = 'hello, my name is Ricky and this is a cool test';

  let notebookTests =
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

  ]

  exports.notebookTests = notebookTests
})(this)
