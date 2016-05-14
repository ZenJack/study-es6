function Foo() {
}
Foo.prototype.toString = function() {
	return Foo.name;
}

let foo = new Foo();
console.log(foo.toString());

function Bar() {

}
Bar.prototype = Object.create(Foo.prototype);
let bar = new Bar();
console.log(bar.toString());

// 在 Foo 的原型上添加 go 函數
Foo.prototype.go = function() {
	return Foo.name + ': go';
}

console.log(foo.go());
// 雖然函數添加在 Foo 的原型上
// 但是 Bar 的原型為 Foo 的原型
// 所以可以正常運行
console.log(bar.go());	//=> Foo: go

// 在 Bar 的原型上添加 show 函數
Bar.prototype.show = function() {
	return Bar.name + ': show';
}
console.log(bar.show());
// 在 Foo 及其原型鏈上都找不到 show 函數
// 所以 TypeError: foo.show is not a function
console.log(foo.show());