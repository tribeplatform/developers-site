(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[58339],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||o;return r?n.createElement(f,p(p({ref:t},l),{},{components:r})):n.createElement(f,p({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var u=2;u<o;u++)p[u]=r[u];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},98215:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u},default:function(){return s}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),p=["components"],i={id:"update-space-member-role",title:"updateSpaceMemberRole"},c={unversionedId:"graphql/mutations/update-space-member-role",id:"graphql/mutations/update-space-member-role",isDocsHomePage:!1,title:"updateSpaceMemberRole",description:"No description",source:"@site/docs/graphql/mutations/update-space-member-role.mdx",sourceDirName:"graphql/mutations",slug:"/graphql/mutations/update-space-member-role",permalink:"/developers-site/docs/graphql/mutations/update-space-member-role",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/graphql/mutations/update-space-member-role.mdx",version:"current",frontMatter:{id:"update-space-member-role",title:"updateSpaceMemberRole"},sidebar:"schemaSidebar",previous:{title:"updateSpaceHighlightedTopics",permalink:"/developers-site/docs/graphql/mutations/update-space-highlighted-topics"},next:{title:"updateSpaceTopic",permalink:"/developers-site/docs/graphql/mutations/update-space-topic"}},u=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],l={toc:u};function s(e){var t=e.components,r=(0,a.Z)(e,p);return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"updateSpaceMemberRole(\n  input: UpdateSpaceMemberRoleInput!\n  memberId: ID!\n  spaceId: ID!\n): Action!\n\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"input-updatespacememberroleinput"},(0,o.kt)("inlineCode",{parentName:"h4"},"input")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/update-space-member-role-input"},(0,o.kt)("inlineCode",{parentName:"a"},"UpdateSpaceMemberRoleInput!")),")"),(0,o.kt)("h4",{id:"memberid-id"},(0,o.kt)("inlineCode",{parentName:"h4"},"memberId")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,o.kt)("h4",{id:"spaceid-id"},(0,o.kt)("inlineCode",{parentName:"h4"},"spaceId")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"action"},(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/action"},(0,o.kt)("inlineCode",{parentName:"a"},"Action"))))}s.isMDXComponent=!0}}]);