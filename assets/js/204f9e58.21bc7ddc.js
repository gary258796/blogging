"use strict";(self.webpackChunkgary_blog=self.webpackChunkgary_blog||[]).push([[527],{3905:(e,t,A)=>{A.d(t,{Zo:()=>d,kt:()=>k});var n=A(7294);function i(e,t,A){return t in e?Object.defineProperty(e,t,{value:A,enumerable:!0,configurable:!0,writable:!0}):e[t]=A,e}function a(e,t){var A=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),A.push.apply(A,n)}return A}function r(e){for(var t=1;t<arguments.length;t++){var A=null!=arguments[t]?arguments[t]:{};t%2?a(Object(A),!0).forEach((function(t){i(e,t,A[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(A)):a(Object(A)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(A,t))}))}return e}function l(e,t){if(null==e)return{};var A,n,i=function(e,t){if(null==e)return{};var A,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)A=a[n],t.indexOf(A)>=0||(i[A]=e[A]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)A=a[n],t.indexOf(A)>=0||Object.prototype.propertyIsEnumerable.call(e,A)&&(i[A]=e[A])}return i}var s=n.createContext({}),o=function(e){var t=n.useContext(s),A=t;return e&&(A="function"==typeof e?e(t):r(r({},t),e)),A},d=function(e){var t=o(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var A=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=o(A),k=i,u=p["".concat(s,".").concat(k)]||p[k]||c[k]||a;return A?n.createElement(u,r(r({ref:t},d),{},{components:A})):n.createElement(u,r({ref:t},d))}));function k(e,t){var A=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=A.length,r=new Array(a);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var o=2;o<a;o++)r[o]=A[o];return n.createElement.apply(null,r)}return n.createElement.apply(null,A)}p.displayName="MDXCreateElement"},6696:(e,t,A)=>{A.r(t),A.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>o});var n=A(7462),i=(A(7294),A(3905));const a={title:"Redis Quick Start (With Sentinel Mode)",keywords:["Redis","Sentinel","in-memory cache"],description:"Quick start with redis sentinel",tags:["Redis","Sentinel","High Availability"],last_update:{date:"8/06/2023",author:"Gary Liao"}},r=void 0,l={unversionedId:"System Design/Integration/redis/index",id:"System Design/Integration/redis/index",title:"Redis Quick Start (With Sentinel Mode)",description:"Quick start with redis sentinel",source:"@site/docs/System Design/Integration/redis/index.md",sourceDirName:"System Design/Integration/redis",slug:"/System Design/Integration/redis/",permalink:"/blogging/System Design/Integration/redis/",draft:!1,tags:[{label:"Redis",permalink:"/blogging/tags/redis"},{label:"Sentinel",permalink:"/blogging/tags/sentinel"},{label:"High Availability",permalink:"/blogging/tags/high-availability"}],version:"current",lastUpdatedBy:"Gary Liao",lastUpdatedAt:169128e4,formattedLastUpdatedAt:"Aug 6, 2023",frontMatter:{title:"Redis Quick Start (With Sentinel Mode)",keywords:["Redis","Sentinel","in-memory cache"],description:"Quick start with redis sentinel",tags:["Redis","Sentinel","High Availability"],last_update:{date:"8/06/2023",author:"Gary Liao"}},sidebar:"tutorialSidebar",previous:{title:"[headers] Set-Cookie - SameSite",permalink:"/blogging/Http/Cookie/"},next:{title:"Sonarlint \u5b89\u88dd\u8a2d\u5b9a",permalink:"/blogging/vscode/sonarlint"}},s={},o=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"Sentinel \u67b6\u69cb",id:"sentinel-\u67b6\u69cb",level:2},{value:"\u672c\u6a5f\u74b0\u5883\u67b6\u8a2d",id:"\u672c\u6a5f\u74b0\u5883\u67b6\u8a2d",level:2},{value:"SpringBoot \u8207 Redis \u4ee5\u53ca Redis Sentinel \u6574\u5408",id:"springboot-\u8207-redis-\u4ee5\u53ca-redis-sentinel-\u6574\u5408",level:2},{value:"\u53c3\u8003\u6587\u7ae0",id:"\u53c3\u8003\u6587\u7ae0",level:3}],d={toc:o};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u8fd1\u671f\u5de5\u4f5c\u5c08\u6848\u4e0a\uff0c\u63a5\u89f8\u4e26\u4e14\u5728\u7cfb\u7d71\u67b6\u69cb\u4e4b\u4e2d\u4f7f\u7528\u5230 Redis \uff0c\u525b\u597d\u6211\u9700\u8981\u8ca0\u8cac\u5c07\u6e2c\u8a66\u74b0\u5883\u4e4b Redis \u54e8\u5175\u6a21\u5f0f\u67b6\u8d77\u4ee5\u53ca\u76f8\u95dc\u8a2d\u5b9a\u3001\u8207\u5c08\u6848\u7a0b\u5f0f\u6574\u5408...\u7b49\u3002\n\u8d81\u9019\u500b\u6a5f\u6703\u5c07\u7b46\u8a18\u8a18\u9304\u5230\u6b64\uff0c\u65b9\u4fbf\u4ee5\u5f8c\u67e5\u770b\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"RedisCacheImage",src:A(68).Z,width:"1460",height:"730"}),"\nImage Source : ",(0,i.kt)("a",{parentName:"p",href:"https://kinsta.com/docs/redis-cache/"},"Redis Article"),"."),(0,i.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,i.kt)("p",null,"Redis \u662f\u500b in-memory \u7684\u8cc7\u6599\u5b58\u5132\u7cfb\u7d71\uff0c\u6709\u4f4e\u5ef6\u9072\u3001\u56de\u61c9\u6642\u9593\u5feb\u7b49\u7279\u6027\u3002\u5f88\u9069\u5408\u4f5c\u70ba\u6bd4\u5982 Cache \u7684\u61c9\u7528\u3002\u8a73\u7d30 Redis \u7684\u4ecb\u7d39\uff0c\u56e0\u70ba\u4e0d\u662f\u672c\u7bc7\u8457\u91cd\u4e4b\u5730\u65b9\uff0c\u5c31\u4e0d\u8d05\u8ff0\u3002\u53ef\u53c3\u8003 ",(0,i.kt)("a",{parentName:"p",href:"https://redis.io/"},"Redis \u5b98\u7db2")," "),(0,i.kt)("h2",{id:"sentinel-\u67b6\u69cb"},"Sentinel \u67b6\u69cb"),(0,i.kt)("p",null,"\u5728\u8aaa\u660e Sentinel (\u54e8\u5175\u6a21\u5f0f) \u4e4b\u524d\uff0c\u6211\u5011\u5148\u4f86\u8aaa\u8aaa Redis \u7684 Master Slave (\u4e3b\u5f9e\u6a21\u5f0f)\u3002"),(0,i.kt)("p",null,"\u4e3b\u5f9e\u6a21\u5f0f\u6703\u5c07 Redis \u7bc0\u9ede\u5206\u70ba Master \u4ee5\u53ca Slave \u7bc0\u9ede\u3002 \u6240\u6709\u5beb\u5165\u53ea\u80fd\u5920\u4ea4\u7d66 Master \u9032\u884c\uff0c\u5c07\u8b80\u5beb\u5206\u96e2\u3002 Slave \u5247\u53ea\u80fd\u5920\u8ca0\u8cac\u8b80\u53d6\u8cc7\u6599\u3002 "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Redis-Master-Slave",src:A(3596).Z,width:"860",height:"606"}),"  "),(0,i.kt)("p",null,"\u800c\u54e8\u5175\u6a21\u5f0f\u5247\u662f\u5728 Master-Slave \u67b6\u69cb\u4e0a\u4e4b\u5ef6\u4f38\u3002\u9664\u4e86\u539f\u672c Master-Salve \u4e4b\u7bc0\u9ede\u4ee5\u5916\uff0c\u9084\u591a\u4e86 Sentinel \u7bc0\u9ede\u53bb\u8ca0\u8cac\u76e3\u63a7 Master\u3001\u81ea\u52d5\u5931\u6548\u8655\u7406...\u7b49\uff0c\u63d0\u5347\u7cfb\u7d71\u7684\u9ad8\u53ef\u7528\u6027\u3002"),(0,i.kt)("p",null,"\u7576 Master \u7d50\u9ede\u4e0d\u8ad6\u662f\u771f\u7684\u5931\u6548\u4e86\u6216\u8005\u53ef\u80fd\u662f\u66ab\u6642\u7684\u7db2\u8def\u4e0d\u7a69\u800c\u88ab\u54e8\u5175\u5011\u61f7\u7591\u5931\u6548\u4e86\uff0c\u54e8\u5175\u5011\u5c31\u6703\u900f\u904e\u5171\u8b58\u6a5f\u5236\u5224\u5b9a\u662f\u5426\u771f\u7684\u5931\u6548\u3002\u5982\u679c\u771f\u7684\u5931\u6548\uff0c\u6703\u518d\u900f\u904e\u9078\u8209\u7684\u65b9\u5f0f\u5c07\u539f\u672c\u67d0\u500b Slave \u7bc0\u9ede\u63a8\u8209\u70ba\u65b0\u7684 Master \u7bc0\u9ede\u3002"),(0,i.kt)("p",null,"\u800c\u539f\u672c\u4e4b Master \u7bc0\u9ede\u5982\u679c\u5f8c\u4f86\u6062\u5fa9\u904b\u884c\uff0c\u5c31\u6703\u4ee5 Slave \u7684\u8eab\u4efd\u7e7c\u7e8c\u9032\u884c\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Redis-Sentinel",src:A(313).Z,width:"860",height:"900"})),(0,i.kt)("h2",{id:"\u672c\u6a5f\u74b0\u5883\u67b6\u8a2d"},"\u672c\u6a5f\u74b0\u5883\u67b6\u8a2d"),(0,i.kt)("p",null,"\u63a5\u4e0b\u4f86\u4f7f\u7528\u672c\u6a5f\u5617\u8a66\u67b6\u8a2d\u8d77 Redis Sentinel \u4f86\u73a9\u73a9\u3002\n\u6211\u5011\u7e3d\u5171\u5c07\u6703\u67b6\u8d77 1 Master + 2 Slave \u70ba\u6211\u5011\u7684\u4e3b\u5f9e\u6a21\u5f0f\u4e4b Redis \u7bc0\u9ede\u3002\u4e26\u5728\u9019\u500b\u4e4b\u4e0a\u67b6\u8a2d 3 Sentinel \u7bc0\u9ede\u3002"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5c07\u6240\u6709 Sentinel, Master, Slave \u7bc0\u9ede\u90fd\u5b89\u88dd\u5728\u672c\u6a5f\u4e0a"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5728\u81ea\u5df1\u6a5f\u5668\u4e0a\uff0c\u5b89\u88dd Redis \u3002 \u6211\u81ea\u5df1\u662f Mac \uff0c\u6240\u4ee5\u900f\u904e Brew \u6307\u5b9a\u5c07 Redis \u5b89\u88dd\u5230\u6211\u672c\u6a5f\u4e0a\u3002"),(0,i.kt)("li",{parentName:"ul"},"Redis \u7bc0\u9ede\u4e4b Config \u6a94\u6848\u8acb\u53c3\u8003  ",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{target:"_blank",href:A(898).Z},"Redis-Master")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{target:"_blank",href:A(4164).Z},"Redis-Slave1")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{target:"_blank",href:A(8412).Z},"Redis-Slave2")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{target:"_blank",href:A(1242).Z},"Redis-Sentinel1")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{target:"_blank",href:A(2616).Z},"Redis-Sentinel2")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{target:"_blank",href:A(4867).Z},"Redis-Sentinel3")))),(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ReadMe \u6a94\u6848\u4e2d\u63d0\u4f9b\u4e4b\u6307\u4ee4\n",(0,i.kt)("a",{target:"_blank",href:A(4010).Z},"View README")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u56e0\u70ba\u5728\u672c\u6a5f\u4e00\u500b\u4e00\u500b\u7bc0\u9ede\u555f\u52d5\u592a\u9ebb\u7169\uff0c\u6240\u4ee5\u5f8c\u4f86\u90fd\u9078\u64c7\u4f7f\u7528 Docker Compose \u4e4b\u65b9\u5f0f\uff0c\u4e00\u6b21\u5c07\u6240\u6709\u9700\u8981\u4e4b\u7bc0\u9ede\u555f\u52d5\u3002"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{target:"_blank",href:A(2735).Z},"Docker Compose File")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{target:"_blank",href:A(7191).Z},"Redis-Master")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{target:"_blank",href:A(9059).Z},"Redis-Slave1")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{target:"_blank",href:A(1942).Z},"Redis-Slave2")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{target:"_blank",href:A(8555).Z},"Redis-Sentinel1")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{target:"_blank",href:A(8629).Z},"Redis-Sentinel2")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{target:"_blank",href:A(8436).Z},"Redis-Sentinel3"))))),(0,i.kt)("p",null,"\u4e0d\u8ad6\u4f7f\u7528\u4ec0\u9ebc\u65b9\u5f0f\u555f\u52d5\uff0c\u5728\u555f\u52d5\u4e4b\u5f8c\u53ef\u900f\u904e Redis-cli \u7684\u65b9\u5f0f\u6aa2\u9a57\u67b6\u8a2d\u72c0\u6cc1\u3002  "),(0,i.kt)("p",null,"\u65bc\u4efb\u4e00 Sentinel \u7bc0\u9ede\u4e0a\u57f7\u884c\u6307\u4ee4 INFO SENTINEL\uff0c\u5982\u679c\u67b6\u8a2d\u6c92\u6709\u554f\u984c\uff0c\u61c9\u8a72\u6703\u770b\u5230\u985e\u4f3c\u5982\u4e0b\u4e4b\u8cc7\u8a0a\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","\u91cd\u9ede\u5728\u65bc\uff0c\u6700\u5f8c\u9762 sentinels=3 \u4e4b\u6578\u5b57\u61c9\u8a72\u8981\u70ba 3\uff0c\u6709\u6642\u5019\u5b89\u88dd\u4e0a\u5982\u679c\u6709\u554f\u984c\uff0c\u9019\u500b\u6578\u5b57\u5c31\u4e0d\u6703\u662f 3\u3002\u8981\u591a\u52a0\u6ce8\u610f\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Redis-Sentinel-Info-Output",src:A(407).Z,width:"878",height:"172"}),"  "),(0,i.kt)("p",null,"\u65bc\u4efb\u4e00 Sentinel \u7bc0\u9ede\u4e0a\u57f7\u884c\u6307\u4ee4 SENTINEL masters\u3002\u5982\u679c\u67b6\u8a2d\u6c92\u6709\u554f\u984c\uff0c\u61c9\u8a72\u6703\u770b\u5230 num-salves = 2 \u4ee5\u53ca num-other-sentinels = 2 \u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Redis-Sentinel-masters-Output",src:A(7437).Z,width:"614",height:"866"}),"  "),(0,i.kt)("h2",{id:"springboot-\u8207-redis-\u4ee5\u53ca-redis-sentinel-\u6574\u5408"},"SpringBoot \u8207 Redis \u4ee5\u53ca Redis Sentinel \u6574\u5408"),(0,i.kt)("p",null,"\u76f4\u63a5\u4f7f\u7528",(0,i.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-data/data-redis/docs/current/reference/html/"},"Spring-data-redis"),"\u3002 \u4f7f\u7528\u4e0a\u975e\u5e38\u65b9\u4fbf\uff0c\u6211\u5011\u53ea\u9700\u8981\u7167\u8457 Spring \u7684\u6587\u4ef6\u5728  Maven \u5f15\u5165\u5f8c\uff0c\u5f88\u5feb\u5c31\u53ef\u4ee5\u5c07 Spring Application \u8dd1\u8d77\u4f86\u3002"),(0,i.kt)("p",null,"\u91cd\u9ede\u662f\u5728\u65bc\u914d\u7f6e JedisConnectionFactory Bean \u7684\u6642\u5019\uff0c\u6211\u5011\u9700\u8981\u53bb\u914d\u7f6e Sentinel \u7684 RedisSentinelConfiguration \u4f86\u63d0\u4f9b\u7d66 JedisConnectionFactory \u505a\u4f7f\u7528\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"    JedisConnectionFactory jedisSentinelConnectionFactory(RedisProperties redisProperties,\n    JedisClientConfiguration clientConfig) {\n\n        String master = redisProperties.getSentinel().getMaster();\n        Set<String> sentinelNodes = Set.copyOf(redisProperties.getSentinel().getNodes());\n\n        RedisSentinelConfiguration sentinelConfig = new RedisSentinelConfiguration(master, sentinelNodes);\n        return new JedisConnectionFactory(sentinelConfig, clientConfig);\n    }\n")),(0,i.kt)("p",null,"\u56e0\u70ba Spring-data-redis \u88cf\u9762\u4e4b RedisProperties \u5df2\u5c07\u6240\u6709\u6703\u7528\u5230\u4e4b\u8a2d\u5b9a\u90fd\u5b9a\u7fa9\u597d\uff0c\u6211\u5011\u53ea\u9700\u8981\u5c07\u9700\u8981\u7528\u5230\u4e4b\u5982 Sentinel \u76f8\u95dc\u8cc7\u8a0a\u5728 SpringBoot \u4e2d\u7684 yaml \u6216\u8005 properties \u6a94\u52a0\u4e0a\u5373\u53ef\u3002"),(0,i.kt)("h3",{id:"\u53c3\u8003\u6587\u7ae0"},"\u53c3\u8003\u6587\u7ae0"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://hackmd.io/@tienyulin/redis-master-slave-replication-sentinel-cluster"},"Redis (\u516d) - \u4e3b\u5f9e\u8907\u88fd\u3001\u54e8\u5175\u8207\u53e2\u96c6\u6a21\u5f0f"))))}c.isMDXComponent=!0},2735:(e,t,A)=>{A.d(t,{Z:()=>n});const n=A.p+"assets/files/docker-compose-2125617655b3fb03cf0f416d1a1ec7f2.yml"},7191:(e,t,A)=>{A.d(t,{Z:()=>n});const n=A.p+"assets/files/redis-1-3ef98c2ed70848a3448e105841400e9c.conf"},9059:(e,t,A)=>{A.d(t,{Z:()=>n});const n=A.p+"assets/files/redis-2-2844bd3ca5a737d2c6c25b23cc6cf4c0.conf"},1942:(e,t,A)=>{A.d(t,{Z:()=>n});const n=A.p+"assets/files/redis-3-2603db802d796a8102b3dba900385880.conf"},8555:(e,t,A)=>{A.d(t,{Z:()=>n});const n=A.p+"assets/files/redis-sentinel-1-89992b3a38282f2e6da784a935d904ba.conf"},8629:(e,t,A)=>{A.d(t,{Z:()=>n});const n=A.p+"assets/files/redis-sentinel-2-7f33f23082889c36d598e8e42a78aaa1.conf"},8436:(e,t,A)=>{A.d(t,{Z:()=>n});const n=A.p+"assets/files/redis-sentinel-3-d56ca1a54b811b4d8ef80c38847852d3.conf"},898:(e,t,A)=>{A.d(t,{Z:()=>n});const n=A.p+"assets/files/redis-1-ded9b3a51fe1e87a82f928fbbff477da.conf"},4164:(e,t,A)=>{A.d(t,{Z:()=>n});const n=A.p+"assets/files/redis-2-80a1b146258e28abde4c06cd73c38ae1.conf"},8412:(e,t,A)=>{A.d(t,{Z:()=>n});const n=A.p+"assets/files/redis-3-eaed73b0bca5b7f3856fedc7c9503d72.conf"},1242:(e,t,A)=>{A.d(t,{Z:()=>n});const n=A.p+"assets/files/redis-sentinel-1-4c2bb9d9f16ab653ef098ad409865210.conf"},2616:(e,t,A)=>{A.d(t,{Z:()=>n});const n=A.p+"assets/files/redis-sentinel-2-3ec160304dc2d01296de142f8a899770.conf"},4867:(e,t,A)=>{A.d(t,{Z:()=>n});const n=A.p+"assets/files/redis-sentinel-3-3678c380886bc978ec0c6f57a4cf5076.conf"},4010:(e,t,A)=>{A.d(t,{Z:()=>n});const n=A.p+"assets/files/readme-6e4df22b4b13db552032cc449fb2f9ad.txt"},68:(e,t,A)=>{A.d(t,{Z:()=>n});const n="data:image/png;base64,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"},3596:(e,t,A)=>{A.d(t,{Z:()=>n});const n=A.p+"assets/images/redis-master-slave-bcae2036c751df845fb10969ddf30bc2.png"},407:(e,t,A)=>{A.d(t,{Z:()=>n});const n=A.p+"assets/images/redis-sentinel-INFOSENTINEL-595608547a51fd8c9bfad09157615a36.png"},7437:(e,t,A)=>{A.d(t,{Z:()=>n});const n=A.p+"assets/images/redis-sentinel-masters-5114b7a07cea6576cd3401f0315749eb.png"},313:(e,t,A)=>{A.d(t,{Z:()=>n});const n=A.p+"assets/images/redis-sentinel-f3cb9b731a9f66489ef47b19f9a35847.png"}}]);