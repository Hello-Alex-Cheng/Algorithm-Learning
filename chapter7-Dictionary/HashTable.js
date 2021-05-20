import { defaultToString } from "../utils/index.js"
import { ValuePair } from './index.js'

class HashTable {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn
    this.table = {}
  }

  loseloseHashCode(key) {
    if (typeof key === 'number') {
      return key
    }

    let hash = 0
    const tableKey = this.toStrFn(key)
    for (let i = 0; i < tableKey.length; i++) {
      hash += tableKey.charCodeAt(i)
    }

    return hash % 37
  }

  hashCode(key) {
    return this.loseloseHashCode(key)
  }

  put(key, value) {
    if (key != null && value != null) {
      const position = this.hashCode(key)

      this.table[position] = new ValuePair(key, value)

      return true
    }
    return false
  }

  get(key) {
    const valuePair = this.table[this.hashCode(key)]

    return valuePair == null ? undefined : valuePair.value
  }

  remove(key) {
    const position = this.hashCode(key)
    const valuePair = this.table[position]

    if (valuePair != null) {
      delete this.table[position]
      return true
    }

    return false
  }
}

const ht = new HashTable()

ht.put('Gandalf', 'gandalf@email.com')
ht.put('alexCc', 'alexCc@email.com')
ht.put('Tyrion', 'Tyrion@email.com')
ht.put('alexCc', 'alexCc@email12.com')

console.log(ht.hashCode('Gandalf') + ' - Gandalf')
console.log(ht.hashCode('AlexCc') + ' - alexCc')
console.log(ht.hashCode('Tyrion') + ' - Tyrion')

console.log(ht)
