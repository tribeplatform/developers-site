(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[55334],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return y}});var n=r(67294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(r),y=p,f=d["".concat(i,".").concat(y)]||d[y]||u[y]||a;return r?n.createElement(f,o(o({ref:t},l),{},{components:r})):n.createElement(f,o({ref:t},l))}));function y(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:p,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},27533:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},metadata:function(){return i},toc:function(){return c},default:function(){return u}});var n=r(22122),p=r(19756),a=(r(67294),r(3905)),o=["components"],s={id:"space-post-type",title:"spacePostType"},i={unversionedId:"graphql/queries/space-post-type",id:"graphql/queries/space-post-type",isDocsHomePage:!1,title:"spacePostType",description:"No description",source:"@site/docs/graphql/queries/space-post-type.mdx",sourceDirName:"graphql/queries",slug:"/graphql/queries/space-post-type",permalink:"/docs/graphql/queries/space-post-type",editUrl:"https://github.com/tribeplatform/developers-site/edit/master/docs/graphql/queries/space-post-type.mdx",version:"current",frontMatter:{id:"space-post-type",title:"spacePostType"},sidebar:"schemaSidebar",previous:{title:"spacePinnedPosts",permalink:"/docs/graphql/queries/space-pinned-posts"},next:{title:"spacePostTypes",permalink:"/docs/graphql/queries/space-post-types"}},c=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],l={toc:c};function u(e){var t=e.components,r=(0,p.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"spacePostType(\n  postTypeId: Int!\n  spaceId: Int!\n): SpacePostType!\n\n")),(0,a.kt)("h3",{id:"arguments"},"Arguments"),(0,a.kt)("h4",{id:"posttypeid-int"},(0,a.kt)("inlineCode",{parentName:"h4"},"postTypeId")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,a.kt)("h4",{id:"spaceid-int"},(0,a.kt)("inlineCode",{parentName:"h4"},"spaceId")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/int"},(0,a.kt)("inlineCode",{parentName:"a"},"Int!")),")"),(0,a.kt)("h3",{id:"type"},"Type"),(0,a.kt)("h4",{id:"spaceposttype"},(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/space-post-type"},(0,a.kt)("inlineCode",{parentName:"a"},"SpacePostType"))))}u.isMDXComponent=!0}}]);