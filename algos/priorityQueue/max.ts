class MaxPriorityHeap<T> {
	private length: number;
	public data: T[];

	constructor() {
		this.length = 0;
		this.data = [];
	}

	enqueue(value: T): void {
		// console.log(value, 'VALUE_TO_INSERT', this.data);
		this.data.push(value);
		this.heapUp(this.length++);
	}

	dequeue(): T {
		if (this.length === 0) {
			return -1 as T;
		}

		const headElement = this.data[0];

		if (this.length === 1) {
			this.length = 0;
			this.data = [];
			return headElement;
		}

		this.data[0] = this.data.pop();
		this.length--;
		this.heapDown(0);
		return headElement;
	}

	private heapUp(index: number): void {
		// console.log('HEAP_UP_INDEX', index)
		if (index === 0) {
			return;
		}

		const parentIndex = Math.floor(index / 2);
		const parentValue = this.data[parentIndex];
		const value = this.data[index];

		if (parentValue < value) {
			this.data[index] = parentValue;
			this.data[parentIndex] = value;
			this.heapUp(parentIndex);
		}
	}

	private heapDown(index: number): void {
		const leftChildIndex = index * 2 + 1;
		const rightChildIndex = index * 2 + 2;

		if (index >= this.length || leftChildIndex >= this.length) {
			return;
		}

		const leftChildValue = this.data[leftChildIndex];
		const rightChildValue = this.data[rightChildIndex];
		const currentValue = this.data[index];

		if (leftChildValue > currentValue && leftChildValue >= rightChildValue) {
			this.data[index] = leftChildValue;
			this.data[leftChildIndex] = currentValue;
			this.heapDown(leftChildIndex);
		} else if (rightChildValue > currentValue && rightChildValue >= leftChildValue) {
			this.data[index] = rightChildValue;
			this.data[rightChildIndex] = currentValue;
			this.heapDown(rightChildIndex);
		}
	}
}
const max = new MaxPriorityHeap<number>();
max.enqueue(5);
max.enqueue(1);
max.enqueue(3);
max.enqueue(4);
max.enqueue(12);
max.enqueue(2);
console.log(max.dequeue());
max.enqueue(100);
max.enqueue(5);
console.log(max.dequeue());
console.log(max.dequeue());
console.log(max.dequeue());
console.log(max.dequeue());
max.enqueue(104);
max.enqueue(104);
max.enqueue(5)
console.log(max.dequeue());
console.log(max.dequeue());
