---
path: "/til-5-29-21"
date: "2021-05-29"
image: "./feature.jpg"
category: ["TIL", "Angular"]
title: "TIL 5-29-21"
summary: "dependency injection & angular schematics"
author: "Guide Fari"
article: "true"
---
## Dependency Injection & services
When you inject a service into a component constructor using the `private` keyword, it's only accessible to the component Typescript, if you want to use that service directly in the component template, use the `public` keyword

## `@NgModule`

```typescript
@NgModule({
  // Components defined in this module
  declarations: [
    FooComponent
  ],
  // Components used in this module
  imports: [
    CommonModule
  ],
  // Components that can be imported by other modules
  exports: [
    FooComponent
  ],
})
```

## Angular Schematics
Learnt that [these](https://material.angular.io/guide/schematics) are a thing for generating code with boilerplate stuff.