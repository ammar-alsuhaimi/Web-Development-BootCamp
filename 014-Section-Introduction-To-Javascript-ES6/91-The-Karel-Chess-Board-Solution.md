**The Karel Chess Board Solution**

This is one of the solutions for the Karel Check Board Challenge, there are many ways of solving this problem, as long as you managed to achieve the pattern specified then you have succeeded!

1. function main(){
2.    beepersRight();
3.    goUpTurnLeft();
4.    beepersLeft();
5.    goUpTurnRight();
6.       beepersRight();
7.    goUpTurnLeft();
8.    beepersLeft();
9.    goUpTurnRight();
10.       beepersRight();
11. }

13. function goUpTurnRight() {
14.    turnRight();
15.    move();
16.    turnRight();
17. }

19. function goUpTurnLeft() {
20.    turnLeft();
21.    move();
22.    turnLeft();
23. }

25. function beepersRight() {
26.    putBeeper();
27.    move();
28.    move();
29.    putBeeper();
30.    move();
31.    move();
32.    putBeeper();  
33. }

35. function beepersLeft() {
36.    move();
37.    putBeeper();
38.    move();
39.    move();
40.    putBeeper();
41.    move();
42. }