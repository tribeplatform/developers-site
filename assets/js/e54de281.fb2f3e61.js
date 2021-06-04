(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[43991],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=s(r),d=a,m=f["".concat(i,".").concat(d)]||f[d]||u[d]||o;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},99573:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},metadata:function(){return i},toc:function(){return s},default:function(){return u}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),l=["components"],c={id:"float",title:"Float"},i={unversionedId:"graphql/scalars/float",id:"graphql/scalars/float",isDocsHomePage:!1,title:"Float",description:"The Float scalar type represents signed double-precision fractional values as specified by IEEE 754.",source:"@site/docs/graphql/scalars/float.mdx",sourceDirName:"graphql/scalars",slug:"/graphql/scalars/float",permalink:"/docs/graphql/scalars/float",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/graphql/scalars/float.mdx",version:"current",frontMatter:{id:"float",title:"Float"},sidebar:"schemaSidebar",previous:{title:"DateTime",permalink:"/docs/graphql/scalars/date-time"},next:{title:"ID",permalink:"/docs/graphql/scalars/id"}},s=[],p={toc:s};function u(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"Float")," scalar type represents signed double-precision fractional values as specified by ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/IEEE_floating_point"},"IEEE 754"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"scalar Float\n")))}u.isMDXComponent=!0}}]);