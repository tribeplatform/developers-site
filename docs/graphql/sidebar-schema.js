module.exports = {
  schemaSidebar: [
    { type: "doc", id: "graphql/schema" },
    {
      type: "category",
      label: "Queries",
      items: [
        "graphql/queries/access-group",
        "graphql/queries/access-groups",
        "graphql/queries/app",
        "graphql/queries/apps",
        "graphql/queries/auth-member",
        "graphql/queries/baskets",
        "graphql/queries/billing-details",
        "graphql/queries/cancel-subscription",
        "graphql/queries/collection",
        "graphql/queries/collections",
        "graphql/queries/domain-availability",
        "graphql/queries/email-availability",
        "graphql/queries/embed",
        "graphql/queries/explore-spaces",
        "graphql/queries/feed",
        "graphql/queries/get-app-network-settings",
        "graphql/queries/get-app-space-settings",
        "graphql/queries/get-app-widget",
        "graphql/queries/get-app-widgets",
        "graphql/queries/get-member-app-installations",
        "graphql/queries/get-network-app-installations",
        "graphql/queries/get-post-app-installations",
        "graphql/queries/get-space-app-installations",
        "graphql/queries/global-app",
        "graphql/queries/global-app-collaborators",
        "graphql/queries/global-app-publications",
        "graphql/queries/global-app-settings",
        "graphql/queries/global-app-widget",
        "graphql/queries/global-app-widgets",
        "graphql/queries/global-apps",
        "graphql/queries/global-embed",
        "graphql/queries/global-media",
        "graphql/queries/global-networks",
        "graphql/queries/global-token",
        "graphql/queries/invitation-link-validity",
        "graphql/queries/invoices",
        "graphql/queries/leaderboard",
        "graphql/queries/limited-token",
        "graphql/queries/login-network-with-global-token",
        "graphql/queries/login-support-with-sso-code",
        "graphql/queries/media",
        "graphql/queries/member",
        "graphql/queries/member-invitation",
        "graphql/queries/member-invitation-link",
        "graphql/queries/member-invitation-validity",
        "graphql/queries/member-invitations",
        "graphql/queries/member-notification-settings",
        "graphql/queries/member-post-notification-settings",
        "graphql/queries/member-posts",
        "graphql/queries/member-space-membership-request",
        "graphql/queries/member-spaces",
        "graphql/queries/members",
        "graphql/queries/moderation-item",
        "graphql/queries/moderation-item-reporters",
        "graphql/queries/moderation-items",
        "graphql/queries/moderation-settings",
        "graphql/queries/network",
        "graphql/queries/network-apps",
        "graphql/queries/network-public-info",
        "graphql/queries/networks",
        "graphql/queries/networks-members",
        "graphql/queries/new-domain-status",
        "graphql/queries/notifications",
        "graphql/queries/notifications-count",
        "graphql/queries/pages",
        "graphql/queries/password-complexity",
        "graphql/queries/permission",
        "graphql/queries/permissions",
        "graphql/queries/post",
        "graphql/queries/post-reaction-participants",
        "graphql/queries/post-type",
        "graphql/queries/post-types",
        "graphql/queries/posts",
        "graphql/queries/redirect",
        "graphql/queries/replies",
        "graphql/queries/report",
        "graphql/queries/roles",
        "graphql/queries/scopes",
        "graphql/queries/search",
        "graphql/queries/space",
        "graphql/queries/space-default-notification-settings",
        "graphql/queries/space-members",
        "graphql/queries/space-membership-requests",
        "graphql/queries/space-pinned-posts",
        "graphql/queries/space-post-type",
        "graphql/queries/space-post-types",
        "graphql/queries/space-roles",
        "graphql/queries/spaces",
        "graphql/queries/spaces-by-ids",
        "graphql/queries/sso-memberships",
        "graphql/queries/sso-url",
        "graphql/queries/ssos",
        "graphql/queries/subscription",
        "graphql/queries/support-network-tokens",
        "graphql/queries/support-sso-url",
        "graphql/queries/tag-posts",
        "graphql/queries/tags",
        "graphql/queries/tokens",
        "graphql/queries/username-availability",
        "graphql/queries/vat-types",
      ],
    },
    {
      type: "category",
      label: "Mutations",
      items: [
        "graphql/mutations/add-member-schema-field",
        "graphql/mutations/add-reaction",
        "graphql/mutations/add-space-members",
        "graphql/mutations/add-trial-plan",
        "graphql/mutations/approve-space-membership-request",
        "graphql/mutations/archive-member-schema-field",
        "graphql/mutations/cancel-email-update",
        "graphql/mutations/change-network-subscription-plan",
        "graphql/mutations/clear-new-domain",
        "graphql/mutations/clear-notifications-count",
        "graphql/mutations/confirm-reset-password",
        "graphql/mutations/create-access-group",
        "graphql/mutations/create-collection",
        "graphql/mutations/create-emojis",
        "graphql/mutations/create-files",
        "graphql/mutations/create-images",
        "graphql/mutations/create-migration-request",
        "graphql/mutations/create-network",
        "graphql/mutations/create-page",
        "graphql/mutations/create-permission",
        "graphql/mutations/create-post",
        "graphql/mutations/create-reply",
        "graphql/mutations/create-report",
        "graphql/mutations/create-space",
        "graphql/mutations/create-tag",
        "graphql/mutations/decline-space-membership-request",
        "graphql/mutations/delete-access-group",
        "graphql/mutations/delete-collection",
        "graphql/mutations/delete-member",
        "graphql/mutations/delete-network",
        "graphql/mutations/delete-notification",
        "graphql/mutations/delete-notifications",
        "graphql/mutations/delete-permission",
        "graphql/mutations/delete-post",
        "graphql/mutations/delete-space",
        "graphql/mutations/delete-sso-membership",
        "graphql/mutations/extend-current-trial",
        "graphql/mutations/global-add-app-collaborator",
        "graphql/mutations/global-create-app",
        "graphql/mutations/global-create-emojis",
        "graphql/mutations/global-create-images",
        "graphql/mutations/global-create-widget",
        "graphql/mutations/global-delete-app",
        "graphql/mutations/global-delete-app-setting",
        "graphql/mutations/global-delete-widget",
        "graphql/mutations/global-publish-app-privately",
        "graphql/mutations/global-regenerate-client-secret",
        "graphql/mutations/global-remove-app-collaborator",
        "graphql/mutations/global-test-app-webhook",
        "graphql/mutations/global-un-publish-app-privately",
        "graphql/mutations/global-update-app",
        "graphql/mutations/global-update-app-setting",
        "graphql/mutations/global-update-widget",
        "graphql/mutations/hide-post",
        "graphql/mutations/impersonate-login-to-network",
        "graphql/mutations/install-app",
        "graphql/mutations/invite-members",
        "graphql/mutations/join-network",
        "graphql/mutations/join-network-with-invitation-link",
        "graphql/mutations/join-network-with-token",
        "graphql/mutations/join-space",
        "graphql/mutations/leave-space",
        "graphql/mutations/login-network",
        "graphql/mutations/login-network-with-password",
        "graphql/mutations/login-with-sso-code",
        "graphql/mutations/logout-network",
        "graphql/mutations/organize-collections",
        "graphql/mutations/organize-spaces-in-collection",
        "graphql/mutations/pin-post-to-space",
        "graphql/mutations/pin-reply-to-post",
        "graphql/mutations/purchase",
        "graphql/mutations/read-notification",
        "graphql/mutations/read-notifications",
        "graphql/mutations/remove-reaction",
        "graphql/mutations/remove-space-members",
        "graphql/mutations/request-global-token-code",
        "graphql/mutations/request-space-membership",
        "graphql/mutations/resend-global-token-code",
        "graphql/mutations/resend-verification",
        "graphql/mutations/send-reset-password-email",
        "graphql/mutations/transfer-to-new-domain",
        "graphql/mutations/un-archive-member-schema-field",
        "graphql/mutations/unhide-post",
        "graphql/mutations/uninstall-app",
        "graphql/mutations/unpin-post-from-space",
        "graphql/mutations/unpin-reply-from-post",
        "graphql/mutations/unsubscribe-from-notification",
        "graphql/mutations/update-access-group",
        "graphql/mutations/update-app-installation",
        "graphql/mutations/update-app-network-settings",
        "graphql/mutations/update-app-space-setting",
        "graphql/mutations/update-billing-details",
        "graphql/mutations/update-collection",
        "graphql/mutations/update-custom-sso",
        "graphql/mutations/update-default-sso-status",
        "graphql/mutations/update-file",
        "graphql/mutations/update-image",
        "graphql/mutations/update-member",
        "graphql/mutations/update-member-network-notification-settings",
        "graphql/mutations/update-member-post-notification-settings",
        "graphql/mutations/update-member-schema-field",
        "graphql/mutations/update-member-space-notification-settings",
        "graphql/mutations/update-member-space-role",
        "graphql/mutations/update-moderation-item",
        "graphql/mutations/update-moderation-settings",
        "graphql/mutations/update-network",
        "graphql/mutations/update-network-custom-capacities",
        "graphql/mutations/update-network-status",
        "graphql/mutations/update-new-domain",
        "graphql/mutations/update-page",
        "graphql/mutations/update-password-with-token",
        "graphql/mutations/update-permission",
        "graphql/mutations/update-post",
        "graphql/mutations/update-slates",
        "graphql/mutations/update-space",
        "graphql/mutations/update-space-default-notification-settings",
        "graphql/mutations/update-space-highlighted-tags",
        "graphql/mutations/update-space-post-types",
        "graphql/mutations/update-space-tag-filter",
        "graphql/mutations/update-tag",
        "graphql/mutations/upload-migration-files",
        "graphql/mutations/upsert-theme",
        "graphql/mutations/verify-member",
      ],
    },
    {
      type: "category",
      label: "Subscriptions",
      items: [
        "graphql/subscriptions/created-at",
        "graphql/subscriptions/id",
        "graphql/subscriptions/status",
        "graphql/subscriptions/updated-at",
      ],
    },
    {
      type: "category",
      label: "Directives",
      items: [
        "graphql/directives/deprecated",
        "graphql/directives/include",
        "graphql/directives/skip",
        "graphql/directives/specified-by",
      ],
    },
    {
      type: "category",
      label: "Objects",
      items: [
        "graphql/objects/access-group",
        "graphql/objects/action",
        "graphql/objects/action-permissions",
        "graphql/objects/active-sso",
        "graphql/objects/app",
        "graphql/objects/app-action",
        "graphql/objects/app-collaborator",
        "graphql/objects/app-custom-codes",
        "graphql/objects/app-edge",
        "graphql/objects/app-installation",
        "graphql/objects/app-installation-edge",
        "graphql/objects/app-publication",
        "graphql/objects/app-setting",
        "graphql/objects/app-token",
        "graphql/objects/auth-info-with-otp",
        "graphql/objects/auth-token",
        "graphql/objects/auth-token-with-otp",
        "graphql/objects/base-custom-field-schema",
        "graphql/objects/basket",
        "graphql/objects/basket-item",
        "graphql/objects/billing-address",
        "graphql/objects/billing-details",
        "graphql/objects/card-public-information",
        "graphql/objects/chart-data",
        "graphql/objects/collection",
        "graphql/objects/collection-edge",
        "graphql/objects/context-permissions",
        "graphql/objects/context-scopes",
        "graphql/objects/custom-code",
        "graphql/objects/custom-field",
        "graphql/objects/custom-field-privacy",
        "graphql/objects/custom-field-schema",
        "graphql/objects/custom-field-settings",
        "graphql/objects/custom-field-type-options",
        "graphql/objects/custom-field-validator",
        "graphql/objects/custom-fields",
        "graphql/objects/custom-fields-schema",
        "graphql/objects/domain-availability",
        "graphql/objects/domain-transfer-status",
        "graphql/objects/email-availability",
        "graphql/objects/embed",
        "graphql/objects/emoji",
        "graphql/objects/entity-permissions",
        "graphql/objects/entity-report",
        "graphql/objects/entity-scopes",
        "graphql/objects/file",
        "graphql/objects/footer",
        "graphql/objects/footer-url",
        "graphql/objects/global-token",
        "graphql/objects/highlighted-tag",
        "graphql/objects/image",
        "graphql/objects/import-request",
        "graphql/objects/input-path-permissions",
        "graphql/objects/int-value",
        "graphql/objects/invoice",
        "graphql/objects/is-authorized",
        "graphql/objects/media-urls",
        "graphql/objects/member",
        "graphql/objects/member-attributes",
        "graphql/objects/member-auth-member-props",
        "graphql/objects/member-edge",
        "graphql/objects/member-invitation",
        "graphql/objects/member-invitation-edge",
        "graphql/objects/member-invitation-link",
        "graphql/objects/member-network-notification-settings",
        "graphql/objects/member-notification-settings",
        "graphql/objects/member-post-notification-settings",
        "graphql/objects/member-session",
        "graphql/objects/member-space-notification-settings",
        "graphql/objects/moderation-item",
        "graphql/objects/moderation-item-edge",
        "graphql/objects/moderation-item-reporter",
        "graphql/objects/moderation-item-reporter-edge",
        "graphql/objects/moderation-settings",
        "graphql/objects/navigation-item",
        "graphql/objects/navigation-slates",
        "graphql/objects/network",
        "graphql/objects/network-auth-member-props",
        "graphql/objects/network-public-info",
        "graphql/objects/network-settings",
        "graphql/objects/new-theme",
        "graphql/objects/notification",
        "graphql/objects/notification-edge",
        "graphql/objects/notification-meta",
        "graphql/objects/notifications-count",
        "graphql/objects/page",
        "graphql/objects/page-address",
        "graphql/objects/page-info",
        "graphql/objects/page-seo",
        "graphql/objects/paginated-app",
        "graphql/objects/paginated-app-installation",
        "graphql/objects/paginated-member",
        "graphql/objects/paginated-member-invitation",
        "graphql/objects/paginated-moderation",
        "graphql/objects/paginated-moderation-item-reporter",
        "graphql/objects/paginated-network",
        "graphql/objects/paginated-notification",
        "graphql/objects/paginated-plural-member",
        "graphql/objects/paginated-post",
        "graphql/objects/paginated-post-reaction-participant",
        "graphql/objects/paginated-post-type",
        "graphql/objects/paginated-space",
        "graphql/objects/paginated-space-member",
        "graphql/objects/paginated-space-post-type",
        "graphql/objects/paginated-tag",
        "graphql/objects/paginated-widget",
        "graphql/objects/password-complexity",
        "graphql/objects/path-permissions",
        "graphql/objects/payload",
        "graphql/objects/permission",
        "graphql/objects/permissions",
        "graphql/objects/plan",
        "graphql/objects/plural-member",
        "graphql/objects/plural-member-edge",
        "graphql/objects/plural-network",
        "graphql/objects/plural-network-edge",
        "graphql/objects/post",
        "graphql/objects/post-auth-member-props",
        "graphql/objects/post-edge",
        "graphql/objects/post-mapping-field",
        "graphql/objects/post-reaction-detail",
        "graphql/objects/post-reaction-participant",
        "graphql/objects/post-reaction-participant-edge",
        "graphql/objects/post-seo-detail",
        "graphql/objects/post-top-replier",
        "graphql/objects/post-type",
        "graphql/objects/post-type-edge",
        "graphql/objects/post-type-mapping",
        "graphql/objects/price",
        "graphql/objects/redirect",
        "graphql/objects/report",
        "graphql/objects/report-data",
        "graphql/objects/role",
        "graphql/objects/scopes",
        "graphql/objects/search-entity",
        "graphql/objects/search-entity-group",
        "graphql/objects/search-result",
        "graphql/objects/signed-url",
        "graphql/objects/slate",
        "graphql/objects/slate-component",
        "graphql/objects/slate-placeholder",
        "graphql/objects/space",
        "graphql/objects/space-auth-member-props",
        "graphql/objects/space-default-notification-settings",
        "graphql/objects/space-edge",
        "graphql/objects/space-join-request",
        "graphql/objects/space-member",
        "graphql/objects/space-member-edge",
        "graphql/objects/space-post-type",
        "graphql/objects/space-post-type-edge",
        "graphql/objects/space-role",
        "graphql/objects/space-seo-detail",
        "graphql/objects/sso",
        "graphql/objects/sso-membership",
        "graphql/objects/sso-url",
        "graphql/objects/status-reason",
        "graphql/objects/string-value",
        "graphql/objects/support-auth-token",
        "graphql/objects/support-limited-auth-token",
        "graphql/objects/support-sso-url",
        "graphql/objects/subscription",
        "graphql/objects/tag",
        "graphql/objects/tag-edge",
        "graphql/objects/tag-filter",
        "graphql/objects/theme",
        "graphql/objects/theme-color",
        "graphql/objects/theme-colors",
        "graphql/objects/theme-token",
        "graphql/objects/theme-tokens",
        "graphql/objects/themes",
        "graphql/objects/top-navigation",
        "graphql/objects/upload-collection-error",
        "graphql/objects/upload-collection-response",
        "graphql/objects/upload-collections-response",
        "graphql/objects/username-availability",
        "graphql/objects/value-permissions",
        "graphql/objects/vat",
        "graphql/objects/vat-type-info",
        "graphql/objects/widget",
        "graphql/objects/widget-edge",
      ],
    },
    {
      type: "category",
      label: "Unions",
      items: [
        "graphql/unions/by",
        "graphql/unions/in",
        "graphql/unions/media",
        "graphql/unions/moderation-item-entity",
        "graphql/unions/report-data-value",
        "graphql/unions/reportable-entity",
        "graphql/unions/slate-component-or-placeholder",
      ],
    },
    {
      type: "category",
      label: "Enums",
      items: [
        "graphql/enums/access-group-entity-type",
        "graphql/enums/action-status",
        "graphql/enums/app-collaborator-type",
        "graphql/enums/app-installation-status",
        "graphql/enums/collection-list-order-by-enum",
        "graphql/enums/custom-code-position",
        "graphql/enums/custom-field-privacy-options",
        "graphql/enums/custom-field-type",
        "graphql/enums/custom-field-validators",
        "graphql/enums/custom-sso-type",
        "graphql/enums/date-type-options",
        "graphql/enums/default-sso-type",
        "graphql/enums/filtername",
        "graphql/enums/flagged-type",
        "graphql/enums/highlighted-tag-type",
        "graphql/enums/import-request-stage",
        "graphql/enums/import-request-status",
        "graphql/enums/invoice-status",
        "graphql/enums/member-email-status",
        "graphql/enums/member-invitation-status",
        "graphql/enums/member-list-order-by-enum",
        "graphql/enums/member-status",
        "graphql/enums/member-status-input",
        "graphql/enums/moderation-entity-type",
        "graphql/enums/moderation-status",
        "graphql/enums/navigation-item-type",
        "graphql/enums/network-industry-type",
        "graphql/enums/network-landing-page",
        "graphql/enums/network-membership",
        "graphql/enums/network-primary-members-type",
        "graphql/enums/network-status",
        "graphql/enums/network-status-changed-by",
        "graphql/enums/network-status-reason",
        "graphql/enums/network-timeframe-type",
        "graphql/enums/network-visibility",
        "graphql/enums/notification-channel",
        "graphql/enums/notification-reason",
        "graphql/enums/notification-verb",
        "graphql/enums/number-type-options",
        "graphql/enums/page-type",
        "graphql/enums/payload-type",
        "graphql/enums/permission-context",
        "graphql/enums/pinned-into",
        "graphql/enums/plan-name",
        "graphql/enums/plan-renewal-type",
        "graphql/enums/post-fields-enum",
        "graphql/enums/post-list-filter-by-enum",
        "graphql/enums/post-list-filter-by-operator",
        "graphql/enums/post-list-order-by-enum",
        "graphql/enums/post-mapping-type-enum",
        "graphql/enums/post-status",
        "graphql/enums/post-type-context",
        "graphql/enums/primary-scopes",
        "graphql/enums/reaction-type",
        "graphql/enums/relation-type-options",
        "graphql/enums/report-category",
        "graphql/enums/report-data-type",
        "graphql/enums/report-slug",
        "graphql/enums/report-time-frame",
        "graphql/enums/reportable-entity-type",
        "graphql/enums/rich-text-type-options",
        "graphql/enums/role-list-order-by-enum",
        "graphql/enums/role-type",
        "graphql/enums/search-entity-type",
        "graphql/enums/slate-editable",
        "graphql/enums/sort-order",
        "graphql/enums/space-join-request-status",
        "graphql/enums/space-list-order-by-enum",
        "graphql/enums/space-member-list-order-by-enum",
        "graphql/enums/space-membership-status",
        "graphql/enums/space-notification-preference",
        "graphql/enums/space-role-list-order-by-enum",
        "graphql/enums/space-role-type",
        "graphql/enums/sso-provider",
        "graphql/enums/sso-status",
        "graphql/enums/sso-type",
        "graphql/enums/store-item-standing",
        "graphql/enums/store-item-status",
        "graphql/enums/subscription-status",
        "graphql/enums/tag-filter-type",
        "graphql/enums/tag-list-order-by-enum",
        "graphql/enums/text-type-options",
        "graphql/enums/theme-status",
        "graphql/enums/top-navigation-alignment",
        "graphql/enums/unauthorized-reason",
        "graphql/enums/unsubscribe-token-context",
        "graphql/enums/vat-type",
        "graphql/enums/widget-contexts",
        "graphql/enums/widget-positions",
      ],
    },
    {
      type: "category",
      label: "Inputs",
      items: [
        "graphql/inputs/add-app-collaborator-input",
        "graphql/inputs/add-medias-input",
        "graphql/inputs/add-network-input",
        "graphql/inputs/add-reaction-input",
        "graphql/inputs/add-space-member-input",
        "graphql/inputs/add-trial-input",
        "graphql/inputs/base-custom-field-schema-input",
        "graphql/inputs/base-filter-input",
        "graphql/inputs/baskets-input",
        "graphql/inputs/billing-address-input",
        "graphql/inputs/billing-details-input",
        "graphql/inputs/card-input",
        "graphql/inputs/column-sort-input",
        "graphql/inputs/confirm-reset-password-input",
        "graphql/inputs/create-access-group-input",
        "graphql/inputs/create-app-input",
        "graphql/inputs/create-collection-input",
        "graphql/inputs/create-emoji-input",
        "graphql/inputs/create-file-input",
        "graphql/inputs/create-highlighted-tag",
        "graphql/inputs/create-image-input",
        "graphql/inputs/create-limited-support-token-input",
        "graphql/inputs/create-page-input",
        "graphql/inputs/create-permission-input",
        "graphql/inputs/create-post-input",
        "graphql/inputs/create-report-input",
        "graphql/inputs/create-space-input",
        "graphql/inputs/create-tag-input",
        "graphql/inputs/create-widget-input",
        "graphql/inputs/custom-field-input",
        "graphql/inputs/custom-field-privacy-input",
        "graphql/inputs/custom-field-schema-input",
        "graphql/inputs/custom-field-settings-input",
        "graphql/inputs/custom-field-type-options-input",
        "graphql/inputs/custom-field-validator-input",
        "graphql/inputs/custom-fields-input",
        "graphql/inputs/domain-availability-input",
        "graphql/inputs/embed-input",
        "graphql/inputs/filters-input",
        "graphql/inputs/global-token-input",
        "graphql/inputs/impersonate-login-to-network-input",
        "graphql/inputs/install-app-input",
        "graphql/inputs/invite-members-input",
        "graphql/inputs/invitee-input",
        "graphql/inputs/join-network-input",
        "graphql/inputs/join-network-with-link-input",
        "graphql/inputs/join-network-with-token-input",
        "graphql/inputs/login-network-with-global-token-input",
        "graphql/inputs/login-network-with-password-input",
        "graphql/inputs/login-support-with-sso-code-input",
        "graphql/inputs/login-with-sso-code-input",
        "graphql/inputs/logout-network-input",
        "graphql/inputs/page-address-input",
        "graphql/inputs/page-seo-input",
        "graphql/inputs/permissions-context-input",
        "graphql/inputs/post-list-filter-by-input",
        "graphql/inputs/post-mapping-field-input",
        "graphql/inputs/purchase-input",
        "graphql/inputs/report-input",
        "graphql/inputs/request-global-token-input",
        "graphql/inputs/reset-password-input",
        "graphql/inputs/search-input",
        "graphql/inputs/slate-component-input",
        "graphql/inputs/slate-input",
        "graphql/inputs/sso-url-input",
        "graphql/inputs/subscription-input",
        "graphql/inputs/support-sso-url-input",
        "graphql/inputs/test-app-webhook-input",
        "graphql/inputs/unsubscribe-with-token-input",
        "graphql/inputs/update-access-group-input",
        "graphql/inputs/update-app-custom-codes",
        "graphql/inputs/update-app-input",
        "graphql/inputs/update-app-installation-input",
        "graphql/inputs/update-collection-input",
        "graphql/inputs/update-custom-field-schema-input",
        "graphql/inputs/update-custom-sso-input",
        "graphql/inputs/update-file-input",
        "graphql/inputs/update-footer",
        "graphql/inputs/update-footer-url",
        "graphql/inputs/update-highlighted-tags",
        "graphql/inputs/update-image-input",
        "graphql/inputs/update-member-attributes-input",
        "graphql/inputs/update-member-input",
        "graphql/inputs/update-member-network-notification-settings-input",
        "graphql/inputs/update-member-network-notification-settings-options-input",
        "graphql/inputs/update-member-post-notification-settings-input",
        "graphql/inputs/update-member-space-notification-settings-input",
        "graphql/inputs/update-moderation-item-input",
        "graphql/inputs/update-moderation-settings-input",
        "graphql/inputs/update-navigation-item",
        "graphql/inputs/update-network-input",
        "graphql/inputs/update-network-settings-input",
        "graphql/inputs/update-network-status-input",
        "graphql/inputs/update-new-domain-input",
        "graphql/inputs/update-page-input",
        "graphql/inputs/update-password-with-token-input",
        "graphql/inputs/update-permission-input",
        "graphql/inputs/update-post-input",
        "graphql/inputs/update-post-seo-detail-input",
        "graphql/inputs/update-slate-input",
        "graphql/inputs/update-space-default-notification-settings-input",
        "graphql/inputs/update-space-input",
        "graphql/inputs/update-space-member-role-input",
        "graphql/inputs/update-space-post-type-input",
        "graphql/inputs/update-space-seo-detail-input",
        "graphql/inputs/update-tag-filter",
        "graphql/inputs/update-tag-input",
        "graphql/inputs/update-theme",
        "graphql/inputs/update-theme-color",
        "graphql/inputs/update-theme-colors",
        "graphql/inputs/update-theme-token",
        "graphql/inputs/update-theme-tokens",
        "graphql/inputs/update-themes",
        "graphql/inputs/update-top-navigation",
        "graphql/inputs/update-widget-input",
        "graphql/inputs/upsert-theme",
        "graphql/inputs/vat-input",
        "graphql/inputs/verify-member-input",
      ],
    },
    {
      type: "category",
      label: "Scalars",
      items: [
        "graphql/scalars/boolean",
        "graphql/scalars/date-time",
        "graphql/scalars/float",
        "graphql/scalars/id",
        "graphql/scalars/int",
        "graphql/scalars/string",
        "graphql/scalars/upload",
      ],
    },
  ],
};
