(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[87933],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),d=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),l=d(n),m=a,f=l["".concat(s,".").concat(m)]||l[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=l;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},482:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return s},toc:function(){return d},default:function(){return u}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i=["components"],p={id:"add-post",title:"addPost"},s={unversionedId:"graphql/mutations/add-post",id:"graphql/mutations/add-post",isDocsHomePage:!1,title:"addPost",description:"No description",source:"@site/docs/graphql/mutations/add-post.mdx",sourceDirName:"graphql/mutations",slug:"/graphql/mutations/add-post",permalink:"/developers-site/docs/graphql/mutations/add-post",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/graphql/mutations/add-post.mdx",version:"current",frontMatter:{id:"add-post",title:"addPost"},sidebar:"schemaSidebar",previous:{title:"addNewDomain",permalink:"/developers-site/docs/graphql/mutations/add-new-domain"},next:{title:"addReaction",permalink:"/developers-site/docs/graphql/mutations/add-reaction"}},d=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],c={toc:d};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"addPost(\n  input: AddPostInput!\n  spaceId: ID!\n): Post!\n\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"input-addpostinput"},(0,o.kt)("inlineCode",{parentName:"h4"},"input")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/add-post-input"},(0,o.kt)("inlineCode",{parentName:"a"},"AddPostInput!")),")"),(0,o.kt)("h4",{id:"spaceid-id"},(0,o.kt)("inlineCode",{parentName:"h4"},"spaceId")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"post"},(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/post"},(0,o.kt)("inlineCode",{parentName:"a"},"Post"))))}u.isMDXComponent=!0}}]);