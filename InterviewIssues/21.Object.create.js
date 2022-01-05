/*
 * @Author: chenghaolun
 * @Date: 2021-08-30 10:28:12
 * @LastEditors: chenghaolun
 * @Description:
 * @LastEditTime: 2021-08-30 10:36:43
 * @FilePath: \Algorithm-Learning\InterviewIssues\21.Object.create.js
 */

// Object.create
// 第二个参数，跟 Object.definePropertyes 的第二个参数相同
function myCreate(proto) {
  function F() {}

  F.prototype = proto

  return new F()
}
