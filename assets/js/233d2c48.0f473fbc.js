(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[68645],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(r),f=o,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},67035:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),i=["components"],c={id:"network-context",title:"NetworkContext"},l={unversionedId:"graphql/objects/network-context",id:"graphql/objects/network-context",isDocsHomePage:!1,title:"NetworkContext",description:"No description",source:"@site/docs/graphql/objects/network-context.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/network-context",permalink:"/docs/graphql/objects/network-context",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/graphql/objects/network-context.mdx",version:"current",frontMatter:{id:"network-context",title:"NetworkContext"},sidebar:"schemaSidebar",previous:{title:"NetworkAuthMemberProps",permalink:"/docs/graphql/objects/network-auth-member-props"},next:{title:"NetworkPublicInfo",permalink:"/docs/graphql/objects/network-public-info"}},s=[{value:"Fields",id:"fields",children:[]}],p={toc:s};function u(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type NetworkContext {\n  enabled: Boolean!\n  requiredPermissions: [AvailableNetworkContextPermissions!]!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"enabled-boolean"},(0,a.kt)("inlineCode",{parentName:"h4"},"enabled")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,a.kt)("inlineCode",{parentName:"a"},"Boolean!")),")"),(0,a.kt)("h4",{id:"requiredpermissions-availablenetworkcontextpermissions"},(0,a.kt)("inlineCode",{parentName:"h4"},"requiredPermissions")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/available-network-context-permissions"},(0,a.kt)("inlineCode",{parentName:"a"},"[AvailableNetworkContextPermissions!]!")),")"))}u.isMDXComponent=!0}}]);