function kangaroo(x1, v1, x2, v2) {
    if (v1 === v2) {
        return x1 === x2 ? "YES" : "NO";
    }

    const jumps = (x2 - x1) / (v1 - v2);
    return jumps > 0 && Number.isInteger(jumps) ? "YES" : "NO";
}
