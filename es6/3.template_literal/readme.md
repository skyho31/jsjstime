<!-- page_number: true -->


![bg](../../asset/bmo.png)

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
## 1-1) Variable in Template literal
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
간단한 용도로는 위와 같이 `variable`와 `string`의 결합으로 사용할 수 있습니다.

---
## 1-2) Array Function + Template Literal
```js
// expression in template
`${[0,1,2,3].reduce((a, c) => a + `${c}`, '')}` // 0123
```
다양한 Array함수들 (map, reduce, filter, find 등등...)을 사용할 수 있는데, 그 의미에 맞게 사용할때 코드 가독성에서 그 효과를 발휘합니다. 

---
# 2. Multiline Template

`Template literal`을 활용하면, 여러 줄에 걸친 string을 한번에 기술할 수 있습니다.
```js
//es5
var msg = 'hello world';
var html = '<html>\n' +
            '<body>\n' +
           	'<div>' + msg + '</div>\n'+
            '</body>\n'+
           '</html>';
```

```js                 
//es6
const msg = 'hello world'
const html = `<html>
                <body>
                    <div>${msg}</div>
                </body>
              </html>`;

```
---
# 3. Nesting template

`Template literal`내부 표현식에선 중첩 사용이 가능합니다.
```js
const boolean = false;
const result = `${
	boolean 
	? `${boolean}은 참입니다.`
	: `${boolean}은 거짓입니다.`
}`;

console.log(result); // false는 거짓입니다.
```

---
# 4. Tagged template

Template Literal은 함수에도 활용가능합니다.
```js
function tagFunction(strings, firstName, lastName) {
    console.log(strings, firstName, lastName)
}
 
const firstName = 'Jieun'
const lastName = 'Lee'
 
tagFunction `Hello ${firstName} ${lastName}!` 
// tagFuntion([“Hello “, “ “, “!”], firstName, lastName)
```
---
```js
`Hello ${firstName} ${lastName}!`
// Hello Jieun Lee!

rawString = ["hello ", " ", "!"]
args = ["Jieun", "Lee"]

var msg = rawString[0] + args[0] + rawString[1] 
+ args[1] + rawString[2]
// Hello Jieun Lee!

String.raw({raw: ["Hello ", " ", "!"]}, firstName, lastName);
```

---
![bg](../../asset/bmo.png)
# THX :D




