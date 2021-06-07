(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[98441],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return h}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),m=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=m(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=m(r),h=n,u=c["".concat(l,".").concat(h)]||c[h]||d[h]||i;return r?a.createElement(u,o(o({ref:t},p),{},{components:r})):a.createElement(u,o({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var m=2;m<i;m++)o[m]=r[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},79999:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return m},default:function(){return d}});var a=r(22122),n=r(19756),i=(r(67294),r(3905)),o=["components"],s={id:"member",title:"Member"},l={unversionedId:"graphql/objects/member",id:"graphql/objects/member",isDocsHomePage:!1,title:"Member",description:"No description",source:"@site/docs/graphql/objects/member.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/member",permalink:"/docs/graphql/objects/member",editUrl:"https://github.com/tribeplatform/developers-site/edit/master/docs/graphql/objects/member.mdx",version:"current",frontMatter:{id:"member",title:"Member"},sidebar:"schemaSidebar",previous:{title:"MediaUrls",permalink:"/docs/graphql/objects/media-urls"},next:{title:"MemberAttributes",permalink:"/docs/graphql/objects/member-attributes"}},m=[{value:"Fields",id:"fields",children:[]}],p={toc:m};function d(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type Member {\n  attributes: MemberAttributes!\n  authMemberProps: MemberAuthMemberProps\n  banner: Media\n  displayName: String\n  email: String\n  emailStatus: MemberEmailStatus\n  externalId: ID\n  id: ID!\n  lastSeen: DateTime\n  name: String\n  network: Network\n  profilePicture: Media\n  role: Role\n  sidebarWidgets: [String!]\n  spaces(limit: Int!): PaginatedSpace\n  status: MemberStatus!\n  tagline: String\n  username: String!\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"attributes-memberattributes"},(0,i.kt)("inlineCode",{parentName:"h4"},"attributes")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/member-attributes"},(0,i.kt)("inlineCode",{parentName:"a"},"MemberAttributes!")),")"),(0,i.kt)("h4",{id:"authmemberprops-memberauthmemberprops"},(0,i.kt)("inlineCode",{parentName:"h4"},"authMemberProps")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/member-auth-member-props"},(0,i.kt)("inlineCode",{parentName:"a"},"MemberAuthMemberProps")),")"),(0,i.kt)("h4",{id:"banner-media"},(0,i.kt)("inlineCode",{parentName:"h4"},"banner")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/unions/media"},(0,i.kt)("inlineCode",{parentName:"a"},"Media")),")"),(0,i.kt)("h4",{id:"displayname-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"displayName")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"email-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"email")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"emailstatus-memberemailstatus"},(0,i.kt)("inlineCode",{parentName:"h4"},"emailStatus")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/member-email-status"},(0,i.kt)("inlineCode",{parentName:"a"},"MemberEmailStatus")),")"),(0,i.kt)("h4",{id:"externalid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"externalId")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"id-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,i.kt)("h4",{id:"lastseen-datetime"},(0,i.kt)("inlineCode",{parentName:"h4"},"lastSeen")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/date-time"},(0,i.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,i.kt)("h4",{id:"name-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"name")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"network-network"},(0,i.kt)("inlineCode",{parentName:"h4"},"network")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/network"},(0,i.kt)("inlineCode",{parentName:"a"},"Network")),")"),(0,i.kt)("h4",{id:"profilepicture-media"},(0,i.kt)("inlineCode",{parentName:"h4"},"profilePicture")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/unions/media"},(0,i.kt)("inlineCode",{parentName:"a"},"Media")),")"),(0,i.kt)("h4",{id:"role-role"},(0,i.kt)("inlineCode",{parentName:"h4"},"role")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/role"},(0,i.kt)("inlineCode",{parentName:"a"},"Role")),")"),(0,i.kt)("h4",{id:"sidebarwidgets-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"sidebarWidgets")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"[String!]")),")"),(0,i.kt)("h4",{id:"spaces-paginatedspace"},(0,i.kt)("inlineCode",{parentName:"h4"},"spaces")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/paginated-space"},(0,i.kt)("inlineCode",{parentName:"a"},"PaginatedSpace")),")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"limit-int"},(0,i.kt)("inlineCode",{parentName:"h5"},"limit")," (",(0,i.kt)("a",{parentName:"h5",href:"/docs/graphql/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int!")),")"))),(0,i.kt)("h4",{id:"status-memberstatus"},(0,i.kt)("inlineCode",{parentName:"h4"},"status")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/member-status"},(0,i.kt)("inlineCode",{parentName:"a"},"MemberStatus!")),")"),(0,i.kt)("h4",{id:"tagline-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"tagline")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"username-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"username")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!")),")"))}d.isMDXComponent=!0}}]);