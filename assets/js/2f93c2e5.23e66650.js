(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[20360],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=d(n),m=a,h=u["".concat(c,".").concat(m)]||u[m]||s[m]||i;return n?r.createElement(h,o(o({ref:t},l),{},{components:n})):r.createElement(h,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},83930:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return s}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o=["components"],p={id:"add-image-input",title:"AddImageInput"},c={unversionedId:"graphql/inputs/add-image-input",id:"graphql/inputs/add-image-input",isDocsHomePage:!1,title:"AddImageInput",description:"No description",source:"@site/docs/graphql/inputs/add-image-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/add-image-input",permalink:"/docs/graphql/inputs/add-image-input",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/graphql/inputs/add-image-input.mdx",version:"current",frontMatter:{id:"add-image-input",title:"AddImageInput"},sidebar:"schemaSidebar",previous:{title:"AddHighlightedTopic",permalink:"/docs/graphql/inputs/add-highlighted-topic"},next:{title:"AddMediasInput",permalink:"/docs/graphql/inputs/add-medias-input"}},d=[{value:"Fields",id:"fields",children:[]}],l={toc:d};function s(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type AddImageInput {\n  contentType: String!\n  cropHeight: Int\n  cropWidth: Int\n  cropX: Int\n  cropY: Int\n  cropZoom: Float\n  name: String\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"contenttype-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"contentType")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,i.kt)("h4",{id:"cropheight-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"cropHeight")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"cropwidth-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"cropWidth")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"cropx-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"cropX")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"cropy-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"cropY")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"cropzoom-float"},(0,i.kt)("inlineCode",{parentName:"h4"},"cropZoom")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/float"},(0,i.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,i.kt)("h4",{id:"name-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"name")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"))}s.isMDXComponent=!0}}]);