(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[81224],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,g=m["".concat(p,".").concat(d)]||m[d]||l[d]||o;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},24300:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return l}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),i=["components"],c={id:"create-migration-request",title:"createMigrationRequest"},p={unversionedId:"graphql/mutations/create-migration-request",id:"graphql/mutations/create-migration-request",isDocsHomePage:!1,title:"createMigrationRequest",description:"No description",source:"@site/docs/graphql/mutations/create-migration-request.mdx",sourceDirName:"graphql/mutations",slug:"/graphql/mutations/create-migration-request",permalink:"/developers-site/docs/graphql/mutations/create-migration-request",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/graphql/mutations/create-migration-request.mdx",version:"current",frontMatter:{id:"create-migration-request",title:"createMigrationRequest"},sidebar:"schemaSidebar",previous:{title:"createAppWidget",permalink:"/developers-site/docs/graphql/mutations/create-app-widget"},next:{title:"createPostTypeTemplate",permalink:"/developers-site/docs/graphql/mutations/create-post-type-template"}},s=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],u={toc:s};function l(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"createMigrationRequest(\n  changeMemberDetails: Boolean\n  prefixId: String\n): ImportRequest!\n\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"changememberdetails-boolean"},(0,o.kt)("inlineCode",{parentName:"h4"},"changeMemberDetails")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,o.kt)("h4",{id:"prefixid-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"prefixId")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"importrequest"},(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/import-request"},(0,o.kt)("inlineCode",{parentName:"a"},"ImportRequest"))))}l.isMDXComponent=!0}}]);