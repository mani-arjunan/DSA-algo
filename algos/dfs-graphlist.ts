export interface GraphEdge {
	to: number;
	weight: number;
}

export type WeightedAdjacencyList = GraphEdge[][];

function walk(
	graph: WeightedAdjacencyList,
	current: number,
	searchElement: number,
	seen: boolean[],
	path: number[]
): boolean {
	if(seen[current]) {
		return false;
	}

	seen[current] = true;

	path.push(current);
	if(current === searchElement) {
		return true;
	}

	const list = graph[current];
	for(let i = 0; i < list.length; i++) {
		const edge = list[i]
		if(walk(graph, edge.to, searchElement, seen, path)) {                                     
			return true;
		}
	}
	path.pop();
	return false;
}

export function dfsGraphList(
	graph: WeightedAdjacencyList,
	source: number,
	searchElement: number
): number[] | null {
	const seen: boolean[] = new Array(graph.length).fill(false);
	const path: number[] = [];
 
	walk(graph, source, searchElement, seen, path);
	if(path.length === 0) {
		return null;
	}

	return path;
}
