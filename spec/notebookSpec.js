'use strict';


let tests =
[
  {
    describe: '.create',
    it: 'adds a string to notebook.all',
    test: function() {
      let notebook = new Notebook();
      let testNote = 'hello, my name is Ricky and this is a cool test';
      notebook.create(testNote);
      return notebook.all.includes(testNote) ? true : false;
    }
  },
  {
   describe:
   it: 'this is the second test',
   test: function() {
     let notebook = new Notebook();
     let testNote = 'hello, my name is Ricky and this is a cool test';
     notebook.create(testNote);
     return notebook.all.includes(testNote) ? true : false;
   }
 }
]


function runAll(arrayOfTestObj) {
  let element = document.getElementById('test_div')
  let string = ''
  console.log(string)
  for (let i = 0;i < arrayOfTestObj.length;i++) {
    string += testToHTML(arrayOfTestObj[i])
    console.log(string)
  }
  element.innerHTML = string
}

function testToHTML(testObj) {
  let resultColour = testObj.test() ? 'green' : 'red'
  return `<p style="color:${resultColour}">${testObj.describe}:<br>${testObj.it}</p>`
}

runAll(tests)


// console.log(testCreate())
