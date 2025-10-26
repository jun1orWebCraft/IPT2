function luckBalance(k, contests) {
    let luck = 0;
    let important = [];

    for (let [l, t] of contests) {
        if (t === 0) {
            luck += l; 
        } else {
            important.push(l); 
        }
    }


    important.sort((a, b) => b - a);

 
    for (let i = 0; i < important.length; i++) {
        if (i < k) {
            luck += important[i];
        } else {
            luck -= important[i];
        }
    }

    return luck;
}
