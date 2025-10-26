I number each customer based on their position in line. Customer 1 is first, Customer 2 is second, and so on.

Each customer gives two numbers:

Order time (when they placed the order)

Prep time (how long it takes to prepare)

I calculate the delivery time for each customer:

deliveryTime = orderTime + prepTime

Then I sort all customers by their delivery time. If two customers have the same delivery time, I serve the one with the lower customer number first.

Finally, I return the list of customer numbers in the order they get served.