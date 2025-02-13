

**1\. flex-direction**

The flex-direction property specifies the direction in which flex items are placed within the flex container. It defines the main axis along which the items are laid out. The possible values are:

- row (default): Items are placed from left to right.
- row-reverse: Items are placed from right to left.
- column: Items are placed from top to bottom.
- column-reverse: Items are placed from bottom to top.

For example, setting flex-direction: column; will stack the flex items vertically.

**2\. flex-wrap**

The flex-wrap property determines whether flex items should wrap onto multiple lines within the flex container. The possible values are:

- nowrap (default): All flex items are placed on a single line.
- wrap: Flex items wrap onto multiple lines from top to bottom.
- wrap-reverse: Flex items wrap onto multiple lines from bottom to top.

Using flex-wrap: wrap; allows flex items to move to the next line when there isn't enough space on the current line.

**3\. justify-content**

The justify-content property aligns flex items along the main axis (defined by flex-direction). It controls the distribution of space between and around flex items. The possible values are:

- flex-start (default): Items are aligned at the start of the main axis.
- flex-end: Items are aligned at the end of the main axis.
- center: Items are centered along the main axis.
- space-between: Items are evenly distributed with the first item at the start and the last item at the end.
- space-around: Items are evenly distributed with equal space around them.
- space-evenly: Items are evenly distributed with equal space between them.

For instance, setting justify-content: center; centers the flex items horizontally within the container.

**4\. align-items**

The align-items property aligns flex items along the cross axis (perpendicular to the main axis). It determines how flex items are laid out within a flex container when there is extra space along the cross axis. The possible values are:

- stretch (default): Items are stretched to fill the container.
- flex-start: Items are aligned at the start of the cross axis.
- flex-end: Items are aligned at the end of the cross axis.
- center: Items are centered along the cross axis.
- baseline: Items are aligned along their baselines.

For example, setting align-items: center; centers the flex items vertically within the container.

**5\. align-content**

The align-content property aligns flex lines within a flex container when there is extra space along the cross axis. It is effective only when the flex container has multiple lines (i.e., when flex-wrap is set to wrap or wrap-reverse). The possible values are:

- stretch (default): Flex lines are stretched to fill the container.
- flex-start: Flex lines are packed at the start of the cross axis.
- flex-end: Flex lines are packed at the end of the cross axis.
- center: Flex lines are centered along the cross axis.
- space-between: Flex lines are evenly distributed with the first line at the start and the last line at the end.
- space-around: Flex lines are evenly distributed with equal space around them.
- space-evenly: Flex lines are evenly distributed with equal space between them.

For instance, setting align-content: space-between; distributes the flex lines evenly with space between them.

Understanding and appropriately applying these properties allows for precise control over the layout and alignment of elements within a flex container, enabling the creation of responsive and flexible web designs.

<https://css-tricks.com/snippets/css/a-guide-to-flexbox/>

<https://appbrewery.github.io/flex-layout/>

<https://appbrewery.github.io/flexboxfroggy/#ar>