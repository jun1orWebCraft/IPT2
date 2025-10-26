function kruskals(gNodes, gFrom, gTo, gWeight) {
    const edges = [];
    for (let i = 0; i < gFrom.length; i++) {
        edges.push({
            u: Math.min(gFrom[i], gTo[i]),
            v: Math.max(gFrom[i], gTo[i]),
            w: gWeight[i],
            sum: gFrom[i] + gTo[i] + gWeight[i]
        });
    }

    // Sort by weight, then by u + v + w
    edges.sort((a, b) => {
        if (a.w !== b.w) return a.w - b.w;
        return a.sum - b.sum;
    });

    // Disjoint Set Union (DSU)
    const parent = Array.from({ length: gNodes + 1 }, (_, i) => i);

    function find(u) {
        if (parent[u] !== u) {
            parent[u] = find(parent[u]);
        }
        return parent[u];
    }

    function union(u, v) {
        const pu = find(u);
        const pv = find(v);
        if (pu !== pv) {
            parent[pu] = pv;
            return true;
        }
        return false;
    }

    let totalWeight = 0;
    for (const edge of edges) {
        if (union(edge.u, edge.v)) {
            totalWeight += edge.w;
        }
    }

    return totalWeight;
}


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const gNodesEdges = readLine().split(' ');

    const gNodes = parseInt(gNodesEdges[0], 10);
    const gEdges = parseInt(gNodesEdges[1], 10);

    let gFrom = [];
    let gTo = [];
    let gWeight = [];

    for (let i = 0; i < gEdges; i++) {
        const gFromToWeight = readLine().split(' ');

        gFrom.push(parseInt(gFromToWeight[0], 10));
        gTo.push(parseInt(gFromToWeight[1], 10));
        gWeight.push(parseInt(gFromToWeight[2], 10));
    }

    const res = kruskals(gNodes, gFrom, gTo, gWeight);

    ws.write(res.toString() + '\n');
    ws.end();
}
