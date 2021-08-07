/*
 * @Author: chenghaolun
 * @Date: 2021-08-07 08:55:50
 * @LastEditors: chenghaolun
 * @Description: 删除链表的倒数第 k 个元素
 * @LastEditTime: 2021-08-07 09:26:50
 * @FilePath: \Algorithm-Learning\InterviewIssues\12.removeLastKthNode.js
 */

// 解法一：快慢指针法

// 解释：创建一个头节点 dummy，quick 和 slow 指针都指向 dummy, 假设删除倒数第 k 个节点
// 先让 quick 走 k 步，然后，quick 每走一步，slow 也走一步
// 当 quick 走到 null 时 停下，此时 slow 就是要删除节点的前驱

function removeLastKthNode1(head, k) {
  const dummy = new ListNode(-1, head)

  let quick = dummy
  let slow = dummy

  for (let i = 0; i <= k; i++) {
    quick = quick.next
  }

  while(quick) {
    quick = quick.next
    slow = slow.next
  }

  // 要删除节点的前驱
  slow.next = slow.next.next

  return dummy.next
}


// 方法二

// 让链表从头走到尾，每移动一步，就让 k 的值减一

// 链表：1-＞2-＞3，K=4，链表根本不存在倒数第4个节点。k 的变化 3 => 2 => 1

// 链表：1-＞2-＞3，K=3，链表倒数第3个节点是1节点。 k 的变化 2 => 1 => 0

// 链表：1-＞2-＞3，K=2，链表倒数第2个节点是2节点。 k 的变化 1 => 0 => -1


// 如果 k < 0，说明删除的是中间节点

// 那么就要找到此节点的 前驱

// 做法，从新遍历 head，每走一步，就让 k 的值加一，当 k = 0 时，此节点就是要删除节点的前驱

// 假设链表长度为 3，删除倒数第二个节点，3 - 2 就是 1，这个 1 就是要删除节点的前驱 len - k + 1 就是要删除的节点

// len - k 是前驱， len - k + 1 是当前要删除的节点

function removeLastKthNode2(head, k) {
  if (!head || k < 1) return head

  let curr = head

  while(curr) {
    k--
    curr = curr.next
  }

  if (k > 0) {
    // 不用调整
    return head
  } else if (k === 0) {
    // 说明要删除头节点
    return head.next
  } else {
    curr = head
    while(curr) {
      // 第一次就要 ++k
      if (++k === 0) {
        curr.next = curr.next.next
        break
      } else {
        curr = curr.next
      }
    }
  }

  return head
}

