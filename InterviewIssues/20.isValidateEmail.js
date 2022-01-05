/*
 * @Author: chenghaolun
 * @Date: 2021-08-30 10:27:21
 * @LastEditors: chenghaolun
 * @Description:
 * @LastEditTime: 2021-08-30 10:27:22
 * @FilePath: \Algorithm-Learning\InterviewIssues\20.isValidateEmail.js
 */
var isEmail = function (val) {
  var pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
  var domains= ["qq.com","163.com","vip.163.com","263.net","yeah.net","sohu.com","sina.cn","sina.com","eyou.com","gmail.com","hotmail.com","42du.cn"];
  if(pattern.test(val)) {
      var domain = val.substring(val.indexOf("@")+1);
      for(var i = 0; i< domains.length; i++) {
          if(domain == domains[i]) {
              return true;
          }
      }
  }
  return false;
}
// 输出 true
console.log(isEmail("cn42du@163.com"))