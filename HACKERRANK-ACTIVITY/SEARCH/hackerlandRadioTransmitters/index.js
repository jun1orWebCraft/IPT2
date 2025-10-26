function hackerlandRadioTransmitters(x, k) {
    x.sort((a, b) => a - b); // Sort house locations
    let i = 0;
    let transmitters = 0;

    while (i < x.length) {
        transmitters++;

        // Step 1: Find the furthest house within range k from x[i]
        let loc = x[i] + k;
        while (i < x.length && x[i] <= loc) {
            i++;
        }

        // Step 2: Place transmitter at the last house within range
        let transmitterLoc = x[i - 1];
        loc = transmitterLoc + k;

        // Step 3: Skip all houses covered by this transmitter
        while (i < x.length && x[i] <= loc) {
            i++;
        }
    }

    return transmitters;
}
