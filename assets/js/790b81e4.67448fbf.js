(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[7684],{3905:function(e,t,i){"use strict";i.d(t,{Zo:function(){return u},kt:function(){return d}});var r=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var c=r.createContext({}),p=function(e){var t=r.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),m=p(i),d=n,y=m["".concat(c,".").concat(d)]||m[d]||s[d]||a;return i?r.createElement(y,l(l({ref:t},u),{},{components:i})):r.createElement(y,l({ref:t},u))}));function d(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,l=new Array(a);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<a;p++)l[p]=i[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,i)}m.displayName="MDXCreateElement"},15:function(e,t,i){"use strict";i.r(t),i.d(t,{frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p},default:function(){return s}});var r=i(22122),n=i(19756),a=(i(67294),i(3905)),l=["components"],o={id:"check-domain-availability",title:"checkDomainAvailability"},c={unversionedId:"graphql/queries/check-domain-availability",id:"graphql/queries/check-domain-availability",isDocsHomePage:!1,title:"checkDomainAvailability",description:"No description",source:"@site/docs/graphql/queries/check-domain-availability.mdx",sourceDirName:"graphql/queries",slug:"/graphql/queries/check-domain-availability",permalink:"/docs/graphql/queries/check-domain-availability",editUrl:"https://github.com/tribeplatform/developers-site/edit/master/docs/graphql/queries/check-domain-availability.mdx",version:"current",frontMatter:{id:"check-domain-availability",title:"checkDomainAvailability"},sidebar:"schemaSidebar",previous:{title:"calculateBasket",permalink:"/docs/graphql/queries/calculate-basket"},next:{title:"checkEmailAvailability",permalink:"/docs/graphql/queries/check-email-availability"}},p=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],u={toc:p};function s(e){var t=e.components,i=(0,n.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"checkDomainAvailability(\n  input: CheckDomainAvailabilityInput!\n): DomainAvailability!\n\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"input-checkdomainavailabilityinput"},(0,a.kt)("inlineCode",{parentName:"h4"},"input")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/check-domain-availability-input"},(0,a.kt)("inlineCode",{parentName:"a"},"CheckDomainAvailabilityInput!")),")"),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"domainavailability"},(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/domain-availability"},(0,a.kt)("inlineCode",{parentName:"a"},"DomainAvailability"))))}s.isMDXComponent=!0}}]);