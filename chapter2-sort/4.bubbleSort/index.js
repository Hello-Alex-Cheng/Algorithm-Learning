/*
 * @Author: chenghaolun
 * @Date: 2021-07-24 15:54:09
 * @LastEditors: chenghaolun
 * @Description: 冒泡排序
 * @LastEditTime: 2021-07-24 16:12:57
 * @FilePath: \Algorithm-Learning\chapter2-sort\4.bubbleSort\index.js
 */

const arr = [3, 1, 3, 5, 6, 4, 45, 4, 67, 100]

const change = (arr, a, b) => {
  const mid = arr[a]
  arr[a] = arr[b]
  arr[b] = mid
}

function bubbleSort(arr) {

  if (arr.length < 2) return arr

  for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        change(arr, j, j + 1)
      }
    }
  }

  return arr
}

console.log(bubbleSort(arr))



