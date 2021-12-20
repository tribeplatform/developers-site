---
sidebar_position: 5
---

# Making Queries

A GraphQL query retrieves data from a server, similar to a GET request for a REST API. However, unlike REST, all GraphQL queries are sent to a single endpoint and use the POST http method.

A list of all queries available on Tribe's GraphQL API is available [here](/graphql/schema) under _Queries_ section.

:::note
All requests to Tribe's GraphQL endpoint should be authenticated using [Tribe Access Token](/guide/graphql/authentication/access-token).
:::

## Sample Query

This query requests a space object, a few fields, and its members in a single request.

```graphql title="POST https://api.tribe.so/graphql"
query {
  space(slug: "general") {
    id
    name
    members(limit: 1) {
      edges {
        node {
          member {
            id
            name
          }
        }
      }
      totalCount
    }
  }
}
```

**JSON response**

```json
{
  "data": {
    "space": {
      "id": "Y4umRdAkY1aB",
      "name": "General",
      "members": {
        "edges": [
          {
            "node": {
              "member": {
                "id": "2KONsPOR1z",
                "name": "Siavash"
              }
            }
          }
        ],
        "totalCount": 4
      }
    }
  }
}
```

Notice that after the data key, the shape of the response keys reflects the shape of the query keys.

## Arguments and Fields

Queries can take arguments to fetch a specific object or filter list of objects.

As an example, the `member` queries a single member. In the [GraphQL API reference](/graphql/queries/member), the `member` query takes `id` or `username` as an argument.

The `is` or `username` specifies the member to query. After selecting the `Member`, you list the fields on the [Member object](/graphql/objects/member) that you want to return.

This query gets a specific member, and selects a few fields from that object.

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

## Connections

Connections are links between related objects. You can use connections to make nested queries, gathering information from multiple objects by traversing their connections in a single GraphQL call. If you're selecting something with a pluralized name, then you're often (but not always) using a connection.

When selecting a connection, you must provide a `limit` argument. This limits how many results are returned, and is a key component in managing rate-limiting and pagination. These subjects are covered later in this guide.

Within a connection, you need to select the `edges` field. The `edges` field returns an array of objects of the same type, such as member's joined spaces. After you’ve selected the edges, you need to access the individual objects by using the `node` field.

Similar to querying an individual node, you list the fields that you want to return. The response returns that data for each node in the connection. If a connection has fewer than the requested number of objects, then the response contains all the data that's available.

The following example requests a list of first 3 members and the first space they're part of using `members` query and `spaces` connection.

```graphql title="POST https://api.tribe.so/graphql"
query {
  members(limit: 3) {
    edges {
      node {
        id
        name
        spaces(limit: 1) {
          edges {
            node {
              id
              name
            }
          }
          totalCount
        }
      }
    }
    totalCount
  }
}
```

**JSON Response**

```json
{
  "data": {
    "members": {
      "edges": [
        {
          "node": {
            "id": "I7Gvba5RaZ",
            "name": "Siavash",
            "spaces": {
              "edges": [
                {
                  "node": {
                    "id": "Y4umRdAkY11S",
                    "name": "General"
                  }
                }
              ]
            }
          }
        }
      ]
    }
  }
}
```

:::note
In the example response, you can see that the community only has a single member because only one set of data was returned.
:::
