(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[16314],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),s=l(n),u=a,f=s["".concat(p,".").concat(u)]||s[u]||m[u]||i;return n?r.createElement(f,o(o({ref:t},d),{},{components:n})):r.createElement(f,o({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=s;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},54738:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return m}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o=["components"],c={id:"paginated-member-invitation",title:"PaginatedMemberInvitation"},p={unversionedId:"graphql/objects/paginated-member-invitation",id:"graphql/objects/paginated-member-invitation",isDocsHomePage:!1,title:"PaginatedMemberInvitation",description:"No description",source:"@site/docs/graphql/objects/paginated-member-invitation.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/paginated-member-invitation",permalink:"/docs/graphql/objects/paginated-member-invitation",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/graphql/objects/paginated-member-invitation.mdx",version:"current",frontMatter:{id:"paginated-member-invitation",title:"PaginatedMemberInvitation"},sidebar:"schemaSidebar",previous:{title:"PaginatedMember",permalink:"/docs/graphql/objects/paginated-member"},next:{title:"PaginatedModeration",permalink:"/docs/graphql/objects/paginated-moderation"}},l=[{value:"Fields",id:"fields",children:[]}],d={toc:l};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type PaginatedMemberInvitation {\n  edges: [MemberInvitationEdge!]\n  nodes: [MemberInvitation!]\n  pageInfo: PageInfo!\n  totalCount: Int!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"edges-memberinvitationedge"},(0,i.kt)("inlineCode",{parentName:"h4"},"edges")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/member-invitation-edge"},(0,i.kt)("inlineCode",{parentName:"a"},"[MemberInvitationEdge!]")),")"),(0,i.kt)("h4",{id:"nodes-memberinvitation"},(0,i.kt)("inlineCode",{parentName:"h4"},"nodes")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/member-invitation"},(0,i.kt)("inlineCode",{parentName:"a"},"[MemberInvitation!]")),")"),(0,i.kt)("h4",{id:"pageinfo-pageinfo"},(0,i.kt)("inlineCode",{parentName:"h4"},"pageInfo")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/page-info"},(0,i.kt)("inlineCode",{parentName:"a"},"PageInfo!")),")"),(0,i.kt)("h4",{id:"totalcount-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"totalCount")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int!")),")"))}m.isMDXComponent=!0}}]);