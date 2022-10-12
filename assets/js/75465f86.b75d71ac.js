"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[21758],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,y=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?a.createElement(y,i(i({ref:t},l),{},{components:n})):a.createElement(y,i({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},44829:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={title:"Motan Proxy",description:"Motan Proxy"},i=void 0,p={unversionedId:"user-guide/motan-proxy",id:"version-2.4.0/user-guide/motan-proxy",isDocsHomePage:!1,title:"Motan Proxy",description:"Motan Proxy",source:"@site/versioned_docs/version-2.4.0/user-guide/motan-proxy.md",sourceDirName:"user-guide",slug:"/user-guide/motan-proxy",permalink:"/docs/2.4.0/user-guide/motan-proxy",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.4.0/user-guide/motan-proxy.md",version:"2.4.0",frontMatter:{title:"Motan Proxy",description:"Motan Proxy"},sidebar:"version-2.4.0/tutorialSidebar",previous:{title:"Http Proxy",permalink:"/docs/2.4.0/user-guide/http-proxy"},next:{title:"Application Client Access Config",permalink:"/docs/2.4.0/user-guide/register-center-access"}},s=[{value:"Add motan plugin in gateway",id:"add-motan-plugin-in-gateway",children:[]},{value:"Motan service access gateway",id:"motan-service-access-gateway",children:[]},{value:"User Request",id:"user-request",children:[]}],c={toc:s};function l(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This document is intended to help the ",(0,r.kt)("inlineCode",{parentName:"p"},"Motan")," service access the ",(0,r.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"Motan")," plugin to handle ",(0,r.kt)("inlineCode",{parentName:"p"},"motan")," service."),(0,r.kt)("p",null,"Before the connection, start ",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu-admin")," correctly, start ",(0,r.kt)("inlineCode",{parentName:"p"},"Motan")," plugin, and add related dependencies on the gateway and ",(0,r.kt)("inlineCode",{parentName:"p"},"Motan")," application client. Refer to the previous ",(0,r.kt)("a",{parentName:"p",href:"../quick-start/quick-start-motan"},"Quick start with Motan")," ."),(0,r.kt)("p",null,"For details about client access configuration, see ",(0,r.kt)("a",{parentName:"p",href:"./register-center-access"},"Application Client Access Config")," ."),(0,r.kt)("p",null,"For details about data synchronization configurations, see ",(0,r.kt)("a",{parentName:"p",href:"./use-data-sync"},"Data Synchronization Config")," ."),(0,r.kt)("h2",{id:"add-motan-plugin-in-gateway"},"Add motan plugin in gateway"),(0,r.kt)("p",null,"Add the following dependencies to the gateway's ",(0,r.kt)("inlineCode",{parentName:"p"},"pom.xml")," file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"        \x3c!-- apache shenyu motan plugin --\x3e\n        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-spring-boot-starter-plugin-motan</artifactId>\n            <version>${project.version}</version>\n        </dependency>\n        <dependency>\n            <groupId>com.weibo</groupId>\n            <artifactId>motan-core</artifactId>\n            <version>1.1.9</version>\n        </dependency>\n        <dependency>\n            <groupId>com.weibo</groupId>\n            <artifactId>motan-registry-zookeeper</artifactId>\n            <version>1.1.9</version>\n        </dependency>\n        <dependency>\n            <groupId>com.weibo</groupId>\n            <artifactId>motan-transport-netty4</artifactId>\n            <version>1.1.9</version>\n        </dependency>\n        <dependency>\n            <groupId>com.weibo</groupId>\n            <artifactId>motan-springsupport</artifactId>\n            <version>1.1.9</version>\n        </dependency>\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Restart your gateway service.")),(0,r.kt)("h2",{id:"motan-service-access-gateway"},"Motan service access gateway"),(0,r.kt)("p",null,"Please refer to: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/shenyu/tree/v2.4.0/shenyu-examples/shenyu-examples-motan"},"shenyu-examples-motan")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In the microservice built by ",(0,r.kt)("inlineCode",{parentName:"li"},"Motan"),", add the following dependencies:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-spring-boot-starter-client-motan</artifactId>\n            <version>${shenyu.version}</version>\n        </dependency>\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Add the following configuration to the ",(0,r.kt)("inlineCode",{parentName:"li"},"application.yaml")," configuration file:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  client:\n    registerType: http #zookeeper #etcd #nacos #consul\n    serverLists: http://localhost:9095 #localhost:2181 #http://localhost:2379 #localhost:8848\n    props:\n      contextPath: /motan\n      ipAndPort: motan\n      appName: motan\n      port: 8888\n      nacosNameSpace: ShenyuRegisterCenter\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Add ",(0,r.kt)("inlineCode",{parentName:"li"},"@ShenyuMotanClient")," annotation to the method of ",(0,r.kt)("inlineCode",{parentName:"li"},"Motan")," service interface implementation class, start your service provider, after successful registration, go to PluginList -> rpc proxy -> motan in the background management system, you will see automatic registration of selectors and rules information.")),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'@MotanService(export = "demoMotan:8002")\npublic class MotanDemoServiceImpl implements MotanDemoService {\n    @Override\n    @ShenyuMotanClient(path = "/hello")\n    public String hello(String name) {\n        return "hello " + name;\n    }\n}\n')),(0,r.kt)("h2",{id:"user-request"},"User Request"),(0,r.kt)("p",null,"You can request your ",(0,r.kt)("inlineCode",{parentName:"p"},"motan")," service by Http. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway needs to have a route prefix which is the ",(0,r.kt)("inlineCode",{parentName:"p"},"contextPath")," configured by the access gateway. For example: ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:9195/motan/hello")," ."))}l.isMDXComponent=!0}}]);