function caesarCipher(s, k) {
    let caesar = '';
    k = k % 26; 

    for (let i = 0; i < s.length; i++) {
        const c = s[i];
        const code = c.charCodeAt(0);

        if (code >= 65 && code <= 90) {
           
            caesar += String.fromCharCode(((code - 65 + k) % 26) + 65);
        } else if (code >= 97 && code <= 122) {
           
            caesar += String.fromCharCode(((code - 97 + k) % 26) + 97);
        } else {
           
            caesar += c;
        }
    }

    return caesar;
}
