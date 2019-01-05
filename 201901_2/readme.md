<!-- page_number: true -->


![bg](../asset/bmo.png)

JS JS TIME
===
##### chapter 2. let,const / var 

###### 2019.01.05

---
# What's the es6

`javascirpt`의 판을 다루는데 있어서, 사람들은 `es`라는 스펠에 숫자를 써서 표현하곤 합니다. 과연 `es` 즉 `ECMAScript`는 어디서 시작된 말일까요?

<b> 이를 알기위해선 먼저 `ECMA`라는 단체의 정체를 알아야합니다.  </b>

---
# ECMA
> ECMA란 European Computer Manufactures Association에서 출발하여 1994년에 정보 통신 기술 표준 연구회의 의미로서 변경된 기관명 입니다. 그 결과 더이상 ECMA는 단어의 앞글자를 따서 만들어진 글자가 아닌 그 자체로의 의미를 가지게 됩니다. 이 협회는 다양한 언어나 규격에 대한 표준을 정의하게 되는데 그 중 하나가 ECMA-262 입니다.
---

판| 출판일 | 특징
-| - | -
1| 1997.6	 |초판
2| 1998.6|ISO/IEC 16262 국제 표준과 완전히 동일한 규격을 적용
3| 1999.12 |정규 표현식, 문자열 처리, 제어문, 예외처리, 오류 정의, 수치형 출력 포맷팅등 언어로서의 기능 추가
4| - | 정치적 차이 및 이슈 및 너무 급격한 변화에 대해 반대가 심하여 폐기되었다. 이때 만들어진 스펙은 5판의 기본이 되었다.
5|2009.12 |더 정확한 오류검사 지원, “strict mode”지원, Object.define 지원 등을 함으로써 read only property등을 만들 수 있도록 변경되었다.
6|2015.6 | Class, Module등의 기능을 지원한다. “ECMAScript Harmony”, “ES6 Harmony”, “ECMAScript 2015”등으로 불리워진다.
7|2016.3 | Array.prototype.includes, 지수연산(**) 스펙을 추가
8|2017.6 | Async Await및 Object.entries, String.padStart, String.padEnd 추가

