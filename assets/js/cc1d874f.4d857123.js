(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[50857],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),g=c(n),d=i,m=g["".concat(s,".").concat(d)]||g[d]||u[d]||a;return n?r.createElement(m,p(p({ref:t},l),{},{components:n})):r.createElement(m,p({ref:t},l))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,p=new Array(a);p[0]=g;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,p[1]=o;for(var c=2;c<a;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},65330:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var r=n(22122),i=n(19756),a=(n(67294),n(3905)),p=["components"],o={id:"get-app-settings",title:"getAppSettings"},s={unversionedId:"graphql/queries/get-app-settings",id:"graphql/queries/get-app-settings",isDocsHomePage:!1,title:"getAppSettings",description:"No description",source:"@site/docs/graphql/queries/get-app-settings.mdx",sourceDirName:"graphql/queries",slug:"/graphql/queries/get-app-settings",permalink:"/docs/graphql/queries/get-app-settings",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/graphql/queries/get-app-settings.mdx",version:"current",frontMatter:{id:"get-app-settings",title:"getAppSettings"},sidebar:"schemaSidebar",previous:{title:"getAppNetworkSettings",permalink:"/docs/graphql/queries/get-app-network-settings"},next:{title:"getAppSpaceSettings",permalink:"/docs/graphql/queries/get-app-space-settings"}},c=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],l={toc:c};function u(e){var t=e.components,n=(0,i.Z)(e,p);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"getAppSettings(\n  context: PermissionContext!\n  entityId: ID = 0\n  networkId: ID!\n): AppSetting!\n\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"context-permissioncontext"},(0,a.kt)("inlineCode",{parentName:"h4"},"context")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/permission-context"},(0,a.kt)("inlineCode",{parentName:"a"},"PermissionContext!")),")"),(0,a.kt)("h4",{id:"entityid-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"entityId")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,a.kt)("h4",{id:"networkid-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"networkId")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"appsetting"},(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/app-setting"},(0,a.kt)("inlineCode",{parentName:"a"},"AppSetting"))))}u.isMDXComponent=!0}}]);