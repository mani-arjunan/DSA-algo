import { Node } from './queue';

interface StackInterface<T> {
	pop(): T | undefined;
	push(value: T): void;
	peek(): T | undefined;
}

export class Stack<T> implements StackInterface<T> {
	public length: number;
	private head: Node<T>;

	constructor(value?: T) {
		this.head = value
			? {
					value,
					next: null
			  }
			: null;
		this.length = value ? 1 : 0;
	}

	pop(): T | undefined {
		const head = this.head;
		if (this.head) {
			this.head = this.head.next;
			head.next = null;
			this.length--;
		}

		return head?.value;
	}

	push(value: T): void {
		const node: Node<T> = {
			value,
			next: this.head
		};

		this.head = node;
		this.length++;
	}

	peek(): T | undefined {
		return this.head?.value;
	}
}

// My own test cases
// const s1 = new Stack<number>(1);
// console.log(s1.peek());
// console.log(s1.push(2));
// console.log(s1.push(3));
// console.log(s1.push(4));
// console.log(s1.push(5));
// console.log(s1.peek());
// console.log(s1.pop());
// console.log(s1.length);
