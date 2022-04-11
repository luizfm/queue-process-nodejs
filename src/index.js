import { Process } from './process.js'
import { Queue } from './queue.js'
import * as readline from 'node:readline/promises'
import { stdin, stdout } from 'node:process'

const rl = readline.createInterface({ input: stdin, output: stdout})

const queue = new Queue()

queue.enqueue(new Process(queue.arrivePosition))
queue.enqueue(new Process(queue.arrivePosition))
queue.enqueue(new Process(queue.arrivePosition))
queue.enqueue(new Process(queue.arrivePosition))
queue.enqueue(new Process(queue.arrivePosition))
queue.enqueue(new Process(queue.arrivePosition))
queue.enqueue(new Process(queue.arrivePosition))
queue.enqueue(new Process(queue.arrivePosition))

console.log(queue.toString())

const answer = await rl.question('Select one of the organization priorities (type a number): \n1 - primeiro prioridade, depois chegada, depois tamanho \n2 - somente chegada \n3 - primeiro chegada, depois tamanho\n')
queue.organizePriority(answer)
console.log('------------------------------')
console.log(queue.toString())

rl.close()

async function dequeue() {
    const element = queue.dequeue()
    console.log('\n--------DEQUEUING--------')
    console.log(element.toString())
}

function timeout(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function sleep(fn, ...args) {
  await timeout(queue.front().executionTime * 1000);
  return fn(...args);
}

while(queue.front()) {
  await sleep(dequeue)
}
