interface QueueInterface<T> {
	enqueue(item: T): void;
	peek(): T | undefined;
	dequeue(): T | undefined;
	length: number;
}

export type Node<T> = {
	value: T;
	next?: Node<T>;
	previous?: Node<T>;
};

export class Queue<T> implements QueueInterface<T> {
	public length: number;
	private head?: Node<T>;
	private tail?: Node<T>;

	constructor(value?: T) {
		this.head = value
			? {
				value,
				next: null
			}
			: null;
		this.tail = this.head;
		this.length = value ? 1 : 0;
	}

	enqueue(item: T): void {
		const node: Node<T> = {
			value: item,
			next: null
		};
		if (!this.tail) {
			this.tail = this.head = node;
		} else if (this.tail) {
			this.tail.next = node;
			this.tail = node;
		}
		this.length++;
	}

	dequeue(): T | undefined {
		const head = this.head;
		if (this.head) {
			this.head = this.head.next;
			this.length--;
			if (this.length === 0) {
				this.tail = null;
			}
			head.next = undefined; // not needed in javascript since js garbage collector is good in removing unrefrencing variables, just for my completeness :)
			return head.value;
		}

		return head?.value;
	}

	peek(): T | undefined {
		return this.head?.value;
	}
}

// My own test cases
// const q = new Queue<number>(1);
// console.log(q.enqueue(2));
// console.log(q.length);
// console.log(q.enqueue(3));
// console.log(q.enqueue(4));
// console.log(q.enqueue(5));
// console.log(q.length);
// console.log(q.dequeue());
// console.log(q.dequeue());
// console.log(q.dequeue());
// console.log(q.dequeue());
// console.log(q.dequeue());
// console.log(q.dequeue());
// console.log(q.enqueue(100));
// console.log(q.length);
// console.log(q.peek());
