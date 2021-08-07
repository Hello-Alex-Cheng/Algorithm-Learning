/*
 * @Author: chenghaolun
 * @Date: 2021-08-07 09:31:11
 * @LastEditors: chenghaolun
 * @Description: 删除中间节点
 * @LastEditTime: 2021-08-07 09:53:59
 * @FilePath: \Algorithm-Learning\InterviewIssues\13.removeMidNode.js
 */

// 不删除，Len <= 1 不调整
// 1-＞2，删除节点1；
// 1-＞2-＞3，删除节点2；
// 1-＞2-＞3-＞4，删除节点2；
// 1-＞2-＞3-＞4-＞5，删除节点3；

// Math.Ceil((Len / 2))


// 方法1
function removeMidNode1(head) {
  if (!head || !head.next) {
    return head
  }

  // 如果只有两个节点
  if (!head.next.next) {
    return head.next
  }

  // 大于两个节点
  let len = 0
  let pre = 0

  let pointer = head
  while(pointer) {
    len++
    pointer.index = len
    pointer = pointer.next
  }

  pre = Math.ceil(len / 2) - 1

  pointer = head

  while(pointer) {
    if (pointer.index === pre) {
      pointer.next = pointer.next.next
      break
    } else {
      pointer = pointer.next
    }
  }

  return head
}

