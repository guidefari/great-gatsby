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

## why SOLID?
> The SOLID principle helps in reducing tight coupling. Tight coupling means a group of classes are highly dependent on one another which you should avoid in your code. Opposite of tight coupling is loose coupling and your code is considered as a good code when it has loosely-coupled classes. Loosely coupled classes minimize changes in your code, helps in making code more reusable, maintainable, flexible and stable. Now let’s discuss one by one these principles… -[src](https://www.geeksforgeeks.org/solid-principle-in-programming-understand-with-real-life-examples/)

# single-responsibility principle (SRP)
each class should have only a single responsibility.

### SRP in a Typescript environment
> - Module Level: SRP also applies in module level. Means, while creating the module and classes inside this, we should take care that classes should logically perform the similar tasks [Which perform the similar functionality].

> - Class Level: SRP also applies in class level, here it says that a class should contain the methods which have similar nature. If a class is a User specific then it’s methods should be performed only user-specific action, not any other.

> - Method Level: In the method level, SRP says that a method performs only one task at a time. If there should require performing multiple tasks, then it should be separated to create new methods.

[src](http://www.mukeshkumar.net/articles/typescript/solid-single-responsibility-principal-in-typescript) of the quotes above.

### code snippets
this violates SRP:

```ts
class Statistics {
  public computeSalesStatistics() {
    // ...
  }
  public generateReport() {
    // ...
  }
}
```

it'd need to be split into:


```ts
class Statistics {
  public computeSalesStatistics() {
    // ...
  }
}
```

```ts
class ReportGenerator {
  public generateReport() {
    // ...
  }
}
```

### further reading
- [Tim Corey on SRP](https://youtu.be/5RwhyZnVRS8)
- [Single responsibility theory in Typescript](http://www.mukeshkumar.net/articles/typescript/solid-single-responsibility-principal-in-typescript)

# open-closed principle
> Simply put, classes should be open for extension, but closed for modification. In doing so, we stop ourselves from modifying existing code and causing potential new bugs in an otherwise happy application. Of course, the one exception to the rule is when fixing bugs in existing code. - [src](https://www.baeldung.com/solid-principles)

the code snippets & explanations on the *open-closed principle* from this [src](https://www.baeldung.com/solid-principles) have been the simplest to understand so far.

# Liskov substitution principle
> if S is a subtype of T, then objects of type T may be replaced with objects of type S without altering any of the desirable properties of the program (correctness, task performed, etc.). - [src](https://en.wikipedia.org/wiki/Liskov_substitution_principle)

- [brief explanation](https://youtu.be/dJQMqNOC4Pc) by Kyle.