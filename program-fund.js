console.log("program fundamentals");

//======================================================
// Section 1
//======================================================

// 1. DRY is a acronym for Don't Repeat yourself and its purpose is make code less repetitive.
// 2. KISS is a acronym for Keep It Simple, Stupid, the goal is to have code that is simple and easy to modify.
// 3. Yagni is a acronym for You Aren't Gonna Need It, the purpose is do not create functionality until it is needed.
// 4. Do the simplest thing that could possibly work is to keep code simple in the design.
// 5. Don't Make Me Think is the thought process of code being easy to read and understand, otherwise it needs to be
// simplified.
// 6. Write code for the maintainer is the idea of code memorability, meaning what you write will have to be
// maintained by someone else in the future, maybe.
// 7. Single Responsibility Principle is the concept of some form of code, having one well defined use or task.
// 8. Avoid Premature Optimization is the idea that code should be tested and made working before it is actually
// optimized.
// 9. Separation of concerns is the concept of different areas of the program managing and handling different things
// in the overall program.
// 10. Not a lot of these concepts I found surprising, more so very straight forward.
// 11. I find I have some issues with some of the more basic concepts. I tend to overthink when I write code and
// make it more complicated than it is.

// come back
// example 1:

// a function is defined with a l parameter
const f = (l) => {
  // define the variables with values
  let es = 0,
    p = 0,
    c = 1,
    n = 0;
  // loop between the c value being less than or equal to the l
  while (c <= l) {
    // n will be equal to the c value added to the p value
    n = c + p;
    // c and p is equal to n and c;
    [c, p] = [n, c];
    // es is plus or equal to c divided by 2 and will either be c or 0
    es += c % 2 === 0 ? c : 0;
  }
  // we return es as the value
  return es;
};
// we console log the l parameter
console.log(f(55));

const f2 = (limit) => {
  let evenSum = 0;
  let previous = 0;
  let current = 1;
  while (current <= limit) {
    let next = current + previous;
    previous = current;
    current = next;
    if (current % 2 === 0) {
      evenSum += current;
    }
  }
  return evenSum;
};

console.log(f2(55));

// This exercise name would have been the Even Sum exercise. All the numbers that
// were even would be added together before a certain limit (55 in the above log).
// We could have made the variables easier to read for someone who might maintain
// this code at some point.

// I would rather work with the f2 function because its much easier to read and
// understand compared to the f function as someone who has to maintain it.

// The semi-colon is necessary for line four for what I want to say is the 
// declaration that the n = p + c wont be read as its own line and go against
// flow control and try to read the next line with it.

// section 2 in the combining data types file --->


