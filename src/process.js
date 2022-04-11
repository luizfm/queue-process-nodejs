import { v4 } from 'uuid'

export class Process {
  constructor(arrivePosition) {
    this.processId = v4()
    this.arrivePosition = arrivePosition
    this.priority = Math.floor(Math.random() * (5  - 1 + 1) + 1)
    this.executionTime = Math.floor(Math.random() * (4  - 1 + 1) + 1)
    this.size = Math.floor(Math.random() * (10  - 1 + 1) + 1)
    this.toString = toString
  }
}

function toString() {
  return `\nIdentificador: ${this.processId} \nPrioridade: ${this.priority} \nTempo em execução: ${this.executionTime} \nTamanho: ${this.size} \nChegada: ${this.arrivePosition}`
}