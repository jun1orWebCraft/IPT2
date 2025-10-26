function beautifulBinaryString(b) {
   let count = 0;
   for(let i = 0; i <= b.length - 3;){
    if(b.substring(i, i + 3) === "010"){
        count++;
        i += 3;
    }else {
        i++;
    }
    
   }
   return count;
}