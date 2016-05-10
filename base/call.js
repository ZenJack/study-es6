
/*
 * 對象擁有方法，那麼可以已知對象引用，而調用方法，
 * 這是十分正常的路徑。
 * 然，有時知道某一方法，想在使用時再確定其所屬對象，
 * 那麼就要用到 call 或 apply
 *
 * 這是一種逆向思維。
 * 有時這種反向綁定調用會起到十分便捷的效果。
 */

let o = {
	name: 'jack',
	age: 18
}

function show(caller) {
	console.log(arguments);
	console.log(caller + '說:' + this.name + ',' + this.age);
}

/*
 * o 為函數 show 的母對象，
 * 此時在 show 函數內，可以通過 this 來引用 o 對象。
 *
 * 餘下的參數即是 show 函數的形參列表
 *
 * call 與 apply 的差別在於參數列表傳入形式不同，
 * call 允許用戶像直接調用目標函數一樣傳參，主要用於手動。
 * 而 apply 允許用戶以數組形式傳入參數列表，主要用自動化。
 * 因為在一個函數內，可以通過 arguments 獲得其參數列表。
 * 
 */
show.call(o, 'A');


function User(name, age) {
	this.name = name;
	this.age = age;
}

let user = new User('jackson', 20);
show.call(user, 'B');

function foo(caller) {
	/*
	 * arguments 獲取的是類數組對象
	 *
	 * apply 參數以數組或類數組的形式
	 */
	show.apply(user, arguments);
}

foo('CY');

let tool = require('../tool');
/*
 * 自定義一個類數組
 *
 * 要求:
 * 1.對象具有 length 屬性				--必要條件
 * 2.對象應該具有數字（字符數字亦可）屬性	--不是必要條件
 */
let likeArray = {
	length: 1,
	name: 'jack',  		//無關緊要
	0: 'Hi',
	'1': 'Wo'
}
tool.isLikeArray(likeArray);
show.apply(user, likeArray);
