(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[65264],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},17161:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),i=["components"],c={id:"basket",title:"Basket"},l={unversionedId:"graphql/objects/basket",id:"graphql/objects/basket",isDocsHomePage:!1,title:"Basket",description:"No description",source:"@site/docs/graphql/objects/basket.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/basket",permalink:"/docs/graphql/objects/basket",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/graphql/objects/basket.mdx",version:"current",frontMatter:{id:"basket",title:"Basket"},sidebar:"schemaSidebar",previous:{title:"AuthTokenWithOtp",permalink:"/docs/graphql/objects/auth-token-with-otp"},next:{title:"BasketItem",permalink:"/docs/graphql/objects/basket-item"}},p=[{value:"Fields",id:"fields",children:[]}],s={toc:p};function u(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type Basket {\n  items: [BasketItem!]!\n  renewalType: PlanRenewalType!\n  total: Price!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"items-basketitem"},(0,o.kt)("inlineCode",{parentName:"h4"},"items")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/basket-item"},(0,o.kt)("inlineCode",{parentName:"a"},"[BasketItem!]!")),")"),(0,o.kt)("h4",{id:"renewaltype-planrenewaltype"},(0,o.kt)("inlineCode",{parentName:"h4"},"renewalType")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/plan-renewal-type"},(0,o.kt)("inlineCode",{parentName:"a"},"PlanRenewalType!")),")"),(0,o.kt)("h4",{id:"total-price"},(0,o.kt)("inlineCode",{parentName:"h4"},"total")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/price"},(0,o.kt)("inlineCode",{parentName:"a"},"Price!")),")"))}u.isMDXComponent=!0}}]);