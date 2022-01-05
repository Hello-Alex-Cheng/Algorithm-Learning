/*
 * @Author: chenghaolun
 * @Date: 2021-08-30 09:23:38
 * @LastEditors: chenghaolun
 * @Description: 16进制颜色转成 10 进制
 * @LastEditTime: 2021-08-30 09:54:12
 * @FilePath: \Algorithm-Learning\InterviewIssues\19.color16to10.js
 */

function showRGB(a) {
  if (a.substr(0, 1) == "#") {
    a = a.substring(1);
  }
  var len = a.length;
  if (len != 6 && len != 3) {
    return console.log("十六进制颜色码为六位或三位！");
  } else if (/[^0-9a-f]/i.test(a)) {
    return console.log("请输入正确的十六进制颜色码！");
  }
  a = a.toLowerCase();
  let b = new Array();
  for (let x = 0; x < 3; x++) {
    b[0] =
      len == 6 ? a.substr(x * 2, 2) : a.substr(x * 1, 1) + a.substr(x * 1, 1);
    b[3] = "0123456789abcdef";
    b[1] = b[0].substr(0, 1);
    b[2] = b[0].substr(1, 1);
    b[20 + x] = b[3].indexOf(b[1]) * 16 + b[3].indexOf(b[2]);
  }
  console.log(b)
  // console.log(b[20],b[21],b[22])
  console.log(`rgb(${b[20]},${b[21]},${b[22]})`)
  return `rgb(${b[20]},${b[21]},${b[22]})`;
}

//  测试
showRGB("#fff"); // "rgb(255,255,255)"
showRGB("#333"); // "rgb(51,51,51)"
showRGB("#808080"); // "rgb(128,128,128)"
