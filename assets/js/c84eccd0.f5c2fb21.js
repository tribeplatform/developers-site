(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[9988],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||p;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,i=new Array(p);i[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var s=2;s<p;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},30148:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var r=n(22122),a=n(19756),p=(n(67294),n(3905)),i=["components"],o={id:"add-post-type-template-input",title:"AddPostTypeTemplateInput"},l={unversionedId:"graphql/inputs/add-post-type-template-input",id:"graphql/inputs/add-post-type-template-input",isDocsHomePage:!1,title:"AddPostTypeTemplateInput",description:"No description",source:"@site/docs/graphql/inputs/add-post-type-template-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/add-post-type-template-input",permalink:"/docs/graphql/inputs/add-post-type-template-input",editUrl:"https://github.com/tribeplatform/developers-site/edit/master/docs/graphql/inputs/add-post-type-template-input.mdx",version:"current",frontMatter:{id:"add-post-type-template-input",title:"AddPostTypeTemplateInput"},sidebar:"schemaSidebar",previous:{title:"AddPostInput",permalink:"/docs/graphql/inputs/add-post-input"},next:{title:"AddReactionInput",permalink:"/docs/graphql/inputs/add-reaction-input"}},s=[{value:"Fields",id:"fields",children:[]}],c={toc:s};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,p.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"No description"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"type AddPostTypeTemplateInput {\n  context: PostTypeContext!\n  mappings: [PostTypeMappingInput!]\n  name: String!\n  pluralName: String!\n  shortContentTemplate: String\n  slug: String!\n  titleTemplate: String\n}\n")),(0,p.kt)("h3",{id:"fields"},"Fields"),(0,p.kt)("h4",{id:"context-posttypecontext"},(0,p.kt)("inlineCode",{parentName:"h4"},"context")," (",(0,p.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/post-type-context"},(0,p.kt)("inlineCode",{parentName:"a"},"PostTypeContext!")),")"),(0,p.kt)("h4",{id:"mappings-posttypemappinginput"},(0,p.kt)("inlineCode",{parentName:"h4"},"mappings")," (",(0,p.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/post-type-mapping-input"},(0,p.kt)("inlineCode",{parentName:"a"},"[PostTypeMappingInput!]")),")"),(0,p.kt)("h4",{id:"name-string"},(0,p.kt)("inlineCode",{parentName:"h4"},"name")," (",(0,p.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,p.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,p.kt)("h4",{id:"pluralname-string"},(0,p.kt)("inlineCode",{parentName:"h4"},"pluralName")," (",(0,p.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,p.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,p.kt)("h4",{id:"shortcontenttemplate-string"},(0,p.kt)("inlineCode",{parentName:"h4"},"shortContentTemplate")," (",(0,p.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,p.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,p.kt)("h4",{id:"slug-string"},(0,p.kt)("inlineCode",{parentName:"h4"},"slug")," (",(0,p.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,p.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,p.kt)("h4",{id:"titletemplate-string"},(0,p.kt)("inlineCode",{parentName:"h4"},"titleTemplate")," (",(0,p.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,p.kt)("inlineCode",{parentName:"a"},"String")),")"))}u.isMDXComponent=!0}}]);