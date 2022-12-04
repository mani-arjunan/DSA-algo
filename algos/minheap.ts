export class MinHeap<T> {
    public length: number;
    private data: T[];

    constructor() {
        this.data = []
        this.length = 0;
    }

    insert(value: T): void {
        this.data.push(value)
        this.heapUp(this.length++)
    }

    delete(): T {
        if (this.length === 0) {
            return -1 as T
        }

        const headElement = this.data[0]
        if (this.length === 1) {
            this.data = [];
            this.length = 0;
            return headElement
        }

        this.data[0] = this.data[this.length - 1]
        this.length--;
        this.heapDown(0)
        return headElement
    }

    private parent(index: number): number {
        return Math.floor((index - 1) / 2)
    }

    private getLeftChild(index: number): number {
        return 2 * index + 1;
    }

    private getRightChild(index: number): number {
        return 2 * index + 2;
    }

    private heapUp(index: number): void {
        if (index === 0) {
            return;
        }

        const parentIndex = this.parent(index);
        const parentValue = this.data[parentIndex]
        const value = this.data[index];

        if (value < parentValue) {
            this.data[index] = parentValue;
            this.data[parentIndex] = value;
            this.heapUp(parentIndex);
        }
    }

    private heapDown(index: number): void {
        const leftChildIndex = this.getLeftChild(index);
        const rightChildIndex = this.getRightChild(index);

        if (index >= this.length || leftChildIndex >= this.length) {
            return;
        }

        const leftChildValue = this.data[leftChildIndex];
        const rightChildValue = this.data[rightChildIndex];
        const value = this.data[index];

        if (rightChildValue < leftChildValue && value > rightChildValue) {
            this.data[index] = rightChildValue;
            this.data[rightChildIndex] = value
            this.heapDown(rightChildIndex)
        } else if (leftChildValue < rightChildValue && value > leftChildValue) {
            this.data[index] = leftChildValue;
            this.data[leftChildIndex] = value;
            this.heapDown(leftChildIndex);
        }
    }
}


