<!-- page_number: true -->


![bg](../asset/ogu.gif)

JS JS TIME
===
##### chapter 4. Arrow Function

---
# Contents
<ol>
  <li>Arrow Function.</li>
  <li>diff</li>
</ol>

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


---
![bg](../asset/ogu_end.gif)
# THX :D


