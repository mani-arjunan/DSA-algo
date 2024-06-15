class MinPriorityHeap<T> {
	private length: number;
	public data: T[];

	constructor() {
		this.length = 0;
		this.data = [];
	}

	enqueue(value: T): void {
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
		this.length++;
		this.heapDown(0);
		return headElement;
	}

	private heapUp(index: number): void {
		if (index === 0) {
			return;
		}

		const parentIndex = Math.floor(index / 2);
		const parentValue = this.data[parentIndex];
		const value = this.data[index];

		if (parentValue > value) {
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

		if (leftChildValue < currentValue && leftChildValue <= rightChildValue) {
			this.data[index] = leftChildValue;
			this.data[leftChildIndex] = currentValue;
			this.heapDown(leftChildIndex);
		} else if (rightChildValue < currentValue && rightChildValue <= leftChildValue) {
			this.data[index] = rightChildValue;
			this.data[rightChildIndex] = currentValue;
			this.heapDown(rightChildIndex);
		}
	}
}

const min = new MinPriorityHeap<number>();
min.enqueue(5);
min.enqueue(1);
min.enqueue(3);
min.enqueue(4);
min.enqueue(12);
min.enqueue(2);
console.log(min.dequeue()); // 1
console.log(min.data)
min.enqueue(100);
min.enqueue(5);
console.log(min.dequeue()); // 2
console.log(min.data)
console.log(min.dequeue()); // 3
console.log(min.data)
console.log(min.dequeue()); // 4
console.log(min.data)
console.log(min.dequeue()); // 5
console.log(min.data)
min.enqueue(104);
min.enqueue(5);
console.log(min.dequeue()); // 5
console.log(min.data)
console.log(min.dequeue()); // 5
console.log(min.data)
