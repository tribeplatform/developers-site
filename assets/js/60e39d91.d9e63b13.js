(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[23524],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return d},kt:function(){return u}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),g=l(r),u=a,m=g["".concat(s,".").concat(u)]||g[u]||c[u]||i;return r?n.createElement(m,o(o({ref:t},d),{},{components:r})):n.createElement(m,o({ref:t},d))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=g;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},69029:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return p},metadata:function(){return s},toc:function(){return l},default:function(){return c}});var n=r(22122),a=r(19756),i=(r(67294),r(3905)),o=["components"],p={id:"page",title:"Page"},s={unversionedId:"graphql/objects/page",id:"graphql/objects/page",isDocsHomePage:!1,title:"Page",description:"No description",source:"@site/docs/graphql/objects/page.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/page",permalink:"/docs/graphql/objects/page",editUrl:"https://github.com/tribeplatform/developers-site/edit/master/docs/graphql/objects/page.mdx",version:"current",frontMatter:{id:"page",title:"Page"},sidebar:"schemaSidebar",previous:{title:"NotificationsCount",permalink:"/docs/graphql/objects/notifications-count"},next:{title:"PageAddress",permalink:"/docs/graphql/objects/page-address"}},l=[{value:"Fields",id:"fields",children:[]}],d={toc:l};function c(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type Page {\n  address: PageAddress!\n  createdAt: DateTime!\n  id: String!\n  layout: String!\n  networkId: String!\n  seoDetail: PageSeo!\n  slate: Slate!\n  slug: String!\n  type: PageType!\n  updatedAt: DateTime!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"address-pageaddress"},(0,i.kt)("inlineCode",{parentName:"h4"},"address")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/page-address"},(0,i.kt)("inlineCode",{parentName:"a"},"PageAddress!")),")"),(0,i.kt)("h4",{id:"createdat-datetime"},(0,i.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/date-time"},(0,i.kt)("inlineCode",{parentName:"a"},"DateTime!")),")"),(0,i.kt)("h4",{id:"id-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,i.kt)("h4",{id:"layout-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"layout")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,i.kt)("h4",{id:"networkid-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"networkId")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,i.kt)("h4",{id:"seodetail-pageseo"},(0,i.kt)("inlineCode",{parentName:"h4"},"seoDetail")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/page-seo"},(0,i.kt)("inlineCode",{parentName:"a"},"PageSeo!")),")"),(0,i.kt)("h4",{id:"slate-slate"},(0,i.kt)("inlineCode",{parentName:"h4"},"slate")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/slate"},(0,i.kt)("inlineCode",{parentName:"a"},"Slate!")),")"),(0,i.kt)("h4",{id:"slug-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"slug")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,i.kt)("h4",{id:"type-pagetype"},(0,i.kt)("inlineCode",{parentName:"h4"},"type")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/page-type"},(0,i.kt)("inlineCode",{parentName:"a"},"PageType!")),")"),(0,i.kt)("h4",{id:"updatedat-datetime"},(0,i.kt)("inlineCode",{parentName:"h4"},"updatedAt")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/date-time"},(0,i.kt)("inlineCode",{parentName:"a"},"DateTime!")),")"))}c.isMDXComponent=!0}}]);