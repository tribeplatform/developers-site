(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[62967],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),a=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=a(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,p=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=a(r),d=o,m=f["".concat(s,".").concat(d)]||f[d]||c[d]||p;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=r.length,i=new Array(p);i[0]=f;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var a=2;a<p;a++)i[a]=r[a];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},25193:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return u},metadata:function(){return s},toc:function(){return a},default:function(){return c}});var n=r(22122),o=r(19756),p=(r(67294),r(3905)),i=["components"],u={id:"support-sso-url-input",title:"SupportSsoUrlInput"},s={unversionedId:"graphql/inputs/support-sso-url-input",id:"graphql/inputs/support-sso-url-input",isDocsHomePage:!1,title:"SupportSsoUrlInput",description:"No description",source:"@site/docs/graphql/inputs/support-sso-url-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/support-sso-url-input",permalink:"/docs/graphql/inputs/support-sso-url-input",editUrl:"https://github.com/tribeplatform/developers-site/edit/master/docs/graphql/inputs/support-sso-url-input.mdx",version:"current",frontMatter:{id:"support-sso-url-input",title:"SupportSsoUrlInput"},sidebar:"schemaSidebar",previous:{title:"subscriptionInput",permalink:"/docs/graphql/inputs/subscription-input"},next:{title:"TestAppWebhookInput",permalink:"/docs/graphql/inputs/test-app-webhook-input"}},a=[{value:"Fields",id:"fields",children:[]}],l={toc:a};function c(e){var t=e.components,r=(0,o.Z)(e,i);return(0,p.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"No description"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"type SupportSsoUrlInput {\n  callbackUrl: String\n}\n")),(0,p.kt)("h3",{id:"fields"},"Fields"),(0,p.kt)("h4",{id:"callbackurl-string"},(0,p.kt)("inlineCode",{parentName:"h4"},"callbackUrl")," (",(0,p.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,p.kt)("inlineCode",{parentName:"a"},"String")),")"))}c.isMDXComponent=!0}}]);