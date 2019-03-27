### 1. Duck Typing
#### Duck Typing 은 인터페이스 상속이나 자료형으로 판단하는 것이 아닌, 인스턴스의 값이나 속성의 기준을 해당 객체를 판단하는 것을 말합니다.

예시로 오리처럼 걸으면 그건 오리다.라는 말처럼 동적언어인 자바스크립트에서는 이러한 판단을 객체의 변수와 메소드(오리처럼 걸어요!)의 집합이 객체의 타입(오리)을 정하게 됩니다.

### 2. while, for
#### 반복문에는 초기값, 조건문, 증감식 이 3가지 코드가 필요합니다.
```js
let i = 0;
while (i < 10) {
   console.log(i++)
}

for (let i = 0, ix = 10; i < ix; i++) {
   console.log(i);
}
```

### 3. forEach

#### 자바스크립트의 반복문은 복잡한 값들을 표시하지 않고 루프를 추상화하여 수행할 수 있도록 도와줍니다. 자바스크립트는 유저로 하여금, 추상화된 반복문을 사용하게 권고하고 있습니다.

```js

const test1 = Array.from(Array(10).keys())
const test2 = [...Array(10).keys()]
const test3 = [0,1,2,3,4,5,6,7,8,9]

test3.forEach(v => console.log(v));

const arr = test3.map(v => v+1) // [1,2,....10] 
const arr2 = test3.some(v => v>3) // true
const arr3 = test3.every(v => v>3) // false
```
map() : 주어진 함수를 호출한 결과를 모아 새로운 배열을 반환합니다.
some() : 배열안에 어떤 요소든 통과하는지 판별합니다..
빈 베열에서 호출하면 무조건 false를 반환합니다.
every() : 배열안에 모든 요소들이 통과하는지 판별합니다.
빈 배열에서 호출하면 무조건 true를 반환합니다.


### 4. for -of
#### `for of`는 전달받은 `iterable` 수행하여 `iterator` 를 얻고 `iteratorResult`의 done이 true 가 될때까지 실행하여 값을 반환합니다.

### 5. Iteration
#### `iteration`의 사전적 의미는 되풀이, 반복입니다. 즉, 반복처리를 말합니다. 이 처리를 위한 프로토콜이 `iterable`과 `iterator`입니다.

#### 5-1. Iterable Protocal
#### 자바스크립트가 기본적으로 갖고 있는 String, Object, Map, Set, TypedArray, Arguement 오브젝트는 기본적으로 `iterabl protocal`을 가지고 있는 객체, 즉 `iterable object`입니다.(Dom NodeList 포함)

console.dir로 확인해보면, `__proto__`에 Symbol.iterator가 존재합니다.
```js
Symbol(Symbol.toStringTag): "Array Iterator"
__proto__: Object
```

#### 5-2. Iterator Protocal
#### `Iterable object`의 값을 작성한 순서대로 처리하는 규칙입니다.`next()`함수를 통해 순차적으로 처리를 할 수 있습니다.`Iterable object`는 반복 가능한 오브젝트이어야합니다.

```js
let obj = [1,2,3]
let iteratorObj = obj[Symbol.iterator]();

iteratorObj.next(); // {value: 1, done: false}
iteratorObj.next(); // {value: 2, done: false}
iteratorObj.next(); // {value: 3, done: false}
iteratorObj.next(); // {value: undefined, done: true}
```
- Array
```js
const iterable = [10, 20, 30];
for (let v of iterable) {
    console.log(v); // 10 20 30
}
```

- String
```
const iterable = '12345'
for (let v of iterable) {
   console.log(v) // 1 2 3 4 5
}
```

- Map
```
const iterable = new Map([
   ['a', 1],
   ['b', 2],
   ['c', 3]
)]
   
for (let [key, value] of iterable) {
  console.log(`${key} : ${value}`) // a : 1 b : 2 c : 3 
}
```

- Set
```
const iterable = new Set([1,1,1,2,3,3,3,5,6])

for (let v of iterable) {
  console.log(v) // 1 2 3 5 6
}
```

- Generator
```
function * generator() {
  yield 1
  yield 2
}
for (let v of generator()) {
  console.log(v) // 1 2
}
```

