export class Node {
  constructor(element) {
    this.element = element
    this.next = null
  }
}

function defaultEquals (a, b) {
  return a === b
}

export class LinkedList {
  constructor(equalsFn = defaultEquals) {
    this.count = 0 // 记录链表中元素的数量
    this.head = null // 保存链表中第一个元素
    this.equalsFn = equalsFn
  }

  // 获取指定位置的元素
  getElememtAt(index) {
    if (index >= 0 && index <= this.count) {
      let node = this.head

      for (let i = 0; i < index && node !== null; i++) {
        // 如果 index 是 1 的话，表示获取链表第二个元素，只循环一次
        // 那么直接让 node = this.head.next 就表示第二个元素了
        node = node.next
      }

      return node
    }

    return undefined
  }

  push(el) {
    // 向末尾添加元素
    const node = new Node(el)
    let current = undefined
    if (this.head === null) {
      this.head = node
    } else {
      current = this.head

      while(current.next !== null) {
        current = current.next
      }

      current.next = node
    }
    this.count++
  }

  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head

      if (index === 0) {
        // 移除第一项
        this.head = current.next
      } else {
        // 获取将要删除元素的前驱
        let previous = this.getElememtAt(index - 1)
        current = previous.next

        // 让将要删除元素的前驱的 next 指向 将要删除元素的 next，即可跳过这个要删除的元素
        previous.next = current.next
      }
      this.count--
      return current.element
    }

    return undefined
  }

  insert(element, index) {

    if (index >= 0 && index <= this.count) {
      const node = new Node(element)

      if (index === 0) {
        const current = this.head
        node.next = current

        // 快速获取链表的第一个元素，所以需要将 head 重新指向当前元素
        this.head = node
      } else {
        const previous = this.getElememtAt(index - 1) // 1.获取插入位置的前驱
        const current = previous.next // 2.获取插入位置的元素
        previous.next = node // 3.将插入位置的前驱指向当前插入的元素
        node.next = current // 4.将当前元素的后继指向原本在这个位置的元素
      }
      this.count++
      return true
    }

    // 插入失败
    return false
  }

  // 返回元素的位置
  indexOf(element) {
    let current = this.head
    for (let i = 0; i < this.count && current !== null; i++) {
      if (current.element === element) {
        // 单独使用 for 循环时不可以使用 return 关键字，在函数体内可以使用 return 来中断循环
        return i
      }
      current = current.next
    }

    return -1
  }

  // 移除元素
  remove(element) {
    const index = this.indexOf(element)
    return this.removeAt(index)
  }

  size() {
    return this.count
  }

  getHead() {
    return JSON.stringify(this.head, null, 2)
  }

  isEmpty() {
    return this.count === 0
  }

  size() {
    return this.count
  }

  toString() {
    return JSON.stringify(this.head, null, 2)
  }
}

// const linklist = new LinkedList()

// linklist.push(1)
// linklist.push(2)
// linklist.push(3)
// linklist.push(4)
// linklist.insert(99, 2)
// // linklist.removeAt(1)

// linklist.remove(99)

// console.log(linklist.getHead())
// console.log(linklist.indexOf(3))


var mergeTwoLists = function(l1, l2) {
  let node = null
}
