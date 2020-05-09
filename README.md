# Coding Challenges
Different algorithms and data structure challenges from Codility, interviewcake
I usually create a PR for each solution I add to the repo. Check the [closed PRs](https://github.com/VeronicaM/coding-challenges/pulls?q=is%3Apr+is%3Aclosed) sections for more details on my implementation process and what I learnt/discovered through each exercise.

## InterviewCake

### Arrays
- [Merge meeting intervals](https://github.com/VeronicaM/coding-challenges/blob/master/interviewcake/arrays/merging-meeting-times.js)
- [Reverse string in place](https://github.com/VeronicaM/coding-challenges/blob/master/interviewcake/arrays/revert-string-in-place.js)
- [Reverse words in place in an array of chars](https://github.com/VeronicaM/coding-challenges/pull/1)
- [Merge sorted Arrays](https://github.com/VeronicaM/coding-challenges/blob/master/interviewcake/arrays/merge-sorted-arrays.js) 
- [Merge multiple sorted arrays](https://github.com/VeronicaM/coding-challenges/blob/master/interviewcake/arrays/merge-multiple-sorted-arrays.js)
- [First-come-first-served-checker](https://github.com/VeronicaM/coding-challenges/blob/master/interviewcake/arrays/first-come-first-served-checker.js) - associated [PR](https://github.com/VeronicaM/coding-challenges/pull/4)

### Codility

Solutions comprised only of link to report on codility to respect Codility's copyright policy. 

Lesson 1
- [binaryGap](https://github.com/VeronicaM/coding-challenges/blob/master/codility/lesson1/solution.txt)

Lesson 2 
- cyclic-rotation -[PR](https://github.com/VeronicaM/coding-challenges/pull/5) for solution

### Other

**Recursion**
- [flatten array of unkown nesting level](https://github.com/VeronicaM/coding-challenges/blob/master/interviews/recursion/flatten/flatten-nested-array.js) - associated [PR](https://github.com/VeronicaM/coding-challenges/pull/6)
- [reverse string](https://github.com/VeronicaM/coding-challenges/blob/master/interviews/recursion/reverse-string/reverse-string.js) - associated [PR](https://github.com/VeronicaM/coding-challenges/pull/7)
- [count-vowels](https://github.com/VeronicaM/coding-challenges/blob/master/interviews/recursion/count-vowel/count-vowels.js) - associated [PR](https://github.com/VeronicaM/coding-challenges/pull/8)
- [Find index of first occurrence of number](https://github.com/VeronicaM/coding-challenges/blob/master/interviews/recursion/first-occurrence-of-number/first-occurrence-of-number.js) - associated [PR](https://github.com/VeronicaM/coding-challenges/pull/9)
- [Fibonacci with memoized values](https://github.com/VeronicaM/coding-challenges/blob/master/interviews/recursion/fibonacci/fibonacci.js) - associated [PR](https://github.com/VeronicaM/coding-challenges/pull/12)
- [Greatest common divisor](https://github.com/VeronicaM/coding-challenges/blob/master/interviews/recursion/greatest-common-divisor/greatest-common-divisor.js) - associated [PR](https://github.com/VeronicaM/coding-challenges/pull/13)

### Pramp
  #### Interview 1
- [Toeplitz Matrix](https://github.com/VeronicaM/coding-challenges/blob/master/interviews/pramp/toeplitz-matrix/toeplitz-matrix.js) - associated [PR](https://github.com/VeronicaM/coding-challenges/pull/10)
- [Drone Flight Planner](https://github.com/VeronicaM/coding-challenges/blob/master/interviews/pramp/drone-flight-planner/drone-flight-planner.js) - associated [PR](https://github.com/VeronicaM/coding-challenges/pull/11)

# Notes

## Big O notation

Big O notation is used to estimate how much runtime and space certain algorithms use relative to the input

A O(1) space complexity means only a single value is stored in memory throughout the algorithm's lifecycle
A O(n) space complexity means n values are stored in memory throughout the algorithm's lifecycle

A O(n^2) runtime complexity means the runtime grows on the order of the square of the size of the input. This happens when you loop twice within an array for example

```
function printAllPossibleOrderedPairs(items) {
    items.forEach(firstItem => {
        items.forEach(secondItem => {
        console.log(firstItem, secondItem);
        });
    });
}
```
An algorithm can have a worse case runtime complexity of O(n) and a best case of O(1) depending on how the data is structured. For example finding the max value in an already sorted array is a lot faster than having to find it in an unsorted array. 

Similarly, you can also make statements about "average case" space and runtime complexity. 

Generally, time and space have an inversely proportional relationship with each other; if space increases then execution time decreases, and if execution time increases then space decreases.

### Logarithms runtimes
 Logarithms in computer science refer usually to base 2 logarithms and help us respond to two questions:
 - how many times do we have to add 2 to get to n 
 - how many times do we have to divide n by 2 to get to 1

 Can be found in:

- binary search: O(log(n))
- merge sort: O(nlog(n)) best worse case runtime
- finding the height (number of levels) of a binary tree: O(log(n+1))
  
n is the number of elements
  
## Data Structures
  ### Arrays
  Can be:
   - Fixed size
   - Dynamic
  
 **Pros 👍**

    - Fast lookups: O(1) to get element at given index
    - Cache friendly: elements are stored next to each other in memory

**Cons 👎** 

    - Slow worst-case appends: O(n^2) as the array expands whole blocks of elements might require to be moved around
    - Costly inserts and deletes: O(n^2) because of elements being next to each other, they all need to be moved on insertion and deletions

    This cost is nevertheless amortized thanks to the fast lookup

### Linked Lists
### Hash Tables
### Queue
### Stack
### Tree
### Binary Search Tree
### Trie
### Heap
### Priority Queue
### Bloom Filter
### LRU Cache

## Algorithms 

### Greedy 

Consists in solving a problem by choosing a local optimal that will lead to an optimal global solution.

Can be applied in problems like:

- change register: Calculating the change to give to someone using as few coins as possible : take the highest-value coin you could. A quarter, another quarter, then a dime, a nickel, and finally two pennies

- Trying to fit as many overlapping meetings as possible in a conference room. At each step, schedule the meeting that ends earliest.

- Looking for a minimum spanning tree in a graph. At each step, greedily pick the cheapest edge that reaches a new vertex.

Can give bad results when trying to:
- fill a duffel bag with cakes of different weights and values
- find the cheapest route visiting a set of cities, visiting the cheapest city doesn't amount to the cheapest intinerary overall

## Other

### Triangular series

It's a series of numbers where each number could be the row of an equilateral triangle.

Properties
1. Pairs of numbers on each side will always add up to the same value.
2. That value will always be 1 more than the series’ n.

If you know the sum of a triangular series, you can find n by solving a quadratic equation. 

![Quadratic equation](https://user-images.githubusercontent.com/2241065/80916667-d484b600-8d62-11ea-9aa9-f7067a254767.png) 

If you know n, you can easily find the sum with the series sum formula above

# Resources

## Theory and exercise practice platforms
[Interview Cake](https://www.interviewcake.com/) - Tutorials and exercise practice with solutions

[Codility](https://app.codility.com/) - Tutorials and exercise practice without solutions (tests your solution for edge cases and runtime and space performance)

[GeeksForGeeks](https://www.geeksforgeeks.org/) - Interview Prep exercises and solutions

[Educative.io](https://www.educative.io/) - Algorithms, Design Systems and Programming Interview Tutorials
   - [Big-O Notation For Coding Interviews and Beyond](https://www.educative.io/courses/big-o-notation-for-interviews-and-beyond) 
   - [Mastering Data Structures and Sorting Algorithms in JavaScript](https://www.educative.io/courses/mastering-data-structures-and-sorting-algorithms-in-javascript)
   - [Recursion for Coding Interviews in JavaScript](https://www.educative.io/courses/recursion-for-coding-interviews-in-javascript)

[Hackerrank](https://www.hackerrank.com/dashboard) - Practice, Certificates, Competitions

[LeetCode](https://leetcode.com/) - Practice, Certificates, Competitions

## Video Tutorials and MOOCs

### Frontendmasters
[Introduction to Data Structures for Interviews](https://frontendmasters.com/courses/data-structures-interviews/)

[A Practical Guide to Algorithms with JavaScript](https://frontendmasters.com/courses/practical-algorithms/)

## Live practice
[Pramp](https://blog.pramp.com/) - Live interview practice with pears

## Articles
- [How to approach solving algorithms](https://www.freecodecamp.org/news/how-to-think-like-a-programmer-lessons-in-problem-solving-d1d8bf1de7d2/) 
Details these problem solving framework:
    1. Understand
    2. Plan
    3. Divide
    4. Stuck ? Debug, Research 
    5. Practice 
- [Algorithms and data structures study plan](https://dev.to/rmorabia/the-self-taught-engineer-s-algorithm-study-plan-472a)

## Youtubers to follow
- [WilliamFiset](https://www.youtube.com/channel/UCD8yeTczadqdARzQUp29PJw)

# Words of Encouragement

" The first requisite for success is the ability to apply your physical and mental energies to one problem incessantly without growing weary. " Thomas A. Edison

" The secret of success is constancy to purpose. "
Benjamin Disraeli

" Most of the shadows of life are caused by standing in our own sunshine. "
Ralph Waldo Emerson

" When you doubt your power, you give power to your doubt. "
Honore de Balzac

# How to use this repo

## Requirements

- NodeJS: >=10
- Yarn: v1.22.0

## Run
To run any of the javascript solution exercises:
1. Clone this repo
2. Open a terminal command and run `yarn` in the root folder
3. `Cd` into the directory where the file you want to run is and run `node file_name.js`. This will run the associated tests for that file. 
   
Test data can be found in the testData/index.js folder for each exercise category subfolder

## How to contribute

- If you'd like to make suggestions or ask questions around some of the solutions, please feel free to **open an Issue**. I'll reply to all of them. 

- **Star** the repo to receive notifications when I add new solutions, notes and PRs to the repo. 
- **Share** this repo in your network if you think someone might find it useful. 
