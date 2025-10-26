function appendAndDelete(s, t, k) {
    const n = s.length;
    const m = t.length;
    let i = 0;

    while (i < n && i < m && s[i] === t[i]) {
        i++;
    }

    const opsNeeded = (n - i) + (m - i);

    if (opsNeeded > k) {
        return "No";
    } else if ((k - opsNeeded) % 2 === 0 || k >= n + m) {
        return "Yes";
    } else {
        return "No";
    }
}
