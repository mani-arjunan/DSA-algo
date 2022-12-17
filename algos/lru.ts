type Node<T> = {
	value: T,
	next?: Node<T>,
	previous?: Node<T>
}

function createNode<V>(value: V): Node<V> {
	return {
		value,
	}
}

export class LRU<K, V> {
	private length: number;
	private head: Node<V>;
	private tail: Node<V>;
	private map: Map<K, Node<V>>;
	private reverseMap: Map<Node<V>, K>;

	constructor(private capacity: number) {
		this.tail = this.head = null;
		this.length = 0;
		this.map = new Map<K, Node<V>>();
		this.reverseMap = new Map<Node<V>, K>();
	}

	update(key: K, value: V): void {
		const node = this.map.get(key);
		if (!node) {
			const node = createNode(value);
			this.length++;
			this.prependNode(node);
			this.trimCache();
			this.map.set(key, node);
			this.reverseMap.set(node, key)
		} else {
			this.detachNode(node);
			this.prependNode(node);
			node.value = value;
		}
	}

	get(key: K): V | undefined {
		const node = this.map.get(key);

		if (!node) {
			return undefined
		}

		this.detachNode(node);
		this.prependNode(node);

		return node.value
	}

	private detachNode(node: Node<V>) {
		if (node.previous) {
			node.previous.next = node.next;
		}
		if (node.next) {
			node.next.previous = node.previous;
		}
		if (this.head === node) {
			this.head = this.head.next
		}
		if (this.tail === node) {
			this.tail = this.tail.previous
		}

		node.next = null;
		node.previous = null;
	}

	private prependNode(node: Node<V>) {
		if (!this.head) {
			this.head = this.tail = node
			return;
		}

		this.head.previous = node;
		node.next = this.head;
		this.head = node
	}

	private trimCache(): void {
		if (this.length <= this.capacity) {
			return
		}

		const tail = this.tail;
		this.detachNode(this.tail);

		const key = this.reverseMap.get(tail);
		this.map.delete(key);
		this.reverseMap.delete(tail);
		this.length--;
	}
}