package main

import "fmt"

type Node struct {
	next  *Node
	value int
}

type LinkedList struct {
	head   *Node
	tail   *Node
	length int
}

func convertToArr(l *LinkedList) []int {
	var arr []int

	curr := l.head

	for curr != nil {
		arr = append(arr, curr.value)
		curr = curr.next
	}

	return arr
}

func sort(arr []int) []int {
	for i := 0; i < len(arr); i++ {
		for j := 0; j < len(arr)-i; j++ {
			if j+1 < len(arr) && arr[j] > arr[j+1] {
				temp := arr[j]
				arr[j] = arr[j+1]
				arr[j+1] = temp
			}
		}
	}

	return arr
}

func insertIntoNode(l *LinkedList, val int) {
	node := Node{
		next:  nil,
		value: val,
	}
	l.length++

	if l.head == nil {
		l.head = &node
		l.tail = &node
		return
	}

	(*l.tail).next = &node
	l.tail = &node
}

func (l *LinkedList) Insert(val int) {
	insertIntoNode(l, val)
	arr := convertToArr(l)
	sort(arr)
	l.head = nil
	l.tail = nil

	for _, val := range arr {
		insertIntoNode(l, val)
	}
}

func (l *LinkedList) Search(val int) int {
	curr := l.head

	for curr != nil {
		if curr.value == val {
			return val
		}
		curr = curr.next
	}

	return -1
}

func (l *LinkedList) Print() {
	curr := l.head

	for curr != nil {
		fmt.Println(curr.value)
		curr = curr.next
	}
}

func (l *LinkedList) Delete(val int) int {
	if l.head == nil {
		return -1
	}

	if l.head.value == val {
		l.head = l.head.next

		if l.head == nil {
			l.tail = l.head
		}

		l.length--
		return val
	}

	curr := l.head

	for curr.next != nil {
		if curr.next.value == val {
			if curr.next == l.tail {
				l.tail = curr
			}

			curr.next = curr.next.next
			l.length--
			return val
		}

		curr = curr.next

	}

	return -1
}

func main() {
	var l1 LinkedList
	l1.Insert(4)
	l1.Insert(3)
	l1.Insert(12)
	l1.Insert(10)
	l1.Insert(2)
	l1.Insert(1)
	l1.Delete(10)
	l1.Print()
}
