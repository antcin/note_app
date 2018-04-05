'use strict';

function Interface(notebook){
  this._notebook = notebook
}

Interface.prototype.show = function(){
  var notes = this._notebook.all
  var string = '';
  for(var i = 0; i < notes.length; i++){
    string += `<p>${notes[i]}</p>`
  }
  var abbreviationsDiv = document.getElementById('abbreviations')
  console.log(abbreviationsDiv)
  abbreviationsDiv.innerHTML = string

}


// setTimeout(() => , 10)
