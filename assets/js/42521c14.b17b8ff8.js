(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[16824],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var a=r.createContext({}),c=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(a.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=c(n),f=i,g=d["".concat(a,".").concat(f)]||d[f]||l[f]||o;return n?r.createElement(g,p(p({ref:t},s),{},{components:n})):r.createElement(g,p({ref:t},s))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,p=new Array(o);p[0]=d;var u={};for(var a in t)hasOwnProperty.call(t,a)&&(u[a]=t[a]);u.originalType=e,u.mdxType="string"==typeof e?e:i,p[1]=u;for(var c=2;c<o;c++)p[c]=n[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},69709:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return u},metadata:function(){return a},toc:function(){return c},default:function(){return l}});var r=n(22122),i=n(19756),o=(n(67294),n(3905)),p=["components"],u={id:"get-subscription-input",title:"GetSubscriptionInput"},a={unversionedId:"graphql/inputs/get-subscription-input",id:"graphql/inputs/get-subscription-input",isDocsHomePage:!1,title:"GetSubscriptionInput",description:"No description",source:"@site/docs/graphql/inputs/get-subscription-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/get-subscription-input",permalink:"/docs/graphql/inputs/get-subscription-input",editUrl:"https://github.com/tribeplatform/developers-site/edit/master/docs/graphql/inputs/get-subscription-input.mdx",version:"current",frontMatter:{id:"get-subscription-input",title:"GetSubscriptionInput"},sidebar:"schemaSidebar",previous:{title:"GetReportInput",permalink:"/docs/graphql/inputs/get-report-input"},next:{title:"InstallAppInput",permalink:"/docs/graphql/inputs/install-app-input"}},c=[{value:"Fields",id:"fields",children:[]}],s={toc:c};function l(e){var t=e.components,n=(0,i.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type GetSubscriptionInput {\n  id: String!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"id-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!")),")"))}l.isMDXComponent=!0}}]);