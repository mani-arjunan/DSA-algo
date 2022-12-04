import { compare } from '../algos/binarytreecomparision'
import { tree } from '../constants/test-helpers'

test('test binary tree comparision', () => {
    // postive case
    expect(compare(tree, tree)).toEqual(true)
    // negative case with different value
    expect(compare({ ...tree, value: 10 }, tree)).toEqual(false)
    // negative case with different structure.
    expect(compare({ ...tree, right: null }, tree)).toEqual(false)
})