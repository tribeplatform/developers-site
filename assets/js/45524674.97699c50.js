(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[93457],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return d}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=p(r),d=i,m=f["".concat(s,".").concat(d)]||f[d]||u[d]||o;return r?n.createElement(m,a(a({ref:t},l),{},{components:r})):n.createElement(m,a({ref:t},l))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},29411:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var n=r(22122),i=r(19756),o=(r(67294),r(3905)),a=["components"],c={id:"specified-by",title:"specifiedBy"},s={unversionedId:"graphql/directives/specified-by",id:"graphql/directives/specified-by",isDocsHomePage:!1,title:"specifiedBy",description:"Exposes a URL that specifies the behaviour of this scalar.",source:"@site/docs/graphql/directives/specified-by.mdx",sourceDirName:"graphql/directives",slug:"/graphql/directives/specified-by",permalink:"/developers-site/docs/graphql/directives/specified-by",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/graphql/directives/specified-by.mdx",version:"current",frontMatter:{id:"specified-by",title:"specifiedBy"},sidebar:"schemaSidebar",previous:{title:"skip",permalink:"/developers-site/docs/graphql/directives/skip"},next:{title:"Action",permalink:"/developers-site/docs/graphql/objects/action"}},p=[{value:"Arguments",id:"arguments",children:[]}],l={toc:p};function u(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Exposes a URL that specifies the behaviour of this scalar."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"directive @specifiedBy(\n  url: String!\n)\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"url-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"url")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,o.kt)("p",null,"The URL that specifies the behaviour of this scalar."))}u.isMDXComponent=!0}}]);