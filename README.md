# piFromRand
### Description ###
This is my implementation of a solution to the problem of estimating Pi from an evenly distributed set of random numbers in the range [0,1).

That is to say, this is script that estimates Pi from multiple outputs from python's random number generator.

This is not my solution to the problem. This solution is posed by Joma Tech (https://www.youtube.com/watch?v=pvimAM_SLic),
but I wrote this program without seeing or referencing his implementation. While this is my implementation, it is not an original solution.

### How to Run ###

First, ensure Node is installed on your system. This is programmed using Node version 15.2.1

From within the project in command line, executing main.js with the `node` command will print out a demo of Pi approximations using this method.

The actual function that calculates Pi is inside the calcPi.js file. Importing this file
with a `require` statement will allow the programmer to access and use the method.
The method approx_pi() takes two parameters. The first parameter is num_points, which
represents the number of points generated to approximate pi. The second parameter is
an optional parameter called func that allows the programmer to pass in their
preferred random number generator. This generator must return a random value in the
range [0, 1) for expected behavior to occur. The more evenly distributed the results
from the random number generator, the more accurate the approximation will be.
The default generator is the random() function from Node's Math module.


### Explanation of Solution ###

This program uses the random number generator to populate a set of cartesian coordinates in the
domain [0,1) and range [0,1). This will result in a roughly evenly distributed set of points
throughout the square. If we then impose the upper-left quadrant of a unit circle over that
section of the cartesian plane, then we can check if any given point falls within the circle.

A point can be said to fall within the circle if its distance from the origin is less than one.

i.e. sqrt(x^2 + y^2) < 1

If we compare the area of the unit circle to the area of the cartesian plane with domain (-1,1)
and range (1,1), the the ratio is:

(Pi * r^2) / (2*r)^2

Because the random points are evenly distributed, the ratio of points inside the unit circle
to the total number of points should be roughly equal to the ratio of the area of the
circle to the area of the square. Because r == 1, that leaves:

Pi / 4 ~ inside / total

Therefore,

Pi ~ 4 * (inside / total)

As a result, with a random set of numbers, we can approximate Pi. This approximation becomes
better as the number of random points increases.
