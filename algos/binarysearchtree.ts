import { BinaryNode } from "./binarytreepreorder";

export function findOnBST<T>(head: BinaryNode<T>, searchValue: T): boolean {
    if (head === null) {
        return false
    }
    if (head.value === searchValue) {
        return true
    }
    if (head.value >= searchValue) {
        return findOnBST(head.left, searchValue)
    }

    return findOnBST(head.right, searchValue)
}