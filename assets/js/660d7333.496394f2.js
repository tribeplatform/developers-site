(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[395],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return g}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(n),g=i,m=d["".concat(s,".").concat(g)]||d[g]||u[g]||a;return n?r.createElement(m,o(o({ref:t},l),{},{components:n})):r.createElement(m,o({ref:t},l))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},79284:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var r=n(22122),i=n(19756),a=(n(67294),n(3905)),o=["components"],p={id:"create-widget-input",title:"CreateWidgetInput"},s={unversionedId:"graphql/inputs/create-widget-input",id:"graphql/inputs/create-widget-input",isDocsHomePage:!1,title:"CreateWidgetInput",description:"No description",source:"@site/docs/graphql/inputs/create-widget-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/create-widget-input",permalink:"/docs/graphql/inputs/create-widget-input",editUrl:"https://github.com/tribeplatform/developers-site/edit/master/docs/graphql/inputs/create-widget-input.mdx",version:"current",frontMatter:{id:"create-widget-input",title:"CreateWidgetInput"},sidebar:"schemaSidebar",previous:{title:"CreateLimitedSupportTokenInput",permalink:"/docs/graphql/inputs/create-limited-support-token-input"},next:{title:"DoResetPasswordInput",permalink:"/docs/graphql/inputs/do-reset-password-input"}},c=[{value:"Fields",id:"fields",children:[]}],l={toc:c};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type CreateWidgetInput {\n  context: WidgetContexts!\n  description: String\n  name: String!\n  position: WidgetPositions!\n  url: String!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"context-widgetcontexts"},(0,a.kt)("inlineCode",{parentName:"h4"},"context")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/widget-contexts"},(0,a.kt)("inlineCode",{parentName:"a"},"WidgetContexts!")),")"),(0,a.kt)("h4",{id:"description-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"description")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"name-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"name")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,a.kt)("h4",{id:"position-widgetpositions"},(0,a.kt)("inlineCode",{parentName:"h4"},"position")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/widget-positions"},(0,a.kt)("inlineCode",{parentName:"a"},"WidgetPositions!")),")"),(0,a.kt)("h4",{id:"url-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"url")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String!")),")"))}u.isMDXComponent=!0}}]);