---
path: "/til-6-9-21"
date: "2021-06-09"
image: "./feature.jpg"
category: ["TIL", "Angular"]
title: "TIL 6-9-21"
summary: "Angular mat tree data source options"
author: "Guide Fari"
article: "true"
---
### Angular mat tree data source options

These data source options seem to be the same as mat data table, & angular cdk (yet to look into it😅)

- **Data Array**
	- `T[ ]`
- **Observable of data arrays**
	- `Observable<T[ ]>`
- **DataSource with connect and disconnect methods**
	- `connect(): Observable<T[ ]>`
	- `disconnect(): void`