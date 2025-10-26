function maximumPerimeterTriangle(sticks) {
    sticks.sort((a, b) => a - b);

    for (let i = sticks.length - 3; i >= 0; i--) {
        const a = sticks[i];
        const b = sticks[i + 1];
        const c = sticks[i + 2];

        if (a + b > c) {
            return [a, b, c];
        }
    }

    return [-1];
}
