/*
 * @Author: chenghaolun
 * @Date: 2021-08-30 12:06:01
 * @LastEditors: chenghaolun
 * @Description:
 * @LastEditTime: 2021-08-30 12:07:31
 * @FilePath: \Algorithm-Learning\InterviewIssues\22.instancof.js
 */

function myInstanceof(left, right) {
  const prototype = right.prototype
  let __proto__ = left.__proto__

  while(__proto__) {
    if (__proto__ === prototype) {
      return true
    }

    __proto__ = __proto__.__proto__
  }

  return false
}

console.log(myInstanceof({}, String))
