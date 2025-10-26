function toys(w) {
    w.sort((a, b) => a - b);
    let containers = 0;
    let i = 0;
    while (i < w.length) {
        let minWeight = w[i];
        containers++;
        // Pack all toys that fit in the current container
        while (i < w.length && w[i] <= minWeight + 4) {
            i++;
        }
    }
    return containers;
}