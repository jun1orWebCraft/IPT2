function strangeCounter(t) {
    let time = 1;
    let value = 3;
    while (t > time) {
        t -= time;
        time *= 2;
        value *= 2;
    }
    return value - t + 1;
}