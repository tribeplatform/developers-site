(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[90738],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=i,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||a;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},10185:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var n=r(22122),i=r(19756),a=(r(67294),r(3905)),o=["components"],l={id:"custom-field-validator-input",title:"CustomFieldValidatorInput"},u={unversionedId:"graphql/inputs/custom-field-validator-input",id:"graphql/inputs/custom-field-validator-input",isDocsHomePage:!1,title:"CustomFieldValidatorInput",description:"No description",source:"@site/docs/graphql/inputs/custom-field-validator-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/custom-field-validator-input",permalink:"/docs/graphql/inputs/custom-field-validator-input",editUrl:"https://github.com/tribeplatform/developers-site/edit/master/docs/graphql/inputs/custom-field-validator-input.mdx",version:"current",frontMatter:{id:"custom-field-validator-input",title:"CustomFieldValidatorInput"},sidebar:"schemaSidebar",previous:{title:"CustomFieldTypeOptionsInput",permalink:"/docs/graphql/inputs/custom-field-type-options-input"},next:{title:"CustomFieldsInput",permalink:"/docs/graphql/inputs/custom-fields-input"}},p=[{value:"Fields",id:"fields",children:[]}],s={toc:p};function c(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type CustomFieldValidatorInput {\n  customErrorMessage: String\n  validation: CustomFieldValidators!\n  value: String!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"customerrormessage-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"customErrorMessage")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"validation-customfieldvalidators"},(0,a.kt)("inlineCode",{parentName:"h4"},"validation")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/custom-field-validators"},(0,a.kt)("inlineCode",{parentName:"a"},"CustomFieldValidators!")),")"),(0,a.kt)("h4",{id:"value-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"value")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String!")),")"))}c.isMDXComponent=!0}}]);