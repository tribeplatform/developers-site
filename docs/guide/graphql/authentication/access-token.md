---
sidebar_position: 1
---

# Tribe Access Token

All request to Tribe's GraphQL endpoint except for `getTokens` query should be authenticated.

## Guest Access Token

If you want to authenticate as a guest or as a member using their email (or username) and password, the most common way is to use the [`getTokens`](/docs/graphql/queries/get-tokens) query. Here is a sample query:

```graphql
query {
  getTokens(networkDomain: "community.tribe.so") {
    accessToken
    role {
      name
      scopes
    }
    member {
      id
      name
    }
  }
}
```

You should replace the `networkDomain` value to your own community address. The result of the above query will be a guest access token as followed:

```json
{
  "data": {
    "getTokens": {
      "accessToken": "eyJhbGciOiJIUzI1NiI...",
      "role": {
        "name": "Guest",
        "scopes": [
          "network:login",
          "network:view",
          "role:view",
          "member:view:all",
          "member:verify",
          "network:join",
          "network:join:withToken",
          "network:join:withLink"
        ]
      },
      "member": {
        "id": "GUEST_NtT0FkLxxiNH2Ji",
        "name": "Guest"
      }
    }
  }
}
```

You should pass the provided `accessToken` in all GraphQL requests in the header as followed:

```
Authorization: Bearer {accessToken}
```

With a guest access token you have a read only access to all resources available to non-logged in members.

## User Access Token

To retrieve a user access token you should use the guest access token to send a request to [`loginNetwork`](/docs/graphql/queries/login-network) query.

```graphql
query {
  loginNetwork(
    input: { usernameOrEmail: "tribeuser", password: "tribepassword" }
  ) {
    accessToken
    role {
      name
      scopes
    }
    member {
      id
      name
    }
  }
}
```

:::note
The [`loginNetwork`](/docs/graphql/queries/login-network) does not work without passing a guest access token in the header and will result in `Unauthorized` error message.
:::

The result of the above query will be a user access token as followed:

```json
{
  "data": {
    "loginNetwork": {
      "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cC...",
      "role": {
        "name": "Admin",
        "scopes": ["*"]
      },
      "member": {
        "id": "9FWKl7Y1rB",
        "name": "John Smith"
      }
    }
  }
}
```

Similar to guest access tokens you will be able to use the user access token by passing it in the header as followed:

```
Authorization: Bearer {accessToken}
```