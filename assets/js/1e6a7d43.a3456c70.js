(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[98423],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return u}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),d=p(n),u=i,f=d["".concat(l,".").concat(u)]||d[u]||s[u]||a;return n?r.createElement(f,o(o({ref:t},m),{},{components:n})):r.createElement(f,o({ref:t},m))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},56842:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return s}});var r=n(22122),i=n(19756),a=(n(67294),n(3905)),o=["components"],c={id:"member-invitation-link",title:"MemberInvitationLink"},l={unversionedId:"graphql/objects/member-invitation-link",id:"graphql/objects/member-invitation-link",isDocsHomePage:!1,title:"MemberInvitationLink",description:"No description",source:"@site/docs/graphql/objects/member-invitation-link.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/member-invitation-link",permalink:"/docs/graphql/objects/member-invitation-link",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/graphql/objects/member-invitation-link.mdx",version:"current",frontMatter:{id:"member-invitation-link",title:"MemberInvitationLink"},sidebar:"schemaSidebar",previous:{title:"MemberInvitationEdge",permalink:"/docs/graphql/objects/member-invitation-edge"},next:{title:"MemberNetworkNotificationSettings",permalink:"/docs/graphql/objects/member-network-notification-settings"}},p=[{value:"Fields",id:"fields",children:[]}],m={toc:p};function s(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type MemberInvitationLink {\n  createdAt: DateTime!\n  id: ID!\n  inviter: Member\n  link: String!\n  network: Network\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"createdat-datetime"},(0,a.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/date-time"},(0,a.kt)("inlineCode",{parentName:"a"},"DateTime!")),")"),(0,a.kt)("h4",{id:"id-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,a.kt)("h4",{id:"inviter-member"},(0,a.kt)("inlineCode",{parentName:"h4"},"inviter")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/member"},(0,a.kt)("inlineCode",{parentName:"a"},"Member")),")"),(0,a.kt)("h4",{id:"link-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"link")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,a.kt)("h4",{id:"network-network"},(0,a.kt)("inlineCode",{parentName:"h4"},"network")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/network"},(0,a.kt)("inlineCode",{parentName:"a"},"Network")),")"))}s.isMDXComponent=!0}}]);