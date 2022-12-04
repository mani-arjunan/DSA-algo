import { findOnBST } from "../algos/binarysearchtree";
import { tree } from "../constants/test-helpers";

test("test for BST search", function () {
    expect(findOnBST(tree, 45)).toEqual(true);
    expect(findOnBST(tree, 7)).toEqual(true);
    expect(findOnBST(tree, 69)).toEqual(false);
});

