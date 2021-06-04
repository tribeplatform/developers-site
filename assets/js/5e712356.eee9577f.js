(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[82718],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=l(n),h=a,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||i;return n?r.createElement(m,p(p({ref:t},c),{},{components:n})):r.createElement(m,p({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,p=new Array(i);p[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,p[1]=o;for(var l=2;l<i;l++)p[l]=n[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},60360:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),p=["components"],o={id:"create-app-input",title:"CreateAppInput"},s={unversionedId:"graphql/inputs/create-app-input",id:"graphql/inputs/create-app-input",isDocsHomePage:!1,title:"CreateAppInput",description:"No description",source:"@site/docs/graphql/inputs/create-app-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/create-app-input",permalink:"/developers-site/docs/graphql/inputs/create-app-input",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/graphql/inputs/create-app-input.mdx",version:"current",frontMatter:{id:"create-app-input",title:"CreateAppInput"},sidebar:"schemaSidebar",previous:{title:"ConfirmResetPasswordInput",permalink:"/developers-site/docs/graphql/inputs/confirm-reset-password-input"},next:{title:"CreateLimitedSupportTokenInput",permalink:"/developers-site/docs/graphql/inputs/create-limited-support-token-input"}},l=[{value:"Fields",id:"fields",children:[]}],c={toc:l};function u(e){var t=e.components,n=(0,a.Z)(e,p);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type CreateAppInput {\n  about: String\n  authorName: String\n  authorUrl: String\n  bannerId: String\n  contexts: AppContextsInput!\n  description: String\n  faviconId: String\n  imageId: String\n  name: String!\n  privacyPolicyUrl: String\n  slug: String!\n  status: AppStatus!\n  termsOfServiceUrl: String\n  whitelistedIps: [String!]!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"about-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"about")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"authorname-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"authorName")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"authorurl-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"authorUrl")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"bannerid-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"bannerId")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"contexts-appcontextsinput"},(0,i.kt)("inlineCode",{parentName:"h4"},"contexts")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/app-contexts-input"},(0,i.kt)("inlineCode",{parentName:"a"},"AppContextsInput!")),")"),(0,i.kt)("h4",{id:"description-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"description")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"faviconid-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"faviconId")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"imageid-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"imageId")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"name-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"name")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,i.kt)("h4",{id:"privacypolicyurl-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"privacyPolicyUrl")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"slug-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"slug")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,i.kt)("h4",{id:"status-appstatus"},(0,i.kt)("inlineCode",{parentName:"h4"},"status")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/app-status"},(0,i.kt)("inlineCode",{parentName:"a"},"AppStatus!")),")"),(0,i.kt)("h4",{id:"termsofserviceurl-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"termsOfServiceUrl")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"whitelistedips-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"whitelistedIps")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"[String!]!")),")"))}u.isMDXComponent=!0}}]);