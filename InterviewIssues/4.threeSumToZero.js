/*
 * @Author: chenghaolun
 * @Date: 2021-07-28 09:12:48
 * @LastEditors: chenghaolun
 * @Description: 三数之和
 * @LastEditTime: 2021-07-28 09:13:30
 * @FilePath: \Algorithm-Learning\面试算法题\4.三数之和为0.js
 */

// 三数之和为 0
// [-1,0,1,2,-1,-4]

const threeSum = function(nums) {
  if (nums.length < 3) return []

  const res = [], len = nums.length

  for (let i = 0; i < len - 2; i++) {
    for (let j = i + 1; j < len - 1; j++) {
      for (let k = j + 1; k < len; k++) {
        if (nums[i] + nums[j] + nums[k] === 0) {
          res.push([nums[i], nums[j], nums[k]])
        }
      }
    }
  }

  console.log('res : ', res)
  return res
}

threeSum([-1,0,1,2,-1,-4])
