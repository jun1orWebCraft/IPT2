function bfs(n, m, edges, s) {
    const adj = Array.from({ length: n + 1 }, () => []);
    for (const [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u);
    }

    const visited = new Array(n + 1).fill(false);
    const distance = new Array(n + 1).fill(-1);
    const queue = [];

    visited[s] = true;
    distance[s] = 0;
    queue.push(s);

    while (queue.length) {
        const node = queue.shift();
        for (const neighbor of adj[node]) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                distance[neighbor] = distance[node] + 6;
                queue.push(neighbor);
            }
        }
    }

    const result = [];
    for (let i = 1; i <= n; i++) {
        if (i !== s) {
            result.push(distance[i]);
        }
    }

    return result;
}
