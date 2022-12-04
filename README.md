# Data Structures and Algorithms
This repo contains various data structures and some common algorithimic patterns in typescript

### **BigO Time complexity**
Big O is basically to categorize our algorithms based on time or memory requirements based on problem input.
A generalized way to measure a particular algorithm.
Grows linearly over the input.

#### **O(N)**
Example
```
function sumCharCodes(str: string): number {
    let sum = 0;

    for (let i = 0; i < str.length; i++){
        sum += n.charCodeAt(i);
    }

    return sum;
}

From abve example Big O means this function sumCharCodes grows linearly based on str.length.
for loop runs based on the input string length, if input string length increase by 20times, our for loop will take another 20times to run.
so basically the time complexity of above is O(N). N - our input
```

Another example
```
function sumCharCodes(str: string): number {
    let sum = 0;

    for (let i = 0; i < str.length; i++){
        sum += n.charCodeAt(i);
    }

    for (let i = 0; i < str.length; i++){
        sum += n.charCodeAt(i);
    }

    return sum;
}
The above example is same as previous, from our understanding we can say the time complexity of the abve is 0(2N).
no its still O(N). constants doesn't really matter for theoritical way of time complexity measures. so O(N) O(3N) O(10N) ..etc all resolves to O(N) since it doesn't grow a massively even if the constant changes.
```

#### **O(N^2)**
Example
```
function sumCharCodes(str: string): number {
    let sum = 0;

    for (let i = 0; i < str.length; i++){
        for (let j = 0; j <str.length; j++){
            sum += n.charCodeAt(i + j); // dummy
        }
    }

    return sum;
}

From abve example Big O means this function sumCharCodes grows linearly based on str.length.
for loop runs for a single character it wil loop again through the entire character based on the input string length, if input string length increase by 20times, our for loop will take another 40times to run.
so basically the time complexity of above is O(N^2). N - our input
```

#### **O(NlogN)**
```Quicksort```

#### **O(logN)**
```Binary Search Tree```

From the above take away consider the below points for BigO notation:
* growth is linear and is tighed to the prblm input.
* Constants are dropped like O(N) O(3N) O(10N) O(N-2) ..etc all resolves to 
O(N).
* Worst case is usually one has to measure.


## **Arrays**
* Arrays are basically is a contigous(unbreaking) memory space.
eg: 0[..................]N.
* Array is effectively a big or long size of zero or more pieces of memory into a single type in a row.

Example
```
arr = int[3]

from the above i want 3contigous memory space to use.
a[0] literally means telling the computer go to the memory address of a and add the 0(offset value) multiply by the bits of that data type.
```

## **Search**
Search on an array

* **Linear Search**:
    Basically looping the entire array untill we find our desired search input in any position and then returns.


## **Sorting**
Sorting an array either asc or desc.

* **Bubble sort**
    iterating over an array and comparing one item(xi) with the next adjacent item(xi+1) if it didn't matches (xi < xi+1) the swap has to happen, with this, the largest value will be moved to the end of the array for each iteration.
    Time complexity of this algorithm is O(n2)

## **Linked List**
    Linked lists are basically a node which has the next next node's address etc.

* **Singly linked list**
    head(next -> node1) -> node1(next -> node2) -> node2(next -> node3) -> node3(next -> null) -> null

* **Doubly linked list**
    head(previous -> null, next -> node1) -> node1(previous -> head, next -> node2) -> node2(previous -> node1, next -> node3) -> node3(previous -> node2, next -> null) -> null

## **Queue**
    A Queue is simple FIFO(First In First Out) structure, any data that we want to insert it goes to the back of the queue(last of the queue) enqueue, anything we needs to remove will goes to the first of the queue dequeue in this code example i will use linkedlist to showcase Queues.

## **Stack**
     A Stack is simple FILO(First In Last Out) structure, any data that we want to insert it goes to the back of the node push, anything we need to remove will goes to the back of the node pop in this code example i will use linkedlist to showcase Stack.

## **ArrayList**
    It creates a temporary array based on inputsize, say like the inputsize array is of 10 it will create a size of array 15 where length would be 10 and capacity would be 15, so the consecutive push and pop operation will be easy for push it increases the length if length <= capacity, and simply decrements for pop, when length > capacity it increases array capacity and copies all values in respective indices and again repeats the process.

* ArrayList is useful in performing push and pop of elements along with getting those values in constant time(O(1)), where as in linked list push and pop is easy but getting the values is O(N)

* ArrayList is used under the hood in javascript arrays.

## **Recursion**
    In simplest ways recursion is basically a function that calls itself over and over again untill a base condition is met, a base condition is basically an exit condition.

## Quicksort
    Quicksort follows divide and conquer approach.

> Divide and conquer simply means to be able to split the input into some number of chunks and loop over those smaller chunks and solves our prblm and splits those chunks smaller and smaller again untill to get our desired output for the prblm.

## Trees.
    Trees are basically everywhere in computer software, like 
* unix filesystems are trees.
* HTML dom is a tree.
* React virtual dom also represents a tree.
* Most of the compilers are data structured in tree. (astexplorer.net to view javascript compiler tree)

> Some Terminlogoies
> * Root - Top most node of the tree. eg: ```<html>``` in HTML, / in filesystem etc.
> * Height - The longest path from the root to the most last of the children node in that tree.
> * binary tree - A tree which has atmost 2 children, atleast 0 children.
> * general tree - A tree with 0 or more children.
> * binary search tree - A tree which has a specific ordering to the nodes and atmost 2 children.
> * leaves - A node without any children.
> * balanced - From the name a tree is said to be perfectly balanced when any node's left and right children have the same height.
> * branching factor - The amount of children a tree has.

## Tree traversal
 * Pre order traversal - function, recurse left, recurse right.
 * In order traversal - recurse left, function, recurse right.
 * Post order traversal - recurse left, recurse right, function.

> These type of traversal are also known as Depth first search.
> This Depth first search uses stack data structure, which in general programming we code with recursion which is a stack of functions.

## Breadth first search
    BFS uses queue data structure.

## BST(Binary search tree)
    BST is a classic when coming to the trees, they are specifically an ordering to
the data within the data structure differently

Rules of BST:
 * left side of the node has to be less than or equal to current node(<=)
 * right side of the node has to be greater than to the current node(>)

## Heap
    The simplest way to put this, it is a binary tree where every child and 
grandchildren is smaller(maxHeap) or larger(minHeap) than the current node.
* Whenever the node is added, we need to adjust the tree.
* Whenever the node is deleted, we need to adjust the tree.
* There is no traversing the tree, we can technically traverse, but there are no general use cases for this operation.