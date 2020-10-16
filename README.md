# Goosebumps Collective.
[![Netlify Status](https://api.netlify.com/api/v1/badges/1d51b8f8-9a89-40f6-9caa-cf483ac08968/deploy-status)](https://app.netlify.com/sites/goosebumpszw/deploys)

Current repo of the [goosebumps](https://goosebumps.co.zw) website.

Taken from [this](https://github.com/taylorbryant/gatsby-starter-tailwind) Gatsby & Tailwind Starter theme.

### Frontmatter structure
```
---
path: "/"
date: "2020-09-23"
image: "./feature.jpg"
category: ["web"]
title: " "
summary: " "
author: "GT Fari"
article: "true"
---
```
`article` is being used as the draft/publish post tool. As seen in the blog page GraphQL query `posts: allMarkdownRemark(filter: {frontmatter: {article: {eq: "true"}}}, sort: {fields: frontmatter___date, order: DESC})`

