import { Queue } from './LinkedList/queue'

export interface BinaryNode<T> {
    value: T;
    left: BinaryNode<T> | null;
    right: BinaryNode<T> | null;
}

export function breadthFirstSearch<T>(bfsTree: BinaryNode<T>, searchValue: T): boolean {
    const queue = new Queue<BinaryNode<T>>(bfsTree)

    while (queue.length) {
        const current = queue.dequeue();

        if (current.value === searchValue) {
            return true
        }
        if (current.left) {
            queue.enqueue(current.left)
        }
        if (current.right) {
            queue.enqueue(current.right)
        }
    }

    return false
}


// console.log(breadthFirstSearch<number>({
//     value: 7,
//     left: {
//         value: 23,
//         left: {
//             value: 5,
//             left: null,
//             right: null
//         },
//         right: {
//             value: 4,
//             left: null,
//             right: null
//         }
//     },
//     right: {
//         value: 8,
//         left: {
//             value: 21,
//             left: null,
//             right: null
//         },
//         right: {
//             value: 15,
//             left: null,
//             right: null
//         }
//     },

// }, 22))