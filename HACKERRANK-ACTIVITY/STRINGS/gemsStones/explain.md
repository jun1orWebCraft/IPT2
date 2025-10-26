I first grabbed all unique minerals from the first rock using Set.

Then I looped through each mineral and checked if it exists in every other rock.

If a mineral is missing in any rock, I subtract it from the count.

Finally, I return the total number of minerals that are common across all rocks—aka the gemstones.