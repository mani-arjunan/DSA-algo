import { preOrderSearch } from '../algos/binarytreepreorder';
import { tree } from '../contants/test-helpers';

test('Binary Tree in order test', () => {
	expect(preOrderSearch(tree)).toEqual([
		20,
		10,
		5,
		7,
		15,
		50,
		30,
		29,
		45,
		100
	])
})
