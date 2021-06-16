(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[26984],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),l=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=l(e.components);return r.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(t),m=a,k=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(k,s(s({ref:n},u),{},{components:t})):r.createElement(k,s({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},23421:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var r=t(22122),a=t(19756),o=(t(67294),t(3905)),s=["components"],i={sidebar_position:1},c={unversionedId:"guide/graphql/authentication/access-token",id:"guide/graphql/authentication/access-token",isDocsHomePage:!1,title:"Tribe Access Token",description:"All request to Tribe's GraphQL endpoint except for getTokens query should be authenticated.",source:"@site/docs/guide/graphql/authentication/access-token.md",sourceDirName:"guide/graphql/authentication",slug:"/guide/graphql/authentication/access-token",permalink:"/docs/guide/graphql/authentication/access-token",editUrl:"https://github.com/tribeplatform/developers-site/edit/master/docs/guide/graphql/authentication/access-token.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"guideSidebar",previous:{title:"Getting Started",permalink:"/docs/guide/graphql/getting-started"},next:{title:"Basic HTTP Authentication",permalink:"/docs/guide/graphql/authentication/basic-authentication"}},l=[{value:"Guest Access Token",id:"guest-access-token",children:[]},{value:"User Access Token",id:"user-access-token",children:[]}],u={toc:l};function p(e){var n=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"All request to Tribe's GraphQL endpoint except for ",(0,o.kt)("inlineCode",{parentName:"p"},"getTokens")," query should be authenticated."),(0,o.kt)("h2",{id:"guest-access-token"},"Guest Access Token"),(0,o.kt)("p",null,"If you want to authenticate as a guest or as a member using their email (or username) and password, the most common way is to use the ",(0,o.kt)("a",{parentName:"p",href:"/docs/graphql/queries/get-tokens"},(0,o.kt)("inlineCode",{parentName:"a"},"getTokens"))," query. Here is a sample query:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},'query {\n  getTokens(networkDomain: "community.tribe.so") {\n    accessToken\n    role {\n      name\n      scopes\n    }\n    member {\n      id\n      name\n    }\n  }\n}\n')),(0,o.kt)("p",null,"You should replace the ",(0,o.kt)("inlineCode",{parentName:"p"},"networkDomain")," value to your own community address. The result of the above query will be a guest access token as followed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "getTokens": {\n      "accessToken": "eyJhbGciOiJIUzI1NiI...",\n      "role": {\n        "name": "Guest",\n        "scopes": [\n          "network:login",\n          "network:view",\n          "role:view",\n          "member:view:all",\n          "member:verify",\n          "network:join",\n          "network:join:withToken",\n          "network:join:withLink"\n        ]\n      },\n      "member": {\n        "id": "GUEST_NtT0FkLxxiNH2Ji",\n        "name": "Guest"\n      }\n    }\n  }\n}\n')),(0,o.kt)("p",null,"You should pass the provided ",(0,o.kt)("inlineCode",{parentName:"p"},"accessToken")," in all GraphQL requests in the header as followed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Authorization: Bearer {accessToken}\n")),(0,o.kt)("p",null,"With a guest access token you have a read only access to all resources available to non-logged in members."),(0,o.kt)("h2",{id:"user-access-token"},"User Access Token"),(0,o.kt)("p",null,"To retrieve a user access token you should use the guest access token to send a request to ",(0,o.kt)("a",{parentName:"p",href:"/docs/graphql/queries/login-network"},(0,o.kt)("inlineCode",{parentName:"a"},"loginNetwork"))," query."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-graphql"},'query {\n  loginNetwork(\n    input: { usernameOrEmail: "tribeuser", password: "tribepassword" }\n  ) {\n    accessToken\n    role {\n      name\n      scopes\n    }\n    member {\n      id\n      name\n    }\n  }\n}\n')),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The ",(0,o.kt)("a",{parentName:"p",href:"/docs/graphql/queries/login-network"},(0,o.kt)("inlineCode",{parentName:"a"},"loginNetwork"))," does not work without passing a guest access token in the header and will result in ",(0,o.kt)("inlineCode",{parentName:"p"},"Unauthorized")," error message."))),(0,o.kt)("p",null,"The result of the above query will be a user access token as followed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": {\n    "loginNetwork": {\n      "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cC...",\n      "role": {\n        "name": "Admin",\n        "scopes": ["*"]\n      },\n      "member": {\n        "id": "9FWKl7Y1rB",\n        "name": "John Smith"\n      }\n    }\n  }\n}\n')),(0,o.kt)("p",null,"Similar to guest access tokens you will be able to use the user access token by passing it in the header as followed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Authorization: Bearer {accessToken}\n")))}p.isMDXComponent=!0}}]);