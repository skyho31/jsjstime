# Literal 
`literal`이란, 더 이상 쪼갤 수 없는 값을 의미합니다.

## Template Literal
`es6` 에서 추가된 보간 리터럴입니다. 즉, 최소 단위가 템플릿인 값입니다. 
`(backtic) 을 이용해서 각종 표현식을 감쌀 수 있습니다.
여러모로 굉장히 편하게 쓸 수 있는 기능이에요.

```js
var name = 'template litreal'
var json = `{"name": "${name}", "value": [1,2,3]}`;
var parse = JSON.parse(json);
console.log(parse.name); // template litreal
```

### 1.Expression in template literal
#### 1-1) Variable in Template literal
```js
//es5
var a = 'hi'
var b = 'seonho'
var str = a + ' ' + b;
console.log(str); // hi seonho

//es6
const a = 'hi'
const b = 'seonho'
const str = `${a} ${b}`;
console.log(str); // hi seonho
```
위에 코드처럼 `variable` 과 `stirng`의 결합으로 사용할 수 있습니다.
#### 1-2) Array Function + Template Literal
```js
`${[1,4,9,16].map((x) => (x*2))}`// 2,8,18,32
`${[1,2,3,4].reduce((a,c) => a + `${c}`, '')}` // 1234
`${['spray', 'limit', 'elite', 'destruction'].filter((word) => word.length === 5)}` // spray,limit,elite
```
Array 함수(map, reduce, filter 등)을 사용하는데, 의미에 맞게 사용해서 코드 가독성을 높여줍니다.
### 2. Multiline Template
```js
//es5
const json = '{'
     +'\"test\":{\n'
             +'\"name\":\"template litreal\",\n'
             + '\"value\":[ 1, 2, 3 ]\n'
    + '}\n'
+'}'
```
```js
//es6
const json = `{
     "test":{
              "name":"template litreal",
              "value":[ 1, 2, 3 ]
     }
}`
```
### 3. Nesting template
`template literal` 내부 표현식에서 중첩 사용이 가능합니다. 
```js
const boolean = true;
const result = `${
            boolean ? `${boolean} 는 참입니다.`
                    : `${boolean} 는 거짓입니다.`
}`;
console.log(result); // true 는 참입니다.
```
### 4. Tagged template
`String.raw()` 함수로 태그 문자열을 얻는데도 사용이 가능합니다.
```js
const filePath = String.raw`C:\Development\profile\aboutme.html`; 
console.log(filePath); // C:\Development\profile\aboutme.html

const filePath = `C:\Development\profile\aboutme.html`; 
console.log(filePath); // C:Developmentprofileaboutme.html
```