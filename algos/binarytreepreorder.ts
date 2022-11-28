export interface BinaryNode<T> {
	value: T;
	left: BinaryNode<T> | null;
	right: BinaryNode<T> | null;
}

function walk(currentNode: BinaryNode<number> | null, path: number[]): number[] {
	if(!currentNode){
		return path;
	}
	
	path.push(currentNode.value);
	
	walk(currentNode.left, path);
	walk(currentNode.right, path);

	return path;
}

export function preOrderSearch(head: BinaryNode<number>): number[] {
	return walk(head, []);
}
