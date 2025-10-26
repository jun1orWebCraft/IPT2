function jimOrders(orders) {
    // Add customer index to each order
    const withIndex = orders.map((order, i) => {
        return { customer: i + 1, time: order[0] + order[1] };
    });

    // Sort by delivery time, then by customer number
    withIndex.sort((a, b) => {
        if (a.time === b.time) {
            return a.customer - b.customer;
        }
        return a.time - b.time;
    });

    // Return sorted customer numbers
    return withIndex.map(order => order.customer);
}
