---
title: 面試問題整理(二)-Java相關
keywords: [java, interview, junior, senior, engineer, developer, coding]
description: java interview questions for junior to senior developer
tags: [Java, Programming, Backend, 面試]
last_update:
  date: 7/01/2021
  author: Gary Liao
---

上一篇把面試中被問到跟程式本身概念有關的問題做了整理。這篇則是跟Java和物件導向程式本身問題的整理。

![httpCacheImage](./images/Java封面.jpeg)  
Image Source : [What should Java developers learn in 2021?](https://mobilemonitoringsolutions.com/wp-content/uploads/2021/03/8667507462).

<!--truncate-->


## Java相關

### Overload && Override
`Overload`多載，允許相同的方法但不同的參數型別和數量。  
`Override`覆寫，讓子類別處理方式能夠不同於父類別或者介面。

:::tip 提示   
兩者皆為實踐多型之技術之一。  
:::  

### Abstract class 是什麼

前一篇提到，物件導向程式的其中一個特點**抽象**，讓我們可以隱藏實作細節，只提供功能特點。而Java中，有`interface`和`abstract class`兩種方式可以幫助我們達到抽象。

`abstract class`是個在類別宣告上加上**abstract**的類，可允許選擇宣告abstract methods(沒有實作，只定義了名稱、參數以及回傳型別)而不實作，並且允許繼承其類別之子類別不實作methods(繼續維持abstract method)。但只有完成所有abstract methods實作的子類別才能夠被實例化。


...| abstract class | interface  
:------   | :-----------: | :--------:
Allow methods | abstract & non-abstract |  abstract
繼承使用字眼 | extends | implements
可繼承 | 其他Class，並實作多個interfaces | 其他interface

#### 什麼時候用abstract class，什麼時候用interface

* 選擇使用interface時機  
	1. 概念是許多不相關類別皆會擁有的。例如: fly會飛這件事，並不是所有動物都會飛，
	而且也有其他非動物的東西會飛。因此將fly獨立宣告成為一個interface提供會飛的物件去繼承。  
	2. 呼應上一點，宣告時不在乎最終會被誰去實作，只在乎行為本身。  
	3. 當遇到問題是 **A能夠做B(A is capable of B)**

* 選擇使用abstract class時機  
	1. 要表達的是一個概念，並且這個概念底下某些行為無法在當下決定實作方式，但已經知道會被其他methods呼叫到。  
	2. 如果各個實作，會用到共同的一段程式。  
	3. 當遇到的問題是 **A為B(A is a B)**。

~~~
public abstract class MailSender {

    /**
     * MailBuilder helps form a complete email for us
     * @return MailBuilder instance
     */
    protected abstract MailBuilder getMailBuilder();

    /**
     * Get Mail Server settings
     * @return Property with mail server settings
     */
    protected abstract Properties getMailProps(boolean needAuth);

    /**
     * Send mail without any authentication
     * @param mailPojo: Mail Info's
     */
    public void sendMail(MailPojo mailPojo) {
        // connect to Mail Server
        Session session = Session.getInstance(getMailProps(false));
        try{
            MimeMessage message = getMailBuilder().formMailWith(session, mailPojo.getMailSendFrom(), mailPojo.getMailSendTo(), mailPojo.getMailTopic(), mailPojo.getMailContent());
            // send Mail
            Transport.send(message);
        } catch ( Exception e ) {
            log.error("## Send mail failed : ", e);
        }
    }

}
~~~
這段程式是用javax.mail來完成寄信。因為Server Host有許多(Google、Outlook...等)所以個別的參數設定不同，所以將參數設定的部分交給實作決定。但寄信時候所需的步驟皆相同，因此直接在abstract class裡面完成實作即可。


###  Race Condition

發生在多個thread存取同個資源導致，可大致分為兩種發生情形。  
第一種為 **Read-Modify-Write**。  

	int sum = 0;	 
	int add(int val) {		
		this.sum = this.sum + val;  	
	}  	
	
當多個thread都在讀取this.sum時候發生context switch, 此時所得到值皆為0。
這時候各自加上了要加上的值val後，再將值寫入this.sum。結果會是最後一個執行寫入操作的thread所擁有之this.sum+val的值。  
因此，add函數在此即為一個 *critical section 臨界區間-存取共用資源的程式片段*，無法同時被多個執行序存取，因此發生了 *Race condition*。

第二種為 **Check-then-Act**。

**檢查狀態**以及狀態成立時執行之**操作**中間存在著時間差以及可能發生context switch導致。舉例來說List如果有限制其大小，當insert後大小超過最大容量，會發生錯誤。

	1. A線程檢查List大小，發現現在List大小為Max-1。
	2. 此時發生context switch。
	3. B線程檢查List大小，發現現在List大小為Max-1。
	4. B線程執行操作，insert了一筆資料到List裡面。
	5. 此時List大小為Max，已不能再做任何insert操作。
	6. 此時發生context switch，A會執行insert，因其剛剛已完成檢查的部分，不會知道其實List的大小已經發生改變。

解決Java Race conditions的方法就是在critical section加上 **Syncronized** 或者 **lock**，確保同時間，只會有單個線程執行critical section內的程式。


### ORM 

ORM在維基百科的一段話
> Object–relational mapping in computer science is a programming technique for converting data between incompatible type systems using object-oriented programming languages  

ORM讓開發者能夠使用自己熟悉的物件導向程式操作資料庫，帶來的好處有：  

* 因是對物件操作，非透過Raw Sql，可防止Sql Injection。
* 承第一點，幫助開發者減少Sql的撰寫。
* 開發者能夠像撰寫其他部分程式，專注在程式本身即可。
* 不依賴於使用的資料庫種類，因此在轉換其他資料庫時較簡單方便。

相對的，ORM帶來的缺點有:

* 學習曲線較高
* 配置mapping的關西，如一對一、一對多...等等，需要花一點時間。
* 對於太複雜的語句，ORM沒那麼方便。
* 調教效能時，還是不比直接調整Raw Sql較方便以及有效率。

:::note  
Hibernate與MyBatis  
Hibernate是能夠幫助我們實現ORM的一個持久化框架，將Java的類別與資料庫的資料表對應起來。
而MyBatis也是一個持久化框架，但並非ORM。因為它沒有如同Hibernate將Java類別與資料表對應，而是將Java methods對應Sql語法、Sql結果對應Java POJO。  
:::  



## 延伸閱讀

1. [依賴倒置原則 (Dependency-Inversion Principle, DIP)](https://notfalse.net/1/dip)


## 參考網址

1. [Difference between Abstract Class and Interface in Java](https://www.geeksforgeeks.org/difference-between-abstract-class-and-interface-in-java/)  
2. [Using an Interface vs. Abstract Class in Java](https://www.baeldung.com/java-interface-vs-abstract-class)  
3. [深入理解abstract class和interface](https://jjnnykimo.pixnet.net/blog/post/21585257)  
4. [Race Conditions and Critical Sections](http://tutorials.jenkov.com/java-concurrency/race-conditions-and-critical-sections.html)  
5. [Java多執行序的基本知識](https://popcornylu.gitbooks.io/java_multithread/content/)  
6. [What is an ORM and Why You Should Use it](https://blog.bitsrc.io/what-is-an-orm-and-why-you-should-use-it-b2b6f75f5e2a)




