"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[75703],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=i.createContext({}),s=function(e){var t=i.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,g=m["".concat(u,".").concat(d)]||m[d]||c[d]||a;return n?i.createElement(g,l(l({ref:t},p),{},{components:n})):i.createElement(g,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<a;s++)l[s]=n[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},84919:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p}});var i=n(87462),r=n(63366),a=(n(67294),n(3905)),l=["components"],o={sidebar_position:5,title:"RateLimiter Plugin",keywords:["rateLimiter"],description:"rateLimiter plugin"},u=void 0,s={unversionedId:"plugins/rate-limiter-plugin",id:"version-2.3.0-Legacy/plugins/rate-limiter-plugin",isDocsHomePage:!1,title:"RateLimiter Plugin",description:"rateLimiter plugin",source:"@site/versioned_docs/version-2.3.0-Legacy/plugins/rate-limiter-plugin.md",sourceDirName:"plugins",slug:"/plugins/rate-limiter-plugin",permalink:"/docs/2.3.0-Legacy/plugins/rate-limiter-plugin",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/versioned_docs/version-2.3.0-Legacy/plugins/rate-limiter-plugin.md",version:"2.3.0-Legacy",sidebarPosition:5,frontMatter:{sidebar_position:5,title:"RateLimiter Plugin",keywords:["rateLimiter"],description:"rateLimiter plugin"},sidebar:"version-2.3.0-Legacy/tutorialSidebar",previous:{title:"Sofa Plugin",permalink:"/docs/2.3.0-Legacy/plugins/sofa-plugin"},next:{title:"Hystrix Plugin",permalink:"/docs/2.3.0-Legacy/plugins/hystrix-plugin"}},p=[{value:"Explanation",id:"explanation",children:[]},{value:"Technical Solution",id:"technical-solution",children:[]},{value:"Plugin Setting",id:"plugin-setting",children:[]},{value:"Plugin Detail",id:"plugin-detail",children:[]}],c={toc:p};function m(e){var t=e.components,o=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,i.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"explanation"},"Explanation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"rateLimiter is core implementation of gateway restrictions on network traffic.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The soul gateway provides a variety of current limiting algorithms, including ",(0,a.kt)("inlineCode",{parentName:"p"},"token bucket algorithm"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"concurrent token bucket algorithm"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"leaky bucket algorithm")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"sliding time window algorithm"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The implementation of current limiting algorithm of soul gateway is based on ",(0,a.kt)("inlineCode",{parentName:"p"},"redis"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"You can set to the interface level or the parameter level. How to use it depends on your traffic configuration."))),(0,a.kt)("h2",{id:"technical-solution"},"Technical Solution"),(0,a.kt)("h4",{id:"using-redis-token-bucket-algorithm-to-limit-traffic"},"Using redis token bucket algorithm to limit traffic."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The system generates the token at a constant rate, and then puts the token into the token bucket."),(0,a.kt)("li",{parentName:"ul"},"The token bucket's capacity. When the bucket is full, the token put into it will be discarded."),(0,a.kt)("li",{parentName:"ul"},"Each time requests come, you need to obtain a token from the token bucket. If there are tokens, the service will be provided; if there are no tokens, the service will be rejected.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flow Diagram\uff1a\n",(0,a.kt)("img",{parentName:"li",src:"https://yu199195.github.io/images/soul/limiting.png",alt:null}))),(0,a.kt)("h4",{id:"using-redis-leaky-bucket-algorithm-to-limit-traffic"},"Using redis leaky bucket algorithm to limit traffic."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"water (request) go to the leaky bucket first. The leaky bucket goes out at a fixed speed. When the flow speed is too fast, it will overflow directly (reject service)")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flow Diagram\uff1a\n",(0,a.kt)("img",{src:n(75207).Z}))),(0,a.kt)("h4",{id:"using-redis-sliding-time-window-algorithm-to-limit-traffic"},"Using redis sliding time window algorithm to limit traffic."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The sliding time window maintains the count value of unit time. Whenever a requests pass, the count value will be increased by 1. When the count value exceeds the preset threshold, other requests in unit time will be rejected. If the unit time has ended, clear the counter to zero and start the next round counting.")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Flow Diagram\uff1a\n",(0,a.kt)("img",{src:n(47898).Z}))),(0,a.kt)("h2",{id:"plugin-setting"},"Plugin Setting"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"In ",(0,a.kt)("inlineCode",{parentName:"p"},"soul-admin"),"--\x3e plugin management--\x3e ",(0,a.kt)("inlineCode",{parentName:"p"},"rate_limiter")," set to enable.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Configure redis in the plugin.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Currently, supporting redis patterns of single, sentinel, and cluster.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If it is a sentinel, cluster and other multi-node configuration in URL, please use ",(0,a.kt)("inlineCode",{parentName:"p"},";")," for each instance; Division. For example, 192.168.1.1:6379; 192.168.1.2:6379\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"If the user don't use, please disable the plugin in the background."))),(0,a.kt)("h2",{id:"plugin-detail"},"Plugin Detail"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Introduce ",(0,a.kt)("inlineCode",{parentName:"li"},"rateLimiter")," dependency in pom.xml file of the gateway.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml"},"  \x3c!-- soul ratelimiter plugin start--\x3e\n  <dependency>\n      <groupId>org.dromara</groupId>\n      <artifactId>soul-spring-boot-starter-plugin-ratelimiter</artifactId>\n      <version>${last.version}</version>\n  </dependency>\n  \x3c!-- soul ratelimiter plugin end--\x3e\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Selectors and rules, please refer to: ",(0,a.kt)("a",{parentName:"p",href:"../admin/selector-and-rule"},"selector"),"\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Detailed description of the rules"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Token bucket algorithm/Concurrent token bucket algorithm")))),(0,a.kt)("p",null,"lgorithmName\uff1atocketBucket/concurrent"),(0,a.kt)("p",null,"replenishRate\uff1aIt is how many requests you allow users to execute per second, while not discarding any requests. This is the filling rate of token bucket."),(0,a.kt)("p",null,"burstCapacity\uff1ait is the maximum number of requests that users are allowed to execute in one second. This is token bucket can save the number of token."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Leaky bucket algorithm")),(0,a.kt)("p",null,"algorithmName\uff1aleakyBucket"),(0,a.kt)("p",null,"replenishRate\uff1aThe rate at which requests are executed per unit time, and the rate at which water droplets leak out of the leaky bucket."),(0,a.kt)("p",null,"burstCapacity\uff1aThe maximum number of requests that users are allowed to execute in one second. This is the amount of water in the bucket."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Sliding time window algorithm")),(0,a.kt)("p",null,"algorithmName\uff1asildingWindow"),(0,a.kt)("p",null,"replenishRate\uff1aThe rate of requests per unit time, used to calculate the size of the time window."),(0,a.kt)("p",null,"burstCapacity\uff1aThe maximum number of requests in the time window (per unit time)."))}m.isMDXComponent=!0},75207:function(e,t,n){t.Z=n.p+"assets/images/leakybucket-cc829d5529e0847152a90793867e9f96.png"},47898:function(e,t,n){t.Z=n.p+"assets/images/sldingwindow-c529b50727afb275845585edb72b0215.png"}}]);