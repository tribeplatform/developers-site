(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[92536],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(r),f=a,m=s["".concat(l,".").concat(f)]||s[f]||d[f]||i;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=s;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},77322:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return p},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var n=r(22122),a=r(19756),i=(r(67294),r(3905)),o=["components"],p={id:"add-trial-input",title:"AddTrialInput"},l={unversionedId:"graphql/inputs/add-trial-input",id:"graphql/inputs/add-trial-input",isDocsHomePage:!1,title:"AddTrialInput",description:"No description",source:"@site/docs/graphql/inputs/add-trial-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/add-trial-input",permalink:"/docs/graphql/inputs/add-trial-input",editUrl:"https://github.com/tribeplatform/developers-site/edit/master/docs/graphql/inputs/add-trial-input.mdx",version:"current",frontMatter:{id:"add-trial-input",title:"AddTrialInput"},sidebar:"schemaSidebar",previous:{title:"AddSpaceMemberInput",permalink:"/docs/graphql/inputs/add-space-member-input"},next:{title:"BaseCustomFieldSchemaInput",permalink:"/docs/graphql/inputs/base-custom-field-schema-input"}},u=[{value:"Fields",id:"fields",children:[]}],c={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type AddTrialInput {\n  endDate: DateTime!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"enddate-datetime"},(0,i.kt)("inlineCode",{parentName:"h4"},"endDate")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/date-time"},(0,i.kt)("inlineCode",{parentName:"a"},"DateTime!")),")"))}d.isMDXComponent=!0}}]);