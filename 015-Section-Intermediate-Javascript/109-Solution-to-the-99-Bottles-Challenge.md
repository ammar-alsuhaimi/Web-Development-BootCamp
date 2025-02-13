**Solution to the 99 Bottles Challenge**

This is one of the ways you could have solved the challenge using a while loop. There are many others, as long as you achieve the desired outcome -printing the lyrics to the 99 bottles of beer song- then you are successful! If you've come up with a fancy solution or something different, be sure to share it in the Q&A section for other students to learn from!

1. var numberOfBottles = 99
2. while (numberOfBottles >= 0) {
3. var bottleWord = "bottle";
4. if (numberOfBottles === 1) {
5. bottleWord = "bottles";
6. }
7. console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
8. console.log(numberOfBottles + " " + bottleWord + " of beer,");
9. console.log("Take one down, pass it around,");
10. numberOfBottles--;
11. console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
12. }

If you want to challenge yourself further, try changing the code to make the english more grammatically correct. 
So the final output should say "1 **bottle** of beer on the wall" when numberOfBottles is equal to 1 rather than "1 **bottles** of beer on the wall" and when numberOfBottles is equal to 0, you can make the output "**No more** bottles of beer on the wall" instead of **0** bottles of beer on the wall".