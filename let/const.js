// 常量聲明方式

const PI = 3.1415916;	//聲明並初始化一個常量，此時，變量不可再被賦值。
// PI = 3;	//TypeError: Assignment to constant variable.
console.log(PI);

var map = new Map();
map.set('a',1);
map.set('b',2);

console.log(map.get('a'));
console.log(map.get('c'));

map = new Map([['a',1],['b',2]]);
console.log(map.get('a'));
console.log(JSON.stringify(map));