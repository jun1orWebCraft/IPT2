function cutTheSticks(arr) {
    const result = [];
    while (arr.length > 0) {
        result.push(arr.length);
        const min = Math.min(...arr);
        arr = arr.map(x => x - min).filter(x => x > 0);
    }
    return result;
}
