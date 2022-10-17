---
title: 面試問題整理(三)-程式設計與其他
keywords: [java, interview, junior, senior, engineer, developer, coding]
description: java interview questions for junior to senior developer
tags: [Java, Programming, Backend, 面試]
last_update:
  date: 7/01/2021
  author: Gary Liao
---

這是面試所被問之問題文章最後一篇，並且也會在文章最後分享一下自己這次面試的一些心得和想法。那就讓我們繼續看下去吧！

![DesignPatternImage](./images/design-patterns-logo-2.png)  

Image Source : [Design Patterns](https://bgasparotto.com/design-patterns).

<!--truncate-->


<details open>
<summary>Spring相關</summary>

* AOP 遵守了 Solid 的哪幾個 Principle
  
  在面試的時候，因為自己對於 SOLID 還沒有太多深入的認識。 因此並沒有回答出來。<br/>  面試完後對 SOLID 進行更多的了解後，我認為 aop 遵守了 SOLID 的 Single Responsibility 單一原則。<br/> (如讀者認為亦遵守了其他的 Principle 還請麻煩提出讓我知道！ Thanks!) <br/> 基本上所有 Design Pattern 都是盡可能地讓我們程式碼中的每個類別、函示專注在自己本身的任務上。 AOP 讓我們能夠把本身和類別、函示不相關的任務 (Ex: Logging, Metrics) 從其中抽出，讓原類別、函式以及抽出後之 AOP 介面都遵守單一功能原則，專注在各自任務身上。
  
* How Aop implements @Transactional

  Spring Aop 會為所有設定需要使用切面之類別、函式創建 Proxy, 因而得以在目標類別、函式前後加上程式碼。 <br/> 因此 Spring 會位標註了 @Transactional 的所有類別創建 Proxy, 並在函式前後加上我們資料庫所謂的 start transaction, commit, rollback等交易語句。

</details>


<details>
<summary>資料庫相關</summary>

* 正規化
*  有調教性能經驗？
*  Index建置經驗

</details>


<details>
<summary>資料結構</summary>

* Stack vs Queue
  
  兩種資料結構。 <br/>
  儲存在Queue之資料是先進先出 First In First Out (FIFO)。在現實生活中最好的例子就是排隊，先排隊的人就會先被服務。

  儲存在 Stack 之資料為先進後出 Last In First Out (LIFO)。 在現實生活中最好的例子就是裝箱，最後裝進箱子的書本、東西在拿出時一定是先拿出的。


</details>



## 心得

這是面試其實遇到蠻多面試官都有或多或少問到和 ***資料庫*** 相關概念、知識的題目，但因為自己對於資料庫運作觀念較少因此都沒有在這些題目能回答太多內容。

另外，因為這次找的工作大多在職缺基本上都註明使用 SpringBoot，因此基本上面試官都會問相關概念。

因此這次面試完找到工作後，自己認為在第一份、第二份工作(1~2年經驗)之面試，可以多準備以下部分。 <br/>
(因為面試官也不會太期待面試者有多資深的經驗？！ )

* 資料庫概論
* Java 基本概念
* SpringBoot 基本原理

而自己給自己在下份工作以及未來需要準備的知識、技能則為

* 資料庫原理、基本 Index 建置、正規化
* 撰寫測試之習慣以及能力
* 雲端服務 (Aws, Gcp, Azure...) 
* 持續往下扎根 Java, Spring框架相關知識、原理。
* 開放心態，持續學習各方面知識。



## 延伸閱讀

1. [依賴倒置原則 (Dependency-Inversion Principle, DIP)](https://notfalse.net/1/dip)


## 參考網址

1. [Difference between Abstract Class and Interface in Java](https://www.geeksforgeeks.org/difference-between-abstract-class-and-interface-in-java/)  
2. [Using an Interface vs. Abstract Class in Java](https://www.baeldung.com/java-interface-vs-abstract-class)  
3. [深入理解abstract class和interface](https://jjnnykimo.pixnet.net/blog/post/21585257)  
4. [Race Conditions and Critical Sections](http://tutorials.jenkov.com/java-concurrency/race-conditions-and-critical-sections.html)  
5. [Java多執行序的基本知識](https://popcornylu.gitbooks.io/java_multithread/content/)  




