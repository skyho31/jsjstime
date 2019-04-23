/**
 * Model은 데이터를 갖고 있습니다.
 * 근데, 어떤 뷰에 사용될지, 어떤 컨트롤러가 사용할지에 대해서 몰라요.
 */

(function (exports) {
  const CounterModel = class {
    constructor (value = 0) {
      this.count = value
    }

    getValue () {
      return this.count
    }

    increase () {
      this.count += 1
    }

    decrease () {
      this.count -= 1
    }
  }

  exports.CounterModel = CounterModel
})(this)
