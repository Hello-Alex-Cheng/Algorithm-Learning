/*
 * @Author: chenghaolun
 * @Date: 2021-07-28 08:44:41
 * @LastEditors: chenghaolun
 * @Description: 快排
 * @LastEditTime: 2021-07-28 08:45:52
 * @FilePath: \Algorithm-Learning\面试算法题\3.快排找第k大.js
 */

const arr = [3, 1, 3, 5, 6, 4, 45, 4, 67, 100]

function quickSort(arr) {

  if (arr.length <= 1) return arr

  const left = [], right = [], midIndex = Math.floor(arr.lenght / 2)
  const mid = arr.splice(midIndex, 1)[0]

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= mid) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  return quickSort(left).concat([mid], quickSort(right))
}

function findK(arr, k) {
  // 逆序
  const sortedArr = quickSort(arr)

  return sortedArr[k - 1]
}
