function solution(A) {
  let length = A.length
  let maxSum = 0

  for (let x = 0; x < length - 2; x++) {
    for (let y = x + 1; y < length - 1; y++) {
      for (let z = y + 1; z < length; z++) {
        let slicedArr1 = A.slice(x+1, y)
        let slicedArr2 = A.slice(y+1, z)
        const result = sumArray(slicedArr1) + sumArray(slicedArr2)
        if (result > maxSum) {
          maxSum = result
        }
      }
    }
  }

  return maxSum
}

function sumArray (partialArr) {
  if (partialArr.length === 0) return 0
  return partialArr.reduce((acc, cur) => acc + cur)
}

module.exports = solution
