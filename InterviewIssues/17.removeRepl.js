/*
 * @Author: chenghaolun
 * @Date: 2021-08-11 10:33:13
 * @LastEditors: chenghaolun
 * @Description: 删除无序单链表中值重复出现的节点
 * @LastEditTime: 2021-08-11 11:02:12
 * @FilePath: \Algorithm-Learning\InterviewIssues\17.removeRepl.js
 */

function removeRepl(head) {

  if (!head) return null

  const set = new Set()
  let pre = head
  let curr = head.next

  set.add(pre.val)

  while(curr) {
    if (set.has(curr.val)) {
      pre.next = curr.next
    } else {
      set.add(curr.val)
      pre = curr
    }

    curr = curr.next
  }

  console.log(JSON.stringify(head, null, 2))
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

removeRepl(link)
