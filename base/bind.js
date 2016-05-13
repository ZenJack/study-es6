let tool = require('../tool');

/*
 * 將參數列表轉換成數組形式
 * @return 參數列表的數組形式
 */
function list() {
	return tool.toArray(arguments);
}

let list0 = list(1,2,3);
console.log(list0);

/*
 * 對 list 方法進行綁定操作
 * 綁定對象為 undefined
 * 方法傳入參數列表為 4,5
 * 這些參數將作為預設參數，在調用 list1 時即可擁有
 *
 * bind 操作會返回一個與原函數同體函數，
 * 二者同引用而已，其值不同。
 * 即 list1 === list 為 false
 * 即 list1 是 list 的副本
 */
let list1 = list.bind(undefined, 4, 5);
console.log(list1 === list);		// false
console.log(list1.toString() === list.toString());		//false
console.log(list1());	// 4,5

let list2 = list1(1,2,3);	// 因為有預設參數影響，此參數列表不在從索 0 開始
console.log(list2);		// 4,5,1,2,3

/*
 * list1 為綁定函數，現還可以對此函數進行綁定
 */
let list3 = list1.bind(undefined, 6, 7);
let list4 = list3(1,2,3);
console.log(list4);		// 4,5,6,7,1,2,3
