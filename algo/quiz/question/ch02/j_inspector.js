function inspector (bot1, bot2, round) {
  const winnerRule = (bot1, bot2) => {
    // const game = ["바위", "가위", "보"];
    // bot1 이기는 경우: [0,1], [1,2], [2,0]
    // bot1 무승부: [0,0], [1,1], [2,2]
    
    let result = "bot2";
    if(bot1 === 0 && bot2 === 1){
      result = "bot1";
    } else if (bot1 === 1 && bot2 === 2) {
      result = "bot1";
    } else if (bot1 === 2 && bot1 === 0) {
      result = "bot1";
    } else if (bot1 === bot2) {
      resoult = "tie";
    }
    return result;
  } 
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  const scoreBot1 = [];
  const scoreBot2 = [];
  let sumBot1 = 0;
  let sumBot2 = 0;
  for (let ix = 0, ixLen = round; ix < ixLen; ix++) {
    const valueBot1 = bot1.handler();
    const valueBot2 = bot2.handler();
    const winner = winnerRule(valueBot1, valueBot2);
    
    if (winner === "bot1") {
      sumBot1 += 1;
      sumBot2 = 0;
    } else if (winner === "tie") {
      sumBot1 = 0;
      sumBot2 = 0;
    } else if (winner === "bot2") {
      sumBot1 = 0;
      sumBot2 += 1;
    }
    scoreBot1.push(sumBot1);
    scoreBot2.push(sumBot2);
  }

  return {
    [bot1.name]: scoreBot1.reduce(reducer),
    [bot2.name]: scoreBot2.reduce(reducer),
    total: round
  }
}
module.exports = inspector
