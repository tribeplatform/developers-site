(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[94950],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return g}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(r),g=o,f=d["".concat(p,".").concat(g)]||d[g]||s[g]||i;return r?n.createElement(f,a(a({ref:t},c),{},{components:r})):n.createElement(f,a({ref:t},c))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},23587:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return s}});var n=r(22122),o=r(19756),i=(r(67294),r(3905)),a=["components"],l={id:"login-network",title:"loginNetwork"},p={unversionedId:"graphql/queries/login-network",id:"graphql/queries/login-network",isDocsHomePage:!1,title:"loginNetwork",description:"No description",source:"@site/docs/graphql/queries/login-network.mdx",sourceDirName:"graphql/queries",slug:"/graphql/queries/login-network",permalink:"/developers-site/docs/graphql/queries/login-network",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/graphql/queries/login-network.mdx",version:"current",frontMatter:{id:"login-network",title:"loginNetwork"},sidebar:"schemaSidebar",previous:{title:"loadWidget",permalink:"/developers-site/docs/graphql/queries/load-widget"},next:{title:"loginSupportWithSso",permalink:"/developers-site/docs/graphql/queries/login-support-with-sso"}},u=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],c={toc:u};function s(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"loginNetwork(\n  input: LoginNetworkInput!\n): AuthToken!\n\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"input-loginnetworkinput"},(0,i.kt)("inlineCode",{parentName:"h4"},"input")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/login-network-input"},(0,i.kt)("inlineCode",{parentName:"a"},"LoginNetworkInput!")),")"),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"authtoken"},(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/auth-token"},(0,i.kt)("inlineCode",{parentName:"a"},"AuthToken"))))}s.isMDXComponent=!0}}]);