/*
	變量提升問題

	var 的作用是聲明一個變量，然後可以在整個空間裡被使用
	如果在沒有被賦值時使用，那麼報告此為變量為 undefined

	而 let 的作用是在某一作用域範圍內聲明並使用變量，
	且必須先聲明才可以被使用，有順序之分。這一點不像 var 
	一旦聲明了，即可以在任何地方被使用。
 */

console.log(a);			//undefined	 只是沒有被賦值而已。
console.log(b);			//ReferenceError: y is not defined

{
	var a = 1;
	let b = 2;
}