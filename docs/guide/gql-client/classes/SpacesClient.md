[@tribeplatform/gql-client](../getting-started) / [Modules](../index) / [clients](../modules/clients) / SpacesClient

# Class: SpacesClient

[clients](../modules/clients).SpacesClient

## Table of contents

### Constructors

- [constructor](SpacesClient#constructor)

### Methods

- [create](SpacesClient#create)
- [delete](SpacesClient#delete)
- [explore](SpacesClient#explore)
- [get](SpacesClient#get)
- [join](SpacesClient#join)
- [leave](SpacesClient#leave)
- [list](SpacesClient#list)
- [listByIds](SpacesClient#listbyids)
- [organize](SpacesClient#organize)
- [pinnedPosts](SpacesClient#pinnedposts)
- [update](SpacesClient#update)
- [updateHighlightedTags](SpacesClient#updatehighlightedtags)

## Constructors

### constructor

• **new SpacesClient**(`client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`GraphqlClient`](GraphqlClient) |

#### Defined in

[packages/client/src/clients/spaces.client.ts:42](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/spaces.client.ts#L42)

## Methods

### create

▸ **create**(`variables`, `fields?`, `accessToken?`): `Promise`<`Space`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `variables` | `MutationCreateSpaceArgs` | `undefined` |
| `fields` | `SpaceFields` | `'basic'` |
| `accessToken?` | `string` | `undefined` |

#### Returns

`Promise`<`Space`\>

#### Defined in

[packages/client/src/clients/spaces.client.ts:46](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/spaces.client.ts#L46)

___

### delete

▸ **delete**(`variables`, `fields?`, `accessToken?`): `Promise`<`Action`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `variables` | `MutationDeleteSpaceArgs` | `undefined` |
| `fields` | `ActionFields` | `'basic'` |
| `accessToken?` | `string` | `undefined` |

#### Returns

`Promise`<`Action`\>

#### Defined in

[packages/client/src/clients/spaces.client.ts:192](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/spaces.client.ts#L192)

___

### explore

▸ **explore**(`variables`, `fields?`, `accessToken?`): `Promise`<`PaginatedSpace`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `variables` | `QueryExploreSpacesArgs` | `undefined` |
| `fields` | `PaginatedSpaceFields` | `'basic'` |
| `accessToken?` | `string` | `undefined` |

#### Returns

`Promise`<`PaginatedSpace`\>

#### Defined in

[packages/client/src/clients/spaces.client.ts:164](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/spaces.client.ts#L164)

___

### get

▸ **get**(`variables`, `fields?`, `accessToken?`): `Promise`<`Space`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `variables` | `QuerySpaceArgs` | `undefined` |
| `fields` | `SpaceFields` | `'basic'` |
| `accessToken?` | `string` | `undefined` |

#### Returns

`Promise`<`Space`\>

#### Defined in

[packages/client/src/clients/spaces.client.ts:102](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/spaces.client.ts#L102)

___

### join

▸ **join**(`variables`): `Promise`<`Action`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | `MutationJoinSpaceArgs` |

#### Returns

`Promise`<`Action`\>

#### Defined in

[packages/client/src/clients/spaces.client.ts:128](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/spaces.client.ts#L128)

___

### leave

▸ **leave**(`variables`): `Promise`<`Action`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | `MutationLeaveSpaceArgs` |

#### Returns

`Promise`<`Action`\>

#### Defined in

[packages/client/src/clients/spaces.client.ts:139](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/spaces.client.ts#L139)

___

### list

▸ **list**(`variables`, `fields`, `accessToken?`): `Promise`<`PaginatedSpace`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | `QuerySpacesArgs` |
| `fields` | `SpaceFields` |
| `accessToken?` | `string` |

#### Returns

`Promise`<`PaginatedSpace`\>

#### Defined in

[packages/client/src/clients/spaces.client.ts:60](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/spaces.client.ts#L60)

___

### listByIds

▸ **listByIds**(`variables`, `fields?`, `accessToken?`): `Promise`<`Space`[]\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `variables` | `QuerySpacesByIdsArgs` | `undefined` |
| `fields` | `SpaceFields` | `'basic'` |
| `accessToken?` | `string` | `undefined` |

#### Returns

`Promise`<`Space`[]\>

#### Defined in

[packages/client/src/clients/spaces.client.ts:74](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/spaces.client.ts#L74)

___

### organize

▸ **organize**(`variables`, `fields?`, `accessToken?`): `Promise`<`Action`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `variables` | `MutationOrganizeSpacesInCollectionArgs` | `undefined` |
| `fields` | `ActionFields` | `'basic'` |
| `accessToken?` | `string` | `undefined` |

#### Returns

`Promise`<`Action`\>

#### Defined in

[packages/client/src/clients/spaces.client.ts:88](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/spaces.client.ts#L88)

___

### pinnedPosts

▸ **pinnedPosts**(`variables`, `fields?`, `accessToken?`): `Promise`<`Post`[]\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `variables` | `QuerySpacePinnedPostsArgs` | `undefined` |
| `fields` | `PostFields` | `'basic'` |
| `accessToken?` | `string` | `undefined` |

#### Returns

`Promise`<`Post`[]\>

#### Defined in

[packages/client/src/clients/spaces.client.ts:150](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/spaces.client.ts#L150)

___

### update

▸ **update**(`variables`, `fields?`): `Promise`<`Space`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `variables` | `MutationUpdateSpaceArgs` | `undefined` |
| `fields` | `SpaceFields` | `'basic'` |

#### Returns

`Promise`<`Space`\>

#### Defined in

[packages/client/src/clients/spaces.client.ts:116](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/spaces.client.ts#L116)

___

### updateHighlightedTags

▸ **updateHighlightedTags**(`variables`, `accessToken?`): `Promise`<`Action`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | `MutationUpdateSpaceHighlightedTagsArgs` |
| `accessToken?` | `string` |

#### Returns

`Promise`<`Action`\>

#### Defined in

[packages/client/src/clients/spaces.client.ts:178](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/spaces.client.ts#L178)
