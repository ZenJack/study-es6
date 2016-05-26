/*
	一些常用工具方法
 */


/**
 * 列舉出一個對象中所有可被枚舉的所有屬性
 *
 * 此功能類似於 Object.keys 
 * 區別在於 Object.keys 只列出當前對象的可枚舉屬性，
 * 而此會將繼承的可枚舉屬性一起列出
 * 
 * @param o 目標對象
 * @return 目標對象中可以被枚舉的屬性，以數組形式返回 
 */
// module.exports.enumPro = function(o) {		// 傳統方式
function enumPro(o) {
	let properties = [];
	for (p in o) {
		properties.push(p);
	}
	return properties;
}

/**
 * 以個性化方法打印出目標對象中可被列舉的屬性
 * 
 * @param o 目標對象
 */
// module.exports.enumProPnt = function(o) {	// 傳統方式
function enumProPnt(o) {
	let properties = enumPro(o);
	if (properties.length == 0) return console.log('對象沒有可枚舉的屬性');
	console.log('Properties:['+properties+']');
}

/**
 * 判斷一個對像是否是數組
 *
 * 資源來自《JavaScript權威指南》
 */
// module.exports.isLikeArray = function(o) {	// 傳統方式
function isLikeArray(o) {
	if (o &&
		typeof o === 'object' &&
		isFinite(o.length) &&
		o.length >= 0 &&
		o.length === Math.floor(o.length) &&
		o.length < 4294967296) {
		return true;
	} else {
		return false;
	}
}

/*
 * 將一個類數組轉換成數組
 * 
 * 類數組說明：
 * 1. 對象中必有 length 屬性，且其值為正整數，小于 2 的 32 次方
 * 2. 對象應該有數字屬性（字符數字亦可）
 * 
 * @param o 類數組對象
 * @return 將類數組轉換成數組對象
 */
// module.exports.toArray = function(o) {		// 導出傳統方式
function toArray(o) {
	// 此為 es5 的方式
	// return Array.prototype.slice.call(o);

	// 此為 es6 的新方式， Array.from 意為將一個類數組或迭代對象轉換成數組對象
	return Array.from(o);
}

/*
 * 從一組字符串中解析出數字（整數和小數）
 *
 * @param string 待解析的原字符串，裡面可能包含有數字
 * @return 返回字符串中所有數字的集合（數組形式），如果沒有原字符串中沒有數字，那麼返回空值數組
 */
function parseNumber(string) {
	let pattern = /([1-9]\d*\.\d+)|([1-9]\d*)/g;
	let result = [];
	let temp;
	while (temp = pattern.exec(string)) {
		result.push(temp[0]);
	}
	return result;
}

/*
 * exports 對象保存的是外部可以被調用的方法名
 * 其初始化為空對象。
 * 傳統對其賦值方式為 module.exports.xxx
 * xxx 為函數名。
 * 在 ES6 中對象簡易賦值，讓事情變得簡單起來。
 */
module.exports = {
	enumPro,			// 等效於 enumPro: enumPro,
	enumProPnt,
	toArray,
	isLikeArray,
	parseNumber,
};