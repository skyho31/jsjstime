/**
 * Controller는 View와 Model을 컨트롤합니다.
 * Controller는 모두다 알아요.
 * 
 * View와 Model의 instance의 메서드를 사용합니다.
 */
(function (exports) {
  const CounterController = class {
    constructor ($app, model) {
      this._$element = $app
      this._view = new CounterView()
      this._model = model

      this.init()
    }

    init () {
      this._event = []
      this._ref = []
      Array.from(this._$element.querySelectorAll('[data-js]')).forEach(el => {
        /**
         * [workaround]
         * 해당 String은 변수, 이벤트, 실행 함수 이름을 의미한다.
         * 1. 변수는 :로 시작된다.
         * 2. 이벤트는 @로 시작된다.
         * 3. 실행함수의 이름은 이벤트에서 = 로 연결된다.
         * 
         * FIXME
         * 1. 변수와 이벤트는 같이 들어올 수 없다.
         */
        
        const query = el.dataset.js
        // const isVariable = query.startsWith(':')
        const isEvent = query.startsWith('@')

        // if (isVariable) {
        //   this._ref.push({
        //     $el: el,
        //     ref: query.substr(1)
        //   })
        // }

        if (isEvent) {
          const [event, eventName] = query.split('=')

          this._event.push({
            $el: el,
            event: event.substr(1),
            handler: this[eventName].bind(this)
          })
        }        
      })

      this._bindEvent()

      this.render()
    }

    _bindEvent () {
      this._event.forEach(({$el, event, handler}) => {
        $el.addEventListener(event, () => handler())
      })
    }

    render () {
      const value = this._model.getValue()
      this._view.printResult(value)
    }

    increase () {
      this._model.increase()
      this.render()
    }

    decrease () {
      this._model.decrease()
      this.render()
    }
  }

  exports.CounterController = CounterController
})(this)
