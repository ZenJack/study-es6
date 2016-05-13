let tool = require('../tool');

/*
	在所構造的方法和屬性（估且看作）都是私有而不可被外界修改的

	好處在於一個類便得更安全
 */
function Foo() {
	let _value = 0;

	Object.defineProperty(this, 'setValue', {
		value: function(value) {
			_value = value;
		}
	});

	Object.defineProperty(this, 'getValue', {
		value: function() {
			return _value;
		}
	});

	Object.defineProperty(this, 'value', {
		get: function() {
			return _value;
		},
		set: function(value) {
			_value = value;
		}
	});

}

let foo = new Foo();
tool.enumProPnt(foo);		//找不到一個可以被枚舉的屬性
foo.setValue(200);			//只能通過方法對外開放的入口訪問內部屬性
console.log(foo.getValue());

foo.value = 300;
console.log(foo.value);


/*
	此方式則容易暴露對象的內部屬性，造成不可預料的後果
 */
function Bar() {
	this.value = 0;
}

Object.defineProperty(Bar.prototype, 'setValue', {
	set: function(value) {
		this.value = value;
	}
});

Object.defineProperty(Bar.prototype, 'getValue', {
	get: function() {
		return this.value;
	}
});

let bar = new Bar();
Object.freeze(bar);
console.log(Object.keys(bar));
tool.enumProPnt(bar);
bar.setValue = 100;
console.log(bar.getValue);

delete bar.value;
console.log(bar.value);

/*
 * 在原型上添加一個函數
 *
 * 以此創建的函數會被枚舉出來
 */
Bar.prototype.fn = function() {
	console.log(this === Bar.prototype);		// false
	console.log(this === bar);					// true
	console.log(this.value);
}
bar.fn();

// 在原型上綁定值的屬性
Object.defineProperty(Bar.prototype, 'v', {
	value: 10
});
// 查看原型上可以被枚舉的函數
console.log(Object.keys(Bar.prototype));		//[ 'fn' ]
console.log(Object.getOwnPropertyNames(Bar.prototype));		//[ 'constructor', 'setValue', 'getValue', 'fn' ]
console.log(Bar.prototype.v);		// 獲取原型上的屬性值
console.log(JSON.stringify(Bar.prototype));		// {} JSON 不會序列化原型對象