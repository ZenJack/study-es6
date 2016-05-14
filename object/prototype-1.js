// 創建一個 alien 對象
let alien = {
	kind: 'alien',
	name: 'Alien',		// 最後的逗號不影響代碼執行
}
// 創建一個 person 對象
let person = {
	kind: 'person',
}
// 創建一個 zack 對象
let zack = {};
// 將 zack 的原型對象指向 alien 對象
zack.__proto__ = alien;
/*
 * 調用 zack 的 kind 屬性
 */
console.log(zack.kind);

// 將 person 的原型對象指向 alien 對象
person.__proto__ = alien;
// 將 zack 的原型對象指向 person 對象
zack.__proto__ = person;
/*
 * 前言：
 * 1. zack 上沒有 kind 屬性
 * 2. person 上定義了 kind 屬性
 * 3. alien 上定義了 kind 屬性
 * 4. 原型關係為 zack -> person -> alien
 *
 * 當試圖在 zack 上調用 kind 屬性時，
 * 首先在 zack 上尋找，有即返回，無則往直接原型對象上尋找
 * 有即返回，無則再往直接原型對象上尋找，
 * 直到找到 Object 對象，如果依然無，則返回 undefined
 *
 * 此例中 zack 的屬性 kind 在其直接原型 person 上即找到，
 * 故返回 person
 */
console.log(zack.kind);		// person
// zack.name 直到尋找到 alien （zack 的原型對象）才返回
console.log(zack.name);

// 檢查某個對象是否是另一對象的原型
console.log(person.isPrototypeOf(zack));	// true
console.log(alien.isPrototypeOf(zack));		// true

// 更新 person [原型]的 kind 屬性值
person.kind = 'person2';
// zack 亦受影響
console.log(zack.kind);

// 返回 person 對象，因為 person 為 zack 的直接原型對象
console.log(Object.getPrototypeOf(zack));