const KEYCODE = {
  'a': 97,
  'z': 122,
  'A': 65,
  'Z': 90,
}
const ALPHA_DIFF = KEYCODE['a'] - KEYCODE['A']

const sortString = ([...string]) => {
  const codeArr = string.filter(v => word => /[A-Z]|[a-z]/.test(word)).map(word => word.charCodeAt())
  const lower = codeArr.filter(keyCode => KEYCODE['a'] <= keyCode && keyCode <= KEYCODE['z'])
  const upper = codeArr.filter(keyCode => KEYCODE['A'] <= keyCode && keyCode <= KEYCODE['Z'])

  const upperedArr = upper.map(keyCode => keyCode + ALPHA_DIFF);
  const mergedArr = [...lower, ...upperedArr].sort((a,b)=> a-b);

  upperedArr.forEach(keyCode => {
    const index = mergedArr.indexOf(keyCode);
    mergedArr[index] = keyCode - ALPHA_DIFF;
  })

  const result = String.fromCharCode(...mergedArr);
  return result;
}

module.exports = sortString
