function evenForest(t_nodes, t_edges, t_from, t_to) {
    const adj = Array.from({ length: t_nodes + 1 }, () => []);
    for (let i = 0; i < t_edges; i++) {
        adj[t_from[i]].push(t_to[i]);
        adj[t_to[i]].push(t_from[i]);
    }

    const visited = new Array(t_nodes + 1).fill(false);
    let removableEdges = 0;

    function dfs(node) {
        visited[node] = true;
        let subtreeSize = 1;

        for (const neighbor of adj[node]) {
            if (!visited[neighbor]) {
                const childSize = dfs(neighbor);
                if (childSize % 2 === 0) {
                    removableEdges++;
                } else {
                    subtreeSize += childSize;
                }
            }
        }

        return subtreeSize;
    }

    dfs(1); // Start DFS from node 1 (root)
    return removableEdges;
}