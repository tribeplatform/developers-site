(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[55136],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),a=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},s=function(e){var t=a(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=a(n),f=i,m=d["".concat(l,".").concat(f)]||d[f]||c[f]||o;return n?r.createElement(m,u(u({ref:t},s),{},{components:n})):r.createElement(m,u({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,u=new Array(o);u[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,u[1]=p;for(var a=2;a<o;a++)u[a]=n[a];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3392:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return l},toc:function(){return a},default:function(){return c}});var r=n(22122),i=n(19756),o=(n(67294),n(3905)),u=["components"],p={id:"custom-fields-input",title:"CustomFieldsInput"},l={unversionedId:"graphql/inputs/custom-fields-input",id:"graphql/inputs/custom-fields-input",isDocsHomePage:!1,title:"CustomFieldsInput",description:"No description",source:"@site/docs/graphql/inputs/custom-fields-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/custom-fields-input",permalink:"/docs/graphql/inputs/custom-fields-input",editUrl:"https://github.com/tribeplatform/developers-site/edit/master/docs/graphql/inputs/custom-fields-input.mdx",version:"current",frontMatter:{id:"custom-fields-input",title:"CustomFieldsInput"},sidebar:"schemaSidebar",previous:{title:"CustomFieldValidatorInput",permalink:"/docs/graphql/inputs/custom-field-validator-input"},next:{title:"DomainAvailabilityInput",permalink:"/docs/graphql/inputs/domain-availability-input"}},a=[{value:"Fields",id:"fields",children:[]}],s={toc:a};function c(e){var t=e.components,n=(0,i.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type CustomFieldsInput {\n  fields: [CustomFieldInput!]!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"fields-customfieldinput"},(0,o.kt)("inlineCode",{parentName:"h4"},"fields")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/custom-field-input"},(0,o.kt)("inlineCode",{parentName:"a"},"[CustomFieldInput!]!")),")"))}c.isMDXComponent=!0}}]);