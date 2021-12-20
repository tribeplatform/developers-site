# GraphQL Reference

The GraphQL API let you build apps and other integrations for Tribe. This is a reference to every query, mutation, input, and object available in the Tribe GraphQL API.

We highly recommend reading [this guide](/guide/graphql/getting-started) to get started with Tribe GraphQL API.

## Authentication

The GraphQL API requires a Tribe access token for making authenticated requests.

You can obtain an access token either by following the [Tribe Access Token](/guide/graphql/authentication/access-token) guide. Include the access token as an `Authorization` header in your requests as followed:

```
Authorization: Bearer {Access Token}
```

## GraphQL Endpoint

The Tribe GraphQL API is available at a single GraphQL endpoint:

```
https://app.tribe.so/graphql
```

You can access the GraphQL API playground [here](https://app.tribe.so/graphql).

:::note
Tribe's GraphQL APIs only accept POST requests. Other HTTP methods, such as GET or PUT, will return a **400 (Bad request)** or **406 (Not acceptable)** response.
:::
