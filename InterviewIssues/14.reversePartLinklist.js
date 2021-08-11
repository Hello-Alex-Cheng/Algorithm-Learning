/*
 * @Author: chenghaolun
 * @Date: 2021-08-07 10:10:14
 * @LastEditors: chenghaolun
 * @Description: 反转部分单向链表
 * @LastEditTime: 2021-08-11 09:55:18
 * @FilePath: \Algorithm-Learning\InterviewIssues\14.reversePartLinklist.js
 */

// 输入：head = [1,2,3,4,5], left = 2, right = 4
// 输出：[1,4,3,2,5]

function reversePart1(head, left, right) {
  if (!head.next || left === right) return head

  let len = 0
  let leftPre = null
  let rightNext = null
  let pointer = head

  while(pointer) {
    len++

    // 拿到要反转的 left 前驱
    leftPre = len === left - 1 ? pointer : leftPre

    // 拿到要反转的 right 后继
    rightNext = len === right + 1 ? pointer : rightNext

    pointer = pointer.next
  }

  pointer = leftPre === null ? head : leftPre.next
  let pointer2 = pointer.next

  // 将要反转的节点的头节点next 指向 rightNext
  pointer.next = rightNext

  // 从要反转的第二个节点开始遍历，到达 rightNext 时终止
  while(pointer2 !== rightNext) {
    const next = pointer2.next

    // 一个一个反转，就像反转单链表一样
    pointer2.next = pointer
    pointer = pointer2
    pointer2 = next
  }

  if (leftPre !== null) {
    leftPre.next = pointer
    return head
  }

  return pointer

}


// [1,2,3,4,5,6,7], 2, 6

function reversePart2(head, left, right) {

  if (!head.next || left === right) return head

  const dummy = new ListNode(-1, head)
  let pre = dummy
  for (let i = 1; i < left; i++) {
    // 让 pre 指向 left 的前驱
    pre = pre.next
  }

  // 要反转的链表
  head = pre.next

  // 遍历 2 - 6
  for (let i = left; i < right; i++) {
    const next = head.next // 3

    head.next = next.next // 2 -> 4
    next.next = pre.next // 4 -> 2
    pre.next = next // 1 -> 3 -> 4 -> 2
  }

  return dummy.next
}
