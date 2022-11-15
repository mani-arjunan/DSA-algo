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
