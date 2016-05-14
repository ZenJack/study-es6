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

// 對象的解構賦值
let {foo, bar} = {foo: 'foo', bar: 'bar'};
console.log(foo);				//=> foo
console.log(bar);				//=> bar
console.log({foo, bar});		//=> { foo: 'foo', bar: 'bar' }
console.log([foo,bar]);			//=> [ 'foo', 'bar' ]

// 重命名
let {first: f, last: l} = {first: 'first', last: 'last'};
console.log(f);			//=> first
console.log(l);			//=> last
let o = {f,l};
console.log(o);			//=> { f: 'first', l: 'last' }
