(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[26722],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return g}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(r),g=o,d=m["".concat(c,".").concat(g)]||m[g]||s[g]||a;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},85132:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return s}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),i=["components"],l={id:"global-create-emojis",title:"globalCreateEmojis"},c={unversionedId:"graphql/mutations/global-create-emojis",id:"graphql/mutations/global-create-emojis",isDocsHomePage:!1,title:"globalCreateEmojis",description:"No description",source:"@site/docs/graphql/mutations/global-create-emojis.mdx",sourceDirName:"graphql/mutations",slug:"/graphql/mutations/global-create-emojis",permalink:"/docs/graphql/mutations/global-create-emojis",editUrl:"https://github.com/tribeplatform/developers-site/edit/master/docs/graphql/mutations/global-create-emojis.mdx",version:"current",frontMatter:{id:"global-create-emojis",title:"globalCreateEmojis"},sidebar:"schemaSidebar",previous:{title:"globalCreateApp",permalink:"/docs/graphql/mutations/global-create-app"},next:{title:"globalCreateImages",permalink:"/docs/graphql/mutations/global-create-images"}},p=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],u={toc:p};function s(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"globalCreateEmojis(\n  input: [CreateEmojiInput!]!\n): [Emoji!]!\n\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"input-createemojiinput"},(0,a.kt)("inlineCode",{parentName:"h4"},"input")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/create-emoji-input"},(0,a.kt)("inlineCode",{parentName:"a"},"[CreateEmojiInput!]!")),")"),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"emoji"},(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/emoji"},(0,a.kt)("inlineCode",{parentName:"a"},"Emoji"))))}s.isMDXComponent=!0}}]);