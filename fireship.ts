type NodeFire<T> = {
    value: T;
    next: NodeFire<T> | null;
}

class Queue<T> {
    public length: number = 0;
    private head: NodeFire<T> | null;
    private tail: NodeFire<T> | null;

    constructor(value: T) {
        this.head = {
            value,
            next: null
        };
        this.tail = this.head;
        this.length++;
    }

    enqueue(value: T): void {
        this.length++;
        if(!this.tail) {
            const node = {
                value,
                next: null
            };
            this.head = this.tail = node;
        } else {
            const node = {
                value,
                next: null
            }
            this.tail.next = node;
            this.tail = node;
        }
    }
        
    dequeue(): T | null {
        const head = this.head;
        if(this.head) {
            this.head = this.head.next;
            this.length--;
            if(this.length === 0){ 
                this.tail = null;
            }
        }

        return head?.value;
    }

    peek() {
        return this.head.value
    }
}
const airports = ['PHX', 'BKK', 'OKC', 'JFK', 'LAX', 'MEX', 'EZE', 'HEL', 'LOS', 'LAP', 'LIM'];
const routes = [
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK']
];
const adjacencyList = new Map();

airports.forEach(airport => {
    adjacencyList.set(airport, []);
})

routes.forEach(route => {
    adjacencyList.get(route[0]).push(route[1]);
    adjacencyList.get(route[1]).push(route[0]);
});


const bfs = (source: string) => {
    const visited = new Set();
    visited.add(source);
    const queue = new Queue<string>(source);
    while(queue.length > 0) {
        const destinations = adjacencyList.get(queue.dequeue());
        for(let i = 0;i < destinations.length;i++) {
            if(destinations[i] === 'BKK') {
               console.log("FOUND THE DESTINATION")
            }
            if(!visited.has(destinations[i])) {
                visited.add(destinations[i]);
                queue.enqueue(destinations[i]);
                console.log(destinations[i])
            }
        }
    }
}

console.log(adjacencyList)
//bfs('PHX')

const dfs = (source: string, visited = new Set(source), steps = 0) => {
    const destinations = adjacencyList.get(source);

    for(let i = 0;i < destinations.length;i++) {
        if(destinations[i] === 'BKK') {
            console.log('FOUND IT IN ' + steps + ' steps')
        }
        if(!visited.has(destinations[i])) {
            visited.add(destinations[i])
            dfs(destinations[i], visited, ++steps);
        }
    }
}

dfs('PHX')








