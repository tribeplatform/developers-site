(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[30465],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),f=l(r),d=i,m=f["".concat(s,".").concat(d)]||f[d]||c[d]||o;return r?n.createElement(m,p(p({ref:t},u),{},{components:r})):n.createElement(m,p({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,p=new Array(o);p[0]=f;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:i,p[1]=a;for(var l=2;l<o;l++)p[l]=r[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},18187:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return a},metadata:function(){return s},toc:function(){return l},default:function(){return c}});var n=r(22122),i=r(19756),o=(r(67294),r(3905)),p=["components"],a={id:"post-list-filter-by-input",title:"PostListFilterByInput"},s={unversionedId:"graphql/inputs/post-list-filter-by-input",id:"graphql/inputs/post-list-filter-by-input",isDocsHomePage:!1,title:"PostListFilterByInput",description:"No description",source:"@site/docs/graphql/inputs/post-list-filter-by-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/post-list-filter-by-input",permalink:"/developers-site/docs/graphql/inputs/post-list-filter-by-input",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/graphql/inputs/post-list-filter-by-input.mdx",version:"current",frontMatter:{id:"post-list-filter-by-input",title:"PostListFilterByInput"},sidebar:"schemaSidebar",previous:{title:"PostContextInput",permalink:"/developers-site/docs/graphql/inputs/post-context-input"},next:{title:"PostMappingFieldInput",permalink:"/developers-site/docs/graphql/inputs/post-mapping-field-input"}},l=[{value:"Fields",id:"fields",children:[]}],u={toc:l};function c(e){var t=e.components,r=(0,i.Z)(e,p);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"type PostListFilterByInput {\n  key: PostListFilterByEnum!\n  operator: PostListFilterByOperator\n  value: String!\n}\n")),(0,o.kt)("h3",{id:"fields"},"Fields"),(0,o.kt)("h4",{id:"key-postlistfilterbyenum"},(0,o.kt)("inlineCode",{parentName:"h4"},"key")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/post-list-filter-by-enum"},(0,o.kt)("inlineCode",{parentName:"a"},"PostListFilterByEnum!")),")"),(0,o.kt)("h4",{id:"operator-postlistfilterbyoperator"},(0,o.kt)("inlineCode",{parentName:"h4"},"operator")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/post-list-filter-by-operator"},(0,o.kt)("inlineCode",{parentName:"a"},"PostListFilterByOperator")),")"),(0,o.kt)("h4",{id:"value-string"},(0,o.kt)("inlineCode",{parentName:"h4"},"value")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,o.kt)("inlineCode",{parentName:"a"},"String!")),")"))}c.isMDXComponent=!0}}]);