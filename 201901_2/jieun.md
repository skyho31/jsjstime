# 함수 표현식의 장점
1. 함수 호이스팅에 영향을 받지 않습니다.
2. 함수 선언문과는 달리 스크립트 로딩시점에 VO(variable object)에 함수를 할당하지 않고 runtime에 해석되고 실행되므로 `TypeError` 가 발생합니다. 
```js
var res = test();
var test = function() {
   console.log('test')  //TypeError
}
```
```js
// es6
var res = test();
var test = () => {
   console.log('test')  //TypeError
}
```
3. 클로져로 사용합니다.
클로져는 다른 함수의 변수에 접근할 수 있는 함수입니다.
  - 자신의 블럭내에 정의된 변수
  - 외부 함수의 변수에 대한 접근
  - 전역 변수에 대한 접근
```js
function showName(first, last){
 var nameIntro = "Your name is ";
 function makeFullName() {
     return nameIntro + first + last;
 }
 return makeFullName();
}
showName('jieun', 'Lee') // Your name is jieun Lee

```
```js
// es6
const showName = (first, last = 'Lee') => {
 var nameIntro = "Your name is";
 const makeFullName = () => {
     return `${nameIntro} ${first} ${last}`;
 }
 return makeFullName();
}
showName('jieun');
```
4. 콜백으로 사용합니다.
어떤 작업(이벤트발생, 비동기작업)이 완료되면 이 함수를 실행하라는 의미로 전달하는 함수입니다.
```js
var logMessage = function() {
  console.log('An anonymous function'); 
}

$(document).ready(logMessage); //An anonymous function
```

```js
// es6
const logMessage = () => {console.log('An anonymous function')}

$(document).ready(logMessage); //An anonymous function
```