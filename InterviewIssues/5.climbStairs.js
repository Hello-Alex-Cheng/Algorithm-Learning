/*
 * @Author: chenghaolun
 * @Date: 2021-07-28 09:21:38
 * @LastEditors: chenghaolun
 * @Description: 爬楼梯
 * @LastEditTime: 2021-08-05 16:55:32
 * @FilePath: \Algorithm-Learning\面试算法题\5.climbStairs.js
 */

// 爬楼梯，一次可以爬 1 个阶梯，或者两个阶梯，有几种方式可以爬到楼顶 ?

// 比如：2 => 2 || 1 + 1
// 比如：3 => 2 + 1 || 1 + 2 || 1 + 1 + 1

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

