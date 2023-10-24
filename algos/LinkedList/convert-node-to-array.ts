import { Queue } from "./queue";

/**
 * Definition for MyNode.
 * class MyNode {
 *     val: number
 *     left: MyNode | null
 *     right: MyNode | null
 *     next: MyNode | null
 *     constructor(val?: number, left?: MyNode, right?: MyNode, next?: MyNode) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
type MyNode = {
    val: number;
    left: MyNode | null;
    right: MyNode | null;
    next?: MyNode | null;
}
// function connect(
//     root: MyNode | null,
//     parentNode: MyNode | null = null,
//     originalRoot: MyNode | null = root
// ): MyNode | null | undefined {
//     if (!root) {
//         return
//     }
//     if (parentNode) {
//         if (parentNode.right && parentNode.right.val === root.val) {
//             root.next = (parentNode.left as MyNode).next || null
//         } else {
//             root.next = (parentNode.right as MyNode);
//         }
//     } else {
//         root.next = null
//     }

//     connect(root.left, root, originalRoot)
//     connect(root.right, root, originalRoot)

//     return originalRoot;
// };


const node: MyNode = {
    val: 1,
    left: {
        val: 8,
        left: {
            val: 4, left: {
                val: 4, left: null, right: null
            }, right: { val: -3, left: null, right: null }
        },
        right: {
            val: -8, left: {
                val: -4, left: null, right: null
            }, right: {
                val: 5, left: null, right: null
            }
        }
    },
    right: {
        val: 10,
        left: {
            val: -4, left: {
                val: 4, left: null, right: null
            }, right: {
                val: -7, left: null, right: null
            }
        },
        right: {
            val: 2, left: {
                val: -8, left: null, right: null
            }, right: {
                val: -8, left: null, right: null
            }
        }
    }
}
const node2: MyNode = {
    val: 1,
    left: {
        val: -4,
        left: {
            val: 5,
            left: null,
            right: null
        },
        right: {
            val: -2,
            left: null,
            right: null
        }
    },
    right: {
        val: -3,
        left: {
            val: -2,
            left: null,
            right: null
        },
        right: {
            val: -5,
            left: null,
            right: null
        }
    }
}

function convertNodeToArr(node: MyNode | null): MyNode | null {
    const queue = new Queue<MyNode | null>(node)
    const parentQueue = new Queue<MyNode | null>(null);
    let isLeft = true;

    while (queue.length) {
        const current = queue.dequeue() as MyNode;
        const currentParent = parentQueue.dequeue() as MyNode;

        if (!currentParent) {
            current.next = null;
        } else if (currentParent) {
            if (currentParent.next) {
                if (isLeft) {
                    current.next = currentParent.right;
                    isLeft = false
                } else {
                    current.next = currentParent.next.left
                    isLeft = true
                }
            } else {
                if (isLeft) {
                    current.next = currentParent.right;
                    isLeft = false
                } else {
                    current.next = null
                    isLeft = true
                }
            }

        }
        if (current.left) {
            queue.enqueue(current.left)
            parentQueue.enqueue(current)
        }
        if (current.right) {
            queue.enqueue(current.right)
            parentQueue.enqueue(current)
        }
    }
    return node
}

// const node2 = connect(node) as MyNode | null
// console.log(node2)
console.log(JSON.stringify(convertNodeToArr(node)));
// console.log(convertNodeToArr(node2));
