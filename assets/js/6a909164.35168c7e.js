(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[41514],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=s(n),g=a,f=u["".concat(c,".").concat(g)]||u[g]||d[g]||o;return n?r.createElement(f,p(p({ref:t},l),{},{components:n})):r.createElement(f,p({ref:t},l))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var s=2;s<o;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},80191:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),p=["components"],i={id:"paginated-space-post-type",title:"PaginatedSpacePostType"},c={unversionedId:"graphql/objects/paginated-space-post-type",id:"graphql/objects/paginated-space-post-type",isDocsHomePage:!1,title:"PaginatedSpacePostType",description:"No description",source:"@site/docs/graphql/objects/paginated-space-post-type.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/paginated-space-post-type",permalink:"/docs/graphql/objects/paginated-space-post-type",editUrl:"https://github.com/tribeplatform/developers-site/edit/master/docs/graphql/objects/paginated-space-post-type.mdx",version:"current",frontMatter:{id:"paginated-space-post-type",title:"PaginatedSpacePostType"},sidebar:"schemaSidebar",previous:{title:"PaginatedSpaceMember",permalink:"/docs/graphql/objects/paginated-space-member"},next:{title:"PaginatedTag",permalink:"/docs/graphql/objects/paginated-tag"}},s=[{value:"Fields",id:"fields",children:[]}],l={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type PaginatedSpacePostType {\n  edges: [SpacePostTypeEdge!]\n  nodes: [SpacePostType!]\n  pageInfo: PageInfo!\n  totalCount: Int!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"edges-spaceposttypeedge"},(0,o.kt)("inlineCode",{parentName:"h4"},"edges")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/space-post-type-edge"},(0,o.kt)("inlineCode",{parentName:"a"},"[SpacePostTypeEdge!]")),")"),(0,o.kt)("h4",{id:"nodes-spaceposttype"},(0,o.kt)("inlineCode",{parentName:"h4"},"nodes")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/space-post-type"},(0,o.kt)("inlineCode",{parentName:"a"},"[SpacePostType!]")),")"),(0,o.kt)("h4",{id:"pageinfo-pageinfo"},(0,o.kt)("inlineCode",{parentName:"h4"},"pageInfo")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/page-info"},(0,o.kt)("inlineCode",{parentName:"a"},"PageInfo!")),")"),(0,o.kt)("h4",{id:"totalcount-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"totalCount")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!")),")"))}d.isMDXComponent=!0}}]);