(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[61518],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},13448:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i=["components"],p={id:"upload-migration-files",title:"uploadMigrationFiles"},l={unversionedId:"graphql/mutations/upload-migration-files",id:"graphql/mutations/upload-migration-files",isDocsHomePage:!1,title:"uploadMigrationFiles",description:"No description",source:"@site/docs/graphql/mutations/upload-migration-files.mdx",sourceDirName:"graphql/mutations",slug:"/graphql/mutations/upload-migration-files",permalink:"/docs/graphql/mutations/upload-migration-files",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/graphql/mutations/upload-migration-files.mdx",version:"current",frontMatter:{id:"upload-migration-files",title:"uploadMigrationFiles"},sidebar:"schemaSidebar",previous:{title:"updateSso",permalink:"/docs/graphql/mutations/update-sso"},next:{title:"verifyMember",permalink:"/docs/graphql/mutations/verify-member"}},s=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],c={toc:s};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"uploadMigrationFiles(\n  answers: Upload\n  comments: Upload\n  posts: Upload\n  questions: Upload\n  topics: Upload\n  topicSpaces: Upload\n  users: Upload\n): UploadCollectionsResponse!\n\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"answers-upload"},(0,o.kt)("inlineCode",{parentName:"h4"},"answers")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/upload"},(0,o.kt)("inlineCode",{parentName:"a"},"Upload")),")"),(0,o.kt)("h4",{id:"comments-upload"},(0,o.kt)("inlineCode",{parentName:"h4"},"comments")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/upload"},(0,o.kt)("inlineCode",{parentName:"a"},"Upload")),")"),(0,o.kt)("h4",{id:"posts-upload"},(0,o.kt)("inlineCode",{parentName:"h4"},"posts")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/upload"},(0,o.kt)("inlineCode",{parentName:"a"},"Upload")),")"),(0,o.kt)("h4",{id:"questions-upload"},(0,o.kt)("inlineCode",{parentName:"h4"},"questions")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/upload"},(0,o.kt)("inlineCode",{parentName:"a"},"Upload")),")"),(0,o.kt)("h4",{id:"topics-upload"},(0,o.kt)("inlineCode",{parentName:"h4"},"topics")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/upload"},(0,o.kt)("inlineCode",{parentName:"a"},"Upload")),")"),(0,o.kt)("h4",{id:"topicspaces-upload"},(0,o.kt)("inlineCode",{parentName:"h4"},"topicSpaces")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/upload"},(0,o.kt)("inlineCode",{parentName:"a"},"Upload")),")"),(0,o.kt)("h4",{id:"users-upload"},(0,o.kt)("inlineCode",{parentName:"h4"},"users")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/upload"},(0,o.kt)("inlineCode",{parentName:"a"},"Upload")),")"),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"uploadcollectionsresponse"},(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/upload-collections-response"},(0,o.kt)("inlineCode",{parentName:"a"},"UploadCollectionsResponse"))))}u.isMDXComponent=!0}}]);