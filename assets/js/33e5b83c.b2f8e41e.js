(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[81012],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=l(n),u=a,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},326:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return s},toc:function(){return l},default:function(){return d}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i=["components"],p={id:"post-type-mapping",title:"PostTypeMapping"},s={unversionedId:"graphql/objects/post-type-mapping",id:"graphql/objects/post-type-mapping",isDocsHomePage:!1,title:"PostTypeMapping",description:"No description",source:"@site/docs/graphql/objects/post-type-mapping.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/post-type-mapping",permalink:"/developers-site/docs/graphql/objects/post-type-mapping",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/graphql/objects/post-type-mapping.mdx",version:"current",frontMatter:{id:"post-type-mapping",title:"PostTypeMapping"},sidebar:"schemaSidebar",previous:{title:"PostType",permalink:"/developers-site/docs/graphql/objects/post-type"},next:{title:"PostTypeTemplate",permalink:"/developers-site/docs/graphql/objects/post-type-template"}},l=[{value:"Fields",id:"fields",children:[]}],c={toc:l};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type PostTypeMapping {\n  default: String\n  description: String\n  field: PostFieldsEnum!\n  isMainContent: Boolean\n  isSearchable: Boolean\n  key: String!\n  required: Boolean\n  title: String\n  type: PostMappingTypeEnum!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"default-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"default")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("h4",{id:"description-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"description")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("h4",{id:"field-postfieldsenum"},(0,o.kt)("inlineCode",{parentName:"h4"},"field")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/post-fields-enum"},(0,o.kt)("inlineCode",{parentName:"a"},"PostFieldsEnum!")),")"),(0,o.kt)("h4",{id:"ismaincontent-boolean"},(0,o.kt)("inlineCode",{parentName:"h4"},"isMainContent")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,o.kt)("h4",{id:"issearchable-boolean"},(0,o.kt)("inlineCode",{parentName:"h4"},"isSearchable")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,o.kt)("h4",{id:"key-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"key")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,o.kt)("h4",{id:"required-boolean"},(0,o.kt)("inlineCode",{parentName:"h4"},"required")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,o.kt)("h4",{id:"title-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"title")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("h4",{id:"type-postmappingtypeenum"},(0,o.kt)("inlineCode",{parentName:"h4"},"type")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/post-mapping-type-enum"},(0,o.kt)("inlineCode",{parentName:"a"},"PostMappingTypeEnum!")),")"))}d.isMDXComponent=!0}}]);