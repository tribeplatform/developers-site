(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[35684],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),m=p(n),d=o,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(f,s(s({ref:t},l),{},{components:n})):r.createElement(f,s({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=m;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88132:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var r=n(22122),o=n(19756),i=(n(67294),n(3905)),s=["components"],a={id:"permissions",title:"Permissions"},c={unversionedId:"graphql/objects/permissions",id:"graphql/objects/permissions",isDocsHomePage:!1,title:"Permissions",description:"No description",source:"@site/docs/graphql/objects/permissions.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/permissions",permalink:"/docs/graphql/objects/permissions",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/graphql/objects/permissions.mdx",version:"current",frontMatter:{id:"permissions",title:"Permissions"},sidebar:"schemaSidebar",previous:{title:"Payment",permalink:"/docs/graphql/objects/payment"},next:{title:"Plan",permalink:"/docs/graphql/objects/plan"}},p=[{value:"Fields",id:"fields",children:[]}],l={toc:p};function u(e){var t=e.components,n=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type Permissions {\n  actions: [ActionPermissions!]!\n  contextAwareActions: [ContextPermissions!]!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"actions-actionpermissions"},(0,i.kt)("inlineCode",{parentName:"h4"},"actions")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/action-permissions"},(0,i.kt)("inlineCode",{parentName:"a"},"[ActionPermissions!]!")),")"),(0,i.kt)("h4",{id:"contextawareactions-contextpermissions"},(0,i.kt)("inlineCode",{parentName:"h4"},"contextAwareActions")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/context-permissions"},(0,i.kt)("inlineCode",{parentName:"a"},"[ContextPermissions!]!")),")"))}u.isMDXComponent=!0}}]);