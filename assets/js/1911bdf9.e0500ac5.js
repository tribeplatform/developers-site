(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[18462],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function p(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?p(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},p=Object.keys(t);for(r=0;r<p.length;r++)n=p[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(r=0;r<p.length;r++)n=p[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=r.createContext({}),s=function(t){var e=r.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=s(t.components);return r.createElement(l.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,p=t.originalType,l=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),d=s(n),f=a,m=d["".concat(l,".").concat(f)]||d[f]||c[f]||p;return n?r.createElement(m,i(i({ref:e},u),{},{components:n})):r.createElement(m,i({ref:e},u))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var p=n.length,i=new Array(p);i[0]=d;var o={};for(var l in e)hasOwnProperty.call(e,l)&&(o[l]=e[l]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var s=2;s<p;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},47944:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var r=n(22122),a=n(19756),p=(n(67294),n(3905)),i=["components"],o={id:"update-app-installation-input",title:"UpdateAppInstallationInput"},l={unversionedId:"graphql/inputs/update-app-installation-input",id:"graphql/inputs/update-app-installation-input",isDocsHomePage:!1,title:"UpdateAppInstallationInput",description:"No description",source:"@site/docs/graphql/inputs/update-app-installation-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/update-app-installation-input",permalink:"/docs/graphql/inputs/update-app-installation-input",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/graphql/inputs/update-app-installation-input.mdx",version:"current",frontMatter:{id:"update-app-installation-input",title:"UpdateAppInstallationInput"},sidebar:"schemaSidebar",previous:{title:"UpdateAppInput",permalink:"/docs/graphql/inputs/update-app-input"},next:{title:"UpdateFooter",permalink:"/docs/graphql/inputs/update-footer"}},s=[{value:"Fields",id:"fields",children:[]}],u={toc:s};function c(t){var e=t.components,n=(0,a.Z)(t,i);return(0,p.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"No description"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"type UpdateAppInstallationInput {\n  permissions: [String!]\n  status: AppInstallationStatus\n}\n")),(0,p.kt)("h3",{id:"fields"},"Fields"),(0,p.kt)("h4",{id:"permissions-string"},(0,p.kt)("inlineCode",{parentName:"h4"},"permissions")," (",(0,p.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,p.kt)("inlineCode",{parentName:"a"},"[String!]")),")"),(0,p.kt)("h4",{id:"status-appinstallationstatus"},(0,p.kt)("inlineCode",{parentName:"h4"},"status")," (",(0,p.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/app-installation-status"},(0,p.kt)("inlineCode",{parentName:"a"},"AppInstallationStatus")),")"))}c.isMDXComponent=!0}}]);