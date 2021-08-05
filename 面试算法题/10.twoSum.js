/*
 * @Author: chenghaolun
 * @Date: 2021-08-05 16:58:39
 * @LastEditors: chenghaolun
 * @Description: 两数之和
 * @LastEditTime: 2021-08-05 17:05:09
 * @FilePath: \Algorithm-Learning\面试算法题\10.twoSum.js
 */

// 给定一个已按照升序排列 的有序数组，找到两个数使得它们相加之和等于目标数。

// 函数应该返回这两个下标值 index1 和 index2，其中 index1 必须小于 index2。

// 说明:

// 返回的下标值（index1 和 index2）不是从零开始的。

// 你可以假设每个输入只对应唯一的答案，而且你不可以重复使用相同的元素。

// 示例:

// 输入: numbers = [2, 7, 11, 15], target = 9
// 输出: [1,2]
// 解释: 2 与 7 之和等于目标数 9 。因此 index1 = 1, index2 = 2 。

const arr = [2, 7, 11, 15, 6, 0, 3]
function twosum(nums, target) {
  const len = nums.length
  let index1 = ''
  let index2 = ''

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] + nums[j] === target) {
        index1 = i
        index2 = j
      }
    }
  }

  console.log(index1, index2)
}

twosum(arr, 5)
