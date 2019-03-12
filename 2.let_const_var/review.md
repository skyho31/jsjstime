## ECMA
- 1994년 정보통신기술 표준연구회의 의미로 변경된 기관명입니다. 
- 다양한 언어나 규격에 대한 표준을 정의하게 되는데 그 중 하나가 ECMA-262입니다.
- 5판(2009.12): strict mode지원, object.define 지원 등을 함으로써 ready only property 등을 만들 수 있도록 변경되었습니다.
- 6판(2015.06): Class, Module 등의 기능을 지원합니다. ECMAScript Harmoney, ES6 Harmony, ECMAScript2015 등으로 불려지고 있습니다. 
- ECMA측은 매년 새로운 표준을 정의하며, ECMA 인터네셔널의 여러 기술 위원회(Technical Committee 이하 TC) 중 TC39라는 위원회가 이 명세를 관리하고 있습니다. 

---

## hoisting
끌어올리다라는 의미로 선언식을 위로 끌어올려 호출할 수 있습니다. 호이스팅은 실행컨텍스트의 기준을 살펴봐야 그 순서를 알 수 있습니다.  
- var 변수가 코드 상엔 선언은 되있지만 실행 순서를 볼 때 선언이 되있지 않은 데도 실행했을 때, 발생하는 오류는 `ReferenceError`이어야합니다. 그런데 자바스크립트는 `undefined` 가 발생합니다. 
- function 이 코드 상엔 선언은 되있지만 실행 순서를 볼 때 선언이 되있지 않은 데도 실행하면 마치 함수가 먼저 선언된 것 마냥 정상동작을 합니다.


## Execution Context 
함수선언 > 변수선언 >>>>> 할당 == 실행 (줄여서 `ec`)

### example code 
```js
a();
console.log(b);
var b = 10;
console.log(c);
console.log(b);
function a() {
   console.log('example');
}
var c = 20;
console.log(c);
```
### convert code (실행컨텍스트 동작방법으로 풀이) 
```js
function a() {
   console.log('example');
}
var b;
var c;
a();            // example
console.log(b); // undefined
b = 10;
console.log(c); // undefined
console.log(b); // 10
c = 20;
console.log(c); // 20
```

## let, const
let(변수), const(상수)는 `es6` 부터 생긴 새로운 선언식입니다.
`TDZ`란, temporary dead zone 으로서 기존의 호이스팅이 일어나지 않게 되었기에 발생합니다. 이제부터는 선언 전에 호출하면 `ReferenceError`가 발생합니다. 

## TDZ와 typeof
`es5`까지의 문법에서`typeof()`는 safe zone이라 합니다. 어떠한 값이 들어오더라도 에러를 띄우지를 않게 됩니다. 
```js
typeof(k1) // undefined
```
그런데 TDZ에선 이러한 typeof에서도 에러가 발생합니다. 
```js
typeof(sample) 
let sample = 10 // ReferenceError
```

## 중복선언금지
var선언은 중복선언이 가능했습니다. `es6` 이후 `let, const`는 오직 하나의 변수만 할당가능합니다.
```js
let a = 10;
let a = 20; // SyntaxError  
```

## block-level-scope
`es5` 이전까지의 문법에서는 `function level scope` 이외에 다른 `scope` 가 존재하지 않았습니다. 
```js
if(true) {
  var a = 10;
}
console.log(a); // 10
```
그러나 중괄호만으로 `block level scope`가 존재하게되어 오류가 발생합니다.
```js
if(true) {
  let d = 10;
}
console.log(d); // ReferenceError
```
> let, const 와 var는 혼용해서 쓰면 호이스팅과 function level scope 로 인해 오류를 만나지 않게되거나, undefined 만나게 됩니다. 중복선언되거나 하면 원하는 결과를 얻지 못하게 되는 경우도 있습니다. 이렇게 값이 훼손된 경우에는 발생원인을 찾기가 어려울 수 있습니다. 오류가 발생하지 않는다고 손놓고만 있으면 나중에 큰 문제와 겹쳤을땐 해결할 수 없게 됩니다. 단순히 자바스크립트의 유연성을 너무 믿고 있다간 더 큰 문제를 발생시킬 수 있습니다. 이에 대비해서 `es6` 문법을 익히도록 노력해야해요.

## let, const 사용법
`let` 변수는 재할당이 가능
`const` 상수는 재할당이 불가능 (프로퍼티는 재할당이 가능)
```js
let a;
a = 'value1';
a = 'value2';
console.log(a) // value2
```
```js
const b = 'value3';
b = 'value4'; // Uncaught SyntaxError
```
```js
const c = {}
c.aa = 1;
c.aa = 2;
console.log(c) // {aa: 2}
```
