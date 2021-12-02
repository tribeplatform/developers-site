(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[31641],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return u}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(r),u=a,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||i;return r?n.createElement(h,o(o({ref:t},p),{},{components:r})):n.createElement(h,o({ref:t},p))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},14864:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return d}});var n=r(22122),a=r(19756),i=(r(67294),r(3905)),o=["components"],s={id:"custom-field-schema",title:"CustomFieldSchema"},l={unversionedId:"graphql/objects/custom-field-schema",id:"graphql/objects/custom-field-schema",isDocsHomePage:!1,title:"CustomFieldSchema",description:"No description",source:"@site/docs/graphql/objects/custom-field-schema.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/custom-field-schema",permalink:"/docs/graphql/objects/custom-field-schema",editUrl:"https://github.com/tribeplatform/developers-site/edit/master/docs/graphql/objects/custom-field-schema.mdx",version:"current",frontMatter:{id:"custom-field-schema",title:"CustomFieldSchema"},sidebar:"schemaSidebar",previous:{title:"CustomFieldPrivacy",permalink:"/docs/graphql/objects/custom-field-privacy"},next:{title:"CustomFieldSettings",permalink:"/docs/graphql/objects/custom-field-settings"}},c=[{value:"Fields",id:"fields",children:[]}],p={toc:c};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type CustomFieldSchema {\n  default: String\n  description: String\n  items: BaseCustomFieldSchema\n  key: String!\n  name: String!\n  properties: [BaseCustomFieldSchema!]\n  readPrivacy: CustomFieldPrivacy\n  required: Boolean\n  searchable: Boolean\n  settings: [CustomFieldSettings!]\n  type: CustomFieldType!\n  typeOptions: CustomFieldTypeOptions\n  validators: [CustomFieldValidator!]\n  writePrivacy: CustomFieldPrivacy\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"default-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"default")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"description-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"description")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"items-basecustomfieldschema"},(0,i.kt)("inlineCode",{parentName:"h4"},"items")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/base-custom-field-schema"},(0,i.kt)("inlineCode",{parentName:"a"},"BaseCustomFieldSchema")),")"),(0,i.kt)("h4",{id:"key-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"key")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,i.kt)("h4",{id:"name-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"name")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,i.kt)("h4",{id:"properties-basecustomfieldschema"},(0,i.kt)("inlineCode",{parentName:"h4"},"properties")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/base-custom-field-schema"},(0,i.kt)("inlineCode",{parentName:"a"},"[BaseCustomFieldSchema!]")),")"),(0,i.kt)("h4",{id:"readprivacy-customfieldprivacy"},(0,i.kt)("inlineCode",{parentName:"h4"},"readPrivacy")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/custom-field-privacy"},(0,i.kt)("inlineCode",{parentName:"a"},"CustomFieldPrivacy")),")"),(0,i.kt)("h4",{id:"required-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"required")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("h4",{id:"searchable-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"searchable")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("h4",{id:"settings-customfieldsettings"},(0,i.kt)("inlineCode",{parentName:"h4"},"settings")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/custom-field-settings"},(0,i.kt)("inlineCode",{parentName:"a"},"[CustomFieldSettings!]")),")"),(0,i.kt)("h4",{id:"type-customfieldtype"},(0,i.kt)("inlineCode",{parentName:"h4"},"type")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/custom-field-type"},(0,i.kt)("inlineCode",{parentName:"a"},"CustomFieldType!")),")"),(0,i.kt)("h4",{id:"typeoptions-customfieldtypeoptions"},(0,i.kt)("inlineCode",{parentName:"h4"},"typeOptions")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/custom-field-type-options"},(0,i.kt)("inlineCode",{parentName:"a"},"CustomFieldTypeOptions")),")"),(0,i.kt)("h4",{id:"validators-customfieldvalidator"},(0,i.kt)("inlineCode",{parentName:"h4"},"validators")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/custom-field-validator"},(0,i.kt)("inlineCode",{parentName:"a"},"[CustomFieldValidator!]")),")"),(0,i.kt)("h4",{id:"writeprivacy-customfieldprivacy"},(0,i.kt)("inlineCode",{parentName:"h4"},"writePrivacy")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/custom-field-privacy"},(0,i.kt)("inlineCode",{parentName:"a"},"CustomFieldPrivacy")),")"))}d.isMDXComponent=!0}}]);