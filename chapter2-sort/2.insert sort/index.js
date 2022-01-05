/*
 * @Author: chenghaolun
 * @Date: 2020-12-08 11:06:11
 * @LastEditors: chenghaolun
 * @Description: insert sort
 * @LastEditTime: 2021-08-12 11:12:53
 * @FilePath: \Algorithm-Learning\chapter2-sort\2.insert sort\index.js
 */
class InsertionSort {
	sort(arr) {
		const len = arr.length
		// 假设第一个数是排序好的
		// for (let i = 1; i < len; i++) {
		// 	// 正序,如果 arr[j] < arr[j - 1] 就让它俩交换位置
		// 	// for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
		// 	// 	this.exchage(arr, j, j-1)
		// 	// }
		// 	let j = i
		// 	const temp = arr[i]
		// 	while(j > 0 && arr[j] < arr[j - 1]) {
		// 		this.exchage(arr, j, j-1)
		// 		j--
		// 	}
		// }
		// return arr

		let temp

		// i 从 1 开始，默认第一项已经排序
		for (let i = 1; i < len; i++) {
			let j = i

			// 保存当前要定位的值
			temp = arr[i]

			// 当遇到前一项 比 temp 大 时，表示这个 temp 需要往前插入
			// 让当前 arr[j] = arr[j - 1] 完成移动
			// 直到某一项不比 temp 大了，移动结束
			// 并且使 arr[j] = temp， 这里的 j 已经是经过多次 j-- 了的
			// 表示 temp 刚好要插入到 j 这个位置
			while(j > 0 && arr[j - 1] > temp) {
				arr[j] = arr[j - 1]
				j--
			}

			// temp 刚好要插入的位置
			arr[j] = temp
		}

		return arr
	}
	exchage (a, i, j) {
		const t = a[i]
		a[i] = a[j]
		a[j] = t
	}
}
const instance = new InsertionSort()
console.log(instance.sort([3,1,5,6,2,7,4]))

// j = 1, temp = arr[1] = 1
// arr[j] = arr[j - 1] = 3, j--
// arr[0] = temp = 1
// [1,3,5,6,2]

// j = i = 2, temp = arr[2] = 5
// j = i = 3, temp = arr[3] = 6
// 不动

// j = i = 4, temp = arr[4] = 2
// [1,3,5,6,6] j = 3
// [1,3,5,5,6] j = 2
// [1,3,3,5,6] j = 1
// arr[j] = 2

// [1,2,3,5,6]

