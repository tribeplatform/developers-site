(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[37007],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),f=u(r),d=i,m=f["".concat(c,".").concat(d)]||f[d]||l[d]||a;return r?n.createElement(m,p(p({ref:t},s),{},{components:r})):n.createElement(m,p({ref:t},s))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,p=new Array(a);p[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,p[1]=o;for(var u=2;u<a;u++)p[u]=r[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},47943:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return c},toc:function(){return u},default:function(){return l}});var n=r(22122),i=r(19756),a=(r(67294),r(3905)),p=["components"],o={id:"search-input",title:"SearchInput"},c={unversionedId:"graphql/inputs/search-input",id:"graphql/inputs/search-input",isDocsHomePage:!1,title:"SearchInput",description:"No description",source:"@site/docs/graphql/inputs/search-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/search-input",permalink:"/docs/graphql/inputs/search-input",editUrl:"https://github.com/tribeplatform/developers-site/edit/master/docs/graphql/inputs/search-input.mdx",version:"current",frontMatter:{id:"search-input",title:"SearchInput"},sidebar:"schemaSidebar",previous:{title:"ResetPasswordInput",permalink:"/docs/graphql/inputs/reset-password-input"},next:{title:"SpaceContextInput",permalink:"/docs/graphql/inputs/space-context-input"}},u=[{value:"Fields",id:"fields",children:[]}],s={toc:u};function l(e){var t=e.components,r=(0,i.Z)(e,p);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type SearchInput {\n  filters: [FiltersInput!]\n  query: String!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"filters-filtersinput"},(0,a.kt)("inlineCode",{parentName:"h4"},"filters")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/filters-input"},(0,a.kt)("inlineCode",{parentName:"a"},"[FiltersInput!]")),")"),(0,a.kt)("h4",{id:"query-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"query")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String!")),")"))}l.isMDXComponent=!0}}]);