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
      describe: '#creating new notes that have less than 20 characters',
      it: 'creates and displays notes in the body',
      test: function(){
        document.getElementById('txt_note').value = 'new test'
        document.getElementById('create').click()
        return document.body.innerHTML.includes('new test')
      }
    },
    {
      describe: '#creating new notes that have more than 20 characters',
      it: 'creates and displays notes in the body',
      test: function(){
        document.getElementById('txt_note').value = 'new test note created'
        document.getElementById('create').click()
        return document.body.innerHTML.includes('new test note create...')
      }
    },
    {
      describe: '#showing a full note',
      it: 'does not display the full note until it is clicked on',
      test: function(){
        document.getElementById('txt_note').value = 'My name is Jerry, this is a test'
        document.getElementById('create').click()
        return document.body.innerHTML.includes('is is a test') === false
      }
    },
  ]

  exports.featureTests = featureTests
})(this)
