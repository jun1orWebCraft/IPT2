function getTotalX(a, b) {
    // Helper function to find GCD
    function gcd(x, y) {
        while (y) {
            [x, y] = [y, x % y];
        }
        return x;
    }
    // Helper function to find LCM
    function lcm(x, y) {
        return (x * y) / gcd(x, y);
    }

    // LCM of all elements in a
    let l = a.reduce((acc, val) => lcm(acc, val));
    // GCD of all elements in b
    let g = b.reduce((acc, val) => gcd(acc, val));
    let count = 0;

    // Count multiples of l that divide g
    for (let i = l; i <= g; i += l) {
        if (g % i === 0) count++;
    }
    return count;
}