---
path: "/til-5-20-21"
date: "2021-05-20"
image: "./feature.jpg"
category: ["TIL", "ES6"]
title: "TIL 5-20-21"
summary: "Function Expression Hoisting"
author: "Guide Fari"
article: "true"
---
## Function Expression Hoisting
function statement
```js
function cacheRules() {
 return '💴'
}
```

function expression
```js
const cacheRules = function() {
 return '🤯'
}
```

function statement is hoisted, while the expression is not.
