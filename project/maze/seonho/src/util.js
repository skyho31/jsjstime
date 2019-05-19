export const $ = (elQuery, $scope = document) => $scope.querySelector(elQuery)
export const $All = (elQuery, $scope = document) => $scope.querySelectorAll(elQuery)
export const $mergeStyle = ($el, style) => Object.assign($el.style, style)
export const getRandomBoolean = (ratio = 0.7) => {
  if (ratio >= 0 && ratio <= 1) {
    return Math.random() > ratio
  } else {
    throw ('random ratio는 0에서 1까지만 설정할 수 있습니다.')
  }
}
