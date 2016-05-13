/*
 * 在 prototype-1.js 中展示了使用對象的 __proto__ 屬性指向某對象，
 * 從而將其作為此對象的原型對象。
 * 但這並非是標準作法，應該採用 Object.create 來完成類似工作
 */
 
let person = {
	kind: 'person',
}

/*
 * Object.create 返回一個以參數對象為原型的新對象
 */
let zack = Object.create(person);
console.log(zack.kind);

/*
 * Object.getPrototypeOf 返回參數對象的直接原型對象
 */
let zackProto = Object.getPrototypeOf(zack);
console.log(zackProto);