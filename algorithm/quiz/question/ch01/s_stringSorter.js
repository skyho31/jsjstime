const stringSorter = str => [...str].filter(word => /[A-Z]|[a-z]/.test(word)).sort((a, b) => a.localeCompare(b, 'kf', {caseFirst: 'upper'})).join('')

module.exports = stringSorter
