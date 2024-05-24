// Sample graph represented as an adjacency list
const graph = {
    0: [1, 2],
    1: [3, 4],
    2: [5],
    3: [],
    4: [6],
    5: [],
    6: []
};

// Breadth-First Search (BFS) algorithm
function bfs(startNode, graph) {
    const visited = {};
    const queue = [startNode];
    const result = [];

    while (queue.length > 0) {
        const currentNode = queue.shift();
        if (!visited[currentNode]) {
            visited[currentNode] = true;
            result.push(currentNode);
            graph[currentNode].forEach((neighbor) => {
                queue.push(neighbor);
            });
        }
    }

    return result;
}

// Depth-First Search (DFS) algorithm
function dfs(startNode, graph) {
    const visited = {};
    const result = [];

    function traverse(node) {
        visited[node] = true;
        result.push(node);
        graph[node].forEach((neighbor) => {
            if (!visited[neighbor]) {
                traverse(neighbor);
            }
        });
    }

    traverse(startNode);
    return result;
}

// Testing BFS and DFS
console.log('BFS:', bfs(0, graph)); // Output: [0, 1, 2, 3, 4, 5, 6]
console.log('DFS:', dfs(0, graph)); // Output: [0, 1, 3, 4, 6, 2, 5]
