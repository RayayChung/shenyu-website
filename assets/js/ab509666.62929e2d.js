"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[11203],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),u=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return i.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),h=a,m=d["".concat(p,".").concat(h)]||d[h]||c[h]||r;return n?i.createElement(m,o(o({ref:t},s),{},{components:n})):i.createElement(m,o({ref:t},s))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<r;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},72350:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>s,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const r={title:"[Apache ShenYu 2.4.3 Version Release]",description:"Apache ShenYu 2.4.3 Version Release",categories:"Apache ShenYu",tags:["Apache ShenYu"],date:new Date("2022-04-18T00:00:00.000Z")},o=void 0,l={permalink:"/news/Apache-ShenYu-release-version-2.4.3",source:"@site/news/Apache-ShenYu-release-version-2.4.3.md",title:"[Apache ShenYu 2.4.3 Version Release]",description:"Apache ShenYu 2.4.3 Version Release",date:"2022-04-18T00:00:00.000Z",formattedDate:"April 18, 2022",tags:[{label:"Apache ShenYu",permalink:"/news/tags/apache-shen-yu"}],readingTime:3.575,truncated:!1,prevItem:{title:"\u3010You can also be an Apache ShenYu Committer\u3011",permalink:"/news/Apache-ShenYu-Committer-2022-04-20"},nextItem:{title:"[The way from University Student to Apache Committer]",permalink:"/news/Apache-ShenYu-Committer-2021-12-08"}},p=[{value:"new features",id:"new-features",children:[]},{value:"Optimizations",id:"optimizations",children:[]},{value:"Fix Bug",id:"fix-bug",children:[]},{value:"remove item",id:"remove-item",children:[]},{value:"Metrics Plugin Instructions",id:"metrics-plugin-instructions",children:[]},{value:"Cache plugin instructions",id:"cache-plugin-instructions",children:[]},{value:"Logging RocketMQ plugin instructions",id:"logging-rocketmq-plugin-instructions",children:[]},{value:"Next version planning",id:"next-version-planning",children:[]}],u={toc:p};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"After 3 months, Apache ShenYu released version 2.4.3 again. The content of this version has 200+ pull requests, 30+ contributors participated, many new functions have been added, many bugs have been fixed, and many optimizations have been made."),(0,a.kt)("h3",{id:"new-features"},"new features"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Added retry mechanism for Http registration client."),(0,a.kt)("li",{parentName:"ul"},"Support Content-Type of type octet-stream."),(0,a.kt)("li",{parentName:"ul"},"Support redirection of Bootstrap URIs."),(0,a.kt)("li",{parentName:"ul"},"Added local API authorization."),(0,a.kt)("li",{parentName:"ul"},"Support configuring Dubbo consumer thread pool size."),(0,a.kt)("li",{parentName:"ul"},"Support failure retry mechanism for Divide plugin."),(0,a.kt)("li",{parentName:"ul"},"Supports client configuration for Webscoket."),(0,a.kt)("li",{parentName:"ul"},"Support MemoryLimitedLinkedBlockingQueue."),(0,a.kt)("li",{parentName:"ul"},"Support Alibaba Dubbo plugin to share thread pool."),(0,a.kt)("li",{parentName:"ul"},"Support gRPC plugin shared thread pool."),(0,a.kt)("li",{parentName:"ul"},"Added Metrics plugin."),(0,a.kt)("li",{parentName:"ul"},"Added Cache plugin."),(0,a.kt)("li",{parentName:"ul"},"Added Logging RocketMQ plugin.")),(0,a.kt)("h3",{id:"optimizations"},"Optimizations"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Updated JUnit4 to JUnit5."),(0,a.kt)("li",{parentName:"ul"},"Optimize password encryption."),(0,a.kt)("li",{parentName:"ul"},"Optimize and verify the interface parameters of the shenyu-admin module."),(0,a.kt)("li",{parentName:"ul"},"Optimize the code for initializing data when synchronizing data."),(0,a.kt)("li",{parentName:"ul"},"Added integration tests for LoggingRocketMQ plugin."),(0,a.kt)("li",{parentName:"ul"},"Use the timing wheel algorithm in the ScheduledExecutorService class."),(0,a.kt)("li",{parentName:"ul"},"Refactored the buildHandle method of the registered URI in admin."),(0,a.kt)("li",{parentName:"ul"},"Optimized the Spring Cloud client to automatically set the port."),(0,a.kt)("li",{parentName:"ul"},"Refactored JWT plugin to support multi-level Tokens."),(0,a.kt)("li",{parentName:"ul"},"Optimized gateway netty parameter customization and configurable")),(0,a.kt)("h3",{id:"fix-bug"},"Fix Bug"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Fix the null pointer exception when the CommonUpstreamUtils class is initialized."),(0,a.kt)("li",{parentName:"ul"},"Fix the judgment when Nacos registration fails."),(0,a.kt)("li",{parentName:"ul"},"Fixed null pointer exception when logging in unregistered users."),(0,a.kt)("li",{parentName:"ul"},"Fixed the problem of repeatedly printing the startup log."),(0,a.kt)("li",{parentName:"ul"},"Fixed the problem that the number of retries and the timeout period did not take effect."),(0,a.kt)("li",{parentName:"ul"},"Fixed Token parsing error."),(0,a.kt)("li",{parentName:"ul"},"Fixed the problem that Websocket transmits large data abnormally."),(0,a.kt)("li",{parentName:"ul"},"Fixed NettyHttpClient plugin not retrying on failure."),(0,a.kt)("li",{parentName:"ul"},"Fixed CVE-2021-41303 vulnerability.\n-Fixed the problem that judging all plugin inclusion conditions did not take effect."),(0,a.kt)("li",{parentName:"ul"},"Fixed Http Headers losing data."),(0,a.kt)("li",{parentName:"ul"},"Fixed Rewrite plugin not supporting URL placeholders."),(0,a.kt)("li",{parentName:"ul"},"Fixed the problem of abnormal synchronization data in Nacos."),(0,a.kt)("li",{parentName:"ul"},"Fix Websocket proxy failure or null pointer exception when ContextPath plugin is open."),(0,a.kt)("li",{parentName:"ul"},"Fixed port occupancy check for Http registered clients.")),(0,a.kt)("h3",{id:"remove-item"},"remove item"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Remove Monitor plugin."),(0,a.kt)("li",{parentName:"ul"},"Remove shenyu-agent module.")),(0,a.kt)("h3",{id:"metrics-plugin-instructions"},"Metrics Plugin Instructions"),(0,a.kt)("p",null,"Metrics plugin The plugin is used by the gateway to monitor its own running status (JVM related), request response delay, QPS, TPS and other related metrics."),(0,a.kt)("h4",{id:"use-of-plugins"},"Use of plugins"),(0,a.kt)("p",null,"Add the metrics dependency in the gateway's pom.xml file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.apache.shenyu</groupId>\n    <artifactId>shenyu-spring-boot-starter-plugin-metrics</artifactId>\n    <version>${project.version}</version>\n</dependency>\n")),(0,a.kt)("p",null,"Edit the following in the gateway's configuration yaml file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  metrics:\n    enabled: false #Set to true to enable\n    name : prometheus\n    host: 127.0.0.1 #exposed ip\n    port: 8090 #Exposed port\n    jmxConfig: #jmxConfiguration\n    props:\n      jvm_enabled: true #Enable jvm monitoring indicators\n")),(0,a.kt)("p",null,"For specific metrics information, please check the official website description: ",(0,a.kt)("a",{parentName:"p",href:"https://shenyu.apache.org/zh/docs/plugin-center/observability/metrics-plugin"},"https://shenyu.apache.org/zh/docs/plugin-center/observability/metrics-plugin")),(0,a.kt)("h3",{id:"cache-plugin-instructions"},"Cache plugin instructions"),(0,a.kt)("p",null,"The Cache plugin can cache the results of the target service, and also allows the user to configure the expiration time of the cached results."),(0,a.kt)("h4",{id:"use-of-plugins-1"},"Use of plugins"),(0,a.kt)("p",null,"Add the Cache dependency in the gateway's pom.xml file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.apache.shenyu</groupId>\n    <artifactId>shenyu-spring-boot-starter-plugin-cache</artifactId>\n    <version>${project.version}</version>\n</dependency>\n")),(0,a.kt)("p",null,"It is suitable for scenarios where data is not frequently updated, requires a large number of calls, and does not require high data consistency."),(0,a.kt)("h3",{id:"logging-rocketmq-plugin-instructions"},"Logging RocketMQ plugin instructions"),(0,a.kt)("p",null,"The Apache ShenYu gateway receives the client request, forwards the request to the server, and returns the server result to the client. The gateway can record the detailed information corresponding to each request, such as: request time, request parameters, request path, response result, response status code, time-consuming, upstream IP, exception information, etc."),(0,a.kt)("p",null,"Logging-RocketMQ plugin is a plugin that records and sends access logs to the RocketMQ cluster."),(0,a.kt)("h4",{id:"use-of-plugins-2"},"Use of plugins"),(0,a.kt)("p",null,"Add dependencies in the gateway's pom.xml file."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>org.apache.shenyu</groupId>\n    <artifactId>shenyu-spring-boot-starter-plugin-logging-rocketmq</artifactId>\n    <version>${project.version}</version>\n</dependency>\n")),(0,a.kt)("p",null,"The specific configuration and the function of each parameter can be found on the official website: ",(0,a.kt)("a",{parentName:"p",href:"https://shenyu.apache.org/zh/docs/plugin-center/observability/logging-rocketmq"},"https://shenyu.apache.org/zh/docs/plugin-center/observability/logging-rocketmq")),(0,a.kt)("h3",{id:"next-version-planning"},"Next version planning"),(0,a.kt)("h4",{id:"add-cluster-plan"},"Add cluster plan"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Added shenyu-proxy module to support ShenYu's cluster mode and dynamic expansion and contraction of gateways"),(0,a.kt)("li",{parentName:"ul"},"Added shenyu-nginx sub-project to connect to Nginx-upstream module")),(0,a.kt)("h4",{id:"added-multi-language-sdk"},"Added multi-language SDK"),(0,a.kt)("p",null,"The multi-language SDK is mainly to allow other types of languages to quickly access the shenyu gateway"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-shenyu-client-donet"},"https://github.com/apache/incubator-shenyu-client-donet")),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-shenyu-client-golang"},"https://github.com/apache/incubator-shenyu-client-golang")),(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-shenyu-client-python"},"https://github.com/apache/incubator-shenyu-client-python"))),(0,a.kt)("h4",{id:"added-helm-chart"},"Added Helm Chart"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-shenyu-helm-chart"},"https://github.com/apache/incubator-shenyu-helm-chart"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"helm-ci-pipeline",src:n(53207).Z})))}s.isMDXComponent=!0},53207:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/helm-ci-pipeline-429d393437969120ed1a24dd3c18f23f.png"}}]);