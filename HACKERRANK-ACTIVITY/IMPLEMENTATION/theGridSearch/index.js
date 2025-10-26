function gridSearch(G, P) {

    const R = G.length;

    const r = P.length;

    const c = P[0].length;



    for (let i = 0; i <= R - r; i++) {

        for (let j = 0; j <= G[i].length - c; j++) {

            let match = true;



            for (let k = 0; k < r; k++) {

                const gridSlice = G[i + k].substring(j, j + c);

                if (gridSlice !== P[k]) {

                    match = false;

                    break;

                }

            }



            if (match) return "YES";

        }

    }



    return "NO";

}