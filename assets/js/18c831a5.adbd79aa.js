(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[47918],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),d=s(n),h=i,u=d["".concat(l,".").concat(h)]||d[h]||c[h]||a;return n?r.createElement(u,o(o({ref:t},p),{},{components:n})):r.createElement(u,o({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var m={};for(var l in t)hasOwnProperty.call(t,l)&&(m[l]=t[l]);m.originalType=e,m.mdxType="string"==typeof e?e:i,o[1]=m;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7636:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return m},metadata:function(){return l},toc:function(){return s},default:function(){return c}});var r=n(22122),i=n(19756),a=(n(67294),n(3905)),o=["components"],m={id:"member-invitation",title:"MemberInvitation"},l={unversionedId:"graphql/objects/member-invitation",id:"graphql/objects/member-invitation",isDocsHomePage:!1,title:"MemberInvitation",description:"No description",source:"@site/docs/graphql/objects/member-invitation.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/member-invitation",permalink:"/developers-site/docs/graphql/objects/member-invitation",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/graphql/objects/member-invitation.mdx",version:"current",frontMatter:{id:"member-invitation",title:"MemberInvitation"},sidebar:"schemaSidebar",previous:{title:"MemberEdge",permalink:"/developers-site/docs/graphql/objects/member-edge"},next:{title:"MemberInvitationEdge",permalink:"/developers-site/docs/graphql/objects/member-invitation-edge"}},s=[{value:"Fields",id:"fields",children:[]}],p={toc:s};function c(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"No description"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"type MemberInvitation {\n  createdAt: DateTime!\n  expiresAt: DateTime!\n  id: ID!\n  invitationMessage: String\n  invitee: Member\n  inviteeEmail: String!\n  inviteeName: String\n  inviter: Member\n  joinedAt: DateTime\n  network: Network\n  role: Role\n  status: MemberInvitationStatus!\n}\n")),(0,a.kt)("h3",{id:"fields"},"Fields"),(0,a.kt)("h4",{id:"createdat-datetime"},(0,a.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/date-time"},(0,a.kt)("inlineCode",{parentName:"a"},"DateTime!")),")"),(0,a.kt)("h4",{id:"expiresat-datetime"},(0,a.kt)("inlineCode",{parentName:"h4"},"expiresAt")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/date-time"},(0,a.kt)("inlineCode",{parentName:"a"},"DateTime!")),")"),(0,a.kt)("h4",{id:"id-id"},(0,a.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,a.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,a.kt)("h4",{id:"invitationmessage-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"invitationMessage")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"invitee-member"},(0,a.kt)("inlineCode",{parentName:"h4"},"invitee")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/member"},(0,a.kt)("inlineCode",{parentName:"a"},"Member")),")"),(0,a.kt)("h4",{id:"inviteeemail-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"inviteeEmail")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,a.kt)("h4",{id:"inviteename-string"},(0,a.kt)("inlineCode",{parentName:"h4"},"inviteeName")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,a.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,a.kt)("h4",{id:"inviter-member"},(0,a.kt)("inlineCode",{parentName:"h4"},"inviter")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/member"},(0,a.kt)("inlineCode",{parentName:"a"},"Member")),")"),(0,a.kt)("h4",{id:"joinedat-datetime"},(0,a.kt)("inlineCode",{parentName:"h4"},"joinedAt")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/date-time"},(0,a.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,a.kt)("h4",{id:"network-network"},(0,a.kt)("inlineCode",{parentName:"h4"},"network")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/network"},(0,a.kt)("inlineCode",{parentName:"a"},"Network")),")"),(0,a.kt)("h4",{id:"role-role"},(0,a.kt)("inlineCode",{parentName:"h4"},"role")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/role"},(0,a.kt)("inlineCode",{parentName:"a"},"Role")),")"),(0,a.kt)("h4",{id:"status-memberinvitationstatus"},(0,a.kt)("inlineCode",{parentName:"h4"},"status")," (",(0,a.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/member-invitation-status"},(0,a.kt)("inlineCode",{parentName:"a"},"MemberInvitationStatus!")),")"))}c.isMDXComponent=!0}}]);