(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[18927],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(r),d=i,h=s["".concat(l,".").concat(d)]||s[d]||g[d]||a;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=s;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},71822:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return p},metadata:function(){return l},toc:function(){return u},default:function(){return g}});var n=r(22122),i=r(19756),a=(r(67294),r(3905)),o=["components"],p={id:"update-highlighted-tags",title:"UpdateHighlightedTags"},l={unversionedId:"graphql/inputs/update-highlighted-tags",id:"graphql/inputs/update-highlighted-tags",isDocsHomePage:!1,title:"UpdateHighlightedTags",description:"No description",source:"@site/docs/graphql/inputs/update-highlighted-tags.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/update-highlighted-tags",permalink:"/docs/graphql/inputs/update-highlighted-tags",editUrl:"https://github.com/tribeplatform/developers-site/edit/master/docs/graphql/inputs/update-highlighted-tags.mdx",version:"current",frontMatter:{id:"update-highlighted-tags",title:"UpdateHighlightedTags"},sidebar:"schemaSidebar",previous:{title:"UpdateFooterUrl",permalink:"/docs/graphql/inputs/update-footer-url"},next:{title:"UpdateImageInput",permalink:"/docs/graphql/inputs/update-image-input"}},u=[{value:"Fields",id:"fields",children:[]}],c={toc:u};function g(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type UpdateHighlightedTags {\n  highlightedTags: [CreateHighlightedTag!]!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"highlightedtags-createhighlightedtag"},(0,a.kt)("inlineCode",{parentName:"h4"},"highlightedTags")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/create-highlighted-tag"},(0,a.kt)("inlineCode",{parentName:"a"},"[CreateHighlightedTag!]!")),")"))}g.isMDXComponent=!0}}]);