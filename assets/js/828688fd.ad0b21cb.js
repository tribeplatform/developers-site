(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[19160],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return m},kt:function(){return d}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),s=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},m=function(e){var r=s(e.components);return n.createElement(p.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=s(t),d=a,f=u["".concat(p,".").concat(d)]||u[d]||l[d]||o;return t?n.createElement(f,i(i({ref:r},m),{},{components:t})):n.createElement(f,i({ref:r},m))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=u;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},50223:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return l}});var n=t(22122),a=t(19756),o=(t(67294),t(3905)),i=["components"],c={id:"remove-space-members",title:"removeSpaceMembers"},p={unversionedId:"graphql/mutations/remove-space-members",id:"graphql/mutations/remove-space-members",isDocsHomePage:!1,title:"removeSpaceMembers",description:"No description",source:"@site/docs/graphql/mutations/remove-space-members.mdx",sourceDirName:"graphql/mutations",slug:"/graphql/mutations/remove-space-members",permalink:"/developers-site/docs/graphql/mutations/remove-space-members",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/graphql/mutations/remove-space-members.mdx",version:"current",frontMatter:{id:"remove-space-members",title:"removeSpaceMembers"},sidebar:"schemaSidebar",previous:{title:"removeSpace",permalink:"/developers-site/docs/graphql/mutations/remove-space"},next:{title:"removeSpaceType",permalink:"/developers-site/docs/graphql/mutations/remove-space-type"}},s=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],m={toc:s};function l(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"removeSpaceMembers(\n  memberIds: [ID!]!\n  spaceId: ID!\n): [Action!]!\n\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"memberids-id"},(0,o.kt)("inlineCode",{parentName:"h4"},"memberIds")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"[ID!]!")),")"),(0,o.kt)("h4",{id:"spaceid-id"},(0,o.kt)("inlineCode",{parentName:"h4"},"spaceId")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"action"},(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/action"},(0,o.kt)("inlineCode",{parentName:"a"},"Action"))))}l.isMDXComponent=!0}}]);