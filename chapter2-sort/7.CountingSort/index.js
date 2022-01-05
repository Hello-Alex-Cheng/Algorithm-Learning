/*
 * @Author: chenghaolun
 * @Date: 2021-08-13 10:02:01
 * @LastEditors: chenghaolun
 * @Description: 计数排序
 * @LastEditTime: 2021-08-13 10:09:29
 * @FilePath: \Algorithm-Learning\chapter2-sort\7.CountingSort\index.js
 */

const list = [3, 100, 3, 5, 1, 67, 6, 4, 45, 4]

function countingSort(arr) {

  if (arr.length < 2) return arr

  const max = Math.max(...list)

  const counts = new Array(max + 1) // len: 101

  arr.forEach(i => {
    if (!counts[i]) {
      counts[i] = 0
    }

    counts[i]++
  })

  let sortIndex = 0

  // counts 下标是 arr 中的元素，value 是出现的次数
  counts.forEach((count, i) => {
    while(count > 0) {
      arr[sortIndex++] = i
      count--
    }
  })

  console.log(arr)
}


countingSort(list)