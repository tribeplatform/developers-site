(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[21868],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),m=o,h=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return r?n.createElement(h,a(a({ref:t},u),{},{components:r})):n.createElement(h,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},27494:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},metadata:function(){return p},toc:function(){return l},default:function(){return c}});var n=r(22122),o=r(19756),i=(r(67294),r(3905)),a=["components"],s={id:"login-network-with-password",title:"loginNetworkWithPassword"},p={unversionedId:"graphql/mutations/login-network-with-password",id:"graphql/mutations/login-network-with-password",isDocsHomePage:!1,title:"loginNetworkWithPassword",description:"No description",source:"@site/docs/graphql/mutations/login-network-with-password.mdx",sourceDirName:"graphql/mutations",slug:"/graphql/mutations/login-network-with-password",permalink:"/docs/graphql/mutations/login-network-with-password",editUrl:"https://github.com/tribeplatform/developers-site/edit/master/docs/graphql/mutations/login-network-with-password.mdx",version:"current",frontMatter:{id:"login-network-with-password",title:"loginNetworkWithPassword"},sidebar:"schemaSidebar",previous:{title:"loginNetwork",permalink:"/docs/graphql/mutations/login-network"},next:{title:"loginWithSsoCode",permalink:"/docs/graphql/mutations/login-with-sso-code"}},l=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],u={toc:l};function c(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"loginNetworkWithPassword(\n  input: LoginNetworkWithPasswordInput!\n): AuthToken!\n\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"input-loginnetworkwithpasswordinput"},(0,i.kt)("inlineCode",{parentName:"h4"},"input")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/login-network-with-password-input"},(0,i.kt)("inlineCode",{parentName:"a"},"LoginNetworkWithPasswordInput!")),")"),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"authtoken"},(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/auth-token"},(0,i.kt)("inlineCode",{parentName:"a"},"AuthToken"))))}c.isMDXComponent=!0}}]);