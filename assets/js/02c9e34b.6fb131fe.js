(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[70714],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,a=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=c(r),d=s,f=m["".concat(o,".").concat(d)]||m[d]||l[d]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=r.length,i=new Array(a);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:s,i[1]=p;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},86621:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return p},metadata:function(){return o},toc:function(){return c},default:function(){return l}});var n=r(22122),s=r(19756),a=(r(67294),r(3905)),i=["components"],p={id:"get-space-membership-requests",title:"getSpaceMembershipRequests"},o={unversionedId:"graphql/queries/get-space-membership-requests",id:"graphql/queries/get-space-membership-requests",isDocsHomePage:!1,title:"getSpaceMembershipRequests",description:"No description",source:"@site/docs/graphql/queries/get-space-membership-requests.mdx",sourceDirName:"graphql/queries",slug:"/graphql/queries/get-space-membership-requests",permalink:"/docs/graphql/queries/get-space-membership-requests",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/graphql/queries/get-space-membership-requests.mdx",version:"current",frontMatter:{id:"get-space-membership-requests",title:"getSpaceMembershipRequests"},sidebar:"schemaSidebar",previous:{title:"getSpaceMembershipRequestForMember",permalink:"/docs/graphql/queries/get-space-membership-request-for-member"},next:{title:"getSpacePinnedPosts",permalink:"/docs/graphql/queries/get-space-pinned-posts"}},c=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],u={toc:c};function l(e){var t=e.components,r=(0,s.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"getSpaceMembershipRequests(\n  spaceId: ID!\n  status: SpaceJoinRequestStatus\n): [SpaceJoinRequest!]!\n\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"spaceid-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"spaceId")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,a.kt)("h4",{id:"status-spacejoinrequeststatus"},(0,a.kt)("inlineCode",{parentName:"h4"},"status")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/space-join-request-status"},(0,a.kt)("inlineCode",{parentName:"a"},"SpaceJoinRequestStatus")),")"),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"spacejoinrequest"},(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/space-join-request"},(0,a.kt)("inlineCode",{parentName:"a"},"SpaceJoinRequest"))))}l.isMDXComponent=!0}}]);