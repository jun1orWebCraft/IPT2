First, I find out how far each cat is from the mouse by taking the absolute difference between their positions and the mouse’s position.

Then, I compare the distances:

If Cat A is closer, I return "Cat A" because it will reach the mouse first.
If Cat B is closer, I return "Cat B".
If both cats are the same distance away, I return "Mouse C" because they’ll arrive at the same time and the mouse will escape while they fight.