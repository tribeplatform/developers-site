(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[39454],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,h=d["".concat(p,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},93101:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return p},toc:function(){return l},default:function(){return c}});var r=n(22122),a=n(19756),i=(n(67294),n(3905)),o=["components"],s={id:"update-custom-sso-input",title:"UpdateCustomSsoInput"},p={unversionedId:"graphql/inputs/update-custom-sso-input",id:"graphql/inputs/update-custom-sso-input",isDocsHomePage:!1,title:"UpdateCustomSsoInput",description:"No description",source:"@site/docs/graphql/inputs/update-custom-sso-input.mdx",sourceDirName:"graphql/inputs",slug:"/graphql/inputs/update-custom-sso-input",permalink:"/docs/graphql/inputs/update-custom-sso-input",editUrl:"https://github.com/tribeplatform/developers-site/edit/master/docs/graphql/inputs/update-custom-sso-input.mdx",version:"current",frontMatter:{id:"update-custom-sso-input",title:"UpdateCustomSsoInput"},sidebar:"schemaSidebar",previous:{title:"UpdateCustomFieldSchemaInput",permalink:"/docs/graphql/inputs/update-custom-field-schema-input"},next:{title:"UpdateFileInput",permalink:"/docs/graphql/inputs/update-file-input"}},l=[{value:"Fields",id:"fields",children:[]}],u={toc:l};function c(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"No description"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-graphql"},"type UpdateCustomSsoInput {\n  authorizationUrl: String\n  buttonText: String\n  clientId: String\n  clientSecret: String\n  idpUrl: String\n  logoutUrl: String\n  name: String\n  provider: SsoProvider\n  scopes: [String!]\n  settingsUrl: String\n  status: SsoStatus\n  tokenUrl: String\n  type: CustomSsoType!\n  userProfileUrl: String\n}\n")),(0,i.kt)("h3",{id:"fields"},"Fields"),(0,i.kt)("h4",{id:"authorizationurl-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"authorizationUrl")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"buttontext-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"buttonText")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"clientid-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"clientId")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"clientsecret-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"clientSecret")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"idpurl-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"idpUrl")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"logouturl-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"logoutUrl")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"name-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"name")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"provider-ssoprovider"},(0,i.kt)("inlineCode",{parentName:"h4"},"provider")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/sso-provider"},(0,i.kt)("inlineCode",{parentName:"a"},"SsoProvider")),")"),(0,i.kt)("h4",{id:"scopes-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"scopes")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"[String!]")),")"),(0,i.kt)("h4",{id:"settingsurl-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"settingsUrl")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"status-ssostatus"},(0,i.kt)("inlineCode",{parentName:"h4"},"status")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/sso-status"},(0,i.kt)("inlineCode",{parentName:"a"},"SsoStatus")),")"),(0,i.kt)("h4",{id:"tokenurl-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"tokenUrl")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"),(0,i.kt)("h4",{id:"type-customssotype"},(0,i.kt)("inlineCode",{parentName:"h4"},"type")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/enums/custom-sso-type"},(0,i.kt)("inlineCode",{parentName:"a"},"CustomSsoType!")),")"),(0,i.kt)("h4",{id:"userprofileurl-string"},(0,i.kt)("inlineCode",{parentName:"h4"},"userProfileUrl")," (",(0,i.kt)("a",{parentName:"h4",href:"/docs/graphql/scalars/string"},(0,i.kt)("inlineCode",{parentName:"a"},"String")),")"))}c.isMDXComponent=!0}}]);