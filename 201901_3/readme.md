<!-- page_number: true -->


![bg](../asset/bmo.png)

JS JS TIME
===
##### chapter 3. template literal

---
# Contents

<ol>
  <li>Expression in template Literal</li>
  <li>Multiline in template Literal</li>
  <li>Nesting template</li>
  <li>Tagged template</li>
</ol>

---
# Literal

`literal`이란 무엇일까요?
`literal`이란, 더 이상 쪼갤 수 없는 값을 의미합니다.

그렇다면 이번 시간에 학습할 `template literal`은 무엇일까요?

---

# Template Literal

`template literal`이란, `es6`에서 처음 추가된 보간 리터럴입니다. 
즉, 최소 단위가 템플릿인 값이 되겠네요.

`(backtick)을 이용해서 각종 표현식을 감쌀 수 있습니다. 
여러모로 굉장히 편하게 쓸 수 있는 기능이에요.
<hr>

```js
const welcome = 'Welcome to the template literal';
console.log(`${welcome}. Today is ${new Date()}`)

// Welcome to the template literal. Today is Fri Jan 11 2019 17:55:59 GMT+0900 (한국 표준시)
```

---

# 1. Expression in template literal

```js
//es5
var hello = 'hello';
var world = 'world';
var str = hello + ' ' + world + '!'
console.log(str) // hello world!

//es6
const hello = 'hello';
const world = 'world';
const str = `${hello} ${world}!`;
console.log(str); // hello world
```

---
# 2. Multiline Template
---
# 3. Nesting template
---
# 4. Tagged template
---
![bg](../asset/bmo.png)
# THX :D




