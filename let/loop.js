/*
 	let 聲明的變量限定在某一個作用域裡，而
 	var 聲明的變量在全局中都可以被使用。
 */


var a = [];
for (var i = 0; i < 10; i++) {
	a[i] = function() {
		console.log(i);
	}
}

/* 
	var i 的意義是開辟了一個變量名為 i 的存儲空間，
 	然後在工作空間中可以指向它，並向賦值，其作用域是全局的。
 */
a[6]();			// 10 


var a = [];
for (let i = 0; i < 10; i++) {
	a[i] = function() {
		console.log(i);
	}
}

/* 
	let 的意義是在某個作用域範圍中聲明一個變量，
	只有在此作用域中可以被使用，超出作用域範圍即不可見，
 	如果使用此變量即報 ReferenceError 錯
 */
a[6]();			// 6
console.log(i);		//ReferenceError: i is not defined
