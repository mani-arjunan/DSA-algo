interface BinaryNode<T> {
	value: T;
	left: BinaryNode<T> | null;
	right: BinaryNode<T> | null;
}

function walk(currentNode: BinaryNode<number> | null, path: number[]): number[] {
	if(!currentNode){
		return path;
	}
	
	walk(currentNode.left, path);
	path.push(currentNode.value);	
	walk(currentNode.right, path);

	return path;
}

export function inOrderTraversal(head: BinaryNode<number>): number[] {
	return walk(head, []);
}

