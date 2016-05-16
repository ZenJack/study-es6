/*
 * 代理初探
 */

let foo = {
	name: 'jack',
	age: 21,
	toString() {
		return 'My name is ' + this.name;
	},
}

let proxy = new Proxy(foo, {
	
	get: function(target, property) {
		// console.log(typeof property);
		// console.log();
		if (property === 'age') {
			return Number(target[property]);
		}
		// if (property === 'toString') {
			// return () => {
				// return target.name;
			// }
		// }
		return target[property];
	},
	set: (target, name, value, receiver) => {
		console.log(target);
		console.log(receiver);
		console.log(target === receiver);
		if (name === 'toString') {
			// console.log(name + ': ' + value);
			return false;
		}
		if (name === 'age') {
			// return false;
		}
		target[name] = value;
		return true;
	}
});

console.log(proxy.name);
console.log(typeof proxy.age);
console.log(proxy.toString());
proxy.toString = () => {
	console.log('new toString()');
	return this.name;
}
console.log(proxy.toString());
proxy.age = 99;
console.log(proxy.age);
