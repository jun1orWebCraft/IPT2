function permutationEquation(p) {
    let result = [];
    for (let i = 1; i <= p.length; i++) {
        let firstIndex = p.indexOf(i) + 1;
        let secondIndex = p.indexOf(firstIndex) + 1;
        result.push(secondIndex);
    }
    return result;
}

