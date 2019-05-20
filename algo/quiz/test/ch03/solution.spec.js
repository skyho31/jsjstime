// test tool setup
const chai = require('chai')
const asserttype = require('chai-asserttype');
const expect = require('chai').expect
chai.use(asserttype);

// import function
const j_solution = require('../../question/ch03/j_solution')
const s_solution = require('../../question/ch03/s_solution')
const n_solution = require('../../question/ch03/n_solution')

const randomArrCreator = () => {
  const MAX_LENGTH = 1000
  const MIN_LENGTH = 3
  const MAX_VALUE = 10000
  const MIN_VALUE = -10

  const length = createRandomInt(MAX_LENGTH, MIN_LENGTH)

  const arr = new Array(length).fill(0).map(() => {
    return createRandomInt(MAX_VALUE, MIN_VALUE)
  })

  return arr
}

const createRandomInt = (max, min) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const mockArr1 = randomArrCreator()
const mockArr2 = randomArrCreator()
const mockArr3 = randomArrCreator()

const mockSmallArr = [3, 2, 6, -1, 4, 5, -1, 2]
const mockSmallArr2 = [5, 5, 5]
const mockSmallArr3 = [-8, 10, 20, -5, -7, -4]

describe('CH03 MaxDoubleSliceSum', () => {
  // describe('지으니가 만든 함수', () => {
  //   it ('해당 함수의 타입이 함수인가?', () => {
  //     // then
  //     expect(j_solution).to.be.function()
  //   })
  //   it ('숫자를 반환하는가?', () => {
  //     // when
  //     const answer = j_solution(mockSmallArr)

  //     // then
  //     expect(answer).to.be.a("number");
  //   })
  // })
  describe('선호가 만든 함수', () => {
    // it ('해당 함수의 타입이 함수인가?', () => {
    //   // then
    //   expect(s_solution).to.be.function()
    // })
    // it ('숫자를 반환하는가?', () => {
    //   // when
    //   const answer = s_solution(mockSmallArr)

    //   // then
    //   expect(answer).to.be.a("number");
    // })

    it ('간단한 테스트 데이터', () => {
      // when
      const answer = s_solution(mockSmallArr)

       // then
       expect(answer).to.be.equal(17)
    })

    it ('간단한 테스트 데이터2', () => {
      // when
      const answer = s_solution(mockSmallArr2)

       // then
       expect(answer).to.be.equal(0)
    })

    it ('간단한 테스트 데이터2', () => {
      // when
      const answer = s_solution(mockSmallArr3)

       // then
       expect(answer).to.be.equal(30)
    })

    // it ('복잡한 데이터1', () => {
    //   // given 

    //   // when
    //   const answer = s_solution(mockArr1)
    //   const answer_t = n_solution(mockArr1)
    //   console.log(answer)

    //    // then
    //    expect(answer).to.be.equal(answer_t)
    // })
    // it ('복잡한 데이터2', () => {
    //   // when
    //   const answer = s_solution(mockArr2)
    //   console.log(answer)

    //    // then
    //   //  expect(answer).to.be.equal(17)
    // })
    // it ('복잡한 데이터3', () => {
    //   // when
    //   const answer = s_solution(mockArr3)
    //   console.log(answer)

    //    // then
    //   //  expect(answer).to.be.equal(17)
    // })
  })
})
