'use strict';

function Notebook(){
  this.all = [];
}

Notebook.prototype.create = function(note) {
  this.all.push(note);
};
