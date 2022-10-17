"use strict";(self.webpackChunkgary_blog=self.webpackChunkgary_blog||[]).push([[359],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=m(n),u=r,k=d["".concat(p,".").concat(u)]||d[u]||c[u]||l;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5508:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var a=n(7462),r=(n(7294),n(3905));const l={title:"\u9762\u8a66\u554f\u984c\u6574\u7406(\u4e00)-\u7a0b\u5f0f\u76f8\u95dc",keywords:["java","interview","junior","senior","engineer","developer","coding"],description:"java interview questions for junior to senior developer",tags:["Java","Programming","Backend","\u9762\u8a66"],last_update:{date:"7/01/2021",author:"Gary Liao"}},i=void 0,o={unversionedId:"2021\u9762\u8a66\u6574\u7406/1/index",id:"2021\u9762\u8a66\u6574\u7406/1/index",title:"\u9762\u8a66\u554f\u984c\u6574\u7406(\u4e00)-\u7a0b\u5f0f\u76f8\u95dc",description:"java interview questions for junior to senior developer",source:"@site/docs/2021\u9762\u8a66\u6574\u7406/1/index.md",sourceDirName:"2021\u9762\u8a66\u6574\u7406/1",slug:"/2021\u9762\u8a66\u6574\u7406/1/",permalink:"/blogging/docs/2021\u9762\u8a66\u6574\u7406/1/",draft:!1,tags:[{label:"Java",permalink:"/blogging/docs/tags/java"},{label:"Programming",permalink:"/blogging/docs/tags/programming"},{label:"Backend",permalink:"/blogging/docs/tags/backend"},{label:"\u9762\u8a66",permalink:"/blogging/docs/tags/\u9762\u8a66"}],version:"current",lastUpdatedBy:"Gary Liao",lastUpdatedAt:1625068800,formattedLastUpdatedAt:"Jun 30, 2021",frontMatter:{title:"\u9762\u8a66\u554f\u984c\u6574\u7406(\u4e00)-\u7a0b\u5f0f\u76f8\u95dc",keywords:["java","interview","junior","senior","engineer","developer","coding"],description:"java interview questions for junior to senior developer",tags:["Java","Programming","Backend","\u9762\u8a66"],last_update:{date:"7/01/2021",author:"Gary Liao"}},sidebar:"tutorialSidebar",previous:{title:"Gary Liao's Blog",permalink:"/blogging/docs/intro"},next:{title:"\u9762\u8a66\u554f\u984c\u6574\u7406(\u4e8c)-Java\u76f8\u95dc",permalink:"/blogging/docs/2021\u9762\u8a66\u6574\u7406/2/"}},p={},m=[{value:"\u7a0b\u5f0f\u76f8\u95dc",id:"\u7a0b\u5f0f\u76f8\u95dc",level:2},{value:"\u76f4\u8b6f\u8a9e\u8a00 vs \u7de8\u8b6f\u8a9e\u8a00",id:"\u76f4\u8b6f\u8a9e\u8a00-vs-\u7de8\u8b6f\u8a9e\u8a00",level:3},{value:"\u5f37\u578b\u5225 vs \u5f31\u578b\u5225",id:"\u5f37\u578b\u5225-vs-\u5f31\u578b\u5225",level:3},{value:"Call By Value vs Call By Reference",id:"call-by-value-vs-call-by-reference",level:3},{value:"\u7269\u4ef6\u5c0e\u5411\u7a0b\u5f0f\u7279\u9ede",id:"\u7269\u4ef6\u5c0e\u5411\u7a0b\u5f0f\u7279\u9ede",level:3},{value:"MVC \u662f\u4ec0\u9ebc",id:"mvc-\u662f\u4ec0\u9ebc",level:3},{value:"\u5ef6\u4f38\u95b1\u8b80",id:"\u5ef6\u4f38\u95b1\u8b80",level:2},{value:"\u53c3\u8003\u7db2\u5740",id:"\u53c3\u8003\u7db2\u5740",level:2}],s={toc:m};function c(e){let{components:t,...l}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u6211\u662f\u4e00\u4f4dJava\u5de5\u7a0b\u5e2b\uff0c\u5728\u7b2c\u4e00\u4efd\u5de5\u4f5c\u4e2d\u4e3b\u8981\u662f\u8ca0\u8cac  "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"SpringBoot\u914d\u5408MyBatis\u3001Hibernate\u7b49ORM\u5f8c\u7aef\u6846\u67b6\u958b\u767cAPI\u3002\u4e26\u4e14\u5728\u7cfb\u7d71\u5167\u547c\u53eb\u5176\u4ed6\u7cfb\u7d71\u4e4bAPI\u3001Web Service\u3002  "),(0,r.kt)("li",{parentName:"ol"},"\u524d\u7aef\u4f7f\u7528VueJS\u958b\u767c\uff0c\u4f7f\u7528ajax\u3001promise\u547c\u53eb\u5f8c\u7aefAPI\u3002  "),(0,r.kt)("li",{parentName:"ol"},"Ap Server\u57fa\u790e\u8a2d\u5b9a(JBoss, Undertow)\u3002")),(0,r.kt)("p",null,"\u800c\u9019\u6b21\u5728\u627e\u5de5\u4f5c\uff0c\u9664\u4e86\u5e0c\u671b\u80fd\u5920\u627e\u5230\u80fd\u5ef6\u7e8c\u76f8\u95dc\u6280\u80fd\u7684\u8077\u7f3a\u5916\uff0c\u4e5f\u6709\u7279\u5225\u627e\u5c0b\u5de5\u4f5c\u5167\u5bb9\u4e2d\u80fd\u5920\u63a5\u89f8\u5230\u81ea\u5df1\u6700\u8fd1\u60f3\u8981\u5b78\u7fd2\u7684\u6280\u8853\uff0c\u5982: Cloud\u3001Container\u3001CI/CD...\u7b49\u3002"),(0,r.kt)("p",null,"\u524d\u5f8c\u82b1\u4e86\u5169\u500b\u6708\u5de6\u53f3\u9762\u8a66\uff0c\u5c31\u7528\u5e7e\u7bc7\u6587\u7ae0\u628a\u9084\u8a18\u5f97\u88ab\u554f\u5230\u7684\u554f\u984c\u8a18\u9304\u4e0b\u4f86\uff0c\u9806\u4fbf\u8907\u7fd2\u81ea\u5df1\u76f8\u95dc\u77e5\u8b58\u3002"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"httpCacheImage",src:n(8664).Z,width:"395",height:"303"}),(0,r.kt)("br",{parentName:"p"}),"\n","Image Source : ",(0,r.kt)("a",{parentName:"p",href:"https://iter01.com/2624.html"},"\u8edf\u9ad4\u5de5\u7a0b\u5e2b\u9762\u8a667\u5927\u6280\u5de7"),"."),(0,r.kt)("h2",{id:"\u7a0b\u5f0f\u76f8\u95dc"},"\u7a0b\u5f0f\u76f8\u95dc"),(0,r.kt)("h3",{id:"\u76f4\u8b6f\u8a9e\u8a00-vs-\u7de8\u8b6f\u8a9e\u8a00"},"\u76f4\u8b6f\u8a9e\u8a00 vs \u7de8\u8b6f\u8a9e\u8a00"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"\u76f4\u8b6f\u8a9e\u8a00"),"\u6703\u5728\u57f7\u884c\u7684\u6642\u5019\u624d\u4e00\u884c\u4e00\u884c\u7684\u8f49\u63db\u3001\u57f7\u884c\u3002\u56e0\u6b64\u901f\u5ea6\u8f03\u6162\u3002"),(0,r.kt)("p",null,"\u76f8\u53cd\u7684\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"\u7de8\u8b6f\u8a9e\u8a00"),"\u6703\u4e8b\u5148\u900f\u904e\u7de8\u8b6f\u5668\u5c07\u7a0b\u5f0f\u7de8\u8b6f\u6210machine code\u5f8c\u518d\u57f7\u884c\u3002\u56e0\u6b64\u57f7\u884c\u6642\u901f\u5ea6\u8f03\u5feb\u3002"),(0,r.kt)("h3",{id:"\u5f37\u578b\u5225-vs-\u5f31\u578b\u5225"},"\u5f37\u578b\u5225 vs \u5f31\u578b\u5225"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\u5f37\u578b\u5225\u8a9e\u8a00"))," \u4f7f\u7528\u4e0d\u540c\u985e\u5225\u4e4b\u9593\u7684\u64cd\u4f5c\u5fc5\u9808\u6b63\u78ba\u3001\u6e05\u695a\u3002\u4e26\u4e14\u7de8\u8b6f\u6642\u7de8\u8b6f\u5668\u6703\u5831\u932f\uff0c\u56e0\u6b64\u907f\u514d\u4e86\u57f7\u884c\u6642\u671f\u5927\u90e8\u5206\u975e\u9810\u671f\u578b\u5225\u8f49\u63db\u7684Error\u3002 "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-\x1f"},'// \u4ee5Java\u70ba\u4f8b:  \nint moneyPerDay = 100 + "200";\n')),(0,r.kt)("p",null,"\u7de8\u8b6f\u6642\u6703\u5f97\u5230\u5982\u4e0b\u7684\u932f\u8aa4",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{alt:"Java Type Compile Error",src:n(1082).Z,width:"1136",height:"56"}),"    "),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5f37\u578b\u5225\u7684\u56b4\u8b39\u70ba\u6211\u5011\u6e1b\u5c11 Runtime \u7684\u932f\u8aa4\u6a5f\u6703\uff0c\u4f46\u76f8\u5c0d\u5730\u958b\u767c\u6642\u8d77\u4f86\u4e5f\u6703\u53d7\u5230\u4e00\u5b9a\u7684\u5236\u7d04\u3001\u964d\u4f4e\u958b\u767c\u901f\u5ea6\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"\u5f31\u578b\u5225\u8a9e\u8a00"))," \u4e0d\u9700\u8981\u5b9a\u7fa9\u985e\u5225\uff0c\u6703\u81ea\u52d5\u6839\u64da\u503c\u4f86\u5224\u65b7\u7576\u4e0b\u7684\u578b\u5225\u3002\u53ef\u4ee5\u76f4\u63a5\u5c07\u578b\u5225\u505a\u66f4\u63db\uff0c\u7121\u9808\u8003\u616e\u539f\u672c\u578b\u5225\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'// \u4ee5JavaScript\u70ba\u4f8b:  \nlet moneyPerDay = 100;\nmoneyPerDay = "none";\n')),(0,r.kt)("p",null,"\u662f\u4e0d\u6703\u6709\u4efb\u4f55\u554f\u984c\u7684\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5f31\u578b\u5225\u70ba\u4e86\u81ea\u7531\u4ee5\u53ca\u65b9\u4fbf\u72a7\u7272\u4e86\u56b4\u8b39\uff0c\u5c0e\u81f4\u6b63\u78ba\u6027\u4e0b\u964d\u3002")),(0,r.kt)("h3",{id:"call-by-value-vs-call-by-reference"},"Call By Value vs Call By Reference"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Call-By-Value")," \u50b3\u905e\u53c3\u6578\u6642\uff0c\u5c07\u5176\u503c\u76f4\u63a5\u50b3\u905e\u3002\u56e0\u6b64\u66f4\u6539\u53c3\u6578\u7684\u503c\u4e26\u4e0d\u6703\u5f71\u97ff\u50b3\u5165\u7684\u8b8a\u6578\u503c\u3002  "),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Call-By-Reference")," \u50b3\u905e\u53c3\u6578\u6642\uff0c\u50b3\u905e\u7684\u662f\u53c3\u6578\u5728\u8a18\u61b6\u9ad4\u7684'\u4f4d\u5740'\u3002\u56e0\u6b64\u539f\u672c\u7684\u7269\u4ef6\u548c\u53c3\u6578\u7684\u4f4d\u5740\u662f\u76f8\u540c\u7684\uff0c\u56e0\u6b64\u4fee\u6539\u5176\u503c\u6703\u6539\u8b8a\u539f\u672c\u7269\u4ef6\u503c\u3002"),(0,r.kt)("p",null,"Java\u4e0d\u5141\u8a31\u6211\u5011\u81ea\u5df1\u8655\u7406\u8a18\u61b6\u9ad4\u4f4d\u5740\u3002\u539f\u751f\u578b\u5225\u7684\u8b8a\u6578\u5982 ",(0,r.kt)("inlineCode",{parentName:"p"},"String"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"Integer"),"...\u7b49\u4ee5\u53ca\u7269\u4ef6\u7686\u662f",(0,r.kt)("em",{parentName:"p"},"\u50b3\u905e\u8b8a\u6578\u6240\u5132\u5b58\u7684\u503c"),"\u3002\n\u5176\u4e2d\uff0c\u50b3\u905e\u7269\u4ef6\u7684\u6642\u5019\uff0cJava\u6703\u5e6b\u6211\u5011\u5efa\u7acb\u4e00\u500b\u6b32\u50b3\u905e\u7684\u53c3\u6578\u7269\u4ef6 (reference)\u7684 copy \u4e26\u4e14\u4f7f\u7528\u8a72 copy \u50b3\u905e\u3002 \u53ea\u662f\u525b\u597d\u9019\u500b copy \u8ddf reference \u90fd\u6307\u5411\u8a18\u61b6\u9ad4\u88e1\u9762\u76f8\u540c\u7684\u4f4d\u5740\u800c\u5df2\u3002"),(0,r.kt)("p",null,"\u56e0\u6b64\u57f7\u884c\u4ee5\u4e0b\u50b3\u905e\u539f\u751f\u578b\u5225\u53c3\u6578\u7684Java\u7a0b\u5f0f\u6642\uff0cConsole\u6703\u5370\u51fa\u8b8a\u6578",(0,r.kt)("inlineCode",{parentName:"p"},"temperatureNow"),"\u503c\u70ba30\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"public static void main(String ...args){\n    int temperatureNow = 30;\n    addFiveDegree(temperatureNow);\n    System.out.println(temperatureNow);\n}\n\npublic static void addFiveDegree(int temperature){\n    temperature += 5; \n}\n")),(0,r.kt)("p",null,"\u800c\u7576\u57f7\u884c\u4ee5\u4e0b\u50b3\u905e\u975e\u539f\u751f\u578b\u5225\u53c3\u6578\u7684Java\u7a0b\u5f0f\u6642\uff0c\u50b3\u905e\u7684\u662f\u4f4d\u5740\u3002\u56e0\u70ba\u4e00\u6a23\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"Call By Value"),"\u7684\u95dc\u897f\uff0c\u56e0\u6b64\u7121\u6cd5\u66f4\u6539\u50b3\u5165\u7269\u4ef6\u4e4b\u8a18\u61b6\u9ad4\u4f4d\u5740(\u7b26\u5408\u524d\u9762\u4e4b\u5b9a\u7fa9)\uff0c\u4f46\u80fd\u5920\u66f4\u6539\u8a72\u8a18\u61b6\u9ad4\u4f4d\u5740\u4e0a\u7684\u5167\u5bb9\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'public static void main(String ...args){\n    Home myHome = new Home("Taoyuan", "0317");\n    changeInfoOfHome(myHome);\n    System.out.println(myHome.address); // will print Taoyuan\n    System.out.println(myHome.telephone); // will print 123\n}\n\npublic static void changeInfoOfHome(Home home){\n    home.telephone = "123";\n    home = new Home("Taipei", "0976");\n    System.out.println("Address inside function : " + home.address); // will print Taipei\n    System.out.println("Telephone inside function : " + home.telephone); // will print 0976\n}\n\npublic static class Home {\n    String address;\n    String telephone;\n\n    public Home(String address, String telephone) {\n        this.address = address;\n        this.telephone = telephone;\n    }\n}\n')),(0,r.kt)("h3",{id:"\u7269\u4ef6\u5c0e\u5411\u7a0b\u5f0f\u7279\u9ede"},"\u7269\u4ef6\u5c0e\u5411\u7a0b\u5f0f\u7279\u9ede"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5c01\u88dd Encapsulation",(0,r.kt)("br",{parentName:"p"}),"\n","\u5c07\u5c0d\u8c61\u7684\u5c6c\u6027(attributes)\u548c\u884c\u70ba(methods)\u4fdd\u5b58\u5728\u4e00\u500b\u5730\u65b9\uff0c\u4e26\u4e14\u63d0\u4f9bAccess Modifiers(",(0,r.kt)("inlineCode",{parentName:"p"},"public"),"\u3001",(0,r.kt)("inlineCode",{parentName:"p"},"protected"),"...\u7b49)\u6c7a\u5b9a\u958b\u653e\u7d66\u5916\u5728\u74b0\u5883\u7684\u7a0b\u5ea6\u9ad8\u4f4e\uff0c\u9054\u5230",(0,r.kt)("strong",{parentName:"p"},"\u96b1\u85cf\u4f7f\u7528\u8005\u4e0d\u9700\u8981\u7684\u7d30\u7bc0"),"\u4e4b\u76ee\u7684\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u62bd\u8c61 Abstract",(0,r.kt)("br",{parentName:"p"}),"\n","\u628a\u8a31\u591a\u7269\u4ef6\u64c1\u6709\u4e4b\u540c\u4e00\u6982\u5ff5\u3001\u5c6c\u6027\u5f9e\u985e\u5225\u4e2d\u62bd\u96e2\u51fa\u4f86\u3002\u53ea",(0,r.kt)("strong",{parentName:"p"},"\u95dc\u6ce8\u5728\u985e\u5225\u7684\u7279\u9ede\u4e0a\u800c\u4e0d\u95dc\u6ce8\u5be6\u73fe\u7684\u7d30\u7bc0"),"\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u7e7c\u627f Inheritance",(0,r.kt)("br",{parentName:"p"}),"\n","\u900f\u904e\u7e7c\u627f\uff0c\u9054\u5230",(0,r.kt)("strong",{parentName:"p"},"\u7a0b\u5f0f\u5fa9\u7528"),"\u3002\u5b50\u985e\u5225\u7e7c\u627f\u7236\u985e\u5225\u6240\u6709\u5c6c\u6027\u3001\u51fd\u6578\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u591a\u578b Polymorphism",(0,r.kt)("br",{parentName:"p"}),"\n","\u767c\u751f\u5728\u6709\u7e7c\u627f\u4e4b\u7269\u4ef6\u3002\u5b50\u985e\u5225Override\u7236\u985e\u5225\u4e4b\u5be6\u4f5c\u5167\u5bb9\uff0c\u9054\u5230",(0,r.kt)("strong",{parentName:"p"},"\u540c\u4e00\u52d5\u4f5c\u4f46\u4e0d\u540c\u5be6\u4f5c\u65b9\u5f0f"),"\u3002"),(0,r.kt)("admonition",{parentName:"li",title:"\u5ef6\u4f38  ",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"\u66f4\u591a\u95dc\u65bc\u591a\u578b\u53ef\u53c3\u8003\u6b64",(0,r.kt)("a",{parentName:"p",href:"https://www.mygreatlearning.com/blog/polymorphism-in-java/"},"\u7db2\u7ad9"),"  ")))),(0,r.kt)("h3",{id:"mvc-\u662f\u4ec0\u9ebc"},"MVC \u662f\u4ec0\u9ebc"),(0,r.kt)("p",null,"Model-View-Controller\u7684\u8edf\u9ad4\u67b6\u69cb\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Model(\u6a21\u578b)"),(0,r.kt)("br",{parentName:"p"}),"\n","\u548c\u8cc7\u6599\u6709\u95dc\u7684\u4e00\u5207\u3002 \u4f46\u4e0d\u77e5\u9053\u81ea\u5df1\u6703\u88ab\u5982\u4f55\u4f7f\u7528\u3002",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"View(\u8996\u5716)"),(0,r.kt)("br",{parentName:"p"}),"\n","\u548cUI\u908f\u8f2f\u6709\u95dc\u7684\u4e00\u5207\u3002\u8ca0\u8cac\u986f\u793aModel\u7d66\u4f7f\u7528\u8005\u3002",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"Controller(\u63a7\u5236\u5668)"),(0,r.kt)("br",{parentName:"p"}),"\n","Model\u548cView\u4e4b\u9593\u7684\u6a4b\u6a11\uff0c\u63a5\u6536\u64cd\u4f5c\u4e26\u4e14\u6c7a\u5b9a\u5c0d\u61c9\u8981\u505a\u7684\u52d5\u4f5c\u3002"),(0,r.kt)("p",null,"\u4f7f\u7528\u6b64\u67b6\u69cb\u7684\u5e7e\u500b\u512a\u9ede\u6709:  "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u8b93\u4e0d\u540c\u5c64\u9762\u7684\u5340\u584a\u5f7c\u6b64\u7368\u7acb\uff0c\u7576\u5176\u4e2d\u67d0\u500b\u5340\u584a\u9700\u8981\u6539\u8b8a\u6642\uff0c\u4e0d\u6703\u5f71\u97ff\u5230\u5176\u4ed6\u5340\u584a\u3002\u589e\u52a0\u4e86\u7cfb\u7d71\u7684",(0,r.kt)("strong",{parentName:"li"},"\u7a69\u5b9a\u6027"),"\u3001",(0,r.kt)("strong",{parentName:"li"},"\u53ef\u6e2c\u8a66\u6027"),"\u3002  "),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"\u540c\u4e00model\u53ef\u4ee5\u88ab\u4e0d\u540cview\u4f7f\u7528"),"\uff0c\u4f8b\u5982: \u63d0\u4f9b\u624b\u6a5f\u3001\u96fb\u8166\u540c\u4e00\u9801\u9762\uff0c\u5176\u80cc\u5f8c\u4f7f\u7528\u7684\u8cc7\u6599(model)\u90fd\u662f\u4e00\u6a23\uff0c\u53ea\u662f\u986f\u793a\u65b9\u5f0f\u4e0d\u540c\u3002  "),(0,r.kt)("li",{parentName:"ol"},"\u53ef\u4ee5\u8b93\u958b\u767c\u904e\u7a0b\u4e2d\uff0c\u5404\u5de5\u7a0b\u5e2b\u8ca0\u8cac\u4e0d\u540c\u5340\u584a\uff0c",(0,r.kt)("strong",{parentName:"li"},"\u63d0\u5347\u958b\u767c\u6548\u7387"),"\u3002")),(0,r.kt)("h2",{id:"\u5ef6\u4f38\u95b1\u8b80"},"\u5ef6\u4f38\u95b1\u8b80"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://rahul-saini.medium.com/difference-between-compiler-and-interpreter-with-respect-to-jvm-java-virtual-machine-and-pvm-22fc77ae0eb7"},"Difference Between Compiler and Interpreter with respect to JVM (Java virtual machine) and PVM (Python virtual machine)"),"  "),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://www.journaldev.com/4098/java-heap-space-vs-stack-memory"},"Java Heap Space vs Stack \u2013 Memory Allocation in Java")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://antrash.pixnet.net/blog/post/70456505"},"stack vs heap\uff1a\u57f7\u884c\u6642\u671f\u5132\u5b58\u5169\u5927\u8981\u89d2"))),(0,r.kt)("h2",{id:"\u53c3\u8003\u7db2\u5740"},"\u53c3\u8003\u7db2\u5740"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://totoroliu.medium.com/%E7%B7%A8%E8%AD%AF%E8%AA%9E%E8%A8%80-vs-%E7%9B%B4%E8%AD%AF%E8%AA%9E%E8%A8%80-5f34e6bae051"},"\u7de8\u8b6f\u8a9e\u8a00 VS \u76f4\u8b6f\u8a9e\u8a00")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://rahul-saini.medium.com/difference-between-compiler-and-interpreter-with-respect-to-jvm-java-virtual-machine-and-pvm-22fc77ae0eb7"},"Difference Between Compiler and Interpreter with respect to JVM (Java virtual machine) and PVM (Python virtual machine)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://cs-fundamentals.com/java-programming/java-call-by-value-call-by-reference.php"},"Pass by Value and Pass by Reference in Java for Method Parameters")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://www.mygreatlearning.com/blog/polymorphism-in-java/"},"Polymorphism in Java \u2013 An Introduction")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://www.brainvire.com/six-benefits-of-using-mvc-model-for-effective-web-application-development/"},"Six Benefits Of Using MVC Model For Effective Web Application Development"))))}c.isMDXComponent=!0},1082:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/javaTypeError-7e61678a53470882839ccd44f30c8b63.jpg"},8664:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/\u9762\u8a66\u5c01\u9762\u5716-0334f5abe99d1a16eede4a1e4f7576b2.jpg"}}]);