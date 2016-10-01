function Person(fName, lName) {
  'use strict';
  this.fName = fName;
  this.lName = lName;
}

function Author() {
  'use strict';
  Person.call(this);
  this.books = [];
}

var auo = new Author();