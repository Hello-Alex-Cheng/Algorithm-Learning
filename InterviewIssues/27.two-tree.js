/**
 * @name 对二叉树进行层序遍历
 * @description 从上往下，从左往右
 * @note 使用 队列 实现，先进先出
 */


const levelMap = tree => {
  if (!tree) return;
  const queue = [tree]

  while (queue.length) {
    const node = queue.shift()
    console.log(node.value);
    if (node.left) queue.push(node.left)
    if (node.right) queue.push(node.right)
  }
}

const tree = {
  value: 'a',
  left: {
    value: 'b',
    left: {
      value: 'd',
      left: null,
      right: null
    }
  },
  right: {
    value: 'c',
    left: {
      value: 'f',
      left: null,
      right: null
    },
    right: {
      value: 'g',
      left: null,
      right: null
    }
  }
}

levelMap(tree);

