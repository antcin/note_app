'use strict';
const SHORT_LENGTH = 20;
const TEST_NOTE = 'hello, my name is Ricky and this is a cool test';


let tests =
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


function runAll(arrayOfTestObj) {
  let element = document.getElementById('test_div')
  let string = ''
  for (let i = 0;i < arrayOfTestObj.length;i++) {
    string += testToHTML(arrayOfTestObj[i])
  }
  element.innerHTML = string
}

function testToHTML(testObj) {
  let resultColour = testObj.test() ? 'green' : 'red'
  return `<p style="color:${resultColour}">${testObj.describe}:<br>${testObj.it}</p>`
}

runAll(tests)
