import { linearSearch } from '../algos/linearsearch';

test('Linear Search test', () => {
	const nums = [1, 3, 4, 5, 32, 21, 4, 1, 2];
	expect(linearSearch(nums, 2)).toEqual(true);
	expect(linearSearch(nums, 1)).toEqual(true);
	expect(linearSearch(nums, 124)).toEqual(false);
	expect(linearSearch(nums, 32)).toEqual(true);
});
