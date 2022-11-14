function separateArray(arr: Array<number>, startIndex: number, endIndex: number): Array<number> {
	const resultArr = [];
	for (let i = startIndex; i <= endIndex; i++) {
		resultArr.push(arr[i]);
	}

	return resultArr;
}

export function binarySearch(
	arr: Array<number>,
	searchVal: number,
	low: number = 0,
	high: number = arr.length - 1
): boolean {
	const mid = low + Math.floor((high - low) / 2);

	if (arr[mid] === searchVal) {
		return true;
	} else if (low >= high && arr[mid] !== searchVal) {
		return false;
	} else if (searchVal < arr[mid]) {
		return binarySearch(arr, searchVal, low, mid - 1);
	} else {
		return binarySearch(arr, searchVal, mid + 1, high);
	}
}
