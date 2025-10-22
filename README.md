# JavaScript Fundamentals Lab

A collection of exercises and problem sets focused on mastering JavaScript fundamentals, variables, functions, scope, control flow, arrays, and objects. Designed to build logical thinking, clean code habits, and problem-solving fluency through short, hands-on practice.

---

## Quick Start

Clone and run:

    git clone https://github.com/<your-username>/js-fundamentals-lab.git
    cd js-fundamentals-lab
    node filename.js

---

## Lessons and Milestones

| Topic | Focus | Status |
|---|---|---|
| Variables & Scope | `let`, `const`, hoisting, shadowing | ✅ |
| Control Flow | `if/else`, ternary, switch | ✅ |
| Functions | closures, higher-order functions | 🔄 |
| Arrays | iteration, transformation | 🔄 |
| Objects | property access, manipulation | 🔄 |
| ES6+ Features | destructuring, spread, template literals | 🕓 |

---

## Code Samples

Closure example:

    function makeCounter() {
      let count = 0;
      return () => ++count;
    }

    const counter = makeCounter();
    console.log(counter()); // 1
    console.log(counter()); // 2

Word count example:

    function wordCount(str) {
      return str.split(' ').reduce((acc, word) => {
        acc[word] = (acc[word] || 0) + 1;
        return acc;
      }, {});
    }

    console.log(wordCount('box car cat bag box'));

---

## Requirements

* Node.js v18+
* Git
* VS Code or similar editor

---

## Goals

* Strengthen JavaScript fundamentals
* Improve problem-solving and logic
* Write clean, modular, testable code
* Build confidence for interviews and real projects

---

## Contributing

Fork the repo, create a branch, add examples, and submit a pull request. Keep code simple and well commented.

---

## License

Licensed under the MIT License. Free to use, modify, and share with attribution.
