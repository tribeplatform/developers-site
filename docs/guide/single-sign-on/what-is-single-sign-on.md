---
sidebar_position: 1
---

# What is Single Sign-On?

Single sign-on (SSO) is a centralized session and user authentication service that permits a user to use one set of login credentials to access multiple applications.

Single sign-on can happen through popular social networks such as Facebook, Twitter, Google, LinkedIn, etc. It can also happen through a company, product, or website's authorization service.

Tribe supports the following single sign-on mechanisms:

- SSO through Facebook, Twitter, Google, LinkedIn, and Slack.
- OAuth2 (supporting OpenID, Okta, Auth0)
- JSON Web Token (JWT) SSO

:::note
It's possible to combine social login SSO with regular Tribe login or OAuth2. For instance, you can have Twitter, LinkedIn, and OAuth2 SSO together.
:::

The OAuth2 and JWT SSO let your community members login or register using the same username and password they use to login to your product or website. This means your users do not need to have a separate username and password to login to the community. In most cases, they won't even know they're entering another product since the transition between your website and the community will be seamless by utilizing one of the mentioned SSO methods.
