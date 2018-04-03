'use strict';

// (function(exports){
  function testCreate(){
    let notebook = new Notebook();
    let testNote = 'hello, my name is Ricky and this is a cool test';
    notebook.create(testNote);
    return notebook.all.includes(testNote) ? true : false;
  };
  console.log(testCreate())
// })(this);
