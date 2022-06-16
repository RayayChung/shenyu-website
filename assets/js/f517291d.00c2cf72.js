"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[28022],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),u=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=u(e.components);return a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(t),m=i,g=c["".concat(p,".").concat(m)]||c[m]||d[m]||r;return t?a.createElement(g,l(l({ref:n},s),{},{components:t})):a.createElement(g,l({ref:n},s))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=c;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var u=2;u<r;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},33037:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return s}});var a=t(87462),i=t(63366),r=(t(67294),t(3905)),l=["components"],o={sidebar_position:2,title:"Plugin Handle Explanation",keywords:["plugin"],description:"plugin handle explanation"},p=void 0,u={unversionedId:"admin/plugin-handle-explanation",id:"version-2.3.0-Legacy/admin/plugin-handle-explanation",isDocsHomePage:!1,title:"Plugin Handle Explanation",description:"plugin handle explanation",source:"@site/versioned_docs/version-2.3.0-Legacy/admin/plugin-handle-explanation.md",sourceDirName:"admin",slug:"/admin/plugin-handle-explanation",permalink:"/docs/2.3.0-Legacy/admin/plugin-handle-explanation",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/versioned_docs/version-2.3.0-Legacy/admin/plugin-handle-explanation.md",version:"2.3.0-Legacy",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Plugin Handle Explanation",keywords:["plugin"],description:"plugin handle explanation"},sidebar:"version-2.3.0-Legacy/tutorialSidebar",previous:{title:"Dict Management",permalink:"/docs/2.3.0-Legacy/admin/dictionary-management"},next:{title:"Selector Detailed Explanation",permalink:"/docs/2.3.0-Legacy/admin/selector-and-rule"}},s=[{value:"Explanation",id:"explanation",children:[]},{value:"Table Design",id:"table-design",children:[]},{value:"Tutorial",id:"tutorial",children:[]}],d={toc:s};function c(e){var n=e.components,t=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"explanation"},"Explanation"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"In our Soul-Admin background, each plugin uses the Handle field to represent a different processing, and plugin processing is used to manage and edit custom processing fields in JSON."),(0,r.kt)("li",{parentName:"ul"},"This feature is mainly used to support the plug-in handling template configuration")),(0,r.kt)("h2",{id:"table-design"},"Table Design"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"sql")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"CREATE TABLE IF NOT EXISTS `plugin_handle` (\n  `id` varchar(128) NOT NULL,\n  `plugin_id` varchar(128) NOT NULL COMMENT 'plugin id',\n  `field` varchar(100) NOT NULL COMMENT 'field',\n  `label` varchar(100) DEFAULT NULL COMMENT 'label',\n  `data_type` smallint(6) NOT NULL DEFAULT '1' COMMENT 'data type 1 number 2 string 3 select box',\n  `type` smallint(6) NULL COMMENT 'type, 1 means selector, 2 means rule',\n  `sort` int(4)  NULL COMMENT 'sort',\n  `ext_obj` varchar(1024) COLLATE utf8mb4_unicode_ci DEFAULT NULL COMMENT 'extra configuration (json format data)',\n  `date_created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT 'create time',\n  `date_updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT 'update time',\n  PRIMARY KEY (`id`),\n  UNIQUE KEY `plugin_id_field_type` (`plugin_id`,`field`,`type`)\n) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE = utf8mb4_unicode_ci ROW_FORMAT = Dynamic;\n")),(0,r.kt)("h2",{id:"tutorial"},"Tutorial"),(0,r.kt)("p",null,"eg. When we developed the ",(0,r.kt)("inlineCode",{parentName:"p"},"springCloud")," plugin, the rule table needed to store some configuration into the handle field,\nConfigure the corresponding entity class as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"    public class SpringCloudRuleHandle implements RuleHandle {\n    \n        /**\n         * this remote uri path.\n         */\n        private String path;\n    \n        /**\n         * timeout is required.\n         */\n        private long timeout = Constants.TIME_OUT;    \n    }\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"step1.")," We can go directly to the plug-in management link  ",(0,r.kt)("inlineCode",{parentName:"p"},"http://localhost:9095/#/system/plugin")," Click Edit Plugin for processing\n",(0,r.kt)("img",{parentName:"p",src:"https://yu199195.github.io/images/soul/plugin-manager.png",alt:null})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"step2.")," Add a string type field path and a numeric type TIMEOUT"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://yu199195.github.io/images/soul/add-plugin-handle.png",alt:null})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"step3.")," Finally, you can enter path, TIMEOUT and commit to the handle field when you add a rule in the plugin rule configuration page"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://yu199195.github.io/images/soul/springcloud-rule-handle.png",alt:null})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: If data_type is configured to be ",(0,r.kt)("inlineCode",{parentName:"em"},"3")," ",(0,r.kt)("inlineCode",{parentName:"em"},"selection box"),", the input field drop-down selection on the new rule page is displayed by going to the ",(0,r.kt)("a",{parentName:"em",href:"/docs/2.3.0-Legacy/admin/dictionary-management"},"soul_dict\uff09")," table to find all the options available")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The Sentinel plug-in, for example, is shown below:")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://yu199195.github.io/images/soul/sentinel-rule-handle.png",alt:null})))}c.isMDXComponent=!0}}]);