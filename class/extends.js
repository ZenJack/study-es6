class Foo {
	// static key = 'KEY';
	// value = 0;
	constructor(name) {
		this.name = name;
	}
	fn() {
		return 'foo fn';
	}
	toString() {
		return Foo.name;
	}
}

class Bar extends Foo {
	
	fn() {
		return 'bar fn';
	}
}

let bar = new Bar('jack');
console.log(bar.name);
console.log(bar.fn());
console.log(bar.toString());

console.log(Bar.key + ':' + bar.value);