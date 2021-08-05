/*
 * @Author: chenghaolun
 * @Date: 2021-08-05 17:17:50
 * @LastEditors: chenghaolun
 * @Description: 两数组交集
 * @LastEditTime: 2021-08-05 17:25:14
 * @FilePath: \Algorithm-Learning\面试算法题\11.intersectionOfTwoArrays.js
 */

// 给定两个数组，编写一个函数来计算它们的交集。

// 示例 1:
// 输入: nums1 = [1,2,2,1], nums2 = [2,2]
// 输出: [2]

// 示例 2:
// 输入: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// 输出: [9,4]

// 说明:

// 输出结果中的每个元素一定是唯一的。

// 我们可以不考虑输出结果的顺序。


const nums1 = [4,9,5,6, 8, 9, 10], nums2 = [5, 10, 1]

function intersectionOfTwoArrays(arr1, arr2) {
  const res = []

  arr1.forEach(a => {
    arr2.forEach(b => {
      if (a === b) {
        if (!res.includes(a)) res.push(a)
      }
    })
  })

  console.log(res)
}

intersectionOfTwoArrays(nums1, nums2)

