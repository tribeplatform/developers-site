(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[82135],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return u}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),c=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),m=c(n),u=o,f=m["".concat(d,".").concat(u)]||m[u]||s[u]||a;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},57635:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return d},toc:function(){return c},default:function(){return s}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i=["components"],p={id:"paginated-moderation",title:"PaginatedModeration"},d={unversionedId:"graphql/objects/paginated-moderation",id:"graphql/objects/paginated-moderation",isDocsHomePage:!1,title:"PaginatedModeration",description:"No description",source:"@site/docs/graphql/objects/paginated-moderation.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/paginated-moderation",permalink:"/docs/graphql/objects/paginated-moderation",editUrl:"https://github.com/tribeplatform/developers-site/edit/master/docs/graphql/objects/paginated-moderation.mdx",version:"current",frontMatter:{id:"paginated-moderation",title:"PaginatedModeration"},sidebar:"schemaSidebar",previous:{title:"PaginatedMemberInvitation",permalink:"/docs/graphql/objects/paginated-member-invitation"},next:{title:"PaginatedModerationItemReporter",permalink:"/docs/graphql/objects/paginated-moderation-item-reporter"}},c=[{value:"Fields",id:"fields",children:[]}],l={toc:c};function s(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type PaginatedModeration {\n  edges: [ModerationItemEdge!]\n  nodes: [ModerationItem!]\n  pageInfo: PageInfo!\n  totalCount: Int!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"edges-moderationitemedge"},(0,a.kt)("inlineCode",{parentName:"h4"},"edges")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/moderation-item-edge"},(0,a.kt)("inlineCode",{parentName:"a"},"[ModerationItemEdge!]")),")"),(0,a.kt)("h4",{id:"nodes-moderationitem"},(0,a.kt)("inlineCode",{parentName:"h4"},"nodes")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/moderation-item"},(0,a.kt)("inlineCode",{parentName:"a"},"[ModerationItem!]")),")"),(0,a.kt)("h4",{id:"pageinfo-pageinfo"},(0,a.kt)("inlineCode",{parentName:"h4"},"pageInfo")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/page-info"},(0,a.kt)("inlineCode",{parentName:"a"},"PageInfo!")),")"),(0,a.kt)("h4",{id:"totalcount-int"},(0,a.kt)("inlineCode",{parentName:"h4"},"totalCount")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int!")),")"))}s.isMDXComponent=!0}}]);