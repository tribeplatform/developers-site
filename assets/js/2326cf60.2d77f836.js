(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[41751],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),y=c(r),f=a,d=y["".concat(s,".").concat(f)]||y[f]||u[f]||o;return r?n.createElement(d,p(p({ref:t},l),{},{components:r})):n.createElement(d,p({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=y;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var c=2;c<o;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},16401:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),p=["components"],i={id:"get-available-post-types-for-space-type",title:"getAvailablePostTypesForSpaceType"},s={unversionedId:"graphql/queries/get-available-post-types-for-space-type",id:"graphql/queries/get-available-post-types-for-space-type",isDocsHomePage:!1,title:"getAvailablePostTypesForSpaceType",description:"No description",source:"@site/docs/graphql/queries/get-available-post-types-for-space-type.mdx",sourceDirName:"graphql/queries",slug:"/graphql/queries/get-available-post-types-for-space-type",permalink:"/docs/graphql/queries/get-available-post-types-for-space-type",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/graphql/queries/get-available-post-types-for-space-type.mdx",version:"current",frontMatter:{id:"get-available-post-types-for-space-type",title:"getAvailablePostTypesForSpaceType"},sidebar:"schemaSidebar",previous:{title:"getAuthMember",permalink:"/docs/graphql/queries/get-auth-member"},next:{title:"getCardInformation",permalink:"/docs/graphql/queries/get-card-information"}},c=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],l={toc:c};function u(e){var t=e.components,r=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"getAvailablePostTypesForSpaceType(\n  spaceTypeId: ID!\n): [PostType!]!\n\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"spacetypeid-id"},(0,o.kt)("inlineCode",{parentName:"h4"},"spaceTypeId")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"posttype"},(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/post-type"},(0,o.kt)("inlineCode",{parentName:"a"},"PostType"))))}u.isMDXComponent=!0}}]);