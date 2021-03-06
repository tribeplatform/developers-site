---
sidebar_position: 2
---

# OAuth2 SSO

OAuth2 is the recommended and more secure way of implementing SSO between your website and Tribe community. Tribe supports the most common implementations of OAuth2 including _OpenID Connect_.

To be able to use OAuth2 SSO method, your website or product should act as an OAuth2 identity provider. If you're using Okta or Auth0 as your user identity management system you can easily enable OAuth2 protocol since they support OAuth2 out of the box.

Most content management systems have plugins to support OAuth2 as well. For instance, you can use [WP OAuth Server](https://wp-oauth.com/) plugin to add OAuth2 support to your WordPress website.

To enable OAuth2 SSO on your Tribe, you can simply go to the Network Settings and enable OAuth2 under Authentication menu. Before enabling the SSO, you should pick your SSO Provider and fill out the mandatory fields. Tribe supports Okta, Auth0, WordPress, Outseta, and Memberful out of the box. In case you're using a provider not listed in the dropdown, you can pick the "Custom Provider" option.

Client ID, Client Secret, and the Authorization Domain/URL is mandatory for all providers. For "Custom Provider" you will need to enter the Authorization URL and Token URL as well. You can find these information in your OAuth2 identity management system panel.

## Bypass OAuth2 login

:::note
Use **https://YOUR_COMMUNITY_DOMAIN/auth/login/direct** to skip OAuth2 workflow as an admin.
:::

While setting OAuth2 settings you may enter some values incorrectly. Since OAuth2 takes over the login process, you may not be able to access your admin panel anymore to fix issues.
In this case, you can easily use `https://YOUR_COMMUNITY_DOMAIN/auth/login/direct` to access Tribe's regular login form.

## OAuth2 Flow

When OAuth2 SSO is enabled, Tribe will redirect user to your user identity system. If the user is not logged into your website, they will see your login screen. After logging in, Tribe will receive the access token generated by your user identity system and fetches the user's information.

Next, Tribe will create the user using the provided information and log them in if the user does not already exist. If the user exists, it will update the user's information and log them in.

:::note
When member clicks on the login or sign up button, in case you have more than one login method enabled (e.g. OAuth2 + social logins or OAuth2 + email/password) the member will see Tribe's login screen with the available login options. If OAuth2 is the only available login method, the member will be redirected directly to your identity management system.
:::

### Identifying User's Existence

Tribe will first try to find the user using the provided id. It will check if any user has externalId equal to provided id. If the user is found, it will update their information including their email address.

If no user is found based on externalId == id, it will try to find the user using the email address provided and connects the user's externalId to the provided id.

:::warning
If a user with externalId == id check does not exist and the user matching with email already has an externalId, Tribe will through a conflict error.

In this case, you may want to update existing users externalId or email using "Update a Specific User" API.
:::

### Auto redirecting member to login screen

Sometimes you want to ensure the user is logged into the community. This usually happens when you're embedding the Tribe community into another website or product using Iframe. To make sure the user is logged in you can pass `?auth=true` query string in the URL. When this query string is set, the flow will be as follows:

- If the user is not logged in, it will redirect the user to the OAuth2 workflow and it'll log user in.
- If the user is already logged in, it won't do anything.

Please note that this method works seamlessly if the user is already authenticated in your identity management system. For instance, on the web, you're already sure that the user is authenticated to your app using the identity management system, therefore when the widget redirects user to the OAuth2 workflow user will be logged in and redirected back right away.

If the user is not authenticated using your identity management system, they will see the OAuth2 login screen and it won't be a seamless experience. This mostly happens when you're using a WebView inside your app, and the WebView has a different session from the main App's authentication flow.

:::note
Before using `?auth=true`, please ensure the only available login method is OAuth2. If you have email/password or social login methods enabled, the member will see the Tribe login screen instead of being redirected to the OAuth2 flow.
:::

## OAuth2 Settings

Now let's go through every single option available under the OAuth settings:

### Client ID and Client Secret

Both of these values are generated by your identity management system. They are the credentials that give Tribe access to act as an authentication client.

In Okta or Auth0 you can get these credentials by adding a new App. The Client ID and Secret will be available under the app settings.

:::info
Please make sure to set the callback URL as instructed at the bottom of OAuth2 app under your identity management system's Callback URL or Callback URI section.
:::

### Identity Provide URL / OAuth2 Domain

This URL is provided by your identity management system. It???s the base URL you chose upon setting up your identity management account.

As an example, For Memberful, this URL look like this:

```
https://{YourSubdomain}.memberful.com
```

### Authorization URL and Token URL

Custom OAuth2 provider requires two URLs to work properly. These URLs are also provided by your identity management system.

For other providers Tribe will generate these values based on the OAuth2 domain.

### User Profile URL

If your OAuth2 provider follows OpenID Connect standards, user's information will be included inside `id_token` JWT and there will not be a need for Tribe to send another request to get user's information.

However, if all the information needed (User's id, email, and name) are not provided inside the id_token or the OAuth2 provider does not follow OpenID Connect, you'll need to provide another URL for Tribe to fetch needed user's information. You can enter this URL in User Info URL textbox.

Tribe will send a GET request to this URL and expects the user's information in JSON format. The request includes the access token in the header according to bearer authentication:

```
Authorization: Bearer {AccessToken}
```

Tribe maps the JSON result to Tribe user's object as followed considering the order mentioned for each field:

- `externalId`: id, ID, sub, nameid
- `email`: email, user_email, emailAddress
- `name`: name, display_name, displayName, full_name, fullName
- `username`: username, user_login, nickname
- `profilePicture`: picture, icon_url

The above mapping covers most of the standard user info endpoints including WP OAuth Server.

### Scope

Scope defines the member fields and the permission that Tribe should have access to. If you're not sure what it is, you can skip entering any value for it.

If your OAuth2 provider follows OpenID Connect standards, you can enter "email openid". This will let Tribe have access to user's email as well as their basic information.

### Account Settings URL

Your community members can change their email inside Tribe by default. Most likely there is a section on your identity management system where users can change their email as well. This will cause confusion for your members since they can update their information in two different places and they're not synced by default.

For instance, a member with "john.smith@acme.com" email can update their address in the community to "j.smith@test.com", unless you're using our Webhooks, API, and/or Zapier the email of this user on your identity management system is still "john-smith@acme.com". In some cases, this might be the right behavior and you want to let members have a different email addresses in the community. But in many cases, you want the emails to be synced and in this case, the best solution is to let them change their information only inside your identity management system.

To do so, you can just enter a link to your website's account setting URL. If this link is provided we won't let members change their email inside the community and instead they will see a link to your website's account setting. After they change their information you can use our API or Zapier to update their name right away in the community. Otherwise, their information will be updated the next time they login to Tribe.

### Logout URL

When the user logs out of the community, most likely, you want them to be logged out of your identity management system as well. Otherwise, next time they click on the login button, after being redirected to your identity management system authorization URL, the user will be logged in to the community right away without asking for username and password because they're not logged out of the identity management system yet.

To fix this, you can provide a Logout URL. After the user is logged out of Tribe we're sending them to the URL provided and you can log them out of the identity management system as well.

### Login Button Text

If ???Enable OAuth2??? is checked, we will show a button pointing to your Single Sign-On provider. You can set the name of the SSO button under the Login Button Text textbox.
