function solution(A) {
  /**
   * [workaround]
   * 가운데 값은 최저값을 가르킨다.
   */

  console.log('arr', A)

  const len = A.length
  let y = 0;
  
  const minValue = Math.min(...A.slice(1, -1))
  A.some((v, index) => {
    if(v === minValue && index > 0){
      y = index
      return true
    }
  })


  let final = {x:0, y:y, z:0}

  let sumX = 0
  let maxSumX = 0
  let sumZ = 0
  let maxSumZ = 0

  for (let x = y - 1; x >= 0; x--) {
    if (y - x > 1) {
      sumX += A[x+1]
      if (sumX > maxSumX) {
        maxSumX = sumX
        final.x = x
      }
    }
  }

  for (let z = y + 1; z < len; z++) {
    if (z - y > 1) {
      sumZ += A[z-1]
      if (sumZ > maxSumZ) {
        maxSumZ = sumZ
        final.z = z
      }
    }
  }

  console.log(final)
  console.log('sum', maxSumX + maxSumZ)

  return maxSumX + maxSumZ
}

module.exports = solution
