import { Queue } from '../algos/LinkedList/queue'

export type WeightedAdjacencyMatrix = number[][];

// function 
export function bfsOnAdjacentMatrix(
	graph: WeightedAdjacencyMatrix,
	source: number,
	searchElement: number
): number[] |null {
	const seen = new Array(graph.length).fill(false);
	const prev = new Array(graph.length).fill(-1);
	seen[source] = true;

	const q = new Queue<number>(source);
	
	while(q.length) {
		const current = q.dequeue();
		if(current === searchElement){
			break;
		}
		seen[current] = true;

		const adjacencies = graph[current];
		for (let i = 0; i < adjacencies.length; i++) {
			if (adjacencies[i] === 0 || seen[i]){
				continue;
			}
			seen[i] = true;
			prev[i] = current;
			q.enqueue(i);
		}
	}

	let current = searchElement;
	const resultPath: number[] = [];

	while(prev[current] !== -1) {
		resultPath.push(current);
		current = prev[current];
	}

	if(resultPath.length){
		return [source].concat(resultPath.reverse());
	}
	return null;
}
