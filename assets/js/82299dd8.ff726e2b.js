(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[80497],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return m},kt:function(){return d}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},m=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),u=l(t),d=a,g=u["".concat(c,".").concat(d)]||u[d]||s[d]||i;return t?n.createElement(g,o(o({ref:r},m),{},{components:t})):n.createElement(g,o({ref:r},m))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},75315:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return s}});var n=t(22122),a=t(19756),i=(t(67294),t(3905)),o=["components"],p={id:"get-member",title:"getMember"},c={unversionedId:"graphql/queries/get-member",id:"graphql/queries/get-member",isDocsHomePage:!1,title:"getMember",description:"No description",source:"@site/docs/graphql/queries/get-member.mdx",sourceDirName:"graphql/queries",slug:"/graphql/queries/get-member",permalink:"/docs/graphql/queries/get-member",editUrl:"https://github.com/tribeplatform/developers-site/edit/master/docs/graphql/queries/get-member.mdx",version:"current",frontMatter:{id:"get-member",title:"getMember"},sidebar:"schemaSidebar",previous:{title:"getMedias",permalink:"/docs/graphql/queries/get-medias"},next:{title:"getMemberAppInstallations",permalink:"/docs/graphql/queries/get-member-app-installations"}},l=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],m={toc:l};function s(e){var r=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"getMember(\n  memberId: ID = 0\n  username: String\n): Member!\n\n")),(0,i.kt)("h3",{id:"arguments"},"Arguments"),(0,i.kt)("h4",{id:"memberid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"memberId")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"username-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"username")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h3",{id:"type"},"Type"),(0,i.kt)("h4",{id:"member"},(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/member"},(0,i.kt)("inlineCode",{parentName:"a"},"Member"))))}s.isMDXComponent=!0}}]);