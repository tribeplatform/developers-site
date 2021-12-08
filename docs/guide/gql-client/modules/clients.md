# Clients

[@tribeplatform/gql-client](../getting-started) / [Modules](../index) / clients

## Table of contents

### Classes

- [AppClient](../classes/AppClient)
- [AuthClient](../classes/AuthClient)
- [BillingClient](../classes/BillingClient)
- [CollectionsClient](../classes/CollectionsClient)
- [DevClient](../classes/DevClient)
- [GraphqlClient](../classes/GraphqlClient)
- [InvitationsClient](../classes/InvitationsClient)
- [MediaClient](../classes/MediaClient)
- [MembersClient](../classes/MembersClient)
- [ModerationClient](../classes/ModerationClient)
- [NetworkClient](../classes/NetworkClient)
- [NotificationsClient](../classes/NotificationsClient)
- [PagesClient](../classes/PagesClient)
- [PostsClient](../classes/PostsClient)
- [ReportClient](../classes/ReportClient)
- [RolesClient](../classes/RolesClient)
- [SlatesClient](../classes/SlatesClient)
- [SpaceMembersClient](../classes/SpaceMembersClient)
- [SpaceMembershipClient](../classes/SpaceMembershipClient)
- [SpacePostTypeClient](../classes/SpacePostTypeClient)
- [SpaceRolesClient](../classes/SpaceRolesClient)
- [SpacesClient](../classes/SpacesClient)
- [TagsClient](../classes/TagsClient)
- [ThemeClient](../classes/ThemeClient)

### Type aliases

- [TribeClientOptions](clients#tribeclientoptions)

## Type aliases

### TribeClientOptions

Ƭ **TribeClientOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `accessToken?` | `string` |
| `clientId?` | `string` |
| `clientSecret?` | `string` |
| `graphqlUrl?` | `string` |
| `notifyOnTokenExpiration?` | `boolean` |
| `onError?` | (`errors`: `ErrorResponse`[], `client`: [`GraphqlClient`](../classes/clients.GraphqlClient)) => `void` |

#### Defined in

[packages/client/src/clients/graphql.client.ts:12](https://gitlab.com/tribeplatform/tribe-neo/-/blob/master/packages/client/src/clients/graphql.client.ts#L12)
