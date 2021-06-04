(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[70785],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),d=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(n),g=a,m=u["".concat(p,".").concat(g)]||u[g]||c[g]||i;return n?r.createElement(m,o(o({ref:t},l),{},{components:n})):r.createElement(m,o({ref:t},l))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},32225:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return c}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o=["components"],s={id:"get-moderations",title:"getModerations"},p={unversionedId:"graphql/queries/get-moderations",id:"graphql/queries/get-moderations",isDocsHomePage:!1,title:"getModerations",description:"No description",source:"@site/docs/graphql/queries/get-moderations.mdx",sourceDirName:"graphql/queries",slug:"/graphql/queries/get-moderations",permalink:"/developers-site/docs/graphql/queries/get-moderations",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/graphql/queries/get-moderations.mdx",version:"current",frontMatter:{id:"get-moderations",title:"getModerations"},sidebar:"schemaSidebar",previous:{title:"getModerationSetting",permalink:"/developers-site/docs/graphql/queries/get-moderation-setting"},next:{title:"getNetwork",permalink:"/developers-site/docs/graphql/queries/get-network"}},d=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],l={toc:d};function c(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"getModerations(\n  after: String\n  before: String\n  entityId: String\n  entityType: ModerationEntityType\n  flaggedBy: FlaggedType\n  limit: Int!\n  offset: Int = 0\n  reverse: Boolean\n  spaceId: String\n  status: ModerationStatus\n): PaginatedModeration!\n\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"after-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"after")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"before-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"before")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"entityid-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"entityId")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"entitytype-moderationentitytype"},(0,i.kt)("inlineCode",{parentName:"h4"},"entityType")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/moderation-entity-type"},(0,i.kt)("inlineCode",{parentName:"a"},"ModerationEntityType")),")"),(0,i.kt)("h4",{id:"flaggedby-flaggedtype"},(0,i.kt)("inlineCode",{parentName:"h4"},"flaggedBy")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/flagged-type"},(0,i.kt)("inlineCode",{parentName:"a"},"FlaggedType")),")"),(0,i.kt)("h4",{id:"limit-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"limit")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,i.kt)("h4",{id:"offset-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"offset")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,i.kt)("h4",{id:"reverse-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"reverse")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("h4",{id:"spaceid-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"spaceId")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"status-moderationstatus"},(0,i.kt)("inlineCode",{parentName:"h4"},"status")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/moderation-status"},(0,i.kt)("inlineCode",{parentName:"a"},"ModerationStatus")),")"),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"paginatedmoderation"},(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/paginated-moderation"},(0,i.kt)("inlineCode",{parentName:"a"},"PaginatedModeration"))))}c.isMDXComponent=!0}}]);