(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[28072],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return b}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=r.createContext({}),s=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(a.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),b=i,f=d["".concat(a,".").concat(b)]||d[b]||l[b]||o;return n?r.createElement(f,u(u({ref:t},c),{},{components:n})):r.createElement(f,u({ref:t},c))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,u=new Array(o);u[0]=d;var p={};for(var a in t)hasOwnProperty.call(t,a)&&(p[a]=t[a]);p.originalType=e,p.mdxType="string"==typeof e?e:i,u[1]=p;for(var s=2;s<o;s++)u[s]=n[s];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},19585:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return a},toc:function(){return s},default:function(){return l}});var r=n(22122),i=n(19756),o=(n(67294),n(3905)),u=["components"],p={id:"unsubscribe-with-token-input",title:"UnsubscribeWithTokenInput"},a={unversionedId:"graphql/inputs/unsubscribe-with-token-input",id:"graphql/inputs/unsubscribe-with-token-input",isDocsHomePage:!1,title:"UnsubscribeWithTokenInput",description:"No description",source:"@site/docs/graphql/inputs/unsubscribe-with-token-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/unsubscribe-with-token-input",permalink:"/developers-site/docs/graphql/inputs/unsubscribe-with-token-input",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/graphql/inputs/unsubscribe-with-token-input.mdx",version:"current",frontMatter:{id:"unsubscribe-with-token-input",title:"UnsubscribeWithTokenInput"},sidebar:"schemaSidebar",previous:{title:"SupportSsoRedirectInput",permalink:"/developers-site/docs/graphql/inputs/support-sso-redirect-input"},next:{title:"UpdateAppInput",permalink:"/developers-site/docs/graphql/inputs/update-app-input"}},s=[{value:"Fields",id:"fields",children:[]}],c={toc:s};function l(e){var t=e.components,n=(0,i.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type UnsubscribeWithTokenInput {\n  context: UnsubscribeTokenContext!\n  entityId: String\n  token: String!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"context-unsubscribetokencontext"},(0,o.kt)("inlineCode",{parentName:"h4"},"context")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/unsubscribe-token-context"},(0,o.kt)("inlineCode",{parentName:"a"},"UnsubscribeTokenContext!")),")"),(0,o.kt)("h4",{id:"entityid-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"entityId")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,o.kt)("h4",{id:"token-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"token")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!")),")"))}l.isMDXComponent=!0}}]);