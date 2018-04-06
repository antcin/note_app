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
    string += `<p onclick="iFace.get(${i})">${this.abbreviate(notes[i])}</p>`
  }
  return string
};

Interface.prototype.abbreviate = function(note) {
  if (note.length > 20)
    return note.slice(0,20) + "...";
  return note
};

Interface.prototype.create = function(note) {
  this._notebook.create(note);
  this.show();
  document.getElementById('txt_note').value = ''
};

Interface.prototype.get = function(index) {
  document.getElementById('expanded_note').innerHTML = this._notebook.showSingleNote(index)
}
