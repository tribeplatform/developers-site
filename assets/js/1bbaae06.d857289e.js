(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[85585],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),s=c(n),m=a,f=s["".concat(u,".").concat(m)]||s[m]||l[m]||o;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=s;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},859:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return l}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i=["components"],p={id:"update-moderation",title:"updateModeration"},u={unversionedId:"graphql/mutations/update-moderation",id:"graphql/mutations/update-moderation",isDocsHomePage:!1,title:"updateModeration",description:"No description",source:"@site/docs/graphql/mutations/update-moderation.mdx",sourceDirName:"graphql/mutations",slug:"/graphql/mutations/update-moderation",permalink:"/docs/graphql/mutations/update-moderation",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/graphql/mutations/update-moderation.mdx",version:"current",frontMatter:{id:"update-moderation",title:"updateModeration"},sidebar:"schemaSidebar",previous:{title:"updateMemberSpaceNotificationSettings",permalink:"/docs/graphql/mutations/update-member-space-notification-settings"},next:{title:"updateModerationSetting",permalink:"/docs/graphql/mutations/update-moderation-setting"}},c=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],d={toc:c};function l(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"updateModeration(\n  input: UpdateModerationInput!\n  moderationId: ID!\n): Action!\n\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"input-updatemoderationinput"},(0,o.kt)("inlineCode",{parentName:"h4"},"input")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/update-moderation-input"},(0,o.kt)("inlineCode",{parentName:"a"},"UpdateModerationInput!")),")"),(0,o.kt)("h4",{id:"moderationid-id"},(0,o.kt)("inlineCode",{parentName:"h4"},"moderationId")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"action"},(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/action"},(0,o.kt)("inlineCode",{parentName:"a"},"Action"))))}l.isMDXComponent=!0}}]);