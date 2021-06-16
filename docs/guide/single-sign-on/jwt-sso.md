---
## sidebar_position: 3
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# JWT SSO

:::note
JWT SSO is only available to handpicked customers at this time.
:::

Although OAuth2 is the most recommended way of authenticating your members to community, JWT SSO is the easiest way if your website does not support OAuth2. You should be able to implement it by adding a few lines of code to your website or product.

In this method, you'll sign a JSON Web Token (JWT) with User's information using a private key. Then the generated token should be passed as `jwt` in the query string to Tribe.

To generate the JWT token, first you need to get your Single Sign-On private key. Login to your community as an Admin. In the Admin Panel under Apps, install the "JWT SSO" app and you should find the Single Sign-On private key there.

Next, you should first install a JWT library:

<Tabs
defaultValue="node"
values={[
{ label: 'Node.js', value: 'node', },
{ label: 'PHP', value: 'php', },
{ label: 'Java', value: 'java', },
{ label: 'Python', value: 'python', },
{ label: 'Ruby', value: 'ruby', },
]
}>

<TabItem value="node">

```js
npm install --save jsonwebtoken
```

</TabItem>
<TabItem value="php">

```php
composer require firebase/php-jwt
```

</TabItem>
<TabItem value="java">

```java
# See instructions here:
https://mvnrepository.com/artifact/io.jsonwebtoken/jjwt/0.7.0
```

</TabItem>
<TabItem value="python">

```python
pip install PyJWT
```

</TabItem>
<TabItem value="ruby">

```ruby
sudo gem install jwt
```

</TabItem>
</Tabs>

Then use the following source code and the SSO private key inside the Tribe "JWT SSO" app to generate the JWT token:

<Tabs
defaultValue="node"
values={[
{ label: 'Node.js', value: 'node', },
{ label: 'PHP', value: 'php', },
{ label: 'Java', value: 'java', },
{ label: 'Python', value: 'python', },
{ label: 'Ruby', value: 'ruby', },
]
}>

<TabItem value="node">

```js
var jwt = require("jsonwebtoken");

var privateKey = "{Your Private Key}";

function createToken(user) {
  var userData = {
    email: user.email,
    sub: user.id,
    name: user.name,
    iat: Math.round(new Date().getTime() / 1000), // token issue time
    exp: Math.round(new Date().getTime() / 1000) + 60, // token expiration time
    picture: user.picture, // optional but preferred
    locale: user.locale, // optional
    title: user.title, // optional
    bio: user.bio, // optional
  };
  return jwt.sign(userData, privateKey, { algorithm: "HS256" });
}
```

</TabItem>
<TabItem value="php">

```php
use FirebaseJWTJWT;

const privateKey = '{Your Private Key}';

function createToken($user) {
  $userData = [
    'email' => $user['email'],
    'sub' => $user['id'],
    'name' => $user['name'],
    'picture' => $user['picture'], // optional but preferred
    'locale' => $user['locale'], // optional
    'title' => $user['title'], // optional
    'bio' => $user['bio'], // optional
  ];
  return JWT::encode($userData, privateKey, 'HS256');
}
```

</TabItem>
<TabItem value="java">

```java
import java.util.HashMap;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

public class TokenCreator {
  private static final String privateKey = "{Your Private Key}";

  public static String createToken(User user) throws Exception {
    HashMap<String, Object> userData = new HashMap<String, Object>();
    userData.put("email", user.email);
    userData.put("sub", user.id);
    userData.put("name", user.name);
    userData.put("picture", user.picture); // optional but preferred
    userData.put("locale", user.locale); // optional
    userData.put("title", user.title); // optional
    userData.put("bio", user.bio); // optional

    return Jwts.builder()
               .setClaims(userData)
               .signWith(SignatureAlgorithm.HS256, privateKey.getBytes("UTF-8"))
               .compact();
  }
}
```

</TabItem>
<TabItem value="python">

```python
import jwt

private_key = '{Your Private Key}'

def create_token(user):
  user_data = {
    'email': user.email,
    'sub': user.id,
    'name': user.name,
    'picture': user.picture, # optional but preferred
    'locale': user.locale, # optional
    'title': user.title, # optional
    'bio': user.bio, # optional
  }
  return jwt.encode(user_data, private_key, algorithm='HS256')
```

</TabItem>
<TabItem value="ruby">

```ruby
require 'jwt'

privateKey = '{Your Private Key}'

def createToken(user)
  userData = {
    :email => user[:email],
    :sub => user[:id],
    :name => user[:name],
    :picture => user[:picture], # optional, but preferred
    :locale => user[:locale], # optional
    :title => user[:title], # optional
    :bio => user[:bio], # optional
  }

  JWT.encode(userData, privateKey, 'HS256')
end
```

</TabItem>
</Tabs>

Finally, you should pass the generated JWT token to Tribe as followed:

```
https://YOUR_COMMUNITY_DOMAIN/api/auth/sso?jwt=[Generated SSO Token]&redirect=/answers
```

Tribe will create the user using the provided information in the JWT and log them in if the user does not already exist. If the user exists, it will update user's information and log them in.

## Identifying user's existence

Tribe will first try to find the user using provided sub. It will check if any user has externalId equal to provided sub. If the user is found, it will update their information including their email address.

If no user is found based on externalId == sub, it will try to find the user using the email address provided and connects the user's externalId to the provided sub.

:::warning
If a user with externalId == sub check does not exist and the user matching with email already has an externalId, Tribe will through a conflict error.

In this case, you may want to update existing users externalId or email using "Update a Specific User" API.
:::

## JWT Supported Keys

Tribe JWT SSO supports all [standard JWT fields](https://en.wikipedia.org/wiki/JSON_Web_Token#Standard_fields) including sub, aud, exp, and iat. Here you can find all fields supported in the JWT:

- **sub (required)**: The ID of the user. It will be stored as `externalId` in Tribe's user object.
- **name (required)**: Name of the user.
- **email (required)**: The email of the user. This email address is considered as a verified address. You should make sure you're verifying it on your side.
- **exp**: The expiration time of the JWT. Although this value is not required, it's highly recommended to set it to 60 seconds from now. If it's not set, the token will be valid forever and can introduce security issues.
- **role**: User's role in the community. Can be member (default), moderator, or admin.
- **picture**: A full URL to user's profile picture. It should include https:// or http://. Tribe will not validate this field, so you should make sure it's a valid URL on your side.
- **source**: You can pass a source to identify where the user came from for marketing purposes (similar to utm_source).
- **title**: The title of the user used in their profile.
- **bio**: A short description of the user. Can include simple HTML code.
- **locale**: The locale of the user. By default, it's set to en. This option is only available for enterprise clients.
