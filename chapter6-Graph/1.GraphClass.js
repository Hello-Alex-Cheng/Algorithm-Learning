import { Compare, defaultCompare, defaultEquals } from "../utils/index.js"

class Graph {
  constructor(isDirected = false) {
    this.isDirected = isDirected
    this.vertices = []
    this.adjList = new Dictionnary()
  }
}
