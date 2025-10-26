function serviceLane(cases, width) {
    const maxSizeVehicle = [];

    for (let i = 0; i < cases.length; i++) {
        const [start, end] = cases[i];
        let minWidth = width[start];

        for (let j = start + 1; j <= end; j++) {
            if (width[j] < minWidth) {
                minWidth = width[j];
            }
        }

        maxSizeVehicle.push(minWidth);
    }

    return maxSizeVehicle;
}
