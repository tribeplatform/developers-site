(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[62326],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return l},kt:function(){return g}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=u(t),g=o,f=d["".concat(c,".").concat(g)]||d[g]||s[g]||a;return t?n.createElement(f,i(i({ref:r},l),{},{components:t})):n.createElement(f,i({ref:r},l))}));function g(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var u=2;u<a;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},51668:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return s}});var n=t(22122),o=t(19756),a=(t(67294),t(3905)),i=["components"],p={id:"group-edge",title:"GroupEdge"},c={unversionedId:"graphql/objects/group-edge",id:"graphql/objects/group-edge",isDocsHomePage:!1,title:"GroupEdge",description:"No description",source:"@site/docs/graphql/objects/group-edge.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/group-edge",permalink:"/docs/graphql/objects/group-edge",editUrl:"https://github.com/tribeplatform/developers-site/edit/master/docs/graphql/objects/group-edge.mdx",version:"current",frontMatter:{id:"group-edge",title:"GroupEdge"},sidebar:"schemaSidebar",previous:{title:"Group",permalink:"/docs/graphql/objects/group"},next:{title:"Heartbeat",permalink:"/docs/graphql/objects/heartbeat"}},u=[{value:"Fields",id:"fields",children:[]}],l={toc:u};function s(e){var r=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type GroupEdge {\n  cursor: String!\n  node: Group!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"cursor-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"cursor")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,a.kt)("h4",{id:"node-group"},(0,a.kt)("inlineCode",{parentName:"h4"},"node")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/group"},(0,a.kt)("inlineCode",{parentName:"a"},"Group!")),")"))}s.isMDXComponent=!0}}]);