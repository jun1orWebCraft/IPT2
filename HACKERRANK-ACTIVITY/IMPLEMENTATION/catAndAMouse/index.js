function catAndMouse(x, y, z) {
    const distA = Math.abs(x - z);
    const distB = Math.abs(y - z);
    if (distA < distB) {
        return "Cat A";
    } else if (distB < distA) {
        return "Cat B";
    } else {
        return "Mouse C";
    }
}
