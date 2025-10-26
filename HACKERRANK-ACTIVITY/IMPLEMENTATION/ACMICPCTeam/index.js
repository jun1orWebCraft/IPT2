function acmTeam(topic) {
    let maxTopics = 0;   
    let teamCount = 0;   
    
    for (let i = 0; i < topic.length; i++) {
        for (let j = i + 1; j < topic.length; j++) {
    
            const combined = (BigInt("0b" + topic[i]) | BigInt("0b" + topic[j]));

            const knownTopics = combined.toString(2).split("1").length - 1;

            if (knownTopics > maxTopics) {
                maxTopics = knownTopics;
                teamCount = 1; 
            } else if (knownTopics === maxTopics) {
                teamCount++;
            }
        }
    }

    return [maxTopics, teamCount];
}