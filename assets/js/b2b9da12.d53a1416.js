(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[93610],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(p,".").concat(m)]||d[m]||l[m]||a;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},16612:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return l}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),i=["components"],s={id:"sso-type",title:"SsoType"},p={unversionedId:"graphql/enums/sso-type",id:"graphql/enums/sso-type",isDocsHomePage:!1,title:"SsoType",description:"No description",source:"@site/docs/graphql/enums/sso-type.mdx",sourceDirName:"graphql/enums",slug:"/graphql/enums/sso-type",permalink:"/developers-site/docs/graphql/enums/sso-type",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/graphql/enums/sso-type.mdx",version:"current",frontMatter:{id:"sso-type",title:"SsoType"},sidebar:"schemaSidebar",previous:{title:"SsoStatus",permalink:"/developers-site/docs/graphql/enums/sso-status"},next:{title:"ThemeStatus",permalink:"/developers-site/docs/graphql/enums/theme-status"}},u=[{value:"Values",id:"values",children:[]}],c={toc:u};function l(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"enum SsoType {\n  facebook\n  google\n  linkedin\n  oauth2\n}\n")),(0,a.kt)("h3",{id:"values"},"Values"),(0,a.kt)("h4",{id:"facebook"},(0,a.kt)("inlineCode",{parentName:"h4"},"facebook")),(0,a.kt)("h4",{id:"google"},(0,a.kt)("inlineCode",{parentName:"h4"},"google")),(0,a.kt)("h4",{id:"linkedin"},(0,a.kt)("inlineCode",{parentName:"h4"},"linkedin")),(0,a.kt)("h4",{id:"oauth2"},(0,a.kt)("inlineCode",{parentName:"h4"},"oauth2")))}l.isMDXComponent=!0}}]);