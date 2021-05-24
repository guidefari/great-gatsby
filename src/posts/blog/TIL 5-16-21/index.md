---
path: "/til-5-16-21"
date: "2021-05-16"
image: "./feature.jpg"
category: ["TIL", "Keystone", "NextJS"]
title: "TIL 5-16-21"
summary: "debug tip - Keystone graphql dynamic query - nextjs query params"
author: "Guide Fari"
article: "true"
---
## 🔥Debugging tip
You can `console.log()` multiple variables as an object, to get them to be logged with the keys, easier to just illustrate.

`console.log( data, loading, error )` will log the following:

```js
Object false undefined
```

where `console.log({ data, loading, error })` will log:

```js
{data: {...}, loading: false, error: undefined}
```

## Keystone/Graphql dynamic query
```js
const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    Product(where: { id: $id }) {
      name
      price
      description
    }
  }
`;

export default function SingleProduct({ id }) {
  const { data, loading, error } = useQuery(SINGLE_ITEM_QUERY, {
    variables: { id },
  });
  
}
```
The id used here comes from a dynamic page query in nextJS, as seen on [this](https://github.com/txndai/Advanced-React-GraphQL/blob/master/sick-fits/frontend/components/SingleProduct.js) file.

## Pass a query param using Nextjs `<Link/>`

```js
<Link
  href={{
	pathname: 'update',
	query: {
	  id: product.id,
	},
  }}
>
  Edit ✏
</Link>
```

the code above gives you this url when you click the `<Link/>`:
`http://localhost:7777/update?id=609239780bc90633f08d8929`
