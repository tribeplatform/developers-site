(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[36606],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var a=n.createContext({}),p=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(r),f=o,m=d["".concat(a,".").concat(f)]||d[f]||u[f]||c;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,i=new Array(c);i[0]=d;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<c;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},38972:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return a},toc:function(){return p},default:function(){return u}});var n=r(22122),o=r(19756),c=(r(67294),r(3905)),i=["components"],l={id:"collection-edge",title:"CollectionEdge"},a={unversionedId:"graphql/objects/collection-edge",id:"graphql/objects/collection-edge",isDocsHomePage:!1,title:"CollectionEdge",description:"No description",source:"@site/docs/graphql/objects/collection-edge.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/collection-edge",permalink:"/docs/graphql/objects/collection-edge",editUrl:"https://github.com/tribeplatform/developers-site/edit/master/docs/graphql/objects/collection-edge.mdx",version:"current",frontMatter:{id:"collection-edge",title:"CollectionEdge"},sidebar:"schemaSidebar",previous:{title:"Collection",permalink:"/docs/graphql/objects/collection"},next:{title:"ContextPermissions",permalink:"/docs/graphql/objects/context-permissions"}},p=[{value:"Fields",id:"fields",children:[]}],s={toc:p};function u(e){var t=e.components,r=(0,o.Z)(e,i);return(0,c.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"No description"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"type CollectionEdge {\n  cursor: String!\n  node: Collection!\n}\n")),(0,c.kt)("h3",{id:"fields"},"Fields"),(0,c.kt)("h4",{id:"cursor-string"},(0,c.kt)("inlineCode",{parentName:"h4"},"cursor")," (",(0,c.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,c.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,c.kt)("h4",{id:"node-collection"},(0,c.kt)("inlineCode",{parentName:"h4"},"node")," (",(0,c.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/collection"},(0,c.kt)("inlineCode",{parentName:"a"},"Collection!")),")"))}u.isMDXComponent=!0}}]);