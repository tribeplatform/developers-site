(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[92461],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return s},kt:function(){return d}});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=o.createContext({}),c=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=c(r),d=n,g=m["".concat(p,".").concat(d)]||m[d]||u[d]||a;return r?o.createElement(g,l(l({ref:t},s),{},{components:r})):o.createElement(g,l({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<a;c++)l[c]=r[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},19826:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var o=r(22122),n=r(19756),a=(r(67294),r(3905)),l=["components"],i={id:"global-remove-app-collaborator",title:"globalRemoveAppCollaborator"},p={unversionedId:"graphql/mutations/global-remove-app-collaborator",id:"graphql/mutations/global-remove-app-collaborator",isDocsHomePage:!1,title:"globalRemoveAppCollaborator",description:"No description",source:"@site/docs/graphql/mutations/global-remove-app-collaborator.mdx",sourceDirName:"graphql/mutations",slug:"/graphql/mutations/global-remove-app-collaborator",permalink:"/docs/graphql/mutations/global-remove-app-collaborator",editUrl:"https://github.com/tribeplatform/developers-site/edit/master/docs/graphql/mutations/global-remove-app-collaborator.mdx",version:"current",frontMatter:{id:"global-remove-app-collaborator",title:"globalRemoveAppCollaborator"},sidebar:"schemaSidebar",previous:{title:"globalRegenerateClientSecret",permalink:"/docs/graphql/mutations/global-regenerate-client-secret"},next:{title:"globalTestAppWebhook",permalink:"/docs/graphql/mutations/global-test-app-webhook"}},c=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],s={toc:c};function u(e){var t=e.components,r=(0,n.Z)(e,l);return(0,a.kt)("wrapper",(0,o.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"globalRemoveAppCollaborator(\n  appId: String!\n  collaboratorId: String!\n): Action!\n\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"appid-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"appId")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,a.kt)("h4",{id:"collaboratorid-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"collaboratorId")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"action"},(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/action"},(0,a.kt)("inlineCode",{parentName:"a"},"Action"))))}u.isMDXComponent=!0}}]);