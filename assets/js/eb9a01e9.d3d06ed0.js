(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[23715],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),u=l(r),m=a,f=u["".concat(c,".").concat(m)]||u[m]||s[m]||i;return r?n.createElement(f,o(o({ref:t},d),{},{components:r})):n.createElement(f,o({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},64196:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return s}});var n=r(22122),a=r(19756),i=(r(67294),r(3905)),o=["components"],p={id:"card-input",title:"CardInput"},c={unversionedId:"graphql/inputs/card-input",id:"graphql/inputs/card-input",isDocsHomePage:!1,title:"CardInput",description:"No description",source:"@site/docs/graphql/inputs/card-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/card-input",permalink:"/docs/graphql/inputs/card-input",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/graphql/inputs/card-input.mdx",version:"current",frontMatter:{id:"card-input",title:"CardInput"},sidebar:"schemaSidebar",previous:{title:"CardAddressInput",permalink:"/docs/graphql/inputs/card-address-input"},next:{title:"CheckDomainAvailabilityInput",permalink:"/docs/graphql/inputs/check-domain-availability-input"}},l=[{value:"Fields",id:"fields",children:[]}],d={toc:l};function s(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type CardInput {\n  address: CardAddressInput!\n  cardNumber: String!\n  companyName: String\n  cvc: String!\n  expirationMonth: Float!\n  expirationYear: Float!\n  vatId: String\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"address-cardaddressinput"},(0,i.kt)("inlineCode",{parentName:"h4"},"address")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/card-address-input"},(0,i.kt)("inlineCode",{parentName:"a"},"CardAddressInput!")),")"),(0,i.kt)("h4",{id:"cardnumber-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"cardNumber")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,i.kt)("h4",{id:"companyname-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"companyName")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"cvc-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"cvc")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,i.kt)("h4",{id:"expirationmonth-float"},(0,i.kt)("inlineCode",{parentName:"h4"},"expirationMonth")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/float"},(0,i.kt)("inlineCode",{parentName:"a"},"Float!")),")"),(0,i.kt)("h4",{id:"expirationyear-float"},(0,i.kt)("inlineCode",{parentName:"h4"},"expirationYear")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/float"},(0,i.kt)("inlineCode",{parentName:"a"},"Float!")),")"),(0,i.kt)("h4",{id:"vatid-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"vatId")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"))}s.isMDXComponent=!0}}]);