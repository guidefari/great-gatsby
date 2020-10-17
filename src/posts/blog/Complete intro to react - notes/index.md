---
path: "/complete-intro-to-react"
date: "2020-10-15"
image: "./feature.jpg"
category: ["TIL", "Notes"]
title: "Complete intro to react - notes"
summary: "Notes from Frontend Masters course titled above, the course is presented by Brian Holt."
author: "Guide Fari"
article: "false"
---
I have a feeling this will be useful at some point.
```js
const Details = props => {
    return (
        <pre>
            <code>{JSON.stringify(props, null, 4)}</code>
        </pre>
    )
}
```

## Managing state
1. useState
2. Context - explained nicely in [this](https://www.youtube.com/watch?v=lhMKvyLRWo0&ab_channel=BenAwad) video. also shows how you can useState & useContext
3. Redux

