(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[70074],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,u=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||p;return n?r.createElement(f,i(i({ref:t},l),{},{components:n})):r.createElement(f,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,i=new Array(p);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<p;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},15501:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c},default:function(){return s}});var r=n(22122),a=n(19756),p=(n(67294),n(3905)),i=["components"],o={id:"update-app",title:"updateApp"},u={unversionedId:"graphql/mutations/update-app",id:"graphql/mutations/update-app",isDocsHomePage:!1,title:"updateApp",description:"No description",source:"@site/docs/graphql/mutations/update-app.mdx",sourceDirName:"graphql/mutations",slug:"/graphql/mutations/update-app",permalink:"/docs/graphql/mutations/update-app",editUrl:"https://github.com/tribeplatform/developers-site/edit/master/docs/graphql/mutations/update-app.mdx",version:"current",frontMatter:{id:"update-app",title:"updateApp"},sidebar:"schemaSidebar",previous:{title:"unsubscribeWithToken",permalink:"/docs/graphql/mutations/unsubscribe-with-token"},next:{title:"updateAppInstallation",permalink:"/docs/graphql/mutations/update-app-installation"}},c=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],l={toc:c};function s(e){var t=e.components,n=(0,a.Z)(e,i);return(0,p.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"No description"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"updateApp(\n  id: ID!\n  input: UpdateAppInput!\n): App!\n\n")),(0,p.kt)("h3",{id:"arguments"},"Arguments"),(0,p.kt)("h4",{id:"id-id"},(0,p.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,p.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,p.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,p.kt)("h4",{id:"input-updateappinput"},(0,p.kt)("inlineCode",{parentName:"h4"},"input")," (",(0,p.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/update-app-input"},(0,p.kt)("inlineCode",{parentName:"a"},"UpdateAppInput!")),")"),(0,p.kt)("h3",{id:"type"},"Type"),(0,p.kt)("h4",{id:"app"},(0,p.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/app"},(0,p.kt)("inlineCode",{parentName:"a"},"App"))))}s.isMDXComponent=!0}}]);