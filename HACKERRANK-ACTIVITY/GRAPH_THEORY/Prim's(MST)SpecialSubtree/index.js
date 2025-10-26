function prims(n, edges, start) {
    const adj = Array.from({ length: n + 1 }, () => []);
    for (const [u, v, w] of edges) {
        adj[u].push([v, w]);
        adj[v].push([u, w]);
    }

    const visited = new Array(n + 1).fill(false);
    const minHeap = [[0, start]]; // [weight, node]
    let totalWeight = 0;

    while (minHeap.length) {
        minHeap.sort((a, b) => a[0] - b[0]); // simulate priority queue
        const [weight, node] = minHeap.shift();
        if (visited[node]) continue;
        visited[node] = true;
        totalWeight += weight;

        for (const [neighbor, w] of adj[node]) {
            if (!visited[neighbor]) {
                minHeap.push([w, neighbor]);
            }
        }
    }

    return totalWeight;
}
