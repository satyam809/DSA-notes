class PriorityQueue {
    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        this.values.push({val, priority});
        this.sort();
    }

    dequeue() {
        return this.values.shift();
    }

    sort() {
        this.values.sort((a, b) => a.priority - b.priority)
    }
}


class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertexA, vertexB, weight) {
        this.adjacencyList[vertexA].push({node: vertexB, weight: weight});
        this.adjacencyList[vertexB].push({node: vertexA, weight: weight});
    }

    dijkstraAlgorithm(start, finish) {
        const distances = {};
        const previous = {};
        let path = [];
        const nodes = new PriorityQueue();
        for (let vertex in this.adjacencyList) {
            if (vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }
        while (nodes.values.length) {
            let smallest = nodes.dequeue().val;
            if (smallest === finish) {
                while (previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                path = path.concat(smallest).reverse();
                break;
                // we are done
            }
            if (smallest || distances[smallest] !== Infinity) {
                for (let neighbour of this.adjacencyList[smallest]) {
                    let candidate = distances[smallest] + neighbour.weight;
                    if (candidate < distances[neighbour.node]) {
                        distances[neighbour.node] = candidate;
                        previous[neighbour.node] = smallest;
                        nodes.enqueue(neighbour.node, candidate);
                    }
                }
            }
        }
        return path;
    }
}

const graph = new WeightedGraph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

const result = graph.dijkstraAlgorithm("A", "E");
console.log(result);
