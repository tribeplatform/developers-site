(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[15931],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return u}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(r),u=a,f=d["".concat(p,".").concat(u)]||d[u]||m[u]||i;return r?n.createElement(f,o(o({ref:t},l),{},{components:r})):n.createElement(f,o({ref:t},l))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},25919:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var n=r(22122),a=r(19756),i=(r(67294),r(3905)),o=["components"],s={id:"get-space-members",title:"getSpaceMembers"},p={unversionedId:"graphql/queries/get-space-members",id:"graphql/queries/get-space-members",isDocsHomePage:!1,title:"getSpaceMembers",description:"No description",source:"@site/docs/graphql/queries/get-space-members.mdx",sourceDirName:"graphql/queries",slug:"/graphql/queries/get-space-members",permalink:"/developers-site/docs/graphql/queries/get-space-members",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/graphql/queries/get-space-members.mdx",version:"current",frontMatter:{id:"get-space-members",title:"getSpaceMembers"},sidebar:"schemaSidebar",previous:{title:"getSpaceAppInstallations",permalink:"/developers-site/docs/graphql/queries/get-space-app-installations"},next:{title:"getSpaceMembershipRequestForMember",permalink:"/developers-site/docs/graphql/queries/get-space-membership-request-for-member"}},c=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],l={toc:c};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"getSpaceMembers(\n  after: String\n  before: String\n  limit: Int!\n  offset: Int = 0\n  reverse: Boolean\n  roleIds: [ID!] = []\n  spaceId: ID!\n): PaginatedSpaceMember!\n\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"after-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"after")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"before-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"before")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"limit-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"limit")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,i.kt)("h4",{id:"offset-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"offset")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"reverse-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"reverse")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("h4",{id:"roleids-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"roleIds")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"[ID!]")),")"),(0,i.kt)("h4",{id:"spaceid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"spaceId")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"paginatedspacemember"},(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/paginated-space-member"},(0,i.kt)("inlineCode",{parentName:"a"},"PaginatedSpaceMember"))))}m.isMDXComponent=!0}}]);