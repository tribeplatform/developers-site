[@tribeplatform/gql-client](../getting-started) / [Modules](../index) / [clients](../modules/clients) / PostsClient

# Class: PostsClient

[clients](../modules/clients).PostsClient

## Table of contents

### Constructors

- [constructor](PostsClient#constructor)

### Methods

- [addReaction](PostsClient#addreaction)
- [byMember](PostsClient#bymember)
- [create](PostsClient#create)
- [delete](PostsClient#delete)
- [feed](PostsClient#feed)
- [get](PostsClient#get)
- [getPostType](PostsClient#getposttype)
- [hide](PostsClient#hide)
- [list](PostsClient#list)
- [listPostTypes](PostsClient#listposttypes)
- [pinToSpace](PostsClient#pintospace)
- [reactionParticipants](PostsClient#reactionparticipants)
- [removeReaction](PostsClient#removereaction)
- [replies](PostsClient#replies)
- [reply](PostsClient#reply)
- [unhide](PostsClient#unhide)
- [unpinFromSpace](PostsClient#unpinfromspace)
- [update](PostsClient#update)

## Constructors

### constructor

• **new PostsClient**(`client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`GraphqlClient`](GraphqlClient) |

#### Defined in

[packages/client/src/clients/posts.client.ts:59](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/posts.client.ts#L59)

## Methods

### addReaction

▸ **addReaction**(`variables`, `fields?`, `accessToken?`): `Promise`<`Action`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `variables` | `MutationAddReactionArgs` | `undefined` |
| `fields` | `ActionFields` | `'basic'` |
| `accessToken?` | `string` | `undefined` |

#### Returns

`Promise`<`Action`\>

#### Defined in

[packages/client/src/clients/posts.client.ts:206](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/posts.client.ts#L206)

___

### byMember

▸ **byMember**(`memberId`, `variables?`, `fields?`, `accessToken?`): `Promise`<`PaginatedPost`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `memberId` | `string` | `undefined` |
| `variables` | `Omit`<`QueryMemberPostsArgs`, ``"memberId"``\> | `undefined` |
| `fields` | `PostFields` | `'basic'` |
| `accessToken?` | `string` | `undefined` |

#### Returns

`Promise`<`PaginatedPost`\>

#### Defined in

[packages/client/src/clients/posts.client.ts:174](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/posts.client.ts#L174)

___

### create

▸ **create**(`variables`, `fields?`, `accessToken?`): `Promise`<`Post`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `variables` | `MutationCreatePostArgs` | `undefined` |
| `fields` | `PostFields` | `'basic'` |
| `accessToken?` | `string` | `undefined` |

#### Returns

`Promise`<`Post`\>

#### Defined in

[packages/client/src/clients/posts.client.ts:89](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/posts.client.ts#L89)

___

### delete

▸ **delete**(`variables`, `fields?`, `accessToken?`): `Promise`<`Action`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `variables` | `MutationDeletePostArgs` | `undefined` |
| `fields` | `ActionFields` | `'basic'` |
| `accessToken?` | `string` | `undefined` |

#### Returns

`Promise`<`Action`\>

#### Defined in

[packages/client/src/clients/posts.client.ts:261](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/posts.client.ts#L261)

___

### feed

▸ **feed**(`variables?`, `fields?`, `accessToken?`): `Promise`<`PaginatedPost`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `variables` | `QueryFeedArgs` | `undefined` |
| `fields` | `PostFields` | `'basic'` |
| `accessToken?` | `string` | `undefined` |

#### Returns

`Promise`<`PaginatedPost`\>

#### Defined in

[packages/client/src/clients/posts.client.ts:142](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/posts.client.ts#L142)

___

### get

▸ **get**(`id`, `fields?`, `accessToken?`): `Promise`<`Post`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `id` | `string` | `undefined` |
| `fields` | `PostFields` | `'basic'` |
| `accessToken?` | `string` | `undefined` |

#### Returns

`Promise`<`Post`\>

#### Defined in

[packages/client/src/clients/posts.client.ts:128](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/posts.client.ts#L128)

___

### getPostType

▸ **getPostType**(`id`, `fields?`): `Promise`<`PostType`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `id` | `string` | `undefined` |
| `fields` | `PostTypeFields` | `'basic'` |

#### Returns

`Promise`<`PostType`\>

#### Defined in

[packages/client/src/clients/posts.client.ts:77](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/posts.client.ts#L77)

___

### hide

▸ **hide**(`variables`, `accessToken?`): `Promise`<`Action`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | `MutationHidePostArgs` |
| `accessToken?` | `string` |

#### Returns

`Promise`<`Action`\>

#### Defined in

[packages/client/src/clients/posts.client.ts:235](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/posts.client.ts#L235)

___

### list

▸ **list**(`variables`, `fields?`, `accessToken?`): `Promise`<`PaginatedPost`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `variables` | `QueryGetPostsArgs` \| `QueryTagPostsArgs` | `undefined` |
| `fields` | `PostFields` | `'basic'` |
| `accessToken?` | `string` | `undefined` |

#### Returns

`Promise`<`PaginatedPost`\>

#### Defined in

[packages/client/src/clients/posts.client.ts:103](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/posts.client.ts#L103)

___

### listPostTypes

▸ **listPostTypes**(`variables`, `fields?`, `customToken?`): `Promise`<`PaginatedPostType`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `variables` | `QueryPostTypesArgs` | `undefined` |
| `fields` | `PostTypeFields` | `'basic'` |
| `customToken?` | `string` | `undefined` |

#### Returns

`Promise`<`PaginatedPostType`\>

#### Defined in

[packages/client/src/clients/posts.client.ts:63](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/posts.client.ts#L63)

___

### pinToSpace

▸ **pinToSpace**(`variables`, `fields?`, `accessToken?`): `Promise`<`Action`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `variables` | `MutationPinPostToSpaceArgs` | `undefined` |
| `fields` | `ActionFields` | `'basic'` |
| `accessToken?` | `string` | `undefined` |

#### Returns

`Promise`<`Action`\>

#### Defined in

[packages/client/src/clients/posts.client.ts:289](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/posts.client.ts#L289)

___

### reactionParticipants

▸ **reactionParticipants**(`variables`, `fields?`, `accessToken?`): `Promise`<`PaginatedPostReactionParticipant`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `variables` | `QueryPostReactionParticipantsArgs` | `undefined` |
| `fields` | `MemberFields` | `'basic'` |
| `accessToken?` | `string` | `undefined` |

#### Returns

`Promise`<`PaginatedPostReactionParticipant`\>

#### Defined in

[packages/client/src/clients/posts.client.ts:317](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/posts.client.ts#L317)

___

### removeReaction

▸ **removeReaction**(`variables`, `fields?`, `accessToken?`): `Promise`<`Action`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `variables` | `MutationRemoveReactionArgs` | `undefined` |
| `fields` | `ActionFields` | `'basic'` |
| `accessToken?` | `string` | `undefined` |

#### Returns

`Promise`<`Action`\>

#### Defined in

[packages/client/src/clients/posts.client.ts:221](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/posts.client.ts#L221)

___

### replies

▸ **replies**(`variables`, `fields?`): `Promise`<`PaginatedPost`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `variables` | `QueryRepliesArgs` | `undefined` |
| `fields` | `PostFields` | `'basic'` |

#### Returns

`Promise`<`PaginatedPost`\>

#### Defined in

[packages/client/src/clients/posts.client.ts:192](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/posts.client.ts#L192)

___

### reply

▸ **reply**(`postId`, `variables`, `fields?`, `accessToken?`): `Promise`<`Post`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `postId` | `string` | `undefined` |
| `variables` | `Omit`<`MutationCreateReplyArgs`, ``"postId"``\> | `undefined` |
| `fields` | `PostFields` | `'basic'` |
| `accessToken?` | `string` | `undefined` |

#### Returns

`Promise`<`Post`\>

#### Defined in

[packages/client/src/clients/posts.client.ts:156](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/posts.client.ts#L156)

___

### unhide

▸ **unhide**(`variables`, `accessToken?`): `Promise`<`Action`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | `MutationUnhidePostArgs` |
| `accessToken?` | `string` |

#### Returns

`Promise`<`Action`\>

#### Defined in

[packages/client/src/clients/posts.client.ts:248](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/posts.client.ts#L248)

___

### unpinFromSpace

▸ **unpinFromSpace**(`variables`, `fields?`, `accessToken?`): `Promise`<`Action`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `variables` | `MutationUnpinPostFromSpaceArgs` | `undefined` |
| `fields` | `ActionFields` | `'basic'` |
| `accessToken?` | `string` | `undefined` |

#### Returns

`Promise`<`Action`\>

#### Defined in

[packages/client/src/clients/posts.client.ts:303](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/posts.client.ts#L303)

___

### update

▸ **update**(`variables`, `fields?`, `accessToken?`): `Promise`<`Post`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `variables` | `MutationUpdatePostArgs` | `undefined` |
| `fields` | `PostFields` | `'basic'` |
| `accessToken?` | `string` | `undefined` |

#### Returns

`Promise`<`Post`\>

#### Defined in

[packages/client/src/clients/posts.client.ts:275](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/posts.client.ts#L275)
