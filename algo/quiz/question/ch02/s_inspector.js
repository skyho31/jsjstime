const ROCK = 0
const SCISSOR = 1
const PAPER = 2

const DRAW = 0
const WIN = 1
const LOSE = -1

function inspector (bot1, bot2, round) {
  /**
   * 원하는 코드를 작성해주세요. 
   *
   **/
  const result = {
    [bot1.name]: 0,
    [bot2.name]: 0,
    total: round
  }

  const winStack = {
    [bot1.name]: 0,
    [bot2.name]: 0,
  }

  for (let i = 0; i < round; i++) {
    const score = isWin(bot1.handler(), bot2.handler())
    switch (score) {
      case WIN:
        winStack[bot1.name]++
        winStack[bot2.name] = 0
        result[bot1.name] += winStack[bot1.name]
        // console.log(bot1.name, result[bot1.name], winStack[bot1.name])
        break;
      case LOSE:
        winStack[bot2.name]++
        winStack[bot1.name] = 0
        result[bot2.name] += winStack[bot2.name]
        // console.log(bot2.name, result[bot2.name], winStack[bot2.name])
        break;
      case DRAW:
        winStack[bot1.name] = 0
        winStack[bot2.name] = 0
        // console.log('draw')
        break;
    }
  }

  // console.log('functiondone', result)
  return result
}

function isWin(func1, func2) {
  // 비기는 경우
  if (func1 === func2) {
    return DRAW
  }

  // 이기는 경우  
  if (func1 === func2-1 && func1 !== PAPER) {
    return WIN
  } else if (func1 === PAPER && func2 === ROCK) {
    return WIN
  }

  // 지는 경우
  return LOSE
}

module.exports = inspector
