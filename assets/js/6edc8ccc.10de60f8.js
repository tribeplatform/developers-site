(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[82761],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,g=d["".concat(p,".").concat(m)]||d[m]||s[m]||a;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},25498:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u},default:function(){return s}});var r=n(22122),i=n(19756),a=(n(67294),n(3905)),l=["components"],o={id:"update-billing-details",title:"updateBillingDetails"},p={unversionedId:"graphql/mutations/update-billing-details",id:"graphql/mutations/update-billing-details",isDocsHomePage:!1,title:"updateBillingDetails",description:"No description",source:"@site/docs/graphql/mutations/update-billing-details.mdx",sourceDirName:"graphql/mutations",slug:"/graphql/mutations/update-billing-details",permalink:"/docs/graphql/mutations/update-billing-details",editUrl:"https://github.com/tribeplatform/developers-site/edit/master/docs/graphql/mutations/update-billing-details.mdx",version:"current",frontMatter:{id:"update-billing-details",title:"updateBillingDetails"},sidebar:"schemaSidebar",previous:{title:"updateAppSpaceSetting",permalink:"/docs/graphql/mutations/update-app-space-setting"},next:{title:"updateCollection",permalink:"/docs/graphql/mutations/update-collection"}},u=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],c={toc:u};function s(e){var t=e.components,n=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"updateBillingDetails(\n  input: BillingDetailsInput!\n): BillingDetails!\n\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"input-billingdetailsinput"},(0,a.kt)("inlineCode",{parentName:"h4"},"input")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/billing-details-input"},(0,a.kt)("inlineCode",{parentName:"a"},"BillingDetailsInput!")),")"),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"billingdetails"},(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/billing-details"},(0,a.kt)("inlineCode",{parentName:"a"},"BillingDetails"))))}s.isMDXComponent=!0}}]);