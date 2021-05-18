/**
 * @AVl 二叉搜索树的一种变形
 * 自平衡树，添加或移除节点时，AVL会尝试保持自平衡
 * 任意一个节点（不论深度）的左子树和右子树高度最多相差 1
 */
import { Compare, defaultCompare } from "../utils/index.js"
import BinarySearchTree from './1.BinarySearchTree.js'

// 节点的高度：节点的高度是从节点到任意子节点的边的最大值

class AVLTree extends BinarySearchTree {
  constructor(compareFn = defaultCompare) {
    super(compareFn)

    // 这里compareFn 继承了 BST 的 compareFn
    // this.compareFn = compareFn
    this.root = null
  }
}

const avl = new AVLTree()

console.log(avl.compareFn.toString())
