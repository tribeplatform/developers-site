(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[50463],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||l[m]||p;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<p;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},17804:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u},default:function(){return l}});var n=r(22122),a=r(19756),p=(r(67294),r(3905)),o=["components"],i={id:"update-space-topic",title:"updateSpaceTopic"},c={unversionedId:"graphql/mutations/update-space-topic",id:"graphql/mutations/update-space-topic",isDocsHomePage:!1,title:"updateSpaceTopic",description:"No description",source:"@site/docs/graphql/mutations/update-space-topic.mdx",sourceDirName:"graphql/mutations",slug:"/graphql/mutations/update-space-topic",permalink:"/developers-site/docs/graphql/mutations/update-space-topic",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/graphql/mutations/update-space-topic.mdx",version:"current",frontMatter:{id:"update-space-topic",title:"updateSpaceTopic"},sidebar:"schemaSidebar",previous:{title:"updateSpaceMemberRole",permalink:"/developers-site/docs/graphql/mutations/update-space-member-role"},next:{title:"updateSpaceTopicFilter",permalink:"/developers-site/docs/graphql/mutations/update-space-topic-filter"}},u=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],s={toc:u};function l(e){var t=e.components,r=(0,a.Z)(e,o);return(0,p.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"No description"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"updateSpaceTopic(\n  input: UpdateTopicInput!\n  spaceId: ID!\n  topicId: ID!\n): Topic!\n\n")),(0,p.kt)("h3",{id:"arguments"},"Arguments"),(0,p.kt)("h4",{id:"input-updatetopicinput"},(0,p.kt)("inlineCode",{parentName:"h4"},"input")," (",(0,p.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/update-topic-input"},(0,p.kt)("inlineCode",{parentName:"a"},"UpdateTopicInput!")),")"),(0,p.kt)("h4",{id:"spaceid-id"},(0,p.kt)("inlineCode",{parentName:"h4"},"spaceId")," (",(0,p.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,p.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,p.kt)("h4",{id:"topicid-id"},(0,p.kt)("inlineCode",{parentName:"h4"},"topicId")," (",(0,p.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,p.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,p.kt)("h3",{id:"type"},"Type"),(0,p.kt)("h4",{id:"topic"},(0,p.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/topic"},(0,p.kt)("inlineCode",{parentName:"a"},"Topic"))))}l.isMDXComponent=!0}}]);