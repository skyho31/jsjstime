// test tool setup
const chai = require('chai')
const asserttype = require('chai-asserttype');
const expect = require('chai').expect
chai.use(asserttype);

// import function
const inspector = require('../../question/ch02/j_inspector')
const s_inspector = require('../../question/ch02/s_inspector')

// create mockData
const mockData = {
  bot1: {
    name: '선호',
    handler: () => 0
  },
  bot2: {
    name: '지으니',
    handler: () => Math.floor(Math.random() * 3)
  },
  round: Math.floor(Math.random()*100) + 1,
}

describe('CH02 - inspector', () => {
  describe('지으니가 만든 함수', () => {
    it ('해당 함수의 타입이 함수인가?', () => {
      // then
      expect(inspector).to.be.function()
    })

    it ('적절한 리턴 형태를 갖는가?', () => {
      // given
      const { bot1, bot2, round } = mockData

      // when
      const result = inspector(bot1, bot2, round)

      // then
      expect(result).to.have.property(bot1.name)
      expect(result).to.have.property(bot2.name)
      expect(result).to.have.property('total')
    })

    it ('결과가 정상적으로 출력되는가? - 1', () => {
      // // given
      // const { bot1, bot2, round } = mockData

      // // when
      // const result = inspector(bot1, bot2, round)
      // const s_result = s_inspector(bot1, bot2, round)

      // expect(result).to.be.deep.equals(s_result)
    })
  })

  describe('선호가 만든 함수', () => {
    it ('해당 함수의 타입이 함수인가?', () => {
      // then
      expect(s_inspector).to.be.function()
    })

    it ('적절한 리턴 형태를 갖는가?', () => {
      // given
      const { bot1, bot2, round } = mockData

      // when
      const result = s_inspector(bot1, bot2, round)

      // then
      expect(result).to.have.property(bot1.name)
      expect(result).to.have.property(bot2.name)
      expect(result).to.have.property('total')
    })
  })
})
