function activityNotifications(expenditure, d) {
    const freq = new Array(201).fill(0);
    let notifications = 0;

    for (let i = 0; i < d; i++) {
        freq[expenditure[i]]++;
    }

    function getMedian(freq, d) {
        let count = 0;
        if (d % 2 === 1) {
            const mid = Math.floor(d / 2) + 1;
            for (let i = 0; i < freq.length; i++) {
                count += freq[i];
                if (count >= mid) return i;
            }
        } else {
            const mid1 = Math.floor(d / 2);
            const mid2 = mid1 + 1;
            let m1 = -1, m2 = -1;
            for (let i = 0; i < freq.length; i++) {
                count += freq[i];
                if (count >= mid1 && m1 === -1) m1 = i;
                if (count >= mid2) {
                    m2 = i;
                    break;
                }
            }
            return (m1 + m2) / 2;
        }
    }

    for (let i = d; i < expenditure.length; i++) {
        const median = getMedian(freq, d);
        if (expenditure[i] >= 2 * median) notifications++;

        freq[expenditure[i - d]]--;
        freq[expenditure[i]]++;
    }

    return notifications;
}
