(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[20344],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,h=m["".concat(c,".").concat(u)]||m[u]||s[u]||i;return n?r.createElement(h,o(o({ref:t},d),{},{components:n})):r.createElement(h,o({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},10410:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return s}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o=["components"],l={id:"collection",title:"Collection"},c={unversionedId:"graphql/objects/collection",id:"graphql/objects/collection",isDocsHomePage:!1,title:"Collection",description:"No description",source:"@site/docs/graphql/objects/collection.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/collection",permalink:"/docs/graphql/objects/collection",editUrl:"https://github.com/tribeplatform/developers-site/edit/master/docs/graphql/objects/collection.mdx",version:"current",frontMatter:{id:"collection",title:"Collection"},sidebar:"schemaSidebar",previous:{title:"ChartData",permalink:"/docs/graphql/objects/chart-data"},next:{title:"CollectionEdge",permalink:"/docs/graphql/objects/collection-edge"}},p=[{value:"Fields",id:"fields",children:[]}],d={toc:p};function s(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type Collection {\n  createdAt: DateTime!\n  createdBy: Member\n  customOrderingIndex: Float!\n  description: String\n  id: ID!\n  name: String!\n  network: Network\n  slug: String!\n  spaces(limit: Int!): PaginatedSpace\n  updatedAt: DateTime!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"createdat-datetime"},(0,i.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/date-time"},(0,i.kt)("inlineCode",{parentName:"a"},"DateTime!")),")"),(0,i.kt)("h4",{id:"createdby-member"},(0,i.kt)("inlineCode",{parentName:"h4"},"createdBy")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/member"},(0,i.kt)("inlineCode",{parentName:"a"},"Member")),")"),(0,i.kt)("h4",{id:"customorderingindex-float"},(0,i.kt)("inlineCode",{parentName:"h4"},"customOrderingIndex")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/float"},(0,i.kt)("inlineCode",{parentName:"a"},"Float!")),")"),(0,i.kt)("h4",{id:"description-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"description")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"id-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,i.kt)("h4",{id:"name-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"name")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,i.kt)("h4",{id:"network-network"},(0,i.kt)("inlineCode",{parentName:"h4"},"network")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/network"},(0,i.kt)("inlineCode",{parentName:"a"},"Network")),")"),(0,i.kt)("h4",{id:"slug-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"slug")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,i.kt)("h4",{id:"spaces-paginatedspace"},(0,i.kt)("inlineCode",{parentName:"h4"},"spaces")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/paginated-space"},(0,i.kt)("inlineCode",{parentName:"a"},"PaginatedSpace")),")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"limit-int"},(0,i.kt)("inlineCode",{parentName:"h5"},"limit")," (",(0,i.kt)("a",{parentName:"h5",href:"/docs/graphql/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int!")),")"))),(0,i.kt)("h4",{id:"updatedat-datetime"},(0,i.kt)("inlineCode",{parentName:"h4"},"updatedAt")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/date-time"},(0,i.kt)("inlineCode",{parentName:"a"},"DateTime!")),")"))}s.isMDXComponent=!0}}]);