/*
	解構賦值即是左右兩邊具有相同的模式，那麼右邊的值會解析構造而賦值於左邊變量。

	對單個變量的賦值如下：
		let a = 1;
		let b = 2;
	而解構方式可以是：
		let [a,b] = [1,2]
	以上左邊和右邊的模式相同，故可以解構賦值。
	當程序執行完上一句後，下面即可以使用變量 a 和 b
	此時，可以這樣使用：
	[a] 這得到的數組，可以通過索引獲取值。

	同時這種取值方式可以擴展形式，
	[] 括號中可以任意排列變量名，然後就此得到一個與之對應的數組，
	這個功能大大的提高了數據組裝的靈活性， 在一些特殊的操作中，
	顯得方便和靈巧。
 */

// 1. 交換變量
console.log('---->1. 交換變量');

let x=  1;
let y = 2;
console.log(x + ',' + y);	//=> 1,2
// 使用解構方式交換變量
[y, x] = [x, y];
console.log(x + ',' + y);	//=> 2,1
// 傳統方式
// 一對比，顯然解構賦值方式清晰直白
function swap(x, y) {
	let temp = x;
	x = y;
	y = temp;
	
	console.log(x + ',' + y);	//=> 1,2
}
swap(x, y);

// 2. 函數返回多個值
console.log('---->2. 函數返回多個值');
// 返回一個數組
function backArray() {
	return [1,2];
}
let [a, b] = backArray();
console.log(a + ',' + b);	//=> 1,2

// 返回一個對象
function backObject() {
	return {
		foo: 'foo',
		bar: 'bar',
	}
}
let {foo, bar} = backObject();
console.log(foo + ',' + bar);		//=> foo,bar

// 3. 提取 JSON 數據
console.log('---->3. 提取 JSON 數據');
var jsonData = {
	id: 1,
	status: true,
	data: {
		name: 'jack',
		age: 22,
	},
}
let {id, status, data, data:{name}} = jsonData;
console.log(id + ',' + status + ',' + data + ',' + name);

// 4. 遍歷 Map 集合
console.log('---->4. 遍歷 Map 集合');
let map = new Map();
map.set('foo', 'one');
map.set('bar', 'two');

// 使用 for of 遍歷 Map
for (let [key, value] of map) {
	console.log(key + ' is ' + value);
}
// => foo is one
// => bar is two

for (let [key] of map) {
	console.log(key);
}
// => foo
// => bar

for (let [,value] of map) {
	console.log(value);
}
// => one
// => two

// 5. 引入模塊時指定方法
console.log('---->5. 引入模塊時指定方法');
const {toArray, isLikeArray} = require('../tool');
let list = {
	length: 1,
	0: 'jack',
}
console.log(isLikeArray(list));
console.log(toArray(list));