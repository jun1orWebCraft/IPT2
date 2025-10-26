function getCost(gNodes, gFrom, gTo, gWeight) {
    const adj = Array.from({ length: gNodes + 1 }, () => []);
    for (let i = 0; i < gFrom.length; i++) {
        adj[gFrom[i]].push([gTo[i], gWeight[i]]);
        adj[gTo[i]].push([gFrom[i], gWeight[i]]);
    }

    const dist = new Array(gNodes + 1).fill(Infinity);
    const visited = new Array(gNodes + 1).fill(false);
    dist[1] = 0;

    const heap = new MinHeap();
    heap.push([0, 1]); // [cost, node]

    while (!heap.isEmpty()) {
        const [cost, node] = heap.pop();
        if (visited[node]) continue;
        visited[node] = true;

        for (const [neighbor, weight] of adj[node]) {
            const newCost = Math.max(dist[node], weight);
            if (newCost < dist[neighbor]) {
                dist[neighbor] = newCost;
                heap.push([newCost, neighbor]);
            }
        }
    }

    const result = dist[gNodes];
    console.log(result === Infinity ? "NO PATH EXISTS" : result);
}

// Simple MinHeap implementation for [cost, node] arrays
class MinHeap {
    constructor() {
        this.data = [];
    }
    push(item) {
        this.data.push(item);
        this._bubbleUp();
    }
    pop() {
        if (this.data.length === 1) return this.data.pop();
        const top = this.data[0];
        this.data[0] = this.data.pop();
        this._sinkDown(0);
        return top;
    }
    isEmpty() {
        return this.data.length === 0;
    }
    _bubbleUp() {
        let idx = this.data.length - 1;
        const element = this.data[idx];
        while (idx > 0) {
            const parentIdx = Math.floor((idx - 1) / 2);
            const parent = this.data[parentIdx];
            if (element[0] >= parent[0]) break;
            this.data[parentIdx] = element;
            this.data[idx] = parent;
            idx = parentIdx;
        }
    }
    _sinkDown(idx) {
        const length = this.data.length;
        const element = this.data[idx];
        while (true) {
            let leftIdx = 2 * idx + 1;
            let rightIdx = 2 * idx + 2;
            let swapIdx = null;

            if (leftIdx < length && this.data[leftIdx][0] < element[0]) {
                swapIdx = leftIdx;
            }
            if (rightIdx < length &&
                this.data[rightIdx][0] < (swapIdx === null ? element[0] : this.data[leftIdx][0])) {
                swapIdx = rightIdx;
            }

            if (swapIdx === null) break;
            this.data[idx] = this.data[swapIdx];
            this.data[swapIdx] = element;
            idx = swapIdx;
        }
    }
}
