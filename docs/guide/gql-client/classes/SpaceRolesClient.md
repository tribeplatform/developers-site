[@tribeplatform/gql-client](../getting-started) / [Modules](../index) / [clients](../modules/clients) / SpaceRolesClient

# Class: SpaceRolesClient

[clients](../modules/clients).SpaceRolesClient

## Table of contents

### Constructors

- [constructor](SpaceRolesClient#constructor)

### Methods

- [list](SpaceRolesClient#list)

## Constructors

### constructor

• **new SpaceRolesClient**(`client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`GraphqlClient`](GraphqlClient) |

#### Defined in

[packages/client/src/clients/spaceRoles.client.ts:8](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/spaceRoles.client.ts#L8)

## Methods

### list

▸ **list**(`variables`, `fields?`, `accessToken?`): `Promise`<`SpaceRole`[]\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `variables` | `QuerySpaceRolesArgs` | `undefined` |
| `fields` | `SpaceRoleFields` | `'basic'` |
| `accessToken?` | `string` | `undefined` |

#### Returns

`Promise`<`SpaceRole`[]\>

#### Defined in

[packages/client/src/clients/spaceRoles.client.ts:12](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/spaceRoles.client.ts#L12)
