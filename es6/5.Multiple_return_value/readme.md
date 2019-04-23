<!-- page_number: true -->


![bg](../../asset/ogu.gif)

JS JS TIME
===
##### chapter 5. Multiple Return Value

---

# Array
```js
// es5
var arr = [1,2,3];
var num1 = arr[1]; // 1
var num2 = arr[2]; // 2
var num3 = arr[3]; // 3

// es6
const arr = [1,2,3];
const [num1, num2, num3] = arr;
const [num1, ,num3] = arr;
```
---
# Object
```js
// es5
var obj = { a: 1, b:2, c:3}
var a = obj.a;
var b = obj.b;
var c = obj.c;

// es6
const obj = { a: 1, b: 2, c: 3 };
const {a, b, c} = obj;
const {b, c, a} = obj;

const {aa, bb, cc} = obj; // undefined
const {a:aa, b:bb, c:cc} = obj;
//aa:1, bb:2, cc:3

```

---

# Quiz
```js
const obj = {a:1, b:2, c:3}
const {aa, bb, cc} = obj;
console.log(bb); // ?
```

---

# example
```js
const returnData = {
  header: 'asdf',
  auth: 'asdfdsfas',
  msg: 'asdf'
}

const func = (header, msg) => {}
func(returnData.header, returnData.msg)

const func2 = (returnData) => {
  const {header, msg} = returnData;
  // code
}

const func3 = ({header, msg}) => {
}
```

---
# 다차원 배열 할당
```js
var arr = [
  [1,2,3],
  [[4,5],6,7]
];

const [
  [a,b,c],
  [[d,e],f,g]
] = arr;

console.log(a,b,c,d,e,f,g) // 1,2,3,4,5,6,7
```
---
# 객체 발췌 할당
```js
const data = {
  a:1, b:2, c:3
};

const {a, c} = data;
```

---

```js
const state = {
  user: {
    name: 'asdf',
    phone: '123123123123',
    age: 123,
    etc: {
      home: 'seohyun',
      company: 'kakakak'
    }
  },
  snack: [
    '허니버터칩',
    '자갈치',
    '새우깡'
  ]
};

const {
 user: {
    name,
    phone,
    age,
    etc : {
      home,
      company
    }
 },
 snack
} = state;


(state.user) => ({name, phone, age, etc:{home, company}) => {
  
}
```

---
# 변수의 값 바꾸기
```js 

let a = 1;
let b = 2;

//swap
let temp = a;
a = b;
b = temp;

// new solution
[a,b] = [b,a];



```
---
# 번외편
```js
// constants.js
export default {
  'DATE' : '${year}년 ${month}월 ${day}일',
  'TITLE' : '안녕'
}


// intl.js
const replaceRegex = new RegExp('\\$\\{([\\w|\\.]+)\\}', 'g');

export function __(text, context) {
  const convertedText = CONSTANTS[text];
  if(!context){
    return convertedText;
  }

  let copiedText = convertedText;
  while((result = replaceRegex.exec(convertedText))) {
    const [org, key] = result;
    copiedText = copiedText.replace(org, context[key]);
  }

  return copiedText;
}

// main.js
var data = {
  date: __('DATE', {year:2019, month:1, day:29}),
  title: __('TITLE')
}
```

---

![bg](../../asset/ogu_end.gif)
# THX :D


