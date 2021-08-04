/*
 * @Author: chenghaolun
 * @Date: 2021-07-24 15:54:09
 * @LastEditors: chenghaolun
 * @Description: 冒泡排序
 * @LastEditTime: 2021-08-04 10:46:42
 * @FilePath: \Algorithm-Learning\chapter2-sort\4.bubbleSort\index.js
 */

const arr = [3, 100, 3, 5, 1, 67, 6, 4, 45, 4]

const change = (arr, a, b) => {
  const mid = arr[a]
  arr[a] = arr[b]
  arr[b] = mid
}

// O(n^2)
function bubbleSort(arr) {
  const len = arr.length

  if (len < 2) return arr

  for(let i = 0; i < len; i++) {

    // 为什么是 len - i + 1 ？ 当 i = 0 时，j < len - 1，j 的for 循环遍历完之后，肯定会找出最大的放到最后
    // 那么 i = 1 时， j < len - 2 ，j 的第二次 for 循环，就要找出第二大的元素了，最后一个已经排序了，不用再遍历了
    for(let j = 0; j < len - i + 1; j++) {
      if (arr[j] > arr[j + 1]) {
        change(arr, j, j + 1)
      }
    }
  }

  return arr
}


function test(arr) {

  // 为什么要双循环，是因为，内部 for 循环遍历完之后，只会将一个元素排序
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      const temp = arr[i]
      arr[i] = arr[i + 1]
      arr[i + 1] = temp
    }
  }

  return arr
}

console.log(bubbleSort(arr))

