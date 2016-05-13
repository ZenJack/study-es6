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

// 數組的解構賦值

let [a,b,c] = [1,2,3];
console.log([a,b,c][0]);	//=> 1
console.log([c,a]);			//=> [ 3, 1 ]

let arr = [a,b,c];			// 將解構完畢的對象賦值給一個變量
console.log(arr[0]);		//=> 1
// 直接訪問解構的變量，雖未像傳統的 let(var,const) 聲明，但它確實可用
console.log(a);				//=> 1


// 對於 Set 的解構， Set 支持數組初始化
let [x, y, z] = new Set(['a', 'b', 'c']);
console.log(x);		//=> a

let set = new Set(['a1', 'b1', 'c1']);
[x, y, z] = set;
console.log(x);		//=> a1

set = new Set();
/*
 * 1. Set 的 add 函數支持鏈式
 * 2. 存儲順序為插入順序
 * 3. 使用 === 判斷元素是否相等
 * 4. 重復元素直接忽略，以之前的元素為準
 * 5. 在後續版本中 -0 === 0 為 true
 */
set.add('jack').add('bruce').add('jack').add('lisa').add(-0).add(+0);
[x, y, z] = set;
console.log([x, y, z]);
console.log({x, y, z});
