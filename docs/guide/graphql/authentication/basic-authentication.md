---
sidebar_position: 1
---

# Basic HTTP Authentication

:::info
Basic HTTP Authentication method is only available to handpicked developers at this time.
:::

Apps can authenticate through basic HTTP authentication by using member's username and password.

Some HTTP clients support basic authentication by prepending `username:password@` to the hostname in the URL. For example:

```
POST https://{username}:{password}@{subdomain}.tribeplatform.com/graphql
```

If your HTTP client doesn't support basic authentication using this method, then you can provide credentials in `Authorization` header field instead:

1. Join the username and password with a single colon (`:`)
2. Encode the resulting string in base64 representation.
3. Prepend the base64-encoded string with `Basic` and a space:

```
Authorization: Basic dHJpYmV1c2VybmFtZTp0ZXN0cGFzc3dvcmQ=
```

:::note

Tribe doesn't support cookies in requests that use basic HTTP authentication. Any requests that use basic authentication and include cookies will fail with a 200 error code. Using cookies with basic authentication can expose your app to CSRF attacks, such as session hijacking.

:::
