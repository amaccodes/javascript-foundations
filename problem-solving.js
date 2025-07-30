/*

 !!!!!!!! Understand the problem
The first step to solving a problem is understanding exactly what the problem is. If you don’t understand the problem, you won’t know when you’ve successfully solved it and may waste a lot of time on a wrong solution.

To gain clarity and understanding of the problem, write it down on paper, reword it in plain English until it makes sense to you, and draw diagrams if that helps. When you can explain the problem to someone else in plain English, you understand it.

 !!!!!!!! Plan
Now that you know what you’re aiming to solve, don’t jump into coding just yet. It’s time to plan out how you’re going to solve it first. Some of the questions you should answer at this stage of the process:

Does your program have a user interface? What will it look like? What functionality will the interface have? Sketch this out on paper.
What inputs will your program have? Will the user enter data or will you get input from somewhere else?
What’s the desired output?
Given your inputs, what are the steps necessary to return the desired output?
The last question is where you will write out an algorithm to solve the problem. You can think of an algorithm as a recipe for solving a particular problem. It defines the steps that need to be taken by the computer to solve a problem in pseudocode.

 !!!!!!!! Pseudocode
Pseudocode is writing out the logic for your program in natural language instead of code. It helps you slow down and think through the steps your program will have to go through to solve the problem.

Here’s an example of what the pseudocode for a program that prints all numbers up to an inputted number might look like:

When the user inputs a number
Initialize a counter variable and set its value to zero
While counter is smaller than user inputted number increment the counter by one
Print the value of the counter variable
This is a basic program to demonstrate how pseudocode looks. There will be more examples of pseudocode included in the assignments.

 !!!!!!!! Divide and conquer
From your planning, you should have identified some subproblems of the big problem you’re solving. Each of the steps in the algorithm we wrote out in the last section are subproblems. Pick the smallest or simplest one and start there with coding.

It’s important to remember that you might not know all the steps that you might need up front, so your algorithm may be incomplete -— this is fine. Getting started with and solving one of the subproblems you have identified in the planning stage often reveals the next subproblem you can work on. Or, if you already know the next subproblem, it’s often simpler with the first subproblem solved.

Many beginners try to solve the big problem in one go. Don’t do this. If the problem is sufficiently complex, you’ll get yourself tied in knots and make life a lot harder for yourself. Decomposing problems into smaller and easier to solve subproblems is a much better approach. Decomposition is the main way to deal with complexity, making problems easier and more approachable to solve and understand.

In short, break the big problem down and solve each of the smaller problems until you’ve solved the big problem.

*/


// !!!! EXERCISE: THE FIZZ BUZZ PROBLEM
// Write a program that takes a user’s input and prints the numbers from one to the number 
// the user entered. However, for multiples of three print Fizz instead of the number and for 
// the multiples of five print Buzz. For numbers which are multiples of both three and five print FizzBuzz.

function fizzBuzz(number) {
    // go through all numbers from 1-> selected number and check it 
    for (i = 1; i <= number; i++) {
        if (i%5 == 0 && i%3 == 0) {
            console.log('FizzBuzz')
        }
        else if (i%5 == 0) {
            console.log('Buzz')
        }
        else if (i%3 == 0) {
            console.log('Fizz')
        } else {
            console.log(i)
        }
    }
}

fizzBuzz(40)


// for more in depth resources on how to fundamentally be a better problem solver and thus a better a software developer, view these links:

/*

- https://www.youtube.com/watch?v=azcrPFhaY9k

- https://www.freecodecamp.org/news/how-to-think-like-a-programmer-lessons-in-problem-solving-d1d8bf1de7d2/

- https://builtin.com/data-science/pseudocode

*/