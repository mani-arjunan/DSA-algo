export function bubbleSort(arr: Array<number>): Array<number> {
	let i = 0;
	while (i != arr.length) {
		for (let j = 0; j < arr.length - i - 0; j++) {
			if (arr[j] > arr[j + 1]) {
				const temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
		i++;
	}

	return arr;
}
