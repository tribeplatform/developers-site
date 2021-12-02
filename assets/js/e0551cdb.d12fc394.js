(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[32947],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return d},kt:function(){return c}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),m=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),h=m(a),c=n,k=h["".concat(s,".").concat(c)]||h[c]||p[c]||i;return a?r.createElement(k,l(l({ref:t},d),{},{components:a})):r.createElement(k,l({ref:t},d))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var m=2;m<i;m++)l[m]=a[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},94625:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return m},default:function(){return p}});var r=a(22122),n=a(19756),i=(a(67294),a(3905)),l=["components"],o={id:"plural-member",title:"PluralMember"},s={unversionedId:"graphql/objects/plural-member",id:"graphql/objects/plural-member",isDocsHomePage:!1,title:"PluralMember",description:"No description",source:"@site/docs/graphql/objects/plural-member.mdx",sourceDirName:"graphql/objects",slug:"/graphql/objects/plural-member",permalink:"/docs/graphql/objects/plural-member",editUrl:"https://github.com/tribeplatform/developers-site/edit/master/docs/graphql/objects/plural-member.mdx",version:"current",frontMatter:{id:"plural-member",title:"PluralMember"},sidebar:"schemaSidebar",previous:{title:"Plan",permalink:"/docs/graphql/objects/plan"},next:{title:"PluralMemberEdge",permalink:"/docs/graphql/objects/plural-member-edge"}},m=[{value:"Fields",id:"fields",children:[]}],d={toc:m};function p(e){var t=e.components,a=(0,n.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type PluralMember {\n  activeSession: MemberSession\n  attributes: MemberAttributes!\n  authMemberProps: MemberAuthMemberProps\n  banner: Media\n  bannerId: ID\n  createdAt: DateTime\n  displayName: String\n  email: String\n  emailStatus: MemberEmailStatus\n  externalId: ID\n  fields: CustomFields\n  id: ID!\n  lastSeen: DateTime\n  name: String\n  network: PluralNetwork\n  networkId: ID!\n  newEmail: String\n  overrideTeammate: Boolean!\n  profilePicture: Media\n  profilePictureId: ID\n  role: Role\n  roleId: ID!\n  sessions: [MemberSession!]\n  sidebarWidgets: [String!]\n  spaces(limit: Int!): PaginatedSpace\n  status: MemberStatus!\n  tagline: String\n  teammate: Boolean!\n  updatedAt: DateTime\n  username: String!\n  verifiedAt: DateTime\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"activesession-membersession"},(0,i.kt)("inlineCode",{parentName:"h4"},"activeSession")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/member-session"},(0,i.kt)("inlineCode",{parentName:"a"},"MemberSession")),")"),(0,i.kt)("h4",{id:"attributes-memberattributes"},(0,i.kt)("inlineCode",{parentName:"h4"},"attributes")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/member-attributes"},(0,i.kt)("inlineCode",{parentName:"a"},"MemberAttributes!")),")"),(0,i.kt)("h4",{id:"authmemberprops-memberauthmemberprops"},(0,i.kt)("inlineCode",{parentName:"h4"},"authMemberProps")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/member-auth-member-props"},(0,i.kt)("inlineCode",{parentName:"a"},"MemberAuthMemberProps")),")"),(0,i.kt)("h4",{id:"banner-media"},(0,i.kt)("inlineCode",{parentName:"h4"},"banner")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/unions/media"},(0,i.kt)("inlineCode",{parentName:"a"},"Media")),")"),(0,i.kt)("h4",{id:"bannerid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"bannerId")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"createdat-datetime"},(0,i.kt)("inlineCode",{parentName:"h4"},"createdAt")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/date-time"},(0,i.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,i.kt)("h4",{id:"displayname-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"displayName")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"email-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"email")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"emailstatus-memberemailstatus"},(0,i.kt)("inlineCode",{parentName:"h4"},"emailStatus")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/member-email-status"},(0,i.kt)("inlineCode",{parentName:"a"},"MemberEmailStatus")),")"),(0,i.kt)("h4",{id:"externalid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"externalId")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"fields-customfields"},(0,i.kt)("inlineCode",{parentName:"h4"},"fields")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/custom-fields"},(0,i.kt)("inlineCode",{parentName:"a"},"CustomFields")),")"),(0,i.kt)("h4",{id:"id-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"id")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,i.kt)("h4",{id:"lastseen-datetime"},(0,i.kt)("inlineCode",{parentName:"h4"},"lastSeen")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/date-time"},(0,i.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,i.kt)("h4",{id:"name-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"name")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"network-pluralnetwork"},(0,i.kt)("inlineCode",{parentName:"h4"},"network")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/plural-network"},(0,i.kt)("inlineCode",{parentName:"a"},"PluralNetwork")),")"),(0,i.kt)("h4",{id:"networkid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"networkId")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,i.kt)("h4",{id:"newemail-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"newEmail")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"overrideteammate-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"overrideTeammate")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean!")),")"),(0,i.kt)("h4",{id:"profilepicture-media"},(0,i.kt)("inlineCode",{parentName:"h4"},"profilePicture")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/unions/media"},(0,i.kt)("inlineCode",{parentName:"a"},"Media")),")"),(0,i.kt)("h4",{id:"profilepictureid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"profilePictureId")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID")),")"),(0,i.kt)("h4",{id:"role-role"},(0,i.kt)("inlineCode",{parentName:"h4"},"role")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/role"},(0,i.kt)("inlineCode",{parentName:"a"},"Role")),")"),(0,i.kt)("h4",{id:"roleid-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"roleId")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"ID!")),")"),(0,i.kt)("h4",{id:"sessions-membersession"},(0,i.kt)("inlineCode",{parentName:"h4"},"sessions")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/member-session"},(0,i.kt)("inlineCode",{parentName:"a"},"[MemberSession!]")),")"),(0,i.kt)("h4",{id:"sidebarwidgets-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"sidebarWidgets")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"[String!]")),")"),(0,i.kt)("h4",{id:"spaces-paginatedspace"},(0,i.kt)("inlineCode",{parentName:"h4"},"spaces")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/objects/paginated-space"},(0,i.kt)("inlineCode",{parentName:"a"},"PaginatedSpace")),")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("h5",{parentName:"li",id:"limit-int"},(0,i.kt)("inlineCode",{parentName:"h5"},"limit")," (",(0,i.kt)("a",{parentName:"h5",href:"/docs/graphql/scalars/int"},(0,i.kt)("inlineCode",{parentName:"a"},"Int!")),")"))),(0,i.kt)("h4",{id:"status-memberstatus"},(0,i.kt)("inlineCode",{parentName:"h4"},"status")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/member-status"},(0,i.kt)("inlineCode",{parentName:"a"},"MemberStatus!")),")"),(0,i.kt)("h4",{id:"tagline-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"tagline")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"teammate-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"teammate")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean!")),")"),(0,i.kt)("h4",{id:"updatedat-datetime"},(0,i.kt)("inlineCode",{parentName:"h4"},"updatedAt")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/date-time"},(0,i.kt)("inlineCode",{parentName:"a"},"DateTime")),")"),(0,i.kt)("h4",{id:"username-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"username")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String!")),")"),(0,i.kt)("h4",{id:"verifiedat-datetime"},(0,i.kt)("inlineCode",{parentName:"h4"},"verifiedAt")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/date-time"},(0,i.kt)("inlineCode",{parentName:"a"},"DateTime")),")"))}p.isMDXComponent=!0}}]);