let user = {
	a: 1,
	b: 2
}

/* 
 * 定義一個 Point 類
 */
class Point {
	/* 
	 * 類的構造函數
	 * 
	 * 如果未顯式定義，則自動創建一個無參構造函數
	 *
	 * Javascript 中沒有函數重載功能
	 * 所以在一個類中祗能定義一個構造函數
	 * 
	 *
	 * 然而其它函數是可以重復定義的，祗是以最後一個定義的函數為準
	 * 其實類是在原型上添加函數，
	 * 所以定義多個普通函數是允許的，祗是最後定義的會覆蓋之前定義的。
	 */
	constructor(x, y) {
		this.x = x;
		this.y = y;
		this.b = true;
		this.s = 'jack';
		this.u = undefined;
		this.n = null;
		this.o = user;
		
		/*
		 * 一個函數本是多條語句指令的集合
		 * 以函數名來引用此語句集合而完成任務
		 * 故作用域往往只須有一個函數即可，
		 * 而此處，每次創建對象實例時都會在實例上綁定這樣一個函數
		 * 多個實例使用相同的函數功能，看起來似乎在浪費內存
		 *
		 * 所以一般將函數定義在原型上，所以類的實例共亨原型上的同一函數
		 */
		this.fn = function() {
			console.log('fn');
		}
		
		/*
		 * 構造函數默認返回自己 this
		 * 
		 * 也可以顯示的返回另一個對象
		 */
		 //return {};	// 這種顯示返回一個對象讓一個類定義變得很畸形
	}
	
	/*
	 * 類中定義的方法，不可枚舉
	 */
	calc() {
		return this.x + ',' + this.y + ',' + this.z;
	}
	
}


let point = new Point(1, 2);

point.fn();

/*
 * true 表明 point 是 Point 的實例
 */
console.log(point instanceof Point);

console.log(Object.getOwnPropertyNames(point));			// [ 'x', 'y' ]		類中定義的方法，並非定義在實例對象上
console.log(Object.getOwnPropertyNames(Point.prototype)); // [ 'constructor', 'calc' ]		所有實例共享原型上的方法，且類中定義的方法即在原型上
console.log(Object.keys(Point.prototype));
console.log(Point === Point.prototype.constructor);

// 修改實例 point 中 x 屬性的配值信息，使其不可被 delete 
Object.defineProperty(point, 'x', {
	configurable: false
});

/*
 * 試圖刪除 point 上的 x 屬性，
 * 但上面已將之設置為不可刪除屬性
 * 執行此行雖不會報錯，但也不會成功刪除。
 */
delete point.x;
// 再次顯示 point 中可被枚舉屬性
console.log(Object.keys(point));
console.log(JSON.stringify(point));
// 將 point 的屬性 y 配置成不可枚舉值
Object.defineProperty(point, 'y', {
	enumerable: false
});
/* 
 * JSON 序列化只會序列可枚舉的屬性
 * 同時屬性值應該為基本類型，undefined除外，
 * 對象亦可，函數則不可被序列化
 */
console.log(JSON.stringify(point));

point.z = 100;
console.log(point.calc());