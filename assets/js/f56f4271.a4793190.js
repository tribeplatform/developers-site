(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[78231],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),u=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(r),f=a,m=d["".concat(o,".").concat(f)]||d[f]||p[f]||c;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,i=new Array(c);i[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<c;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},70945:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return o},toc:function(){return u},default:function(){return p}});var n=r(22122),a=r(19756),c=(r(67294),r(3905)),i=["components"],l={id:"calculate-basket",title:"calculateBasket"},o={unversionedId:"graphql/queries/calculate-basket",id:"graphql/queries/calculate-basket",isDocsHomePage:!1,title:"calculateBasket",description:"No description",source:"@site/docs/graphql/queries/calculate-basket.mdx",sourceDirName:"graphql/queries",slug:"/graphql/queries/calculate-basket",permalink:"/developers-site/docs/graphql/queries/calculate-basket",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/graphql/queries/calculate-basket.mdx",version:"current",frontMatter:{id:"calculate-basket",title:"calculateBasket"},sidebar:"schemaSidebar",previous:{title:"calculateAdditionalSeats",permalink:"/developers-site/docs/graphql/queries/calculate-additional-seats"},next:{title:"checkDomainAvailability",permalink:"/developers-site/docs/graphql/queries/check-domain-availability"}},u=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],s={toc:u};function p(e){var t=e.components,r=(0,a.Z)(e,i);return(0,c.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"No description"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-graphql"},"calculateBasket(\n  input: CalculateBasketInput!\n): [Basket!]!\n\n")),(0,c.kt)("h3",{id:"arguments"},"Arguments"),(0,c.kt)("h4",{id:"input-calculatebasketinput"},(0,c.kt)("inlineCode",{parentName:"h4"},"input")," (",(0,c.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/calculate-basket-input"},(0,c.kt)("inlineCode",{parentName:"a"},"CalculateBasketInput!")),")"),(0,c.kt)("h3",{id:"type"},"Type"),(0,c.kt)("h4",{id:"basket"},(0,c.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/basket"},(0,c.kt)("inlineCode",{parentName:"a"},"Basket"))))}p.isMDXComponent=!0}}]);