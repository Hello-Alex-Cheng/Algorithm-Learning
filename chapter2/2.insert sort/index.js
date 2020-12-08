class InsertionSort {
	sort(arr) {
		const len = arr.length
		// 假设第一个数是排序好的
		for (let i = 1; i < len; i++) {
			// 正序,如果 arr[j] < arr[j - 1] 就让它俩交换位置
			// for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
			// 	this.exchage(arr, j, j-1)
			// }
			let j = i
			while(j > 0 && arr[j] < arr[j - 1]) {
				this.exchage(arr, j, j-1)
				j--
			}
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


