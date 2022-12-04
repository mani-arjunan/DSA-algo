import { Node } from './queue'

export interface LinkedList<T> {
    get length(): number;
    insertAt(item: T, index: number): void;
    remove(item: T): T | undefined;
    removeAt(index: number): T | undefined;
    append(item: T): void;
    prepend(item: T): void;
    get(value: T): T | undefined
    getWithIndex(index: number): Node<T> | undefined
    getWithIndexValue(index: number): T | undefined
}

// class Linkedlist implements LinkedList {

// }