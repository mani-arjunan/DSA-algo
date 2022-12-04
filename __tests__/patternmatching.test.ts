import { findPattern } from '../algos/patternmatching'

test('test pattern Matching', () => {
    expect(findPattern('large_t.ext,t,t.t.tt.txt', 'la*t.txt')).toEqual(true)
    expect(findPattern('large_t.ext,t,t.t.tttxt', 'la*t.txt')).toEqual(false)
})