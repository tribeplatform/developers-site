[@tribeplatform/gql-client](../getting-started) / [Modules](../index) / [clients](../modules/clients) / RolesClient

# Class: RolesClient

[clients](../modules/clients).RolesClient

## Table of contents

### Constructors

- [constructor](RolesClient#constructor)

### Methods

- [list](RolesClient#list)

## Constructors

### constructor

• **new RolesClient**(`client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`GraphqlClient`](GraphqlClient) |

#### Defined in

[packages/client/src/clients/roles.client.ts:8](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/roles.client.ts#L8)

## Methods

### list

▸ **list**(`variables`, `fields?`, `accessToken?`): `Promise`<`Role`[]\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `variables` | `QueryRolesArgs` | `undefined` |
| `fields` | `RoleFields` | `'basic'` |
| `accessToken?` | `string` | `undefined` |

#### Returns

`Promise`<`Role`[]\>

#### Defined in

[packages/client/src/clients/roles.client.ts:12](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/roles.client.ts#L12)
