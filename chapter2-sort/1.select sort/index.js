/*
 * @Author: chenghaolun
 * @Date: 2020-12-04 09:07:25
 * @LastEditors: chenghaolun
 * @Description: 选择排序
 * @LastEditTime: 2021-08-04 11:01:56
 * @FilePath: \Algorithm-Learning\chapter2-sort\1.select sort\index.js
 */


class SelectSort {
	count = 0

	sort(arr) {
		const len = arr.length
		for (let i = 0; i < len; i++) {
			// 拿到第一个元素
			let min = i

			// j = i + 1 表示已经排好序的元素，不需要再用来比较了。
			for (let j = i + 1; j < len; j++) {
				this.count++
				// 让第一个元素跟之后的元素比较，找出最小的，
				if (arr[j] < arr[min]) {
					min = j
					// min = 2
				}
			}
			this.exchage(arr, i, min)
		}
		return arr
	}
	exchage (a, i, j) {
		const t = a[i]
		a[i] = a[j]
		a[j] = t
	}
}
const instance = new SelectSort()
console.log(instance.sort([3,2,1,5,6,7]))

console.log(instance.count)


