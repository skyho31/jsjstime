# 1. Arrow Function
Arrow 즉 화살표(=>)로 표기한 함수입니다. 

```js
var func = function () {
	return 'es5 function'
}

function func2() {
    return 'es5 function, too'
}

func(); // es5 function
func2(); // es5 function, too

const func3 = () => 'es6 function'
func3(); // es6 function
```

# 2.diff
Arrow function 은 분명 일반 함수 선언보다 적은 텍스트를 사용하기는 합니다. 하지만 그런 단순한 이유로 언어 스펙이 추가 되진 않죠. es6의 컨셉은 `보다 좋은 언어`입니다. 이는 표현하고자 하는 의미를 더 확실하게 표현해주는 언어를 말합니다. 
예를 들어 어떤 인자를 확인해야할 상황에 대해서 생각해봅니다.
```js
const arr = [1,2,3,4];
// es5
const isHas = (arr.indexOf(3) !== -1);
console.log(isHas) // true
// es6
const isHas2 = arr.includes(2);
console.log(isHas2); // ture
```
`Array.prototype.indexOf`는 찾으려는 요소가 배열에 있는 경우, 그 해당 index를 찾아서 돌려줍니다. 그렇지 않은 경우엔 -1을 반환합니다. 그렇지만 es6는 `include`를 사용해 포함여부를 `boolean`을 반환합니다. `indexOf`는 `Nubmer`를 반환합니다. 이처럼 존재유무를 확인해야할 경우엔 es6문법이 훨씬 의도한 바에 맞게 됩니다.  

# 3. class & arrow function
es6에서는 `function`과 `class`와`arrow function`이 추가되었습니다. 
`arrow function`은 모두 익명함수입니다. 그렇기에 표현식처럼 모두 변수에 할당해야합니다. 
```js
//es5
const func1 = function() {}
func1(); // undefined

//es6
const func2 = () => {}
func2(); // undefined

(()=>'')(); // ''
```

# 4. no new operator
`arrow function`는 `new`연산자로 인슨턴스를 생성할 수 없습니다. 이 함수에는 `prototype`이 없기 때문입니다. `constructor`란 생성자 함수의 `prototype`을 의미하는데 `prototype`이 없으니 생성할 수 없다는 의미가 됩니다.
```js
const Cls = () => {};
const instance = new Cls();
// Uncaught TypeError: Cls is not a constructor 
```

# 5. lexical scope
`arrow function`의 특이점 중 하나는 모든 scope가 lexical scope란 것입니다.
> lexical이란, 문법적 형식이나 변화와 무관한 말 그 자체의 본질적 의미
구문 그대로의 해석이 된다는 것을 의미합니다. 함수를 처음 선언하는 순간, 함수 내부의 변수는 자기 스코프로부터 가장 가까운 곳에 있는 변수를 계속 참조한다는 것입니다. 

## 5-1. this
함수의 scope 는 그 함수를 호출할 때 결정됩니다. 
```js
var a = 10;
console.log(window.a); // 10

let b = 20;
const c = 30;
console.log(window.b); // undefined
console.log(window.c); // undefined
```
counter2()는 외부에 있는 20을 가져옵니다. 원래대로라면 객체의 메서드니깐 객체의 context를 가져와야합니다.
```js
window.count = 20;
const obj = {
    conut: 0,
    counter: function () {
      console.log(this.count);
    },
    counter2: () => console.log(this.count)
}
obj.counter(); // undefined
obj.counter.call(this); // 20
obj.counter.apply(this); // 20
obj.counter.bind(this)(); // 20
obj.counter2(); // 20
```
func2()는 this 바인딩이 불가합니다. lexcial scope를 그대로 따라가기 때문입니다. 
```js
var o = {
    v:10
};
var func = function() {
	 return this.v;
}
const func2 = () => this.v;
func.call(o); // 10
func2.call(o); // undefined
```
# 6. not argument
`arguments`를 받을 수 없습니다. 대신에 `Rest Operator`를 통해 인자를 받을 수 있고, 이에 `arguments`객체를 추가 생성하지 않아 성능상의 이점이 있습니다. 
```js
//es5
function func(a1, a2, a3, a4) {
 console.log(arguments);
}

func(1,2,4,5); // Arguments(4) [1, 2, 4, 5, callee: ƒ, Symbol(Symbol.iterator): ƒ]

//es6
const func3 = (a1,a2,a3,a4) => console.log(arguments)
func3(1,2,3,5)
// Uncaught ReferenceError: arguments is not defined

const func5 = (...pp) => console.log(pp);
func5(1,2,6,7); // [1, 2, 6, 7]
```