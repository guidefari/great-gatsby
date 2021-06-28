---
path: "/til-5-24-21"
date: "2021-05-24"
image: "./feature.jpg"
category: ["TIL", "Angular"]
title: "TIL 5-24-21"
summary: "ng-container & structural directives"
author: "Guide Fari"
article: "true"
---
## `ng-container`
- This is used to avoid redundant elements in your markup.
- Typically used with structural directives like *ngFor & *ngIf

### without `ng-container`

```html
<div *ngIf="todos">
  <div *ngFor="let todo of todos">
    {{ todo.content }}
  </div>
</div>
```

will output:
```html
<div>
  <div>
    Todo Content 1
  </div>
  <div>
    Todo Content 2
  </div>
  <div>
    Todo Content 3
  </div>
</div>
```

### with `ng-container`
```html
<ng-container *ngIf="todos">
  <div *ngFor="let todo of todos">
    {{ todo.content }}
  </div>
</ng-container>
```

will output:
```html
<div>
  Todo Content 1
</div>
<div>
  Todo Content 2
</div>
<div>
  Todo Content 3
</div>
```


### can't have more than one structural directive on an element

```ts
//this is illegal af

<div *ngIf="todos" *ngFor="let todo of todos">
  {{ todo.content }}
</div>
```

[src](https://www.digitalocean.com/community/tutorials/angular-ng-container-element) of all the code snippets thus far.