(self.webpackChunkdevelopers=self.webpackChunkdevelopers||[]).push([[22095],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},79443:function(e,t,n){"use strict";var a=(0,n(67294).createContext)(void 0);t.Z=a},80944:function(e,t,n){"use strict";var a=n(67294),r=n(79443);t.Z=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},89761:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return k},frontMatter:function(){return g},metadata:function(){return v},toc:function(){return b}});var a=n(22122),r=n(19756),i=n(67294),o=n(3905),s=n(80944),l=n(86010),u="tabItem_1uMI",p="tabItemActive_2DSg";var d=37,c=39;var m=function(e){var t=e.lazy,n=e.block,a=e.defaultValue,r=e.values,o=e.groupId,m=e.className,h=(0,s.Z)(),f=h.tabGroupChoices,g=h.setTabGroupChoices,v=(0,i.useState)(a),b=v[0],y=v[1],k=i.Children.toArray(e.children),w=[];if(null!=o){var T=f[o];null!=T&&T!==b&&r.some((function(e){return e.value===T}))&&y(T)}var N=function(e){var t=e.currentTarget,n=w.indexOf(t),a=r[n].value;y(a),null!=o&&(g(o,a),setTimeout((function(){var e,n,a,r,i,o,s,l;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,i=e.right,o=window,s=o.innerHeight,l=o.innerWidth,n>=0&&i<=l&&r<=s&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(p),setTimeout((function(){return t.classList.remove(p)}),2e3))}),150))},j=function(e){var t,n;switch(e.keyCode){case c:var a=w.indexOf(e.target)+1;n=w[a]||w[0];break;case d:var r=w.indexOf(e.target)-1;n=w[r]||w[w.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},m)},r.map((function(e){var t=e.value,n=e.label;return i.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,l.Z)("tabs__item",u,{"tabs__item--active":b===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:j,onFocus:N,onClick:N},n)}))),t?(0,i.cloneElement)(k.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))};var h=function(e){var t=e.children,n=e.hidden,a=e.className;return i.createElement("div",{role:"tabpanel",hidden:n,className:a},t)},f=["components"],g={},v={unversionedId:"guide/single-sign-on/jwt-sso",id:"guide/single-sign-on/jwt-sso",isDocsHomePage:!1,title:"JWT SSO",description:"JWT SSO is only available to handpicked customers at this time.",source:"@site/docs/guide/single-sign-on/jwt-sso.md",sourceDirName:"guide/single-sign-on",slug:"/guide/single-sign-on/jwt-sso",permalink:"/docs/guide/single-sign-on/jwt-sso",editUrl:"https://github.com/tribeplatform/developers-site/edit/master/docs/guide/single-sign-on/jwt-sso.md",version:"current",frontMatter:{},sidebar:"guideSidebar",previous:{title:"OAuth2 SSO",permalink:"/docs/guide/single-sign-on/oauth2-sso"},next:{title:"Getting Started",permalink:"/docs/guide/graphql/getting-started"}},b=[{value:"Identifying user&#39;s existence",id:"identifying-users-existence",children:[]},{value:"JWT Supported Keys",id:"jwt-supported-keys",children:[]}],y={toc:b};function k(e){var t=e.components,n=(0,r.Z)(e,f);return(0,o.kt)("wrapper",(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"JWT SSO is only available to handpicked customers at this time."))),(0,o.kt)("p",null,"Although OAuth2 is the most recommended way of authenticating your members to community, JWT SSO is the easiest way if your website does not support OAuth2. You should be able to implement it by adding a few lines of code to your website or product."),(0,o.kt)("p",null,"In this method, you'll sign a JSON Web Token (JWT) with User's information using a private key. Then the generated token should be passed as ",(0,o.kt)("inlineCode",{parentName:"p"},"jwt")," in the query string to Tribe."),(0,o.kt)("p",null,'To generate the JWT token, first you need to get your Single Sign-On private key. Login to your community as an Admin. In the Admin Panel under Apps, install the "JWT SSO" app and you should find the Single Sign-On private key there.'),(0,o.kt)("p",null,"Next, you should first install a JWT library:"),(0,o.kt)(m,{defaultValue:"node",values:[{label:"Node.js",value:"node"},{label:"PHP",value:"php"},{label:"Java",value:"java"},{label:"Python",value:"python"},{label:"Ruby",value:"ruby"}],mdxType:"Tabs"},(0,o.kt)(h,{value:"node",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"npm install --save jsonwebtoken\n"))),(0,o.kt)(h,{value:"php",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"composer require firebase/php-jwt\n"))),(0,o.kt)(h,{value:"java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"# See instructions here:\nhttps://mvnrepository.com/artifact/io.jsonwebtoken/jjwt/0.7.0\n"))),(0,o.kt)(h,{value:"python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"pip install PyJWT\n"))),(0,o.kt)(h,{value:"ruby",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},"sudo gem install jwt\n")))),(0,o.kt)("p",null,'Then use the following source code and the SSO private key inside the Tribe "JWT SSO" app to generate the JWT token:'),(0,o.kt)(m,{defaultValue:"node",values:[{label:"Node.js",value:"node"},{label:"PHP",value:"php"},{label:"Java",value:"java"},{label:"Python",value:"python"},{label:"Ruby",value:"ruby"}],mdxType:"Tabs"},(0,o.kt)(h,{value:"node",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'var jwt = require("jsonwebtoken");\n\nvar privateKey = "{Your Private Key}";\n\nfunction createToken(user) {\n  var userData = {\n    email: user.email,\n    sub: user.id,\n    name: user.name,\n    iat: Math.round(new Date().getTime() / 1000), // token issue time\n    exp: Math.round(new Date().getTime() / 1000) + 60, // token expiration time\n    picture: user.picture, // optional but preferred\n    locale: user.locale, // optional\n    title: user.title, // optional\n    bio: user.bio, // optional\n  };\n  return jwt.sign(userData, privateKey, { algorithm: "HS256" });\n}\n'))),(0,o.kt)(h,{value:"php",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use FirebaseJWTJWT;\n\nconst privateKey = '{Your Private Key}';\n\nfunction createToken($user) {\n  $userData = [\n    'email' => $user['email'],\n    'sub' => $user['id'],\n    'name' => $user['name'],\n    'picture' => $user['picture'], // optional but preferred\n    'locale' => $user['locale'], // optional\n    'title' => $user['title'], // optional\n    'bio' => $user['bio'], // optional\n  ];\n  return JWT::encode($userData, privateKey, 'HS256');\n}\n"))),(0,o.kt)(h,{value:"java",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'import java.util.HashMap;\n\nimport io.jsonwebtoken.Jwts;\nimport io.jsonwebtoken.SignatureAlgorithm;\n\npublic class TokenCreator {\n  private static final String privateKey = "{Your Private Key}";\n\n  public static String createToken(User user) throws Exception {\n    HashMap<String, Object> userData = new HashMap<String, Object>();\n    userData.put("email", user.email);\n    userData.put("sub", user.id);\n    userData.put("name", user.name);\n    userData.put("picture", user.picture); // optional but preferred\n    userData.put("locale", user.locale); // optional\n    userData.put("title", user.title); // optional\n    userData.put("bio", user.bio); // optional\n\n    return Jwts.builder()\n               .setClaims(userData)\n               .signWith(SignatureAlgorithm.HS256, privateKey.getBytes("UTF-8"))\n               .compact();\n  }\n}\n'))),(0,o.kt)(h,{value:"python",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import jwt\n\nprivate_key = '{Your Private Key}'\n\ndef create_token(user):\n  user_data = {\n    'email': user.email,\n    'sub': user.id,\n    'name': user.name,\n    'picture': user.picture, # optional but preferred\n    'locale': user.locale, # optional\n    'title': user.title, # optional\n    'bio': user.bio, # optional\n  }\n  return jwt.encode(user_data, private_key, algorithm='HS256')\n"))),(0,o.kt)(h,{value:"ruby",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ruby"},"require 'jwt'\n\nprivateKey = '{Your Private Key}'\n\ndef createToken(user)\n  userData = {\n    :email => user[:email],\n    :sub => user[:id],\n    :name => user[:name],\n    :picture => user[:picture], # optional, but preferred\n    :locale => user[:locale], # optional\n    :title => user[:title], # optional\n    :bio => user[:bio], # optional\n  }\n\n  JWT.encode(userData, privateKey, 'HS256')\nend\n")))),(0,o.kt)("p",null,"Finally, you should pass the generated JWT token to Tribe as followed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"https://YOUR_COMMUNITY_DOMAIN/api/auth/sso?jwt=[Generated SSO Token]&redirect=/answers\n")),(0,o.kt)("p",null,"Tribe will create the user using the provided information in the JWT and log them in if the user does not already exist. If the user exists, it will update user's information and log them in."),(0,o.kt)("h2",{id:"identifying-users-existence"},"Identifying user's existence"),(0,o.kt)("p",null,"Tribe will first try to find the user using provided sub. It will check if any user has externalId equal to provided sub. If the user is found, it will update their information including their email address."),(0,o.kt)("p",null,"If no user is found based on externalId == sub, it will try to find the user using the email address provided and connects the user's externalId to the provided sub."),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If a user with externalId == sub check does not exist and the user matching with email already has an externalId, Tribe will through a conflict error."),(0,o.kt)("p",{parentName:"div"},'In this case, you may want to update existing users externalId or email using "Update a Specific User" API.'))),(0,o.kt)("h2",{id:"jwt-supported-keys"},"JWT Supported Keys"),(0,o.kt)("p",null,"Tribe JWT SSO supports all ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/JSON_Web_Token#Standard_fields"},"standard JWT fields")," including sub, aud, exp, and iat. Here you can find all fields supported in the JWT:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"sub (required)"),": The ID of the user. It will be stored as ",(0,o.kt)("inlineCode",{parentName:"li"},"externalId")," in Tribe's user object."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"name (required)"),": Name of the user."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"email (required)"),": The email of the user. This email address is considered as a verified address. You should make sure you're verifying it on your side."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"exp"),": The expiration time of the JWT. Although this value is not required, it's highly recommended to set it to 60 seconds from now. If it's not set, the token will be valid forever and can introduce security issues."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"role"),": User's role in the community. Can be member (default), moderator, or admin."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"picture"),": A full URL to user's profile picture. It should include https:// or http://. Tribe will not validate this field, so you should make sure it's a valid URL on your side."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"source"),": You can pass a source to identify where the user came from for marketing purposes (similar to utm_source)."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"title"),": The title of the user used in their profile."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"bio"),": A short description of the user. Can include simple HTML code."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"locale"),": The locale of the user. By default, it's set to en. This option is only available for enterprise clients.")))}k.isMDXComponent=!0},86010:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);