class Queue {
  constructor() {
    this.count = 0
    this.lowestCount = 0
    this.items = {}
  }

  enqueue(el) {
    this.items[this.count] = el
    this.count++
  }

  dequeue() {
    // 出列，队列遵宪先进先出原则（先来先服务）
    if (this.isEmpty()) return undefined

    const result = this.items[this.lowestCount]

    delete this.items[this.lowestCount]

    this.lowestCount++

    return result
  }

  isEmpty() {
    return this.count - this.lowestCount === 0
  }

  peek() {
    if (this.isEmpty()) return undefined

    return this.items[this.lowestCount]
  }

  size() {
    return this.count - this.lowestCount
  }

  clear() {
    this.items = {}
    this.count = 0
    this.lowestCount = 0
  }

  toString() {
    if (this.isEmpty()) return ''

    let objStr = `${this.items[this.lowestCount]}`

    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objStr = `${objStr}, ${this.items[i]}`
    }

    return objStr
  }
}

const q = new Queue()

q.enqueue(5)
q.enqueue(51)
q.enqueue(53)

console.log(q.size())
console.log(q.peek())
console.log(q.toString())
