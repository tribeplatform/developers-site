(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[95105],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=u(n),f=a,m=d["".concat(c,".").concat(f)]||d[f]||s[f]||i;return n?r.createElement(m,o(o({ref:t},l),{},{components:n})):r.createElement(m,o({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},24602:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return s}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o=["components"],p={id:"app-standing",title:"AppStanding"},c={unversionedId:"graphql/enums/app-standing",id:"graphql/enums/app-standing",isDocsHomePage:!1,title:"AppStanding",description:"No description",source:"@site/docs/graphql/enums/app-standing.mdx",sourceDirName:"graphql/enums",slug:"/graphql/enums/app-standing",permalink:"/docs/graphql/enums/app-standing",editUrl:"https://github.com/tribeplatform/developers-site/edit/master/docs/graphql/enums/app-standing.mdx",version:"current",frontMatter:{id:"app-standing",title:"AppStanding"},sidebar:"schemaSidebar",previous:{title:"AppScriptPosition",permalink:"/docs/graphql/enums/app-script-position"},next:{title:"AppStatus",permalink:"/docs/graphql/enums/app-status"}},u=[{value:"Values",id:"values",children:[]}],l={toc:u};function s(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"enum AppStanding {\n  OFFICIAL\n  REGULAR\n  VERIFIED\n}\n")),(0,i.kt)("h3",{id:"values"},"Values"),(0,i.kt)("h4",{id:"official"},(0,i.kt)("inlineCode",{parentName:"h4"},"OFFICIAL")),(0,i.kt)("h4",{id:"regular"},(0,i.kt)("inlineCode",{parentName:"h4"},"REGULAR")),(0,i.kt)("h4",{id:"verified"},(0,i.kt)("inlineCode",{parentName:"h4"},"VERIFIED")))}s.isMDXComponent=!0}}]);