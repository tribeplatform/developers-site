[@tribeplatform/gql-client](../getting-started) / [Modules](../index) / [clients](../modules/clients) / ModerationClient

# Class: ModerationClient

[clients](../modules/clients).ModerationClient

## Table of contents

### Constructors

- [constructor](ModerationClient#constructor)

### Methods

- [getItem](ModerationClient#getitem)
- [getItemReporters](ModerationClient#getitemreporters)
- [getItems](ModerationClient#getitems)
- [settings](ModerationClient#settings)
- [updateItem](ModerationClient#updateitem)
- [updateSettings](ModerationClient#updatesettings)

## Constructors

### constructor

• **new ModerationClient**(`client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`GraphqlClient`](GraphqlClient) |

#### Defined in

[packages/client/src/clients/moderation.client.ts:28](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/moderation.client.ts#L28)

## Methods

### getItem

▸ **getItem**(`variables`, `fields?`, `accessToken?`): `Promise`<`ModerationItem`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `variables` | `QueryModerationItemArgs` | `undefined` |
| `fields` | `ModerationItemFields` | `'basic'` |
| `accessToken?` | `string` | `undefined` |

#### Returns

`Promise`<`ModerationItem`\>

#### Defined in

[packages/client/src/clients/moderation.client.ts:32](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/moderation.client.ts#L32)

___

### getItemReporters

▸ **getItemReporters**(`variables`, `fields?`, `accessToken?`): `Promise`<`PaginatedModerationItemReporter`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `variables` | `QueryModerationItemReportersArgs` | `undefined` |
| `fields` | `ModerationItemReporterFields` | `'basic'` |
| `accessToken?` | `string` | `undefined` |

#### Returns

`Promise`<`PaginatedModerationItemReporter`\>

#### Defined in

[packages/client/src/clients/moderation.client.ts:60](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/moderation.client.ts#L60)

___

### getItems

▸ **getItems**(`variables`, `fields?`, `accessToken?`): `Promise`<`PaginatedModeration`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `variables` | `QueryModerationItemsArgs` | `undefined` |
| `fields` | `ModerationItemFields` | `'basic'` |
| `accessToken?` | `string` | `undefined` |

#### Returns

`Promise`<`PaginatedModeration`\>

#### Defined in

[packages/client/src/clients/moderation.client.ts:46](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/moderation.client.ts#L46)

___

### settings

▸ **settings**(`accessToken?`): `Promise`<`ModerationSettings`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessToken?` | `string` |

#### Returns

`Promise`<`ModerationSettings`\>

#### Defined in

[packages/client/src/clients/moderation.client.ts:76](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/moderation.client.ts#L76)

___

### updateItem

▸ **updateItem**(`variables`, `accessToken?`): `Promise`<`Action`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | `MutationUpdateModerationItemArgs` |
| `accessToken?` | `string` |

#### Returns

`Promise`<`Action`\>

#### Defined in

[packages/client/src/clients/moderation.client.ts:98](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/moderation.client.ts#L98)

___

### updateSettings

▸ **updateSettings**(`variables`, `accessToken?`): `Promise`<`ModerationSettings`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | `MutationUpdateModerationSettingsArgs` |
| `accessToken?` | `string` |

#### Returns

`Promise`<`ModerationSettings`\>

#### Defined in

[packages/client/src/clients/moderation.client.ts:85](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/moderation.client.ts#L85)
