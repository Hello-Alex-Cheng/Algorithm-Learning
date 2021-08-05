/*
 * @Author: chenghaolun
 * @Date: 2021-08-05 15:48:56
 * @LastEditors: chenghaolun
 * @Description: 移动 0
 * @LastEditTime: 2021-08-05 16:20:33
 * @FilePath: \Algorithm-Learning\面试算法题\8.MoveZeros.js
 */

const arr = [1, 0, 1, 0, 3, 12, 99, 0, 43, 0]

function moveZeros(nums) {

  if (nums.length < 2) return nums

  // 解法一

  // const res = []
  // nums.forEach(i => {
  //   if (i) {
  //     res.push(i)
  //   }
  // })
  // for (let i = res.length; i < nums.length; i++) {
  //   res[i] = 0
  // }
  // console.log(res)


  // 解法二

  // const numbers = [], zeros = []
  // nums.forEach(i => {
  //   if (i) {
  //     numbers.push(i)
  //   } else {
  //     zeros.push(i)
  //   }
  // })
  // console.log(numbers.concat(zeros))


  // 解法三

  // const res = new Array(nums.length).fill(0)
  // let k = 0
  // nums.forEach(i => {
  //   if (i) {
  //     res[k] = i
  //     k++
  //   }
  // })
  // console.log(res)


  // 解法四: 原址操作
  // 定义指针 k
  // 当碰到不是 0 的数时，给 k 自增
  // 如果 k !== i 就让 nums[i] 和 nums[k] 交换位置
  let k = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i]) {
      if (k !== i) {
        const temp = nums[k]
        nums[k] = nums[i]
        nums[i] = temp
        k++
      } else {
        k++
      }
    }
  }

  console.log(nums)
}


moveZeros(arr)
