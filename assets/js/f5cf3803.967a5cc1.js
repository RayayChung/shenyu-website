"use strict";(self.webpackChunkshenyu_website=self.webpackChunkshenyu_website||[]).push([[10276],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return g}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),g=i,f=d["".concat(s,".").concat(g)]||d[g]||p[g]||o;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},51975:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],l={sidebar_position:1,title:"Filter Extension",keywords:["soul"],description:"filter extension"},s=void 0,c={unversionedId:"developer-guide/custom-filter",id:"version-2.3.0-Legacy/developer-guide/custom-filter",isDocsHomePage:!1,title:"Filter Extension",description:"filter extension",source:"@site/versioned_docs/version-2.3.0-Legacy/developer-guide/custom-filter.md",sourceDirName:"developer-guide",slug:"/developer-guide/custom-filter",permalink:"/docs/2.3.0-Legacy/developer-guide/custom-filter",editUrl:"https://github.com/apache/incubator-shenyu-website/edit/main/versioned_docs/version-2.3.0-Legacy/developer-guide/custom-filter.md",version:"2.3.0-Legacy",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Filter Extension",keywords:["soul"],description:"filter extension"},sidebar:"version-2.3.0-Legacy/tutorialSidebar",previous:{title:"Redirect Plugin",permalink:"/docs/2.3.0-Legacy/plugins/redirect-plugin"},next:{title:"Custom Plugin",permalink:"/docs/2.3.0-Legacy/developer-guide/custom-plugin"}},u=[{value:"Description",id:"description",children:[]},{value:"CORS Support",id:"cors-support",children:[]},{value:"Extending <code>org.dromara.soul.web.filter.AbstractWebFilter</code>",id:"extending-orgdromarasoulwebfilterabstractwebfilter",children:[]}],p={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"This doc shows a demo for how to extend ",(0,o.kt)("inlineCode",{parentName:"li"},"org.springframework.web.server.WebFliter"),".")),(0,o.kt)("h2",{id:"cors-support"},"CORS Support"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"p"},"org.dromara.soul.bootstrap.cors.CrossFilter")," is designed for WebFilter implementation."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public class CrossFilter implements WebFilter {\n\n    private static final String ALLOWED_HEADERS = "x-requested-with, authorization, Content-Type, Authorization, credential, X-XSRF-TOKEN,token,username,client";\n\n    private static final String ALLOWED_METHODS = "*";\n\n    private static final String ALLOWED_ORIGIN = "*";\n\n    private static final String ALLOWED_EXPOSE = "*";\n\n    private static final String MAX_AGE = "18000";\n\n    @Override\n    @SuppressWarnings("all")\n    public Mono<Void> filter(final ServerWebExchange exchange, final WebFilterChain chain) {\n        ServerHttpRequest request = exchange.getRequest();\n        if (CorsUtils.isCorsRequest(request)) {\n            ServerHttpResponse response = exchange.getResponse();\n            HttpHeaders headers = response.getHeaders();\n            headers.add("Access-Control-Allow-Origin", ALLOWED_ORIGIN);\n            headers.add("Access-Control-Allow-Methods", ALLOWED_METHODS);\n            headers.add("Access-Control-Max-Age", MAX_AGE);\n            headers.add("Access-Control-Allow-Headers", ALLOWED_HEADERS);\n            headers.add("Access-Control-Expose-Headers", ALLOWED_EXPOSE);\n            headers.add("Access-Control-Allow-Credentials", "true");\n            if (request.getMethod() == HttpMethod.OPTIONS) {\n                response.setStatusCode(HttpStatus.OK);\n                return Mono.empty();\n            }\n        }\n        return chain.filter(exchange);\n    }\n}\n')))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'\n* Registering CrossFilter as a Spring Bean and you are ready to go.\n\n## Filtering Spring Boot health check\n\n* You can control the order by applying `@Order` to the implementation class .\n\n```java\n@Component\n@Order(-99)\npublic final class HealthFilter implements WebFilter {\n\n    private static final String[] FILTER_TAG = {"/actuator/health", "/health_check"};\n\n    @Override\n    public Mono<Void> filter(@Nullable final ServerWebExchange exchange, @Nullable final WebFilterChain chain) {\n        ServerHttpRequest request = Objects.requireNonNull(exchange).getRequest();\n        String urlPath = request.getURI().getPath();\n        for (String check : FILTER_TAG) {\n            if (check.equals(urlPath)) {\n                String result = JsonUtils.toJson(new Health.Builder().up().build());\n                DataBuffer dataBuffer = exchange.getResponse().bufferFactory().wrap(result.getBytes());\n                return exchange.getResponse().writeWith(Mono.just(dataBuffer));\n            }\n        }\n        return Objects.requireNonNull(chain).filter(exchange);\n    }\n}\n\n')),(0,o.kt)("h2",{id:"extending-orgdromarasoulwebfilterabstractwebfilter"},"Extending ",(0,o.kt)("inlineCode",{parentName:"h2"},"org.dromara.soul.web.filter.AbstractWebFilter")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Add a new class and inherit from ",(0,o.kt)("inlineCode",{parentName:"li"},"org.dromara.soul.web.filter.AbstractWebFilter"),"."),(0,o.kt)("li",{parentName:"ul"},"Implement abstract methods of parent class.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"   /**\n     * this is Template Method ,children Implement your own filtering logic.\n     *\n     * @param exchange the current server exchange\n     * @param chain    provides a way to delegate to the next filter\n     * @return {@code Mono<Boolean>} result\uff1aTRUE (is pass)\uff0cand flow next filter\uff1bFALSE (is not pass) execute doDenyResponse(ServerWebExchange exchange)\n     */\n    protected abstract Mono<Boolean> doFilter(ServerWebExchange exchange, WebFilterChain chain);\n\n    /**\n     * this is Template Method ,children Implement your own And response client.\n     *\n     * @param exchange the current server exchange.\n     * @return {@code Mono<Void>} response msg.\n     */\n    protected abstract Mono<Void> doDenyResponse(ServerWebExchange exchange);\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"if method ",(0,o.kt)("inlineCode",{parentName:"li"},"doFilter")," returns Mono ",(0,o.kt)("inlineCode",{parentName:"li"},"true"),", this filter is passing, but not vice versa. While rejecting, it will call method ",(0,o.kt)("inlineCode",{parentName:"li"},"doDenyResponse")," and sending infos in response body to frontend.")))}d.isMDXComponent=!0}}]);