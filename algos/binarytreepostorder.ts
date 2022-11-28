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
	walk(currentNode.right, path);
	path.push(currentNode.value);

	return path;
}

export function postOrderTraversal(head: BinaryNode<number>): number[] {
	return walk(head, []);
}


