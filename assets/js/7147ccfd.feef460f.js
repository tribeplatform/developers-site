(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[94920],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=s(n),u=a,f=m["".concat(c,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(f,p(p({ref:t},l),{},{components:n})):r.createElement(f,p({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var s=2;s<o;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},50701:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),p=["components"],i={id:"paginated-space-member",title:"PaginatedSpaceMember"},c={unversionedId:"graphql/objects/paginated-space-member",id:"graphql/objects/paginated-space-member",isDocsHomePage:!1,title:"PaginatedSpaceMember",description:"No description",source:"@site/docs/graphql/objects/paginated-space-member.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/paginated-space-member",permalink:"/docs/graphql/objects/paginated-space-member",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/graphql/objects/paginated-space-member.mdx",version:"current",frontMatter:{id:"paginated-space-member",title:"PaginatedSpaceMember"},sidebar:"schemaSidebar",previous:{title:"PaginatedSpace",permalink:"/docs/graphql/objects/paginated-space"},next:{title:"PaginatedSpaceType",permalink:"/docs/graphql/objects/paginated-space-type"}},s=[{value:"Fields",id:"fields",children:[]}],l={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type PaginatedSpaceMember {\n  edges: [SpaceMemberEdge!]\n  nodes: [SpaceMember!]\n  pageInfo: PageInfo!\n  totalCount: Int!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"edges-spacememberedge"},(0,o.kt)("inlineCode",{parentName:"h4"},"edges")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/space-member-edge"},(0,o.kt)("inlineCode",{parentName:"a"},"[SpaceMemberEdge!]")),")"),(0,o.kt)("h4",{id:"nodes-spacemember"},(0,o.kt)("inlineCode",{parentName:"h4"},"nodes")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/space-member"},(0,o.kt)("inlineCode",{parentName:"a"},"[SpaceMember!]")),")"),(0,o.kt)("h4",{id:"pageinfo-pageinfo"},(0,o.kt)("inlineCode",{parentName:"h4"},"pageInfo")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/page-info"},(0,o.kt)("inlineCode",{parentName:"a"},"PageInfo!")),")"),(0,o.kt)("h4",{id:"totalcount-int"},(0,o.kt)("inlineCode",{parentName:"h4"},"totalCount")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,o.kt)("inlineCode",{parentName:"a"},"Int!")),")"))}d.isMDXComponent=!0}}]);