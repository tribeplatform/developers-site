(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[76527],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,f=m["".concat(s,".").concat(d)]||m[d]||l[d]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u.mdxType="string"==typeof e?e:o,i[1]=u;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8404:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return u},metadata:function(){return s},toc:function(){return p},default:function(){return l}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),i=["components"],u={id:"member-status-input",title:"MemberStatusInput"},s={unversionedId:"graphql/enums/member-status-input",id:"graphql/enums/member-status-input",isDocsHomePage:!1,title:"MemberStatusInput",description:"No description",source:"@site/docs/graphql/enums/member-status-input.mdx",sourceDirName:"graphql/enums",slug:"/graphql/enums/member-status-input",permalink:"/developers-site/docs/graphql/enums/member-status-input",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/graphql/enums/member-status-input.mdx",version:"current",frontMatter:{id:"member-status-input",title:"MemberStatusInput"},sidebar:"schemaSidebar",previous:{title:"MemberStatus",permalink:"/developers-site/docs/graphql/enums/member-status"},next:{title:"ModerationEntityType",permalink:"/developers-site/docs/graphql/enums/moderation-entity-type"}},p=[{value:"Values",id:"values",children:[]}],c={toc:p};function l(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"enum MemberStatusInput {\n  BLOCKED\n  UNVERIFIED\n  VERIFIED\n}\n")),(0,a.kt)("h3",{id:"values"},"Values"),(0,a.kt)("h4",{id:"blocked"},(0,a.kt)("inlineCode",{parentName:"h4"},"BLOCKED")),(0,a.kt)("h4",{id:"unverified"},(0,a.kt)("inlineCode",{parentName:"h4"},"UNVERIFIED")),(0,a.kt)("h4",{id:"verified"},(0,a.kt)("inlineCode",{parentName:"h4"},"VERIFIED")))}l.isMDXComponent=!0}}]);