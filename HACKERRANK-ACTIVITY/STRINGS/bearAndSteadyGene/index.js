function steadyGene(gene) {
    const n = gene.length;
    const target = n / 4;
    const count = { A: 0, C: 0, G: 0, T: 0 };

    for (const char of gene) {
        count[char]++;
    }

    if (Object.values(count).every(val => val === target)) {
        return 0;
    }

    let minLen = n;
    let left = 0;

    for (let right = 0; right < n; right++) {
        count[gene[right]]--;

        while (left <= right &&
            count['A'] <= target &&
            count['C'] <= target &&
            count['G'] <= target &&
            count['T'] <= target) {
            minLen = Math.min(minLen, right - left + 1);
            count[gene[left]]++;
            left++;
        }
    }

    return minLen;
}
