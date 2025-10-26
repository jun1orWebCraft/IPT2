function roadsAndLibraries(n, c_lib, c_road, cities) {
    if (c_lib <= c_road) {
        // Cheaper to build a library in every city
        return n * c_lib;
    }

    const adj = Array.from({ length: n + 1 }, () => []);
    for (const [u, v] of cities) {
        adj[u].push(v);
        adj[v].push(u);
    }

    const visited = new Array(n + 1).fill(false);
    let totalCost = 0;

    function dfs(city) {
        visited[city] = true;
        let size = 1;
        for (const neighbor of adj[city]) {
            if (!visited[neighbor]) {
                size += dfs(neighbor);
            }
        }
        return size;
    }

    for (let i = 1; i <= n; i++) {
        if (!visited[i]) {
            const regionSize = dfs(i);
            totalCost += c_lib + (regionSize - 1) * c_road;
        }
    }

    return totalCost;
}
