"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[51167],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(i=0;i<l.length;i++)t=l[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=i.createContext({}),d=function(e){var n=i.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},s=function(e){var n=d(e.components);return i.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=d(t),m=a,k=c["".concat(o,".").concat(m)]||c[m]||u[m]||l;return t?i.createElement(k,r(r({ref:n},s),{},{components:t})):i.createElement(k,r({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,r=new Array(l);r[0]=c;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,r[1]=p;for(var d=2;d<l;d++)r[d]=t[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},62665:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>r,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var i=t(87462),a=(t(67294),t(3905));const l={title:"ModifyResponse\u63d2\u4ef6",keywords:["modifyResponse"],description:"modifyResponse\u63d2\u4ef6"},r="1. \u6982\u8ff0",p={unversionedId:"plugin-center/http-handle/modify-response-plugin",id:"version-2.4.1/plugin-center/http-handle/modify-response-plugin",isDocsHomePage:!1,title:"ModifyResponse\u63d2\u4ef6",description:"modifyResponse\u63d2\u4ef6",source:"@site/i18n/zh/docusaurus-plugin-content-docs/version-2.4.1/plugin-center/http-handle/modify-response-plugin.md",sourceDirName:"plugin-center/http-handle",slug:"/plugin-center/http-handle/modify-response-plugin",permalink:"/zh/docs/2.4.1/plugin-center/http-handle/modify-response-plugin",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/version-2.4.1/plugin-center/http-handle/modify-response-plugin.md",version:"2.4.1",frontMatter:{title:"ModifyResponse\u63d2\u4ef6",keywords:["modifyResponse"],description:"modifyResponse\u63d2\u4ef6"},sidebar:"version-2.4.1/tutorialSidebar",previous:{title:"Context Path\u63d2\u4ef6",permalink:"/zh/docs/2.4.1/plugin-center/http-handle/context-path-plugin"},next:{title:"Param-mapping\u63d2\u4ef6",permalink:"/zh/docs/2.4.1/plugin-center/http-handle/param-mapping-plugin"}},o=[{value:"1.1 \u63d2\u4ef6\u540d\u79f0",id:"11-\u63d2\u4ef6\u540d\u79f0",children:[]},{value:"1.2 \u9002\u7528\u573a\u666f",id:"12-\u9002\u7528\u573a\u666f",children:[]},{value:"1.3 \u63d2\u4ef6\u529f\u80fd",id:"13-\u63d2\u4ef6\u529f\u80fd",children:[]},{value:"1.4 \u63d2\u4ef6\u4ee3\u7801",id:"14-\u63d2\u4ef6\u4ee3\u7801",children:[]},{value:"1.5 \u6dfb\u52a0\u81ea\u54ea\u4e2a shenyu \u7248\u672c",id:"15-\u6dfb\u52a0\u81ea\u54ea\u4e2a-shenyu-\u7248\u672c",children:[]},{value:"2.1 \u63d2\u4ef6\u4f7f\u7528\u6d41\u7a0b\u56fe",id:"21-\u63d2\u4ef6\u4f7f\u7528\u6d41\u7a0b\u56fe",children:[]},{value:"2.2 \u5bfc\u5165 pom",id:"22-\u5bfc\u5165-pom",children:[]},{value:"2.3 \u542f\u7528\u63d2\u4ef6",id:"23-\u542f\u7528\u63d2\u4ef6",children:[]},{value:"2.4 \u914d\u7f6e\u63d2\u4ef6",id:"24-\u914d\u7f6e\u63d2\u4ef6",children:[]},{value:"2.5 \u793a\u4f8b",id:"25-\u793a\u4f8b",children:[{value:"2.5.1 \u793a\u4f8b \u8bbe\u7f6eHTTP\u54cd\u5e94\u72b6\u6001\u7801",id:"251-\u793a\u4f8b-\u8bbe\u7f6ehttp\u54cd\u5e94\u72b6\u6001\u7801",children:[]},{value:"2.5.2 \u793a\u4f8b  \u4fee\u6539\u54cd\u5e94\u5934\u90e8\u53c2\u6570",id:"252-\u793a\u4f8b--\u4fee\u6539\u54cd\u5e94\u5934\u90e8\u53c2\u6570",children:[]},{value:"2.5.3 \u793a\u4f8b  \u4fee\u6539\u54cd\u5e94\u4f53",id:"253-\u793a\u4f8b--\u4fee\u6539\u54cd\u5e94\u4f53",children:[]}]},{value:"3. \u5982\u4f55\u7981\u7528\u63d2\u4ef6",id:"3-\u5982\u4f55\u7981\u7528\u63d2\u4ef6",children:[]},{value:"4. \u63d2\u4ef6\u89c4\u5219\u53c2\u6570\u5217\u8868",id:"4-\u63d2\u4ef6\u89c4\u5219\u53c2\u6570\u5217\u8868",children:[]}],d={toc:o};function s(e){let{components:n,...l}=e;return(0,a.kt)("wrapper",(0,i.Z)({},d,l,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"1-\u6982\u8ff0"},"1. \u6982\u8ff0"),(0,a.kt)("h2",{id:"11-\u63d2\u4ef6\u540d\u79f0"},"1.1 \u63d2\u4ef6\u540d\u79f0"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u54cd\u5e94\u4fee\u6539\u63d2\u4ef6")),(0,a.kt)("h2",{id:"12-\u9002\u7528\u573a\u666f"},"1.2 \u9002\u7528\u573a\u666f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9700\u8981\u5bf9\u63a5\u53e3\u7684\u54cd\u5e94\u5934\u90e8\u53c2\u6570\u3001\u54cd\u5e94HTTP\u72b6\u6001\u7801\u6216\u54cd\u5e94\u4f53\u8fdb\u884c\u4fee\u6539\u7684\u573a\u666f")),(0,a.kt)("h2",{id:"13-\u63d2\u4ef6\u529f\u80fd"},"1.3 \u63d2\u4ef6\u529f\u80fd"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4fee\u6539HTTP\u54cd\u5e94\u72b6\u6001\u7801"),(0,a.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u3001\u8bbe\u7f6e\u3001\u8986\u76d6\u6216\u8005\u79fb\u9664\u54cd\u5e94\u5934\u90e8\u53c2\u6570"),(0,a.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u3001\u8986\u76d6\u6216\u8005\u79fb\u9664\u54cd\u5e94\u4f53\u53c2\u6570")),(0,a.kt)("h2",{id:"14-\u63d2\u4ef6\u4ee3\u7801"},"1.4 \u63d2\u4ef6\u4ee3\u7801"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6838\u5fc3\u6a21\u5757 ",(0,a.kt)("inlineCode",{parentName:"li"},"shenyu-plugin-modify-response")),(0,a.kt)("li",{parentName:"ul"},"\u6838\u5fc3\u7c7b ",(0,a.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.modify.response.ModifyResponsePlugin"))),(0,a.kt)("h2",{id:"15-\u6dfb\u52a0\u81ea\u54ea\u4e2a-shenyu-\u7248\u672c"},"1.5 \u6dfb\u52a0\u81ea\u54ea\u4e2a shenyu \u7248\u672c"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"2.4.0")),(0,a.kt)("h1",{id:"2-\u5982\u4f55\u4f7f\u7528\u63d2\u4ef6"},"2. \u5982\u4f55\u4f7f\u7528\u63d2\u4ef6"),(0,a.kt)("h2",{id:"21-\u63d2\u4ef6\u4f7f\u7528\u6d41\u7a0b\u56fe"},"2.1 \u63d2\u4ef6\u4f7f\u7528\u6d41\u7a0b\u56fe"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(57092).Z})),(0,a.kt)("h2",{id:"22-\u5bfc\u5165-pom"},"2.2 \u5bfc\u5165 pom"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728\u7f51\u5173\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"pom.xml")," \u6587\u4ef6\u4e2d\u6dfb\u52a0\u63d2\u4ef6 maven \u914d\u7f6e\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"  <dependency>\n  <groupId>org.apache.shenyu</groupId>\n  <artifactId>shenyu-spring-boot-starter-gateway</artifactId>\n  <version>${project.version}</version>\n</dependency>\n")),(0,a.kt)("h2",{id:"23-\u542f\u7528\u63d2\u4ef6"},"2.3 \u542f\u7528\u63d2\u4ef6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e \u57fa\u7840\u914d\u7f6e --\x3e \u63d2\u4ef6\u7ba1\u7406 --\x3e ",(0,a.kt)("inlineCode",{parentName:"li"},"modifyResponse")," \u8bbe\u7f6e\u4e3a\u5f00\u542f\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(20939).Z})),(0,a.kt)("h2",{id:"24-\u914d\u7f6e\u63d2\u4ef6"},"2.4 \u914d\u7f6e\u63d2\u4ef6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9009\u62e9\u5668\u548c\u89c4\u5219\u8bbe\u7f6e\uff0c\u8bf7\u53c2\u8003\uff1a",(0,a.kt)("a",{parentName:"li",href:"../../user-guide/admin-usage/selector-and-rule"},"\u9009\u62e9\u5668\u548c\u89c4\u5219\u7ba1\u7406"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"shenyu-admin"),"\u63d2\u4ef6\u5217\u8868 --\x3e ",(0,a.kt)("inlineCode",{parentName:"li"},"HttpProcess")," --\x3e ",(0,a.kt)("inlineCode",{parentName:"li"},"modifyResponse"),"\uff0c\u5148\u6dfb\u52a0\u9009\u62e9\u5668\uff0c\u7136\u540e\u6dfb\u52a0\u89c4\u5219\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u9009\u62e9\u5668\n",(0,a.kt)("img",{src:t(6421).Z})),(0,a.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u89c4\u5219\n",(0,a.kt)("img",{src:t(1625).Z}))))),(0,a.kt)("h2",{id:"25-\u793a\u4f8b"},"2.5 \u793a\u4f8b"),(0,a.kt)("p",null,"\u5ba2\u6237\u7aef\u9879\u76ee\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/shenyu/tree/master/shenyu-examples/shenyu-examples-http"},"shenyu-examples-http"),"\uff0c\u6ce8\u610f\u8be5\u793a\u4f8b\u9879\u76ee\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"contextPath"),"\u4e3a",(0,a.kt)("inlineCode",{parentName:"p"},"/http"),"\uff0c\u9700\u8981\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"shenyu-admin"),"\u548c",(0,a.kt)("inlineCode",{parentName:"p"},"shenyu-gateway"),"\u542f\u52a8\u5b8c\u6210\u540e\u542f\u52a8\u3002"),(0,a.kt)("h3",{id:"251-\u793a\u4f8b-\u8bbe\u7f6ehttp\u54cd\u5e94\u72b6\u6001\u7801"},"2.5.1 \u793a\u4f8b \u8bbe\u7f6eHTTP\u54cd\u5e94\u72b6\u6001\u7801"),(0,a.kt)("h4",{id:"2511-\u53c2\u8003\u672c\u5730\u90e8\u7f72\u542f\u52a8-admin-\u548c\u7f51\u5173"},"2.5.1.1 \u53c2\u8003",(0,a.kt)("a",{parentName:"h4",href:"https://shenyu.apache.org/zh/docs/deployment/deployment-local"},"\u672c\u5730\u90e8\u7f72"),"\u542f\u52a8 admin \u548c\u7f51\u5173"),(0,a.kt)("h4",{id:"2512-\u53c2\u8003-22-\u5bfc\u5165-pom-\u5e76\u91cd\u542f\u7f51\u5173"},"2.5.1.2 \u53c2\u8003 2.2 \u5bfc\u5165 pom \u5e76\u91cd\u542f\u7f51\u5173"),(0,a.kt)("h4",{id:"2513-\u53c2\u8003-23-\u542f\u7528\u63d2\u4ef6"},"2.5.1.3 \u53c2\u8003 2.3 \u542f\u7528\u63d2\u4ef6"),(0,a.kt)("h4",{id:"2514-\u53c2\u8003-24-\u914d\u7f6e\u63d2\u4ef6\u89c4\u5219"},"2.5.1.4 \u53c2\u8003 2.4 \u914d\u7f6e\u63d2\u4ef6\u89c4\u5219"),(0,a.kt)("p",null,"\u914d\u7f6e\u63d2\u4ef6\u89c4\u5219\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(28523).Z})),(0,a.kt)("h4",{id:"2515-\u63a5\u53e3\u8c03\u7528"},"2.5.1.5 \u63a5\u53e3\u8c03\u7528"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(17729).Z})),(0,a.kt)("h3",{id:"252-\u793a\u4f8b--\u4fee\u6539\u54cd\u5e94\u5934\u90e8\u53c2\u6570"},"2.5.2 \u793a\u4f8b  \u4fee\u6539\u54cd\u5e94\u5934\u90e8\u53c2\u6570"),(0,a.kt)("h4",{id:"2521-\u53c2\u8003\u672c\u5730\u90e8\u7f72\u542f\u52a8-admin-\u548c\u7f51\u5173"},"2.5.2.1 \u53c2\u8003",(0,a.kt)("a",{parentName:"h4",href:"https://shenyu.apache.org/zh/docs/deployment/deployment-local"},"\u672c\u5730\u90e8\u7f72"),"\u542f\u52a8 admin \u548c\u7f51\u5173"),(0,a.kt)("h4",{id:"2522-\u53c2\u8003-22-\u5bfc\u5165-pom-\u5e76\u91cd\u542f\u7f51\u5173"},"2.5.2.2 \u53c2\u8003 2.2 \u5bfc\u5165 pom \u5e76\u91cd\u542f\u7f51\u5173"),(0,a.kt)("h4",{id:"2523-\u53c2\u8003-23-\u542f\u7528\u63d2\u4ef6"},"2.5.2.3 \u53c2\u8003 2.3 \u542f\u7528\u63d2\u4ef6"),(0,a.kt)("h4",{id:"2524-\u53c2\u8003-24-\u914d\u7f6e\u63d2\u4ef6\u89c4\u5219"},"2.5.2.4 \u53c2\u8003 2.4 \u914d\u7f6e\u63d2\u4ef6\u89c4\u5219"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(2215).Z})),(0,a.kt)("h4",{id:"2525-\u63a5\u53e3\u8c03\u7528"},"2.5.2.5 \u63a5\u53e3\u8c03\u7528"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(57228).Z})),(0,a.kt)("h3",{id:"253-\u793a\u4f8b--\u4fee\u6539\u54cd\u5e94\u4f53"},"2.5.3 \u793a\u4f8b  \u4fee\u6539\u54cd\u5e94\u4f53"),(0,a.kt)("h4",{id:"2531-\u53c2\u8003\u672c\u5730\u90e8\u7f72\u542f\u52a8-admin-\u548c\u7f51\u5173"},"2.5.3.1 \u53c2\u8003",(0,a.kt)("a",{parentName:"h4",href:"https://shenyu.apache.org/zh/docs/deployment/deployment-local"},"\u672c\u5730\u90e8\u7f72"),"\u542f\u52a8 admin \u548c\u7f51\u5173"),(0,a.kt)("h4",{id:"2532-\u53c2\u8003-22-\u5bfc\u5165-pom-\u5e76\u91cd\u542f\u7f51\u5173"},"2.5.3.2 \u53c2\u8003 2.2 \u5bfc\u5165 pom \u5e76\u91cd\u542f\u7f51\u5173"),(0,a.kt)("h4",{id:"2533-\u53c2\u8003-23-\u542f\u7528\u63d2\u4ef6"},"2.5.3.3 \u53c2\u8003 2.3 \u542f\u7528\u63d2\u4ef6"),(0,a.kt)("h4",{id:"2534-\u53c2\u8003-24-\u914d\u7f6e\u63d2\u4ef6\u89c4\u5219"},"2.5.3.4 \u53c2\u8003 2.4 \u914d\u7f6e\u63d2\u4ef6\u89c4\u5219"),(0,a.kt)("p",null,"\u914d\u7f6e\u63d2\u4ef6\u89c4\u5219\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(13466).Z})),(0,a.kt)("h4",{id:"2535-\u63a5\u53e3\u8c03\u7528"},"2.5.3.5 \u63a5\u53e3\u8c03\u7528"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(69168).Z})),(0,a.kt)("h2",{id:"3-\u5982\u4f55\u7981\u7528\u63d2\u4ef6"},"3. \u5982\u4f55\u7981\u7528\u63d2\u4ef6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e \u57fa\u7840\u914d\u7f6e --\x3e \u63d2\u4ef6\u7ba1\u7406 --\x3e ",(0,a.kt)("inlineCode",{parentName:"li"},"modifyResponse")," \u8bbe\u7f6e\u4e3a\u7981\u7528\u3002")),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(16724).Z})),(0,a.kt)("h2",{id:"4-\u63d2\u4ef6\u89c4\u5219\u53c2\u6570\u5217\u8868"},"4. \u63d2\u4ef6\u89c4\u5219\u53c2\u6570\u5217\u8868"),(0,a.kt)("p",null,"\u5bf9\u4e8eHTTP\u54cd\u5e94\u72b6\u6001\u7801\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"statusCode"),": \u4fee\u6539\u54cd\u5e94\u72b6\u6001\u7801")),(0,a.kt)("p",null,"\u5bf9\u4e8eHTTP\u54cd\u5e94\u5934\u90e8\u53c2\u6570\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"addHeaders"),": \u6dfb\u52a0\u54cd\u5e94\u5934\u90e8\u53c2\u6570\uff0c\u952e\u503c\u5bf9\u5f62\u5f0f"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"setHeaders"),": \u8bbe\u7f6e\u54cd\u5e94\u5934\u90e8\u53c2\u6570\uff0c\u952e\u503c\u5bf9\u5f62\u5f0f"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"replaceHeaderKeys"),": \u66ff\u6362\u54cd\u5e94\u5934\u90e8\u53c2\u6570\uff0c\u5176\u4e2d",(0,a.kt)("inlineCode",{parentName:"li"},"key"),"\u53c2\u6570\u4e3a\u9700\u8981\u88ab\u66ff\u6362\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"key"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"value"),"\u53c2\u6570\u4e3a\u66ff\u6362\u540e\u7684\u503c"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"removeHeaderKeys"),": \u79fb\u9664\u54cd\u5e94\u5934\u90e8\u53c2\u6570\uff0c\u5176\u4e2d",(0,a.kt)("inlineCode",{parentName:"li"},"key"),"\u53c2\u6570\u4e3a\u9700\u8981\u88ab\u79fb\u9664\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"key"))),(0,a.kt)("p",null,"\u5bf9\u4e8eHTTP\u54cd\u5e94\u4f53\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"addBodyKeys"),": \u6dfb\u52a0\u54cd\u5e94\u5185\u5bb9"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"replaceBodyKeys"),": \u66ff\u6362\u54cd\u5e94\u5185\u5bb9\uff0c\u5176\u4e2d",(0,a.kt)("inlineCode",{parentName:"li"},"key"),"\u53c2\u6570\u4e3a\u9700\u8981\u88ab\u66ff\u6362\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"key"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"li"},"value"),"\u53c2\u6570\u4e3a\u66ff\u6362\u540e\u7684\u503c"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"removeBodyKeys"),": \u79fb\u9664\u54cd\u5e94\u5185\u5bb9\uff0c\u5176\u4e2d",(0,a.kt)("inlineCode",{parentName:"li"},"key"),"\u53c2\u6570\u4e3a\u9700\u8981\u88ab\u79fb\u9664\u7684",(0,a.kt)("inlineCode",{parentName:"li"},"key"))),(0,a.kt)("p",null,"\u4fee\u6539\u54cd\u5e94\u4f53\u662f\u57fa\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"JSONPath"),"\u5b9e\u73b0\u7684\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"$."),"\u4ee3\u8868\u6839\u76ee\u5f55\u3002\u5bf9\u4e8e\u4e0b\u9762\u7684\u914d\u7f6e\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(13466).Z})),(0,a.kt)("p",null,"\u63d2\u4ef6\u5f00\u542f\u524d\uff0c\u54cd\u5e94\u5185\u5bb9\u4e3a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": 3,\n  "name": "hello world findById"\n}\n')),(0,a.kt)("p",null,"\u63d2\u4ef6\u5f00\u542f\u540e\uff0c\u54cd\u5e94\u5185\u5bb9\u4e3a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id2": 3,\n  "add": "4"\n}\n')))}s.isMDXComponent=!0},69168:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/body-invoke-interface-d5fd9ba3d67c539595c1e69f8ddd6716.png"},13466:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/body-rule-config-cn-bca26eaaddd8f65ee25704c8f194c330.png"},16724:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/disable-cn-0c347ff3ce1a41c0f059b0613f642310.png"},20939:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/enable-cn-06bd0f337ec22e816878770a74d9698c.png"},57228:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/header-invoke-interface-1ec5514412331e6438e4b1f5b2796d6e.png"},2215:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/header-rule-config-cn-3aaa2db76433793aa935845ce94cc2bf.png"},1625:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/plugin-rule-config-cn-34323307285250b3502b376ca9ebde18.png"},6421:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/plugin-selector-config-cn-b12be54e892a120f4948a2a84f7b856f.png"},57092:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/procedure-cn-3126701542c85e83baa3081ea232f3cc.png"},17729:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/status-code-invoke-interface-688a23664d58e142832432e3e8abc449.png"},28523:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/status-code-rule-config-cn-d1d03c86515acd0377164a8b661cd96c.png"}}]);