## 链表
每个元素只有一个后继

## 双向链表
每个元素都有一个前驱和后继

## 循环链表

最后一个元素的 next 指向 链表的第一个元素

单链表和双向链表都可以是循环链表

```js
this.head.next => ... => this.tail

// 第一个元素的 prev 不再是 null，而是指向最后一个元素
this.head.prev => this.tail

// 最后一个元素的 next 不再是 null，而是指向头部元素
this.tail.next => this.head

```

## 有序链表

链表元素有序

```js

{
  "element": 1,
  "next": {
    "element": 3,
    "next": {
      "element": 4,
      "next": {
        "element": 22,
        "next": {
          "element": 111,
          "next": null
        }
      }
    }
  }
}

```
