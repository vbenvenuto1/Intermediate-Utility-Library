# Intermediate Utility Library

Everything you learn in JavaScript can be represented and remembered with a `function` you create. The goal of this project is to create an interactive utility library of all the JavaScript operations and functions you learn.

Utility libraries are an important feature of any [high level programming language](https://en.wikipedia.org/wiki/High-level_programming_language).

[jQuery](https://jquery.com/) is a library we have been using so far—it primarily helps with selecting elements on the DOM, listening for events, and manipulating the DOM, but it also has some utility functions. Other popular utility libraries: [Lodash](https://lodash.com/) (all-purpose utilities), [Math.js](https://mathjs.org/) (utilities for better mathematic functions), and [Moment.js](https://momentjs.com/) (utilities for handling dates and times).

Are you ready to build your own?

## Step 1: Fork and clone this app

What and what?

**Forking** makes a copy of someone else's Github repository and puts this copy in your own Github repositories.

**Cloning** this newly forked repository copies it onto your computer for local editing. All changes that you push will now go to your fork in your repositories.

### Walkthrough

In your coding folder on your computer, create a folder for this project.

View this page on Github. Go to the top of the page and click "Fork".

If given the option, select your username.

You will be taken to a new repo under your Github username. Click "Clone or download", and copy the URL you are given.

In your terminal, go to the folder you created for this project.

Enter the following:

`git clone TheUrlYouCopiedFromGithub .` **Note the period at the end!**

This will clone the forked repo into the folder you've created.

You don't need to do anything else to connect it to Github. All your changes will be pushed to the right repo. Simply make changes then commit & push!

### More reading

[Difference between Git Clone and Git Fork](https://www.toolsqa.com/git/difference-between-git-clone-and-git-fork/)

[What is the difference between Forking and Cloning on GitHub?](https://stackoverflow.com/questions/7057194/what-is-the-difference-between-forking-and-cloning-on-github)

[How do you clone a Git repository into a specific folder?](https://stackoverflow.com/questions/651038/how-do-you-clone-a-git-repository-into-a-specific-folder)

## Step 2: Add JavaScript functions to your library

Create simple functions that demonstrate a working knowledge JavaScript operations and functions. Create your own name for each function—**the name must be unique** and must be the same for the function in `functions.js` and `index.html`. Write a short description that makes sense for you. In the comments of your function, list the arguments and the return value this function accepts.

Add functions to the `functions.js` file.

Add a new Bootstrap column to `index.html` by copying and pasting everything between and including `<!-- start column -->` and `<!-- end column -->` editing the **function name**, its **description**, and **the number of inputs** it has.

### List of functions

**Complete everything up from "Selecting from Many Options with Switch Statements" to "Use the parseInt Function"** from [JavaScript Algorithms and Data Structures Certification > Basic JavaScript](https://www.freecodecamp.org/learn/).

**Complete everything** in [JavaScript Algorithms and Data Structures Certification > Basic Data Structures](https://www.freecodecamp.org/learn/).

**Complete everything** in [JavaScript Algorithms and Data Structures Certification > Debugging](https://www.freecodecamp.org/learn/).

As you complete each one, create simple utility functions that demonstrate a working knowledge of the following lessons (you will do all the lessons described above, but make utility functions for these):

-  Counting Cards
-  ~~Record Collection~~ Can skip
-  ~~Iterate Odd Numbers With a For Loop~~ Can skip
-  Profile Lookup
-  Generate Random Whole Numbers within a Range
-  Remove Items Using splice()
-  Add Items Using splice()
-  Check For The Presence of an Element With indexOf()
-  Use typeof to Check the Type of a Variable

## Step 3: Apply your learning to White Bear

### On `index.html`

First, let's change "Let's go!" from an `<a>` to a `<button>` and delete the href attribute so we can work on this button without it sending us to the next page. :sweat_smile: (Leave "Log in" as is.)

When a user creates a password under "Nice to meet you" lets add some new logic to our password validation when the user clicks "Let's go!":

-  The password cannot contain the [local-part](https://en.wikipedia.org/wiki/Email_address) of the email address the user entered.

Display an error message to the user if that condition is violated: "Your email address cannot be used in your password." Style the email input with a Bootstrap class to highlight the error.

Next, under "Nice to meet you", when the user clicks "Let's go!" after entering an email address and password that passes all validation, `console.log` an object with the following schema, replacing the numbers in `createdOn` with a new number based on the [JavaScript Date object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) of today's date and time. See below for conversion instructions.

Also, create the `_id` value by concatenating the milliseconds of the current datetime with a random number between 000 and 999. If the number of milliseconds or your random numbers is less that 3 characters long, be sure you pad it with 0s to the left, enuring each is 3 characters long.

```javascript
{
   _id: 678123,
   email: "whatTheUserEnteredForTheirEmail",
   password: "whatTheUserEnteredForTheirPassword",
   createdOn: 200508232659
}
```

On converting the JavaScript Date object into a number, here is the number broken into sections:

| 20                    | 05            | 08          | 23           | 26              | 59              |
| --------------------- | ------------- | ----------- | ------------ | --------------- | --------------- |
| last 2 digits of year | 2-digit month | 2-digit day | 2-digit hour | 2-digit minutes | 2-digit seconds |

**NOTE: JavaScript months are zero-based! This makes for less readable data, so please add 1 to your month digit! (For example, 00 should be 01.)**

### On `create-imagery.html`

When the user clicks "Save", `console.log` an object with the following schema, replacing the numbers in `createdOn` with a new number based on the [JavaScript Date object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) of today's date and time. See above for conversion instructions.

Also, create the `_id` value by concatenating the milliseconds of the current datetime with a random number between 000 and 999. If the number of milliseconds or your random numbers is less that 3 characters long, be sure you pad it with 0s to the left, enuring each is 3 characters long.

```javascript
{
   _id: 002045,
   imagery: "A delicious shishkebab but the first bite of meat after the pointy end is spicy & makes an exclamation point appear over my head like in a JRPG.",
   answer: "The syntax for making a comment in HTML is <!-- Mike's comment here -->",
   levelNum: 1,
   successfulAttemptsNum: 0,
   createdOn: 200508232659,
   lastAttemptedOn: 200508232659 // same as createdOn
}
```

## Step 4: Repeat this process with the next repo

[Functional Utility Library](https://github.com/punchcode-fullstack/functional-utility-library)
