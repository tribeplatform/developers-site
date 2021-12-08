[@tribeplatform/gql-client](../getting-started) / [Modules](../index) / [clients](../modules/clients) / SlatesClient

# Class: SlatesClient

[clients](../modules/clients).SlatesClient

## Table of contents

### Constructors

- [constructor](SlatesClient#constructor)

### Methods

- [update](SlatesClient#update)

## Constructors

### constructor

• **new SlatesClient**(`client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`GraphqlClient`](GraphqlClient) |

#### Defined in

[packages/client/src/clients/slates.client.ts:8](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/slates.client.ts#L8)

## Methods

### update

▸ **update**(`variables`, `fields?`, `accessToken?`): `Promise`<`Slate`[]\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `variables` | `MutationUpdateSlatesArgs` | `undefined` |
| `fields` | ``"all"`` | `'all'` |
| `accessToken?` | `string` | `undefined` |

#### Returns

`Promise`<`Slate`[]\>

#### Defined in

[packages/client/src/clients/slates.client.ts:12](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/slates.client.ts#L12)
