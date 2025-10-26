function alternate(s) {

    if(s.length === 1){
        return 0
    }

    let uniqueChar = [...new Set(Array.from(s))];
    // console.log("uniqueChar: ", uniqueChar);

    let sArr = Array.from(s);
    // console.log("sArr: ", sArr);

    // let validStrings = [];
   
    let longest = 0;

    for(var i = 0; i< uniqueChar.length; i++){
        let el1 = uniqueChar[i];
        // console.log(el1);

    for(var j = 0; j < uniqueChar.length; j++){

      let el2 = uniqueChar[j];
            // console.log(el2);
            let temp = sArr.filter(filteredEl=> {
                return filteredEl === el1 || filteredEl === el2
            }).join('');
            // console.log("temp: ", temp);
            if(temp.indexOf(el1+el1) === -1 && temp.indexOf(el2+el2) === -1){
                // console.log(temp);
               
                longest = Math.max(longest, temp.length);
            }
            // end of for loop j
        }
        // end of for Loop i
    }
    // // console.log(validStrings)
    // console.log(longest);
    return longest;
    // ! end of function
}