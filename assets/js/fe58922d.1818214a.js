(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[2352],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(r),f=i,m=d["".concat(u,".").concat(f)]||d[f]||s[f]||o;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},48089:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return p},metadata:function(){return u},toc:function(){return l},default:function(){return s}});var n=r(22122),i=r(19756),o=(r(67294),r(3905)),a=["components"],p={id:"custom-field-input",title:"CustomFieldInput"},u={unversionedId:"graphql/inputs/custom-field-input",id:"graphql/inputs/custom-field-input",isDocsHomePage:!1,title:"CustomFieldInput",description:"No description",source:"@site/docs/graphql/inputs/custom-field-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/custom-field-input",permalink:"/docs/graphql/inputs/custom-field-input",editUrl:"https://github.com/tribeplatform/developers-site/edit/master/docs/graphql/inputs/custom-field-input.mdx",version:"current",frontMatter:{id:"custom-field-input",title:"CustomFieldInput"},sidebar:"schemaSidebar",previous:{title:"CreateWidgetInput",permalink:"/docs/graphql/inputs/create-widget-input"},next:{title:"CustomFieldPrivacyInput",permalink:"/docs/graphql/inputs/custom-field-privacy-input"}},l=[{value:"Fields",id:"fields",children:[]}],c={toc:l};function s(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type CustomFieldInput {\n  key: String!\n  value: String!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"key-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"key")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,o.kt)("h4",{id:"value-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"value")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!")),")"))}s.isMDXComponent=!0}}]);