(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[92253],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return g}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=c(r),g=o,d=m["".concat(l,".").concat(g)]||m[g]||s[g]||i;return r?n.createElement(d,a(a({ref:t},p),{},{components:r})):n.createElement(d,a({ref:t},p))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},92125:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return s}});var n=r(22122),o=r(19756),i=(r(67294),r(3905)),a=["components"],u={id:"logout-network",title:"logoutNetwork"},l={unversionedId:"graphql/mutations/logout-network",id:"graphql/mutations/logout-network",isDocsHomePage:!1,title:"logoutNetwork",description:"No description",source:"@site/docs/graphql/mutations/logout-network.mdx",sourceDirName:"graphql/mutations",slug:"/graphql/mutations/logout-network",permalink:"/docs/graphql/mutations/logout-network",editUrl:"https://github.com/tribeplatform/developers-site/edit/master/docs/graphql/mutations/logout-network.mdx",version:"current",frontMatter:{id:"logout-network",title:"logoutNetwork"},sidebar:"schemaSidebar",previous:{title:"loginWithSsoCode",permalink:"/docs/graphql/mutations/login-with-sso-code"},next:{title:"organizeCollections",permalink:"/docs/graphql/mutations/organize-collections"}},c=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],p={toc:c};function s(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"logoutNetwork(\n  input: LogoutNetworkInput\n): Action!\n\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"input-logoutnetworkinput"},(0,i.kt)("inlineCode",{parentName:"h4"},"input")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/logout-network-input"},(0,i.kt)("inlineCode",{parentName:"a"},"LogoutNetworkInput")),")"),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"action"},(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/action"},(0,i.kt)("inlineCode",{parentName:"a"},"Action"))))}s.isMDXComponent=!0}}]);