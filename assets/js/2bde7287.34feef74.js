(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[77896],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return u},kt:function(){return f}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},l=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,s=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=c(t),f=a,b=l["".concat(p,".").concat(f)]||l[f]||m[f]||s;return t?n.createElement(b,o(o({ref:r},u),{},{components:t})):n.createElement(b,o({ref:r},u))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=t.length,o=new Array(s);o[0]=l;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}l.displayName="MDXCreateElement"},97202:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c},default:function(){return m}});var n=t(22122),a=t(19756),s=(t(67294),t(3905)),o=["components"],i={id:"get-space-membership-request-for-member",title:"getSpaceMembershipRequestForMember"},p={unversionedId:"graphql/queries/get-space-membership-request-for-member",id:"graphql/queries/get-space-membership-request-for-member",isDocsHomePage:!1,title:"getSpaceMembershipRequestForMember",description:"No description",source:"@site/docs/graphql/queries/get-space-membership-request-for-member.mdx",sourceDirName:"graphql/queries",slug:"/graphql/queries/get-space-membership-request-for-member",permalink:"/docs/graphql/queries/get-space-membership-request-for-member",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/graphql/queries/get-space-membership-request-for-member.mdx",version:"current",frontMatter:{id:"get-space-membership-request-for-member",title:"getSpaceMembershipRequestForMember"},sidebar:"schemaSidebar",previous:{title:"getSpaceMembers",permalink:"/docs/graphql/queries/get-space-members"},next:{title:"getSpaceMembershipRequests",permalink:"/docs/graphql/queries/get-space-membership-requests"}},c=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],u={toc:c};function m(e){var r=e.components,t=(0,a.Z)(e,o);return(0,s.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"No description"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-graphql"},"getSpaceMembershipRequestForMember(\n  status: SpaceJoinRequestStatus\n): [SpaceJoinRequest!]!\n\n")),(0,s.kt)("h3",{id:"arguments"},"Arguments"),(0,s.kt)("h4",{id:"status-spacejoinrequeststatus"},(0,s.kt)("inlineCode",{parentName:"h4"},"status")," (",(0,s.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/space-join-request-status"},(0,s.kt)("inlineCode",{parentName:"a"},"SpaceJoinRequestStatus")),")"),(0,s.kt)("h3",{id:"type"},"Type"),(0,s.kt)("h4",{id:"spacejoinrequest"},(0,s.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/space-join-request"},(0,s.kt)("inlineCode",{parentName:"a"},"SpaceJoinRequest"))))}m.isMDXComponent=!0}}]);