/*
 * @Author: chenghaolun
 * @Date: 2021-07-28 08:43:16
 * @LastEditors: chenghaolun
 * @Description: 将带问号的时间转成最大时间
 * @LastEditTime: 2021-08-29 15:49:19
 * @FilePath: \Algorithm-Learning\InterviewIssues\2.transformTimeToBigger.js
 */

// ??:??

const transformTime = time => {
  let showTime = ''
  for (let i = 0, len = time.length; i < len; i++) {
    switch(i) {
      case 0:
        // 第一个字符是 ?
        if (time[i] === '?') {
          // 第二个字符也是 ?
          if (time[i + 1] === '?') {
            showTime += '23'
          } else {
            // 第二个字符不是 ?，记得要把 time[i + 1] 拼接到 showTime 后面
            if (+time[i + 1] <= 3) {
              showTime += '2' + time[i + 1]
            } else {
              // 第一个字符是 ?，第二个字符是数字并且比 3 大
              showTime += '1' + time[i + 1]
            }
          }
        } else {
          // 第一个字符不是 ?
          if (time[i + 1] === '?') {
            if (+time[i] < 2) {
              showTime = time[i] + '9'
            } else {
              showTime = time[i] + '3'
            }
          } else {
            showTime = time[i] + time[i + 1]
          }
        }
        break;
      case 3:
        if (time[i] === '?') {
          showTime += ':5'
        } else {
          showTime += ':' + time[i]
        }
        break;
      case 4:
        if (time[i] === '?') {
          showTime += '9'
        } else {
          showTime += time[i]
        }
        break;
    }
  }

  console.log('showTime: ', showTime)
}

transformTime('??:??')
transformTime('1?:1?')
transformTime('?5:?1')
transformTime('?2:4?')

