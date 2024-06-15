// Cloudsense one of the coding round question.
// expect(findPattern('large_text,tt.txt', 'la*t.txt')).toEqual(true)
function findIndex(
	fileName: string,
	fileNameIndex: number,
	patternIndex: number,
	pattern: string
): number {
  console.log(fileNameIndex, patternIndex)
	let resultIndex = -1;
	let tempStr = '';

	while (pattern[patternIndex] === '*') {
		patternIndex++;
	}
  console.log(patternIndex,'====')

	if (pattern[patternIndex + 1] === undefined) {
		if (pattern[patternIndex] === fileName[fileName.length - 1]) {
      return fileName.length - 1;
		} else {
      return -1;
		}
	}

	while (pattern[patternIndex] && pattern[patternIndex] !== '*') {
		tempStr += pattern[patternIndex];
		patternIndex++;
	}

	console.log('temp', tempStr);

	let isPresent = false;
	let tempJ = 0;

	console.log(fileNameIndex, 'FILENAME');
	for (let i = fileNameIndex; i < fileName.length; i++) {
		if (fileName[i] === tempStr[tempJ]) {
			if (!isPresent) {
				resultIndex = i;
				isPresent = true;
			}
			if (tempJ === tempStr.length - 1) {
        console.log(resultIndex,'====+RES')
        return resultIndex;
			}
			tempJ++;
		} else {
			isPresent = false;
			tempJ = 0;
			resultIndex = -1;
			if (fileName[i] === tempStr[tempJ]) {
				isPresent = true;
				resultIndex = i;
				tempJ++;
			}
		}
	}

  console.log(resultIndex,'====+RES')
	return tempJ === tempStr.length - 1 ? resultIndex : -1;
}

export function findPattern(filename: string, pattern: string): boolean {
	let fileNameIndex = 0;
	let patternIndex = 0;
	while (patternIndex !== pattern.length) {
		if (pattern[patternIndex] !== '*') {
			if (filename[fileNameIndex] !== pattern[patternIndex]) {
				return false;
			}
			fileNameIndex++;
		} else {
			const indexValue = findIndex(filename, fileNameIndex, patternIndex, pattern);
			console.log(patternIndex, indexValue, pattern[patternIndex]);
			if (indexValue === -1) {
				return false;
			}
			if (indexValue === filename.length - 1) {
				return true;
			}
			fileNameIndex = indexValue;
		}
    patternIndex++;
	}
	return fileNameIndex === filename.length ? true : false;
}

// console.log(findPattern('large_text,tt.ttxt', 'la*t.txt'))
// console.log(findPattern('abcascas', '*s**b'))
console.log(findPattern('sabcascas', '*s***c**as'));
// console.log(findPattern('sabcascas', 's*****s'))
