(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[97819],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(h,p(p({ref:t},u),{},{components:n})):r.createElement(h,p({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var s=2;s<i;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},30070:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),p=["components"],o={id:"post-type-mapping-input",title:"PostTypeMappingInput"},l={unversionedId:"graphql/inputs/post-type-mapping-input",id:"graphql/inputs/post-type-mapping-input",isDocsHomePage:!1,title:"PostTypeMappingInput",description:"No description",source:"@site/docs/graphql/inputs/post-type-mapping-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/post-type-mapping-input",permalink:"/docs/graphql/inputs/post-type-mapping-input",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/graphql/inputs/post-type-mapping-input.mdx",version:"current",frontMatter:{id:"post-type-mapping-input",title:"PostTypeMappingInput"},sidebar:"schemaSidebar",previous:{title:"PostMappingFieldInput",permalink:"/docs/graphql/inputs/post-mapping-field-input"},next:{title:"PurchaseInput",permalink:"/docs/graphql/inputs/purchase-input"}},s=[{value:"Fields",id:"fields",children:[]}],u={toc:s};function c(e){var t=e.components,n=(0,a.Z)(e,p);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type PostTypeMappingInput {\n  default: String\n  description: String\n  field: PostFieldsEnum!\n  isMainContent: Boolean\n  isSearchable: Boolean\n  key: String!\n  required: Boolean\n  title: String\n  type: PostMappingTypeEnum!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"default-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"default")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"description-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"description")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"field-postfieldsenum"},(0,i.kt)("inlineCode",{parentName:"h4"},"field")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/post-fields-enum"},(0,i.kt)("inlineCode",{parentName:"a"},"PostFieldsEnum!")),")"),(0,i.kt)("h4",{id:"ismaincontent-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"isMainContent")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("h4",{id:"issearchable-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"isSearchable")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("h4",{id:"key-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"key")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,i.kt)("h4",{id:"required-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"required")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("h4",{id:"title-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"title")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"type-postmappingtypeenum"},(0,i.kt)("inlineCode",{parentName:"h4"},"type")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/post-mapping-type-enum"},(0,i.kt)("inlineCode",{parentName:"a"},"PostMappingTypeEnum!")),")"))}c.isMDXComponent=!0}}]);