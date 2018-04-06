'use strict';

function Notebook(){
  this.all = [];
};

Notebook.prototype.create = function(note) {
  this.all.push(note);
};

Notebook.prototype.list = function() {
  return this.all;
};

Notebook.prototype.showSingleNote = function(index) {
  return this.all[index]
}
