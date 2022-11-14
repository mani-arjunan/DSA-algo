import { binarySearch } from '../algos/binarysearch';

test('Binary Search test', () => {
	const nums = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420];

	expect(binarySearch(nums, 69)).toEqual(true);
	expect(binarySearch(nums, 69420)).toEqual(true);
	expect(binarySearch(nums, 1)).toEqual(true);
	expect(binarySearch(nums, 1336)).toEqual(false);
	expect(binarySearch(nums, 69421)).toEqual(false);
	expect(binarySearch(nums, 0)).toEqual(false);
});
