(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[3969],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return d},kt:function(){return l}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(r),l=a,f=u["".concat(c,".").concat(l)]||u[l]||m[l]||p;return r?n.createElement(f,o(o({ref:t},d),{},{components:r})):n.createElement(f,o({ref:t},d))}));function l(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var s=2;s<p;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},79622:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s},default:function(){return m}});var n=r(22122),a=r(19756),p=(r(67294),r(3905)),o=["components"],i={id:"add-space-members",title:"addSpaceMembers"},c={unversionedId:"graphql/mutations/add-space-members",id:"graphql/mutations/add-space-members",isDocsHomePage:!1,title:"addSpaceMembers",description:"No description",source:"@site/docs/graphql/mutations/add-space-members.mdx",sourceDirName:"graphql/mutations",slug:"/graphql/mutations/add-space-members",permalink:"/docs/graphql/mutations/add-space-members",editUrl:"https://github.com/tribeplatform/developers-site/edit/master/docs/graphql/mutations/add-space-members.mdx",version:"current",frontMatter:{id:"add-space-members",title:"addSpaceMembers"},sidebar:"schemaSidebar",previous:{title:"addSpace",permalink:"/docs/graphql/mutations/add-space"},next:{title:"addSpaceTopic",permalink:"/docs/graphql/mutations/add-space-topic"}},s=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],d={toc:s};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,p.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"No description"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"addSpaceMembers(\n  input: [AddSpaceMemberInput!]!\n  spaceId: ID!\n): [SpaceMember!]!\n\n")),(0,p.kt)("h3",{id:"arguments"},"Arguments"),(0,p.kt)("h4",{id:"input-addspacememberinput"},(0,p.kt)("inlineCode",{parentName:"h4"},"input")," (",(0,p.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/add-space-member-input"},(0,p.kt)("inlineCode",{parentName:"a"},"[AddSpaceMemberInput!]!")),")"),(0,p.kt)("h4",{id:"spaceid-id"},(0,p.kt)("inlineCode",{parentName:"h4"},"spaceId")," (",(0,p.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,p.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,p.kt)("h3",{id:"type"},"Type"),(0,p.kt)("h4",{id:"spacemember"},(0,p.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/space-member"},(0,p.kt)("inlineCode",{parentName:"a"},"SpaceMember"))))}m.isMDXComponent=!0}}]);