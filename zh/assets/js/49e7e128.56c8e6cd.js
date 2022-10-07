"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[56898],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),i=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=i(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),g=i(n),m=r,d=g["".concat(l,".").concat(m)]||g[m]||u[m]||o;return n?a.createElement(d,c(c({ref:t},p),{},{components:n})):a.createElement(d,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,c[1]=s;for(var i=2;i<o;i++)c[i]=n[i];return a.createElement.apply(null,c)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},74487:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={title:"Nacos\u793a\u4f8b"},c=void 0,s={unversionedId:"nacos",id:"nacos",isDocsHomePage:!1,title:"Nacos\u793a\u4f8b",description:"\u4ee5Nacos\u65b9\u5f0f\u6ce8\u518c\u5230ShenYu\u7f51\u5173",source:"@site/i18n/zh/docusaurus-plugin-content-docs-shenyuClientGolang/current/nacos.md",sourceDirName:".",slug:"/nacos",permalink:"/zh/shenyuClientGolang/nacos",version:"current",lastUpdatedBy:"YunShu",lastUpdatedAt:1665164447,formattedLastUpdatedAt:"2022/10/7",frontMatter:{title:"Nacos\u793a\u4f8b"},sidebar:"community",previous:{title:"HTTP\u793a\u4f8b",permalink:"/zh/shenyuClientGolang/http"},next:{title:"Zookeeper\u793a\u4f8b",permalink:"/zh/shenyuClientGolang/zookeeper"}},l=[{value:"\u4ee5Nacos\u65b9\u5f0f\u6ce8\u518c\u5230ShenYu\u7f51\u5173",id:"\u4ee5nacos\u65b9\u5f0f\u6ce8\u518c\u5230shenyu\u7f51\u5173",children:[]}],i={toc:l};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u4ee5nacos\u65b9\u5f0f\u6ce8\u518c\u5230shenyu\u7f51\u5173"},"\u4ee5Nacos\u65b9\u5f0f\u6ce8\u518c\u5230ShenYu\u7f51\u5173"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"1.\u9996\u5148\u786e\u4fdd\u4f60\u7684nacos\u73af\u5883\u662f\u6b63\u786e\uff0c\u7136\u540e\u8bbe\u7f6e\u8fd9\u4e9bnacos\u5fc5\u8981\u7684\u53c2\u6570 .")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'//\u8bbe\u7f6enacos\u73af\u5883\u914d\u7f6e\n    ncp := &nacos_client.NacosClientParam{\n        IpAddr:      "console.nacos.io",\n        Port:        80,\n        NamespaceId: "e525eafa-f7d7-4029-83d9-008937f9d468",\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"2. \u51c6\u5907\u4f60\u8981\u6ce8\u518c\u670d\u52a1\u7684\u5143\u6570\u636e\u4fe1\u606f")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'//\u5143\u6570\u636e\u662f\u5fc5\u8981\u7684\u53c2\u6570\uff0c\u8fd9\u5c06\u6ce8\u518c\u5230shenyu\u7f51\u5173\u4f7f\u7528\nmetaData := &model.URIRegister{\n        Protocol:    "testMetaDataRegister", //\u9700\u8981\u7528\u6237\u63d0\u4f9b\n        AppName:     "testURLRegister",      //\u9700\u8981\u7528\u6237\u63d0\u4f9b\n        ContextPath: "contextPath",          //\u9700\u8981\u7528\u6237\u63d0\u4f9b\n        RPCType:     constants.RPCTYPE_HTTP, //\u9700\u8981\u7528\u6237\u63d0\u4f9b\n        Host:        "127.0.0.1",            //\u9700\u8981\u7528\u6237\u63d0\u4f9b\n        Port:        "8080",                 //\u9700\u8981\u7528\u6237\u63d0\u4f9b\n}\n    metaDataStringJson, _ := json.Marshal(metaData)\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"3.\u51c6\u5907\u4f60\u8981\u6ce8\u518c\u670d\u52a1\u7684\u5b9e\u4f8b\u6d88\u606f(\u5305\u62ec\u5143\u6570\u636e)")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'//\u521d\u59cb\u5316Nacos\u6ce8\u518c\u5b9e\u4f8b\u4fe1\u606f\n    nacosRegisterInstance := vo.RegisterInstanceParam{\n        Ip:          "10.0.0.10", //\u9700\u8981\u7528\u6237\u63d0\u4f9b\n        Port:        8848,        //\u9700\u8981\u7528\u6237\u63d0\u4f9b\n        ServiceName: "demo.go",   //\u9700\u8981\u7528\u6237\u63d0\u4f9b\n        Weight:      10,          //\u9700\u8981\u7528\u6237\u63d0\u4f9b\n        Enable:      true,        //\u9700\u8981\u7528\u6237\u63d0\u4f9b\n        Healthy:     true,        //\u9700\u8981\u7528\u6237\u63d0\u4f9b\n        Ephemeral:   true,        //\u9700\u8981\u7528\u6237\u63d0\u4f9b\n        Metadata:    map[string]string{"contextPath": "contextPath", "uriMetadata": string(metaDataStringJson)},\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"4. \u83b7\u53d6ShenYu nacos\u7684\u5ba2\u6237\u7aef")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'    sdkClient := shenyu_sdk_client.GetFactoryClient(constants.NACOS_CLIENT)\n    result, createResult, err := sdkClient.NewClient(ncp)\n        if !createResult && err != nil {\n        logger.Fatal("Create nacos client error : %v", err)\n    }\n\n    nc := &nacos_client.ShenYuNacosClient{\n        NacosClient: result.(*naming_client.NamingClient),\n    }\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"5.\u4f7f\u7528\u5ba2\u6237\u7aef\u8c03\u7528RegisterNacosInstance\u65b9\u6cd5")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'    registerResult, err := nc.RegisterServiceInstance(nacosRegisterInstance)\n        if !registerResult && err != nil {\n    logger.Fatal("Register nacos Instance error : %v", err)\n}\n        //do your logic\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"6.\u4f7f\u7528\u5ba2\u6237\u7aef\u8c03\u7528DeregisterServiceInstance\u65b9\u6cd5")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'//DeregisterServiceInstance start\n    deregisterInstanceParam := vo.DeregisterInstanceParam{\n    Ip:          "10.0.0.10",\n    Port:        8848,\n    ServiceName: "demo.go",\n    Ephemeral:   true,\n    //Cluster:     "cluster-a", // default value is DEFAULT\n    GroupName: "group-a", // default value is DEFAULT_GROUP\n}\n\n    serviceInstance, err := nc.DeregisterServiceInstance(deregisterInstanceParam)\n        if !serviceInstance && err != nil {\n        logger.Info("DeregisterServiceInstance result : %v", serviceInstance)\n}\n        //do your logic\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"7.\u4f7f\u7528\u5ba2\u6237\u7aef\u8c03\u7528GetServiceInstanceInfo\u65b9\u6cd5")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'         instanceInfo, err := nc.GetServiceInstanceInfo(queryData)\n            if instanceInfo == nil {\n                logger.Fatal("Register nacos Instance error : %v", err)\n            }\n        //do your logic\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u5b8c\u6574\u7684\u6210\u529f\u65e5\u5fd7")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'\n2022-07-26T18:07:32.494+0800    INFO    nacos_client/nacos_client.go:79 logDir:</tmp/nacos/log>   cacheDir:</tmp/nacos/cache>\n2022-07-26T18:07:32.495+0800    INFO    naming_client/push_receiver.go:80       udp server start, port: 55422\n2022-07-26T18:07:32.495+0800    INFO    naming_client/naming_proxy.go:54        register instance namespaceId:<e525eafa-f7d7-4029-83d9-008937f9d468>,serviceName:<group-a@@demo.go> with instance:<{"valid":false,"marked":false,"instanceId":"","port":8848,"ip":"10.0.0.10","weight":10,"metadata":{"contextPath":"contextPath","uriMetadata":"{\\"protocol\\":\\"testMetaDataRegister\\",\\"appName\\":\\"testURLRegister\\",\\"contextPath\\":\\"contextPath\\",\\"rpcType\\":\\"http\\",\\"host\\":\\"127.0.0.1\\",\\"port\\":\\"8080\\"}"},"clusterName":"cluster-a","serviceName":"","enabled":true,"healthy":true,"ephemeral":true}>\n2022-07-26T18:07:33.255+0800    INFO    naming_client/beat_reactor.go:68        adding beat: <{"ip":"10.0.0.10","port":8848,"weight":10,"serviceName":"group-a@@demo.go","cluster":"cluster-a","metadata":{"contextPath":"contextPath","uriMetadata":"{\\"protocol\\":\\"testMetaDataRegister\\",\\"appName\\":\\"testURLRegister\\",\\"contextPath\\":\\"contextPath\\",\\"rpcType\\":\\"http\\",\\"host\\":\\"127.0.0.1\\",\\"port\\":\\"8080\\"}"},"scheduled":false}> to beat map\n2022-07-26 18:07:33 [INFO] [github.com/apache/shenyu-client-golang/clients/nacos_client/nacos_client.go:107] RegisterServiceInstance,result:true\n\n,param:{Ip:10.0.0.10 Port:8848 Weight:10 Enable:true Healthy:true Metadata:map[contextPath:contextPath uriMetadata:{"protocol":"testMetaDataRegister","appName":"testURLRegister","contextPath":"contextPath","rpcType":"http","host":"127.0.0.1","port":"8080"}] ClusterName:cluster-a ServiceName:demo.go GroupName:group-a Ephemeral:true}\n\n\n2022-07-26T18:07:33.256+0800    INFO    naming_client/naming_proxy.go:103       namespaceId:<e525eafa-f7d7-4029-83d9-008937f9d468> sending beat to server:<{"ip":"10.0.0.10","port":8848,"weight":10,"serviceName":"group-a@@demo.go","cluster":"cluster-a","metadata":{"contextPath":"contextPath","uriMetadata":"{\\"protocol\\":\\"testMetaDataRegister\\",\\"appName\\":\\"testURLRegister\\",\\"contextPath\\":\\"contextPath\\",\\"rpcType\\":\\"http\\",\\"host\\":\\"127.0.0.1\\",\\"port\\":\\"8080\\"}"},"scheduled":false}>\n2022-07-26T18:07:34.256+0800    INFO    util/common.go:94       Local IP:10.167.40.91\n2022-07-26T18:07:34.507+0800    INFO    naming_client/host_reactor.go:95        service not found in cache group-a@@demo.go@@cluster-a\n2022-07-26 18:07:34 [INFO] [github.com/apache/shenyu-client-golang/clients/nacos_client/nacos_client.go:139] GetServiceInstanceInfo,result:[{Valid:false Marked:false InstanceId:10.0.0.10#8848#cluster-a#group-a@@demo.go Port:8848 Ip:10.0.0.10 Weight:10 Metadata:map[contextPath:contextPath uriMetadata:{"protocol":"testMetaDataRegister","appName":"testURLRegister","contextPath":"contextPath","rpcType":"http","host":"127.0.0.1","port":"8080"}] ClusterName:cluster-a ServiceName:group-a@@demo.go Enable:true Healthy:true Ephemeral:true}]\n\n,param:{Clusters:[cluster-a] ServiceName:demo.go GroupName:group-a HealthyOnly:true}\n\n\n2022-07-26 18:07:34 [INFO] [github.com/apache/shenyu-client-golang/example/nacos_client/main.go:102] [{false false 10.0.0.10#8848#cluster-a#group-a@@demo.go 8848 10.0.0.10 10 map[contextPath:contextPath uriMetadata:{"protocol":"testMetaDataRegister","appName":"testURLRegister","contextPath":"contextPath","rpcType":"http","host":"127.0.0.1","port":"8080"}] cluster-a group-a@@demo.go true true true}]\n2022-07-26T18:07:35.509+0800    INFO    naming_client/beat_reactor.go:83        remove beat: group-a@@demo.go@10.0.0.10:8848 from beat map\n2022-07-26T18:07:35.509+0800    INFO    naming_client/naming_proxy.go:73        deregister instance namespaceId:<e525eafa-f7d7-4029-83d9-008937f9d468>,serviceName:<group-a@@demo.go> with instance:<10.0.0.10:8848@cluster-a>\n2022-07-26 18:07:35 [INFO] [github.com/apache/shenyu-client-golang/clients/nacos_client/nacos_client.go:123] DeregisterServiceInstance,result:true\n\n,param:{Ip:10.0.0.10 Port:8848 Cluster:cluster-a ServiceName:demo.go GroupName:group-a Ephemeral:true}\n\n')))}p.isMDXComponent=!0}}]);