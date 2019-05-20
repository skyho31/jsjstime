A non-empty array A consisting of N integers is given.
> 비어있지 않은 배열 A는 N개의 정수로 이루어져있습니다.

A triplet (X, Y, Z), such that 0 ≤ X < Y < Z < N, is called a double slice.
> 세 개의 숫자 X, Y, Z는  0 ≤ X < Y < Z < N의 관계를 갖고 있습니다. 이걸 더블 슬라이스라고 부를게요.

The sum of double slice (X, Y, Z) is the total of A[X + 1] + A[X + 2] + ... + A[Y − 1] + A[Y + 1] + A[Y + 2] + ... + A[Z − 1].
> 이 더블 슬라이스의 합은 A[X + 1] + A[X + 2] + ... + A[Y − 1] + A[Y + 1] + A[Y + 2] + ... + A[Z − 1] 와 같습니다. 간단하게 말하자면 사잇값이에요. 인덱스 X, Y, Z의 사잇값을 다 더하자는거죠.

For example, array A such that:
> 예를 들어서, 배열 A가 이렇게 생겼다고 해봐요.
```
    A[0] = 3
    A[1] = 2
    A[2] = 6
    A[3] = -1
    A[4] = 4
    A[5] = 5
    A[6] = -1
    A[7] = 2
```
contains the following example double slices:
> 이건 다음과 같은 더블 슬라이스 관계를 같습니다.

double slice (0, 3, 6), sum is 2 + 6 + 4 + 5 = 17,
> 0, 3, 6이 더블 슬라이스라면, 사잇값의 합은 17이 되겠고 
> 
double slice (0, 3, 7), sum is 2 + 6 + 4 + 5 − 1 = 16,
> 0, 3, 7이 더블 슬라이스라면, 사잇값의 합은 16이 되겠죠.

double slice (3, 4, 5), sum is 0.
> 3, 4, 5가 더블 슬라이스라면, 사잇값이 없으니 합은 0이 될겁니다.

The goal is to find the maximal sum of any double slice.
> 자, 우리의 목표는 사잇값의 합이 최대치가 되는 더블 슬라이스 값을 찾는 것입니다. 

Write a function:
> 함수는 이렇게 써요.

function solution(A);

that, given a non-empty array A consisting of N integers, returns the maximal sum of any double slice.

> function solution(A) 함수 내에 비어있지 않은 N(N>0)개의 정수로 이루어진 배열이 입력되면, 가장 높은 사잇값의 합계를 내면 되는거죠.

For example, given:
> 예를 들어보면, 이런 배열이 주어졌다고 가정해봐요.
```
    A[0] = 3
    A[1] = 2
    A[2] = 6
    A[3] = -1
    A[4] = 4
    A[5] = 5
    A[6] = -1
    A[7] = 2
```

the function should return 17, because no double slice of array A has a sum of greater than 17.
> 정답은 17이에요. 왜냐면 17이 제일 크니까. 이 경우라면 [0, 3, 6]이었겠네요.
> 2 + 6 + 4 + 5 = 17 이니까.

Write an efficient algorithm for the following assumptions:
> 다음 지시를 참고해서 가장 효과적인 알고리즘을 작성해보아요.

N is an integer within the range [3..100,000];
each element of array A is an integer within the range [−10,000..10,000].

> 정수 N은 3 ~ 100000까지의 범위를 갖습니다. A 배열 각각의 요소는 -10 ~ 10000의 값을 갖습니다. 간단히 말하면, 최소 3개 이상의 길이를 가진 배열이 들어온다는 얘기에요.


https://app.codility.com/programmers/lessons/9-maximum_slice_problem/max_double_slice_sum/
Copyright 2009–2019 by Codility Limited. All Rights Reserved. Unauthorized copying, publication or disclosure prohibited.
