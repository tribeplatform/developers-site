(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[85930],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=n.createContext({}),c=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,d=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),l=c(r),m=o,f=l["".concat(d,".").concat(m)]||l[m]||s[m]||i;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=l;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:o,a[1]=p;for(var c=2;c<i;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},40557:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return p},metadata:function(){return d},toc:function(){return c},default:function(){return s}});var n=r(22122),o=r(19756),i=(r(67294),r(3905)),a=["components"],p={id:"add-moderation-report-input",title:"AddModerationReportInput"},d={unversionedId:"graphql/inputs/add-moderation-report-input",id:"graphql/inputs/add-moderation-report-input",isDocsHomePage:!1,title:"AddModerationReportInput",description:"No description",source:"@site/docs/graphql/inputs/add-moderation-report-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/add-moderation-report-input",permalink:"/docs/graphql/inputs/add-moderation-report-input",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/graphql/inputs/add-moderation-report-input.mdx",version:"current",frontMatter:{id:"add-moderation-report-input",title:"AddModerationReportInput"},sidebar:"schemaSidebar",previous:{title:"AddMediasInput",permalink:"/docs/graphql/inputs/add-medias-input"},next:{title:"AddNetworkInput",permalink:"/docs/graphql/inputs/add-network-input"}},c=[{value:"Fields",id:"fields",children:[]}],u={toc:c};function s(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type AddModerationReportInput {\n  description: String\n  entityId: String!\n  entityType: ModerationEntityType!\n  reportCategory: ReportCategory!\n  spaceId: String\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"description-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"description")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"entityid-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"entityId")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,i.kt)("h4",{id:"entitytype-moderationentitytype"},(0,i.kt)("inlineCode",{parentName:"h4"},"entityType")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/moderation-entity-type"},(0,i.kt)("inlineCode",{parentName:"a"},"ModerationEntityType!")),")"),(0,i.kt)("h4",{id:"reportcategory-reportcategory"},(0,i.kt)("inlineCode",{parentName:"h4"},"reportCategory")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/report-category"},(0,i.kt)("inlineCode",{parentName:"a"},"ReportCategory!")),")"),(0,i.kt)("h4",{id:"spaceid-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"spaceId")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"))}s.isMDXComponent=!0}}]);