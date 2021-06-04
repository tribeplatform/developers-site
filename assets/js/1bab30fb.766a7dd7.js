(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[57573],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return d}});var i=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,i,o=function(e,n){if(null==e)return{};var t,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=i.createContext({}),l=function(e){var n=i.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=l(e.components);return i.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},g=i.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),g=l(t),d=o,m=g["".concat(c,".").concat(d)]||g[d]||p[d]||r;return t?i.createElement(m,s(s({ref:n},u),{},{components:t})):i.createElement(m,s({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,s=new Array(r);s[0]=g;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var l=2;l<r;l++)s[l]=t[l];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}g.displayName="MDXCreateElement"},20526:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var i=t(22122),o=t(19756),r=(t(67294),t(3905)),s=["components"],a={sidebar_position:1},c={unversionedId:"guide/single-sign-on/what-is-single-sign-on",id:"guide/single-sign-on/what-is-single-sign-on",isDocsHomePage:!1,title:"What is Single Sign-On?",description:"Single sign-on (SSO) is a centralized session and user authentication service that permits a user to use one set of login credentials to access multiple applications.",source:"@site/docs/guide/single-sign-on/what-is-single-sign-on.md",sourceDirName:"guide/single-sign-on",slug:"/guide/single-sign-on/what-is-single-sign-on",permalink:"/docs/guide/single-sign-on/what-is-single-sign-on",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/guide/single-sign-on/what-is-single-sign-on.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"guideSidebar",previous:{title:"Developing on Tribe",permalink:"/docs/guide/index"},next:{title:"OAuth2 SSO",permalink:"/docs/guide/single-sign-on/oauth2-sso"}},l=[],u={toc:l};function p(e){var n=e.components,t=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,i.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Single sign-on (SSO) is a centralized session and user authentication service that permits a user to use one set of login credentials to access multiple applications."),(0,r.kt)("p",null,"Single sign-on can happen through popular social networks such as Facebook, Twitter, Google, LinkedIn, etc. It can also happen through a company, product, or website's authorization service."),(0,r.kt)("p",null,"Tribe supports the following single sign-on mechanisms:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"SSO through Facebook, Twitter, Google, LinkedIn, and Slack."),(0,r.kt)("li",{parentName:"ul"},"OAuth2 (supporting OpenID, Okta, Auth0)"),(0,r.kt)("li",{parentName:"ul"},"JSON Web Token (JWT) SSO")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"It's possible to combine social login SSO with regular Tribe login or OAuth2. For instance, you can have Twitter, LinkedIn, and OAuth2 SSO together."))),(0,r.kt)("p",null,"The OAuth2 and JWT SSO let your community members login or register using the same username and password they use to login to your product or website. This means your users do not need to have a separate username and password to login to the community. In most cases, they won't even know they're entering another product since the transition between your website and the community will be seamless by utilizing one of the mentioned SSO methods."))}p.isMDXComponent=!0}}]);