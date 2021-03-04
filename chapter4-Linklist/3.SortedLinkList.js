import { LinkedList } from './1.LinkedList.js'

const Compare = {
  LESS_THAN: -1,
  BIGGER_THAN: 1
}

function defaultCompare(a, b) {
  if (a === b) {
    return 0
  }

  return a < b ? Compare.LESS_THAN : Compare.BIGGER_THAN
}

class SortedLinkList extends LinkedList {
  constructor(compareFn = defaultCompare) {
    super()
    this.compareFn = compareFn
  }

  insert(element, index = 0) {
    if (this.isEmpty()) {
      // 直接调用父类 insert 方法
      return super.insert(element, index)
    }

    const pos = this.getIndexNextSortedElement(element)
    return super.insert(element, pos)
  }

  getIndexNextSortedElement(element) { // 22
    let current = this.head
    let i = 0
    for(; i < this.size() && current; i++) {
      const comp = this.compareFn(element, current.element)

      if (comp === Compare.LESS_THAN) {
        return i
      }

      current = current.next
    }

    return i
  }
}

const sortedLinkList = new SortedLinkList()

sortedLinkList.insert(111)
sortedLinkList.insert(4)
sortedLinkList.insert(22)
sortedLinkList.insert(3)
sortedLinkList.insert(1)

console.log(sortedLinkList.toString())


