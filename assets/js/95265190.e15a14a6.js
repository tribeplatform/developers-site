(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[76527],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(r),d=a,f=m["".concat(s,".").concat(d)]||m[d]||l[d]||o;return r?n.createElement(f,u(u({ref:t},c),{},{components:r})):n.createElement(f,u({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,u=new Array(o);u[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,u[1]=i;for(var p=2;p<o;p++)u[p]=r[p];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8404:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p},default:function(){return l}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),u=["components"],i={id:"member-status-input",title:"MemberStatusInput"},s={unversionedId:"graphql/enums/member-status-input",id:"graphql/enums/member-status-input",isDocsHomePage:!1,title:"MemberStatusInput",description:"No description",source:"@site/docs/graphql/enums/member-status-input.mdx",sourceDirName:"graphql/enums",slug:"/graphql/enums/member-status-input",permalink:"/docs/graphql/enums/member-status-input",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/graphql/enums/member-status-input.mdx",version:"current",frontMatter:{id:"member-status-input",title:"MemberStatusInput"},sidebar:"schemaSidebar",previous:{title:"MemberStatus",permalink:"/docs/graphql/enums/member-status"},next:{title:"ModerationEntityType",permalink:"/docs/graphql/enums/moderation-entity-type"}},p=[{value:"Values",id:"values",children:[]}],c={toc:p};function l(e){var t=e.components,r=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"enum MemberStatusInput {\n  BLOCKED\n  UNVERIFIED\n  VERIFIED\n}\n")),(0,o.kt)("h3",{id:"values"},"Values"),(0,o.kt)("h4",{id:"blocked"},(0,o.kt)("inlineCode",{parentName:"h4"},"BLOCKED")),(0,o.kt)("h4",{id:"unverified"},(0,o.kt)("inlineCode",{parentName:"h4"},"UNVERIFIED")),(0,o.kt)("h4",{id:"verified"},(0,o.kt)("inlineCode",{parentName:"h4"},"VERIFIED")))}l.isMDXComponent=!0}}]);