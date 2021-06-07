(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[89404],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return u}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var d=n.createContext({}),s=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),c=s(r),u=i,k=c["".concat(d,".").concat(u)]||c[u]||m[u]||a;return r?n.createElement(k,o(o({ref:t},l),{},{components:r})):n.createElement(k,o({ref:t},l))}));function u(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=c;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},21380:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return p},metadata:function(){return d},toc:function(){return s},default:function(){return m}});var n=r(22122),i=r(19756),a=(r(67294),r(3905)),o=["components"],p={id:"add-network-input",title:"AddNetworkInput"},d={unversionedId:"graphql/inputs/add-network-input",id:"graphql/inputs/add-network-input",isDocsHomePage:!1,title:"AddNetworkInput",description:"No description",source:"@site/docs/graphql/inputs/add-network-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/add-network-input",permalink:"/docs/graphql/inputs/add-network-input",editUrl:"https://github.com/tribeplatform/developers-site/edit/master/docs/graphql/inputs/add-network-input.mdx",version:"current",frontMatter:{id:"add-network-input",title:"AddNetworkInput"},sidebar:"schemaSidebar",previous:{title:"AddModerationReportInput",permalink:"/docs/graphql/inputs/add-moderation-report-input"},next:{title:"AddPostInput",permalink:"/docs/graphql/inputs/add-post-input"}},s=[{value:"Fields",id:"fields",children:[]}],l={toc:s};function m(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type AddNetworkInput {\n  description: String\n  domain: String\n  entrancePage: String\n  faviconId: String\n  industry: NetworkIndustryType\n  name: String!\n  owner: JoinNetworkInput!\n  primaryMembers: NetworkPrimaryMembersType\n  referrer: String\n  timeframe: NetworkTimeframeType\n  visibility: NetworkVisibility\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"description-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"description")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"domain-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"domain")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"entrancepage-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"entrancePage")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"faviconid-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"faviconId")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"industry-networkindustrytype"},(0,a.kt)("inlineCode",{parentName:"h4"},"industry")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/network-industry-type"},(0,a.kt)("inlineCode",{parentName:"a"},"NetworkIndustryType")),")"),(0,a.kt)("h4",{id:"name-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"name")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,a.kt)("h4",{id:"owner-joinnetworkinput"},(0,a.kt)("inlineCode",{parentName:"h4"},"owner")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/join-network-input"},(0,a.kt)("inlineCode",{parentName:"a"},"JoinNetworkInput!")),")"),(0,a.kt)("h4",{id:"primarymembers-networkprimarymemberstype"},(0,a.kt)("inlineCode",{parentName:"h4"},"primaryMembers")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/network-primary-members-type"},(0,a.kt)("inlineCode",{parentName:"a"},"NetworkPrimaryMembersType")),")"),(0,a.kt)("h4",{id:"referrer-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"referrer")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"timeframe-networktimeframetype"},(0,a.kt)("inlineCode",{parentName:"h4"},"timeframe")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/network-timeframe-type"},(0,a.kt)("inlineCode",{parentName:"a"},"NetworkTimeframeType")),")"),(0,a.kt)("h4",{id:"visibility-networkvisibility"},(0,a.kt)("inlineCode",{parentName:"h4"},"visibility")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/network-visibility"},(0,a.kt)("inlineCode",{parentName:"a"},"NetworkVisibility")),")"))}m.isMDXComponent=!0}}]);