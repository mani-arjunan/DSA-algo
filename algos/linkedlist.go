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

func (l *LinkedList) Insert(val int) {
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

	if val <= l.head.value {
		if l.head == l.tail {
			l.tail = &node
		}
		node.next = l.head
		l.head = &node
		return
	}

	curr := l.head

	for curr.next != nil && curr.next.value < val {
		curr = curr.next
	}

  node.next = curr.next
	curr.next = &node

	if node.next == nil {
		l.tail = &node
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
	l1.Insert(10)
	l1.Print()
}

// 1 -> 2 -> 3 -> 4
