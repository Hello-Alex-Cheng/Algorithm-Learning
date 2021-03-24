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
tree.postOrderTraverse((key) => console.log(key))