> 3판 출시 이후 5판 출시까지 10년이 걸렸습니다. 그 후 6판까지 다시 7년이라는 시간이 지나는 바람에 6판이 출시될때에는 많은 변화가 있었는데요. 앞으로 ECMA측은 매년 새로운 표준을 정의 하며 두번 다시 6판처럼 많은 변화가 일어날 일은 없을거라고 하였습니다. 
출처 - [Doren Front-end developer](https://imcts.github.io/ES6-LET-CONST-TDZ/)

---

# let, const 
let, const는 es6	부터 생긴 새로운 선언식입니다.
```js
let a = 10; // 변수 선언
const a = 20; // 상수 선언
```
`var`를 사용하던 방식과 동일하게 사용을 합니다. 그럼 es6부터 추가된 `let`과 `const`는 어떤 점이 `var`랑 다를까요? 

---
# hoisting
두 선언식 간의 차이를 이해하기 위해선 es6 이전에 있었던 var와 함수 표현식의 hoisting에 대해 이해할 필요가 있습니다. 
```js
// 변수의 hoisting

console.log(msg); // undefined
var msg = 'hello var';
```
---

위의 예제에서 어떤 걸 느끼셨나요? 위화감을 못 느끼셨다면, 당신은 이미 js개발자이거나 프로그래밍에 대한 이해가 없는 초보 개발자일 겁니다.
위 코드를 보면 msg가 선언도 되기 전에 msg를 호출하고 있습니다. 이에 대한 예상결과는 사실 `undefined`가 아닌 `ReferenceError` 입니다. 

**선언되지도 않은 변수를 찾고 있기 때문이죠.**

---
# Function Hoisting
```js
func(); // hello
function func(){
    console.log('hello');
}
```
마찬가지로 선언된 적도 없는 함수가 실행이 되고 있습니다. 아래에 선언되어 있는 함수를 끌어서 실행하다는 건 알 수 있습니다만 어떤 기준으로 이루어지는걸까요? 


그것은 `javascript`의 `Execution Context` 즉 `실행컨텍스트`와 관련이 있습니다.

---
# Execution Context
`Execution Context`(줄여서 `ec`)란, javascript의 각종 동작에 대한 원리를 담고 있는 자바스크립트의 핵심원리입니다. 동시에 수많은 js 입문자들을 초급 개발자에 머물게 하는 주 범인이죠.

다음 링크에 관련 개념에 대해 잘 설명해 놓았으니 일단은 링크를 참조합시다. 
[PoeimaWeb - 실행 컨텍스트와 자바스크립트의 동작 원리
](https://poiemaweb.com/js-execution-context)

---
함수선언 > 변수선언 >>>>> 할당 == 실행
```js
function func(){}
```

code no.|함수선언 |변수선언 |할당 | 실행 | 결과
-|-|- | - |- | -
1|-|-|-|a()| ok
2|-|-|-|console.log(b) | undefined
3|-|var b | 10| -|b = 10
4|-|-|-|console.log(b) |10
5|function a
6|- | var c| 20| -| c = 20

---
# example code
```js
a(); 
console.log(b);
var b = 10;
console.log(b);
function a() {
    console.log('im a');
}
var c = 20;
```

---
# TDZ
다시 돌아와서, `let`과 `const`는 hoisting이 일어나지 않게 하는 선언식입니다. `let`은 변수의 선언을, `const`는 상수의 선언을 의미합니다.

```js
console.log(a); // ReferenceError
let a = 10;
```

`TDZ`란, temporary dead zone으로서 기존의 hoisting이 일어나지 않게 되었기에 발생합니다. 위의 식에서 `a`변수는 선언되기 전에 호출되었기에 `ReferenceError`를 발생시킵니다. 

---
# TDZ와 typeof
대개 es6 미만에서 `typeof()`를 언급할 때, safe zone이라는 얘기를 합니다. 어떠한 경우에도 에러를 띄우지 않기 때문이죠.
```js
typeof(undeclaredValue); // undefined
```
<br>

그러나 그 어떤 값이 들어와도 에러를 띄우지 않는 typeof 조차 tdz에선 error를 띄우기 때문에 조심해야 합니다.
```js
typeof(declaredValue); // ReferrenceError
let declaredValue = 10;
```

---

# 중복선언금지
프로그래머를 혼란시켰던 기존 `var`가 가졌던 특징 중에 하나는 중복 선언입니다. 예를 들면 이런게 가능합니다.
```js
var a = 10;
var a = 20;
console.log(a) // 20
```
하지만 `let`, `const`는 오직 하나의 변수만 할당가능 합니다.
```
//es6
let a = 10;
let a = 20; // SyntaxError
console.log(a) 
```
---

# block-level-scope
기존 `es5` 이전까지의 문법에선 `function level scope` 이외에 다른 `scope`가 존재하지 않았습니다. 
``` js
if(true) {
    var a = 10;
}
console.log(a); // 10

for(var i = 0; i < 10; i++);
console.log(i); // 10
```
---
 
하지만 es6에선 다음과 같이 처리됩니다.
``` js
if(true) {
    let a = 10;
}
console.log(a); // ReferenceError

for(let i = 0; i < 10; i++);
console.log(i); // ReferenceError
```
<br>

>`es6` 미만의 버전을 `es6` 이상으로 전환 시, 단순히 `var`를 `let`으로 바꾸는 경우가 있는데, 대개 저런 `block scope`를 지키지 않고 작성이 되어 있는 경우가 많기 때문에 에러가 엄청나게 쏟아지곤 합니다..

---
# let, const와 var

그렇다면 `var`는 더 이상 쓸모가 없는걸까요?
혹은 다같이 써도 되는걸까요?
```js
// 모두 사이좋게?
var a = 10;
let b = 20;
const c = 30;
```

---
아쉽게도 `var`의 시대는 여기까지인 듯 합니다.
`es6` 이상에선 `var`를 사용할 수는 있지만, `var`의 사용이 지양됩니다. 앞으로는 `let`과 `const`를 이용해서 코드를 작성할 수 있도록 지향합시다. 

#### es5 미만을 쓰는 경우에도 block scope를 지킬 수 있도록 노력하는 것도 괜찮아요.

---
# let, const의 사용법
`let`과 `const`는 앞에서 언급했던 것처럼 변수와 상수라고 생각하면 됩니다.
```js

// 선언
let value;

// 할당
value = 'variable';

// 재할당
value = 'variable2';

// 선언 및 할당
const finalValue = 'finalValue';

// 선언
const finalValue1; // Uncaught SyntaxError
```

---
![bg](../asset/bmo.png)
# THX :D




