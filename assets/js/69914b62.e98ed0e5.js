(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[70154],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return y}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=u(n),y=o,f=m["".concat(c,".").concat(y)]||m[y]||s[y]||a;return n?r.createElement(f,p(p({ref:t},l),{},{components:n})):r.createElement(f,p({ref:t},l))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var u=2;u<a;u++)p[u]=n[u];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},84760:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u},default:function(){return s}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),p=["components"],i={id:"payment-type",title:"PaymentType"},c={unversionedId:"graphql/enums/payment-type",id:"graphql/enums/payment-type",isDocsHomePage:!1,title:"PaymentType",description:"No description",source:"@site/docs/graphql/enums/payment-type.mdx",sourceDirName:"graphql/enums",slug:"/graphql/enums/payment-type",permalink:"/docs/graphql/enums/payment-type",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/graphql/enums/payment-type.mdx",version:"current",frontMatter:{id:"payment-type",title:"PaymentType"},sidebar:"schemaSidebar",previous:{title:"PayloadType",permalink:"/docs/graphql/enums/payload-type"},next:{title:"PermissionContext",permalink:"/docs/graphql/enums/permission-context"}},u=[{value:"Values",id:"values",children:[]}],l={toc:u};function s(e){var t=e.components,n=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"enum PaymentType {\n  ONLINE\n}\n")),(0,a.kt)("h3",{id:"values"},"Values"),(0,a.kt)("h4",{id:"online"},(0,a.kt)("inlineCode",{parentName:"h4"},"ONLINE")))}s.isMDXComponent=!0}}]);