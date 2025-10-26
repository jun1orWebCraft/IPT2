function pangrams(s) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    s = s.toLowerCase();
    for (let char of alphabet) {
        if (!s.includes(char)) {
            return "not pangram";
        }
    }
    return "pangram";
}
