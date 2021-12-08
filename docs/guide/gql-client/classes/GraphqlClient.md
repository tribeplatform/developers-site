[@tribeplatform/gql-client](../getting-started) / [Modules](../index) / [clients](../modules/clients) / GraphqlClient

# Class: GraphqlClient

[clients](../modules/clients).GraphqlClient

## Hierarchy

- `BaseGraphQLClient`

  ↳ **`GraphqlClient`**

## Table of contents

### Constructors

- [constructor](GraphqlClient#constructor)

### Methods

- [authorizedRequest](GraphqlClient#authorizedrequest)
- [batchRequests](GraphqlClient#batchrequests)
- [rawRequest](GraphqlClient#rawrequest)
- [request](GraphqlClient#request)
- [setEndpoint](GraphqlClient#setendpoint)
- [setHeader](GraphqlClient#setheader)
- [setHeaders](GraphqlClient#setheaders)
- [setTokens](GraphqlClient#settokens)

## Constructors

### constructor

• **new GraphqlClient**(`options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`TribeClientOptions`](../modules/clients#tribeclientoptions) |

#### Overrides

BaseGraphQLClient.constructor

#### Defined in

[packages/client/src/clients/graphql.client.ts:66](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/graphql.client.ts#L66)

## Methods

### authorizedRequest

▸ **authorizedRequest**<`T`\>(`options`): `Promise`<`T`\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | `RequestOptions` |

#### Returns

`Promise`<`T`\>

#### Defined in

[packages/client/src/clients/graphql.client.ts:80](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/graphql.client.ts#L80)

___

### batchRequests

▸ **batchRequests**<`T`, `V`\>(`documents`, `requestHeaders?`): `Promise`<`T`\>

Send a GraphQL document to the server.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `unknown` = `any` |
| `V` | `Variables` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `documents` | `BatchRequestDocument`<`V`\>[] |
| `requestHeaders?` | `HeadersInit` |

#### Returns

`Promise`<`T`\>

#### Inherited from

BaseGraphQLClient.batchRequests

#### Defined in

node_modules/graphql-request/dist/index.d.ts:24

___

### rawRequest

▸ **rawRequest**<`T`, `V`\>(`query`, `variables?`, `requestHeaders?`): `Promise`<{ `data`: `T` ; `extensions?`: `any` ; `headers`: `Headers` ; `status`: `number`  }\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `V` | `Variables` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | `string` |
| `variables?` | `V` |
| `requestHeaders?` | `HeadersInit` |

#### Returns

`Promise`<{ `data`: `T` ; `extensions?`: `any` ; `headers`: `Headers` ; `status`: `number`  }\>

#### Inherited from

BaseGraphQLClient.rawRequest

#### Defined in

node_modules/graphql-request/dist/index.d.ts:11

___

### request

▸ **request**<`T`, `V`\>(`document`, `variables?`, `requestHeaders?`): `Promise`<`T`\>

Send a GraphQL document to the server.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `any` |
| `V` | `Variables` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `document` | `RequestDocument` |
| `variables?` | `V` |
| `requestHeaders?` | `HeadersInit` |

#### Returns

`Promise`<`T`\>

#### Inherited from

BaseGraphQLClient.request

#### Defined in

node_modules/graphql-request/dist/index.d.ts:20

___

### setEndpoint

▸ **setEndpoint**(`value`): `GraphQLClient`

Change the client endpoint. All subsequent requests will send to this endpoint.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `string` |

#### Returns

`GraphQLClient`

#### Inherited from

BaseGraphQLClient.setEndpoint

#### Defined in

node_modules/graphql-request/dist/index.d.ts:33

___

### setHeader

▸ **setHeader**(`key`, `value`): `GraphQLClient`

Attach a header to the client. All subsequent requests will have this header.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `string` |

#### Returns

`GraphQLClient`

#### Inherited from

BaseGraphQLClient.setHeader

#### Defined in

node_modules/graphql-request/dist/index.d.ts:29

___

### setHeaders

▸ **setHeaders**(`headers`): `GraphQLClient`

#### Parameters

| Name | Type |
| :------ | :------ |
| `headers` | `HeadersInit` |

#### Returns

`GraphQLClient`

#### Inherited from

BaseGraphQLClient.setHeaders

#### Defined in

node_modules/graphql-request/dist/index.d.ts:25

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

[packages/client/src/clients/graphql.client.ts:109](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/graphql.client.ts#L109)
