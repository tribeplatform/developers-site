---
sidebar_position: 1
---

[@tribeplatform/gql-client](../getting-started) / [Modules](../index) / [client](../modules/client) / TribeClient

# Class: TribeClient

[client](../modules/client).TribeClient

## Table of contents

### Constructors

- [constructor](TribeClient#constructor)

### Properties

- [app](TribeClient#app)
- [auth](TribeClient#auth)
- [billing](TribeClient#billing)
- [collections](TribeClient#collections)
- [dev](TribeClient#dev)
- [invitations](TribeClient#invitations)
- [media](TribeClient#media)
- [members](TribeClient#members)
- [moderation](TribeClient#moderation)
- [network](TribeClient#network)
- [notifications](TribeClient#notifications)
- [pages](TribeClient#pages)
- [posts](TribeClient#posts)
- [report](TribeClient#report)
- [roles](TribeClient#roles)
- [slates](TribeClient#slates)
- [spaceMembers](TribeClient#spacemembers)
- [spaceMembership](TribeClient#spacemembership)
- [spacePostType](TribeClient#spaceposttype)
- [spaceRoles](TribeClient#spaceroles)
- [spaces](TribeClient#spaces)
- [tags](TribeClient#tags)
- [theme](TribeClient#theme)

### Methods

- [getLimitedToken](TribeClient#getlimitedtoken)
- [getTokens](TribeClient#gettokens)
- [search](TribeClient#search)
- [setTokens](TribeClient#settokens)

## Constructors

### constructor

• **new TribeClient**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`TribeClientOptions`](../modules/clients#tribeclientoptions) |

#### Defined in

[packages/client/src/client.ts:94](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/client.ts#L94)

## Properties

### app

• **app**: [`AppClient`](AppClient)

#### Defined in

[packages/client/src/client.ts:46](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/client.ts#L46)

___

### auth

• **auth**: [`AuthClient`](AuthClient)

#### Defined in

[packages/client/src/client.ts:48](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/client.ts#L48)

___

### billing

• **billing**: [`BillingClient`](BillingClient)

#### Defined in

[packages/client/src/client.ts:50](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/client.ts#L50)

___

### collections

• **collections**: [`CollectionsClient`](CollectionsClient)

#### Defined in

[packages/client/src/client.ts:52](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/client.ts#L52)

___

### dev

• **dev**: [`DevClient`](DevClient)

#### Defined in

[packages/client/src/client.ts:54](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/client.ts#L54)

___

### invitations

• **invitations**: [`InvitationsClient`](InvitationsClient)

#### Defined in

[packages/client/src/client.ts:56](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/client.ts#L56)

___

### media

• **media**: [`MediaClient`](MediaClient)

#### Defined in

[packages/client/src/client.ts:58](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/client.ts#L58)

___

### members

• **members**: [`MembersClient`](MembersClient)

#### Defined in

[packages/client/src/client.ts:60](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/client.ts#L60)

___

### moderation

• **moderation**: [`ModerationClient`](ModerationClient)

#### Defined in

[packages/client/src/client.ts:62](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/client.ts#L62)

___

### network

• **network**: [`NetworkClient`](NetworkClient)

#### Defined in

[packages/client/src/client.ts:64](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/client.ts#L64)

___

### notifications

• **notifications**: [`NotificationsClient`](NotificationsClient)

#### Defined in

[packages/client/src/client.ts:66](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/client.ts#L66)

___

### pages

• **pages**: [`PagesClient`](PagesClient)

#### Defined in

[packages/client/src/client.ts:90](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/client.ts#L90)

___

### posts

• **posts**: [`PostsClient`](PostsClient)

#### Defined in

[packages/client/src/client.ts:68](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/client.ts#L68)

___

### report

• **report**: [`ReportClient`](ReportClient)

#### Defined in

[packages/client/src/client.ts:70](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/client.ts#L70)

___

### roles

• **roles**: [`RolesClient`](RolesClient)

#### Defined in

[packages/client/src/client.ts:72](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/client.ts#L72)

___

### slates

• **slates**: [`SlatesClient`](SlatesClient)

#### Defined in

[packages/client/src/client.ts:88](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/client.ts#L88)

___

### spaceMembers

• **spaceMembers**: [`SpaceMembersClient`](SpaceMembersClient)

#### Defined in

[packages/client/src/client.ts:74](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/client.ts#L74)

___

### spaceMembership

• **spaceMembership**: [`SpaceMembershipClient`](SpaceMembershipClient)

#### Defined in

[packages/client/src/client.ts:76](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/client.ts#L76)

___

### spacePostType

• **spacePostType**: [`SpacePostTypeClient`](SpacePostTypeClient)

#### Defined in

[packages/client/src/client.ts:82](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/client.ts#L82)

___

### spaceRoles

• **spaceRoles**: [`SpaceRolesClient`](SpaceRolesClient)

#### Defined in

[packages/client/src/client.ts:78](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/client.ts#L78)

___

### spaces

• **spaces**: [`SpacesClient`](SpacesClient)

#### Defined in

[packages/client/src/client.ts:80](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/client.ts#L80)

___

### tags

• **tags**: [`TagsClient`](TagsClient)

#### Defined in

[packages/client/src/client.ts:84](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/client.ts#L84)

___

### theme

• **theme**: [`ThemeClient`](ThemeClient)

#### Defined in

[packages/client/src/client.ts:86](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/client.ts#L86)

## Methods

### getLimitedToken

▸ **getLimitedToken**(`variables`, `fields?`): `Promise`<`AppToken`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `variables` | `QueryLimitedTokenArgs` | `undefined` |
| `fields` | `LimitedTokenFields` | `'basic'` |

#### Returns

`Promise`<`AppToken`\>

#### Defined in

[packages/client/src/client.ts:147](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/client.ts#L147)

___

### getTokens

▸ **getTokens**(`variables`, `fields?`): `Promise`<`AuthToken`\>

Get the guest access token for a community.

**`query`** tokens(): AuthToken!

**`example`**
```typescript
 t.client.getTokens({networkDomain: 'community.tribe.so'})
```

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `variables` | `QueryTokensArgs` | `undefined` |
| `fields` | `AuthTokenFields` | `'default'` |

#### Returns

`Promise`<`AuthToken`\>

The AuthToken.

#### Defined in

[packages/client/src/client.ts:135](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/client.ts#L135)

___

### search

▸ **search**(`variables`, `fields?`, `accessToken?`): `Promise`<`SearchResult`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `variables` | `QuerySearchArgs` | `undefined` |
| `fields` | `SearchEntityFields` | `'basic'` |
| `accessToken?` | `string` | `undefined` |

#### Returns

`Promise`<`SearchResult`\>

#### Defined in

[packages/client/src/client.ts:160](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/client.ts#L160)

___

### setTokens

▸ **setTokens**(`options`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.accessToken?` | `string` |
| `options.secretToken?` | `string` |

#### Returns

`void`

#### Defined in

[packages/client/src/client.ts:122](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/client.ts#L122)
