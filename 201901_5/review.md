# Array

```js
// es5
var arr = [4,5,6];
var num1 = arr[0]; // 4
var num2 = arr[1]; // 5
var num3 = arr[2]; // 6

// es6
const [num1, num2, num3] = [1, 2, 3];
console.log(num1); // 1
console.log(num2); // 2
console.log(num3); // 3

const [test1, ,test3] = [1, 2, 3];
console.log(test1); // 1
console.log(test3); // 3
```

# Object
```js
// es5
var obj = {a:4, b:5, c:6}
var a = obj.a;
var b = obj.b;
var c = obj.c;

// es6
const {a, b, c} = {a:4, b:5, c:6} 
const {b, c, a} = {a:4, b:5, c:6} 
const {aa, bb, cc} = {a:4, b:5, c:6} // undefined

const {a:aa, b:cc, c:bb} = {a:4, b:5, c:6}
// aa:4, cc:5, bb:6 
```

# 다차원 배열 할당
```js
const arr = [
  [1,2,3], 
  [[4,5],6]
];

const [
[a, b, c],
[[d,],]
] = arr;

console.log(a,b,c,d); // 1,2,3,4
```

# 객체 발췌 할당
```js
const state = {
chart: {
    type: 'line',
    data: [1,2,3],
    xaxis: {
       color: '#ff'
    }
}
};

const {
chart: {
   type,
   data,
   xaxis: {
    color
   }
}} = state

state.chart // {type: "line", data: Array(3), xaxis: {…}}
```

# 변수의 값 바꾸기
```js
let a = 1;
let b = 2;

let temp = a;
a = b;
b = temp;

// new solution
let a = 1;
let b = 2;

[b, a] = [a, b]
console.log(a); // 2
console.log(b); // 1
```