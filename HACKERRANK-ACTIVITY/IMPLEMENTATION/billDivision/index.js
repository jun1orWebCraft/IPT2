function bonAppetit(bill, k, b) {
    // Calculate Anna's actual share (excluding the item she didn't eat)
    let total = 0;
    for (let i = 0; i < bill.length; i++) {
        if (i !== k) {
            total += bill[i];
        }
    }
    let annaShare = total / 2;
    if (b === annaShare) {
        console.log("Bon Appetit");
    } else {
        console.log(b - annaShare);
    }
}