(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[43473],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,s(s({ref:t},l),{},{components:r})):n.createElement(f,s({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},66538:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),s=["components"],i={id:"sso",title:"Sso"},p={unversionedId:"graphql/objects/sso",id:"graphql/objects/sso",isDocsHomePage:!1,title:"Sso",description:"No description",source:"@site/docs/graphql/objects/sso.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/sso",permalink:"/developers-site/docs/graphql/objects/sso",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/graphql/objects/sso.mdx",version:"current",frontMatter:{id:"sso",title:"Sso"},sidebar:"schemaSidebar",previous:{title:"SpaceTypeEdge",permalink:"/developers-site/docs/graphql/objects/space-type-edge"},next:{title:"SsoMembership",permalink:"/developers-site/docs/graphql/objects/sso-membership"}},c=[{value:"Fields",id:"fields",children:[]}],l={toc:c};function u(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type Sso {\n  buttonText: String\n  name: String!\n  status: SsoStatus!\n  type: SsoType!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"buttontext-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"buttonText")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"name-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"name")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,a.kt)("h4",{id:"status-ssostatus"},(0,a.kt)("inlineCode",{parentName:"h4"},"status")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/sso-status"},(0,a.kt)("inlineCode",{parentName:"a"},"SsoStatus!")),")"),(0,a.kt)("h4",{id:"type-ssotype"},(0,a.kt)("inlineCode",{parentName:"h4"},"type")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/sso-type"},(0,a.kt)("inlineCode",{parentName:"a"},"SsoType!")),")"))}u.isMDXComponent=!0}}]);