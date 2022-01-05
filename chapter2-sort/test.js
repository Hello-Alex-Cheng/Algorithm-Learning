/*
 * @Author: chenghaolun
 * @Date: 2021-08-29 14:52:11
 * @LastEditors: chenghaolun
 * @Description: test
 * @LastEditTime: 2021-08-29 15:43:10
 * @FilePath: \Algorithm-Learning\chapter2-sort\test.js
 */

function quickSort(arr) {
  if (arr.length < 2) return arr

  const left = []
  const right = []
  const midValue = arr.splice(Math.floor(arr.length / 2), 1)[0]

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > midValue) {
      right.push(arr[i])
    } else {
      left.push(arr[i])
    }
  }

  return quickSort(left).concat([midValue], quickSort(right))
}

function swap(target, a, b) {
  const temp = target[a]
  target[a] = target[b]
  target[b] = temp
}

function selectSort(arr) {
  if (arr.length < 2) return arr

  for(let i = 0; i < arr.length; i++) {
    let min = i
    for(let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }

    if (min !== i) {
      swap(arr, i, min)
    }
  }

  return arr
}


function insertSort(arr) {
  if (arr.length < 2) return arr

  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
      // 如果发现当前元素比前一个元素小，就交换位置
      // 并且 j-- 继续遍历
      swap(arr, j, j - 1)
    }
  }

  return arr
}

const list = [5, -1, 99, 3, 45, 10, 0, 4]

// console.log(quickSort(list))
// console.log(selectSort(list))
// console.log(insertSort(list))
// insertSort(list)


const staticList = [1, 3, 2, 44, 1, 1, 3, 2, 3]
// 统计数值数量

function staticNumbers(list) {
  const res = {}

  for (let i = 0; i < list.length; i++) {
    if (res[list[i]]) {
      res[list[i]]++
    } else {
      res[list[i]] = 1
    }
  }

  console.log(res)
}

staticNumbers(staticList)
