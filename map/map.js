var map = new Map();
map.set('a',1);
map.set('b',2);

console.log(map.get('a'));
console.log(map.get('c'));

/*
	一個 map 對象，實際上是一個數組，只是每項也是一個數組，只是有兩個值而已。
*/
map = new Map([['a',1],['b',2]]);
console.log(map.get('a'));
console.log(JSON.stringify(map));

var 映射 = new Map();
映射.set('a',1);
console.log(映射.get('a'));