# Project Euler 038 - Pandigital Multiples

Take the number 192, and multiply it by each of 1, 2, and 3.

    192 x 1 = 192
    192 x 2 = 384
    192 x 3 = 576

By concatenating each product we get the 1 to 9 pandigital, 192384576.  We will call 192384576 the concatenated product of 192 and (1,2,3).

The same can be achieved by starting with 9 and multiplying by 1, 2, 3, 4, and 5, giving the pandigital, 918273645, which is the concatenated product of 9 and (1,2,3,4,5).

The aim is to find the largest 1 to k pandigital k-digit number that can be formed as the concatenated product of an integer with (1,2,...,n) where n>1.

Information at [Project Euler 038](https://projecteuler.net/problem=38)

## UX

**Getting Started**

Enter a whole number between 2 and 9 (e.g. 8) and click on the Submit Button.  You will see the number entered as well as the largest 1 to k pandigital k-digit number that can be formed as the concatenated product of an integer with (1,2,...,n) where n>1, unless you have made an invalid input.  Click on the Reset Button to clear the information or to start again.

**User Stories**

As a user, I expect to get an error message, if I do any of:

- Not enter anything in the input field
- Entering text other than a number
- Entering a number less than 2 or greater than 9
- Entering a number, but it is not an integer

As a user, I expect the function `pandigitalMultiples(8)` to return a number.

As a user, I expect the function `pandigitalMultiples(8)` to return 78156234.

As a user, I expect the function `pandigitalMultiples(9)` to return 932718654.

User Stories on function `pandigitalMultiples(k)` taken from [FreeCodeCamp - Coding Interview Prep - Project Euler 038](https://www.freecodecamp.org/learn/coding-interview-prep/project-euler/problem-38-pandigital-multiples)

**Information Architecture**

The function `pandigitalMultiples(k)` returns a number, where `k` is a number between 2 and 9.

## Features

Allows the user to enter the number of digits as well as getting the largest 1 to k pandigital k-digit number.  Performs checks on valid user input.  If the input is not valid, an error message is displayed.

## Technologies

Uses HTML5, CSS3, JavaScript, Bootstrap 5.2.0 and Google Fonts.

## Testing

Ensure all user stories have been met.

