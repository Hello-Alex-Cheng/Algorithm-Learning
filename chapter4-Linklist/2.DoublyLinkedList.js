import { Node, LinkedList } from'./1.LinkedList.js'

class DoublyNode extends Node {
  constructor(element) {
    super(element)
    this.prev = null
  }
}

function defaultEquals (a, b) {
  return a === b
}

class DoublyLinkedList extends LinkedList {
  constructor(equalsFn = defaultEquals) {
    super(equalsFn)
    this.tail = null // 对链表最后一个元素的引用
  }

  // 重写 insert 方法
  insert(element, index) {
    if (index >= 0 && index <= this.count) {
      const node = new DoublyNode(element)
      let current = this.head

      if (index === 0) {
        // 插入到第一个位置
        if (current === null) {
          this.head = node
          this.tail = node
        } else {
          // 让当前插入元素的 next 指向原先的 head
          node.next = this.head

          // 原先的 head 的 prev 指向当前元素
          current.prev = node

          // 将 head 重新赋值
          this.head = node
        }
      } else if (index === this.count) {
        // 插入到最后一个位置
        current = this.tail
        current.next = node
        node.prev = current

        this.tail = node
      } else {
        // 将元素插入到第一个元素和最后一个元素的中间
        const previous = this.getElememtAt(index - 1)
        current = previous.next
        node.next = current
        previous.next = node
        current.prev = node
        node.prev = previous
      }

      this.count++
      return true
    }

    return false
  }

  removeAt(index) {
    if (index >= 0 && index < this.count) {
      let current = this.head

      if (index === 0) {
        this.head = current.next

        if (this.count === 1) {
          this.tail = null
        } else {
          this.head.prev = null
        }
      } else if (index === this.count - 1) {
        current = this.tail
        this.tail = current.prev
        this.tail.next = null
      } else {
        const previous = this.getElememtAt(index - 1)
        current = previous.next // 要移除的元素
        current.next.prev = previous
        previous.next = current.next
      }

      this.count--

      return current.element
    }

    return false
  }
}

const dbLinkList = new DoublyLinkedList()

dbLinkList.insert(1, 0)
dbLinkList.insert(2, 1)
dbLinkList.insert(3, 2)

dbLinkList.removeAt(2)

console.log(dbLinkList.head)
// console.log(dbLinkList)
