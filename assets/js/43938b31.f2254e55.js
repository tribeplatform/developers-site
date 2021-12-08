(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[28695],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return l},kt:function(){return u}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(t),u=a,f=d["".concat(p,".").concat(u)]||d[u]||m[u]||i;return t?n.createElement(f,o(o({ref:r},l),{},{components:t})):n.createElement(f,o({ref:r},l))}));function u(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var p in r)hasOwnProperty.call(r,p)&&(s[p]=r[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},74188:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var n=t(22122),a=t(19756),i=(t(67294),t(3905)),o=["components"],s={id:"space-members",title:"spaceMembers"},p={unversionedId:"graphql/queries/space-members",id:"graphql/queries/space-members",isDocsHomePage:!1,title:"spaceMembers",description:"No description",source:"@site/docs/graphql/queries/space-members.mdx",sourceDirName:"graphql/queries",slug:"/graphql/queries/space-members",permalink:"/docs/graphql/queries/space-members",editUrl:"https://github.com/tribeplatform/developers-site/edit/master/docs/graphql/queries/space-members.mdx",version:"current",frontMatter:{id:"space-members",title:"spaceMembers"},sidebar:"schemaSidebar",previous:{title:"spaceDefaultNotificationSettings",permalink:"/docs/graphql/queries/space-default-notification-settings"},next:{title:"spaceMembershipRequests",permalink:"/docs/graphql/queries/space-membership-requests"}},c=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],l={toc:c};function m(e){var r=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"spaceMembers(\n  after: String\n  before: String\n  limit: Int!\n  offset: Int = 0\n  orderBy: SpaceMemberListOrderByEnum\n  reverse: Boolean\n  roleIds: [ID!] = []\n  spaceId: ID!\n): PaginatedSpaceMember!\n\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"after-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"after")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"before-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"before")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"limit-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"limit")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,i.kt)("h4",{id:"offset-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"offset")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"orderby-spacememberlistorderbyenum"},(0,i.kt)("inlineCode",{parentName:"h4"},"orderBy")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/space-member-list-order-by-enum"},(0,i.kt)("inlineCode",{parentName:"a"},"SpaceMemberListOrderByEnum")),")"),(0,i.kt)("h4",{id:"reverse-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"reverse")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("h4",{id:"roleids-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"roleIds")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"[ID!]")),")"),(0,i.kt)("h4",{id:"spaceid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"spaceId")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"paginatedspacemember"},(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/paginated-space-member"},(0,i.kt)("inlineCode",{parentName:"a"},"PaginatedSpaceMember"))))}m.isMDXComponent=!0}}]);