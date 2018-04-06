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
    {
      describe: '.list',
      it: 'returns an array containing all notes',
      test: function() {
        let notebook = new Notebook();
        return Array.isArray(notebook.list()) && notebook.list().length == 0;
      }
    },
    {
      describe: '.showSingleNote',
      it: 'returns a single note by index',
      test: function() {
        let notebook = new Notebook();
        notebook.create(TEST_NOTE);
        return notebook.showSingleNote(0) == TEST_NOTE;
      }
    }
  ]

  exports.notebookTests = notebookTests
})(this)
