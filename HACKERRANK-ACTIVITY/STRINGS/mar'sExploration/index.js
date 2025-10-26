function marsExploration(s) {
    let count = 0;
    const message = "SOS";
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== message[i % 3]) {
            count++;
        }
    }
    return count;
}