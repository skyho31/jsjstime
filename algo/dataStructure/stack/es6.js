class Stack {
  constructor () {
    this.stack = {}
    this.length = 0
  }

  push (item) {
    this.stack[++this.length] = item
  }

  pop () {
    if (this.length === 0) return null
    const index = this.length - 1
    const value =  this.stack[index]
    delete this.stack[index]
    this.length -= 1
    return value
  }
}
