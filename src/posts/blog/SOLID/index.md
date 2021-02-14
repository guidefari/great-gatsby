---
path: "/solid"
date: "2021-02-14"
image: "./feature.jpg"
category: ["notes", "oop"]
title: "SOLID principles"
summary: "A summary of SOLID principles - for Object Oriented design"
author: "Guide Fari"
article: "true"
---

- S: The single-responsibility principle
- O: The open-closed principle
- L: The Liskov substitution principle
- I: The interface segregation principle
- D: The dependency inversion principle

## why?
> The SOLID principle helps in reducing tight coupling. Tight coupling means a group of classes are highly dependent on one another which you should avoid in your code. Opposite of tight coupling is loose coupling and your code is considered as a good code when it has loosely-coupled classes. Loosely coupled classes minimize changes in your code, helps in making code more reusable, maintainable, flexible and stable. Now let’s discuss one by one these principles… -[src](https://www.geeksforgeeks.org/solid-principle-in-programming-understand-with-real-life-examples/)

# single-responsibility principle (SRP)
each class should have only a single responsibility.

[Tim Corey on SRP](https://youtu.be/5RwhyZnVRS8)

# open-closed principle
> Simply put, classes should be open for extension, but closed for modification. In doing so, we stop ourselves from modifying existing code and causing potential new bugs in an otherwise happy application. Of course, the one exception to the rule is when fixing bugs in existing code. - [src](https://www.baeldung.com/solid-principles)

the code snippets & explanations on the *open-closed principle* from this [src](https://www.baeldung.com/solid-principles) have been the simplest to understand so far.

# Liskov substitution principle
> if S is a subtype of T, then objects of type T may be replaced with objects of type S without altering any of the desirable properties of the program (correctness, task performed, etc.). - [src](https://en.wikipedia.org/wiki/Liskov_substitution_principle)

- [brief explanation](https://youtu.be/dJQMqNOC4Pc) by Kyle.