(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[6785],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return g}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,p=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(r),g=o,f=d["".concat(c,".").concat(g)]||d[g]||l[g]||p;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=r.length,a=new Array(p);a[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var s=2;s<p;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},25756:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s},default:function(){return l}});var n=r(22122),o=r(19756),p=(r(67294),r(3905)),a=["components"],i={id:"get-space-report",title:"getSpaceReport"},c={unversionedId:"graphql/queries/get-space-report",id:"graphql/queries/get-space-report",isDocsHomePage:!1,title:"getSpaceReport",description:"No description",source:"@site/docs/graphql/queries/get-space-report.mdx",sourceDirName:"graphql/queries",slug:"/graphql/queries/get-space-report",permalink:"/developers-site/docs/graphql/queries/get-space-report",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/graphql/queries/get-space-report.mdx",version:"current",frontMatter:{id:"get-space-report",title:"getSpaceReport"},sidebar:"schemaSidebar",previous:{title:"getSpacePinnedPosts",permalink:"/developers-site/docs/graphql/queries/get-space-pinned-posts"},next:{title:"getSpaceRoles",permalink:"/developers-site/docs/graphql/queries/get-space-roles"}},s=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],u={toc:s};function l(e){var t=e.components,r=(0,o.Z)(e,a);return(0,p.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"No description"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"getSpaceReport(\n  input: GetReportInput!\n  spaceId: String!\n): Report!\n\n")),(0,p.kt)("h3",{id:"arguments"},"Arguments"),(0,p.kt)("h4",{id:"input-getreportinput"},(0,p.kt)("inlineCode",{parentName:"h4"},"input")," (",(0,p.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/get-report-input"},(0,p.kt)("inlineCode",{parentName:"a"},"GetReportInput!")),")"),(0,p.kt)("h4",{id:"spaceid-string"},(0,p.kt)("inlineCode",{parentName:"h4"},"spaceId")," (",(0,p.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,p.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,p.kt)("h3",{id:"type"},"Type"),(0,p.kt)("h4",{id:"report"},(0,p.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/report"},(0,p.kt)("inlineCode",{parentName:"a"},"Report"))))}l.isMDXComponent=!0}}]);