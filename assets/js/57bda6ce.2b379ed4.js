(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[86215],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var m=r.createContext({}),u=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(m.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,m=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(n),d=i,f=s["".concat(m,".").concat(d)]||s[d]||l[d]||o;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=s;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},86637:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return m},toc:function(){return u},default:function(){return l}});var r=n(22122),i=n(19756),o=(n(67294),n(3905)),a=["components"],p={id:"invite-members",title:"inviteMembers"},m={unversionedId:"graphql/mutations/invite-members",id:"graphql/mutations/invite-members",isDocsHomePage:!1,title:"inviteMembers",description:"No description",source:"@site/docs/graphql/mutations/invite-members.mdx",sourceDirName:"graphql/mutations",slug:"/graphql/mutations/invite-members",permalink:"/docs/graphql/mutations/invite-members",editUrl:"https://github.com/tribeplatform/developers-site/edit/master/docs/graphql/mutations/invite-members.mdx",version:"current",frontMatter:{id:"invite-members",title:"inviteMembers"},sidebar:"schemaSidebar",previous:{title:"installPostTypeTemplate",permalink:"/docs/graphql/mutations/install-post-type-template"},next:{title:"joinNetwork",permalink:"/docs/graphql/mutations/join-network"}},u=[{value:"Arguments",id:"arguments",children:[]},{value:"Type",id:"type",children:[]}],c={toc:u};function l(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"No description"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},"inviteMembers(\n  input: MemberInvitationInput!\n): [MemberInvitation!]!\n\n")),(0,o.kt)("h3",{id:"arguments"},"Arguments"),(0,o.kt)("h4",{id:"input-memberinvitationinput"},(0,o.kt)("inlineCode",{parentName:"h4"},"input")," (",(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/member-invitation-input"},(0,o.kt)("inlineCode",{parentName:"a"},"MemberInvitationInput!")),")"),(0,o.kt)("h3",{id:"type"},"Type"),(0,o.kt)("h4",{id:"memberinvitation"},(0,o.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/member-invitation"},(0,o.kt)("inlineCode",{parentName:"a"},"MemberInvitation"))))}l.isMDXComponent=!0}}]);