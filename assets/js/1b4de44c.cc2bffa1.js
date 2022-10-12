"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[57415],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),f=i,g=p["".concat(l,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},60324:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(87462),i=(n(67294),n(3905));const a={sidebar_position:2,title:"Configuration Flow Introduction",keywords:["soul"],description:"Configuration Flow Introduction"},o=void 0,c={unversionedId:"design/config",id:"version-2.3.0-Legacy/design/config",isDocsHomePage:!1,title:"Configuration Flow Introduction",description:"Configuration Flow Introduction",source:"@site/versioned_docs/version-2.3.0-Legacy/design/config.md",sourceDirName:"design",slug:"/design/config",permalink:"/docs/2.3.0-Legacy/design/config",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.3.0-Legacy/design/config.md",version:"2.3.0-Legacy",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Configuration Flow Introduction",keywords:["soul"],description:"Configuration Flow Introduction"},sidebar:"version-2.3.0-Legacy/tutorialSidebar",previous:{title:"Database Design",permalink:"/docs/2.3.0-Legacy/design/database-design"},next:{title:"Data Synchronization Design",permalink:"/docs/2.3.0-Legacy/design/data-sync"}},l=[{value:"Description",id:"description",children:[]},{value:"Usage",id:"usage",children:[]},{value:"Feature",id:"feature",children:[]}],s={toc:l};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This article introduces the flow of synchronizing to the gateway after the data operation of admin backend system.")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"User can arbitrary modify data in soul-admin backend and this will immediately synchronize to the jvm memory of the gateway.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Synchronize the plugin data of soul,selector,rule data, metadata, signature data, etc.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"All the rules of plugin selectors are dynamically configured and take effect immediately without restarting the service.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Data Flow Chart:\n",(0,i.kt)("img",{parentName:"p",src:"https://yu199195.github.io/images/soul/plugin-data.png",alt:null})))),(0,i.kt)("h2",{id:"feature"},"Feature"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"All the configurations of user can be dynamically updated, there is no need to restart the service for any modification."),(0,i.kt)("li",{parentName:"ul"},"Local cache is used to provide efficient performance during high concurrency.")))}u.isMDXComponent=!0}}]);