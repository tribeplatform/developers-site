(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[13116],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(r),f=a,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(m,p(p({ref:t},s),{},{components:r})):n.createElement(m,p({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var c=2;c<o;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},51737:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),p=["components"],i={id:"report-data",title:"ReportData"},l={unversionedId:"graphql/objects/report-data",id:"graphql/objects/report-data",isDocsHomePage:!1,title:"ReportData",description:"No description",source:"@site/docs/graphql/objects/report-data.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/report-data",permalink:"/docs/graphql/objects/report-data",editUrl:"https://github.com/tribeplatform/developers-site/edit/master/docs/graphql/objects/report-data.mdx",version:"current",frontMatter:{id:"report-data",title:"ReportData"},sidebar:"schemaSidebar",previous:{title:"Report",permalink:"/docs/graphql/objects/report"},next:{title:"Role",permalink:"/docs/graphql/objects/role"}},c=[{value:"Fields",id:"fields",children:[]}],s={toc:c};function u(e){var t=e.components,r=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type ReportData {\n  description: String\n  key: String!\n  previousValue: ReportDataValue\n  type: ReportDataType!\n  value: ReportDataValue!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"description-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"description")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("h4",{id:"key-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"key")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,o.kt)("h4",{id:"previousvalue-reportdatavalue"},(0,o.kt)("inlineCode",{parentName:"h4"},"previousValue")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/unions/report-data-value"},(0,o.kt)("inlineCode",{parentName:"a"},"ReportDataValue")),")"),(0,o.kt)("h4",{id:"type-reportdatatype"},(0,o.kt)("inlineCode",{parentName:"h4"},"type")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/report-data-type"},(0,o.kt)("inlineCode",{parentName:"a"},"ReportDataType!")),")"),(0,o.kt)("h4",{id:"value-reportdatavalue"},(0,o.kt)("inlineCode",{parentName:"h4"},"value")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/unions/report-data-value"},(0,o.kt)("inlineCode",{parentName:"a"},"ReportDataValue!")),")"))}u.isMDXComponent=!0}}]);