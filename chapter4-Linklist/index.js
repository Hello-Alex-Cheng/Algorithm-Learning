/*
 * @Author: chenghaolun
 * @Date: 2021-07-26 15:22:08
 * @LastEditors: chenghaolun
 * @Description: 移动 0
 * @LastEditTime: 2021-07-27 17:15:41
 * @FilePath: \Algorithm-Learning\chapter4-Linklist\index.js
 */

const moveZeroes = function(nums) {
  // let count = 0
  // for (let i = 0, len = nums.length; i < len;) {
  //   if (count === len) break
  //   if (nums[i] !== 0) {
  //     i++
  //     continue
  //   }

  //   const zero = nums.splice(i, 1)[0]
  //   nums.push(zero)
  //   i = 0
  //   count++
  // }
  // return nums

  for (let i = 0, len = nums.length; i < len; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1)
      nums.push(0)
      i--
      len--
    }
  }

  return nums
}




// 找出字符串中 无重复字符串的长度
const lengthOfLongestSubstring = function(s) {
  let minIndex = 0
  let res = 0

  for (let i = 0, len = s.length; i < len; i++) {
    // indexOf 返回指定值在列中首次出现的位置，第二个参数表示从 下标 开始
    if (s.indexOf(s[i], minIndex) < i) {
      minIndex = s.indexOf(s[i], minIndex) + 1
    } else {
      res = Math.max(res, i - minIndex + 1) // 3, i = 3
    }
  }

  return res
}

// abcabcbb
// console.log(lengthOfLongestSubstring("abcabcbb"))





// 爬楼梯
// 4
// 1 + 1 + 1 + 1
// 1 + 2 + 1
// 1 + 1 + 2
// 2 + 1 + 1
// 2 + 2

function fb(n) {
  // 递归，数多起来了就好卡啊
  // if (n === 0 || n === 1) return 1
  // return fb(n - 2) + fb(n - 1)

  // 动态规划
  const dp = [1, 1]
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }

  return dp[n]
}

// console.log(fb(4))


// 三数之和
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
