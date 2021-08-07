/*
 * @Author: chenghaolun
 * @Date: 2021-08-05 16:21:57
 * @LastEditors: chenghaolun
 * @Description: 给颜色数组排序
 * @LastEditTime: 2021-08-05 16:53:32
 * @FilePath: \Algorithm-Learning\面试算法题\9.sortColors.js
 */


// 给定一个包含红色、白色和蓝色，一共 n 个元素的数组，原地对它们进行排序，使得相同颜色的元素相邻，并按照红色、白色、蓝色顺序排列。

// 此题中，我们使用整数 0、 1 和 2 分别表示红色、白色和蓝色。

// 注意:
// 不能使用代码库中的排序函数来解决这道题。

// 示例:

// 输入: [2,0,2,1,1,0]

// 输出: [0,0,1,1,2,2]


// 三路快排思路

const arr = [2,0,2,1,0,1]

function swap(arr, a, b) {
  const temp = arr[a]
  arr[a] = arr[b]
  arr[b] = temp
}

// zero 往 右 移动
// len 往 左 移动，当 nums[i] === 2 时， len--

function sortColor(nums) {

  let zero = -1
  let len = nums.length

  for (let i = 0; i < len;) {
    if (nums[i] === 1) {
      i++
    } else if (nums[i] === 2) {
      len--
      swap(nums, i, len)
    } else {
      zero++
      swap(nums, zero, i)
      i++
    }
  }

  console.log(nums)

}

sortColor(arr)
