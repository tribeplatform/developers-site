module.exports = {
    files: [
        {
            name: 'client.TribeClient.md',
            rename: 'TribeClient.md',
            sideBarPosition: 1,
        },
        {
            name: 'clients.AppClient.md',
            rename: 'AppClient.md',
        },
        {
            name: 'clients.AuthClient.md',
            rename: 'AuthClient.md',
        },
        {
            name: 'clients.BillingClient.md',
            rename: 'BillingClient.md',
        },
        {
            name: 'clients.CollectionsClient.md',
            rename: 'CollectionsClient.md',
        },
        {
            name: 'clients.DevClient.md',
            rename: 'DevClient.md',
        },
        {
            name: 'clients.GraphqlClient.md',
            rename: 'GraphqlClient.md',
        },
        {
            name: 'clients.InvitationsClient.md',
            rename: 'InvitationsClient.md',
        },
        {
            name: 'clients.MediaClient.md',
            rename: 'MediaClient.md',
        },
        {
            name: 'clients.MembersClient.md',
            rename: 'MembersClient.md',
        },
        {
            name: 'clients.ModerationClient.md',
            rename: 'ModerationClient.md',
        },
        {
            name: 'clients.NetworkClient.md',
            rename: 'NetworkClient.md',
        },
        {
            name: 'clients.NotificationsClient.md',
            rename: 'NotificationsClient.md',
        },
        {
            name: 'clients.PagesClient.md',
            rename: 'PagesClient.md',
        },
        {
            name: 'clients.PostsClient.md',
            rename: 'PostsClient.md',
        },
        {
            name: 'clients.ReportClient.md',
            rename: 'ReportClient.md',
        },
        {
            name: 'clients.RolesClient.md',
            rename: 'RolesClient.md',
        },
        {
            name: 'clients.SlatesClient.md',
            rename: 'SlatesClient.md',
        },
        {
            name: 'clients.SpaceMembersClient.md',
            rename: 'SpaceMembersClient.md',
        },
        {
            name: 'clients.SpaceMembershipClient.md',
            rename: 'SpaceMembershipClient.md',
        },
        {
            name: 'clients.SpacePostTypeClient.md',
            rename: 'SpacePostTypeClient.md',
        },
        {
            name: 'clients.SpaceRolesClient.md',
            rename: 'SpaceRolesClient.md',
        },
        {
            name: 'clients.SpacesClient.md',
            rename: 'SpacesClient.md',
        },
        {
            name: 'clients.TagsClient.md',
            rename: 'TagsClient.md',
        },
        {
            name: 'clients.ThemeClient.md',
            rename: 'ThemeClient.md',
        },
        {
            name: 'modules.md',
            rename: 'index.md',
            sideBarPosition: 2,
            prepend: '# Index\n\n',
            replace: [
                {
                    find: '[client]',
                    replace: '[TribeClient]',
                },
                {
                    find: '[clients]',
                    replace: '[Clients]',
                }
            ]
        },
        {
            name: 'README.md',
            rename: 'getting-started.md',
            sideBarPosition: 1,
            replace: [
                {
                    find: '@tribeplatform/gql-client / [Modules](modules.md)\n\n# Tribe GraphQL Client',
                    replace: '# Getting Started'
                }
            ]
        },
        {
            name: 'client.md',
            prepend: '# TribeClient\n\n',
            replace: [
                {
                    find: '# Module: client\n\n',
                    replace: '',
                }
            ]
        },
        {
            name: 'clients.md',
            prepend: '# Clients\n\n',
            replace: [
                {
                    find: '# Module: clients\n\n',
                    replace: '',
                }
            ]
        }
    ],
    categoryJsons: [
        {
            label: 'Clients',
            position: 3,
            dir: 'classes',
        },
        {
            label: 'Modules',
            position: 4,
            dir: 'modules',
        },
        {
            label: 'GraphQL Client',
            position: 4,
            dir: '',
        }
    ]
}