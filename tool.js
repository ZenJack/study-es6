module.exports.enumPro = function(o) {
	let properties = [];
	for (p in o) {
		properties.push(p);
	}
	return properties;
}

module.exports.enumProPnt = function(o) {
	let properties = this.enumPro(o);
	if (properties.length == 0) return console.log('對象沒有可枚舉的屬性');
	console.log('Properties:['+properties+']');
}