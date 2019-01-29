const CONSTANTS = {
  'DATE' : '${year}년 ${month}월 ${day}일',
  'TITLE' : '안녕'
}
const replaceRegex = new RegExp('\\$\\{([\\w|\\.]+)\\}', 'g')

function __(text, context) {
  let convertedText = CONSTANTS[text];
	if(!context){
		return convertedText;
  }

  let returnText = convertedText;
	
	while((result = replaceRegex.exec(convertedText))) {
		const [org, key] = result;
		returnText = returnText.replace(org, context[key]);
  }

	return returnText;
}

console.log(__('DATE', {year:2019, month:1, day:29}));
console.log(__('TITLE'))
