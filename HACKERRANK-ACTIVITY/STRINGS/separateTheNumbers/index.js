function separateNumbers(s) {
    for (let length = 1; length <= Math.floor(s.length / 2); length++) {
        let firstNum = s.slice(0, length);
        if (firstNum.startsWith("0")) continue;

        let num = BigInt(firstNum);
        let sequence = firstNum;

        while (sequence.length < s.length) {
            num++;
            sequence += num.toString();
        }

        if (sequence === s) {
            console.log(`YES ${firstNum}`);
            return;
        }
    }

    console.log("NO");
}
