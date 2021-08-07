/*
 * @Author: chenghaolun
 * @Date: 2021-07-28 10:09:47
 * @LastEditors: chenghaolun
 * @Description: 测试文件
 * @LastEditTime: 2021-08-06 09:17:41
 * @FilePath: \Algorithm-Learning\面试算法题\index.js
 */

// 利用 Porxy, 实现数组的 负索引
// 比如 arr[-1] 表示 arr[arr.length - 1]

const proxyArr = arr => {
  const len = arr.length
  return new Proxy(arr, {
    get(target, key) {
      if (key < 0) {
        const index = len + (+key)
        return Reflect.get(target, index)
      } else {
        return Reflect.get(target, key)
      }
    }
  })
}

const arr = proxyArr([5, 6, 7, 8, 9])
// console.log(arr[-2])
// console.log(arr[-1])
// console.log(arr[0])


// let curr = head
// let prevNode = null
// while(curr) {
//   const next = curr.next
//   curr.next = prevNode
//   prevNode = curr
//   curr = next
// }

