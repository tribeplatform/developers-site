(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[74182],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return u}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),g=d(n),u=a,f=g["".concat(c,".").concat(u)]||g[u]||s[u]||i;return n?r.createElement(f,o(o({ref:t},l),{},{components:n})):r.createElement(f,o({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=g;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},92044:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return s}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o=["components"],p={id:"paginated-widget",title:"PaginatedWidget"},c={unversionedId:"graphql/objects/paginated-widget",id:"graphql/objects/paginated-widget",isDocsHomePage:!1,title:"PaginatedWidget",description:"No description",source:"@site/docs/graphql/objects/paginated-widget.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/paginated-widget",permalink:"/docs/graphql/objects/paginated-widget",editUrl:"https://github.com/tribeplatform/developers-site/edit/master/docs/graphql/objects/paginated-widget.mdx",version:"current",frontMatter:{id:"paginated-widget",title:"PaginatedWidget"},sidebar:"schemaSidebar",previous:{title:"PaginatedTopic",permalink:"/docs/graphql/objects/paginated-topic"},next:{title:"PasswordComplexity",permalink:"/docs/graphql/objects/password-complexity"}},d=[{value:"Fields",id:"fields",children:[]}],l={toc:d};function s(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type PaginatedWidget {\n  edges: [WidgetEdge!]\n  nodes: [Widget!]\n  pageInfo: PageInfo!\n  totalCount: Int!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"edges-widgetedge"},(0,i.kt)("inlineCode",{parentName:"h4"},"edges")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/widget-edge"},(0,i.kt)("inlineCode",{parentName:"a"},"[WidgetEdge!]")),")"),(0,i.kt)("h4",{id:"nodes-widget"},(0,i.kt)("inlineCode",{parentName:"h4"},"nodes")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/widget"},(0,i.kt)("inlineCode",{parentName:"a"},"[Widget!]")),")"),(0,i.kt)("h4",{id:"pageinfo-pageinfo"},(0,i.kt)("inlineCode",{parentName:"h4"},"pageInfo")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/page-info"},(0,i.kt)("inlineCode",{parentName:"a"},"PageInfo!")),")"),(0,i.kt)("h4",{id:"totalcount-int"},(0,i.kt)("inlineCode",{parentName:"h4"},"totalCount")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int!")),")"))}s.isMDXComponent=!0}}]);