<p align="center">
<img src="https://thehustle.co/wp-content/uploads/2019/11/Spunky-Brief_2019-11-20T060248.746Z-1.jpg" alt="credit cards">
</p>
<h1 align="center">
    Card Verification
</h1
<p> </p>
    
## Table of contents
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)

### General info 
My implementation of card verification, which is about validating the card number, using the Luhn algorithm and several other things which indicate the card's provider.

### Technologies
Implementation was created with Jest (as the testing framework), ESLint (for improving syntax and enforcing code style), and babel-jest (to enable the use of ES6 Modules with the Jest framework). During this project, I also tried to separate functionalities into different modules to divide responsibilities between them. That makes files more readable and flexible and that leads to the better code architecture. Moreover, I also wanted to create consistent commit history to show my methodology of work.
Name  | Versions
--- | --- 
Node.js  | 16.4.0
### Setup
To clone and run this application, you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/pawlovskiii/card-verification

# Go into the repository
$ cd card-verification

# Install dependencies
$ npm install 

# Run the tests
$ npm test
```
