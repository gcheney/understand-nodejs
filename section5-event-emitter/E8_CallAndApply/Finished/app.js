var obj = {
	name: 'John Doe',
	greet: function() {
		console.log(`Hello ${ this.name }`);
	}
}

obj.greet();

// call arguments are passed as CSV - obj.greet.call({ name: 'Jane Doe'}, arg1, arg2);
obj.greet.call({ name: 'Jane Doe'});

// apply arguments are passed as an array - obj.greet.call({ name: 'Jane Doe'}, [arg1, arg2]);
obj.greet.apply({ name: 'Jane Doe'});