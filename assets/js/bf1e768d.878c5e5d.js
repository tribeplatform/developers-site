(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[12039],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return u},kt:function(){return f}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(a),f=n,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return a?r.createElement(m,l(l({ref:t},u),{},{components:a})):r.createElement(m,l({ref:t},u))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},64558:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return o},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var r=a(22122),n=a(19756),i=(a(67294),a(3905)),l=["components"],o={id:"calculate-additional-seats",title:"calculateAdditionalSeats"},c={unversionedId:"graphql/queries/calculate-additional-seats",id:"graphql/queries/calculate-additional-seats",isDocsHomePage:!1,title:"calculateAdditionalSeats",description:"No description",source:"@site/docs/graphql/queries/calculate-additional-seats.mdx",sourceDirName:"graphql/queries",slug:"/graphql/queries/calculate-additional-seats",permalink:"/docs/graphql/queries/calculate-additional-seats",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/graphql/queries/calculate-additional-seats.mdx",version:"current",frontMatter:{id:"calculate-additional-seats",title:"calculateAdditionalSeats"},sidebar:"schemaSidebar",previous:{title:"schema",permalink:"/docs/graphql/schema"},next:{title:"calculateBasket",permalink:"/docs/graphql/queries/calculate-basket"}},s=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],u={toc:s};function p(e){var t=e.components,a=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"calculateAdditionalSeats(\n  input: CalculateAdditionalSeatsInput!\n): SeatsBasket!\n\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"input-calculateadditionalseatsinput"},(0,i.kt)("inlineCode",{parentName:"h4"},"input")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/calculate-additional-seats-input"},(0,i.kt)("inlineCode",{parentName:"a"},"CalculateAdditionalSeatsInput!")),")"),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"seatsbasket"},(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/seats-basket"},(0,i.kt)("inlineCode",{parentName:"a"},"SeatsBasket"))))}p.isMDXComponent=!0}}]);