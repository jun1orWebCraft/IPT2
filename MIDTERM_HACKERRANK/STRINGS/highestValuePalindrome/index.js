function highestValuePalindrome(s, n, k) {
    let arr = s.split('');
    let changes = Array(n).fill(false);
    let l = 0, r = n - 1;
    let needed = 0;

    // First pass: make palindrome in minimal changes
    while (l < r) {
        if (arr[l] !== arr[r]) {
            let maxDigit = arr[l] > arr[r] ? arr[l] : arr[r];
            arr[l] = arr[r] = maxDigit;
            changes[l] = changes[r] = true;
            k--;
        }
        l++; r--;
    }

    if (k < 0) return "-1";

    // Second pass: maximize by making digits 9 using leftover changes
    l = 0; r = n - 1;
    while (l <= r) {
        // Middle digit (for odd length)
        if (l === r && k > 0 && arr[l] !== '9') {
            arr[l] = '9';
            k--;
        }
        // If not at the exact middle
        if (l < r) {
            if (arr[l] !== '9') {
                // If either position was already changed, we need only 1 extra change
                if (changes[l] || changes[r]) {
                    if (k > 0) {
                        arr[l] = arr[r] = '9';
                        k--;
                    }
                } else {
                    // Need 2 changes if neither was touched before
                    if (k >= 2) {
                        arr[l] = arr[r] = '9';
                        k -= 2;
                    }
                }
            }
        }
        l++; r--;
    }
    return arr.join('');
}
