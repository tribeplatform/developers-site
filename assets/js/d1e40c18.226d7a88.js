(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[1324],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=u(r),d=a,g=m["".concat(l,".").concat(d)]||m[d]||c[d]||i;return r?n.createElement(g,o(o({ref:t},s),{},{components:r})):n.createElement(g,o({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},80261:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return p},metadata:function(){return l},toc:function(){return u},default:function(){return c}});var n=r(22122),a=r(19756),i=(r(67294),r(3905)),o=["components"],p={id:"get-report-input",title:"GetReportInput"},l={unversionedId:"graphql/inputs/get-report-input",id:"graphql/inputs/get-report-input",isDocsHomePage:!1,title:"GetReportInput",description:"No description",source:"@site/docs/graphql/inputs/get-report-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/get-report-input",permalink:"/docs/graphql/inputs/get-report-input",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/graphql/inputs/get-report-input.mdx",version:"current",frontMatter:{id:"get-report-input",title:"GetReportInput"},sidebar:"schemaSidebar",previous:{title:"GetEmbedInput",permalink:"/docs/graphql/inputs/get-embed-input"},next:{title:"InstallAppInput",permalink:"/docs/graphql/inputs/install-app-input"}},u=[{value:"Fields",id:"fields",children:[]}],s={toc:u};function c(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type GetReportInput {\n  endDate: String\n  slug: ReportSlug!\n  startDate: String\n  timeFrame: ReportTimeFrame\n  timeZone: String!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"enddate-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"endDate")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"slug-reportslug"},(0,i.kt)("inlineCode",{parentName:"h4"},"slug")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/report-slug"},(0,i.kt)("inlineCode",{parentName:"a"},"ReportSlug!")),")"),(0,i.kt)("h4",{id:"startdate-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"startDate")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"timeframe-reporttimeframe"},(0,i.kt)("inlineCode",{parentName:"h4"},"timeFrame")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/report-time-frame"},(0,i.kt)("inlineCode",{parentName:"a"},"ReportTimeFrame")),")"),(0,i.kt)("h4",{id:"timezone-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"timeZone")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!")),")"))}c.isMDXComponent=!0}}]);