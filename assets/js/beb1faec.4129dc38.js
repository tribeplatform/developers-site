(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[68508],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(l,".").concat(d)]||u[d]||f[d]||o;return n?a.createElement(m,i(i({ref:t},s),{},{components:n})):a.createElement(m,i({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},28293:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),i=["components"],c={id:"space-default-notification-settings",title:"SpaceDefaultNotificationSettings"},l={unversionedId:"graphql/objects/space-default-notification-settings",id:"graphql/objects/space-default-notification-settings",isDocsHomePage:!1,title:"SpaceDefaultNotificationSettings",description:"No description",source:"@site/docs/graphql/objects/space-default-notification-settings.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/space-default-notification-settings",permalink:"/docs/graphql/objects/space-default-notification-settings",editUrl:"https://github.com/tribeplatform/developers-site/edit/master/docs/graphql/objects/space-default-notification-settings.mdx",version:"current",frontMatter:{id:"space-default-notification-settings",title:"SpaceDefaultNotificationSettings"},sidebar:"schemaSidebar",previous:{title:"SpaceAuthMemberProps",permalink:"/docs/graphql/objects/space-auth-member-props"},next:{title:"SpaceEdge",permalink:"/docs/graphql/objects/space-edge"}},p=[{value:"Fields",id:"fields",children:[]}],s={toc:p};function f(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type SpaceDefaultNotificationSettings {\n  channel: NotificationChannel!\n  enabled: Boolean\n  isDefault: Boolean!\n  preference: SpaceNotificationPreference\n  sameAsDefault: Boolean!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"channel-notificationchannel"},(0,o.kt)("inlineCode",{parentName:"h4"},"channel")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/notification-channel"},(0,o.kt)("inlineCode",{parentName:"a"},"NotificationChannel!")),")"),(0,o.kt)("h4",{id:"enabled-boolean"},(0,o.kt)("inlineCode",{parentName:"h4"},"enabled")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,o.kt)("h4",{id:"isdefault-boolean"},(0,o.kt)("inlineCode",{parentName:"h4"},"isDefault")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean!")),")"),(0,o.kt)("h4",{id:"preference-spacenotificationpreference"},(0,o.kt)("inlineCode",{parentName:"h4"},"preference")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/space-notification-preference"},(0,o.kt)("inlineCode",{parentName:"a"},"SpaceNotificationPreference")),")"),(0,o.kt)("h4",{id:"sameasdefault-boolean"},(0,o.kt)("inlineCode",{parentName:"h4"},"sameAsDefault")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,o.kt)("inlineCode",{parentName:"a"},"Boolean!")),")"))}f.isMDXComponent=!0}}]);