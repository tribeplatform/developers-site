(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[58177],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),y=s(r),h=o,d=y["".concat(p,".").concat(h)]||y[h]||l[h]||a;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=y;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},92334:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return l}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),i=["components"],c={id:"search-entity-group",title:"SearchEntityGroup"},p={unversionedId:"graphql/objects/search-entity-group",id:"graphql/objects/search-entity-group",isDocsHomePage:!1,title:"SearchEntityGroup",description:"No description",source:"@site/docs/graphql/objects/search-entity-group.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/search-entity-group",permalink:"/docs/graphql/objects/search-entity-group",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/graphql/objects/search-entity-group.mdx",version:"current",frontMatter:{id:"search-entity-group",title:"SearchEntityGroup"},sidebar:"schemaSidebar",previous:{title:"SearchEntity",permalink:"/docs/graphql/objects/search-entity"},next:{title:"SearchResult",permalink:"/docs/graphql/objects/search-result"}},s=[{value:"Fields",id:"fields",children:[]}],u={toc:s};function l(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type SearchEntityGroup {\n  entityType: SearchEntityType!\n  hits: [SearchEntity!]!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"entitytype-searchentitytype"},(0,a.kt)("inlineCode",{parentName:"h4"},"entityType")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/search-entity-type"},(0,a.kt)("inlineCode",{parentName:"a"},"SearchEntityType!")),")"),(0,a.kt)("h4",{id:"hits-searchentity"},(0,a.kt)("inlineCode",{parentName:"h4"},"hits")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/search-entity"},(0,a.kt)("inlineCode",{parentName:"a"},"[SearchEntity!]!")),")"))}l.isMDXComponent=!0}}]);