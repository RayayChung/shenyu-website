"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[11378],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=u(n),m=r,b=s["".concat(p,".").concat(m)]||s[m]||d[m]||i;return n?a.createElement(b,o(o({ref:t},c),{},{components:n})):a.createElement(b,o({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=s;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},35804:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"Dubbo Plugin",keywords:["dubbo"],description:"dubbo plugin"},o=void 0,l={unversionedId:"plugin-center/rpc-proxy/dubbo-plugin",id:"version-2.4.0/plugin-center/rpc-proxy/dubbo-plugin",isDocsHomePage:!1,title:"Dubbo Plugin",description:"dubbo plugin",source:"@site/versioned_docs/version-2.4.0/plugin-center/rpc-proxy/dubbo-plugin.md",sourceDirName:"plugin-center/rpc-proxy",slug:"/plugin-center/rpc-proxy/dubbo-plugin",permalink:"/docs/2.4.0/plugin-center/rpc-proxy/dubbo-plugin",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.4.0/plugin-center/rpc-proxy/dubbo-plugin.md",version:"2.4.0",frontMatter:{title:"Dubbo Plugin",keywords:["dubbo"],description:"dubbo plugin"},sidebar:"version-2.4.0/tutorialSidebar",previous:{title:"WebSocket Plugin",permalink:"/docs/2.4.0/plugin-center/http-handle/websocket-plugin"},next:{title:"gRPC Plugin",permalink:"/docs/2.4.0/plugin-center/rpc-proxy/grpc-plugin"}},p=[{value:"Explanation",id:"explanation",children:[]},{value:"Plugin Setting",id:"plugin-setting",children:[]},{value:"Metadata",id:"metadata",children:[]}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"explanation"},"Explanation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Dubbo is a plugin that converts ",(0,r.kt)("inlineCode",{parentName:"li"},"http protocol")," into ",(0,r.kt)("inlineCode",{parentName:"li"},"Dubbo protocol")," and it is also the key for gateway to realize dubbo generic service."),(0,r.kt)("li",{parentName:"ul"},"Dubbo plugin needs to cooperate with metadata to realize dubbo calls."),(0,r.kt)("li",{parentName:"ul"},"Apache Dubbo and Alibaba Dubbo users both use the same plugin.")),(0,r.kt)("h2",{id:"plugin-setting"},"Plugin Setting"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Add related dependencies and enable plugin, please refer to: ",(0,r.kt)("a",{parentName:"p",href:"../../quick-start/quick-start-dubbo"},"Quick start with Dubbo")," .")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"Dubbo")," client access, please refer to: ",(0,r.kt)("a",{parentName:"p",href:"../../user-guide/dubbo-proxy"},"Dubbo Proxy")," .")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Set selector and rule, please refer to: ",(0,r.kt)("a",{parentName:"p",href:"../../user-guide/admin-usage/selector-and-rule"},"Selector And Rule Config")," ."))),(0,r.kt)("h2",{id:"metadata"},"Metadata"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Every dubbo interface method corresponds to a piece of metadata, which can be found in ",(0,r.kt)("inlineCode",{parentName:"li"},"shenyu-admin")," --\x3e BasicConfig -> Metadata .")),(0,r.kt)("img",{src:"/img/shenyu/plugin/dubbo/dubbo-metadata-en.jpg",width:"50%"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"AppName: The name of the application to which this piece of metadata belongs.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"MethodName: The name of the method that needs to be called.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Path: your http request path.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"PathDescribe: Description of the path, for easy viewing.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"ParamsType: List of parameter types of dubbo interface, there are two declaration methods here:\ne.g. we have an interface ",(0,r.kt)("inlineCode",{parentName:"p"},"update(Integer id, String name, Integer age)")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Type list"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"```yaml\njava.lang.Integer,java.lang.String,java.lang.Integer\n```\n")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"According to the order of the parameter types of the interface, separated by ",(0,r.kt)("inlineCode",{parentName:"p"},","))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"When requesting to pass parameters, ",(0,r.kt)("strong",{parentName:"p"},"the parameters must be passed in strictly in accordance with the order of the parameter types"),", if a parameter without value use ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," as a placeholder."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'Request body example: `{"id":1,"name": null,"age":18}`\n'))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Name mapping"))))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'  ```yaml\n  {"id":"java.lang.Integer","name":"java.lang.String","age":"java.lang.Integer"}      \n  ```\n\n\n* Use `"parameter name":"parameter type"` to represent a parameter, set in order of interface parameter type, separated by `,`\n\n* No need to pay attention to the order when requesting, and no need to use null placeholders.\n\n\n      Request body example:  `{"name":"Mike","id":1}`\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"RpcExpand: corresponding to some configurations of dubbo interface; If you want to adjust, please modify here, which support json format like the following fields:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'{ "timeout": 10000,"group": "",version":"","loadbalance": "","retries": 1 }\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Interface: The fully-qualified name for dubbo interface .")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"RpcType: Choose ",(0,r.kt)("inlineCode",{parentName:"p"},"dubbo")," ."))))}c.isMDXComponent=!0}}]);