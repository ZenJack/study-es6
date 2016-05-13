

/*
 *	~ 按位取返操作
 *
 *  知識點：~-1 = 0
 *	延伸點：String.indexOf(str) 如果沒有找到某個字符串，那麼即返回 -1
 *	而如果對 indexOf 的結果進行 ~ 操作，即可判斷是否找到了某個字符串
 */

let str = 'abc';
let searchFor = 'b';

if (~str.indexOf(searchFor)) {
  // searchFor 包含在字符串中
  console.log(true);
} else {
  // searchFor 不包含在字符串中
  console.log(false);
}