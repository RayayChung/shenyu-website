"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[39193],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return g}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(n),g=i,m=c["".concat(p,".").concat(g)]||c[g]||d[g]||r;return n?a.createElement(m,l(l({ref:t},s),{},{components:n})):a.createElement(m,l({ref:t},s))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},19900:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return s}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),l=["components"],o={sidebar_position:11,title:"Sign Plugin",keywords:["sign"],description:"sign plugin"},p=void 0,u={unversionedId:"plugins/sign-plugin",id:"version-2.3.0-Legacy/plugins/sign-plugin",isDocsHomePage:!1,title:"Sign Plugin",description:"sign plugin",source:"@site/versioned_docs/version-2.3.0-Legacy/plugins/sign-plugin.md",sourceDirName:"plugins",slug:"/plugins/sign-plugin",permalink:"/docs/2.3.0-Legacy/plugins/sign-plugin",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/versioned_docs/version-2.3.0-Legacy/plugins/sign-plugin.md",version:"2.3.0-Legacy",sidebarPosition:11,frontMatter:{sidebar_position:11,title:"Sign Plugin",keywords:["sign"],description:"sign plugin"},sidebar:"version-2.3.0-Legacy/tutorialSidebar",previous:{title:"Waf Plugin",permalink:"/docs/2.3.0-Legacy/plugins/waf-plugin"},next:{title:"Rewrite Plugin",permalink:"/docs/2.3.0-Legacy/plugins/rewrite-plugin"}},s=[{value:"Explanation",id:"explanation",children:[]},{value:"Plugin Setting",id:"plugin-setting",children:[]},{value:"Plugin Usage",id:"plugin-usage",children:[]},{value:"Add AK/SK",id:"add-aksk",children:[]},{value:"Implementation of Gateway Technology",id:"implementation-of-gateway-technology",children:[]},{value:"Authentication Guide",id:"authentication-guide",children:[]},{value:"Request GateWay",id:"request-gateway",children:[]},{value:"Extension",id:"extension",children:[]}],d={toc:s};function c(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"explanation"},"Explanation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sign is a native plugin of soul Gateway and is used to process signature authentication of requests.")),(0,r.kt)("h2",{id:"plugin-setting"},"Plugin Setting"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In ",(0,r.kt)("inlineCode",{parentName:"li"},"soul-admin")," -> plugin management --\x3e ",(0,r.kt)("inlineCode",{parentName:"li"},"sign")," set to enable.")),(0,r.kt)("h2",{id:"plugin-usage"},"Plugin Usage"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Introducing ",(0,r.kt)("inlineCode",{parentName:"li"},"sign")," dependency in the pom.xml file of the gateway")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"  \x3c!-- soul sign plugin start--\x3e\n  <dependency>\n      <groupId>org.dromara</groupId>\n      <artifactId>soul-spring-boot-starter-plugin-sign</artifactId>\n     <version>${last.version}</version>\n  </dependency>\n  \x3c!-- soul sign plugin end--\x3e\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Selectors and rules, please refer to: ",(0,r.kt)("a",{parentName:"li",href:"../admin/selector-and-rule"},"selector"),"."),(0,r.kt)("li",{parentName:"ul"},"Only those matched requests can be authenticated by signature.   ")),(0,r.kt)("h2",{id:"add-aksk"},"Add AK/SK"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In soul-admin --\x3e In authentication management, click ",(0,r.kt)("inlineCode",{parentName:"li"},"Add")," to add a new AK/SK\u3002")),(0,r.kt)("h2",{id:"implementation-of-gateway-technology"},"Implementation of Gateway Technology"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Adopt Ak/SK authentication technical scheme. "),(0,r.kt)("li",{parentName:"ul"},"Adopt authentication plug-in and Chain of Responsibility Pattern to realize. "),(0,r.kt)("li",{parentName:"ul"},"Take effect when the authentication plugin is enabled and all interfaces are configured for authentication.")),(0,r.kt)("h2",{id:"authentication-guide"},"Authentication Guide"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Step 1: AK/SK is assigned by the gateway. For example, the AK assigned to you is: ",(0,r.kt)("inlineCode",{parentName:"li"},"1test123456781")," SK is: ` 506eeb535cf740d7a755cb49f4a1536' "),(0,r.kt)("li",{parentName:"ul"},"Step 2: Decide the gateway path you want to access, such as ` /api/service/abc'"),(0,r.kt)("li",{parentName:"ul"},"Step 3: Construct parameters (the following are general parameters)")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Value"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timestamp"),(0,r.kt)("td",{parentName:"tr",align:null},"current timestamp(String)"),(0,r.kt)("td",{parentName:"tr",align:"center"},"The number of milliseconds of the current time\uff08gateway will filter requests the before 5 minutes\uff09")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"path"),(0,r.kt)("td",{parentName:"tr",align:null},"/api/service/abc"),(0,r.kt)("td",{parentName:"tr",align:"center"},"The path that you want to request(Modify by yourself according to your configuration of gateway)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"version"),(0,r.kt)("td",{parentName:"tr",align:null},"1.0.0"),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"1.0.0")," is a fixed string value")))),(0,r.kt)("p",null," Sort the above two field natually according to the key, then splice fields and fields, finally splice SK. The following is a code example."),(0,r.kt)("p",null,"Step 1: First, construct a Map."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'\n   Map<String, String> map = Maps.newHashMapWithExpectedSize(2);\n   //timestamp is string format of millisecond. String.valueOf(LocalDateTime.now().toInstant(ZoneOffset.of("+8")).toEpochMilli()) \n   map.put("timestamp","1571711067186");  // Value should be string format of milliseconds\n   map.put("path", "/api/service/abc");\n   map.put("version", "1.0.0");\n')),(0,r.kt)("p",null,"Step 2: Sort the Keys naturally, then splice the key and values, and finally splice the SK assigned to you."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'List<String> storedKeys = Arrays.stream(map.keySet()\n                .toArray(new String[]{}))\n                .sorted(Comparator.naturalOrder())\n                .collect(Collectors.toList());\nfinal String sign = storedKeys.stream()\n                .map(key -> String.join("", key, params.get(key)))\n                .collect(Collectors.joining()).trim()\n                .concat("506EEB535CF740D7A755CB4B9F4A1536");\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The returned sign value should be:path/api/service/abctimestamp1571711067186version1.0.0506EEB535CF740D7A755CB4B9F4A1536")),(0,r.kt)("p",null,"Step 3: Md5 encryption and then capitalization."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"DigestUtils.md5DigestAsHex(sign.getBytes()).toUpperCase()\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The final returned value is:A021BF82BE342668B78CD9ADE593D683")),(0,r.kt)("h2",{id:"request-gateway"},"Request GateWay"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If your visited path is:/api/service/abc\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Address: http: domain name of gateway /api/service/abc.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Set ",(0,r.kt)("inlineCode",{parentName:"p"},"header"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"header")," Parameter\uff1a"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Value"),(0,r.kt)("th",{parentName:"tr",align:"center"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timestamp"),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"1571711067186")),(0,r.kt)("td",{parentName:"tr",align:"center"},"Timestamp when signing")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"appKey"),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"1TEST123456781")),(0,r.kt)("td",{parentName:"tr",align:"center"},"The AK value assigned to you")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"sign"),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"A90E66763793BDBC817CF3B52AAAC041")),(0,r.kt)("td",{parentName:"tr",align:"center"},"The signature obtained above")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"version"),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"1.0.0")),(0,r.kt)("td",{parentName:"tr",align:"center"},(0,r.kt)("inlineCode",{parentName:"td"},"1.0.0")," is a fixed value.")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The signature plugin will filter requests after 5 minutes by default")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If the authentication fails, will return code 401, message may change."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"code":401,"message":"sign is not pass,Please check you sign algorithm!","data":null}\n')),(0,r.kt)("h2",{id:"extension"},"Extension"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Please refer to: ",(0,r.kt)("a",{parentName:"li",href:"../developer-guide/custom-sign-algorithm"},"dev-sign"),".")))}c.isMDXComponent=!0}}]);