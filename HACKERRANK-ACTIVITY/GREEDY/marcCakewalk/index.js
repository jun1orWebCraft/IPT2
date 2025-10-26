function marcsCakewalk(calorie) {
    let sortedCalories = calorie.sort((a, b) => b - a);
    let totalMiles = 0;
    for (let i = 0; i < sortedCalories.length; i++) {
        totalMiles += sortedCalories[i] * Math.pow(2, i);
    }
    return totalMiles;

}