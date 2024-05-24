/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    const visited = Array(n).fill(0);
    const stack = [source];
    const G = [];

    for (const [u,v] of edges) {
        G[u] ||= [];
        G[u].push(v);
        G[v] ||= [];
        G[v].push(u);
    }

    while (stack.length) {
        const u = stack.pop();
        if (u === destination) {
           console.log(stack)
           console.log(G)

            return true;
        }

        visited[u] = 1;
        for (const v of G[u]) {
            if (!visited[v]) {
                stack.push(v);
            }
        }
    }
    
    return false;
};
const n = 3;
const edges = [[0,1],[1,2],[2,0]];
const source = 0;
const destination = 2;
console.log(validPath(n, edges, source, destination));