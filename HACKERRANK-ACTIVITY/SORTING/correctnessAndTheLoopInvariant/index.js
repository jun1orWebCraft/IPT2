function insertionSort(ar) {

    for (let i = 1; i < ar.length; i++) {
        let value = ar[i];
        let j = i - 1;

        while (j >= 0 && ar[j] > value) {
            ar[j + 1] = ar[j];
            j = j - 1;
        }

        ar[j + 1] = value;
    }

    console.log(ar.join(' '));
}

const input = require('fs').readFileSync(0, 'utf-8').split('\n');

const n = parseInt(input[0]);

const ar = input[1].split(' ').map(Number);

insertionSort(ar);
