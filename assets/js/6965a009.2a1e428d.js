"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[10356],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(a),d=r,k=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return a?n.createElement(k,i(i({ref:t},c),{},{components:a})):n.createElement(k,i({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},90125:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const o={title:"Custom Parameter Data",keywords:["ParameterData"],description:"Custom Parameter Data"},i=void 0,p={unversionedId:"developer/spi/custom-parameter-data",id:"version-2.5.0/developer/spi/custom-parameter-data",isDocsHomePage:!1,title:"Custom Parameter Data",description:"Custom Parameter Data",source:"@site/versioned_docs/version-2.5.0/developer/spi/custom-parameter-data.md",sourceDirName:"developer/spi",slug:"/developer/spi/custom-parameter-data",permalink:"/docs/developer/spi/custom-parameter-data",editUrl:"https://github.com/apache/shenyu-website/edit/main/versioned_docs/version-2.5.0/developer/spi/custom-parameter-data.md",version:"2.5.0",frontMatter:{title:"Custom Parameter Data",keywords:["ParameterData"],description:"Custom Parameter Data"},sidebar:"version-2.5.0/tutorialSidebar",previous:{title:"Custom Mock Data Generator",permalink:"/docs/developer/spi/custom-mock-generator"},next:{title:"Custom Predicate Judge",permalink:"/docs/developer/spi/custom-predicate-judge"}},s=[],l={toc:s};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This paper describes how to customize the extension of  ",(0,r.kt)("inlineCode",{parentName:"p"},"org.apache.shenyu.plugin.base.condition.data.ParameterData"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a new project and introduce the following dependencies:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},"<dependencies>\n    <dependency>\n        <groupId>org.apache.shenyu</groupId>\n        <artifactId>shenyu-plugin-base</artifactId>\n        <version>${project.version}</version>\n    </dependency>\n</dependencies>\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a new class ",(0,r.kt)("inlineCode",{parentName:"li"},"CustomParameterData"),", implements ",(0,r.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.base.condition.data.ParameterData"),", add annotation ",(0,r.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.spi.Join"),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"/**\n * This is custom parameter data.\n */\n@Join\npublic class CustomParameterData implements ParameterData {\n    \n    @Override\n    public String builder(final String paramName, final ServerWebExchange exchange) {\n        // custom parameter data\n    }\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In the project's META-INF/services directory, create ",(0,r.kt)("inlineCode",{parentName:"li"},"org.apache.shenyu.plugin.base.condition.data.ParameterData")," file, add key-value as following:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="script"',title:'"script"'},"${spi name} = ${custom class path}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"${spi name}")," represents the name of ",(0,r.kt)("inlineCode",{parentName:"p"},"spi")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"${custom class path}")," represents the fully qualified name of the class. Such as:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell",metastring:'title="script"',title:'"script"'},"custom=xxx.xxx.xxx.CustomParameterData\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Package the project and copy it to the ",(0,r.kt)("inlineCode",{parentName:"p"},"lib")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"ext-lib")," directory of the gateway (bootstrap-bin).")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"In the ",(0,r.kt)("inlineCode",{parentName:"p"},"Apache ShenYu")," gateway management system --\x3e BasicConfig --\x3e Dictionary,  find the dictionary code as ",(0,r.kt)("inlineCode",{parentName:"p"},"PARAM_TYPE"),", add a new piece of data, pay attention to the dictionary name: ",(0,r.kt)("inlineCode",{parentName:"p"},"${spi name}"),"."))),(0,r.kt)("img",{src:"/img/shenyu/custom/custom_parameter_data_en.png",width:"70%",height:"60%"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"DictionaryType: ",(0,r.kt)("inlineCode",{parentName:"p"},"paramType"),";"),(0,r.kt)("p",{parentName:"blockquote"},"DictionaryCode: ",(0,r.kt)("inlineCode",{parentName:"p"},"PARAM_TYPE"),";"),(0,r.kt)("p",{parentName:"blockquote"},"DictionaryName: ",(0,r.kt)("inlineCode",{parentName:"p"},"${spi name}"),", input your custom spi name;"),(0,r.kt)("p",{parentName:"blockquote"},"DictionaryValue: When used, the value of the drop-down box, do not repeat with the existing;"),(0,r.kt)("p",{parentName:"blockquote"},"DictionaryDescribe: desc your custom match strategy;"),(0,r.kt)("p",{parentName:"blockquote"},"Sort: to sort;"),(0,r.kt)("p",{parentName:"blockquote"},"Status: open or close.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When adding selectors or rules, you can use custom parameter data:")),(0,r.kt)("img",{src:"/img/shenyu/custom/use_custom_parameter_data_en.png",width:"80%",height:"70%"}))}c.isMDXComponent=!0}}]);