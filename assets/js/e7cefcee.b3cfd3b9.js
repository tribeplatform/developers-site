(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[42959],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),l=d(r),m=a,f=l["".concat(s,".").concat(m)]||l[m]||u[m]||o;return r?n.createElement(f,p(p({ref:t},c),{},{components:r})):n.createElement(f,p({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=l;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var d=2;d<o;d++)p[d]=r[d];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},57991:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),p=["components"],i={id:"add-app-post",title:"addAppPost"},s={unversionedId:"graphql/mutations/add-app-post",id:"graphql/mutations/add-app-post",isDocsHomePage:!1,title:"addAppPost",description:"No description",source:"@site/docs/graphql/mutations/add-app-post.mdx",sourceDirName:"graphql/mutations",slug:"/graphql/mutations/add-app-post",permalink:"/developers-site/docs/graphql/mutations/add-app-post",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/graphql/mutations/add-app-post.mdx",version:"current",frontMatter:{id:"add-app-post",title:"addAppPost"},sidebar:"schemaSidebar",previous:{title:"search",permalink:"/developers-site/docs/graphql/queries/search"},next:{title:"addEmoji",permalink:"/developers-site/docs/graphql/mutations/add-emoji"}},d=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],c={toc:d};function u(e){var t=e.components,r=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"addAppPost(\n  input: AddPostInput!\n  networkId: ID = 0\n  spaceId: ID!\n): Post!\n\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"input-addpostinput"},(0,o.kt)("inlineCode",{parentName:"h4"},"input")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/add-post-input"},(0,o.kt)("inlineCode",{parentName:"a"},"AddPostInput!")),")"),(0,o.kt)("h4",{id:"networkid-id"},(0,o.kt)("inlineCode",{parentName:"h4"},"networkId")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,o.kt)("h4",{id:"spaceid-id"},(0,o.kt)("inlineCode",{parentName:"h4"},"spaceId")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"post"},(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/post"},(0,o.kt)("inlineCode",{parentName:"a"},"Post"))))}u.isMDXComponent=!0}}]);