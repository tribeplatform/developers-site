---
sidebar_position: 3
---

# JWT SSO

In this method, you'll sign a JSON Web Token (JWT) with User's information using a private key. Then the generated token should be passed as `token` in the query string to Tribe.

To generate the JWT token, first you need to get your Single Sign-On private key. Login to your community as an Admin. In the Administration page under Authentication, enable the "JWT SSO" and you should find the Single Sign-On private key there.

Next, you should first install a JWT library:

```node title="Node.js"
$ npm install --save jsonwebtoken
```

Then use the following source code and the SSO private key inside the Tribe "JWT SSO" section in Administration page, to generate the JWT token:

```javascript title="Node.js"
const jwt = require("jsonwebtoken");

const privateKey = "{Your Private Key}";

function createToken(user) {
  const userData = {
    email: user.email,
    username: user.username,
    externalId: user.externalId,
    firstName: user.firstName,
    lastName: user.lastName,
    iat: Math.round(new Date().getTime() / 1000), // token issue time
    exp: Math.round(new Date().getTime() / 1000) + 60, // token expiration time
  };
  return jwt.sign(userData, privateKey, { algorithm: "HS256" });
}
```

Finally, you should pass the generated JWT token to Tribe as followed:
```
https://YOUR_COMMUNITY_DOMAIN/api/auth/sso?token=[Generated SSO Token]
```

If the user does not already exist, Tribe will create the user using the provided information in the JWT and log them in. If the user exists, it will update user's information and log them in.


## Identifying user's existence

Tribe will first try to find the user using `externalId`. If the user is found, it will update their information including their email address.

If no user is found based on `externalId`, it will try to find the user using the email address provided.

## JWT Supported Keys

Tribe JWT SSO supports standard JWT fields. Here you can find all fields supported in the JWT:


* firstName (required): The first name of the user.
* lastName (required): The last name of the user.
* email (required): The email of the user. This email address is considered as a verified address. You should make sure you're verifying it on your side.
* username: The username of the user. If this field is empty, Tribe will generate a random username.
* externalId: The ID of the user on your side.
exp: The expiration time of the JWT. Although this value is not required, it's highly recommended to set it to 60 seconds from now. If it's not set, the token will be valid forever and can introduce security issues.



