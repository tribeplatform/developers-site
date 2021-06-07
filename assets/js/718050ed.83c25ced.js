(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[58549],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return c}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),h=l(n),c=a,k=h["".concat(s,".").concat(c)]||h[c]||m[c]||i;return n?r.createElement(k,o(o({ref:t},d),{},{components:n})):r.createElement(k,o({ref:t},d))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},43945:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return s},toc:function(){return l},default:function(){return m}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o=["components"],p={id:"update-network-input",title:"UpdateNetworkInput"},s={unversionedId:"graphql/inputs/update-network-input",id:"graphql/inputs/update-network-input",isDocsHomePage:!1,title:"UpdateNetworkInput",description:"No description",source:"@site/docs/graphql/inputs/update-network-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/update-network-input",permalink:"/docs/graphql/inputs/update-network-input",editUrl:"https://github.com/tribeplatform/developers-site/edit/master/docs/graphql/inputs/update-network-input.mdx",version:"current",frontMatter:{id:"update-network-input",title:"UpdateNetworkInput"},sidebar:"schemaSidebar",previous:{title:"UpdateNavigationItem",permalink:"/docs/graphql/inputs/update-navigation-item"},next:{title:"UpdateNetworkSettingsInput",permalink:"/docs/graphql/inputs/update-network-settings-input"}},l=[{value:"Fields",id:"fields",children:[]}],d={toc:l};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type UpdateNetworkInput {\n  aliases: [String!]\n  billingEmail: String\n  brandColor: String\n  companyName: String\n  defaultSpaceIds: [ID!]\n  description: String\n  domain: String\n  faviconId: String\n  footer: UpdateFooter\n  incidentEmails: [String!]\n  industry: NetworkIndustryType\n  landingPages: UpdateNetworkSettingsInput\n  locale: String\n  logoId: String\n  membership: NetworkMembership\n  name: String\n  newDomain: String\n  primaryMembers: NetworkPrimaryMembersType\n  privacyPolicyUrl: String\n  termsOfServiceUrl: String\n  themes: UpdateThemes\n  timeframe: NetworkTimeframeType\n  topNavigation: UpdateTopNavigation\n  tribeBranding: Boolean\n  visibility: NetworkVisibility\n  whoCanInviteIds: [String!]\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"aliases-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"aliases")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"[String!]")),")"),(0,i.kt)("h4",{id:"billingemail-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"billingEmail")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"brandcolor-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"brandColor")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"companyname-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"companyName")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"defaultspaceids-id"},(0,i.kt)("inlineCode",{parentName:"h4"},"defaultSpaceIds")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/id"},(0,i.kt)("inlineCode",{parentName:"a"},"[ID!]")),")"),(0,i.kt)("h4",{id:"description-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"description")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"domain-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"domain")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"faviconid-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"faviconId")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"footer-updatefooter"},(0,i.kt)("inlineCode",{parentName:"h4"},"footer")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/update-footer"},(0,i.kt)("inlineCode",{parentName:"a"},"UpdateFooter")),")"),(0,i.kt)("h4",{id:"incidentemails-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"incidentEmails")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"[String!]")),")"),(0,i.kt)("h4",{id:"industry-networkindustrytype"},(0,i.kt)("inlineCode",{parentName:"h4"},"industry")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/network-industry-type"},(0,i.kt)("inlineCode",{parentName:"a"},"NetworkIndustryType")),")"),(0,i.kt)("h4",{id:"landingpages-updatenetworksettingsinput"},(0,i.kt)("inlineCode",{parentName:"h4"},"landingPages")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/update-network-settings-input"},(0,i.kt)("inlineCode",{parentName:"a"},"UpdateNetworkSettingsInput")),")"),(0,i.kt)("h4",{id:"locale-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"locale")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"logoid-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"logoId")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"membership-networkmembership"},(0,i.kt)("inlineCode",{parentName:"h4"},"membership")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/network-membership"},(0,i.kt)("inlineCode",{parentName:"a"},"NetworkMembership")),")"),(0,i.kt)("h4",{id:"name-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"name")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"newdomain-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"newDomain")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"primarymembers-networkprimarymemberstype"},(0,i.kt)("inlineCode",{parentName:"h4"},"primaryMembers")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/network-primary-members-type"},(0,i.kt)("inlineCode",{parentName:"a"},"NetworkPrimaryMembersType")),")"),(0,i.kt)("h4",{id:"privacypolicyurl-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"privacyPolicyUrl")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"termsofserviceurl-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"termsOfServiceUrl")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"themes-updatethemes"},(0,i.kt)("inlineCode",{parentName:"h4"},"themes")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/update-themes"},(0,i.kt)("inlineCode",{parentName:"a"},"UpdateThemes")),")"),(0,i.kt)("h4",{id:"timeframe-networktimeframetype"},(0,i.kt)("inlineCode",{parentName:"h4"},"timeframe")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/network-timeframe-type"},(0,i.kt)("inlineCode",{parentName:"a"},"NetworkTimeframeType")),")"),(0,i.kt)("h4",{id:"topnavigation-updatetopnavigation"},(0,i.kt)("inlineCode",{parentName:"h4"},"topNavigation")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/inputs/update-top-navigation"},(0,i.kt)("inlineCode",{parentName:"a"},"UpdateTopNavigation")),")"),(0,i.kt)("h4",{id:"tribebranding-boolean"},(0,i.kt)("inlineCode",{parentName:"h4"},"tribeBranding")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/boolean"},(0,i.kt)("inlineCode",{parentName:"a"},"Boolean")),")"),(0,i.kt)("h4",{id:"visibility-networkvisibility"},(0,i.kt)("inlineCode",{parentName:"h4"},"visibility")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/network-visibility"},(0,i.kt)("inlineCode",{parentName:"a"},"NetworkVisibility")),")"),(0,i.kt)("h4",{id:"whocaninviteids-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"whoCanInviteIds")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"[String!]")),")"))}m.isMDXComponent=!0}}]);