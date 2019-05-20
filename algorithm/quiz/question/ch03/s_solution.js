function solution(A) {
  // get diffPoint
  const { x_target, z_target } = getDiffPoint(A)

  const x_arr = [...x_target.values()]
  const z_arr = [...z_target.values()]
  let maxSum = 0
  const final = {
    x: 0,
    z: 0,
  }

  const x_len = x_arr.length
  const z_len = z_arr.length

  for (let x_idx = 0; x_idx < x_len; x_idx++) {
    for (let z_idx = 0; z_idx < z_len; z_idx++) {
      let x = x_arr[x_idx]
      let z = z_arr[z_idx]

      if (z - x > 1) {
        let sliceArr = A.slice(x + 1, z)
        let minValue = Math.min(...sliceArr.slice(x + 1, z))
        let sum = sumArray(sliceArr) - minValue
        console.log(sliceArr, sum)
  
        if (sum > maxSum) {
          maxSum = sum
          final.x = x
          final.z = z
        }
      }
    }
  }

  console.log(final)
  return maxSum
}

function getDiffPoint(A) {
  // get diffPoint
  const x_target = new Set([0])
  const z_target = new Set()

  let prev = 1
  A.forEach((v, idx) => {
    if (prev * v < 0) {
      if (prev > 0) {
        x_target.add(idx)
      }
      if (prev < 0) {
        z_target.add(idx - 1)
      }

      prev = v
    }
  })

  z_target.add(A.length - 1)

  return { x_target, z_target }
}

function sumArray (partialArr) {
  if (partialArr.length === 0) return 0
  return partialArr.reduce((acc, cur) => acc + cur)
}


// solution([3, 2, 6, -1, 4, 5, -1, 2])

module.exports = solution
