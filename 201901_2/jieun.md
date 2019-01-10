# 함수 표현식의 장점
- 호이스팅에 영향을 받지 않는다.
선언문을 스코프 상단으로 올리는 동작을 예방
- 클로져로 사용
다른 함수의 변수에 접근할 수 있는 함수
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
showName('jieun', 'Lee')

```
- 콜백으로 사용
어떤 작업(이벤트발생, 비동기작업)이 완료되면 이 함수를 실행하라는 의미로 전달하는 함수
```js
var logMessage = function() {
  console.log('An anonymous function'); 
}

$(document).ready(logMessage); //An anonymous function
```