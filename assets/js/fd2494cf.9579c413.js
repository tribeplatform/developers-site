(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[22558],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return d}});var i=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=i.createContext({}),p=function(e){var t=i.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return i.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,y=m["".concat(c,".").concat(d)]||m[d]||s[d]||n;return r?i.createElement(y,l(l({ref:t},u),{},{components:r})):i.createElement(y,l({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,l=new Array(n);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var p=2;p<n;p++)l[p]=r[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},59709:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p},default:function(){return s}});var i=r(22122),a=r(19756),n=(r(67294),r(3905)),l=["components"],o={id:"email-availability",title:"emailAvailability"},c={unversionedId:"graphql/queries/email-availability",id:"graphql/queries/email-availability",isDocsHomePage:!1,title:"emailAvailability",description:"No description",source:"@site/docs/graphql/queries/email-availability.mdx",sourceDirName:"graphql/queries",slug:"/graphql/queries/email-availability",permalink:"/docs/graphql/queries/email-availability",editUrl:"https://github.com/tribeplatform/developers-site/edit/master/docs/graphql/queries/email-availability.mdx",version:"current",frontMatter:{id:"email-availability",title:"emailAvailability"},sidebar:"schemaSidebar",previous:{title:"domainAvailability",permalink:"/docs/graphql/queries/domain-availability"},next:{title:"embed",permalink:"/docs/graphql/queries/embed"}},p=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],u={toc:p};function s(e){var t=e.components,r=(0,a.Z)(e,l);return(0,n.kt)("wrapper",(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"No description"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-graphql"},"emailAvailability(\n  email: String!\n): EmailAvailability!\n\n")),(0,n.kt)("h3",{id:"arguments"},"Arguments"),(0,n.kt)("h4",{id:"email-string"},(0,n.kt)("inlineCode",{parentName:"h4"},"email")," (",(0,n.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,n.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,n.kt)("h3",{id:"type"},"Type"),(0,n.kt)("h4",{id:"emailavailability"},(0,n.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/email-availability"},(0,n.kt)("inlineCode",{parentName:"a"},"EmailAvailability"))))}s.isMDXComponent=!0}}]);