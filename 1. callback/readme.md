<!-- page_number: true -->


![bg](../asset/bmo.png)

JS JS TIME
===
#####  Chapter 1. Callback 
###### 2019.01.02

---

# Callback

```js
// case 1
function func(param, cb){
    return cb(param);
}

function innerFunc(param) {
    return 'innerFunc : ' + param
}

var msg = func('hello', innerFunc);
console.log(msg); // innerFunc : hello
```

``` js
// regular case
app.get('*', middleware, function(req, res) {
    // code
    res.send(html);
});
```

> `NodeJS` 등에서 많이 쓰는 방식.
잘못 사용할 경우, 소위 callback 지옥을 불러올 수 있다.

---

# 함수선언식의 원리?
``` js
function sample(){
    // code
}


// original(?)
var sample = function sample(){
    // code
}

func(sample)
```
---
# callback hell
``` js
func(function(cb1){
  return cb1(function(cb2){
    return cb2(function(cb3){
      return cb3(function(cb4){
        return cb4(function(){
          return 'hell';
        })
      })
    })
  });
});

```

``` js
// IIFE
(function(cb){
    var obj = {a: 1};
    cb(obj);
})(function(param) {
    console.log(param); // {a: 1}
});

```

---

# Vuex에서 사용되는 mapGetter proto 구현
```js
//common
const dummy = {a:1, b:2, c:3}

var getter = function(keyArr){
    var obj = {};
    for(var key of keyArr){
        if(dummy[key]) {
            obj[key] = dummy[key]
        }
    }
    
    return obj;
}

getter(['a', 'b']) // {a:1, b:2}

```
###### 과연 좋은 코드일까???
---
# falsy, truthy의 함정
``` js
var dummy = {a:1, b:false, c:null, d:'', e:undefined}
var getter = function(keyArr){
    var obj = {};
    for(var key of keyArr){
        if(dummy[key]) { // falsy한 값이 통과하지 못함
            obj[key] = dummy[key]
        }
    }
    
    return obj;
}

getter(['a','b','c','d','e']) // {a:1}
```
#### `hasOwnProperty`**의 필요성**

``` js
if(dummy.hasOwnProperty(key)) {
     //code
}
```

---
# Wrong approach
``` js
//Array.prototype.filter
const getter = function(keyArr) {
    return keyArr.filter(key, function(key) {
        return dummy.hasOwnProperty(key);
    });
}

getter(['a', 'b']) // {a:1, b:2}
```

```js
// es6 arrow function
const getter = keyArr =>
 keyArr.filter(key => dummy.hasOwnProperty(key));
```

---
![bg](../asset/bmo.png)
# THX :D
