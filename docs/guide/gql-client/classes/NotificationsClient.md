[@tribeplatform/gql-client](../getting-started) / [Modules](../index) / [clients](../modules/clients) / NotificationsClient

# Class: NotificationsClient

[clients](../modules/clients).NotificationsClient

## Table of contents

### Constructors

- [constructor](NotificationsClient#constructor)

### Methods

- [clearNotificationsCount](NotificationsClient#clearnotificationscount)
- [count](NotificationsClient#count)
- [deleteNotification](NotificationsClient#deletenotification)
- [deleteNotifications](NotificationsClient#deletenotifications)
- [list](NotificationsClient#list)
- [memberPostNotificationSettings](NotificationsClient#memberpostnotificationsettings)
- [memberSettings](NotificationsClient#membersettings)
- [readNotification](NotificationsClient#readnotification)
- [readNotifications](NotificationsClient#readnotifications)
- [unsubscribe](NotificationsClient#unsubscribe)
- [updateMemberPostNotificationSettings](NotificationsClient#updatememberpostnotificationsettings)
- [updateNetworkSettings](NotificationsClient#updatenetworksettings)
- [updateSpaceSettings](NotificationsClient#updatespacesettings)

## Constructors

### constructor

• **new NotificationsClient**(`client`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `client` | [`GraphqlClient`](GraphqlClient) |

#### Defined in

[packages/client/src/clients/notifications.client.ts:43](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/notifications.client.ts#L43)

## Methods

### clearNotificationsCount

▸ **clearNotificationsCount**(`fields?`, `accessToken?`): `Promise`<`Action`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `fields` | `ActionFields` | `'basic'` |
| `accessToken?` | `string` | `undefined` |

#### Returns

`Promise`<`Action`\>

#### Defined in

[packages/client/src/clients/notifications.client.ts:126](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/notifications.client.ts#L126)

___

### count

▸ **count**(`accessToken?`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `accessToken?` | `string` |

#### Returns

`Promise`<`number`\>

#### Defined in

[packages/client/src/clients/notifications.client.ts:47](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/notifications.client.ts#L47)

___

### deleteNotification

▸ **deleteNotification**(`variables`, `fields?`, `accessToken?`): `Promise`<`Action`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `variables` | `MutationDeleteNotificationArgs` | `undefined` |
| `fields` | `ActionFields` | `'basic'` |
| `accessToken?` | `string` | `undefined` |

#### Returns

`Promise`<`Action`\>

#### Defined in

[packages/client/src/clients/notifications.client.ts:98](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/notifications.client.ts#L98)

___

### deleteNotifications

▸ **deleteNotifications**(`variables`, `fields?`, `accessToken?`): `Promise`<`Action`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `variables` | `MutationDeleteNotificationsArgs` | `undefined` |
| `fields` | `ActionFields` | `'basic'` |
| `accessToken?` | `string` | `undefined` |

#### Returns

`Promise`<`Action`\>

#### Defined in

[packages/client/src/clients/notifications.client.ts:112](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/notifications.client.ts#L112)

___

### list

▸ **list**(`variables?`, `fields?`, `accessToken?`): `Promise`<`PaginatedNotification`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `variables` | `QueryNotificationsArgs` | `undefined` |
| `fields` | `NotificationFields` | `'basic'` |
| `accessToken?` | `string` | `undefined` |

#### Returns

`Promise`<`PaginatedNotification`\>

#### Defined in

[packages/client/src/clients/notifications.client.ts:56](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/notifications.client.ts#L56)

___

### memberPostNotificationSettings

▸ **memberPostNotificationSettings**(`variables`): `Promise`<`MemberPostNotificationSettings`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | `QueryMemberPostNotificationSettingsArgs` |

#### Returns

`Promise`<`MemberPostNotificationSettings`\>

#### Defined in

[packages/client/src/clients/notifications.client.ts:151](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/notifications.client.ts#L151)

___

### memberSettings

▸ **memberSettings**(`variables`): `Promise`<`MemberNotificationSettings`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | `QueryMemberNotificationSettingsArgs` |

#### Returns

`Promise`<`MemberNotificationSettings`\>

#### Defined in

[packages/client/src/clients/notifications.client.ts:138](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/notifications.client.ts#L138)

___

### readNotification

▸ **readNotification**(`variables`, `fields?`, `accessToken?`): `Promise`<`Action`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `variables` | `MutationReadNotificationArgs` | `undefined` |
| `fields` | `ActionFields` | `'basic'` |
| `accessToken?` | `string` | `undefined` |

#### Returns

`Promise`<`Action`\>

#### Defined in

[packages/client/src/clients/notifications.client.ts:70](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/notifications.client.ts#L70)

___

### readNotifications

▸ **readNotifications**(`variables`, `fields?`, `accessToken?`): `Promise`<`Action`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `variables` | `MutationReadNotificationsArgs` | `undefined` |
| `fields` | `ActionFields` | `'basic'` |
| `accessToken?` | `string` | `undefined` |

#### Returns

`Promise`<`Action`\>

#### Defined in

[packages/client/src/clients/notifications.client.ts:84](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/notifications.client.ts#L84)

___

### unsubscribe

▸ **unsubscribe**(`variables`, `fields?`, `accessToken?`): `Promise`<`Action`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `variables` | `MutationUnsubscribeFromNotificationArgs` | `undefined` |
| `fields` | `ActionFields` | `'basic'` |
| `accessToken?` | `string` | `undefined` |

#### Returns

`Promise`<`Action`\>

#### Defined in

[packages/client/src/clients/notifications.client.ts:203](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/notifications.client.ts#L203)

___

### updateMemberPostNotificationSettings

▸ **updateMemberPostNotificationSettings**(`variables`): `Promise`<`MemberPostNotificationSettings`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | `MutationUpdateMemberPostNotificationSettingsArgs` |

#### Returns

`Promise`<`MemberPostNotificationSettings`\>

#### Defined in

[packages/client/src/clients/notifications.client.ts:164](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/notifications.client.ts#L164)

___

### updateNetworkSettings

▸ **updateNetworkSettings**(`variables`): `Promise`<`MemberNetworkNotificationSettings`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | `MutationUpdateMemberNetworkNotificationSettingsArgs` |

#### Returns

`Promise`<`MemberNetworkNotificationSettings`\>

#### Defined in

[packages/client/src/clients/notifications.client.ts:190](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/notifications.client.ts#L190)

___

### updateSpaceSettings

▸ **updateSpaceSettings**(`variables`): `Promise`<`MemberSpaceNotificationSettings`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `variables` | `MutationUpdateMemberSpaceNotificationSettingsArgs` |

#### Returns

`Promise`<`MemberSpaceNotificationSettings`\>

#### Defined in

[packages/client/src/clients/notifications.client.ts:177](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/notifications.client.ts#L177)
