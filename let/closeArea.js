var a = 1;

var fn1 = function() {
	console.log(a);
	var a = 2;
}

fn1();			// undefined
console.log(a);

let b = 1;

var fn2 = function() {
	console.log(b);
	let b = 2;
}

fn2();			// RefrenceError: b is not defined;
console.log(b);


/*
	以上代碼說明了 var 和 let 的一些共同之處和差異

	相同點：
		如果父作用域與子作用域存在相同的變量，
		那麼子作用域內會憂先使用本作用域聲明的變量，
		同時不會將父作用域同名變量重新賦值。

	不同點：
		var 在其作用範圍內都可以被使用，不管使用者在變量聲明前，
		還是聲明後。只是在聲明使用得到 undefined 結果而已。
		let 則與之稍有差異，它不允許使用者在聲明前使用。
*/