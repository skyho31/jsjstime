
### 1주차 리뷰 
**1. Callback** 
```js
function a(param) {
    b(param)
}

function b(param) {
    console.log('hi~' + param)
}

a('jieun', b)   // hi~ jieun
```
콜백이란 함수를 부른다는 것으로 함수에서 cb함수를 또 호출해서 실행한다는 의미이다.
b함수에 매개변수로 호출하지 않더라도 a함수에서 b함수에 넘겨주는 경로가 있을거다. 
nodejs 에서는 b함수를 만들지 않고 함수를 직접 만들어서 사용하는 방법도 있다.  

**2. 함수선언식의 원리**
```js
var sample = function sample() {
  //code
}
```
컴파일러에서 해석하는 함수는 내부적으로 함수표현식으로 실행된다.
함수표현식은 호이스팅이 방지된다.

**3. Vuex에서 사용되는 mapGetter**

```js
const dummy = {a:1, b:2, c:3}

const getter2 = keyArr => keyArr.filter(key => dummy.hasOwnProperty(key))
getter2(['a', 'b']) // {0:a, 1:b}
```
Array.prototype.map: 기본 배열에 결과값을 리턴
Array.prototype.filter: true 경우에 새로 만든 결과값을 리턴

아래와 같은 결과값으로 다시 풀어봐야함.
```js
getter(['a','b']) // {a:1, b:2}
```

**4. falsy, truthy의 함정**
```js
var dummy = {a:1, b:false, c:null, d:'', e:undefined}
for (var key in dummy) {
  if (dummy[key]) {
    console.log('key:', key) // key: a
 }

for (var key in dummy) {
  if (dummy.hasOwnProperty(key)) {
    console.log('key:', key) // key: a, key: b, key: c, key: d, key: c
 }
}
```
falsy란 거짓인거 같은 느낌으로.. 값이 올바르지 않다고 판단해 유효성검사를 할 때 통과시켜주지 않는다.그러므로 `hasOwnProperty()` 로 검사를 해줘야 정확하게 모든 값이 나온다.