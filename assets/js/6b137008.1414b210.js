(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[95430],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,f=m["".concat(i,".").concat(d)]||m[d]||l[d]||a;return r?n.createElement(f,s(s({ref:t},c),{},{components:r})):n.createElement(f,s({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:o,s[1]=u;for(var p=2;p<a;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},7505:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return u},metadata:function(){return i},toc:function(){return p},default:function(){return l}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),s=["components"],u={id:"import-request-status",title:"ImportRequestStatus"},i={unversionedId:"graphql/enums/import-request-status",id:"graphql/enums/import-request-status",isDocsHomePage:!1,title:"ImportRequestStatus",description:"No description",source:"@site/docs/graphql/enums/import-request-status.mdx",sourceDirName:"graphql/enums",slug:"/graphql/enums/import-request-status",permalink:"/developers-site/docs/graphql/enums/import-request-status",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/graphql/enums/import-request-status.mdx",version:"current",frontMatter:{id:"import-request-status",title:"ImportRequestStatus"},sidebar:"schemaSidebar",previous:{title:"ImportRequestStage",permalink:"/developers-site/docs/graphql/enums/import-request-stage"},next:{title:"MemberEmailStatus",permalink:"/developers-site/docs/graphql/enums/member-email-status"}},p=[{value:"Values",id:"values",children:[]}],c={toc:p};function l(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"enum ImportRequestStatus {\n  DONE\n  IN_PROGRESS\n}\n")),(0,a.kt)("h3",{id:"values"},"Values"),(0,a.kt)("h4",{id:"done"},(0,a.kt)("inlineCode",{parentName:"h4"},"DONE")),(0,a.kt)("h4",{id:"in_progress"},(0,a.kt)("inlineCode",{parentName:"h4"},"IN_PROGRESS")))}l.isMDXComponent=!0}}]);