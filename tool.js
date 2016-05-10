/*
	一些常用工具方法
 */


/**
 * 列舉出一個對象中所有可被枚舉的所有屬性
 * 
 * @param o 目標對象
 * @return 目標對象中可以被枚舉的屬性，以數組形式返回 
 */
module.exports.enumPro = function(o) {
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
module.exports.enumProPnt = function(o) {
	let properties = this.enumPro(o);
	if (properties.length == 0) return console.log('對象沒有可枚舉的屬性');
	console.log('Properties:['+properties+']');
}

/**
 * 判斷一個對像是否是數組
 *
 * 資源來自《JavaScript權威指南》
 */
module.exports.isLikeArray = function(o) {
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