(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[66183],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return b}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(r),b=a,f=m["".concat(c,".").concat(b)]||m[b]||u[b]||i;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},55504:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var n=r(22122),a=r(19756),i=(r(67294),r(3905)),o=["components"],l={id:"username-availability",title:"UsernameAvailability"},c={unversionedId:"graphql/objects/username-availability",id:"graphql/objects/username-availability",isDocsHomePage:!1,title:"UsernameAvailability",description:"No description",source:"@site/docs/graphql/objects/username-availability.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/username-availability",permalink:"/docs/graphql/objects/username-availability",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/graphql/objects/username-availability.mdx",version:"current",frontMatter:{id:"username-availability",title:"UsernameAvailability"},sidebar:"schemaSidebar",previous:{title:"UploadCollectionsResponse",permalink:"/docs/graphql/objects/upload-collections-response"},next:{title:"ValuePermissions",permalink:"/docs/graphql/objects/value-permissions"}},s=[{value:"Fields",id:"fields",children:[]}],p={toc:s};function u(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type UsernameAvailability {\n  available: Boolean!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"available-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"available")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean!")),")"))}u.isMDXComponent=!0}}]);