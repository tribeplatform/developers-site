(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[79947],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||l[m]||p;return n?r.createElement(g,i(i({ref:t},c),{},{components:n})):r.createElement(g,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,i=new Array(p);i[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<p;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},57781:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u},default:function(){return l}});var r=n(22122),a=n(19756),p=(n(67294),n(3905)),i=["components"],o={id:"update-app-network-settings",title:"updateAppNetworkSettings"},s={unversionedId:"graphql/mutations/update-app-network-settings",id:"graphql/mutations/update-app-network-settings",isDocsHomePage:!1,title:"updateAppNetworkSettings",description:"No description",source:"@site/docs/graphql/mutations/update-app-network-settings.mdx",sourceDirName:"graphql/mutations",slug:"/graphql/mutations/update-app-network-settings",permalink:"/docs/graphql/mutations/update-app-network-settings",editUrl:"https://github.com/tribeplatform/developers-site/edit/master/docs/graphql/mutations/update-app-network-settings.mdx",version:"current",frontMatter:{id:"update-app-network-settings",title:"updateAppNetworkSettings"},sidebar:"schemaSidebar",previous:{title:"updateAppInstallation",permalink:"/docs/graphql/mutations/update-app-installation"},next:{title:"updateAppSetting",permalink:"/docs/graphql/mutations/update-app-setting"}},u=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],c={toc:u};function l(e){var t=e.components,n=(0,a.Z)(e,i);return(0,p.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"No description"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"updateAppNetworkSettings(\n  appId: ID!\n  settings: String!\n): Action!\n\n")),(0,p.kt)("h3",{id:"arguments"},"Arguments"),(0,p.kt)("h4",{id:"appid-id"},(0,p.kt)("inlineCode",{parentName:"h4"},"appId")," (",(0,p.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,p.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,p.kt)("h4",{id:"settings-string"},(0,p.kt)("inlineCode",{parentName:"h4"},"settings")," (",(0,p.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,p.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,p.kt)("h3",{id:"type"},"Type"),(0,p.kt)("h4",{id:"action"},(0,p.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/action"},(0,p.kt)("inlineCode",{parentName:"a"},"Action"))))}l.isMDXComponent=!0}}]);