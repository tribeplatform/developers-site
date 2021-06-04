(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[21372],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function _(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?_(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},_=Object.keys(e);for(r=0;r<_.length;r++)t=_[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var _=Object.getOwnPropertySymbols(e);for(r=0;r<_.length;r++)t=_[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),E=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=E(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,_=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=E(t),m=a,A=d["".concat(l,".").concat(m)]||d[m]||p[m]||_;return t?r.createElement(A,i(i({ref:n},s),{},{components:t})):r.createElement(A,i({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var _=t.length,i=new Array(_);i[0]=d;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var E=2;E<_;E++)i[E]=t[E];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},29087:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return E},default:function(){return p}});var r=t(22122),a=t(19756),_=(t(67294),t(3905)),i=["components"],o={id:"available-network-context-permissions",title:"AvailableNetworkContextPermissions"},l={unversionedId:"graphql/enums/available-network-context-permissions",id:"graphql/enums/available-network-context-permissions",isDocsHomePage:!1,title:"AvailableNetworkContextPermissions",description:"No description",source:"@site/docs/graphql/enums/available-network-context-permissions.mdx",sourceDirName:"graphql/enums",slug:"/graphql/enums/available-network-context-permissions",permalink:"/docs/graphql/enums/available-network-context-permissions",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/graphql/enums/available-network-context-permissions.mdx",version:"current",frontMatter:{id:"available-network-context-permissions",title:"AvailableNetworkContextPermissions"},sidebar:"schemaSidebar",previous:{title:"AvailableMemberContextPermissions",permalink:"/docs/graphql/enums/available-member-context-permissions"},next:{title:"AvailablePostContextPermissions",permalink:"/docs/graphql/enums/available-post-context-permissions"}},E=[{value:"Values",id:"values",children:[]}],s={toc:E};function p(e){var n=e.components,t=(0,a.Z)(e,i);return(0,_.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,_.kt)("p",null,"No description"),(0,_.kt)("pre",null,(0,_.kt)("code",{parentName:"pre",className:"language-graphql"},"enum AvailableNetworkContextPermissions {\n  ADD_MEDIA\n  ADD_MEMBER_TO_ANY_SPACE\n  ADD_POST_TO_ANY_SPACE\n  ADD_SPACE\n  ADD_SPACE_GROUP\n  ADD_SPACE_TYPE\n  INJECT_CUSTOM_SCRIPT\n  INVITE_TO_NETWORK\n  NOTIFY_ANY_MEMBER\n  READ_ALL_NOTIFICATIONS\n  REMOVE_ALL_MEDIAS\n  REMOVE_ALL_POSTS\n  REMOVE_ALL_SPACE_GROUPS\n  REMOVE_ALL_SPACE_TYPES\n  REMOVE_ALL_SPACES\n  REMOVE_MEMBER_FROM_ANY_SPACE\n  REMOVE_MEMBER_FROM_NETWORK\n  UPDATE_ALL_NETWORK_MEMBERS\n  UPDATE_ALL_NETWORK_MEMBERS_ROLES\n  UPDATE_ALL_POSTS\n  UPDATE_ALL_SPACE_GROUPS\n  UPDATE_ALL_SPACE_MEMBERS_ROLES\n  UPDATE_ALL_SPACE_TYPES\n  UPDATE_ALL_SPACES\n  UPDATE_DEFAULT_SPACES\n  UPDATE_NETWORK\n  UPDATE_NETWORK_STATUS\n  VIEW_ALL_MEDIAS\n  VIEW_ALL_NETWORK_MEMBERS\n  VIEW_ALL_NETWORK_ROLES\n  VIEW_ALL_NETWORKS\n  VIEW_ALL_POSTS\n  VIEW_ALL_SPACE_GROUPS\n  VIEW_ALL_SPACE_MEMBERS\n  VIEW_ALL_SPACE_TYPES\n  VIEW_ALL_SPACES\n  VIEW_NETWORK\n}\n")),(0,_.kt)("h3",{id:"values"},"Values"),(0,_.kt)("h4",{id:"add_media"},(0,_.kt)("inlineCode",{parentName:"h4"},"ADD_MEDIA")),(0,_.kt)("h4",{id:"add_member_to_any_space"},(0,_.kt)("inlineCode",{parentName:"h4"},"ADD_MEMBER_TO_ANY_SPACE")),(0,_.kt)("h4",{id:"add_post_to_any_space"},(0,_.kt)("inlineCode",{parentName:"h4"},"ADD_POST_TO_ANY_SPACE")),(0,_.kt)("h4",{id:"add_space"},(0,_.kt)("inlineCode",{parentName:"h4"},"ADD_SPACE")),(0,_.kt)("h4",{id:"add_space_group"},(0,_.kt)("inlineCode",{parentName:"h4"},"ADD_SPACE_GROUP")),(0,_.kt)("h4",{id:"add_space_type"},(0,_.kt)("inlineCode",{parentName:"h4"},"ADD_SPACE_TYPE")),(0,_.kt)("h4",{id:"inject_custom_script"},(0,_.kt)("inlineCode",{parentName:"h4"},"INJECT_CUSTOM_SCRIPT")),(0,_.kt)("h4",{id:"invite_to_network"},(0,_.kt)("inlineCode",{parentName:"h4"},"INVITE_TO_NETWORK")),(0,_.kt)("h4",{id:"notify_any_member"},(0,_.kt)("inlineCode",{parentName:"h4"},"NOTIFY_ANY_MEMBER")),(0,_.kt)("h4",{id:"read_all_notifications"},(0,_.kt)("inlineCode",{parentName:"h4"},"READ_ALL_NOTIFICATIONS")),(0,_.kt)("h4",{id:"remove_all_medias"},(0,_.kt)("inlineCode",{parentName:"h4"},"REMOVE_ALL_MEDIAS")),(0,_.kt)("h4",{id:"remove_all_posts"},(0,_.kt)("inlineCode",{parentName:"h4"},"REMOVE_ALL_POSTS")),(0,_.kt)("h4",{id:"remove_all_space_groups"},(0,_.kt)("inlineCode",{parentName:"h4"},"REMOVE_ALL_SPACE_GROUPS")),(0,_.kt)("h4",{id:"remove_all_space_types"},(0,_.kt)("inlineCode",{parentName:"h4"},"REMOVE_ALL_SPACE_TYPES")),(0,_.kt)("h4",{id:"remove_all_spaces"},(0,_.kt)("inlineCode",{parentName:"h4"},"REMOVE_ALL_SPACES")),(0,_.kt)("h4",{id:"remove_member_from_any_space"},(0,_.kt)("inlineCode",{parentName:"h4"},"REMOVE_MEMBER_FROM_ANY_SPACE")),(0,_.kt)("h4",{id:"remove_member_from_network"},(0,_.kt)("inlineCode",{parentName:"h4"},"REMOVE_MEMBER_FROM_NETWORK")),(0,_.kt)("h4",{id:"update_all_network_members"},(0,_.kt)("inlineCode",{parentName:"h4"},"UPDATE_ALL_NETWORK_MEMBERS")),(0,_.kt)("h4",{id:"update_all_network_members_roles"},(0,_.kt)("inlineCode",{parentName:"h4"},"UPDATE_ALL_NETWORK_MEMBERS_ROLES")),(0,_.kt)("h4",{id:"update_all_posts"},(0,_.kt)("inlineCode",{parentName:"h4"},"UPDATE_ALL_POSTS")),(0,_.kt)("h4",{id:"update_all_space_groups"},(0,_.kt)("inlineCode",{parentName:"h4"},"UPDATE_ALL_SPACE_GROUPS")),(0,_.kt)("h4",{id:"update_all_space_members_roles"},(0,_.kt)("inlineCode",{parentName:"h4"},"UPDATE_ALL_SPACE_MEMBERS_ROLES")),(0,_.kt)("h4",{id:"update_all_space_types"},(0,_.kt)("inlineCode",{parentName:"h4"},"UPDATE_ALL_SPACE_TYPES")),(0,_.kt)("h4",{id:"update_all_spaces"},(0,_.kt)("inlineCode",{parentName:"h4"},"UPDATE_ALL_SPACES")),(0,_.kt)("h4",{id:"update_default_spaces"},(0,_.kt)("inlineCode",{parentName:"h4"},"UPDATE_DEFAULT_SPACES")),(0,_.kt)("h4",{id:"update_network"},(0,_.kt)("inlineCode",{parentName:"h4"},"UPDATE_NETWORK")),(0,_.kt)("h4",{id:"update_network_status"},(0,_.kt)("inlineCode",{parentName:"h4"},"UPDATE_NETWORK_STATUS")),(0,_.kt)("h4",{id:"view_all_medias"},(0,_.kt)("inlineCode",{parentName:"h4"},"VIEW_ALL_MEDIAS")),(0,_.kt)("h4",{id:"view_all_network_members"},(0,_.kt)("inlineCode",{parentName:"h4"},"VIEW_ALL_NETWORK_MEMBERS")),(0,_.kt)("h4",{id:"view_all_network_roles"},(0,_.kt)("inlineCode",{parentName:"h4"},"VIEW_ALL_NETWORK_ROLES")),(0,_.kt)("h4",{id:"view_all_networks"},(0,_.kt)("inlineCode",{parentName:"h4"},"VIEW_ALL_NETWORKS")),(0,_.kt)("h4",{id:"view_all_posts"},(0,_.kt)("inlineCode",{parentName:"h4"},"VIEW_ALL_POSTS")),(0,_.kt)("h4",{id:"view_all_space_groups"},(0,_.kt)("inlineCode",{parentName:"h4"},"VIEW_ALL_SPACE_GROUPS")),(0,_.kt)("h4",{id:"view_all_space_members"},(0,_.kt)("inlineCode",{parentName:"h4"},"VIEW_ALL_SPACE_MEMBERS")),(0,_.kt)("h4",{id:"view_all_space_types"},(0,_.kt)("inlineCode",{parentName:"h4"},"VIEW_ALL_SPACE_TYPES")),(0,_.kt)("h4",{id:"view_all_spaces"},(0,_.kt)("inlineCode",{parentName:"h4"},"VIEW_ALL_SPACES")),(0,_.kt)("h4",{id:"view_network"},(0,_.kt)("inlineCode",{parentName:"h4"},"VIEW_NETWORK")))}p.isMDXComponent=!0}}]);