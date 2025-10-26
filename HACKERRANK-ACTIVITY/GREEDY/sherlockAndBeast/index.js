function decentNumber(n) {
    let fives = n;
    while (fives % 3 !== 0) {
        fives -= 5;
    }
    if (fives < 0) {
        console.log('-1');
    } else {
        let result = '5'.repeat(fives) + '3'.repeat(n - fives);
        console.log(result);
    }
}