(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[85380],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||l[m]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},50014:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return l}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i=["components"],p={id:"update-theme",title:"UpdateTheme"},s={unversionedId:"graphql/inputs/update-theme",id:"graphql/inputs/update-theme",isDocsHomePage:!1,title:"UpdateTheme",description:"No description",source:"@site/docs/graphql/inputs/update-theme.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/update-theme",permalink:"/developers-site/docs/graphql/inputs/update-theme",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/graphql/inputs/update-theme.mdx",version:"current",frontMatter:{id:"update-theme",title:"UpdateTheme"},sidebar:"schemaSidebar",previous:{title:"UpdateSsoInput",permalink:"/developers-site/docs/graphql/inputs/update-sso-input"},next:{title:"UpdateThemeToken",permalink:"/developers-site/docs/graphql/inputs/update-theme-token"}},u=[{value:"Fields",id:"fields",children:[]}],c={toc:u};function l(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type UpdateTheme {\n  name: String!\n  status: ThemeStatus!\n  tokens: UpdateThemeTokens!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"name-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"name")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,o.kt)("h4",{id:"status-themestatus"},(0,o.kt)("inlineCode",{parentName:"h4"},"status")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/theme-status"},(0,o.kt)("inlineCode",{parentName:"a"},"ThemeStatus!")),")"),(0,o.kt)("h4",{id:"tokens-updatethemetokens"},(0,o.kt)("inlineCode",{parentName:"h4"},"tokens")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/update-theme-tokens"},(0,o.kt)("inlineCode",{parentName:"a"},"UpdateThemeTokens!")),")"))}l.isMDXComponent=!0}}]);