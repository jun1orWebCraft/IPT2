'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));
    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Efficient xor pattern for all values (now handles very big numbers)
function getXor(x) {
    x = BigInt(x);
    let n = x % 8n;
    if (n === 0n || n === 1n) return x;
    if (n === 2n || n === 3n) return 2n;
    if (n === 4n || n === 5n) return x + 2n;
    return 0n;
}

function xorSequence(l, r) {
    return getXor(r) ^ getXor(l - 1n);
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const lr = readLine().split(' ');
        const l = BigInt(lr[0]);
        const r = BigInt(lr[1]);
        let result = xorSequence(l, r);
        ws.write(result.toString() + "\n");
    }

    ws.end();
}
