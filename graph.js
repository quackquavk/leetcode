class Graph {
    constructor() {
        this.adjList = new Map();
    }

    addVertex(vertex) {
        if (!this.adjList.has(vertex)) {
            this.adjList.set(vertex, []);
        } else {
            console.log("Vertex already exists!");
        }
    }

    addEdge(vertex1, vertex2) {
        if (this.adjList.has(vertex1) && this.adjList.has(vertex2)) {
            // For undirected graph, add edge in both directions
            this.adjList.get(vertex1).push(vertex2);
            this.adjList.get(vertex2).push(vertex1);
        } else {
            console.log("Vertex not found!");
        }
    }

    printGraph() {
        for (let [vertex, edges] of this.adjList) {
            console.log(vertex + " -> " + edges.join(", "));
        }
    }
}

// Example usage
const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");

graph.addEdge("A", "B");
graph.addEdge("B", "C");
graph.addEdge("C", "D");
graph.addEdge("D", "A");

graph.printGraph();
