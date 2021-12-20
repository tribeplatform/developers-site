---
sidebar_position: 1
---

# Getting Started

## What is GraphQL?

GraphQL is a query language and a runtime system. Clients form requests (called queries and mutations) by using the GraphQL query language, and the GraphQL server executes the request and returns the data in a response. Unlike REST APIs, which expose a different endpoint for each resource object, a GraphQL API makes all data available at a single endpoint. A client specifies exactly the data that it wants, and the server responds with only that data.

GraphQL looks similar to JSON. The following example shows a simple GraphQL query and the JSON response:

```graphql title="POST https://api.tribe.so/graphql"
query {
  member(username: "admin") {
    id
    name
    username
    tagline
  }
}
```

**JSON Response**

```json
{
  "data": {
    "member": {
      "id": "2KONsPORsA",
      "name": "Siavash",
      "username": "admin",
      "tagline": "CEO at Tribe"
    }
  }
}
```

## GraphQL Endpoint

All GraphQL requests should be sent as a POST request to the following address:

```
https://app.tribe.so/graphql
```

You can access Tribe's GraphQL playground from the [same address](https://app.tribe.so/graphql) as well.

:::note
All requests to Tribe's GraphQL endpoint should be authenticated using [Tribe Access Token](/guide/graphql/authentication/access-token).
:::
