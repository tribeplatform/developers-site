(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[36868],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),m=l(n),h=r,k=m["".concat(s,".").concat(h)]||m[h]||c[h]||i;return n?a.createElement(k,o(o({ref:t},d),{},{components:n})):a.createElement(k,o({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},35389:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return s},toc:function(){return l},default:function(){return c}});var a=n(22122),r=n(19756),i=(n(67294),n(3905)),o=["components"],p={id:"app",title:"App"},s={unversionedId:"graphql/objects/app",id:"graphql/objects/app",isDocsHomePage:!1,title:"App",description:"No description",source:"@site/docs/graphql/objects/app.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/app",permalink:"/developers-site/docs/graphql/objects/app",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/graphql/objects/app.mdx",version:"current",frontMatter:{id:"app",title:"App"},sidebar:"schemaSidebar",previous:{title:"ActionPermissions",permalink:"/developers-site/docs/graphql/objects/action-permissions"},next:{title:"AppContexts",permalink:"/developers-site/docs/graphql/objects/app-contexts"}},l=[{value:"Fields",id:"fields",children:[]}],d={toc:l};function c(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type App {\n  about: String\n  authorName: String\n  authorUrl: String\n  banner: Media\n  contexts: AppContexts!\n  createdAt: DateTime!\n  customScript: AppScript\n  description: String\n  embeds: [Embed!]\n  enabledContexts: [PermissionContext!]!\n  favicon: Media\n  id: ID!\n  image: Media\n  installed: Boolean\n  isComingSoon: Boolean!\n  isLocked: Boolean!\n  name: String!\n  owner: Member\n  ownerNetwork: Network\n  privacyPolicyUrl: String\n  secretToken: String\n  slug: String!\n  standing: AppStanding!\n  status: AppStatus!\n  termsOfServiceUrl: String\n  updatedAt: DateTime!\n  whitelistedIps: [String!]!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"about-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"about")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"authorname-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"authorName")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"authorurl-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"authorUrl")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"banner-media"},(0,i.kt)("inlineCode",{parentName:"h4"},"banner")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/unions/media"},(0,i.kt)("inlineCode",{parentName:"a"},"Media")),")"),(0,i.kt)("h4",{id:"contexts-appcontexts"},(0,i.kt)("inlineCode",{parentName:"h4"},"contexts")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/app-contexts"},(0,i.kt)("inlineCode",{parentName:"a"},"AppContexts!")),")"),(0,i.kt)("h4",{id:"createdat-datetime"},(0,i.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/date-time"},(0,i.kt)("inlineCode",{parentName:"a"},"DateTime!")),")"),(0,i.kt)("h4",{id:"customscript-appscript"},(0,i.kt)("inlineCode",{parentName:"h4"},"customScript")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/app-script"},(0,i.kt)("inlineCode",{parentName:"a"},"AppScript")),")"),(0,i.kt)("h4",{id:"description-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"description")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"embeds-embed"},(0,i.kt)("inlineCode",{parentName:"h4"},"embeds")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/embed"},(0,i.kt)("inlineCode",{parentName:"a"},"[Embed!]")),")"),(0,i.kt)("h4",{id:"enabledcontexts-permissioncontext"},(0,i.kt)("inlineCode",{parentName:"h4"},"enabledContexts")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/permission-context"},(0,i.kt)("inlineCode",{parentName:"a"},"[PermissionContext!]!")),")"),(0,i.kt)("h4",{id:"favicon-media"},(0,i.kt)("inlineCode",{parentName:"h4"},"favicon")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/unions/media"},(0,i.kt)("inlineCode",{parentName:"a"},"Media")),")"),(0,i.kt)("h4",{id:"id-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,i.kt)("h4",{id:"image-media"},(0,i.kt)("inlineCode",{parentName:"h4"},"image")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/unions/media"},(0,i.kt)("inlineCode",{parentName:"a"},"Media")),")"),(0,i.kt)("h4",{id:"installed-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"installed")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("h4",{id:"iscomingsoon-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"isComingSoon")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean!")),")"),(0,i.kt)("h4",{id:"islocked-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"isLocked")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean!")),")"),(0,i.kt)("h4",{id:"name-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"name")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,i.kt)("h4",{id:"owner-member"},(0,i.kt)("inlineCode",{parentName:"h4"},"owner")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/member"},(0,i.kt)("inlineCode",{parentName:"a"},"Member")),")"),(0,i.kt)("h4",{id:"ownernetwork-network"},(0,i.kt)("inlineCode",{parentName:"h4"},"ownerNetwork")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/network"},(0,i.kt)("inlineCode",{parentName:"a"},"Network")),")"),(0,i.kt)("h4",{id:"privacypolicyurl-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"privacyPolicyUrl")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"secrettoken-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"secretToken")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"slug-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"slug")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,i.kt)("h4",{id:"standing-appstanding"},(0,i.kt)("inlineCode",{parentName:"h4"},"standing")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/app-standing"},(0,i.kt)("inlineCode",{parentName:"a"},"AppStanding!")),")"),(0,i.kt)("h4",{id:"status-appstatus"},(0,i.kt)("inlineCode",{parentName:"h4"},"status")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/app-status"},(0,i.kt)("inlineCode",{parentName:"a"},"AppStatus!")),")"),(0,i.kt)("h4",{id:"termsofserviceurl-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"termsOfServiceUrl")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"updatedat-datetime"},(0,i.kt)("inlineCode",{parentName:"h4"},"updatedAt")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/date-time"},(0,i.kt)("inlineCode",{parentName:"a"},"DateTime!")),")"),(0,i.kt)("h4",{id:"whitelistedips-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"whitelistedIps")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"[String!]!")),")"))}c.isMDXComponent=!0}}]);