---
sidebar_position: 15
---

# Variables

You can simplify GraphQL queries and mutations by extracting data into separate variables. GraphQL variables let you re-use the same requests with different arguments.

## Variable Structure

GraphQL requests can be split into two sections: the query, and variables.

In the query section, GraphQL variables begin with the `$` symbol and are declared after the `query` or `mutation` keyword, similar to passing an argument to a function.

When you declare a variable, you need to specify its type, such as `CreateSpaceInput`. This lets GraphQL know that you intend to refer to this type by this variable name later in the actual query.

The following query declares an `$input` variable and passes it to the input argument.

```graphql
mutation($input: CreateSpaceInput!) {
  createSpace(input: $input) { ... }
}
```

In the variables section, the variables themselves are defined as a JSON object.

The following JSON object defines the `$input` variable for the query above.

```json
{
  "input": {
    "name": "Product Updates",
    "collectionId": "p15Q7zycbml0"
  }
}
```

## Simplify Space Creation Request

The following example uses the `createSpace` mutation from the previous article, but simplifies the mutation by using variables. The result is a much cleaner and reusable mutation.

```graphql title="POST https://api.tribe.so/graphql"
mutation ($input: AddSpaceInput!) {
  createSpace(input: $input) {
    id
    name
    slug
  }
}
```

**Variables**

```json
{
  "input": {
    "name": "Product Updates",
    "collectionId": "p15Q7zycbml0"
  }
}
```

**JSON Response**

```json
{
  "data": {
    "createSpace": {
      "id": "qgmFho8F6jlA",
      "name": "Product Updates",
      "slug": "product-updates-fw15x39k"
    }
  }
}
```

## Variables in cURL

Because variables are a core concept of GraphQL, you can use them outside of fully featured clients. For example, you can perform the `addSpace` mutation with variables by using cURL.

The cURL command below creates a customer. The JSON `data` object has two properties:

- `query`: The mutation, provided as a string.
- `variables`: An object for holding variables. The only variable is the input object that's used for the mutation.

To run the cURL command from the command line, make the following substitution:

- `{{access_token}}`: Your access token issued as mentioned in the _Authentication_ section

```bash
curl -X POST \
https://app.tribe.so/graphql \
-H 'Content-Type: application/json' \
-H 'Authorization: Bearer {{access_token}}' \
-d '{
  "query": "mutation ($input: CreateSpaceInput!) { createSpace(input: $input) { id, name, slug } }",
  "variables": {
    "input": {
        "name": "Product Updates",
        "collectionId": "p15Q7zycbml0"
    }
  }
}'
```

The response will look similar to this:

```json
{
  "data": {
    "createSpace": {
      "id": "qgmFho8F6jlA",
      "name": "Product Updates",
      "slug": "product-updates-fw15x39k"
    }
  }
}
```
