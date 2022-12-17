import { bfsOnAdjacentMatrix } from '../algos/bfs-graph-matrix'
import { matrix2 } from '../constants/test-helpers'

test.only('bfs-graph matrix test', () => {
    expect(bfsOnAdjacentMatrix(matrix2, 0, 6)).toEqual([
        0,
        1,
        4,
        5,
        6
    ])
    expect(bfsOnAdjacentMatrix(matrix2, 6, 0)).toEqual(null)
})