/*
 * @Author: chenghaolun
 * @Date: 2021-08-29 19:43:11
 * @LastEditors: chenghaolun
 * @Description: 合并两个有序链表
 * @LastEditTime: 2021-08-29 20:02:42
 * @FilePath: \Algorithm-Learning\InterviewIssues\18.mergeSortLink.js
 */

// [1, 3, 4]
// [1, 2, 4]

function mergeSortLink(l1, l2) {
  // 创建头节点
  const dummy = {
    val: -1,
    next: null
  }

  let prev = dummy

  while(l1 && l2) {
    if (l1.val < l2.val) {
      prev.next = l1
      l1 = l1.next
    } else {
      prev.next = l2
      l2 = l2.next
    }

    prev = prev.next
  }

  // 合并到最后，存在一个链表没走完，需要拼接到到 prev.next 上
  prev.next = l1 === null ? l2 : l1

  return dummy.next
}

const l1 = {
  val: 1,
  next: {
    val: 3,
    next: {
      val: 4,
      next: null
    }
  }
}

const l2 = {
  val: 1,
  next: {
    val: 2,
    next: {
      val: 4,
      next: null
    }
  }
}

console.log(JSON.stringify(mergeSortLink(l1, l2), null, 2))
