// test tool setup
const chai = require('chai')
const asserttype = require('chai-asserttype');
const expect = require('chai').expect
chai.use(asserttype);

// import function
const sortString = require('../../question/ch01/j_sortString')
const stringSorter = require('../../question/ch01/s_stringSorter')

// set mockData
const mockData = [
  ['Hello World', 'deHllloorW'],
  ['   ', ''],
  [
    'Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun. Mocha tests run serially, allowing for flexible and accurate reporting, while mapping uncaught exceptions to the correct test cases. Hosted on GitHub.',
    'aaaaaaaaaaaaaaaaaaabbbccccccccccccdddddeeeeeeeeeeeeeeeeeeeeeeefffffGgggggggHHhhhhhhhhiiiiiiiiiiiiiiiiJjkkllllllllMMmmmmNnnnnnnnnnnnnnnnnnnnnoooooooooooooooopppppprrrrrrrrrrrrrrrrrSssssssssssssssssttttttttttttttttttttuuuuuuuuuvwwwwxxyy'
  ],
  [
    `test.js 파일을 저장한 후 아래와 같이 mocha 를 호출하면 테스트를 실행할 수 있다. mocha 를 실행하면 아래와 같이 결과가 나올 것이다.2015. 11. 12.
    [JavaScript] Mocha 로 JavaScript 테스팅 시작하기 | 감성 프로그래밍
    https://programmingsummaries.tistory.com/383
    사용자 의견
    이 결과에 관한 정보
    웹 검색결과
    Mocha - the fun, simple, flexible JavaScript test framework
    https://mochajs.org/
    이 페이지 번역하기
    2019. 4. 7. - simple, flexible, fun. Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing ...
    [JavaScript] Mocha 로 JavaScript 테스팅 시작하기 | 감성 프로그래밍
    https://programmingsummaries.tistory.com/383
    2015. 11. 12. - 들어가며 2015년 Frontend Tooling Servey 에서 조사한 바에 따르면, JavaScript Testing Tool 항목 1위는 Jasmine 이었고 그 뒤로 Mocha 가 ...
    Node.js 테스트 프레임워크 Mocha | HEROPY
    https://heropy.blog/2018/03/16/mocha/
    2018. 3. 16. - Mocha는 Node.js에서 사용하는 테스트 러너를 지원하는 테스트 프레임워크 입니다. Node.js에서 제공하는 Assert 모듈부터 Should.js나 Chai 같은 ...
    ‎테스트 예제 · ‎비동기 테스트 · ‎중첩
    NodeJS에서 가장 많이 사용하는 테스트 프레임웍, Mocha - 김정환 블로그
    blog.jeonghwan.net/mocha/
    2016. 1. 5. - NodeJS로 서버를 개발하면서 Mocha는 가장 많이 애용하는 테스트 툴이다. 노드의 인기가 한참인 지금에서야 포스팅을 작성한다는게 늦은 것 ...
    GitHub - mochajs/mocha: simple, flexible, fun javascript test ...
    https://github.com/mochajs/mocha
    이 페이지 번역하기
    simple, flexible, fun javascript test framework for node.js & the browser - mochajs/mocha.
    함께 검색한 항목
    mocha chai
    mocha typescript
    mocha version
    supertest
    facebook jest
    mocha mock
    Mocha · GitHub
    https://github.com/mochajs
    이 페이지 번역하기
    Mocha: a lovely testing framework for JavaScript. Mocha has 16 repositories available. Follow their code on GitHub.
    mocha 사용기 – sjk5766 – Medium
    https://medium.com/sjk5766/mocha-사용기-2046b1ec1abd
    2018. 9. 24. - Node JS로 작성한 코드의 UT는 mocha를 많이 쓴다. 비교할 것도 없이 인터넷에 올라온 포스팅을 보면 압도적으로 mocha가 많아 선택에 많은 시간 ...
    mocha - npm
    https://www.npmjs.com/package/mocha
    이 페이지 번역하기
    4일 전 - This website stores cookies on your computer. These cookies are used to collect information about how you interact with our website and allow ...
    A quick and complete guide to Mocha testing – LogRocket
    https://blog.logrocket.com/a-quick-and-complete-guide-to-mocha...
    이 페이지 번역하기
    2018. 8. 9. - A quick but extensive guide on how Mocha can be used for testing software functionality written in JavaScript. You will learn how to write your ...
    Mocha (JavaScript framework) - Wikipedia
    https://en.wikipedia.org/wiki/Mocha_(JavaScript_framework)
    이 페이지 번역하기
    Mocha is a JavaScript test framework for Node.js programs, featuring browser support, asynchronous testing, test coverage reports, and use of any assertion ...`,
    'AAAaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbCcccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccdddddddddddddddddddddddddddEeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeFFffffffffffffffffffffffffffGGGggggggggggggggggggggggggggggggHHHHhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiJJJJJJJJJJJJJJJJjjjjjjjjjjjjjjjjjjjjkkkkkkkkkkkkkkkkkkkkkkkLlllllllllllllllllllllllllllllllllllMMMMMMMMMMMMMMMMMMmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmNNNNNNNNnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnOooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooPpppppppppppppppppppppppppppppppppppppppppppppppqqqRRrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrSSSSSSSSSSSSSSSSSsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssTTTTTTttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttttUuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuvvvvvvvvvvvvvvvvvvvvWwwwwwwwwwwwwwwwwwwwwwwwwwwwwxxxxxYYyyyyyyyyyyyyy'
  ]
]

describe('CH01 - sortString', () => {
  describe('지으니가 만든 함수', () => {
    it ('해당 함수의 타입이 함수인가?', () => {
      expect(sortString).to.be.function()
    })
  
    it ('간단한 영어 단어를 처리할 수 있다.', () => {
      // given
      const [question, answer] = mockData[0]
  
      // when & then
      expect(sortString(question)).to.be.equal(answer)
    })
  
    it ('빈값이 올 경우, 빈값을 반환해야 합니다.', () => {
      // given
      const [question, answer] = mockData[1]

      // when & then
      expect(sortString(question)).to.be.equal(answer)
    })
  
    it ('영어와 특수문자로 된 긴 문장을 처리할 수 있다.', () => {
      // given
      const [question, answer] = mockData[2]

      // when & then
      expect(sortString(question)).to.be.equal(answer)
    })
  
    it ('특수문자 및 한글이 포함된 문장을 처리할 수 있다.', () => {
      // given
      const [question, answer] = mockData[3]

      // when & then
      expect(sortString(question)).to.be.equal(answer)
    })
  })

  describe('선호가 만든 함수', () => {
    it ('해당 함수의 타입이 함수인가?', () => {
      expect(stringSorter).to.be.function()
    })
  
    it ('간단한 영어 단어를 처리할 수 있다.', () => {
      // given
      const [question, answer] = mockData[0]
  
      // when & then
      expect(stringSorter(question)).to.be.equal(answer)
    })
  
    it ('빈값이 올 경우, 빈값을 반환해야 합니다.', () => {
      // given
      const [question, answer] = mockData[1]
  
      // when & then
      expect(stringSorter(question)).to.be.equal(answer)
    })
  
    it ('영어와 특수문자로 된 긴 문장을 처리할 수 있다.', () => {
      // given
      const [question, answer] = mockData[2]

      // when & then
      expect(stringSorter(question)).to.be.equal(answer)
    })
  
    it ('특수문자 및 한글이 포함된 문장을 처리할 수 있다.', () => {
      // given
      const [question, answer] = mockData[3]

      // when & then
      expect(stringSorter(question)).to.be.equal(answer)
    }).timeout(1000)
  })
})
