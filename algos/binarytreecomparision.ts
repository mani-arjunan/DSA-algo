import { BinaryNode } from "./binarytreepreorder";

export function compare<T>(firstTree: BinaryNode<T>, secondTree: BinaryNode<T>): boolean {
    if (firstTree === null && secondTree === null) {
        return true
    }
    if (firstTree === null || secondTree === null) {
        return false
    }
    if (firstTree.value !== secondTree.value) {
        return false
    }

    return compare(firstTree.left, secondTree.left) && compare(firstTree.right, secondTree.right)
} 