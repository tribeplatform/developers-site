(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[3969],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return d},kt:function(){return l}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),m=s(r),l=a,f=m["".concat(i,".").concat(l)]||m[l]||u[l]||o;return r?n.createElement(f,p(p({ref:t},d),{},{components:r})):n.createElement(f,p({ref:t},d))}));function l(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,p[1]=c;for(var s=2;s<o;s++)p[s]=r[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},79622:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},metadata:function(){return i},toc:function(){return s},default:function(){return u}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),p=["components"],c={id:"add-space-members",title:"addSpaceMembers"},i={unversionedId:"graphql/mutations/add-space-members",id:"graphql/mutations/add-space-members",isDocsHomePage:!1,title:"addSpaceMembers",description:"No description",source:"@site/docs/graphql/mutations/add-space-members.mdx",sourceDirName:"graphql/mutations",slug:"/graphql/mutations/add-space-members",permalink:"/docs/graphql/mutations/add-space-members",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/graphql/mutations/add-space-members.mdx",version:"current",frontMatter:{id:"add-space-members",title:"addSpaceMembers"},sidebar:"schemaSidebar",previous:{title:"addSpace",permalink:"/docs/graphql/mutations/add-space"},next:{title:"addSpaceTopic",permalink:"/docs/graphql/mutations/add-space-topic"}},s=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],d={toc:s};function u(e){var t=e.components,r=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"addSpaceMembers(\n  input: [AddSpaceMemberInput!]!\n  spaceId: ID!\n): [SpaceMember!]!\n\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"input-addspacememberinput"},(0,o.kt)("inlineCode",{parentName:"h4"},"input")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/add-space-member-input"},(0,o.kt)("inlineCode",{parentName:"a"},"[AddSpaceMemberInput!]!")),")"),(0,o.kt)("h4",{id:"spaceid-id"},(0,o.kt)("inlineCode",{parentName:"h4"},"spaceId")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"spacemember"},(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/space-member"},(0,o.kt)("inlineCode",{parentName:"a"},"SpaceMember"))))}u.isMDXComponent=!0}}]);