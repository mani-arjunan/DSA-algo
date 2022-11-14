export function twoCrystalBalls(arr: Array<boolean>): number {
	const sqrtJump = Math.floor(Math.sqrt(arr.length));

	for (let i = sqrtJump; i < arr.length; i += sqrtJump) {
		if (arr[i]) {
			let j = 0;
			i -= sqrtJump;

			while (j !== sqrtJump) {
				if (arr[i]) {
					return i;
				}
				j++;
				i++;
			}
			return -1;
		}
	}

	return -1;
}
