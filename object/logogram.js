// 對象簡易賦值示例

let name = 'jack';
let foo = {
	name,				// 屬性簡易
	toString() {
		return 'My name is ' + this.name;		// 方法簡易
	}
}

console.log(JSON.stringify(foo));			//=> {"name":"jack"}
console.log(Object.keys(foo));				//=> [ 'name', 'toString' ]
console.log(foo.toString());				//=> My name is jack