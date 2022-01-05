/*
 * @Author: chenghaolun
 * @Date: 2021-08-07 11:30:22
 * @LastEditors: chenghaolun
 * @Description: 有效的括号
 * @LastEditTime: 2021-08-30 09:56:08
 * @FilePath: \Algorithm-Learning\InterviewIssues\15.isValidCharacter.js
 */

// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
//  

// 示例 1：

// 输入：s = "()"
// 输出：true
// 示例 2：

// 输入：s = "()[]{}"
// 输出：true
// 示例 3：

// 输入：s = "(]"
// 输出：false
// 示例 4：

// 输入：s = "([)]"
// 输出：false
// 示例 5：

// 输入：s = "{[]}"
// 输出：true

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/valid-parentheses
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

var isValid = function(s) {

  const len = s.length / 2

  for (let i = 0; i < len; i++) {
      if (s.includes('{}') || s.includes('()') || s.includes('[]')) {
          s = s.replace('{}', '')
          s = s.replace('()', '')
          s = s.replace('[]', '')
      }
  }

  return s === ''
}


// 方法2
function validateStr(str) {

  // stack
  const leftStack = []

  for (let i = 0; i < str.length; i++) {
    // 遇到是 左 括号， 就推入到 栈中
    if (str[i] === '(' || str[i] === '{' || str[i] === '[') {
      leftStack.push(str[i])
    } else {
      // 否则是 右 括号
      if (leftStack.length === 0) {
        return false
      } else {
        // 将栈里面的元素弹出
        const temp = leftStack.pop()
        if (str[i] === '}') {
          if (temp !== '{') {
            return false
          }
        } else if (str[i] === ')') {
          if (temp !== '(') {
            return false
          }
        } else if (str[i] === ']') {
          if (temp !== '[') {
            return false
          }
        }
      }
    }
  }

  return true
}

console.log(validateStr('[()]{}'))

