var util = require('util');

function Person(first, last) {
    this.firstname = first;
    this.lastname = last;
}

Person.prototype.greet = function() {
    console.log('Hello ' + this.firstname + ' ' + this.lastname);
}

function Policeman(first, last) {
    //Person.call(this); //with no arguments
    Person.call(this, first, last);
    this.badgeNumber = '1234';
}

util.inherits(Policeman, Person);
var officer = new Policeman('John', 'Doe');
officer.greet();