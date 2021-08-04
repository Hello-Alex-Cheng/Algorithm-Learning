/*
 * @Author: chenghaolun
 * @Date: 2021-08-04 15:22:53
 * @LastEditors: chenghaolun
 * @Description: 归并排序
 * @LastEditTime: 2021-08-04 16:17:35
 * @FilePath: \Algorithm-Learning\chapter2-sort\6.mergeSort\index.js
 */

// 分治法

const list = [3, 100, 3, 5, 1, 67, 6, 4, 45, 4]

function mergeSort(arr) {
  if (arr.length > 1) {
    const { length } = arr

    const middle = Math.floor(length / 2)

    const left = mergeSort(arr.slice(0, middle)) // [3, 100, 3, 5, 1] => [3, 100] => [3] , [100]
    const right = mergeSort(arr.slice(middle, length)) // [67, 6, 4, 45, 4]

    arr = merge(left, right)
  }

  return arr
}

// left: [3, 100], right: [1, 3, 5]
function merge(left, right) {
  let i = 0, j = 0

  const result = [] // [1, 3, 3, 5]

  // 对比 left 和 right 数组, 将确认顺序的元素 push 到 result 数组中
  while(i < left.length && j < right.length) {
    result.push(left[i] < right[j] ? left[i++] : right[j++])
  }

  // 对比完 left 和 right 之后，还剩最后一个元素直接 concat 到 result 后面
  return result.concat(i < left.length ? left.slice(i) : right.slice(j))
}

console.log(mergeSort(list))
