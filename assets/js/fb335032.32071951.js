"use strict";(self.webpackChunkgary_blog=self.webpackChunkgary_blog||[]).push([[2190],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>b});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},o=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),d=c(a),b=r,h=d["".concat(l,".").concat(b)]||d[b]||m[b]||i;return a?n.createElement(h,s(s({ref:t},o),{},{components:a})):n.createElement(h,s({ref:t},o))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,s[1]=p;for(var c=2;c<i;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1232:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=a(7462),r=(a(7294),a(3905));const i={title:"[Aws] Apache Web Server + SSL on AWS EC2 instance",keywords:["aws","ec2","apache web server","https","ssl"],description:"Set up Apache web server on aws ec2 machine and config ssl in order to have https connection.",tags:["aws","ec2","apache web server","https","ssl"],last_update:{date:"12/08/2022",author:"Gary Liao"}},s=void 0,p={unversionedId:"Aws/Ec2+Apache Web Server/index",id:"Aws/Ec2+Apache Web Server/index",title:"[Aws] Apache Web Server + SSL on AWS EC2 instance",description:"Set up Apache web server on aws ec2 machine and config ssl in order to have https connection.",source:"@site/docs/Aws/Ec2+Apache Web Server/index.md",sourceDirName:"Aws/Ec2+Apache Web Server",slug:"/Aws/Ec2+Apache Web Server/",permalink:"/blogging/Aws/Ec2+Apache Web Server/",draft:!1,tags:[{label:"aws",permalink:"/blogging/tags/aws"},{label:"ec2",permalink:"/blogging/tags/ec-2"},{label:"apache web server",permalink:"/blogging/tags/apache-web-server"},{label:"https",permalink:"/blogging/tags/https"},{label:"ssl",permalink:"/blogging/tags/ssl"}],version:"current",lastUpdatedBy:"Gary Liao",lastUpdatedAt:1670457600,formattedLastUpdatedAt:"Dec 8, 2022",frontMatter:{title:"[Aws] Apache Web Server + SSL on AWS EC2 instance",keywords:["aws","ec2","apache web server","https","ssl"],description:"Set up Apache web server on aws ec2 machine and config ssl in order to have https connection.",tags:["aws","ec2","apache web server","https","ssl"],last_update:{date:"12/08/2022",author:"Gary Liao"}},sidebar:"tutorialSidebar",previous:{title:"\u9762\u8a66\u554f\u984c\u6574\u7406(\u4e09)-\u7a0b\u5f0f\u8a2d\u8a08\u8207\u5176\u4ed6",permalink:"/blogging/2021\u9762\u8a66\u6574\u7406/3/"},next:{title:"Cache",permalink:"/blogging/Http/Cache/"}},l={},c=[{value:"\u5728 Aws \u555f\u52d5\u4e00\u500b EC2 Instance",id:"\u5728-aws-\u555f\u52d5\u4e00\u500b-ec2-instance",level:2},{value:"SSH \u9032\u5165 Aws Instance",id:"ssh-\u9032\u5165-aws-instance",level:2},{value:"\u70ba EC2 \u7533\u8acb\u4e00\u500b\u56fa\u5b9a IP",id:"\u70ba-ec2-\u7533\u8acb\u4e00\u500b\u56fa\u5b9a-ip",level:2},{value:"\u67b6\u8a2d Apache Web Server",id:"\u67b6\u8a2d-apache-web-server",level:2},{value:"\u4f7f\u7528 Domain Name \u8a2a\u554f\u6211\u5011\u7684\u7db2\u9801",id:"\u4f7f\u7528-domain-name-\u8a2a\u554f\u6211\u5011\u7684\u7db2\u9801",level:2},{value:"\u8a2d\u5b9a SSL\uff0c\u8b93\u6211\u5011\u80fd\u5920\u4f7f\u7528 Https \u8a2a\u554f\u6211\u5011\u7684\u7db2\u9801",id:"\u8a2d\u5b9a-ssl\u8b93\u6211\u5011\u80fd\u5920\u4f7f\u7528-https-\u8a2a\u554f\u6211\u5011\u7684\u7db2\u9801",level:2},{value:"\u4fee\u6539 index.html \u4e26\u4e0b\u8f09 App",id:"\u4fee\u6539-indexhtml-\u4e26\u4e0b\u8f09-app",level:2},{value:"\u53c3\u8003\u6587\u7ae0",id:"\u53c3\u8003\u6587\u7ae0",level:2}],o={toc:c};function m(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},o,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u4eca\u5929\u6253\u7b97\u8a18\u9304\u4e00\u4e0b\u5982\u4f55\u5728 Aws \u4e0a\u5efa\u7acb EC2 Instance \u4e26\u4e14\u67b6\u8a2d Apache Web Server\u3002\u7136\u5f8c\uff0c\u6211\u5011\u5c07\u8a2d\u5b9a SSL \u4f7f\u5f97\u6211\u5011\u53ef\u4ee5\u900f\u904e Https \u9023\u7dda\u5230 Web Server \u4e0a\u3002 \u53e6\u5916\u4e5f\u6703\u9806\u4fbf\u653e\u7f6e\u6a94\u6848\u4f7f\u5f97\u6211\u5011\u53ef\u4ee5\u7528\u6b64 Web Server \u653e\u7f6e\u4e26\u4e14\u4e0b\u8f09 app \u6a94\u6848 (ios -> ipa, android -> apk)"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"AWS + Apache Web Server",src:a(6247).Z,width:"320",height:"157"}),(0,r.kt)("br",{parentName:"p"}),"\n","Image Source : ",(0,r.kt)("a",{parentName:"p",href:"https://blog.devgenius.io/a-newbies-guide-to-creating-an-ec2-instance-with-an-apache-server-via-the-aws-cli-5bdfc8aaae53"},"A Newbie\u2019s Guide To Creating An EC2 Instance With An Apache Server Via The AWS CLI"),"."),(0,r.kt)("h2",{id:"\u5728-aws-\u555f\u52d5\u4e00\u500b-ec2-instance"},"\u5728 Aws \u555f\u52d5\u4e00\u500b EC2 Instance"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5148\u7533\u8acb\u4e00\u500b Aws \u5e33\u865f (\u5982\u679c\u5df2\u7d93\u64c1\u6709\u5e33\u865f\uff0c\u53ef\u8df3\u904e)",(0,r.kt)("br",{parentName:"p"}),"\n","AWS \u63d0\u4f9b\u65b0\u5e33\u623612\u500b\u6708\u514d\u8cbb\uff0c\u4e26\u4e14\u63d0\u4f9b\u5982 750 \u5c0f\u6642/\u6bcf\u6708\u7684 EC2 \u4f7f\u7528\u6642\u6578...\u7b49\uff0c\u8a73\u7d30\u514d\u8cbb\u7528\u91cf\u53ef\u53c3\u8003 ",(0,r.kt)("a",{parentName:"p",href:"https://aws.amazon.com/tw/free/?all-free-tier.sort-by=item.additionalFields.SortRank&all-free-tier.sort-order=asc&awsf.Free%20Tier%20Types=*all&awsf.Free%20Tier%20Categories=*all",title:"Aws \u514d\u8cbb\u65b9\u6848\u8aaa\u660e"},"AWS \u514d\u8cbb\u5b89\u6848\u8aaa\u660e"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6211\u7684\u5e33\u6236 -> \u9032\u5165 AWS \u7ba1\u7406\u4e3b\u63a7\u53f0 ",(0,r.kt)("br",null)," ",(0,r.kt)("img",{alt:"AWS + Apache Web Server",src:a(6825).Z,width:"2876",height:"1268"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u9032\u5165 EC2 \u5100\u8868\u677f\n",(0,r.kt)("img",{alt:"EC2 Console",src:a(4977).Z,width:"2876",height:"1248"}),"  ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5f9e\u5de6\u5074\u5217\u8868\u4e2d\u9078\u53d6\u300c\u57f7\u884c\u500b\u9ad4\u300d\uff0c\u9078\u64c7\u53f3\u4e0a\u89d2\u4e4b\u300c\u555f\u52d5\u65b0\u57f7\u884c\u500b\u9ad4\u300d\u6309\u9215\u3002\n",(0,r.kt)("img",{alt:"Create New Ec2 Instance",src:a(7302).Z,width:"2876",height:"1248"}),"  ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u7d66\u4e88\u6b64 EC2 Instance \u4e00\u500b\u540d\u7a31\uff0c\u6211\u5011\u53d6\u540d\u70ba EC2 with Apache Web Server (\u540d\u7a31\u6c92\u6709\u9650\u5236\uff0c\u53ef\u81ea\u884c\u547d\u540d)\n",(0,r.kt)("img",{alt:"Name Your EC2 Instance",src:a(2901).Z,width:"2876",height:"1248"})," ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u61c9\u7528\u7a0b\u5f0f\u548c\u4f5c\u696d\u4f5c\u696d\u7cfb\u7d71\u6620\u50cf\u6a94\u6848 (\u53ef\u4f9d\u7167\u81ea\u5df1\u559c\u597d\u9078\u64c7\u5176\u4ed6\u4f5c\u696d\u7cfb\u7d71\u7121\u4eff\u3002\u4f46\u5f8c\u7e8c\u6b65\u9a5f\u53ef\u80fd\u6703\u6709\u4e9b\u5fae\u5dee\u7570)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6536\u5c0b Ubuntu \u6620\u50cf\u6a94\u6848",(0,r.kt)("br",{parentName:"li"}),(0,r.kt)("img",{alt:"Search Ubuntu Image",src:a(1406).Z,width:"2876",height:"1248"}),"  "),(0,r.kt)("li",{parentName:"ul"},"\u9078\u64c7\u4f7f\u7528 Ubuntu Server 22.04 LTS\n",(0,r.kt)("img",{alt:"Choose Ubuntu Image",src:a(8498).Z,width:"2876",height:"1248"}),"  "))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u57f7\u884c\u500b\u9ad4\u985e\u578b\uff0c\u9078\u64c7\u4f7f\u7528 t2.micro (\u9810\u8a2d\u61c9\u8a72\u5373\u662f\u6b64\u985e\u578b)",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{alt:"t2.micro",src:a(4994).Z,width:"2876",height:"1248"})," ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5efa\u7acb\u65b0\u7684\u91d1\u9470\u5c0d\uff0c\u7d66\u4e88\u4e00\u500b\u559c\u611b\u7684\u540d\u7a31\uff0c\u985e\u578b\u9078\u64c7 RSA\uff0c\u79c1\u6709\u91d1\u9470\u6a94\u6848\u683c\u5f0f\u9078\u64c7 .pem\u3002",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{alt:"pem key",src:a(6711).Z,width:"2876",height:"1256"}),(0,r.kt)("br",{parentName:"p"}),"\n","\u5efa\u7acb\u91d1\u9470\u5c0d\u4e4b\u5f8c\uff0c\u700f\u89bd\u5668\u6703\u81ea\u52d5\u4e0b\u8f09\u4e00\u500b pem \u6a94\u6848\uff0c\u7a0d\u5f8c\u5c07\u6703\u4f7f\u7528\u4f86\u8b93\u6211\u5011\u80fd\u5920 SSH \u9032\u5165 EC2 Instance \u7576\u4e2d\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u7db2\u8def\u8a2d\u5b9a\uff0c\u5efa\u7acb\u4e00\u500b\u65b0\u7684\u5b89\u5168\u7fa4\u7d44\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","(\u56e0\u70ba\u9019\u88e1\u662f\u5c55\u793a\u7528\uff0c\u6211\u5011\u5c07\u6240\u6709\u80fd\u5920\u5141\u8a31\u4e4b\u9078\u9805\u7686\u52fe\u9078\u3002\u5be6\u969b\u4f7f\u7528\u6642\uff0c\u8acb\u4f9d\u7167\u6240\u90e8\u7f72\u4e4b\u74b0\u5883\u4ee5\u53ca\u8cc7\u6e90\u5b89\u5168\u8003\u91cf\u8a2d\u5b9a\u5b89\u5168\u7fa4\u7d44\u4e4b\u898f\u5247\u63d0\u5347\u5b89\u5168\u6027\u3002)",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{alt:"pem key",src:a(1882).Z,width:"2876",height:"1256"}),"  ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u9ede\u64ca\u300c\u555f\u52d5\u57f7\u884c\u500b\u9ad4\u300d\uff0c\u5b8c\u6210\u5f8c\uff0c\u5c07\u6703\u770b\u5230\u5982\u4e0b\u5716\u4e4b\u756b\u9762\u3002\u9ede\u64ca\u7bad\u982d\u8655\u67e5\u770b\u8a73\u7d30\u8cc7\u8a0a\u3002",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{alt:"Instance Created",src:a(7756).Z,width:"2876",height:"1256"}),(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{alt:"Instance Detail",src:a(337).Z,width:"2876",height:"1256"}),"  "))),(0,r.kt)("h2",{id:"ssh-\u9032\u5165-aws-instance"},"SSH \u9032\u5165 Aws Instance"),(0,r.kt)("p",null,"  \u5230\u9019\u908a\u6211\u5011\u5df2\u7d93\u6210\u529f\u555f\u52d5\u4e00\u500b Aws EC2 Instance\u4e86\uff0c\u63a5\u8457\u6211\u5011\u53ef\u4ee5\u8a66\u8457 SSH \u9032\u5165 Instance\u3002"),(0,r.kt)("p",null,"  \u5728\u5efa\u7acb\u91d1\u9470\u5c0d\u4e4b\u5f8c\uff0c\u700f\u89bd\u5668\u70ba\u6211\u5011\u4e0b\u8f09\u4e86\u4e00\u500b .pem \u6a94\u6848\u3002",(0,r.kt)("br",null),"\n\u6211\u5011\u5148\u958b\u555f Command Line \u4e26\u4e14 cd \u5230 .pem \u6a94\u6848\u6240\u5728\u4e4b\u76ee\u9304\u4e0b\u3002"),(0,r.kt)("p",null,"  \u9019\u908a\u6211\u5148\u5c07\u6211\u672c\u6a5f\u7684 .pem \u6a94\u6848\u547d\u540d\u70ba ec2-apache-web-server.pem\u3002"),(0,r.kt)("br",null),"\u4e26\u4e14\u5f9e\u4e0a\u9762\u57f7\u884c\u500b\u9ad4\u4e2d\u7684\u622a\u5716\u53ef\u67e5\u770b\u300c\u516c\u6709IPv4\u5730\u5740\u300d\u5f97\u77e5\u6b64 Instance \u4e4b IP\u3002 \u56e0\u6b64\uff0c\u5728 Command Line \u4e2d\u8f38\u5165",(0,r.kt)("br",null),"   ```ssh -i ec2-apache-web-server.pem ubuntu@18.183.223.11```",(0,r.kt)("p",null,"  \u9019\u6642\u5019\uff0cCommand Line\u4e4b\u4e2d\u53ef\u80fd\u6703\u51fa\u73fe\u5982\u4e0b\u5716\u4e4b\u8a0a\u606f\u3002\n",(0,r.kt)("img",{alt:"pem_file_permission_error",src:a(5569).Z,width:"2876",height:"452"}),"  "),(0,r.kt)("p",null,"  \u5176\u4e2d\u5169\u884c\u8a0a\u606f\u544a\u8a34\u4e86\u6211\u5011\u70ba\u4f55\u51fa\u73fe\u6b64\u932f\u8aa4\u8a0a\u606f\u3002",(0,r.kt)("br",null)),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Permissions 0644 for 'ec2-apache-web-server.pem' are too open.\nIt is required that your private key files are NOT accessible by others.\n")),(0,r.kt)("p",null,"  \u539f\u4f86\u662f\u56e0\u70ba\u73fe\u5728 .pem \u6a94\u6848\u6240\u64c1\u6709\u4e4b\u6b0a\u9650\u592a\u591a\u4e86\u3002\u56e0\u6b64\u6211\u5011\u53ea\u9700\u8981\u900f\u904e chmod \u5c07\u6a94\u6848\u6b0a\u9650\u66f4\u6539\u6210 600\u5373\u53ef\u3002",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"sudo chmod 600 ec2-apache-web-server.pem"),"  "),(0,r.kt)("p",null,"  \u9019\u6642\uff0c\u518d\u6b21\u5617\u8a66\u57f7\u884c SSH \u6307\u4ee4\uff0c\u61c9\u8a72\u5373\u53ef\u6b63\u5e38\u9032\u5165\u5230 Instance \u4e4b\u4e2d\u4e86\u3002\n",(0,r.kt)("img",{alt:"ssh_to_ec2_instance",src:a(8777).Z,width:"2876",height:"1038"}),"  "),(0,r.kt)("h2",{id:"\u70ba-ec2-\u7533\u8acb\u4e00\u500b\u56fa\u5b9a-ip"},"\u70ba EC2 \u7533\u8acb\u4e00\u500b\u56fa\u5b9a IP"),(0,r.kt)("p",null,"  \u56e0\u70ba EC2 \u5728 Shut down \u91cd\u555f\u4e4b\u5f8c\uff0c\u6240\u88ab\u914d\u7f6e IP \u5c07\u6703\u8b8a\u52d5\u3002\u56e0\u6b64\u6211\u5011\u9700\u8981\u70ba\u6211\u5011\u7684 Instance \u7533\u8acb\u4e00\u500b\u56fa\u5b9a IP\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u26a0\ufe0f")," \u6ce8\u610f"),(0,r.kt)("p",{parentName:"blockquote"},"\u7533\u8acb\u5f8c\uff0c\u5305\u62ec SSH \u4ee5\u53ca\u700f\u89bd\u5668\u8f38\u5165\u4e4b IP \u8acb\u4f7f\u7528\u53d6\u5f97\u4e4b\u56fa\u5b9a IP\u3002")),(0,r.kt)("p",null,"  \u65bc AWS \u7ba1\u7406\u4e3b\u63a7\u53f0 \u5de6\u5074\u5217\u8868\u4e2d\u9078\u64c7'\u7db2\u8def\u548c\u5b89\u5168'\u5e95\u4e0b\u4e4b\u300c\u5f48\u6027IP\u300d\u3002 \u9032\u5165\u5f8c\u9078\u64c7\u53f3\u4e0a\u89d2\u4e4b\u300c\u914d\u7f6e\u5f48\u6027 IP \u5730\u5740\u300d\u6309\u9215\u3002\n",(0,r.kt)("img",{alt:"create_elastic_ip",src:a(5055).Z,width:"2876",height:"1268"})," "),(0,r.kt)("p",null,"  \u76f4\u63a5\u9ede\u64ca\u300c\u914d\u7f6e\u300d\u6309\u9215\n",(0,r.kt)("img",{alt:"create_ip",src:a(7235).Z,width:"2876",height:"1268"})," "),(0,r.kt)("p",null,"  \u6210\u529f\u5f8c\uff0c\u9ede\u64ca\u300c\u300d\u300c\u8207\u6b64\u5f48\u6027 IP \u5730\u5740\u5efa\u7acb\u95dc\u806f\u300d\u6309\u9215",(0,r.kt)("br",{parentName:"p"}),"\n","",(0,r.kt)("img",{alt:"bind_ip",src:a(3157).Z,width:"2876",height:"1268"})," "),(0,r.kt)("p",null,"  \u57f7\u884c\u500b\u9ad4\u9078\u53d6\u6211\u5011\u6240\u5efa\u7acb\u4e4b\u500b\u9ad4\u5f8c\uff0c\u9ede\u64ca\u300c\u5efa\u7acb\u95dc\u806f\u300d\u6309\u9215\n",(0,r.kt)("img",{alt:"do_bind_ip",src:a(5433).Z,width:"2876",height:"1268"})," "),(0,r.kt)("h2",{id:"\u67b6\u8a2d-apache-web-server"},"\u67b6\u8a2d Apache Web Server"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5728 EC2 Instance \u4e4b\u4e2d\u57f7\u884c\u4ee5\u4e0b\u6307\u4ee4"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"# Update Packages\nsudo apt-get update\n\n# Install Apache2\nsudo apt-get install apache2\n\n# Check if apache is running \nsudo systemctl status apache2\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u700f\u89bd\u5668\u8f38\u5165\u4e0a\u6b65\u9a5f\u8207\u6211\u5011 EC2 Instance \u95dc\u806f\u4e4b\u5f48\u6027 IP\uff0c\u67e5\u770b Apache \u9810\u8a2d\u756b\u9762\n",(0,r.kt)("img",{alt:"apache_web_index",src:a(8771).Z,width:"2876",height:"1444"}),"  "))),(0,r.kt)("h2",{id:"\u4f7f\u7528-domain-name-\u8a2a\u554f\u6211\u5011\u7684\u7db2\u9801"},"\u4f7f\u7528 Domain Name \u8a2a\u554f\u6211\u5011\u7684\u7db2\u9801"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u9019\u908a\u6211\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://my.freenom.com/clientarea.php",title:"Freenom \u514d\u8cbb Domain Name \u670d\u52d9"},"FreeNom")," \u8a3b\u518a\u514d\u8cbb\u7684 Domain Name\u3002\u8a3b\u518a\u4e26\u4e14\u767b\u5165\u5f8c\uff0c\u9ede\u64ca\u53f3\u4e0a\u89d2 Services -> Register a New Domain\n",(0,r.kt)("img",{alt:"register_free_domain",src:a(7494).Z,width:"2876",height:"1364"}),"  ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u8f38\u5165\u60f3\u8981\u7684 domain \u540d\u7a31\u5f8c\u9078\u53d6\u4e00\u500b\u514d\u8cbb\u7684\uff0c\u9019\u908a\u6211\u5011\u9078\u64c7 mycooldomain.ml",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{alt:"choose_free_domain",src:a(7159).Z,width:"2876",height:"1364"}),"  ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u9ede\u64ca CheckOut \u4e4b\u5f8c\uff0c\u5c07\u770b\u5230\u4ee5\u4e0b\u756b\u9762\u3002",(0,r.kt)("br",null),"\nUse DNS \u4e2d IP Address \u8f38\u5165\u5f48\u6027 IP\uff0cPeriod \u7576\u7136\u662f\u9078\u64c7\u514d\u8cbb\u4e2d\u6700\u9577\u4e4b\u671f\u9650\u5566!",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{alt:"setting_domain_name",src:a(3463).Z,width:"2876",height:"1284"}),"  ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6301\u7e8c\u9ede\u64ca\u78ba\u8a8d\uff0c\u5b8c\u6210\u5f8c\u7e8c\u6b65\u9a5f\u3002 \u7b49\u5f85\u6578\u5206\u9418\u5f8c\uff0c\u61c9\u8a72\u5373\u53ef\u65bc\u700f\u89bd\u5668\u4e2d\u4f7f\u7528 Domain Name \u8a2a\u554f\u6211\u5011EC2 instance\u4e0a\u7684Apache Web Server\u3002",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{alt:"domain_name_apache_web",src:a(2129).Z,width:"2876",height:"1438"}),"  "))),(0,r.kt)("h2",{id:"\u8a2d\u5b9a-ssl\u8b93\u6211\u5011\u80fd\u5920\u4f7f\u7528-https-\u8a2a\u554f\u6211\u5011\u7684\u7db2\u9801"},"\u8a2d\u5b9a SSL\uff0c\u8b93\u6211\u5011\u80fd\u5920\u4f7f\u7528 Https \u8a2a\u554f\u6211\u5011\u7684\u7db2\u9801"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728 EC2 Instance \u4e0a\u4e0b\u8f09 OpenSSL ",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"sudo apt-get install openssl"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Enable SSL module for Apache",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"sudo a2enmod ssl"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Restart Apache Web Server ",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"sudo service apache2 restart"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u7522\u51fa CSR (Certificate Signing Request)\uff0c\u5c07\u6703\u7528\u4f86\u8f38\u5165\u5230 SSL \u7ba1\u7406\u4e2d\u5fc3\u3002  "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"# \u5efa\u7acb\u4ee5\u4e0b\u8def\u5f91\nsudo mkdir /etc/apache2/ssl\nsudo mkdir /etc/apache2/ssl/private\n\n# \u9032\u5165\u6b64\u8def\u5f91\u5e95\u4e0b\ncd /etc/apache2/ssl/\n\n# \u5728\u6b64\u8def\u5f91\uff0c\u7522\u51fa CSR \u6a94\u6848\u4ee5\u53ca\u6211\u5011\u7684 Private Key (website.key)\n# \u5c07\u6703\u8a62\u554f Country Name, State, Locality Name ... \u7b49\u554f\u984c\uff0c\u7167\u8457\u8f38\u5165\u5373\u53ef\u3002\u53ef\u53c3\u8003\u4e0b\u9762\u4e4b\u9644\u5716\u3002\nsudo openssl req -new -newkey rsa:2048 -nodes -keyout website.key -out website.csr\n\n# \u900f\u904e\u4ee5\u4e0b\u6307\u4ee4\u67e5\u770b website.csr\u3002 \u5c07\u5176\u5167\u5bb9\u8907\u88fd\nsudo nano /etc/apache2/ssl/website.csr\n")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"gen_csr",src:a(8062).Z,width:"2876",height:"1030"}),"  ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u9019\u908a\u6211\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://app.zerossl.com/login?u=https%3A%2F%2Fapp.zerossl.com%2Fdashboard",title:"ZeroSSl Ssl certificate"},"zeroSsl")," \u4f86\u53d6\u5f97 SSL Certificate\u3002\u8a3b\u518a\u5e33\u865f\u4e26\u4e14\u767b\u5165\u4e4b\u5f8c\uff0c\u9078\u53d6 New Certificate \u5efa\u7acb\u65b0\u6191\u8b49\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u8f38\u5165\u6211\u5011\u5728 freenom \u53d6\u5f97\u4e4b Domain Name",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{alt:"input_domain_name",src:a(1095).Z,width:"2876",height:"1228"}),"  ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u9078\u64c7 90 \u5929\u4e4b\u6548\u671f (\u56e0\u70ba\u514d\u8cbb\u53ea\u63d0\u4f9b\u4e00\u6b2190\u5929\uff0c\u56e0\u6b64\u8981\u7279\u5225\u6ce8\u610f\u5230\u671f\u65e5)\n",(0,r.kt)("img",{alt:"input_expire_date",src:a(3063).Z,width:"2876",height:"1228"}),"  ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Disable Auto-Generate CSR\uff0c\u8cbc\u4e0a\u525b\u525b\u8907\u88fd\u51fa\u4e4b\u6211\u5011\u81ea\u7522\u7684 CSR \u6a94\u6848\u5167\u5bb9\u3002",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{alt:"csr_content",src:a(7604).Z,width:"2876",height:"1086"}),"  ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u9078\u53d6\u514d\u8cbb\u65b9\u6848\n",(0,r.kt)("img",{alt:"free_tier",src:a(3383).Z,width:"2876",height:"1432"}),"  ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u9a57\u8b49\u65b9\u5f0f\u9078\u64c7 DNS (CNAME)\n",(0,r.kt)("img",{alt:"verification_cname",src:a(7980).Z,width:"2876",height:"1432"}),"  ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u56de\u5230 Domain Name Service \u63d0\u4f9b\u7db2\u7ad9 - Freenom\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","a. \u5f9e My Domains \u4e2d\u9078\u53d6\u6211\u5011\u52a0\u5165\u4e4b Domain\uff0c\u9ede\u9078 Manage Domain -> Manage Freenom DNS\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","b. \u65b0\u589e\u4e00\u500b CNAME record\uff0c\u4e26\u4f9d\u7167\u4e0a\u4e00\u6b65\u9a5f zerossl \u63d0\u4f9b\u4e4b\u8cc7\u8a0a\u586b\u5165\u3002      "),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u26a0\ufe0f")," \u6ce8\u610f\nName\u4e2d\u586b\u5165\u4e4b\u503c\u7121\u9700\u5e36\u5165 domain \u4e4b\u90e8\u5206\u3002\n",(0,r.kt)("img",{alt:"cname_record",src:a(2363).Z,width:"2876",height:"1432"}),"  "))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u65b0\u589e\u5b8c\u6210\u5f8c\uff0c\u56de\u5230 zeroSSL \u7db2\u9801\u4e2d\u7e7c\u7e8c\u4e0b\u4e00\u6b65\u9a5f\uff0c Verify Domain\u3002",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{alt:"verify_domain",src:a(2601).Z,width:"2876",height:"1432"})," ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u9a57\u8b49\u6210\u529f\u5f8c(\u53ef\u80fd\u6703\u9700\u8981\u4e00\u9ede\u6642\u9593)\uff0czeroSSL\u5373\u6703\u63d0\u4f9b\u4e0b\u8f09 SSL \u6191\u8b49\u4e4b\u6309\u9215\u3002"),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u26a0\ufe0f")," \u6ce8\u610f\n\u4e0b\u8f09\u7684\u6a94\u6848\u4e2d\uff0c\u5305\u542b\u4e86\u5169\u500b crt \u6a94\u6848\u3002\u4f46\u56e0\u70ba\u6211\u5011\u4f7f\u7528\u4e86\u81ea\u5df1\u7522\u751f\u7684 CSR\uff0c\u56e0\u6b64\u4e0d\u6703\u6709 private Key\u6a94\u6848\u3002\n",(0,r.kt)("img",{alt:"download_certificate",src:a(6807).Z,width:"2876",height:"1432"}),"  "))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"SFTP \u9032\u5165 EC2\uff0c\u6211\u4f7f\u7528 CyberDuck \u4f5c\u70ba\u6211\u7684\u5de5\u5177\u3002(\u5982\u679c\u4e0a\u50b3\u904e\u7a0b\u4e2d\u767c\u751f Permission Denied\uff0c\u8acb\u900f\u904e chmod \u6307\u4ee4\u5c07\u8def\u5f91\u6b0a\u9650\u6253\u958b)\n",(0,r.kt)("img",{alt:"cyber_duck_sftp",src:a(332).Z,width:"1190",height:"1232"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5c07\u4e0b\u8f09\u6a94\u6848\u4e2d\u7684\u5169\u500b .crt \u6a94\u6848\u4e0a\u50b3\u81f3\u8def\u5f91 /etc/ssl \u5e95\u4e0b")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u7de8\u8f2f /etc/apache2/sites-available/default-ssl.conf\u6a94\u6848 ",(0,r.kt)("br",null),"\n\u78ba\u8a8d\u6a94\u6848\u4e4b\u4e2d\u6709\u4ee5\u4e0b\u4e4b\u5167\u5bb9"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"ServerName mycooldomain.ml\nServerAlias www.mycooldomain.ml\nDocumentRoot /var/www/html\nSSLEngine on\nSSLCertificateFile  /etc/ssl/certificate.crt\nSSLCertificateKeyFile /etc/apache2/ssl/website.key\nSSLCertificateChainFile /etc/ssl/ca_bundle.crt\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Activate SSL virtual Host ",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"sudo a2ensite default-ssl.conf"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u518d\u78ba\u8a8d\u4e00\u6b21 Apache Module: mod_ssl \u5df2\u7d93\u4e0b\u8f09\u904e\n",(0,r.kt)("inlineCode",{parentName:"p"},"sudo a2enmod ssl"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Restart Apache web server ",(0,r.kt)("br",null),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"sudo service apache2 restart")))),(0,r.kt)("h2",{id:"\u4fee\u6539-indexhtml-\u4e26\u4e0b\u8f09-app"},"\u4fee\u6539 index.html \u4e26\u4e0b\u8f09 App"),(0,r.kt)("p",null,"  \u5b8c\u6210\u4ee5\u4e0a\u6b65\u9a5f\u5f8c\uff0c\u73fe\u5728\u6211\u5011\u61c9\u8a72\u5df2\u7d93\u53ef\u4ee5\u900f\u904e https \u9023\u7dda\u5230\u6211\u5011\u6240\u62ff\u5230\u7684 domain name \u4e86\uff01"),(0,r.kt)("p",null,"  \u6700\u5f8c\uff0c\u6211\u5011\u5c07\u66f4\u6539 index.html \u7684\u5167\u5bb9\uff0c\u8b93\u6211\u5011\u80fd\u5920\u5f9e\u7db2\u9801\u4e0a\u4e0b\u8f09 app (iOs, Android)\u3002\u5c07\u7db2\u9801\u4f5c\u70ba App Store \u4f86\u4e0b\u8f09\u958b\u767c\u7684 App\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u7de8\u8f2f\u8def\u5f91 /var/www/html \u4e0b\u7684 index.html \u6a94\u6848\uff0c\u53ef\u53c3\u8003 ",(0,r.kt)("a",{parentName:"li",href:"./index.html"},"index.html")),(0,r.kt)("li",{parentName:"ol"},"\u5c07 ios ipa\u6a94\u6848\uff0candroid apk\u6a94\u6848\u4f9d\u7167 index.html\u6240\u8a2d\u5b9a\u4e4b\u8def\u5f91\u653e\u7f6e\u597d\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u91cd\u555f Apache Web Server \u5f8c\uff0c\u5373\u53ef\u900f\u904e\u7db2\u9801\u4e0b\u8f09 App\u3002\n",(0,r.kt)("img",{alt:"app_download_pages",src:a(9553).Z,width:"2878",height:"618"}))),(0,r.kt)("br",null),(0,r.kt)("h2",{id:"\u53c3\u8003\u6587\u7ae0"},"\u53c3\u8003\u6587\u7ae0"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://www.geeksforgeeks.org/how-to-set-up-apache-web-server-in-aws-ec2-linux-ubuntu-instance/"},"How to Set Up Apache Web Server in AWS EC2 Linux (Ubuntu) Instance"),"  "),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://www.domainsatretail.com/blog/security/simplest-way-use-ssl-certificates-amazon-ec2-ubuntu-server/"},"Simplest way to Use our SSL Certificates with Amazon EC2 Ubuntu Server")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://help.zerossl.com/hc/en-us/articles/360058295854-Installing-SSL-Certificate-on-Apache"},"Installing SSL Certificate on Apache")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"http://edtechchris.com/2020/02/11/generate-csr-with-openssl-on-ubuntu/"},"Generate-csr-with-openssl-on-ubuntu")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://financetrainingcourse.com/education/2016/06/ssl-certificate-install-aws-guide-apache-ubuntu-14-04/"},"ssl-certificate-install-aws-guide-apache-ubuntu"))))}m.isMDXComponent=!0},8771:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/apache_http_index-8599b36c76b1a57e4043311c328fb134.png"},3157:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/associate_ip_address-775d0b9fd40afa0c560bca16ae11bebb.png"},7159:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/choose_free_domain_name-d560ed2264cc96c7771ebc708da4fbab.png"},8498:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/choose_ubuntu_image-1d5085e30689bd5f2c287c886fb63e85.png"},2363:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cname_record-2433dd96f8006ffd2d2c199a7f551dc2.png"},6247:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/jpeg;base64,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RWrGUTOGiTYfQQxlzqjdxSNyOJqA1kgu4gOPj7TuB4L6w3CKWMOmhqX5XtYC/fhzcrBlY0OdewA8L8+ap0GGUsuMx01XFFuYMMjNNDfNBmLvyhjze1bXjyXzXUuCRwVLBUSfR6fEGPlgbd0b5bG1PEPtAnUgHwU4RlfIsIp3WLXF0e83gYJLxZ75swA/xa2va+tl7NwiERwR2OWCRr4+8bhzb2ufH2iq52a4ZLEyrldCKeOpnEkNMHA7lmW2oGjS7jYcFclWeJTAiIoSIiICIiAiIgIiIILbTAX1tKads26DntLjlzXDdcvHnb4Lz2I2Ybh9MYRJnc6Qvc7La97AC3kArCinM4wYVPb7YtuIth/K7t0Rd3sua7XDVp9QCqx2j4W+mwKnp3y7wxTxtDrWu0Zsot5DRamo/HMFp6uIRVEedgcHWuRqOB06qYtjCJhkGy+wM9bQRSR17o2PdIHROzFndcRcAG2vmtH2H2Khw5ry1xklksHvItoODWjwCm8HwqGmhbDAzLG0uIFydSbnUrtU2vMkRhmuM9lrnVbqmjrdwXvL7ZTdrne1kLSNDroV5Yp2Sb4sca97pMp3r5Gl5e6+hGvdAGllp6KN8m2EFtBsrBWUrKee/wCTa3I9ujmuDbZh15LPv7H6lri2PEQIyde68EjzANiteRItMGIU9mwjG4U/DmTus9wcZC0Xvna42A/Rsu/YfZj+j4Hw73eZpS++XLa4At9ysKKN0pwomz/Z6abEXVv0kOzPmdkyW+sJPG/hdde2+wEFeRKHmKYC2cC4cBwDx5cwrgindOcoxDJv7McTcN3Ji14uFrynTlYlaPs5hIpKWGma8uETMuYgAnxvYdVJIk2mSIwIiKqRERAREQEREBV/EdiMMnlfNNRRvkebucS+5Nra2dyAVgRTE4EBiWxmHTxQwyUrckAtFlLmuYOTXA3t6p/UvDdxHTmjYYonl7W3do4ixeSDcnzKn0TMmIR2D4FS0oeKaER7wgus5xva9vaJ5lSKIoBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREH/2Q=="},7235:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create_elastic_ip-075879983f9d969e53f90445d6f9e70a.png"},7604:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/csr_content-754adf7c0490ce1be103ed05ef81c993.png"},332:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cyber_duck_sftp-dda9f4b45d99ddcb79d2e864076606fc.png"},5433:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/do_bind_ip_address-27164042aec6eb8bfe1a77c6b36286c0.png"},6807:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/download_certificate-406e28d3d79bc2ac2f3e1a8cb6512fdb.png"},9553:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/download_pages-1b590bbc4a02cd2e49055603956ae2b6.png"},4977:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ec2_console-18af14f815b53ab3edd5f9e0c47d9459.png"},337:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ec2_detail-52a16c87ac6e1b450e735cdb9c8de12d.png"},2901:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ec2_name-9130c7a803be773ff7df24646fbac84b.png"},6825:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/enter_management_console-bca7d6ecff17da1acf9418dd940a80a8.png"},3383:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/free_tier-ac189362d33e42e20388cb59000459ac.png"},7494:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/freenom_register_domain-4dcb9367bf0155ed78b057c7dd70b753.png"},8062:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/gen_csr-5abd82e7f0612103b2372b1a13104456.png"},1095:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/input_domain_name-79a7f7be703cd707baadd0b71b34bfc3.png"},3063:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/input_expire_date-3f57c0dc8bf36fbbee24f478577f5fba.png"},7756:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/instance_created-6b57eedaf3ba07be2b8b0b06ed72a6d9.png"},2129:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/my_domain_apache_web_index-6b1f5874af1ea0008f2d5feac2ca83f0.png"},5055:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/new_elastic_ip-f247e3292e1d04db689ffbed73c7517e.png"},7302:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/new_instance-83a160cfe8f939c429da80bbca38d937.png"},6711:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pem_key-acdc6d4998575af276aa423ff4fd09bb.png"},5569:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/pem_permission-09bbe3a656f090f2476acbab57bdd321.png"},1406:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/search_ubuntu_image-e66f5cc1b7afaaa91810d09b79db77b4.png"},1882:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/security_group-138e82ba32198fdf57d5d730de4c04c1.png"},3463:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/setting_domain_name-1731d19891a5f8f516ff30ec80050ec7.png"},8777:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ssh_instance-828663ce25b4f9657741a6d6d06f9948.png"},4994:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/t2_micro_instance-c9e06fb7dfa0f7faec2d44f4a6fa8d85.png"},7980:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/verification_cname-6ea4785c9e159609af8690da3eca10a3.png"},2601:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/verify_domain-4f6b06a87f7546860efa24de959b761e.png"}}]);