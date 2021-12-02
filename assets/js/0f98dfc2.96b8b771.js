(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[6386],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,l(l({ref:t},s),{},{components:n})):r.createElement(f,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4510:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),l=["components"],i={id:"slate",title:"Slate"},c={unversionedId:"graphql/objects/slate",id:"graphql/objects/slate",isDocsHomePage:!1,title:"Slate",description:"No description",source:"@site/docs/graphql/objects/slate.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/slate",permalink:"/docs/graphql/objects/slate",editUrl:"https://github.com/tribeplatform/developers-site/edit/master/docs/graphql/objects/slate.mdx",version:"current",frontMatter:{id:"slate",title:"Slate"},sidebar:"schemaSidebar",previous:{title:"SignedUrl",permalink:"/docs/graphql/objects/signed-url"},next:{title:"SlateComponent",permalink:"/docs/graphql/objects/slate-component"}},p=[{value:"Fields",id:"fields",children:[]}],s={toc:p};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type Slate {\n  acceptsAfter: Boolean\n  acceptsBefore: Boolean\n  components: [SlateComponentOrPlaceholder!]!\n  editable: SlateEditable\n  id: String!\n  rootComponents: [String!]!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"acceptsafter-boolean"},(0,o.kt)("inlineCode",{parentName:"h4"},"acceptsAfter")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,o.kt)("h4",{id:"acceptsbefore-boolean"},(0,o.kt)("inlineCode",{parentName:"h4"},"acceptsBefore")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,o.kt)("h4",{id:"components-slatecomponentorplaceholder"},(0,o.kt)("inlineCode",{parentName:"h4"},"components")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/unions/slate-component-or-placeholder"},(0,o.kt)("inlineCode",{parentName:"a"},"[SlateComponentOrPlaceholder!]!")),")"),(0,o.kt)("h4",{id:"editable-slateeditable"},(0,o.kt)("inlineCode",{parentName:"h4"},"editable")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/slate-editable"},(0,o.kt)("inlineCode",{parentName:"a"},"SlateEditable")),")"),(0,o.kt)("h4",{id:"id-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,o.kt)("h4",{id:"rootcomponents-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"rootComponents")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"[String!]!")),")"))}d.isMDXComponent=!0}}]);