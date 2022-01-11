/*
 * @Author: chenghaolun
 * @Date: 2021-07-28 08:42:04
 * @LastEditors: chenghaolun
 * @Description: 反转链表
 * @LastEditTime: 2021-08-29 15:38:27
 * @FilePath: \Algorithm-Learning\InterviewIssues\1.reverseLinklist.js
 */


// [1, 2, 3, 4, 5]
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
// 1. 定义一个头节点 prev = null
// 2. 以及 curr = head
// 在 while(curr) 中，首先要保存 curr 的下一个节点 const next = curr.next
// 然后让当前的 curr.next 指向 prev
// curr.next => null
// 然后让 prev = curr


// 迭代法
function reverseLink2(head) {

  if (!head || !head.next) return head

  let curr = head
  let prev = null

  while(curr) {
    const next = curr.next

    curr.next = prev // 将 head 的第一个节点 next 指向 null，作为新链表的最后一个节点

    // 移动  prev 节点
    prev = curr // 现在 head 的第一个节点的 next 作为 prev 的最后一个节点 { 1, next: null }

    curr = next // 然后把 temporaryHead 指针往后移一位，指向 head 的第二个节点，继续遍历
  }

  return prev
}




function reverseLinklist(head) {
  if (!head || !head.next) return head;

  let curr = head;
  let prev = null;

  while(curr) {
    // 保存当前节点的下一个节点 next
    const next = curr.next;

    // 第一个节点，就反转了
    curr.next = prev;

    prev = curr;

    curr = next;
  }

  return prev;
}


console.log(reverseLinklist({
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
}), null, 2)