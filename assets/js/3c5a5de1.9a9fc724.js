(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[74636],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=s(r),d=o,h=f["".concat(l,".").concat(d)]||f[d]||p[d]||a;return r?n.createElement(h,c(c({ref:t},u),{},{components:r})):n.createElement(h,c({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var s=2;s<a;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},94542:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),c=["components"],i={id:"search-result",title:"SearchResult"},l={unversionedId:"graphql/objects/search-result",id:"graphql/objects/search-result",isDocsHomePage:!1,title:"SearchResult",description:"No description",source:"@site/docs/graphql/objects/search-result.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/search-result",permalink:"/docs/graphql/objects/search-result",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/graphql/objects/search-result.mdx",version:"current",frontMatter:{id:"search-result",title:"SearchResult"},sidebar:"schemaSidebar",previous:{title:"SearchEntityGroup",permalink:"/docs/graphql/objects/search-entity-group"},next:{title:"Seats",permalink:"/docs/graphql/objects/seats"}},s=[{value:"Fields",id:"fields",children:[]}],u={toc:s};function p(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type SearchResult {\n  hits: [SearchEntityGroup!]!\n  totalCount: Float!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"hits-searchentitygroup"},(0,a.kt)("inlineCode",{parentName:"h4"},"hits")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/search-entity-group"},(0,a.kt)("inlineCode",{parentName:"a"},"[SearchEntityGroup!]!")),")"),(0,a.kt)("h4",{id:"totalcount-float"},(0,a.kt)("inlineCode",{parentName:"h4"},"totalCount")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/float"},(0,a.kt)("inlineCode",{parentName:"a"},"Float!")),")"))}p.isMDXComponent=!0}}]);