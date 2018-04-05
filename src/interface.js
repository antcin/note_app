'use strict';

function Interface(notebook){
  this._notebook = notebook
}

Interface.prototype.show = function(){
  var abbreviationsDiv = document.getElementById('abbreviations')
  abbreviationsDiv.innerHTML = this.makeParagraphs();

}

Interface.prototype.makeParagraphs = function () {
  var notes = this._notebook.all
  var string = '';
  for(var i = 0; i < notes.length; i++){
    string += `<p>${this.abbreviate(notes[i])}</p>`
  }
  return string
};

Interface.prototype.abbreviate = function(note) {
  if (note.length > 20)
    return note.slice(0,20) + "...";
  return note
};
