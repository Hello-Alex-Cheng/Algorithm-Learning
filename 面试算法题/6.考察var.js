/*
 * @Author: chenghaolun
 * @Date: 2021-07-28 09:23:54
 * @LastEditors: chenghaolun
 * @Description: 这??
 * @LastEditTime: 2021-07-28 09:31:39
 * @FilePath: \Algorithm-Learning\面试算法题\6.考察var.js
 */

var x = 1, y = 0, z = 0

var add = function(x) {
  // 注意这里的 x 是局部变量
  return x = x + 1
}

y = add(x)

// 这个函数根本就不会执行,因为函数的提升比变量提升提前
// 也就是说,这个函数会提升到 程序的最顶部
// 然后,被上面的 var add 给覆盖了
// 这就是为上面 z = 2 的原因
function add(x) {
  return x = x + 3
}

z = add(x)

console.log(x, y, z)
