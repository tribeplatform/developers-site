(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[86232],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return c},kt:function(){return y}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),s=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},c=function(e){var r=s(e.components);return n.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=s(t),y=a,d=m["".concat(u,".").concat(y)]||m[y]||p[y]||i;return t?n.createElement(d,l(l({ref:r},c),{},{components:t})):n.createElement(d,l({ref:r},c))}));function y(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=m;var o={};for(var u in r)hasOwnProperty.call(r,u)&&(o[u]=r[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=t[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},28713:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return o},metadata:function(){return u},toc:function(){return s},default:function(){return p}});var n=t(22122),a=t(19756),i=(t(67294),t(3905)),l=["components"],o={id:"username-availability",title:"usernameAvailability"},u={unversionedId:"graphql/queries/username-availability",id:"graphql/queries/username-availability",isDocsHomePage:!1,title:"usernameAvailability",description:"No description",source:"@site/docs/graphql/queries/username-availability.mdx",sourceDirName:"graphql/queries",slug:"/graphql/queries/username-availability",permalink:"/docs/graphql/queries/username-availability",editUrl:"https://github.com/tribeplatform/developers-site/edit/master/docs/graphql/queries/username-availability.mdx",version:"current",frontMatter:{id:"username-availability",title:"usernameAvailability"},sidebar:"schemaSidebar",previous:{title:"tokens",permalink:"/docs/graphql/queries/tokens"},next:{title:"vatTypes",permalink:"/docs/graphql/queries/vat-types"}},s=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],c={toc:s};function p(e){var r=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"usernameAvailability(\n  username: String!\n): UsernameAvailability!\n\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"username-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"username")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"usernameavailability"},(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/username-availability"},(0,i.kt)("inlineCode",{parentName:"a"},"UsernameAvailability"))))}p.isMDXComponent=!0}}]);