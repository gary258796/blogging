"use strict";(self.webpackChunkgary_blog=self.webpackChunkgary_blog||[]).push([[2518],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(a),u=r,k=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return a?n.createElement(k,i(i({ref:t},c),{},{components:a})):n.createElement(k,i({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2070:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={slug:"/vscode/sonarlint",title:"Sonarlint \u5b89\u88dd\u8a2d\u5b9a",keywords:["vscode","visual studio","sonarlint","sonarqube"],description:"Download and setting Sonalint on VsCode",tags:["vscode","sonarlint","sonarqube"],last_update:{date:"10/31/2022",author:"Gary Liao"}},i="Vs code SonarLint \u5b89\u88dd\u4e26\u8a2d\u5b9a",l={unversionedId:"VsCode/Sonarlint/index",id:"VsCode/Sonarlint/index",title:"Sonarlint \u5b89\u88dd\u8a2d\u5b9a",description:"Download and setting Sonalint on VsCode",source:"@site/docs/VsCode/Sonarlint/index.md",sourceDirName:"VsCode/Sonarlint",slug:"/vscode/sonarlint",permalink:"/blogging/vscode/sonarlint",draft:!1,tags:[{label:"vscode",permalink:"/blogging/tags/vscode"},{label:"sonarlint",permalink:"/blogging/tags/sonarlint"},{label:"sonarqube",permalink:"/blogging/tags/sonarqube"}],version:"current",lastUpdatedBy:"Gary Liao",lastUpdatedAt:1667174400,formattedLastUpdatedAt:"Oct 31, 2022",frontMatter:{slug:"/vscode/sonarlint",title:"Sonarlint \u5b89\u88dd\u8a2d\u5b9a",keywords:["vscode","visual studio","sonarlint","sonarqube"],description:"Download and setting Sonalint on VsCode",tags:["vscode","sonarlint","sonarqube"],last_update:{date:"10/31/2022",author:"Gary Liao"}},sidebar:"tutorialSidebar",previous:{title:"Redis Quick Start (With Sentinel Mode)",permalink:"/blogging/System Design/Integration/redis/"},next:{title:"PostgreSql + Gitea \u5b89\u88dd",permalink:"/blogging/Windows/PostgreSql + Gitea \u5b89\u88dd/"}},s={},p=[{value:"SonarLint\u7c21\u4ecb",id:"sonarlint\u7c21\u4ecb",level:3},{value:"IDE\u4e0a\u5b89\u88ddSonarLint",id:"ide\u4e0a\u5b89\u88ddsonarlint",level:3},{value:"\u555f\u52d5\u4e00\u500bSonarQube server",id:"\u555f\u52d5\u4e00\u500bsonarqube-server",level:3},{value:"\u4f7f\u7528\u81ea\u8a02\u898f\u5247",id:"\u4f7f\u7528\u81ea\u8a02\u898f\u5247",level:3},{value:"\u4f7fSonarLint\u80fd\u5920\u53ca\u6642\u900f\u904eVs code\u544a\u8a34\u6211\u5011\u7a0b\u5f0f\u78bc\u72c0\u6cc1",id:"\u4f7fsonarlint\u80fd\u5920\u53ca\u6642\u900f\u904evs-code\u544a\u8a34\u6211\u5011\u7a0b\u5f0f\u78bc\u72c0\u6cc1",level:3}],c={toc:p};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"vs-code-sonarlint-\u5b89\u88dd\u4e26\u8a2d\u5b9a"},"Vs code SonarLint \u5b89\u88dd\u4e26\u8a2d\u5b9a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#sonarLint_intro"},"SonarLint\u7c21\u4ecb"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#installOnIDE"},"IDE\u4e0a\u5b89\u88ddSonarLint"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#createSonarQubeServer"},"\u555f\u52d5\u4e00\u500bSonarQube server"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#use_Own_rules"},"\u4f7f\u7528\u81ea\u8a02\u898f\u5247"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#instantly_Scan"},"\u4f7fSonarLint\u80fd\u5920\u53ca\u6642\u900f\u904eVs code\u544a\u8a34\u6211\u5011\u7a0b\u5f0f\u78bc\u72c0\u6cc1")))),(0,r.kt)("div",{id:"sonarLint_intro"}),(0,r.kt)("h3",{id:"sonarlint\u7c21\u4ecb"},"SonarLint\u7c21\u4ecb"),(0,r.kt)("hr",null),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=SonarSource.sonarlint-vscode",title:"SonarLint visual studio settings officail documents"},"SonarLint"),"\u53ef\u8b93\u6211\u5011\u5728\u7de8\u5beb\u7a0b\u5f0f\u78bc\u7684\u6642\u5019\uff0c\u5373\u6642\u7372\u5f97",(0,r.kt)("a",{parentName:"p",href:"https://www.sonarqube.org/downloads/?gads_campaign=Asia-SonarQube&gads_ad_group=SonarQube&gads_keyword=sonarqube&gclid=CjwKCAjwz5iMBhAEEiwAMEAwGKjWWntLZubiv1FlCYcbZ97hnkuWg6uh36bQMvmIY6GfgcwVosKyKRoCPIQQAvD_BwE",title:"SonarQube official web site"},"SonarQube"),"\u56de\u994b(bug, code smell, rules).\u63d0\u5347\u7a0b\u5f0f\u54c1\u8cea\uff0c\u4e26\u4e14\u53ef\u4ee5\u5c0e\u5165\u5230\u958b\u767c\u5718\u968a\u4e2d\uff0c\u5b9a\u597d\u958b\u767c\u898f\u7bc4\u5f8c\uff0c\u4f7f\u5f97\u5404\u6210\u54e1\u958b\u767c\u51fa\u7684\u7a0b\u5f0f\u88ab\u78ba\u4fdd\u5728\u898f\u7bc4\u5e95\u4e0b\uff0c\u63d0\u5347\u5718\u968a\u7a0b\u5f0f\u78bc\u7d71\u4e00\u98a8\u683c...\u7b49\u597d\u8655\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u26a0\ufe0f")," \u6ce8\u610f"),(0,r.kt)("p",{parentName:"blockquote"},"SonarLint in VS Code supports analysis of JavaScript, TypeScript, Python, Java, HTML & PHP code only.   ")),(0,r.kt)("div",{id:"installOnIDE"}),(0,r.kt)("h3",{id:"ide\u4e0a\u5b89\u88ddsonarlint"},"IDE\u4e0a\u5b89\u88ddSonarLint"),(0,r.kt)("hr",null),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Vs code -> market place \u4e0b\u8f09 SonarLint"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"VSCode_SonarLint_Extension",src:a(7695).Z,width:"2250",height:"1436"}),"  ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5b8c\u6210\u5f8c\uff0c\u5728Vs code -> Explorer\u4e0b\u65b9\u53ef\u770b\u5230 ",(0,r.kt)("em",{parentName:"p"},"SONARLINT RULES"),"   "),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"\ud83d\udcd8 Hint",(0,r.kt)("br",{parentName:"p"}),"\n","\u9019\u4e9b",(0,r.kt)("em",{parentName:"p"},"RULES"),"\u70ba\u7576\u6211\u5011\u9084\u672a\u70ba\u5c08\u6848\u8a2d\u5b9a\u9023\u7d50\u5c0d\u61c9\u5230SonarQube/SonarCloud server\u4e0a\u7684\u5c08\u6848\u4e4b\u524d\uff0cSonarLint\u6703\u81ea\u52d5\u4f7f\u7528\u9019\u908a\u986f\u793a\u7684Rules\u6aa2\u67e5\u5c08\u6848\u7a0b\u5f0f\u78bc\u3002\u53ef\u4f9d\u7167\u500b\u4eba\u559c\u597d\u958b\u555f\u6216\u95dc\u9589\u6bcf\u4e00\u500bRule.")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"VSCode_SonarLint_rules",src:a(5676).Z,width:"2304",height:"1222"}),"    ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u9019\u6642\u5373\u53ef\u4ee5\u5728\u5c08\u6848\u5167\u770b\u5230SonarLint\u70ba\u4e0d\u7b26\u5408\u898f\u5247\u4e4b\u7a0b\u5f0f\u78bc\u52a0\u4e0a\u6ce2\u6d6a\u5e95\u7dda\u63d0\u793a\u6211\u5011"),(0,r.kt)("p",{parentName:"li"},"a. \u9019\u908a\u5148\u5728Local\u5c07TypeScript\u5176\u4e2d\u4e00\u689d\u898f\u5247\u555f\u7528\u3002",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},'"===" and "!==" should be used instead of "==" and "!=" (typescript:S1440)')),(0,r.kt)("p",{parentName:"li"},"b. \u5982\u53ef\u4ee5\u5f9e\u7a0b\u5f0f\u88e1\u9762\u770b\u5230\u5982\u756b\u9762\u7684\u6a23\u5b50\uff0c\u90a3\u5c31\u4ee3\u8868\u5b89\u88dd\u6210\u529f\u3002"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"\u5728\u7a0b\u5f0f\u78bc\u5e95\u4e0b\uff0c\u6703\u51fa\u73fe\u6ce2\u6d6a\u865f\u3002\u5c07\u6ed1\u9f20\u79fb\u5230\u4e0a\u9762\u6703\u51fa\u73feSonarLint\u63d0\u793a\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u4e0b\u65b9Problem\u9801\u9762\u88e1\u4e5f\u6703\u986f\u793a\u76ee\u524dSonarLint\u5075\u6e2c\u5230\u7684\u6240\u6709\u932f\u8aa4\uff0c\u4e26\u4e14\u6703\u4f9d\u7167\u6a94\u6848\u5340\u5206\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5728\u63d0\u793a\u9078\u64c7Show Problem\u5f8c\u6703\u958b\u555f\u7d30\u7bc0\u63cf\u8ff0\u4ee5\u53ca\u63d0\u4f9b\u5efa\u8b70\u4fee\u6539\u65b9\u5411\u3002  ",(0,r.kt)("br",null),"![VSCode_SonarLint_hint](./images/VSCode_SonarLint_hint.png)")))),(0,r.kt)("br",null),(0,r.kt)("div",{id:"createSonarQubeServer"}),(0,r.kt)("h3",{id:"\u555f\u52d5\u4e00\u500bsonarqube-server"},"\u555f\u52d5\u4e00\u500bSonarQube server"),(0,r.kt)("hr",null),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u63a5\u8457\u555f\u52d5\u4e00\u500bSonarQube Server, \u4e0b\u8f09\u65b9\u5f0f\u6709\u5169\u7a2e\u3002"),(0,r.kt)("p",{parentName:"li"},"a. \u4f7f\u7528zip\u6a94\u6848\u4e0b\u8f09\u5b89\u88dd   "),(0,r.kt)("p",{parentName:"li"},"-> \u53ef\u53c3\u8003",(0,r.kt)("a",{parentName:"p",href:"https://docs.sonarqube.org/latest/setup/install-server/",title:"SonarQube installation link"},"\u9023\u7d50"),"\u3002\u4e26\u5148\u78ba\u8a8d",(0,r.kt)("a",{parentName:"p",href:"https://docs.sonarqube.org/latest/requirements/requirements/",title:"SonarQube pre requirements documents"},"\u5b89\u88dd\u74b0\u5883\u9700\u6c42"),"\u3002   "),(0,r.kt)("p",{parentName:"li"},"b. \u4f7f\u7528Docker Image\u4e0b\u8f09",(0,r.kt)("br",{parentName:"p"}),"\n","-> \u53ef\u53c3\u8003",(0,r.kt)("a",{parentName:"p",href:"https://docs.sonarqube.org/latest/setup/install-server/",title:"SonarQube installation link"},"\u9023\u7d50"),", Installing SonarQube from the Docker Image\u7684\u90e8\u5206\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u555f\u52d5Server\uff0c\u767b\u5165\u4e26\u9032\u5165\u4e3b\u756b\u9762\u3002"),(0,r.kt)("p",{parentName:"li"},"Default URL: http://localhost:9000",(0,r.kt)("br",{parentName:"p"}),"\n","Default Account and Password : admin/admin"),(0,r.kt)("p",{parentName:"li"}," ",(0,r.kt)("img",{alt:"SonarQube_Main_Page",src:a(1186).Z,width:"2880",height:"1576"}),"    ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5275\u5efaToken\uff0c\u7a0d\u5f8c\u8a2d\u5b9a\u5c08\u6848\u9023\u7d50SonarQube\u4e0a\u5c08\u6848\u6642\u6703\u7528\u5230\u3002\u8b93\u6211\u5011\u7684\u5e33\u865f\u8cc7\u8a0a\u4e0d\u9700\u66b4\u9732\u5728\u5c08\u6848\u6a94\u6848\u88e1\u9762\u3002"),(0,r.kt)("p",{parentName:"li"},"\u53f3\u4e0a\u89d2 Administrator -> My Account -> Security -> Generate Tokens  "),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Right_Top_Corner_Administrator",src:a(2258).Z,width:"1220",height:"392"}),"    "),(0,r.kt)("br",null),(0,r.kt)("p",{parentName:"li"},"\u5c07 ",(0,r.kt)("span",{id:"getToken"},(0,r.kt)("strong",{parentName:"p"},"\u7522\u751f\u4e4bToken"))," \u8a18\u9304\u8d77\u4f86\u3002"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"Generated_Token",src:a(9681).Z,width:"1220",height:"392"}),"    ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5275\u5efaProject"),(0,r.kt)("p",{parentName:"li"},"\u5de6\u4e0a\u89d2Projects -> \u53f3\u4e0a\u89d2 ",(0,r.kt)("em",{parentName:"p"},"CREATE PROJECT")," -> Manually -> \u8f38\u5165Project name & key -> \u5982\u679c\u9700\u8981\u6574\u5408CI/CD\u53ef\u5728\u9019\u908a\u52a0\u5165\uff0c\u4e0d\u7136\u5c31\u9078\u64c7 ",(0,r.kt)("em",{parentName:"p"},"Locally")," -> Use existing token \u8f38\u5165\u4e0a\u4e00\u6b65\u9a5f\u7372\u5f97\u4e4b",(0,r.kt)("a",{parentName:"p",href:"#getToken"},"TOKEN")," -> \u9078\u64c7Other(forJs...) -> \u9078\u64c7OS")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u57f7\u884cSonar Scanner "),(0,r.kt)("p",{parentName:"li"},"\u4e0d\u8ad6\u54ea\u7a2e\u7686\u53ef\u53c3\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://docs.sonarqube.org/latest/analysis/scan/sonarscanner/",title:"Sonar Scanner downloads"},"SonarScanner\u8a2d\u5b9a\u4e0b\u8f09\u9801\u9762"),",\u5176\u4e2d\u6709\u4e00\u6b65\u9a5f\u4e0d\u53ef\u5c11\u3002 \u5728\u5c08\u6848\u6839\u76ee\u9304\u5e95\u4e0b\u52a0\u5165\u540d\u70ba ",(0,r.kt)("em",{parentName:"p"},"sonar-project.properties"),"\u6a94\u6848\uff0c\u4e26\u4e14\u5728\u5176\u4e2d\u8a2d\u5b9a\u76f8\u95dc\u8a2d\u5b9a\u503c\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-properties"},"# \u6307\u5b9aProject Key\uff0c\u5275\u5efaSonarQube Project\u6642\u8f38\u5165\u5f97\u503c\nsonar.projectKey=sonarLint_DockerScanner_recipeApp\n\n# \u6211\u81ea\u5df1SOnarQube \u548c Sonar Scanner\u90fd\u4ee5Docker image\u555f\u52d5container\uff0c\u9700\u8981\u914d\u7f6e sonar.host.url(\u9810\u8a2d\u70bahttp://localhost:9000)\n# \u9019\u908a\u81ea\u5df1\u5728\u6e2c\u8a66\u7684\u6642\u5019\uff0c\u5c07\u5169\u500bcontainer\u52a0\u5165\u5230\u540c\u500bnetwork\u5e95\u4e0b\uff0c\u4f46\u7121\u6cd5\u4f7f\u7528sonarQube server contianer\u7576\u4f5cip name\u6210\u529f\u57f7\u884cSonar Scanner\u3002 \u56e0\u6b64\u5148\u4f7f\u7528Container IP\u3002\nsonar.host.url=http://172.18.0.2:9000\n")),(0,r.kt)("p",{parentName:"li"},"a. \u4e0b\u8f09ZIP\n\u5728\u4e0a\u4e00\u6b65\u9a5f\u9078\u64c7\u5b8cOS\u5f8c\uff0c\u4e0b\u65b9SonarQube\u6703\u8df3\u51fa\u5982\u4e0b\u5716\u756b\u9762\u63d0\u4f9b\u8981\u57f7\u884c\u4e4bcommand line\u6307\u4ee4\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","",(0,r.kt)("img",{alt:"SonarQube_Create_project_autoGen_command",src:a(5674).Z,width:"2456",height:"1210"}),"    "),(0,r.kt)("p",{parentName:"li"},"b. \u4f7f\u7528Docker Image\uff0c\u53ef\u53c3\u8003",(0,r.kt)("a",{parentName:"p",href:"https://docs.sonarqube.org/latest/analysis/scan/sonarscanner/",title:"Sonar Scanner downloads"},"SonarScanner\u8a2d\u5b9a\u4e0b\u8f09\u9801\u9762"),"\u4e4bdocker run command\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-docker"},'# \u5982\u679cSonarQube\u4ee5\u53caSonar Scanner\u90fd\u4f7f\u7528Docker container\u57f7\u884c\n# \u8a18\u5f97\u52a0\u4e0a --network \ndocker run \\\n    --rm \\\n    -e SONAR_HOST_URL="http://${SONARQUBE_URL}" \\\n    -e SONAR_LOGIN="myAuthenticationToken" \\\n    -v "${YOUR_REPO}:/usr/src" \\\n    sonarsource/sonar-scanner-cli\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6210\u529f\u5f8c\uff0c\u9801\u9762\u6703\u81ea\u52d5\u5237\u65b0\u4e26\u986f\u793a\u7d50\u679c\u3002"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"SonarQube_Scan_result",src:a(2322).Z,width:"2476",height:"1284"}),"    "))),(0,r.kt)("div",{id:"use_Own_rules"}),(0,r.kt)("h3",{id:"\u4f7f\u7528\u81ea\u8a02\u898f\u5247"},"\u4f7f\u7528\u81ea\u8a02\u898f\u5247"),(0,r.kt)("hr",null),(0,r.kt)("p",null,"\u6bcf\u4e00\u500b\u5c08\u6848\u9810\u8a2d\u7686\u662f\u4f7f\u7528SonarQube\u4e0a\u63d0\u4f9b\u4e4b\u898f\u5247\uff0c\u6211\u5011\u53ef\u4ee5\u4f9d\u7167\u5718\u968a\u6216\u8005\u500b\u4eba\u9700\u6c42\u81ea\u884c\u6c7a\u5b9a\u8981\u65b0\u589e\u6216\u522a\u9664\u6216\u8005\u751a\u81f3\u81ea\u8a02\u898f\u5247\u3002(\u5e95\u4e0b\u4ee5TypeScript\u70ba\u4f8b)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Qualuty Profiles -> TypeScript\u5340\u584a -> \u5c0d\u76ee\u524dSonar\u81ea\u5e36\u7684profile\u9078\u64c7\u8a2d\u5b9a\u6309\u9215 -> Copy -> \u70ba\u9019\u500b\u8907\u88fd\u7684profile\u547d\u540d")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u547d\u540d\u5f8c\u6703\u5e36\u5165\u5230\u898f\u5247\u660e\u7d30\u9801\u9762 -> \u9ede\u9078Activate more"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"SonarQube_activateMore",src:a(8849).Z,width:"2476",height:"1284"}),"       ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'\u555f\u7528\u81ea\u5df1\u60f3\u8981\u5c08\u6848\u555f\u7528\u4e4b\u898f\u5247(\u4ee5"===" and "!==" should be used instead of "==" and "!="\u70ba\u4f8b)'),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"activate_the_rules",src:a(6016).Z,width:"2476",height:"1284"}),"    "))),(0,r.kt)("div",{id:"instantly_Scan"}),(0,r.kt)("h3",{id:"\u4f7fsonarlint\u80fd\u5920\u53ca\u6642\u900f\u904evs-code\u544a\u8a34\u6211\u5011\u7a0b\u5f0f\u78bc\u72c0\u6cc1"},"\u4f7fSonarLint\u80fd\u5920\u53ca\u6642\u900f\u904eVs code\u544a\u8a34\u6211\u5011\u7a0b\u5f0f\u78bc\u72c0\u6cc1"),(0,r.kt)("hr",null),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u2139\ufe0f \u63d0\u793a"),(0,r.kt)("p",{parentName:"blockquote"},"a. \u5728\u7d81\u5b9aVs code SonarLint\u8207SonarQube\u4e0a\u5c08\u6848\u4e4b\u524d\uff0c\u53ef\u5148\u628a\u525b\u525b\u8a2d\u5b9a\u6210activate\u7684local rule\u91cd\u65b0\u8a2d\u5b9a\u6210deactivate, \u65b9\u4fbf\u67e5\u770b\u6548\u679c\u78ba\u8a8d\u662f\u5426\u9023\u7d50\u6210\u529f\u3002 ")),(0,r.kt)("p",null,"\u6839\u64da\u6587\u4ef6\u8aaa\u6cd5\uff0c\u6bcf\u6b21\u6539\u52d5Server\u4e0a\u8a2d\u5b9a\uff0c\u53ef\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"SonarLint: Update all project bindings to SonarQube/SonarCloud")," \u66f4\u65b0local storage\u8b93\u6539\u52d5\u751f\u6548\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},'SonarLint keeps server side data in a local storage. If you change something on the server such as the quality profile, you can trigger an update of the local storage using the "SonarLint: Update all project bindings to SonarQube/SonarCloud" command on the command palette\u3002 ')),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u9ede\u9078Vs code\u5de6\u4e0a\u89d2",(0,r.kt)("em",{parentName:"p"},"Code")," -> ",(0,r.kt)("em",{parentName:"p"},"Preferences")," -> ",(0,r.kt)("em",{parentName:"p"},"Settings")," -> ",(0,r.kt)("em",{parentName:"p"},"Extensions")," -> ",(0,r.kt)("em",{parentName:"p"},"SonarLint")),(0,r.kt)("p",{parentName:"li"},"\u8a2d\u5b9aVs code\u4e0aSonarLint\u7684\u76f8\u95dc\u8a2d\u5b9a\uff0c\u9ede\u9078 ",(0,r.kt)("em",{parentName:"p"},"Edit in settings.json")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"SonarLint_Extension_settings",src:a(4678).Z,width:"2270",height:"1434"}),"    "),(0,r.kt)("br",null)),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728User\u5c64\u7d1a\u7684Settings.json\u88e1\u52a0\u5165\u8a2d\u5b9aSonarQube host\u4ee5\u53catoken\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-properties"},'"sonarlint.connectedMode.connections.sonarqube": [\n    {\n        "serverUrl": "${YOUR_SONARQUBE_SERVER_URL}",\n        "token": "${YOUR_TOKEN}"\n    }\n]\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728WorkSpace\u5c64\u7d1a\u4e4bSettings.json\u70ba\u76ee\u524dWorkSpace\u6253\u958b\u4e4b\u5c08\u6848\u8a2d\u5b9a\u5c0d\u61c9\u4e4bSonarQube\u5c08\u6848\u7684Project Key."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-properties"},'{\n"sonarlint.connectedMode.project": {\n    "projectKey": "SonarLint_DockerScanner_recipeAPP"\n}\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u53eb\u51faVs code\u7684Command Palette "),(0,r.kt)("p",{parentName:"li"},"Windows: ",(0,r.kt)("inlineCode",{parentName:"p"},"Ctrl+Shift+P "),(0,r.kt)("br",{parentName:"p"}),"\n","Mac: ",(0,r.kt)("inlineCode",{parentName:"p"},"CMD+Shift+P")),(0,r.kt)("p",{parentName:"li"},"\u8f38\u5165SonarLint\u9078\u64c7 ",(0,r.kt)("em",{parentName:"p"},"SonarLint: Update all project bindings to SonarQube/SonarCloud")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"SonarLint_Command_Palette",src:a(1477).Z,width:"2270",height:"302"}),"  ",(0,r.kt)("br",null)," "),(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u8a2d\u5b9a\u7121\u8aa4\uff0c\u9019\u6642\u5019Vs code\u61c9\u8a72\u6703\u8df3\u51faUpdate\u6210\u529f\u756b\u9762"),(0,r.kt)("p",{parentName:"li"},"![Update Success]","(./images/Update Success.png)  ",(0,r.kt)("br",null)),(0,r.kt)("p",{parentName:"li"},"\u9019\u6642\u5019\u67e5\u770b\u7a0b\u5f0f\u78bc\uff0c\u61c9\u6703\u5c31\u6703\u6709\u5982\u6253\u958blocal rule\u7684\u6548\u679c\u4e86\u3002\n",(0,r.kt)("img",{alt:"VSCode_SonarLint_hint Success",src:a(4580).Z,width:"2880",height:"1576"}),"  "))))}d.isMDXComponent=!0},9681:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Generated_Token-c92bce6b94cee86b9215384d2e074e91.png"},2258:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Right_Top_Corner_Administrator-92c0b6c560d8f2cf2dd721462daff215.png"},1477:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/SonarLint_Command_Palette-b99373d5fcc34df41ba61a8fdd70476c.png"},4678:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/SonarLint_Extension_settings-92d1b8da01a083d7d93aa1629ee78496.png"},5674:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/SonarQube_Create_project_autoGen_command-011ca0d2b12770fa86f840aa01823656.png"},1186:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/SonarQube_Main_Page-f74f1999c16fa741c2965905864d86bc.png"},2322:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/SonarQube_Scan_result-20549e1f62165b15717954bf935d5c5f.png"},8849:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/SonarQube_activateMore-fce29c59a36e881cecabad4d8be06b39.png"},7695:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/VSCode_SonarLint_Extension-4cbcc900b6a3a93432bf325e58d9dc58.png"},4580:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/VSCode_SonarLint_hint-34e5d690e3f7129eefef07f69e307345.png"},5676:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/VSCode_SonarLint_rules-53bb4cf8e9dc60ee24a1b15e83791d8c.png"},6016:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/activate_the_rules-d95b6a01e9b3e379cc79ea73c0530b6d.png"}}]);