(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[79211],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(f,p(p({ref:t},l),{},{components:n})):r.createElement(f,p({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,p=new Array(o);p[0]=d;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,p[1]=a;for(var c=2;c<o;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},33260:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return u},toc:function(){return c},default:function(){return s}});var r=n(22122),i=n(19756),o=(n(67294),n(3905)),p=["components"],a={id:"get-embed-input",title:"GetEmbedInput"},u={unversionedId:"graphql/inputs/get-embed-input",id:"graphql/inputs/get-embed-input",isDocsHomePage:!1,title:"GetEmbedInput",description:"No description",source:"@site/docs/graphql/inputs/get-embed-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/get-embed-input",permalink:"/docs/graphql/inputs/get-embed-input",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/graphql/inputs/get-embed-input.mdx",version:"current",frontMatter:{id:"get-embed-input",title:"GetEmbedInput"},sidebar:"schemaSidebar",previous:{title:"FiltersInput",permalink:"/docs/graphql/inputs/filters-input"},next:{title:"GetReportInput",permalink:"/docs/graphql/inputs/get-report-input"}},c=[{value:"Fields",id:"fields",children:[]}],l={toc:c};function s(e){var t=e.components,n=(0,i.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type GetEmbedInput {\n  options: String\n  url: String!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"options-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"options")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("h4",{id:"url-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"url")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!")),")"))}s.isMDXComponent=!0}}]);