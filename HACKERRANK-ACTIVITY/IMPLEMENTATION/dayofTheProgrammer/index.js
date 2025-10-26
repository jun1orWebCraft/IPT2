function dayOfProgrammer(year) {
    // Special case for the transition year
    if (year === 1918) {
        return `26.09.${year}`;
    }
    // Julian calendar
    if (year >= 1700 && year <= 1917) {
        if (year % 4 === 0) {
            return `12.09.${year}`;
        } else {
            return `13.09.${year}`;
        }
    }
    // Gregorian calendar
    if (
        (year % 400 === 0) ||
        (year % 4 === 0 && year % 100 !== 0)
    ) {
        return `12.09.${year}`;
    } else {
        return `13.09.${year}`;
    }
}