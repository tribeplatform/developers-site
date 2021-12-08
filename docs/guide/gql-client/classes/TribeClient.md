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

- [generateToken](TribeClient#generatetoken)
- [getLimitedToken](TribeClient#getlimitedtoken)
- [getTokens](TribeClient#gettokens)
- [search](TribeClient#search)
- [setToken](TribeClient#settoken)

## Constructors

### constructor

• **new TribeClient**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`TribeClientOptions`](../modules/clients#tribeclientoptions) |

#### Defined in

[packages/client/src/client.ts:95](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/client.ts#L95)

## Properties

### app

• **app**: [`AppClient`](AppClient)

#### Defined in

[packages/client/src/client.ts:47](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/client.ts#L47)

___

### auth

• **auth**: [`AuthClient`](AuthClient)

#### Defined in

[packages/client/src/client.ts:49](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/client.ts#L49)

___

### billing

• **billing**: [`BillingClient`](BillingClient)

#### Defined in

[packages/client/src/client.ts:51](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/client.ts#L51)

___

### collections

• **collections**: [`CollectionsClient`](CollectionsClient)

#### Defined in

[packages/client/src/client.ts:53](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/client.ts#L53)

___

### dev

• **dev**: [`DevClient`](DevClient)

#### Defined in

[packages/client/src/client.ts:55](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/client.ts#L55)

___

### invitations

• **invitations**: [`InvitationsClient`](InvitationsClient)

#### Defined in

[packages/client/src/client.ts:57](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/client.ts#L57)

___

### media

• **media**: [`MediaClient`](MediaClient)

#### Defined in

[packages/client/src/client.ts:59](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/client.ts#L59)

___

### members

• **members**: [`MembersClient`](MembersClient)

#### Defined in

[packages/client/src/client.ts:61](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/client.ts#L61)

___

### moderation

• **moderation**: [`ModerationClient`](ModerationClient)

#### Defined in

[packages/client/src/client.ts:63](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/client.ts#L63)

___

### network

• **network**: [`NetworkClient`](NetworkClient)

#### Defined in

[packages/client/src/client.ts:65](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/client.ts#L65)

___

### notifications

• **notifications**: [`NotificationsClient`](NotificationsClient)

#### Defined in

[packages/client/src/client.ts:67](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/client.ts#L67)

___

### pages

• **pages**: [`PagesClient`](PagesClient)

#### Defined in

[packages/client/src/client.ts:91](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/client.ts#L91)

___

### posts

• **posts**: [`PostsClient`](PostsClient)

#### Defined in

[packages/client/src/client.ts:69](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/client.ts#L69)

___

### report

• **report**: [`ReportClient`](ReportClient)

#### Defined in

[packages/client/src/client.ts:71](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/client.ts#L71)

___

### roles

• **roles**: [`RolesClient`](RolesClient)

#### Defined in

[packages/client/src/client.ts:73](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/client.ts#L73)

___

### slates

• **slates**: [`SlatesClient`](SlatesClient)

#### Defined in

[packages/client/src/client.ts:89](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/client.ts#L89)

___

### spaceMembers

• **spaceMembers**: [`SpaceMembersClient`](SpaceMembersClient)

#### Defined in

[packages/client/src/client.ts:75](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/client.ts#L75)

___

### spaceMembership

• **spaceMembership**: [`SpaceMembershipClient`](SpaceMembershipClient)

#### Defined in

[packages/client/src/client.ts:77](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/client.ts#L77)

___

### spacePostType

• **spacePostType**: [`SpacePostTypeClient`](SpacePostTypeClient)

#### Defined in

[packages/client/src/client.ts:83](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/client.ts#L83)

___

### spaceRoles

• **spaceRoles**: [`SpaceRolesClient`](SpaceRolesClient)

#### Defined in

[packages/client/src/client.ts:79](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/client.ts#L79)

___

### spaces

• **spaces**: [`SpacesClient`](SpacesClient)

#### Defined in

[packages/client/src/client.ts:81](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/client.ts#L81)

___

### tags

• **tags**: [`TagsClient`](TagsClient)

#### Defined in

[packages/client/src/client.ts:85](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/client.ts#L85)

___

### theme

• **theme**: [`ThemeClient`](ThemeClient)

#### Defined in

[packages/client/src/client.ts:87](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/client.ts#L87)

## Methods

### generateToken

▸ **generateToken**(`options`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `Object` |
| `options.memberId?` | `string` |
| `options.networkId` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

[packages/client/src/client.ts:176](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/client.ts#L176)

___

### getLimitedToken

▸ **getLimitedToken**(`variables`, `fields?`, `useBasicToken?`): `Promise`<`AppToken`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `variables` | `QueryLimitedTokenArgs` | `undefined` |
| `fields` | `LimitedTokenFields` | `'basic'` |
| `useBasicToken?` | `boolean` | `undefined` |

#### Returns

`Promise`<`AppToken`\>

#### Defined in

[packages/client/src/client.ts:148](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/client.ts#L148)

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

[packages/client/src/client.ts:136](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/client.ts#L136)

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

[packages/client/src/client.ts:162](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/client.ts#L162)

___

### setToken

▸ **setToken**(`accessToken`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessToken` | `string` |


#### Returns

`void`

#### Defined in

[packages/client/src/client.ts:123](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/client.ts#L123)
