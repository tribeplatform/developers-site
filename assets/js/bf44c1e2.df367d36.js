(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[59698],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(r),m=a,d=f["".concat(p,".").concat(m)]||f[m]||s[m]||i;return r?n.createElement(d,o(o({ref:t},u),{},{components:r})):n.createElement(d,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},92186:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return s}});var n=r(22122),a=r(19756),i=(r(67294),r(3905)),o=["components"],l={id:"tag-filter-type",title:"TagFilterType"},p={unversionedId:"graphql/enums/tag-filter-type",id:"graphql/enums/tag-filter-type",isDocsHomePage:!1,title:"TagFilterType",description:"No description",source:"@site/docs/graphql/enums/tag-filter-type.mdx",sourceDirName:"graphql/enums",slug:"/graphql/enums/tag-filter-type",permalink:"/docs/graphql/enums/tag-filter-type",editUrl:"https://github.com/tribeplatform/developers-site/edit/master/docs/graphql/enums/tag-filter-type.mdx",version:"current",frontMatter:{id:"tag-filter-type",title:"TagFilterType"},sidebar:"schemaSidebar",previous:{title:"SubscriptionStatus",permalink:"/docs/graphql/enums/subscription-status"},next:{title:"TagListOrderByEnum",permalink:"/docs/graphql/enums/tag-list-order-by-enum"}},c=[{value:"Values",id:"values",children:[]}],u={toc:c};function s(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"enum TagFilterType {\n  BLACKLIST\n  WHITELIST\n}\n")),(0,i.kt)("h3",{id:"values"},"Values"),(0,i.kt)("h4",{id:"blacklist"},(0,i.kt)("inlineCode",{parentName:"h4"},"BLACKLIST")),(0,i.kt)("h4",{id:"whitelist"},(0,i.kt)("inlineCode",{parentName:"h4"},"WHITELIST")))}s.isMDXComponent=!0}}]);