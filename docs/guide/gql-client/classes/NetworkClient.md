[@tribeplatform/gql-client](../getting-started) / [Modules](../index) / [clients](../modules/clients) / NetworkClient

# Class: NetworkClient

[clients](../modules/clients).NetworkClient

## Table of contents

### Constructors

- [constructor](NetworkClient#constructor)

### Methods

- [addMemberSchemaField](NetworkClient#addmemberschemafield)
- [archiveMemberSchemaField](NetworkClient#archivememberschemafield)
- [clearNewDomain](NetworkClient#clearnewdomain)
- [domainAvailability](NetworkClient#domainavailability)
- [get](NetworkClient#get)
- [newDomainStatus](NetworkClient#newdomainstatus)
- [transferToNewDomain](NetworkClient#transfertonewdomain)
- [update](NetworkClient#update)
- [updateMemberSchemaField](NetworkClient#updatememberschemafield)
- [updateNewDomain](NetworkClient#updatenewdomain)

## Constructors

### constructor

• **new NetworkClient**(`client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`GraphqlClient`](GraphqlClient) |

#### Defined in

[packages/client/src/clients/network.client.ts:32](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/network.client.ts#L32)

## Methods

### addMemberSchemaField

▸ **addMemberSchemaField**(`variables`, `fields?`, `accessToken?`): `Promise`<`Network`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `variables` | `MutationAddMemberSchemaFieldArgs` | `undefined` |
| `fields` | `NetworkFields` | `'basic'` |
| `accessToken?` | `string` | `undefined` |

#### Returns

`Promise`<`Network`\>

#### Defined in

[packages/client/src/clients/network.client.ts:119](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/network.client.ts#L119)

___

### archiveMemberSchemaField

▸ **archiveMemberSchemaField**(`variables`, `fields?`, `accessToken?`): `Promise`<`Network`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `variables` | `MutationArchiveMemberSchemaFieldArgs` | `undefined` |
| `fields` | `NetworkFields` | `'basic'` |
| `accessToken?` | `string` | `undefined` |

#### Returns

`Promise`<`Network`\>

#### Defined in

[packages/client/src/clients/network.client.ts:147](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/network.client.ts#L147)

___

### clearNewDomain

▸ **clearNewDomain**(`accessToken?`): `Promise`<`Action`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessToken?` | `string` |

#### Returns

`Promise`<`Action`\>

#### Defined in

[packages/client/src/clients/network.client.ts:62](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/network.client.ts#L62)

___

### domainAvailability

▸ **domainAvailability**(`variables`, `accessToken?`): `Promise`<`DomainAvailability`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | `QueryDomainAvailabilityArgs` |
| `accessToken?` | `string` |

#### Returns

`Promise`<`DomainAvailability`\>

#### Defined in

[packages/client/src/clients/network.client.ts:93](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/network.client.ts#L93)

___

### get

▸ **get**(`fields?`, `accessToken?`): `Promise`<`Network`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `fields` | `NetworkFields` | `'basic'` |
| `accessToken?` | `string` | `undefined` |

#### Returns

`Promise`<`Network`\>

#### Defined in

[packages/client/src/clients/network.client.ts:36](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/network.client.ts#L36)

___

### newDomainStatus

▸ **newDomainStatus**(`variables`, `accessToken?`): `Promise`<`DomainTransferStatus`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | `QueryNewDomainStatusArgs` |
| `accessToken?` | `string` |

#### Returns

`Promise`<`DomainTransferStatus`\>

#### Defined in

[packages/client/src/clients/network.client.ts:106](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/network.client.ts#L106)

___

### transferToNewDomain

▸ **transferToNewDomain**(`accessToken?`): `Promise`<`Action`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessToken?` | `string` |

#### Returns

`Promise`<`Action`\>

#### Defined in

[packages/client/src/clients/network.client.ts:84](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/network.client.ts#L84)

___

### update

▸ **update**(`variables`, `fields?`, `accessToken?`): `Promise`<`Network`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `variables` | `MutationUpdateNetworkArgs` | `undefined` |
| `fields` | `NetworkFields` | `'basic'` |
| `accessToken?` | `string` | `undefined` |

#### Returns

`Promise`<`Network`\>

#### Defined in

[packages/client/src/clients/network.client.ts:48](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/network.client.ts#L48)

___

### updateMemberSchemaField

▸ **updateMemberSchemaField**(`variables`, `fields?`, `accessToken?`): `Promise`<`Network`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `variables` | `MutationUpdateMemberSchemaFieldArgs` | `undefined` |
| `fields` | `NetworkFields` | `'basic'` |
| `accessToken?` | `string` | `undefined` |

#### Returns

`Promise`<`Network`\>

#### Defined in

[packages/client/src/clients/network.client.ts:133](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/network.client.ts#L133)

___

### updateNewDomain

▸ **updateNewDomain**(`variables`, `accessToken?`): `Promise`<`DomainTransferStatus`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | `MutationUpdateNewDomainArgs` |
| `accessToken?` | `string` |

#### Returns

`Promise`<`DomainTransferStatus`\>

#### Defined in

[packages/client/src/clients/network.client.ts:71](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/network.client.ts#L71)
