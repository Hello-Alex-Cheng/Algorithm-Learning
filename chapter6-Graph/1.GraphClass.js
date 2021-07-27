/*
 * @Author: chenghaolun
 * @Date: 2021-04-23 10:36:41
 * @LastEditors: chenghaolun
 * @Description: graph
 * @LastEditTime: 2021-07-19 11:24:13
 * @FilePath: \Algorithm-Learning\chapter6-Graph\1.GraphClass.js
 */

// v => vertices, E => edge
// G = (V, E)

import { Compare, defaultCompare, defaultEquals } from "../utils/index.js"

export class Graph {
  constructor(isDirected = false) {
    this.isDirected = isDirected

    // 顶点
    this.vertices = []

    // 通过字典来存储邻接表
    // 字典将会使用顶点的名字作为 key，邻接顶点列表作为 value
    this.adjList = new Dictionnary()
  }

  addVertex(v) {
    if (!this.vertices.includes(v)) {
      this.vertices.push(v)
      this.adjList.set(v, [])
    }
  }

  addEdge(v, w) {
    if (!this.adjList.get(v)) {
      thia.addVertex(v)
    }

    if (!this.adjList.get(w)) {
      this.addVertex(w)
    }

    thia.adjList.get(v).push(w)

    if (!this.isDirected) {
      this.adjList.get(w).push(v)
    }
  }

  getVertices() {
    return this.vertices
  }

  getAdjList() {
    return this.adjList
  }
}
