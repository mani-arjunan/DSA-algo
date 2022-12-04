import { breadthFirstSearch } from '../algos/breadthfirstsearch'
import { tree } from "../contants/test-helpers";

test("test breadth first search", function () {
    expect(breadthFirstSearch(tree, 45)).toEqual(true);
    expect(breadthFirstSearch(tree, 7)).toEqual(true);
    expect(breadthFirstSearch(tree, 69)).toEqual(false);
});

