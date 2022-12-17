import { dfsGraphList } from '../algos/dfs-graphlist'
import { list2 } from '../constants/test-helpers'

test('Test dfs using graph adjacency list', () => {
    expect(dfsGraphList(list2, 0, 6)).toEqual([
        0,
        1,
        4,
        5,
        6
    ]);
    expect(dfsGraphList(list2, 6, 0)).toEqual(null);
})