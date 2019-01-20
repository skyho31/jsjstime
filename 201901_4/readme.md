<!-- page_number: true -->


![bg](../asset/ogu.gif)

JS JS TIME
===
##### chapter 4. Arrow Function

---

# 1.Arrow Function.

Arrow Function이란, Arrow 즉 화살표 (=>)를 활용하여 표기한 함수입니다. 

```js
var es5Function = function () {
  return 'I`m es5';
}

function es5Function2() {
  return 'I`m es5, too';
}

es5Function(); // I`m es5
es5Function2(); //I`m es5, too

// Arrow function 
const es6Function = () => 'I`m es6'; 
es6Function(); // I'm es6

```

---

# 2. diff

Arrow function은 왜 갑자기 es6에서 생겨나게 된걸까요?
단순한 sugar expression 일까요? 

분명 일반 함수 선언보다 적은 텍스트를 사용하기는 합니다.
하지만 그런 단순한 이유로 언어 스펙이 추가되고 하진 않죠. 그렇다면 Arrow function은 어떤 필요에 의해 생겨났을까요? 

---

먼저 es6의 컨셉에 대해 알 필요가 있습니다.<br>
es6의 컨셉은 **보다 좋은 언어** 입니다. 

말이 좀 추상적인가요? 
여기서 말하는 `보다 좋은 언어`란 표현하고자 하는 의미를 보다 더 확실하게 표현해주는 언어를 말합니다. 

---

예를 들자면 이런것이죠.<br>
특정 배열에서 어떤 인자가 있는지 확인해야하는 상황에 대해 생각해봅시다.

```js
const arr = [1,2,3,4];
//es5
const isHas3_es5 = !(arr.indexOf(3) === -1); 
console.log(isHas3_es5); // true

//es6
const isHas3_es6 = arr.includes(3); 
console.log(isHas3_es6); // true
```
차이가 눈에 보이시나요?

---
```js
//es5
Array.prototype.indexOf(element); // Number
```
es5에 있던 `Array.prototype.indexOf`는 사실 찾으려는 요소가 배열 안에 있는 경우, 해당 `index`를 돌려줍니다. 그리고 그렇지 않은 경우 -1을 반환합니다. 자바스크립트를 사용하는 유저라면 누구나 알고 있는 사실입니다. <br>
그간 js 개발자들은 이러한 사실을 이용하여 해당 기능을 구현해왔습니다. 

---

그런데 이렇게 생각해보신 적은 없나요? 

다른 언어를 쓰던 사람들은 이러한 메서드에 대해 어떻게 생각할까요? 
단순한 기능에 대해, 해당 언어의 히스토리(?)를 알아야 하는게 좋은 일일까요?

es6의 방향은 대부분 이런 부분에 맞춰져있습니다. 

---

다시 한 번 위의 코드를 볼까요? 
```
//es6
const isHas3_es6 = arr.includes(3); 
console.log(isHas3_es6); // true
```

`include`란 `~를 포함하다`라는 의미의 단어입니다. 
원래의 목적에 보다 더 적합한 의미죠. `Array.prototype.indexOf`의 반환형은 알다시피 `Number`입니다. 

그러나 `Array.prototype.includes`의 반환형은 `Boolean`입니다. 
보다 더 의도한 바에 맞죠?

---

# Arrow Function

다시 `arrow function`으로 돌아옵시다. 위에서 언급하기를 es6는 `보다 더 나은 언어`를 만들기 위함이라 했습니다. 그렇다면 `arrow function` 또한 무언가 배경이 있겠죠?

---

function의 문제점에 대해 다시 살펴봅시다. 
기존 function들은 function 선언에 있어 두 가지 의미를 지닐 수 있습니다. 

```js
//es5 class
function Person(name){
  return this.name;
}

var person = new Person('jieun');

function sayHello() {
  return 'hello world';
}

sayHello();
```
바로 class 선언과 function 선언이죠.
js를 오래 봐온 사람들이라면, 어렵지 않게 읽을 수 있지만, 그렇지 않은 사람들에게는 여전히 혼란스러운 문법입니다.

---
# class & arrow function
es6에서는 `function`과 더불어 앞으로 배울 `class`와 `arrow function`이 추가되었습니다. 나뉘었다가 아닌 추가되었다고 언급했습니다. 그 이유는 `var`, `let`, `const`의 관계와는 달리 `function`은 유효하게 여전히 사용해야할 이유가 있기 때문입니다. 

조금 있다 살펴보고 일단은 `arrow function`의 사용법부터 알아보도록 합시다.

---

```js
const name = (fi) => {code}
```
`arrow function`은 모두 익명함수입니다. 그렇기에 함수를 호출하기 위해선 함수 표현식과 같이 변수에 할당해야합니다.

```js
const hello = () => 'hello';
hello(); // hello
```
위와 같이 하나의 수식으로 표현이 가능할 경우 `return`을 생략할 수 있습니다.

---

```js
//es5
const func1 = function() {};
func1(); // undefined

