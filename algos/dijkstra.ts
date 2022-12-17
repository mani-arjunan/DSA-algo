import { WeightedAdjacencyList } from "./dfs-graphlist";
import { Queue } from "./LinkedList/queue";

function hasUnvisited(seen: boolean[], dists: number[]): boolean {
    return seen.some((s, i) => !s && dists[i] < Infinity);
}

function getLowestUnvisitedIndex(seen: boolean[], dists: number[]): number {
    let index = -1;
    let lowestDistance = Infinity;

    for (let i = 0; i < seen.length; i++) {
        if (seen[i]) {
            continue;
        }
        if (lowestDistance > dists[i]) {
            lowestDistance = dists[i]
            index = i;
        }
    }

    return index;
}



export function dijkstra(
    source: number,
    dest: number,
    arr: WeightedAdjacencyList
): number[] {
    const seen = new Array(arr.length).fill(false);
    const dists = new Array(arr.length).fill(Infinity);
    const prev = new Array(arr.length).fill(-1);
    const q = new Queue();

    dists[source] = 0;

    while (hasUnvisited(seen, dists)) {
        const current = getLowestUnvisitedIndex(seen, dists);
        seen[current] = true;

        const adjs = arr[current];
        for (let i = 0; i < adjs.length; i++) {
            const edge = adjs[i];

            if (seen[edge.to]) {
                continue;
            }

            const distance = dists[current] + edge.weight;
            if (distance < dists[edge.to]) {
                dists[edge.to] = distance;
                prev[edge.to] = current;
            }
        }
    }

    const out: number[] = [];

    let current = dest;

    while (prev[current] !== -1) {
        out.push(current);
        current = prev[current]
    }

    return [source, ...out.reverse()];
}
