**Leap Year Challenge Exercise**

**💪This is a Difficult Challenge 💪**

Write a program that works out whether if a given year is a leap year. A normal year has 365 days, leap years have 366, with an extra day in February. The reason why we have leap years is really fascinating, [this video](https://www.youtube.com/watch?v=xX96xng7sAE) goes into more detail.

This is how to work out whether if a particular year is a leap year:

_A year is a leap year if it is evenly divisible by_ **_4_** _;_

**_except_** _if that year is also evenly divisible by_ **_100_**_;_

**_unless_** _that year is also evenly divisible by_ **_400_**_._

e.g. Is the year 2000 a leap year?:

2000 ÷ 4 = 500 (Leap)

2000 ÷ 100 = 20 (Not Leap)

2000 ÷ 400 = 5 (Leap!)

So the year 2000 is a leap year.

But the year 2100 is not a leap year because:

2100 ÷ 4 = 525 (Leap)

2100 ÷ 100 = 21 (Not Leap)

2100 ÷ 400 = 5.25 (Not Leap)

**Warning** your output should match the Example Output format exactly, even the positions of the commas and full stops.

**Example Input 1**

1. 2400

**Example Output 1**

1. Leap year.

**Example Input 2**

1. 1989

**Example Output 2**

1. Not leap year.

**Hint**

1. Remember that the modulo (%) operator gives you the remainder of a division. We covered this in [this lesson](https://www.udemy.com/course/the-complete-web-development-bootcamp/learn/lecture/12371848).
2. Try to visualise the rules by creating a flow chart on [www.draw.io](http://www.draw.io/).
3. If you really get stuck, you can see [the flow chart I created](https://bit.ly/36BjS2D).
4. Try to run your code in [this Repl.it playground](https://repl.it/@appbrewery/Leap-year-challenge) and check it against the [known leap years](https://www.mathsisfun.com/leap-years.html).