//es6
const func2 = () => {};
func2(); // undefined
```
위의 식은 `{}` 빈 객체를 반환하는걸까요?  
`arrow function`에서 `{}`는 내부 코드식을 해석합니다. 위와 같은 경우는 `return`을 명시하지 않은 `function`이 되겠네요.

---
# no new operator
`arrow function`은 `new` 연산자로 인스턴스를 생성할 수 없습니다. 
`arrow function`으로 생성하는 함수에는 `prototype`이 없기 때문입니다.

```js
const Cls = () => {};
const instance = new Cls(); 
// Uncaught TypeError: Cls is not a constructor
```

`class` chapter에서 다시 언급하겠지만, `constructor`란 생성자 함수의 `prototype`을 의미합니다. `prototype`이 없다는건, `constructor`를 생성할 수 없다는 의미가 됩니다. 

---

# lexical scope
`Arrow function`의 특이점 중 하나는 모든 scope가 lexical scope란 것입니다.
> lexical이란? 
> 문법적 형식이나 변화와 무관한 말 그 자체의 본질적 의미

간단하게 정리하면 그냥 구문 그대로의 해석이 된다는 것을 의미합니다. 함수를 처음 선언하는 순간, 함수 내부의 변수는 자기 스코프로부터 가장 가까운 곳에 있는 변수를 계속 참조를 한다는 것입니다.

이렇게 써놓으니 어렵나요? 간단하게 예제를 봅시다. 

---
# This
자바스크립트에서 function을 마주하게 됐을 때, 처음으로 부딪히는 난관은 this입니다. 이전에 얘기한 적이 있었지만, 함수의 scope는 그 함수를 호출할 때 결정됩니다. 

> 생성자인 경우에는 새로운 객체를, 객체의 메서드로 실행될 때는 객체의 context를, 엄격 모드 등에서는 undefined 등 언제나 this는 존재합니다. 
> ###### 출처 - [Doren Front-end Developer](https://imcts.github.io/ES6-ARROW_FUNCTION)

---
객체의 메서드로 예를 들어봅시다

```js
window.count = 10;
const obj = {
  count : 0,
  counter : function () {
    console.log(this.count);
  },
  counter2 : () => console.log(this.count)
}

obj.counter(); // 0
obj.counter.call(this); // 10
obj.counter.apply(this); // 10
obj.counter.bind(this)(); // 10
obj.counter2(); // 10
```

`arrow function`으로 실행한 counter2의 경우 외부에 있는 10을 가져옵니다. 원래대로라면 객체의 메서드니 객체의 context를 가져와야겠죠. 

---

마찬가지 이유로 `arrow function`은 `this` 바인딩이 불가능합니다. lexical scope를 그대로 따라가기 때문이죠.

```js
var o = {
  v: 10
};

var func = function () {
  return this.v;
};

const func2 = () => this.v;

func.call(o); // 10
func2.call(o); // undefined
```

---
# not argument
`Arrow function`은 arguments를 받을 수 없습니다.
```js
function func(a,b,c,d){
  console.log(arguments);
}
func(1,2,3,4); 

/** Arguments(4) [1, 2, 3, 4,  callee: ƒ, 
 * Symbol(Symbol.iterator): ƒ]
 */
 
const func = (a,b,c,d) => console.log(arguments);
func(1,2,3,4); 
// Uncaught ReferenceError: arguments is not defined
```

---

대신 추후에 보게 될 `Rest Operator`를 통해 사용할 수 있습니다.
`Rest`는 `arguments` 객체를 추가 생성하지 않아 성능상의 이점이 있습니다.
```js
function func(a,b,c,d){
  console.log(arguments);
}
func(1,2,3,4); 

/** Arguments(4) [1, 2, 3, 4,  callee: ƒ, 
 * Symbol(Symbol.iterator): ƒ]
 */

const func = (...rest) => console.log(rest);
func(1,2,3,4); // [1,2,3,4]
```

---

![bg](../asset/ogu_end.gif)
# THX :D


