"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[83263],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||p[d]||s;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<s;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},43041:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const s={title:"Custom Response",keywords:["Custom Response"],description:"customising response structure"},o=void 0,i={unversionedId:"developer/custom-result",id:"version-2.4.0/developer/custom-result",isDocsHomePage:!1,title:"Custom Response",description:"customising response structure",source:"@site/versioned_docs/version-2.4.0/developer/custom-result.md",sourceDirName:"developer",slug:"/developer/custom-result",permalink:"/docs/2.4.0/developer/custom-result",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.4.0/developer/custom-result.md",version:"2.4.0",frontMatter:{title:"Custom Response",keywords:["Custom Response"],description:"customising response structure"},sidebar:"version-2.4.0/tutorialSidebar",previous:{title:"Custom Plugin",permalink:"/docs/2.4.0/developer/custom-plugin"},next:{title:"Custom Sign Algorithm",permalink:"/docs/2.4.0/developer/custom-sign-algorithm"}},l=[{value:"Description",id:"description",children:[]},{value:"Default Implementation",id:"default-implementation",children:[]},{value:"Extensions",id:"extensions",children:[]}],u={toc:l};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"This doc offers examples for customising response structure in ",(0,a.kt)("inlineCode",{parentName:"li"},"Apache ShenYu")," gateway."),(0,a.kt)("li",{parentName:"ul"},"The response body structure in gateways should be unified, it is recommended for specify yours.")),(0,a.kt)("h2",{id:"default-implementation"},"Default Implementation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The default implementation class is ",(0,a.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.api.result.DefaultShenyuResult"),"."),(0,a.kt)("li",{parentName:"ul"},"Following is the response structure:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public class DefaultShenyuEntity implements Serializable {\n\n    private static final long serialVersionUID = -2792556188993845048L;\n\n    private Integer code;\n\n    private String message;\n\n    private Object data;\n\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The returned ",(0,a.kt)("inlineCode",{parentName:"li"},"json")," as follows:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "code": -100, //response code,\n    "message": "Your parameter error, please check the relevant documentation!", //hint messages\n    "data": null  // business data\n}\n')),(0,a.kt)("h2",{id:"extensions"},"Extensions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Declare a new class named ",(0,a.kt)("inlineCode",{parentName:"li"},"CustomShenyuResult")," and implements ",(0,a.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.api.result.ShenyuResult"))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"}," public interface ShenyuResult<T> {\n \n     /**\n      * Success t.\n      *\n      * @param code    the code\n      * @param message the message\n      * @param object  the object\n      * @return the t\n      */\n     T success(int code, String message, Object object);\n\n     /**\n      * Error t.\n      *\n      * @param code    the code\n      * @param message the message\n      * @param object  the object\n      * @return the t\n      */\n     T error(int code, String message, Object object);\n }\n\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"T")," is a generic parameter for your response data."),(0,a.kt)("li",{parentName:"ul"},"Register defined class as a ",(0,a.kt)("inlineCode",{parentName:"li"},"Spring Bean"),".")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"    @Bean\n    public ShenyuResult customShenyuResult() {\n          return new CustomShenyuResult();\n    }\n")))}c.isMDXComponent=!0}}]);