<!-- page_number: true -->


![bg](../../asset/sixtail.jpg)

JS JS TIME
===
#####  Chapter 1. MVC 
###### 2019.04.23

---

# MVC Pattern

m은 model,
v는 view,
c는 controller를 의미합니다.

---

# simple mvc
M = Model = (data == state = store)
> 모델은 컴포넌트의 데이터를 의미합니다.

V = View = (Print == Render == Express)
> 뷰는 컴포넌트에서 화면을 의미합니다.

C = Controller = M과 V를 Controll 합니다. 
> 컨트롤러는 컴포넌트에서 유저의 입력(event)을 받아서 View와 Model을 Control.

---

# 하나의 컴포넌트를 왜 MVC로 각각 분리했을까?
- 유지보수가 편해서
- 객체지향 설계로 알아서 돌아가게 만드는 것이 목적이다.

---

# 생각해볼만한 점
- mvc는 각각 하나의 컴포넌트에 대해서 표현하고 있다. 
- 그런데 각각의 객체들은 서로를 알고 있을까?
- Model은 자신만 알고 있음.
- View는 자신만 알고 있어.
- Controller는 다 알고 있어.
> Controller에게 부담이 크다
> 코드 상의 연관 관계에서는 Controller만이 View와 Model을 알고 있지만, 사실 만드는 우리는 3가지 파일 한꺼번에 열어서 봐야한다.... 

---
![bg](../../asset/level3.jpeg)

# 실제로 만들어봅시다.

```
간단한 카운터를 만들어봅시다.

1. 카운터가 표시될 화면이 필요하다.
2. 카운터를 증가시킬 버튼이 필요하다.
3. 카운터를 감소시킬 버튼이 필요하다.
4. 카운터를 리셋시킬 버튼이 필요하다.
```

---