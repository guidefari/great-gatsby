---
path: "/til-6-21-21"
date: "2021-06-21"
image: "./feature.jpg"
category: ["TIL", "graphQL"]
title: "TIL 6-21-21"
summary: "graphQL inline fragments"
author: "Guide Fari"
article: "true"
---
## graphQL inline fragments
> Like many other type systems, GraphQL schemas include the ability to define interfaces and union types.

> If you are querying a field that returns an interface or a union type, you will need to use _inline fragments_ to access data on the underlying concrete type.

```graphql
query HeroForEpisode($ep: Episode!) {
  hero(episode: $ep) {
    name
    ... on Droid {
      primaryFunction
    }
    ... on Human {
      height
    }
  }
}
```

```json
{
  "data": {
    "hero": {
      "name": "R2-D2",
      "primaryFunction": "Astromech"
    }
  }
}
```

[src](https://graphql.org/learn/queries/#inline-fragments)