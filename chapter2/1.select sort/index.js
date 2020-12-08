class SelectSort {
	sort(arr) {
		const len = arr.length
		for (let i = 0; i < len; i++) {
			// 拿到第一个元素
			let min = i
			for (let j = i + 1; j < len; j++) {
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


