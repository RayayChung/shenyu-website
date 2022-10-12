"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[37169],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),o=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):p(p({},n),e)),t},s=function(e){var n=o(e.components);return a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=o(t),m=r,y=d["".concat(c,".").concat(m)]||d[m]||u[m]||l;return t?a.createElement(y,p(p({ref:n},s),{},{components:t})):a.createElement(y,p({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,p=new Array(l);p[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var o=2;o<l;o++)p[o]=t[o];return a.createElement.apply(null,p)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},31820:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>p,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var a=t(87462),r=(t(67294),t(3905));const l={title:"\u6570\u636e\u540c\u6b65\u914d\u7f6e",description:"\u4f7f\u7528\u4e0d\u540c\u7684\u6570\u636e\u540c\u6b65\u7b56\u7565"},p=void 0,i={unversionedId:"user-guide/property-config/use-data-sync",id:"user-guide/property-config/use-data-sync",isDocsHomePage:!1,title:"\u6570\u636e\u540c\u6b65\u914d\u7f6e",description:"\u4f7f\u7528\u4e0d\u540c\u7684\u6570\u636e\u540c\u6b65\u7b56\u7565",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/user-guide/property-config/use-data-sync.md",sourceDirName:"user-guide/property-config",slug:"/user-guide/property-config/use-data-sync",permalink:"/zh/docs/next/user-guide/property-config/use-data-sync",editUrl:"https://github.com/apache/shenyu-website/edit/main/i18n/zh/docusaurus-plugin-content-docs/current/user-guide/property-config/use-data-sync.md",version:"current",frontMatter:{title:"\u6570\u636e\u540c\u6b65\u914d\u7f6e",description:"\u4f7f\u7528\u4e0d\u540c\u7684\u6570\u636e\u540c\u6b65\u7b56\u7565"},sidebar:"tutorialSidebar",previous:{title:"\u6ce8\u518c\u4e2d\u5fc3\u914d\u7f6e",permalink:"/zh/docs/next/user-guide/property-config/register-center-instance"},next:{title:"Dubbo\u670d\u52a1\u63a5\u5165",permalink:"/zh/docs/next/user-guide/dubbo-proxy"}},c=[{value:"WebSocket\u540c\u6b65\u914d\u7f6e\uff08\u9ed8\u8ba4\u65b9\u5f0f\uff0c\u63a8\u8350\uff09",id:"websocket\u540c\u6b65\u914d\u7f6e\u9ed8\u8ba4\u65b9\u5f0f\u63a8\u8350",children:[]},{value:"Zookeeper\u540c\u6b65\u914d\u7f6e",id:"zookeeper\u540c\u6b65\u914d\u7f6e",children:[]},{value:"Http\u957f\u8f6e\u8be2\u540c\u6b65\u914d\u7f6e",id:"http\u957f\u8f6e\u8be2\u540c\u6b65\u914d\u7f6e",children:[]},{value:"Nacos\u540c\u6b65\u914d\u7f6e",id:"nacos\u540c\u6b65\u914d\u7f6e",children:[]},{value:"Etcd \u540c\u6b65\u914d\u7f6e",id:"etcd-\u540c\u6b65\u914d\u7f6e",children:[]},{value:"Consul \u540c\u6b65\u914d\u7f6e",id:"consul-\u540c\u6b65\u914d\u7f6e",children:[]}],o={toc:c};function s(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u672c\u7bc7\u4e3b\u8981\u8bb2\u89e3\u5982\u4f55\u914d\u7f6e\u6570\u636e\u540c\u6b65\u7b56\u7565\uff0c\u6570\u636e\u540c\u6b65\u662f\u6307\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu-admin")," \u540e\u53f0\u64cd\u4f5c\u6570\u636e\u4ee5\u540e\uff0c\u4f7f\u7528\u4f55\u79cd\u7b56\u7565\u5c06\u6570\u636e\u540c\u6b65\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," \u7f51\u5173\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," \u7f51\u5173\u5f53\u524d\u652f\u6301",(0,r.kt)("inlineCode",{parentName:"p"},"ZooKeeper"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"WebSocket"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"Http\u957f\u8f6e\u8be2"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"Nacos"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"Etcd")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"Consul"),"\u8fdb\u884c\u6570\u636e\u540c\u6b65\u3002"),(0,r.kt)("img",{src:"/img/shenyu/dataSync/data-sync-config-dir-zh.png",width:"60%",height:"50%"}),(0,r.kt)("p",null,"\u6570\u636e\u540c\u6b65\u539f\u7406\u8bf7\u53c2\u8003\u8bbe\u8ba1\u6587\u6863\u4e2d\u7684  ",(0,r.kt)("a",{parentName:"p",href:"../../design/data-sync"},"\u6570\u636e\u540c\u6b65\u539f\u7406"),"  \u3002"),(0,r.kt)("h3",{id:"websocket\u540c\u6b65\u914d\u7f6e\u9ed8\u8ba4\u65b9\u5f0f\u63a8\u8350"},"WebSocket\u540c\u6b65\u914d\u7f6e\uff08\u9ed8\u8ba4\u65b9\u5f0f\uff0c\u63a8\u8350\uff09"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Apache ShenYu"),"\u7f51\u5173\u914d\u7f6e"),(0,r.kt)("p",{parentName:"li"},"\u9996\u5148\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"pom.xml")," \u6587\u4ef6\u4e2d\u5f15\u5165\u4ee5\u4e0b\u4f9d\u8d56\uff1a"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"    \x3c!-- apache shenyu data sync start use websocket--\x3e\n    <dependency>\n        <groupId>org.apache.shenyu</groupId>\n        <artifactId>shenyu-spring-boot-starter-sync-data-websocket</artifactId>\n        <version>${project.version}</version>\n    </dependency>\n")),(0,r.kt)("img",{src:"/img/shenyu/dataSync/shenyu-data-sync-websocket-pom.png",width:"80%",height:"70%"}),(0,r.kt)("p",null,"\u7136\u540e\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"yml")," \u6587\u4ef6\u4e2d\u8fdb\u884c\u5982\u4e0b\u914d\u7f6e:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  sync:\n    websocket :\n      urls: ws://localhost:9095/websocket\n      # urls:\u662f\u6307 shenyu-admin\u7684\u5730\u5740\uff0c\u5982\u679c\u6709\u591a\u4e2a\uff0c\u8bf7\u4f7f\u7528\uff08,\uff09\u5206\u5272\u3002  \n")),(0,r.kt)("img",{src:"/img/shenyu/dataSync/shenyu-data-sync-websocket-yml.png",width:"80%",height:"70%"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"shenyu-admin \u914d\u7f6e")),(0,r.kt)("p",{parentName:"li"},"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"yml")," \u6587\u4ef6\u4e2d\u8fdb\u884c\u5982\u4e0b\u914d\u7f6e:"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"shenyu:\n  sync:\n    websocket:\n      enabled: true\n")),(0,r.kt)("img",{src:"/img/shenyu/dataSync/shenyu-data-sync-websocket-admin-yml.png",width:"80%",height:"70%"}),(0,r.kt)("p",null,"\u5f53\u5efa\u7acb\u8fde\u63a5\u4ee5\u540e\u4f1a\u5168\u91cf\u83b7\u53d6\u4e00\u6b21\u6570\u636e\uff0c\u4ee5\u540e\u7684\u6570\u636e\u90fd\u662f\u589e\u91cf\u7684\u66f4\u65b0\u4e0e\u65b0\u589e\uff0c\u6027\u80fd\u597d\u3002\u800c\u4e14\u4e5f\u652f\u6301\u65ad\u7ebf\u91cd\u8fde \uff08\u9ed8\u8ba4",(0,r.kt)("inlineCode",{parentName:"p"},"30"),"\u79d2\uff09\u3002\u63a8\u8350\u4f7f\u7528\u6b64\u65b9\u5f0f\u8fdb\u884c\u6570\u636e\u540c\u6b65\uff0c\u4e5f\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"Apache ShenYu"),"\u9ed8\u8ba4\u7684\u6570\u636e\u540c\u6b65\u7b56\u7565\u3002"),(0,r.kt)("h3",{id:"zookeeper\u540c\u6b65\u914d\u7f6e"},"Zookeeper\u540c\u6b65\u914d\u7f6e"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8bf7\u6ce8\u610f\uff0c\u4ece ShenYu 2.5.0 \u8d77\u5c06\u4e0d\u518d\u652f\u6301 Zookeeper 3.4.x \u6216\u66f4\u4f4e\u7248\u672c\u3002\u5982\u679c\u60a8\u5df2\u7ecf\u4f7f\u7528\u4e86 Zookeeper 3.4.x \u6216\u66f4\u4f4e\u7684\u7248\u672c\uff0c\u60a8\u9700\u8981\u4f7f\u7528\u66f4\u9ad8\u7684 Zookeeper \u7248\u672c\u5e76\u91cd\u65b0\u521d\u59cb\u5316\u6570\u636e\u3002")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Apache ShenYu"),"\u7f51\u5173\u914d\u7f6e"),(0,r.kt)("p",{parentName:"li"}," \u9996\u5148\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"pom.xml")," \u6587\u4ef6\u4e2d\u5f15\u5165\u4ee5\u4e0b\u4f9d\u8d56\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"       \x3c!-- apache shenyu data sync start use zookeeper--\x3e\n       <dependency>\n           <groupId>org.apache.shenyu</groupId>\n           <artifactId>shenyu-spring-boot-starter-sync-data-zookeeper</artifactId>\n           <version>${project.version}</version>\n       </dependency>\n")),(0,r.kt)("img",{src:"/img/shenyu/dataSync/shenyu-data-sync-zk-pom.png",width:"80%",height:"70%"}))),(0,r.kt)("p",null,"\u7136\u540e\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"yml")," \u6587\u4ef6\u4e2d\u8fdb\u884c\u5982\u4e0b\u914d\u7f6e:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  sync:\n    zookeeper:\n      url: localhost:2181\n      # url: \u914d\u7f6e\u6210\u4f60\u7684 zookeeper \u5730\u5740\uff0c\u96c6\u7fa4\u73af\u5883\u8bf7\u4f7f\u7528\uff08,\uff09\u5206\u9694\n      sessionTimeout: 5000\n      connectionTimeout: 2000\n")),(0,r.kt)("img",{src:"/img/shenyu/dataSync/shenyu-data-sync-zk-yml.png",width:"80%",height:"70%"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"shenyu-admin")," \u914d\u7f6e")),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"yml")," \u6587\u4ef6\u4e2d\u8fdb\u884c\u5982\u4e0b\u914d\u7f6e:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  sync:\n    zookeeper:\n      url: localhost:2181\n      # url: \u914d\u7f6e\u6210\u4f60\u7684 zookeeper \u5730\u5740\uff0c\u96c6\u7fa4\u73af\u5883\u8bf7\u4f7f\u7528\uff08,\uff09\u5206\u9694\n      sessionTimeout: 5000\n      connectionTimeout: 2000\n")),(0,r.kt)("img",{src:"/img/shenyu/dataSync/shenyu-data-sync-admin-zk-yml.png",width:"80%",height:"70%"}),(0,r.kt)("p",null,"\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"zookeeper"),"\u540c\u6b65\u673a\u5236\u4e5f\u662f\u975e\u5e38\u597d\u7684\uff0c\u65f6\u6548\u6027\u4e5f\u9ad8\uff0c\u4f46\u662f\u8981\u5904\u7406",(0,r.kt)("inlineCode",{parentName:"p"},"zookeeper"),"\u73af\u5883\u4e0d\u7a33\u5b9a\uff0c\u96c6\u7fa4\u8111\u88c2\u7b49\u95ee\u9898\u3002"),(0,r.kt)("h3",{id:"http\u957f\u8f6e\u8be2\u540c\u6b65\u914d\u7f6e"},"Http\u957f\u8f6e\u8be2\u540c\u6b65\u914d\u7f6e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Apache ShenYu"),"\u7f51\u5173\u914d\u7f6e")),(0,r.kt)("p",null,"\u9996\u5148\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"pom.xml")," \u6587\u4ef6\u4e2d\u5f15\u5165\u4ee5\u4e0b\u4f9d\u8d56\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"        \x3c!-- apache shenyu data sync start use http--\x3e\n        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-spring-boot-starter-sync-data-http</artifactId>\n            <version>${project.version}</version>\n        </dependency>\n")),(0,r.kt)("img",{src:"/img/shenyu/dataSync/shenyu-data-sync-http-pom.png",width:"80%",height:"70%"}),(0,r.kt)("p",null,"\u7136\u540e\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"yml")," \u6587\u4ef6\u4e2d\u8fdb\u884c\u5982\u4e0b\u914d\u7f6e:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  sync:\n    http:\n      url: http://localhost:9095\n      # url: \u914d\u7f6e\u6210\u4f60\u7684 shenyu-admin \u7684 ip \u4e0e\u7aef\u53e3\u5730\u5740\uff0c\u591a\u4e2aadmin\u96c6\u7fa4\u73af\u5883\u8bf7\u4f7f\u7528\uff08,\uff09\u5206\u9694\u3002\n")),(0,r.kt)("img",{src:"/img/shenyu/dataSync/shenyu-data-sync-http-yml.png",width:"80%",height:"70%"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"shenyu-admin")," \u914d\u7f6e")),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"yml")," \u6587\u4ef6\u4e2d\u8fdb\u884c\u5982\u4e0b\u914d\u7f6e:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  sync:\n    http:\n      enabled: true\n")),(0,r.kt)("img",{src:"/img/shenyu/dataSync/shenyu-data-sync-admin-http-yml.png",width:"80%",height:"70%"}),(0,r.kt)("p",null,"\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"Http\u957f\u8f6e\u8be2"),"\u8fdb\u884c\u6570\u636e\u540c\u6b65\uff0c\u4f1a\u8ba9\u7f51\u5173\u5f88\u8f7b\u91cf\uff0c\u4f46\u65f6\u6548\u6027\u7565\u4f4e\u3002\u5b83\u662f\u6839\u636e\u5206\u7ec4",(0,r.kt)("inlineCode",{parentName:"p"},"key"),"\u6765\u62c9\u53d6\uff0c\u5982\u679c\u6570\u636e\u91cf\u8fc7\u5927\uff0c\u8fc7\u591a\uff0c\u4f1a\u6709\u4e00\u5b9a\u7684\u5f71\u54cd\u3002\u539f\u56e0\u662f\u4e00\u4e2a\u7ec4\u4e0b\u9762\u7684\u4e00\u4e2a\u5c0f\u5730\u65b9\u66f4\u6539\uff0c\u90fd\u4f1a\u62c9\u53d6\u6574\u4e2a\u7ec4\u7684\u6570\u636e\u3002"),(0,r.kt)("h3",{id:"nacos\u540c\u6b65\u914d\u7f6e"},"Nacos\u540c\u6b65\u914d\u7f6e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Apache ShenYu"),"\u7f51\u5173\u914d\u7f6e")),(0,r.kt)("p",null,"\u9996\u5148\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"pom.xml")," \u6587\u4ef6\u4e2d\u5f15\u5165\u4ee5\u4e0b\u4f9d\u8d56\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"        \x3c!-- apache shenyu data sync start use nacos--\x3e\n        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-spring-boot-starter-sync-data-nacos</artifactId>\n            <version>${project.version}</version>\n        </dependency>\n")),(0,r.kt)("img",{src:"/img/shenyu/dataSync/shenyu-data-sync-nacos-pom.png",width:"80%",height:"70%"}),(0,r.kt)("p",null,"\u7136\u540e\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"yml")," \u6587\u4ef6\u4e2d\u8fdb\u884c\u5982\u4e0b\u914d\u7f6e:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  sync:\n    nacos:\n      url: localhost:8848\n      # url: \u914d\u7f6e\u6210\u4f60\u7684 nacos\u5730\u5740\uff0c\u96c6\u7fa4\u73af\u5883\u8bf7\u4f7f\u7528\uff08,\uff09\u5206\u9694\u3002\n      namespace: 1c10d748-af86-43b9-8265-75f487d20c6c\n      username:\n      password:\n      acm:\n        enabled: false\n        endpoint: acm.aliyun.com\n        namespace:\n        accessKey:\n        secretKey:\n      # \u5176\u4ed6\u53c2\u6570\u914d\u7f6e\uff0c\u8bf7\u53c2\u8003 naocs\u5b98\u7f51\u3002\n")),(0,r.kt)("img",{src:"/img/shenyu/dataSync/shenyu-data-sync-nacos-yml.png",width:"80%",height:"70%"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"shenyu-admin")," \u914d\u7f6e")),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"yml")," \u6587\u4ef6\u4e2d\u8fdb\u884c\u5982\u4e0b\u914d\u7f6e:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  sync:\n    nacos:\n      url: localhost:8848\n      # url: \u914d\u7f6e\u6210\u4f60\u7684 nacos\u5730\u5740\uff0c\u96c6\u7fa4\u73af\u5883\u8bf7\u4f7f\u7528\uff08,\uff09\u5206\u9694\u3002\n      namespace: 1c10d748-af86-43b9-8265-75f487d20c6c\n      username:\n      password:\n      acm:\n        enabled: false\n        endpoint: acm.aliyun.com\n        namespace:\n        accessKey:\n        secretKey:\n      # \u5176\u4ed6\u53c2\u6570\u914d\u7f6e\uff0c\u8bf7\u53c2\u8003 naocs\u5b98\u7f51\u3002\n")),(0,r.kt)("img",{src:"/img/shenyu/dataSync/shenyu-data-sync-admin-nacos-yml.png",width:"80%",height:"70%"}),(0,r.kt)("h3",{id:"etcd-\u540c\u6b65\u914d\u7f6e"},"Etcd \u540c\u6b65\u914d\u7f6e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Apache ShenYu"),"\u7f51\u5173\u914d\u7f6e")),(0,r.kt)("p",null,"\u9996\u5148\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"pom.xml")," \u6587\u4ef6\u4e2d\u5f15\u5165\u4ee5\u4e0b\u4f9d\u8d56\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"        \x3c!-- apache shenyu data sync start use etcd--\x3e\n        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-spring-boot-starter-sync-data-etcd</artifactId>\n            <version>${project.version}</version>\n            <exclusions>\n                <exclusion>\n                    <groupId>io.grpc</groupId>\n                    <artifactId>grpc-grpclb</artifactId>\n                </exclusion>\n                <exclusion>\n                    <groupId>io.grpc</groupId>\n                    <artifactId>grpc-netty</artifactId>\n                </exclusion>\n            </exclusions>\n        </dependency>\n")),(0,r.kt)("img",{src:"/img/shenyu/dataSync/shenyu-data-sync-etcd-pom.png",width:"80%",height:"70%"}),(0,r.kt)("p",null,"\u7136\u540e\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"yml")," \u6587\u4ef6\u4e2d\u8fdb\u884c\u5982\u4e0b\u914d\u7f6e:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  sync:\n    etcd:\n      url: http://localhost:2379\n      # url: \u914d\u7f6e\u6210\u4f60\u7684 etcd\uff0c\u96c6\u7fa4\u73af\u5883\u8bf7\u4f7f\u7528\uff08,\uff09\u5206\u9694\u3002\n")),(0,r.kt)("img",{src:"/img/shenyu/dataSync/shenyu-data-sync-etcd-yml.png",width:"80%",height:"70%"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"shenyu-admin")," \u914d\u7f6e")),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"yml")," \u6587\u4ef6\u4e2d\u8fdb\u884c\u5982\u4e0b\u914d\u7f6e:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  sync:\n    etcd:\n      url: http://localhost:2379\n      # url: \u914d\u7f6e\u6210\u4f60\u7684 etcd\uff0c\u96c6\u7fa4\u73af\u5883\u8bf7\u4f7f\u7528\uff08,\uff09\u5206\u9694\u3002\n")),(0,r.kt)("img",{src:"/img/shenyu/dataSync/shenyu-data-sync-admin-etcd-yml.png",width:"80%",height:"70%"}),(0,r.kt)("h3",{id:"consul-\u540c\u6b65\u914d\u7f6e"},"Consul \u540c\u6b65\u914d\u7f6e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Apache ShenYu"),"\u7f51\u5173\u914d\u7f6e")),(0,r.kt)("p",null,"\u9996\u5148\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"pom.xml")," \u6587\u4ef6\u4e2d\u5f15\u5165\u4ee5\u4e0b\u4f9d\u8d56\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"        \x3c!-- apache shenyu data sync start use consul--\x3e\n        <dependency>\n            <groupId>org.apache.shenyu</groupId>\n            <artifactId>shenyu-spring-boot-starter-sync-data-consul</artifactId>\n            <version>${project.version}</version>\n        </dependency>\n")),(0,r.kt)("img",{src:"/img/shenyu/dataSync/shenyu_consul_sync_gateway.jpg",width:"80%",height:"70%"}),(0,r.kt)("p",null,"\u7136\u540e\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"yml")," \u6587\u4ef6\u4e2d\u8fdb\u884c\u5982\u4e0b\u914d\u7f6e:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  sync:\n    consul:\n      url: http://localhost:8500\n      waitTime: 1000    # \u67e5\u8be2\u7b49\u5f85\u65f6\u95f4\n      watchDelay: 1000  # \u6570\u636e\u540c\u6b65\u95f4\u9694\u65f6\u95f4\n")),(0,r.kt)("img",{src:"/img/shenyu/dataSync/shenyu_consul_gateway_sync_config.jpg",width:"80%",height:"70%"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"shenyu-admin")," \u914d\u7f6e")),(0,r.kt)("p",null,"\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"yml")," \u6587\u4ef6\u4e2d\u8fdb\u884c\u5982\u4e0b\u914d\u7f6e:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"shenyu:\n  sync:\n    consul:\n      url: http://localhost:8500\n")),(0,r.kt)("img",{src:"/img/shenyu/dataSync/shenyu_consul_admin_sync_config.jpg",width:"80%",height:"70%"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"Apache ShenYu"),"\u7f51\u5173\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu-admin")," \u91cd\u65b0\u914d\u7f6e\u6570\u636e\u540c\u6b65\u7b56\u7565\u540e\uff0c\u9700\u8981\u91cd\u542f\u670d\u52a1\u3002"),(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("inlineCode",{parentName:"p"},"Apache ShenYu"),"\u7f51\u5173 \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"shenyu-admin")," \u5fc5\u987b\u4f7f\u7528\u76f8\u540c\u7684\u540c\u6b65\u7b56\u7565\u3002")))}s.isMDXComponent=!0}}]);