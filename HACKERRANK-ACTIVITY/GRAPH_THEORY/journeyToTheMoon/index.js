function journeyToMoon(n, astronaut) {
    const adj = Array.from({ length: n }, () => []);
    for (const [a, b] of astronaut) {
        adj[a].push(b);
        adj[b].push(a);
    }

    const visited = new Array(n).fill(false);
    const countrySizes = [];

    function dfs(node) {
        visited[node] = true;
        let size = 1;
        for (const neighbor of adj[node]) {
            if (!visited[neighbor]) {
                size += dfs(neighbor);
            }
        }
        return size;
    }

    for (let i = 0; i < n; i++) {
        if (!visited[i]) {
            countrySizes.push(dfs(i));
        }
    }

    let totalPairs = 0;
    let sum = 0;

    for (const size of countrySizes) {
        totalPairs += sum * size;
        sum += size;
    }

    return totalPairs;
}
