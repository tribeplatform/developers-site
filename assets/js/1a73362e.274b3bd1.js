(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[65334],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return p},kt:function(){return d}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function m(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),s=u(t),d=o,f=s["".concat(c,".").concat(d)]||s[d]||l[d]||a;return t?n.createElement(f,i(i({ref:r},p),{},{components:t})):n.createElement(f,i({ref:r},p))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=s;var m={};for(var c in r)hasOwnProperty.call(r,c)&&(m[c]=r[c]);m.originalType=e,m.mdxType="string"==typeof e?e:o,i[1]=m;for(var u=2;u<a;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},63885:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return m},metadata:function(){return c},toc:function(){return u},default:function(){return l}});var n=t(22122),o=t(19756),a=(t(67294),t(3905)),i=["components"],m={id:"remove-member",title:"removeMember"},c={unversionedId:"graphql/mutations/remove-member",id:"graphql/mutations/remove-member",isDocsHomePage:!1,title:"removeMember",description:"No description",source:"@site/docs/graphql/mutations/remove-member.mdx",sourceDirName:"graphql/mutations",slug:"/graphql/mutations/remove-member",permalink:"/docs/graphql/mutations/remove-member",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/graphql/mutations/remove-member.mdx",version:"current",frontMatter:{id:"remove-member",title:"removeMember"},sidebar:"schemaSidebar",previous:{title:"removeGroup",permalink:"/docs/graphql/mutations/remove-group"},next:{title:"removeNetwork",permalink:"/docs/graphql/mutations/remove-network"}},u=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],p={toc:u};function l(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"removeMember(\n  memberId: ID!\n): Action!\n\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"memberid-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"memberId")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"action"},(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/action"},(0,a.kt)("inlineCode",{parentName:"a"},"Action"))))}l.isMDXComponent=!0}}]);