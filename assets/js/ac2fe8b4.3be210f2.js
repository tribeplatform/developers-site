(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[17803],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},83130:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var r=n(22122),i=n(19756),a=(n(67294),n(3905)),o=["components"],p={id:"edit-image-input",title:"EditImageInput"},c={unversionedId:"graphql/inputs/edit-image-input",id:"graphql/inputs/edit-image-input",isDocsHomePage:!1,title:"EditImageInput",description:"No description",source:"@site/docs/graphql/inputs/edit-image-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/edit-image-input",permalink:"/developers-site/docs/graphql/inputs/edit-image-input",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/graphql/inputs/edit-image-input.mdx",version:"current",frontMatter:{id:"edit-image-input",title:"EditImageInput"},sidebar:"schemaSidebar",previous:{title:"DoResetPasswordInput",permalink:"/developers-site/docs/graphql/inputs/do-reset-password-input"},next:{title:"FiltersInput",permalink:"/developers-site/docs/graphql/inputs/filters-input"}},l=[{value:"Fields",id:"fields",children:[]}],s={toc:l};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type EditImageInput {\n  cropHeight: Int\n  cropWidth: Int\n  cropX: Int\n  cropY: Int\n  cropZoom: Float\n  name: String\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"cropheight-int"},(0,a.kt)("inlineCode",{parentName:"h4"},"cropHeight")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,a.kt)("h4",{id:"cropwidth-int"},(0,a.kt)("inlineCode",{parentName:"h4"},"cropWidth")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,a.kt)("h4",{id:"cropx-int"},(0,a.kt)("inlineCode",{parentName:"h4"},"cropX")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,a.kt)("h4",{id:"cropy-int"},(0,a.kt)("inlineCode",{parentName:"h4"},"cropY")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int")),")"),(0,a.kt)("h4",{id:"cropzoom-float"},(0,a.kt)("inlineCode",{parentName:"h4"},"cropZoom")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/float"},(0,a.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,a.kt)("h4",{id:"name-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"name")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"))}u.isMDXComponent=!0}}]);