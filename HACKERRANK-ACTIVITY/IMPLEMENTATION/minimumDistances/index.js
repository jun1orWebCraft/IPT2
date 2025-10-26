function minimumDistances(a) {
    let minDistance = Infinity;

    for (let i = 0; i < a.length; i++) {
        for (let j = i + 1; j < a.length; j++) {
            if (a[i] === a[j]) {
                let distance = j - i;
                if (distance < minDistance) {
                    minDistance = distance;
                }
            }
        }
    }

    return minDistance === Infinity ? -1 : minDistance;
}
