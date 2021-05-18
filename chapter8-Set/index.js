class Set {
  constructor() {
    this.items = {}
  }

  has(elem) {
    // 会检索原型上的属性，可以通过 Object.prototype.hasOwnPorperty.call(this.items, elem)
    return elem in this.items
  }

  add(elem) {
    if (!this.has(elem)) {
      this.items[elem] = elem
      return true
    }
    return false
  }

  delete(elem) {
    if (!this.has(elem)) {
      delete this.items[elem]
      return true
    }
    return false
  }

  size() {
    return Object.keys(this.items).length
  }

  values() {
    return Object.values(this.items)
  }

  // 并集
  union(otherSet) {
    const unionSet = new Set()

    this.values().forEach(v => unionSet.add(v))

    otherSet.values().forEach(v => unionSet.add(v))

    return unionSet
  }

  // 交集
  intersection(otherSet) {
    const intersectionSet = new Set()
    let small = null
    let bigger = null

    // 遍历小的集合
    if (this.size() > otherSet.size()) {
      small = otherSet.values()
      bigger = this.values()
    } else {
      small = this.values()
      bigger = otherSet.values()
    }

    small.forEach(v => {
      count++
      if (bigger.includes(v)) {
        intersectionSet.add(v)
      }
    })

    return intersectionSet
  }

  // 差集
  difference(otherSet) {
    const differenceSet = new Set()

    this.values().forEach(v => {
      if (!otherSet.has(v)) {
        differenceSet.add(v)
      }
    })

    return differenceSet
  }

  // 子集
  inSubsetOf(otherSet) {
    if (this.size() > otherSet.size()) {
      // 如果当前集合大于 otherSet 集合，肯定就不是 otherSet 的子集了
      return false
    }

    // every 方法，如果有一个不成立，就返回 false
    return this.values().every(v => otherSet.has(v))
  }
}

const setA = new Set()

setA.add(2)
setA.add(3)
setA.add(4)
setA.add(5)
setA.add(6)

const setB = new Set()

setB.add(2)
setB.add(3)
setB.add(4)
setB.add(5)
setB.add(6)
setB.add(7)
setB.add(8)
setB.add(9)
setB.add(10)

const setAB = setA.inSubsetOf(setB)

console.log(setAB)
