---
sidebar_position: 10
---

# Mutations

GraphQL mutations create and modify objects, similar to a PUT, POST, or DELETE request in REST. Mutation requests are sent to the same endpoint as query requests.

A list of all mutations available on Tribe's GraphQL API is available [here](/docs/graphql/schema) under _Mutations_ section.

:::note
All requests to Tribe's GraphQL endpoint should be authenticated using [Tribe Access Token](/docs/guide/graphql/authentication/access-token).
:::

## Mutations Structure

Mutations have the following structure:

- The `mutation` operation name
- The mutation field name, such as `addSpace`
- The input data to use in the mutation passed as an argument, such as the information for a new space
- A selection of return fields that should be included in the response, such as the ID of the successfully created Space object

**Mutation Structure**

```graphql title="POST https://api.tribe.so/graphql"
mutation {
  mutationName(arg: "Data") {
    # return fields
  }
}
```

## Input objects

Mutations require input data, such as the data to create a new object, or the ID of an object to delete. For mutations that might require a substantial data object, the schema provides a dedicated input object type.

For example, the [`addSpace`](/docs/graphql/mutations/add-space) mutation requires an input argument, which accepts a [`AddSpaceInput`](/docs/graphql/inputs/add-space-input) object. The `AddSpaceInput` type defines all the fields that can be used to create or modify a space.

```graphql title="POST https://api.tribe.so/graphql"
mutation {
  addSpace(
    input: {
      name: "Product Updates"
      spaceTypeId: "5onYS9C83Pde"
      groupId: "p15Q7zycbml0"
    }
  ) {
    # ...
  }
}
```

:::note
We will cover what `spaceTypeId` and `groupId` are later in this guide.
:::

## Return fields

Each mutation provides a set of fields that can be returned in the response. For example, one of the return fields available for the `addSpace` mutation is the Space object that was created by a successful mutation. Similar to a GraphQL query, you can select the fields on the new object that you want to include in the response.

```graphql title="POST https://api.tribe.so/graphql"
mutation {
  addSpace(input: {
    # ...
  }) {
    id
    name
    slug
  }
}
```

## Create a space

The following mutation uses input objects and return fields to create a new space and return their ID, name, and slug.

```graphql title="POST https://api.tribe.so/graphql"
mutation {
  addSpace(
    input: {
      name: "Product Updates"
      spaceTypeId: "5onYS9C83Pde"
      groupId: "p15Q7zycbml0"
    }
  ) {
    id
    name
    slug
  }
}
```

**JSON Response**

```json
{
  "data": {
    "addSpace": {
      "id": "qgmFho8F6jlA",
      "name": "Product Updates",
      "slug": "product-updates-fw15x39k"
    }
  }
}
```
