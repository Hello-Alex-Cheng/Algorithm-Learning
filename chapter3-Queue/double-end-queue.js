class DoubleEndQueue {
  constructor() {
    this.count = 0
    this.lowestCount = 0
    this.items = {}
  }

  addFront(el) {
    if (this.isEmpty()) {
      this.addBack(el)
    } else if (this.lowestCount > 0) {
      // 队列第一个元素的 索引 不为 0
      this.lowestCount--
      this.items[this.lowesCount] = el
    } else {

      // 原本 count = 0，往双端队列首部添加元素，那么就意味着需要把所有元素往后挪一位。
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1]
      }

      // 随后将 count 加一，表示当前队列里面有多个元素
      this.count++

      // 将 lowestCount 定位到双端队列的第一个元素
      this.lowestCount = 0

      this.items[0] = el
    }
  }

  addBack(el) {
    this.items[this.count] = el
    this.count++
  }

  removeFront() {
    // 和队列的 dequeue 方法相同
    if (this.isEmpty()) return undefined
    const result = this.items[this.lowestCount]

    delete this.items[this.lowestCount]

    this.lowestCount++

    return result
  }

  removeBack() {
    if (this.isEmpty()) return undefined
    const result = this.items[this.count - 1]

    delete this.items[this.count - 1]

    this.count--

    return result
  }

  peekFront() {
    if (this.isEmpty()) return undefined
    return this.items[this.lowestCount]
  }

  peekBack() {
    if (this.isEmpty()) return undefined
    return this.items[this.count - 1]
  }

  isEmpty() {
    return this.count - this.lowestCount === 0
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

const dequeue = new DoubleEndQueue()

console.log(dequeue)

dequeue.addBack('alex0')
dequeue.addBack('alex1')
dequeue.addBack('alex2')
console.log(dequeue)

dequeue.addFront('alex - 1')
console.log(dequeue)

console.log('dequeue.peekBack()', dequeue.peekBack())
console.log('dequeue.removeFront()', dequeue.removeFront())
console.log(dequeue.size())
