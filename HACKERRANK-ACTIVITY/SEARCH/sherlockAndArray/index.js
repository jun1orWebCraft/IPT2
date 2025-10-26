function balancedSums(arr) {
    let totalSum = arr.reduce((sum, num) => sum + num, 0);
    let leftSum = 0;

    for (let i = 0; i < arr.length; i++) {
        let rightSum = totalSum - leftSum - arr[i];
        if (leftSum === rightSum) {
            return 'YES';
        }
        leftSum += arr[i];
    }

    return 'NO';
}
