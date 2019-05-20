/**
 * 배열 Array
 * 
 * @description 
 * 데이터 구조의 하나로, 데이터를 1열로 나열한 것입니다.
 * 데이터에 접근하기는 쉽지만, 추가나 삭제에 시간이 걸립니다.
 * 
 * @interface
 * length
 * push
 * pop
 * slice
 * indexOf
 * shift
 * unshift
 */

class CustomArray {
  constructor () {
    this.data = {}
    this.length = 0
  }

  /**
   * push(value) 메서드는 배열에 마지막에 해당 요소를 추가합니다.
   * 이 메서드는 배열의 길이를 변하게 합니다.
   */
  push (value) {}

  /**
   * pop() 메서드는 배열에서 마지막 요소를 제거하고, 제거된 요소를 반환합니다.
   * 이 메서드는 배열의 길이를 변하게 합니다.
   */
  pop () {}

  /**
   * shift() 메서드는 배열에서 첫 번째 요소를 제거하고, 제거된 요소를 반환합니다. 
   * 이 메서드는 배열의 길이를 변하게 합니다.
   */
  shift () {}

  /**
   * unshift(value) 메서드는 배열의 첫 번째 요소에 해당 요소를 추가합니다.
   * 그 이후의 요소들의 순서를 변하게 합니다.
   * 이 메서드는 배열의 길이를 변하게 합니다.
   */
  unshift (value) {}

  /**
   * indexOf(value) 메서드는 값을 입력받고, 입력된 값과 일치하는 요소의 순서를 반환합니다.
   * 일치하는 값이 없을 경우 -1을 반환합니다.
   */
  indexOf (value) {}

  /**
   * slice(start, end) 메서드는 시작 순서와 마지막 순서값을 입력 받아, 그 사이의 배열을 반환합니다.
   * 시작 순서와 끝 순서 사이에 일치하는 값이 없을 경우, 빈 배열을 반환합니다.
   */
  slice (start, end) {}
}

module.exports = CustomArray
