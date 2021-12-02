(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[37225],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return h}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=d(t),h=r,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||i;return t?a.createElement(m,o(o({ref:n},s),{},{components:t})):a.createElement(m,o({ref:n},s))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=u;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var d=2;d<i;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},30077:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return p},metadata:function(){return l},toc:function(){return d},default:function(){return c}});var a=t(22122),r=t(19756),i=(t(67294),t(3905)),o=["components"],p={id:"update-space-input",title:"UpdateSpaceInput"},l={unversionedId:"graphql/inputs/update-space-input",id:"graphql/inputs/update-space-input",isDocsHomePage:!1,title:"UpdateSpaceInput",description:"No description",source:"@site/docs/graphql/inputs/update-space-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/update-space-input",permalink:"/docs/graphql/inputs/update-space-input",editUrl:"https://github.com/tribeplatform/developers-site/edit/master/docs/graphql/inputs/update-space-input.mdx",version:"current",frontMatter:{id:"update-space-input",title:"UpdateSpaceInput"},sidebar:"schemaSidebar",previous:{title:"UpdateSpaceDefaultNotificationSettingsInput",permalink:"/docs/graphql/inputs/update-space-default-notification-settings-input"},next:{title:"UpdateSpaceMemberRoleInput",permalink:"/docs/graphql/inputs/update-space-member-role-input"}},d=[{value:"Fields",id:"fields",children:[]}],s={toc:d};function c(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type UpdateSpaceInput {\n  bannerId: String\n  collectionId: ID\n  description: String\n  hidden: Boolean\n  imageId: String\n  inviteOnly: Boolean\n  layout: String\n  name: String\n  nonAdminsCanInvite: Boolean\n  private: Boolean\n  seoDetail: UpdateSpaceSeoDetailInput\n  slug: String\n  whoCanPost: [ID!]\n  whoCanReact: [ID!]\n  whoCanReply: [ID!]\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"bannerid-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"bannerId")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"collectionid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"collectionId")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"description-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"description")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"hidden-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"hidden")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("h4",{id:"imageid-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"imageId")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"inviteonly-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"inviteOnly")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("h4",{id:"layout-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"layout")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"name-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"name")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"nonadminscaninvite-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"nonAdminsCanInvite")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("h4",{id:"private-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"private")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("h4",{id:"seodetail-updatespaceseodetailinput"},(0,i.kt)("inlineCode",{parentName:"h4"},"seoDetail")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/update-space-seo-detail-input"},(0,i.kt)("inlineCode",{parentName:"a"},"UpdateSpaceSeoDetailInput")),")"),(0,i.kt)("h4",{id:"slug-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"slug")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"whocanpost-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"whoCanPost")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"[ID!]")),")"),(0,i.kt)("h4",{id:"whocanreact-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"whoCanReact")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"[ID!]")),")"),(0,i.kt)("h4",{id:"whocanreply-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"whoCanReply")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"[ID!]")),")"))}c.isMDXComponent=!0}}]);