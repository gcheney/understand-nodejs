'use strict'

var EventEmitter = require('events');
var util = require('util');

function Greetr() {
    EventEmitter.call(this);
    this.greeting = 'Hello ';
}

class Greetr {
    constructor() {
        super();
        this.greeting = 'Hello ';
    }
}

util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function(name) {
    console.log(this.greeting + ' ' + name);
    this.emit('greet', name);
}

var greeter1 = new Greetr();

greeter1.on('greet', function(name){
    console.log('Someone greeted ' + name + '!');
});

greeter1.greet('Glen');