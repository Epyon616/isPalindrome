# Is Palindrome

This piece of work was born from a pair programming exercise I undertook.

The idea being that you write a script that could check various inputs and return true if the input is a palindrome and false if it is not.

## To try this code out:
1. clone this repository
2. `cd` into the isPalindrome directory
3. run `node` in your command line
4. require the code `const isPalindrome = require('./isPalindrome');`
5. try it out `isPalindrome('racecar');`

## To run the tests
1. Assuming you are still within the isPalindrome directory run `npm install`
2. run `npm test`

**Note**: At present this code does not handle date objects, as we know some dates can be palindromes when formatted correctly however I feel like if you're passing a date object into the method it should probably throw an error, but I need to think on this a bit more.

**TODO**: handle throwing an exception if passed an array or object

