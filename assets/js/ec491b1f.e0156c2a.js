(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[34292],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return m},kt:function(){return f}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},m=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),l=u(r),f=i,g=l["".concat(s,".").concat(f)]||l[f]||p[f]||o;return r?n.createElement(g,a(a({ref:t},m),{},{components:r})):n.createElement(g,a({ref:t},m))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=l;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},4694:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var n=r(22122),i=r(19756),o=(r(67294),r(3905)),a=["components"],c={id:"get-member-network-notification-settings",title:"getMemberNetworkNotificationSettings"},s={unversionedId:"graphql/queries/get-member-network-notification-settings",id:"graphql/queries/get-member-network-notification-settings",isDocsHomePage:!1,title:"getMemberNetworkNotificationSettings",description:"No description",source:"@site/docs/graphql/queries/get-member-network-notification-settings.mdx",sourceDirName:"graphql/queries",slug:"/graphql/queries/get-member-network-notification-settings",permalink:"/docs/graphql/queries/get-member-network-notification-settings",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/graphql/queries/get-member-network-notification-settings.mdx",version:"current",frontMatter:{id:"get-member-network-notification-settings",title:"getMemberNetworkNotificationSettings"},sidebar:"schemaSidebar",previous:{title:"getMemberInvitations",permalink:"/docs/graphql/queries/get-member-invitations"},next:{title:"getMemberNotificationSettings",permalink:"/docs/graphql/queries/get-member-notification-settings"}},u=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],m={toc:u};function p(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"getMemberNetworkNotificationSettings(\n  memberId: ID = 0\n): [MemberNetworkNotificationSettings!]!\n\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"memberid-id"},(0,o.kt)("inlineCode",{parentName:"h4"},"memberId")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,o.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"membernetworknotificationsettings"},(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/member-network-notification-settings"},(0,o.kt)("inlineCode",{parentName:"a"},"MemberNetworkNotificationSettings"))))}p.isMDXComponent=!0}}]);