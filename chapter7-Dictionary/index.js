import { defaultToString } from "../utils/index.js"

export class ValuePair {
  constructor(key, value) {
    this.key = key
    this.value = value
  }

  toString() {
    const value = JSON.stringify(this.value)
    return `[#${this.key}: ${value}]`
  }
}

export default class Dictionary {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn
    this.table = {}
  }

  hasKey(key) {
    // null == undefined
    return this.table[this.toStrFn(key)] != null
  }

  set(key, value) {
    if (key != null && value != null) {
      const tableKey = this.toStrFn(key)

      this.table[tableKey] = new ValuePair(key, value)

      return true
    }

    return false
  }

  remove(key) {
    if (this.hasKey(key)) {
      delete this.table[this.toStrFn(key)]
      return true
    }

    return false
  }

  get(key) {
    const valuePair = this.table[this.toStrFn(key)]

    return valuePair == null ? undefined : valuePair.value
  }

  keyValus() {
    return Object.values(this.table)
  }

  keys() {
    return this.keyValus().map(valuePair => valuePair.key)
  }

  values() {
    return this.keyValus().map(valuePair => valuePair.value)
  }

  size() {
    return Object.keys(this.table).length
  }

  isEmpty() {
    return this.size() === 0
  }

  clear() {
    this.table = {}
    return true
  }

  toString() {
    if (this.isEmpty()) {
      return ''
    }

    const valuePairs = this.keyValus()
    let objStr = `${valuePairs[0].toString()}`

    for (let i = 1; i < valuePairs.length; i++) {
      objStr = `${objStr}, ${valuePairs[i].toString()}`
    }

    return objStr
  }
}

const d = new Dictionary()

d.set('alex', {
  name: 'alexCc',
  age: 18
})
d.set('alex1', {
  name: 'alexCc1',
  age: 18
})
d.set('alex2', {
  name: 'alexCc2',
  age: 18
})

// console.log(d.toString())
