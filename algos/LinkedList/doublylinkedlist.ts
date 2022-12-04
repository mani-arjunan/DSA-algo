import { Node } from './queue'
import { LinkedList } from './linkedlist'

export class DoublyLinkedList<T> implements LinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor(value?: T) {
        this.head = value ? {
            value
        } : null
        this.tail = value ? {
            value
        } : null
        this.length = value ? 1 : 0
    }

    prepend(item: T): void {
        const node: Node<T> = {
            value: item
        }

        this.length++;
        if (this.head) {
            node.next = this.head
            this.head.previous = node;
            this.head = node;
        } else {
            this.head = this.tail = node
            this.head.next = null; // This is not needed for JS just for my understanding :)
            this.head.previous = null; // This is not needed for JS just for my understanding :)
        }
    }

    insertAt(item: T, index: number): void {
        if (index > this.length) {
            throw new Error("Its not possible to insert in this index" + " " + index);
        }
        this.length++;
        if (index === this.length) {
            this.append(item);
            return;
        } else if (index === 0) {
            this.prepend(item);
            return
        }

        let current = this.head
        let i = 0;

        while (i < index && current) {
            current = current.next
            i++;
        }

        const node: Node<T> = {
            value: item
        }

        node.next = current;
        node.previous = current.previous;

        if (current.previous) {
            current.previous.next = node
            current.previous = node;
        } else {
            current.previous = node
        }
    }

    append(item: T): void {
        this.length++;

        const node: Node<T> = {
            value: item
        }

        if (!this.tail) {
            this.tail = this.head = node;
            this.tail.next = null; // This is not needed for JS just for my understanding :)
            this.tail.previous = null; // This is not needed for JS just for my understanding :)
            return;
        } else {
            this.tail.next = node;
            node.previous = this.tail
            this.tail = node
        }

    }

    remove(item: T): T | undefined {
        let current = this.head;

        while (current) {
            if (current.value === item) {
                break
            }
            current = current.next
        }

        if (!current) {
            return undefined;
        }

        return this.removeNode(current)
    }

    removeAt(index: number): T | undefined {
        if (index > this.length) {
            throw new Error("Its not possible to insert in this index" + " " + index);
        }

        const nodeToRemove = this.getWithIndex(index);

        return this.removeNode(nodeToRemove)
    }

    get(value: T): T | undefined {
        let current = this.head;

        while (current) {
            if (current.value === value) {
                return current.value
            }

            current = current.next
        }
    }

    getWithIndex(index: number): Node<T> {
        let current = this.head;
        let i = 0;

        while (i < index && current) {
            current = current.next
            i++
        }

        return current
    }

    getWithIndexValue(index: number): T {
        let current = this.head;
        let i = 0;

        while (i < index && current.next) {
            current = current.next
            i++
        }

        return current.value
    }

    private removeNode(node: Node<T>): T | undefined {
        this.length--;

        if (this.length === 0) {
            const removedValue = node.value;
            this.head = this.tail = null
            return removedValue;
        }

        if (node.previous) {
            node.previous.next = node.next;
        }
        if (node.next) {
            node.next.previous = node.previous
        }

        const removedValue = node.value;
        if (node === this.head) {
            this.head = node.next
        }
        if (node === this.tail) {
            this.tail = node.previous
        }

        node.next = node.previous = null

        return removedValue;
    }
}