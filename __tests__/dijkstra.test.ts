import { dijkstra } from '../algos/dijkstra'
import { list1 } from '../constants/test-helpers'

test("Test dijkstra", () => {
    expect(dijkstra(0, 6, list1)).toEqual([0, 1, 4, 5, 6])
})