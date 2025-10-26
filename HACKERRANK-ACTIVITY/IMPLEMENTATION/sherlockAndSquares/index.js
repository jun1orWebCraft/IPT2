function squares (a, b) {
    const lower = Math.ceil(Math.sqrt(a));
    const upper = Math.floor(Math.sqrt(b));
    const result=  upper - lower + 1;

    return result;
}
