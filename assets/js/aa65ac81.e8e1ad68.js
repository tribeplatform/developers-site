(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[28675],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},20364:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return s}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),i=["components"],l={id:"extend-current-trial",title:"extendCurrentTrial"},c={unversionedId:"graphql/mutations/extend-current-trial",id:"graphql/mutations/extend-current-trial",isDocsHomePage:!1,title:"extendCurrentTrial",description:"No description",source:"@site/docs/graphql/mutations/extend-current-trial.mdx",sourceDirName:"graphql/mutations",slug:"/graphql/mutations/extend-current-trial",permalink:"/docs/graphql/mutations/extend-current-trial",editUrl:"https://github.com/tribeplatform/developers-site/edit/master/docs/graphql/mutations/extend-current-trial.mdx",version:"current",frontMatter:{id:"extend-current-trial",title:"extendCurrentTrial"},sidebar:"schemaSidebar",previous:{title:"deleteSsoMembership",permalink:"/docs/graphql/mutations/delete-sso-membership"},next:{title:"globalAddAppCollaborator",permalink:"/docs/graphql/mutations/global-add-app-collaborator"}},p=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],u={toc:p};function s(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"extendCurrentTrial(\n  newEndDate: DateTime!\n): Plan!\n\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"newenddate-datetime"},(0,o.kt)("inlineCode",{parentName:"h4"},"newEndDate")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/date-time"},(0,o.kt)("inlineCode",{parentName:"a"},"DateTime!")),")"),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"plan"},(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/plan"},(0,o.kt)("inlineCode",{parentName:"a"},"Plan"))))}s.isMDXComponent=!0}}]);