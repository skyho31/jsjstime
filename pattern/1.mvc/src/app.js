(function () {
  const counterModel = new CounterModel()

  const $app = document.querySelector('#app')
  new CounterController($app, counterModel)
})()

