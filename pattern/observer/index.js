class Observable {
    constructor () {
        this.listener = []
    }

    add (callback) {
        this.listener.push(callback)
    }

    notify (message) {
        this.listener.forEach(callback => {
            callback(message)
        })
    }
}

class AppController {
    constructor () {
        this.onClick = new Observable()
    }
}

const $ = (query, scope = document) => scope.querySelector(query)

function domFactory (id, text, tag = 'div') {
    const dom = document.createElement(tag)
    dom.id = id
    dom.innerText = text

    return dom
}

class Screen {
    constructor (id, text) {
        this.el_ = domFactory(id, text)
        this.init();
        this.changeText = this.changeText.bind(this)
        this.appController = Application.appController
        
        this.init()
        this.bindEvent_()
    }

    init () {
        document.body.appendChild(this.el_)
    }

    bindEvent_ () {
        this.appController.onClick.add(this.changeText)
    }

    changeText (text) {
        this.el_.innerHTML = text
    }
}

class Button {
    constructor (id, text) {
        this.el_ = domFactory(id, text, 'button')
        this.appController = Application.appController

        this.init()
        this.bindEvent_()
    }

    init () {
        document.body.appendChild(this.el_)
    }

    bindEvent_ () {
        this.el_.onclick = () => {
            this.appController.onClick.notify('버튼이 눌렸음')
        }
    }
}

// main
(function() {
    window.Application = {
        appController: new AppController()
    };

    new Screen('screen', '스크린')
    new Button('button', '버튼')
}())



