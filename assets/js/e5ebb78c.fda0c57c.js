"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[81187],{3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>m});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(o),m=r,y=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return o?n.createElement(y,a(a({ref:t},s),{},{components:o})):n.createElement(y,a({ref:t},s))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var p=2;p<i;p++)a[p]=o[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},96252:(e,t,o)=>{o.r(t),o.d(t,{contentTitle:()=>a,default:()=>s,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=o(87462),r=(o(67294),o(3905));const i={sidebar_position:3,title:"Docker-compose Deployment",keywords:["docker-compose","Deployment"],description:"Docker-compose Deployment"},a=void 0,c={unversionedId:"deployment/deployment-docker-compose",id:"deployment/deployment-docker-compose",isDocsHomePage:!1,title:"Docker-compose Deployment",description:"Docker-compose Deployment",source:"@site/docs/deployment/deployment-docker-compose.md",sourceDirName:"deployment",slug:"/deployment/deployment-docker-compose",permalink:"/docs/next/deployment/deployment-docker-compose",editUrl:"https://github.com/apache/shenyu-website/edit/main/docs/deployment/deployment-docker-compose.md",version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Docker-compose Deployment",keywords:["docker-compose","Deployment"],description:"Docker-compose Deployment"},sidebar:"tutorialSidebar",previous:{title:"Binary Packages Deployment",permalink:"/docs/next/deployment/deployment-package"},next:{title:"Docker Deployment",permalink:"/docs/next/deployment/deployment-docker"}},l=[{value:"Download shell script",id:"download-shell-script",children:[]},{value:"execute script",id:"execute-script",children:[]},{value:"Initialize the <code>shenyu-admin</code> database",id:"initialize-the-shenyu-admin-database",children:[]},{value:"Modify the configuration file",id:"modify-the-configuration-file",children:[]},{value:"Execute docker-compose",id:"execute-docker-compose",children:[]}],p={toc:l};function s(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This article introduces the use of ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose")," to deploy the ",(0,r.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Before you read this document, you need to complete some preparations before deploying Shenyu according to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/deployment/deployment-before"},"Deployment Prerequisites document"),".")),(0,r.kt)("h3",{id:"download-shell-script"},"Download shell script"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -O https://raw.githubusercontent.com/apache/shenyu/master/shenyu-dist/shenyu-docker-compose-dist/src/main/resources/install.sh\n")),(0,r.kt)("h3",{id:"execute-script"},"execute script"),(0,r.kt)("p",null,"This script will download the required configuration files and mysql-connector, and can be executed repeatedly if the download fails."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sh ./install.sh #The latest configuration is pulled by default. If you need to deploy the released version, you can add a parameter to indicate the version number, such as: v2.4.2 or latest\n")),(0,r.kt)("h3",{id:"initialize-the-shenyu-admin-database"},"Initialize the ",(0,r.kt)("inlineCode",{parentName:"h3"},"shenyu-admin")," database"),(0,r.kt)("p",null,"Refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/deployment/deployment-before#database-initialize"},"database initialization documentation")," to initialize the database."),(0,r.kt)("h3",{id:"modify-the-configuration-file"},"Modify the configuration file"),(0,r.kt)("p",null,"Modify the configuration file downloaded by the script to set up configurations such as ",(0,r.kt)("inlineCode",{parentName:"p"},"JDBC"),"."),(0,r.kt)("h3",{id:"execute-docker-compose"},"Execute docker-compose"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd shenyu-${VERSION}\ndocker-compose -f ./shenyu-${VERSION}/docker-compose.yaml up -d\n")))}s.isMDXComponent=!0}}]);