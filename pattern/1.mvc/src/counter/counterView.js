/**
 * View는 화면을 그려줍니다.
 * 근데 어떤 모델의 데이터를 쓸지, 어떤 컨트롤러에게 사용이 되는지는지를 몰라요.
 */
(function (exports) {
  const CounterView = class {
    printResult (value) {
      document.querySelector('.result').innerHTML = value
    }
  }

  exports.CounterView = CounterView
})(this)
