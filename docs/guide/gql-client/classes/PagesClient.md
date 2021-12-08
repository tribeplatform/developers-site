[@tribeplatform/gql-client](../getting-started) / [Modules](../index) / [clients](../modules/clients) / PagesClient

# Class: PagesClient

[clients](../modules/clients).PagesClient

## Table of contents

### Constructors

- [constructor](PagesClient#constructor)

### Methods

- [create](PagesClient#create)
- [list](PagesClient#list)
- [update](PagesClient#update)

## Constructors

### constructor

• **new PagesClient**(`client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`GraphqlClient`](GraphqlClient) |

#### Defined in

[packages/client/src/clients/pages.client.ts:13](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/pages.client.ts#L13)

## Methods

### create

▸ **create**(`variables`, `fields?`, `accessToken?`): `Promise`<`Page`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `variables` | `MutationCreatePageArgs` | `undefined` |
| `fields` | `PageFields` | `'basic'` |
| `accessToken?` | `string` | `undefined` |

#### Returns

`Promise`<`Page`\>

#### Defined in

[packages/client/src/clients/pages.client.ts:29](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/pages.client.ts#L29)

___

### list

▸ **list**(`fields?`, `accessToken?`): `Promise`<`Page`[]\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `fields` | `PageFields` | `'basic'` |
| `accessToken?` | `string` | `undefined` |

#### Returns

`Promise`<`Page`[]\>

#### Defined in

[packages/client/src/clients/pages.client.ts:17](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/pages.client.ts#L17)

___

### update

▸ **update**(`variables`, `fields?`, `accessToken?`): `Promise`<`Page`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `variables` | `MutationUpdatePageArgs` | `undefined` |
| `fields` | `PageFields` | `'basic'` |
| `accessToken?` | `string` | `undefined` |

#### Returns

`Promise`<`Page`\>

#### Defined in

[packages/client/src/clients/pages.client.ts:43](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/pages.client.ts#L43)
