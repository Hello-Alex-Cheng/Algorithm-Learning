import { Compare, defaultCompare } from "../utils/index.js"

export class Node {
  constructor(key) {
    this.key = key
    this.left = null
    this.right = null
  }
}

export default class BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    this.compareFn = compareFn
    this.root = null
  }

  insert(key) {
    if (!this.root) {
      const node = new Node(key)
      this.root = node
    } else {
      this.insertNode(this.root, key)
    }
  }

  insertNode(node, key) {
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      // 要插入的元素小于 node 节点，插入到左边
      if (!node.left) {
        node.left = new Node(key)
      } else {
        this.insertNode(node.left, key) // 9 10
      }
    } else {
      if (!node.right) {
        node.right = new Node(key)
      } else {
        this.insertNode(node.right, key)
      }
    }
  }

  // 中序遍历
  // 从小到大的顺序访问所有节点
  // 应用：对树进行排序的操作
  inOrderTraverse(cb) {
    this.inOrderTraverseNode(this.root, cb)
  }
  inOrderTraverseNode(node, cb) {
    if (node !== null) {
      // 递归，就是函数的进栈出栈的过程
      this.inOrderTraverseNode(node.left, cb)
      cb(node.key)
      this.inOrderTraverseNode(node.right, cb)
    }
  }

  // 先序遍历
  // 优先于后代节点的顺序访问每个节点
  // 应用：打印一个结构化的文档
  preOrderTraverse(cb) {
    this.preOrderTraverseNode(this.root, cb)
  }
  preOrderTraverseNode(node, cb) {
    if (node !== null) {
      cb(node.key)
      this.preOrderTraverseNode(node.left, cb)
      this.preOrderTraverseNode(node.right, cb)
    }
  }

  // 后序遍历
  // 先访问节点的后代节点，再访问节点本身。
  // 应用：计算一个目录及子目录中所有文件所占空间的大小
  postOrderTraverse(cb) {
    this.postOrderTraverseNode(this.root, cb)
  }
  postOrderTraverseNode(node, cb) {
    if (node !== null) {
      this.postOrderTraverseNode(node.left, cb)
      this.postOrderTraverseNode(node.right, cb)
      cb(node.key)
    }
  }

  // 获取最小值
  min() {
    return this.minNode(this.root)
  }

  minNode(node) {
    let cur = node
    // 如果 cur.left === null 表示当前节点就已经是最左侧的节点了。
    while(cur !== null && cur.left !== null) {
      cur = cur.left
    }

    return cur
  }

  max() {
    return this.maxNode(this.root)
  }

  maxNode(node) {
    let cur = node
    while (cur !== null && cur.right !== null) {
      cur = cur.right
    }

    return cur
  }

  // 搜索一个特定的值
  search(key) {
    return this.searchNode(this.root, key)
  }

  searchNode(node, key) {
    if (node === null) return false
    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      // 表示值比根节点小
      return this.searchNode(node.left, key)
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      // 表示比根节点大
      return this.searchNode(node.right, key)
    } else {
      return node
    }
  }

  remove(key) {
    this.root = this.removeNode(this.root, key)
  }

  // 删除节点
  removeNode(node, key) {
    if (node === null) return null

    if (this.compareFn(key, node.key) === Compare.LESS_THAN) {
      // 删除根节点左边的节点
      // 当完成删除的操作后，返回最新的节点，假设删除了叶子节点，那么 node.left 就是 null 了
      node.left = this.removeNode(node.left, key)
      return node
    } else if (this.compareFn(key, node.key) === Compare.BIGGER_THAN) {
      node.right = this.removeNode(node.right, key)
      return node
    } else {
      // 找到要删除的 node 了
      // 第一种情况，删除的节点是 “叶子节点”
      if (node.left === null && node.right === null) {
        node = null
        return node
      }

      // 第二种情况：删除的节点只有一个左侧或右侧子节点
      if (node.left === null) {
        // 表示要删除的节点只有一个右子节点，那就让右子节点直接代替这个要删除的节点即可，
        node = node.right
        return node
      } else if (node.right === null) {
        node = node.left
        return node
      }

      // 第三种情况：删除的节点有两个子节点
      // 四步骤:
      // 1.首先要找到当前节点的右侧节点中最小的那个节点
      // 2.用来替换当前要删除的节点
      // 3.现在树中拥有了两个相同的key，然后删除掉右侧树中的最小节点
      // 4.返回这个新的节点
      const aux = this.minNode(node.right)
      node.key = aux.key
      node.right = this.removeNode(node.right, aux.key)
      return node
    }
  }
}

const tree = new BinarySearchTree()

tree.insert(11)
tree.insert(7)
tree.insert(15)
tree.insert(5)
tree.insert(3)
tree.insert(9)
tree.insert(8)
tree.insert(10)
tree.insert(13)
tree.insert(12)
tree.insert(14)
tree.insert(20)
tree.insert(18)
tree.insert(25)
tree.insert(6)
// tree.inOrderTraverse((key) => console.log(key))
// tree.preOrderTraverse((key) => console.log(key))
// tree.postOrderTraverse((key) => console.log(key))

// 最小值
// console.log(tree.min())

// // 最大值
// console.log(tree.max())

// // 搜索特定的值
// console.log(tree.search(7))

// tree.remove(3)
tree.remove(9)
console.log(tree.root.left)


