---
path: "/til-5-17-21"
date: "2021-05-17"
image: "./feature.jpg"
category: ["TIL", "Angular"]
title: "TIL 5-17-21"
summary: "Angular & decorators - misc Angular notes"
author: "Guide Fari"
article: "true"
---
## Angular & decorators
Angular makes extensive use of decorators, from what I've seen thus far. while you can write your own decorators in Typescript, you spend a lot of time using pre-existing decorators, that are shipped with the Angular package. look out for the `@` syntax to identify decorators. examples below: 
```ts
@Component({
  selector: 'bank-account',
  template: `
    Bank Name: {{bankName}}
    Account Id: {{id}}
  `
})
```
[src](https://angular.io/api/core/Input)

---


```ts
class BankAccount {
  // This property is bound using its original name.
  @Input() bankName: string;
 }
```
[src](https://angular.io/api/core/Input)

---

```ts
export class ClientCardComponent implements OnInit { 
  @Input() 
  client: Client; 
 
  @Output() 
  deleteRequested = new EventEmitter<void>(); 
 
  constructor() { 
  } 
 
  delete() { 
    this.deleteRequested.emit(); // here we simply emit an empty 
    event, but we could also pass data in the event 
  } 
 
  ngOnInit() { 
  } 
} 
```
[src](https://www.packtpub.com/product/learn-typescript-3-by-building-web-applications/9781789615869)

---

## more Angular notes (misc)
> `Directives`are Angular elements that you can use to dynamically modify the DOM
[src](https://www.packtpub.com/product/learn-typescript-3-by-building-web-applications/9781789615869)

> there are 3 types of directive
> 1. Components
> 2. Structural directives: These modify the structure of the DOM eg `*ngFor` & `*ngIf`
> 3. Attribute directives: These alter or transform existing elements eg `ngModel`, `ngStyle`. `ngClass` & `ngSwitch`

### Pipes
some built in examples, although I've seen & made use of [custom pipes](https://youtu.be/X5yO3FMKEQg):
```ts
{{ 'hello' | uppercase }} 
<br> 
{{ 'HELLO' | lowercase }} 
```
yields:
```bash
HELLO 
hello 
```

### Services
> Services are marked as injectable using the `@Injectable` decorator

```ts
import { Injectable } from '@angular/core'; 
 
@Injectable( 
  providedIn: 'root' 
) 
export class BookServiceImpl implements BookService { 
  ... 
} 
```
[src](https://www.packtpub.com/product/learn-typescript-3-by-building-web-applications/9781789615869)

### Dependency Injection
can't talk about services without touching on dependency injection, right?😅
> 1.  The Old Way™ of doing DI in Angular — `providers: []`
> 2. The New Way™ of doing DI in Angular — `providedIn: 'root' | SomeModule`
[src](https://medium.com/@tomastrajan/total-guide-to-angular-6-dependency-injection-providedin-vs-providers-85b7a347b59f)

more [src](https://youtu.be/Mz8lb81AAe4)
