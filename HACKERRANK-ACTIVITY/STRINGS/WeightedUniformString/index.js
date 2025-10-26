function weightedUniformStrings(s, queries) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";

    // extract all letter groups
    let allGroupsArr = s.match(/([a-z])\1*/g);
    // console.log(allGroupsArr);

    // itterate throught letter group and create an array with ALL weights
    let allWeightsArr = [];
    allGroupsArr.forEach(el=> {
        let weight = alphabet.indexOf(el[0])+1;
        // console.log("weight: ", weight);

        for(var i = 0; i < el.length; i++){
            allWeightsArr.push(weight * (i+1))
        }
    });

    // map throught the queries and see if they exist in allWeightsArr return YES if found or NO if not found
     let final = queries.map(el=> {
          return allWeightsArr.indexOf(el) > -1 ? 'Yes' : 'No'
     });
     // console.log("final: ", final);
     return final;

    // ! end of the function

}