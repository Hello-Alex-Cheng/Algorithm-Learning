/*
 * @Author: chenghaolun
 * @Date: 2021-07-24 16:22:33
 * @LastEditors: chenghaolun
 * @Description: 快速排序
 * @LastEditTime: 2021-08-04 16:32:27
 * @FilePath: \Algorithm-Learning\chapter2-sort\5.quickSort\index.js
 */

// 跟 `归并排序` 类似，都是采用 分治法，复杂度都为 O(nlogn)

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

console.log(quickSort(arr))
