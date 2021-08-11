/*
 * @Author: chenghaolun
 * @Date: 2021-08-11 09:57:10
 * @LastEditors: chenghaolun
 * @Description: 判断链表是否是回文链表
 * @LastEditTime: 2021-08-11 10:22:51
 * @FilePath: \Algorithm-Learning\InterviewIssues\16.isPalindromeLink.js
 */

// [1,2,2,1]

function isPalindrome(head) {

  const values = []
  let newHead = head
  let len = 0
  let is = true
  while(newHead) {
    values[len] = newHead.val
    len++
    newHead = newHead.next
  }

  // 解法一
  // let reverseVal = [].concat(values).reverse()
  // console.log(JSON.stringify(values) === JSON.stringify(reverseVal))



  // 解法二
  // 也可以再遍历一次，让 values.pop() 与 head.val 比较
  // pop() 方法会返回出栈的元素，并改变数组

  newHead = head
  while(newHead) {
    if (values.length) {
      if (newHead.val !== values.pop()) {
        is = false
        break
      } else {
        newHead = newHead.next
      }

    } else {
      break
    }
  }
  console.log('is', is)

}

const link = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 2,
      next: {
        val: 2,
        next: {
          val: 1,
          next: null
        }
      }
    }
  }
}

isPalindrome(link)
