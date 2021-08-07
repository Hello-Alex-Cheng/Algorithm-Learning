/*
 * @Author: chenghaolun
 * @Date: 2021-08-04 16:54:00
 * @LastEditors: chenghaolun
 * @Description: 打印两个有序链表的公共部分
 * @LastEditTime: 2021-08-04 16:56:27
 * @FilePath: \Algorithm-Learning\面试算法题\7.两个有序链表公共部分.js
 */

function printPublicNode(link1, link2) {

  while(link1 !== null && link2 !== null) {
    if (link1.value < link2.value) {
      link1 = link1.next
    } else if (link1 > link2.value) {
      link2 = link2.value
    } else {
      console.log('公共节点： ', link1.value)
      link1 = link1.next
      link2 = link2.next
    }
  }

}

