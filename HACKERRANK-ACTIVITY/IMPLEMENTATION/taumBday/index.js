function taumBday(b, w, bc, wc, z) {
    b = BigInt(b);
    w = BigInt(w);
    bc = BigInt(bc);
    wc = BigInt(wc);
    z = BigInt(z);


    let effectiveBlack = bc < wc + z ? bc : wc + z;
    let effectiveWhite = wc < bc + z ? wc : bc + z;

    return String(b * effectiveBlack + w * effectiveWhite);
}