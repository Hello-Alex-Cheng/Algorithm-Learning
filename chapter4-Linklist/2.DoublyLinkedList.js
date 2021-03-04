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
}

const dbLinkList = new DoublyLinkedList()

dbLinkList.insert(1, 0)
dbLinkList.insert(2, 0)
dbLinkList.insert(3, 0)

console.log(dbLinkList.head)
