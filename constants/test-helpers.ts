import { BinaryNode } from '../algos/binarytreepreorder';
import { WeightedAdjacencyMatrix } from '../algos/bfs-graph-matrix'
import { WeightedAdjacencyList } from '../algos/dfs-graphlist';

export const tree: BinaryNode<number> = {
	value: 20,
	right: {
		value: 50,
		right: {
			value: 100,
			right: null,
			left: null
		},
		left: {
			value: 30,
			right: {
				value: 45,
				right: null,
				left: null
			},
			left: {
				value: 29,
				left: null,
				right: null,
			}
		}
	},
	left: {
		value: 10,
		right: {
			value: 15,
			left: null,
			right: null
		},
		left: {
			value: 5,
			right: {
				value: 7,
				left: null,
				right: null
			},
			left: null
		}
	}
}

export const matrix2: WeightedAdjacencyMatrix = [
	[0, 3, 1, 0, 0, 0, 0],
	[0, 0, 0, 0, 1, 0, 0],
	[0, 0, 7, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0],
	[0, 1, 0, 5, 0, 2, 0],
	[0, 0, 18, 0, 0, 0, 1],
	[0, 0, 0, 1, 0, 0, 1]
]

export const list2: WeightedAdjacencyList = [
	[{ to: 1, weight: 3 }, { to: 2, weight: 1 }],
	[{ to: 4, weight: 1 }],
	[{ to: 3, weight: 7 }],
	[],
	[{ to: 1, weight: 1 }, { to: 3, weight: 5 }, { to: 5, weight: 2 }],
	[{ to: 1, weight: 18 }, { to: 6, weight: 1 }],
	[{ to: 3, weight: 1 }],
]

export const list1: WeightedAdjacencyList = [
	[{ to: 1, weight: 3 }, { to: 2, weight: 1 }],
	[{ to: 0, weight: 3 }, { to: 2, weight: 4 }, { to: 4, weight: 1 }],
	[{ to: 1, weight: 4 }, { to: 3, weight: 7 }, { to: 0, weight: 1 }],
	[{ to: 2, weight: 7 }, { to: 4, weight: 5 }, { to: 6, weight: 1 }],
	[{ to: 1, weight: 1 }, { to: 3, weight: 5 }, { to: 5, weight: 2 }],
	[{ to: 6, weight: 1 }, { to: 4, weight: 2 }, { to: 2, weight: 18 }],
	[{ to: 3, weight: 1 }, { to: 5, weight: 1 }],
]
