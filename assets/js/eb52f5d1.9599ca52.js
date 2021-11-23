(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[99922],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return s}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=r.createContext({}),l=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),h=l(n),s=i,g=h["".concat(d,".").concat(s)]||h[s]||u[s]||a;return n?r.createElement(g,o(o({ref:t},c),{},{components:n})):r.createElement(g,o({ref:t},c))}));function s(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=h;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},73357:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return d},toc:function(){return l},default:function(){return u}});var r=n(22122),i=n(19756),a=(n(67294),n(3905)),o=["components"],p={id:"add-highlighted-topic",title:"AddHighlightedTopic"},d={unversionedId:"graphql/inputs/add-highlighted-topic",id:"graphql/inputs/add-highlighted-topic",isDocsHomePage:!1,title:"AddHighlightedTopic",description:"No description",source:"@site/docs/graphql/inputs/add-highlighted-topic.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/add-highlighted-topic",permalink:"/docs/graphql/inputs/add-highlighted-topic",editUrl:"https://github.com/tribeplatform/developers-site/edit/master/docs/graphql/inputs/add-highlighted-topic.mdx",version:"current",frontMatter:{id:"add-highlighted-topic",title:"AddHighlightedTopic"},sidebar:"schemaSidebar",previous:{title:"AddGroupInput",permalink:"/docs/graphql/inputs/add-group-input"},next:{title:"AddImageInput",permalink:"/docs/graphql/inputs/add-image-input"}},l=[{value:"Fields",id:"fields",children:[]}],c={toc:l};function u(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type AddHighlightedTopic {\n  indent: Float\n  text: String!\n  topicId: String\n  type: HighlightedTopicType!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"indent-float"},(0,a.kt)("inlineCode",{parentName:"h4"},"indent")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/float"},(0,a.kt)("inlineCode",{parentName:"a"},"Float")),")"),(0,a.kt)("h4",{id:"text-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"text")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,a.kt)("h4",{id:"topicid-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"topicId")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"type-highlightedtopictype"},(0,a.kt)("inlineCode",{parentName:"h4"},"type")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/highlighted-topic-type"},(0,a.kt)("inlineCode",{parentName:"a"},"HighlightedTopicType!")),")"))}u.isMDXComponent=!0}}]);