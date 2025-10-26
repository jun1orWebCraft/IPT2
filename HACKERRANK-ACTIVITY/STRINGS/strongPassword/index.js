function minimumNumber(n, password) {
    let count = 0;
    const hasLower = /[a-z]/.test(password);
    const hasUpper = /[A-Z]/.test(password);
    const hasDigit = /[0-9]/.test(password);
    const hasSpecial = /[!@#$%^&*()\-+]/.test(password);
    if (!hasLower) count++;
    if (!hasUpper) count++;
    if (!hasDigit) count++;
    if (!hasSpecial) count++;
    return Math.max(count, 6 - n);
}