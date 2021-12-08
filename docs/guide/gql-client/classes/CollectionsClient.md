[@tribeplatform/gql-client](../getting-started) / [Modules](../index) / [clients](../modules/clients) / CollectionsClient

# Class: CollectionsClient

[clients](../modules/clients).CollectionsClient

## Table of contents

### Constructors

- [constructor](CollectionsClient#constructor)

### Methods

- [create](CollectionsClient#create)
- [delete](CollectionsClient#delete)
- [get](CollectionsClient#get)
- [list](CollectionsClient#list)
- [organize](CollectionsClient#organize)
- [update](CollectionsClient#update)

## Constructors

### constructor

• **new CollectionsClient**(`client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`GraphqlClient`](GraphqlClient) |

#### Defined in

[packages/client/src/clients/collections.client.ts:26](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/collections.client.ts#L26)

## Methods

### create

▸ **create**(`variables`, `fields?`, `accessToken?`): `Promise`<`Collection`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `variables` | `MutationCreateCollectionArgs` | `undefined` |
| `fields` | `CollectionFields` | `'basic'` |
| `accessToken?` | `string` | `undefined` |

#### Returns

`Promise`<`Collection`\>

#### Defined in

[packages/client/src/clients/collections.client.ts:30](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/collections.client.ts#L30)

___

### delete

▸ **delete**(`id`, `accessToken?`): `Promise`<`Action`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |
| `accessToken?` | `string` |

#### Returns

`Promise`<`Action`\>

#### Defined in

[packages/client/src/clients/collections.client.ts:85](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/collections.client.ts#L85)

___

### get

▸ **get**(`variables`, `fields?`, `accessToken?`): `Promise`<`Collection`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `variables` | `QueryCollectionArgs` | `undefined` |
| `fields` | `CollectionFields` | `'basic'` |
| `accessToken?` | `string` | `undefined` |

#### Returns

`Promise`<`Collection`\>

#### Defined in

[packages/client/src/clients/collections.client.ts:58](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/collections.client.ts#L58)

___

### list

▸ **list**(`variables?`, `fields?`, `accessToken?`): `Promise`<`Collection`[]\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `variables?` | `QueryCollectionsArgs` | `undefined` |
| `fields` | `CollectionFields` | `'basic'` |
| `accessToken?` | `string` | `undefined` |

#### Returns

`Promise`<`Collection`[]\>

#### Defined in

[packages/client/src/clients/collections.client.ts:44](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/collections.client.ts#L44)

___

### organize

▸ **organize**(`variables`, `fields?`, `accessToken?`): `Promise`<`Action`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `variables` | `MutationOrganizeCollectionsArgs` | `undefined` |
| `fields` | `ActionFields` | `'basic'` |
| `accessToken?` | `string` | `undefined` |

#### Returns

`Promise`<`Action`\>

#### Defined in

[packages/client/src/clients/collections.client.ts:95](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/collections.client.ts#L95)

___

### update

▸ **update**(`variables`, `accessToken?`): `Promise`<`Action`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | `MutationUpdateCollectionArgs` |
| `accessToken?` | `string` |

#### Returns

`Promise`<`Action`\>

#### Defined in

[packages/client/src/clients/collections.client.ts:72](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/collections.client.ts#L72)
