(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[42641],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return d},kt:function(){return m}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),l=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=l(e.components);return n.createElement(s.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=l(t),m=o,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||a;return t?n.createElement(g,i(i({ref:r},d),{},{components:t})):n.createElement(g,i({ref:r},d))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},67777:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return p},metadata:function(){return s},toc:function(){return l},default:function(){return c}});var n=t(22122),o=t(19756),a=(t(67294),t(3905)),i=["components"],p={id:"get-moderation-reporters",title:"getModerationReporters"},s={unversionedId:"graphql/queries/get-moderation-reporters",id:"graphql/queries/get-moderation-reporters",isDocsHomePage:!1,title:"getModerationReporters",description:"No description",source:"@site/docs/graphql/queries/get-moderation-reporters.mdx",sourceDirName:"graphql/queries",slug:"/graphql/queries/get-moderation-reporters",permalink:"/developers-site/docs/graphql/queries/get-moderation-reporters",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/graphql/queries/get-moderation-reporters.mdx",version:"current",frontMatter:{id:"get-moderation-reporters",title:"getModerationReporters"},sidebar:"schemaSidebar",previous:{title:"getModerationById",permalink:"/developers-site/docs/graphql/queries/get-moderation-by-id"},next:{title:"getModerationSetting",permalink:"/developers-site/docs/graphql/queries/get-moderation-setting"}},l=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],d={toc:l};function c(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"getModerationReporters(\n  after: String\n  before: String\n  limit: Int!\n  moderationId: String!\n  offset: Int = 0\n  reverse: Boolean\n): PaginatedModerationReporter!\n\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"after-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"after")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"before-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"before")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"limit-int"},(0,a.kt)("inlineCode",{parentName:"h4"},"limit")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,a.kt)("h4",{id:"moderationid-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"moderationId")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,a.kt)("h4",{id:"offset-int"},(0,a.kt)("inlineCode",{parentName:"h4"},"offset")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,a.kt)("h4",{id:"reverse-boolean"},(0,a.kt)("inlineCode",{parentName:"h4"},"reverse")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,a.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"paginatedmoderationreporter"},(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/paginated-moderation-reporter"},(0,a.kt)("inlineCode",{parentName:"a"},"PaginatedModerationReporter"))))}c.isMDXComponent=!0}}]);