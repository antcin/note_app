'use strict';

function Notebook(){
  this.all = [];
}

Notebook.prototype.create = function(note) {
  this.all.push(note);
};

Notebook.prototype.abbreviate = function(note) {
  if (note.length > 20)
    return note.slice(0,20) + "...";
  return note
};
