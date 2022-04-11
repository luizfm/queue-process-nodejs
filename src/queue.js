export class Queue {
  constructor() {
    this.dataStore = []
    this.arrivePosition = 0;
    this.enqueue = enqueue
    this.dequeue = dequeue
    this.front = front
    this.back = back
    this.toString = toString
    this.empty = empty
    this.organizePriority = organizePriority
    this.length = length
  }
}

function enqueue(element) {
  this.arrivePosition++
  this.dataStore.push(element)
}

function dequeue() {
  this.arrivePosition -= 1
  return this.dataStore.shift()
}

function front() {
  return this.dataStore[0]
}

function back() {
  return this.dataStore[this.dataStore.length - 1]
}

function toString() {
  let queueStr = ''
  this.dataStore.forEach((element) => {
    queueStr += element.toString() + `\nPosição: ${element.arrivePosition}\n`
  })
  return queueStr
}

function empty() {
  return !!this.dataStore.length
}

function organizePriority(priorityType) {
  switch(priorityType) {
    case "1":
      const sortedDataBySize =  this.dataStore.sort((a, b) => {
        return a.size - b.size
      })

      const sortedDataByArrive = sortedDataBySize.sort((a, b) => {
        return a.arrivePosition - b.arrivePosition
      })

      return sortedDataByArrive.sort((a, b) => {
        return a.priority - b.priority
      })
    case "2":
      return this.dataStore.sort((a, b) => {
        return a.arrivePosition - b.arrivePosition
      })
    default:
      const sortedBySize = this.dataStore.sort((a, b) => {
        return a.size - b.size
      })

      return sortedBySize.sort((a, b) => {
        return a.arrivePosition - b.arrivePosition
      })
  }
}

function length() {
  return this.dataStore.length
}