function Stack () {
  this.stack = {}
  this.length = 0
}

Stack.prototype = {
  push: function (value) {
    this.stack[this.length++] = value
  },
  
  pop: function () {
    if (this.length === 0) return null
    var index = this.length - 1
    var value = this.stack[index]
    delete this.stack[index]
    this.length -= 1
    return value
  }
}
