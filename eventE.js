var events = require('events');
var util=require('util');

var Person=function (name) {
     this.name=name;
};
util.inherits(Person, events.EventEmitter)

var john=new Person('john');
var carlo=new Person('carlo');
var tom=new Person('tom');
var people=[john,carlo,tom];

people.forEach(function(person)
{
    person.on('speak',function(mssg)
    {
        console.log(person.name +' said ' +mssg)
    });
});
john.emit('speak','hello');
carlo.emit('speak','hi');
tom.emit('speak','hey');