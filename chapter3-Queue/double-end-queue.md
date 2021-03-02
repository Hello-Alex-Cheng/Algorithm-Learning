## 双端队列
  1. 允许同时从前端和后端添加和移除元素的特殊队列
  2. 它是一种同时遵循队列和栈的原则的数据结构
  3. 可以认为是队列和栈的一种结合体

## 方法

大部分方法和队列的方法一样，只不过增加了一些和栈相同的代码

```js

  // 在双端队列前端添加元素分三种情况
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

```