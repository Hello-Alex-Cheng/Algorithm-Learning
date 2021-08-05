/*
 * @Author: chenghaolun
 * @Date: 2021-07-28 08:42:04
 * @LastEditors: chenghaolun
 * @Description: 反转链表
 * @LastEditTime: 2021-07-28 08:42:25
 * @FilePath: \Algorithm-Learning\面试算法题\1.反转链表.js
 */

// 递归法
function reverseLink1(head) {
  if (!head || !head.next) return head

  let next = head.next // head => 3, next => 4
  let newListHead = reverseLink1(next)

  next.next = head // 4.next = 3
  head.next = null // 3.next = null

  return newListHead
}


// 迭代法
function reverseLink2(head) {

  if (!head || !head.next) return head

  let temporaryHead = head
  let newListHead = null

  while(temporaryHead) {
    const next = temporaryHead.next

    temporaryHead.next = newListHead // 将 head 的第一个节点 next 指向 null，作为新链表的最后一个节点

    newListHead = temporaryHead // 现在 head 的第一个节点的 next 作为 newListHead 的最后一个节点 { 1, next: null }

    temporaryHead = next // 然后把 temporaryHead 指针往后移一位，指向 head 的第二个节点，继续遍历
  }

  return newListHead
}

