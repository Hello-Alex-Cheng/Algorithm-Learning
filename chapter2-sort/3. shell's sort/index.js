class InsertionSort {
	sort(arr) {
		const N = arr.length
		let h = 1
		while(h < N / 3) {
			h = 3*h + 1 // 4
		}
		while(h) {
			for(let i = h; i < N; i++) {
				const temp = arr[i]
				for (let j = i - h; j >= 0 && arr[j] > temp; j-= h) {
					this.exch(arr, j, j + h)
				}
			}
			h = Math.floor(h/3)
		}
		return arr
	}

	exch(arr, j, i) {
		let t = arr[i]
		arr[i] = arr[j]
		arr[j] = t
	}
}
const instance = new InsertionSort()
console.log(instance.sort([3,1,5,6,2,7,4,10]))
