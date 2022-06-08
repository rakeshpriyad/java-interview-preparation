You are here : [Home](http://www.javamadesoeasy.com/) / [Core Java Tutorials](http://www.javamadesoeasy.com/2015/04/core-java-tutorial.html) / [Data structures](http://www.javamadesoeasy.com/p/data-structures.html) / [Collection framework](http://www.javamadesoeasy.com/2015/05/collection-framework-tutorial-in-java.html)  
  

Contents of page :

-   7.1) put method - worst Case complexity >
    
-   7.2) put method - best Case complexity >
    
-   7.3) get method - worst Case complexity >
    
-   7.4) get method - best Case complexity >
    

1) Custom HashMap in java >

![](https://lh4.googleusercontent.com/-AQLOpibTZS3LYBQ43Jphuz5SKIGnpKI1tKWRoCg1enUgpgWuo-NSxxwinQf-JLLwcphdAqy_3a6Ko0MiAzC6C3DKVBcEoc2Kf7xEwxiL_JjdvDBcFrqM_xVIXCqZ2_f8zWMHyI)

In this tutorial we will learn how to create and implement own/custom [HashMap](http://www.javamadesoeasy.com/2015/04/hashmap-in-java.html) in java with full working source code.

This is very important and trending topic in java. In this post i will be explaining HashMap custom implementation in lots of detail with diagrams which will help you in visualizing the HashMap implementation. This is must prepare topic for interview and from knowledge point of view as well.

I will be explaining how we will put and get key-value pair in HashMap by overriding-

\>equals method - helps in checking equality of entry objects.

\>hashCode method - helps in finding bucket’s index on which data will be stored.

2) Entry<K,V>

We store key-value pair by using Entry<K,V>

Entry contains

-   K key,
    
-   V value and
    
-   Entry<K,V> next  (i.e. next entry on that location of bucket).
    

<table><colgroup><col width="*"></colgroup><tbody><tr><td><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>static</span><span> </span><span>class</span><span> Entry&lt;K, V&gt; {</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>K </span><span>key</span><span>;</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>V </span><span>value</span><span>;</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>Entry&lt;K,V&gt; </span><span>next</span><span>;</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>public</span><span> Entry(K key, V value, Entry&lt;K,V&gt; next){</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>this</span><span>.</span><span>key</span><span> = key;</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>this</span><span>.</span><span>value</span><span> = value;</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>this</span><span>.</span><span>next</span><span> = next;</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p></td></tr></tbody></table>

3) Putting 5 key-value pairs in own/custom HashMap (step-by-step) in java\>

I will explain you the whole concept of HashMap by putting 5 key-value pairs in HashMap.

Initially, we have bucket of capacity=4. (all indexes of bucket i.e. 0,1,2,3 are pointing to null)

![](https://lh4.googleusercontent.com/8lyMKGCEcq93Kru2vldmJGMXlG5yLs6B6c4pgX-9dHq3GJdz0grxkdpQzF9j3Nwd61P7wWCjJ36LrUKld3t7ycw2yUXEmBZJqqwbFU9gSU5FbWgkYRRN6CzRQzL92PaTNwieyqk)

Let’s put first key-value pair in HashMap-

Key=21, value=12

newEntry Object will be formed like this >![](https://lh3.googleusercontent.com/jVdkgrbzuY9lsRPqptKoBc6sza4njvI1K-iX5cJDm5OZCsERLVYfpyjbU-ubVcOC3F51wvDjuqrk-AABj_ewEd7gdoroqUwAJQUklX8JdpKZzcU2ZPRNwgERODVwEQC3FIQ3xlU)

We will calculate hash by using our hash(K key) method \- in this case it returns

key/capacity= 21%4= 1.

So, 1 will be the index of bucket on which newEntry object will be stored.

We will go to 1st index as it is pointing to null we will put our newEntry object there.

At completion of this step, our HashMap will look like this-

![](https://lh4.googleusercontent.com/P6LVwuqM6ijKbodSbWZEzC0k5XhxnW7HsQoJSsA0F8woFImq3PLcQpp5IX9miH-JmBB9oAkcW7he8xRvXjLpERxazgHeeoUKImqIJGg-2FFUzibGrloxbfD51dBOH5F1R5bEb9k)

Let’s put second key-value pair in HashMap-

Key=25, value=121

newEntry Object will be formed like this >![](https://lh3.googleusercontent.com/_GmkQHQWCrmdL0kW8-1gjCoYT-xcDNEAS2737UnGZcXjUL5Xmmei4E9guBo1kpZNMuwlPnBBC5bBV67ZvPbuqyyWFn25eStEfPL4Pv1pVTrIokZaYdFNmWHNlJkynpz64JvSdDc)

We will calculate hash by using our hash(K key) method - in this case it returns

key/capacity= 25%4= 1.

So, 1 will be the index of bucket on which newEntry object will be stored.

We will go to 1st index, it contains entry with key=21, we will compare two keys(i.e. compare 21 with 25 by using equals method), as two keys are different we check whether entry with key=21’s next is null or not, if next is null we will put our newEntry object on next.

At completion of this step our HashMap will look like this-

![](https://lh6.googleusercontent.com/4cdgu4nNG5my_s6UyE-s_HvdP56KGwIeB22nRz44HK3EvYUV5MbRRd__DLbPrBo5CUQBaNS0CZwFR3ebFRKKUbnAVVDitfm9su1p3SgpsVon-8ODoglBDiWzzBE3PE7kwHBbdY4)

Let’s put third key-value pair in HashMap-

Key=30, value=151

newEntry Object will be formed like this >![](https://lh3.googleusercontent.com/jmah6VSBF3-4shcqBTB_PuV9g72dtpZ95MC_U_BfOIb5-KQ8N-jQK5m8lJTYvAojCXtrbNa4ZwIxhivv7XK5vKwz6VXDjnYzfGrPxaU9CWl7KtriINtEE1nkFoM0xt0XRtCU75c)

We will calculate hash by using our hash(K key) method \- in this case it returns

key/capacity= 30%4= 2.

So, 2 will be the index of bucket on which newEntry object will be stored.

We will go to 2nd  index as it is pointing to null we will put our newEntry object there.

At completion of this step, our HashMap will look like this-

![](https://lh3.googleusercontent.com/zk6mhOnvxUDrEnpijxC6AhwkWIMP0pUx5IwHIzuhEWGiwkuaWTEfsQH43ULs_MeAVB5DdjZzkj2QOyoS5flv1drWFzStN3-F-iCOADvoUXfAMbk5rFS2-ZhE43htmimWjgsP5FM)

Let’s put fourth key-value pair in HashMap-

Key=33, value=15

Entry Object will be formed like this >![](https://lh6.googleusercontent.com/cWSX64vRPGg-hN3Ys5hzIBxCEYlQq38N9oNmMSQiF7_eY6j-phfqTLyf1rgNHEgFj8kgz80odH7wC-PVKlp2eXk_MiUXPz0ZAojgVuaIhScuq2sTWwYY_KBXfxKL9ZMdPJxlNdA)

We will calculate hash by using our hash(K key) method - in this case it returns

key/capacity= 33%4= 1,

So, 1 will be the index of bucket on which newEntry object will be stored.

We will go to 1st index -

\>it contains entry with key=21, we will compare two keys (i.e. compare 21 with 33 by using equals method, as two keys are different,  proceed to next  of entry with key=21 (proceed only if next is not null).

\>now, next contains entry with key=25, we will compare two keys (i.e. compare 25 with 33 by using equals method, as two keys are different,  now next of entry with key=25 is pointing to null so we won’t proceed further, we will put our newEntry object on next.

At completion of this step our HashMap will look like this-

![](https://lh3.googleusercontent.com/rq7Sv1x4BmtEwlJbjt68hVdzdysuP5N6LOcPOJujEGGUqD3m-yhxGLjwCR0lg8FPmJSoUcgKmtjAkOatnSxyyL6IJJpNGDmuGE0cQ-xiddPrZLs8rEwdD7qW-5m2qisJKmGYRLQ)

Let’s put fifth key-value pair in HashMap-

Key=35, value=89

Repeat above mentioned steps.

At completion of this step our HashMap will look like this-

![](https://lh3.googleusercontent.com/I-_G3RhVkPHgWuCwdEY-FKvz9GwHlKjJ46Tf9CZqAxSdoFbXbzHmiTCdXahooYk5ObDZE259VTguSrox_L8KwW5ezvduRLclnRMc1pomPGcxJI-SIqaHx1mtUGOVze3PdOVz2Bg)

4) Methods used in custom HashMap in java >

<table><colgroup><col width="*"><col width="*"></colgroup><tbody><tr><td><p><span>public void </span><span>put</span><span>(K newKey, V data)</span></p></td><td><p><span>-Method allows you put key-value pair in HashMap</span></p><p><span>-If the map already contains a mapping for the key, the old value is replaced.</span></p><p><span>-provide complete functionality how to override equals method.</span></p><p><span>-provide complete functionality how to override hashCode method.</span></p></td></tr><tr><td><p><span>public V </span><span>get</span><span>(K key)</span></p></td><td><p><span>Method returns value corresponding to key.</span></p></td></tr><tr><td><p><span>public boolean </span><span>remove</span><span>(K deleteKey)</span></p></td><td><p><span>Method removes key-value pair from HashMapCustom.</span></p></td></tr><tr><td><p><span>public void </span><span>display</span><span>()</span></p></td><td><p><span>-Method displays all key-value pairs present in HashMapCustom.,</span></p><p><span>-insertion order is not guaranteed, for maintaining insertion order refer </span><a href="http://www.javamadesoeasy.com/2015/02/linkedhashmap-custom-implementation.html"><span>LinkedHashMapCustom</span></a><span>.</span></p></td></tr><tr><td><p><span>private int </span><span>hash</span><span>(K key)</span></p></td><td><p><span>-Method implements hashing functionality, which helps in finding the appropriate bucket location to store our data.</span></p><p><span>-This is very important method, as performance of HashMapCustom is very much dependent on &nbsp;this method's implementation.</span></p></td></tr></tbody></table>

5) What will happen if map already contains mapping for key?

If the map already contains a mapping for the key, the old value is replaced.

6) Full Program/SourceCode for implementing custom HashMap in java >

<table><colgroup><col width="719"></colgroup><tbody><tr><td><p><span>package</span><span> com.ankit;</span></p><p><span></span><span>/**</span></p><div dir="ltr"><p><span>* </span><span>@author</span><span> AnkitMittal, <a href="http://javamadesoeasy.com/" rel="nofollow"><span>JavaMadeSoEasy</span><span>.</span><span>com</span></a></span></p></div><p><span>* Copyright (c), AnkitMittal . All Contents are copyrighted and must not be</span></p><p><span>* reproduced in any form.</span></p><p><span>* This class provides custom implementation of HashMap(without using java api's)</span><span>-</span></p><p><span>* which allows us to store data in key</span><span>-</span><span>value pair form.</span></p><p><span>* insertion order of key</span><span>-</span><span>value pairs is not maintained.</span></p><p><span>* </span><span>@param</span><span> </span><span>&lt;K&gt;</span></p><p><span>* </span><span>@param</span><span> </span><span>&lt;V&gt;</span></p><p><span>*/</span></p><p><span>class</span><span> </span><span>HashMapCustom</span><span>&lt;K, V&gt; {</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span></span><span>private</span><span> Entry&lt;K,V&gt;[] </span><span>table</span><span>; &nbsp;</span><span><span> </span></span><span>//Array of Entry.</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span></span><span>private</span><span> </span><span>int</span><span> </span><span>capacity</span><span>= 4; &nbsp;</span><span>//Initial capacity of HashMap</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span></span><span>static</span><span> </span><span>class</span><span> Entry&lt;K, V&gt;</span><span> {</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>K </span><span>key</span><span>;</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>V </span><span>value</span><span>;</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>Entry&lt;K,V&gt; </span><span>next</span><span>;</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>public</span><span> Entry(K key, V value, Entry&lt;K,V&gt; next){</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>this</span><span>.</span><span>key</span><span> = key;</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>this</span><span>.</span><span>value</span><span> = value;</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>this</span><span>.</span><span>next</span><span> = next;</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span><span></span></span><span>}</span></p><p><span>&nbsp;&nbsp;&nbsp;</span><span>@SuppressWarnings</span><span>(</span><span>"unchecked"</span><span>)</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>public</span><span> HashMapCustom(){</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>table</span><span> = </span><span>new</span><span> Entry[</span><span>capacity</span><span>];</span></p><p><span>&nbsp;&nbsp;&nbsp;}</span></p><p><span>&nbsp;&nbsp;&nbsp;</span><span>/**</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;* Method allows you put key</span><span>-</span><span>value pair in HashMapCustom.</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;* If the map already contains a mapping for the key, the old value is replaced.</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;* Note: method does not allows you to put null key though it allows null values.</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;* Implementation allows you to put custom objects as a key as well.</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;* Key Features: implementation provides you with following features:</span><span>-</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;* &nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>&gt;provide complete functionality how to override equals method.</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;* &nbsp;&gt;provide complete functionality how to override hashCode method.</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;* </span><span>@param</span><span> newKey</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;* </span><span>@param</span><span> data</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;*/</span></p><p><span>&nbsp;&nbsp;&nbsp;</span><span>public</span><span> </span><span>void</span><span> put(K newKey, V data)</span><span>{</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>if</span><span>(newKey==</span><span>null</span><span>)</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>return</span><span>; &nbsp;&nbsp;</span><span><span> </span></span><span>//does not allow to store null.</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//calculate hash of key.</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>int</span><span> hash=hash(newKey);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//create new entry.</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Entry&lt;K,V&gt; newEntry = </span><span>new</span><span> Entry&lt;K,V&gt;(newKey, data, </span><span>null</span><span>);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//if table location does not contain any entry, store entry there.</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>if</span><span>(</span><span>table</span><span>[hash] == </span><span>null</span><span>){</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>table</span><span>[hash] = newEntry;</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span><span>else</span><span>{</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>Entry&lt;K,V&gt; previous = </span><span>null</span><span>;</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>Entry&lt;K,V&gt; current = </span><span>table</span><span>[hash];</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>while</span><span>(current != </span><span>null</span><span>){</span><span><span> </span></span><span>//we have reached last entry of bucket.</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>&nbsp;</span><span>if</span><span>(current.</span><span>key</span><span>.equals(newKey)){ &nbsp;&nbsp;</span><span><span> </span></span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span></span></span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>if</span><span>(previous==</span><span>null</span><span>){ &nbsp;</span><span>//node has to be insert on first of bucket.</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>newEntry.</span><span>next</span><span>=current.</span><span>next</span><span>;</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>table</span><span>[hash]=newEntry;</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>return</span><span>;</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>else</span><span>{</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>newEntry.</span><span>next</span><span>=current.</span><span>next</span><span>;</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>previous.</span><span>next</span><span>=newEntry;</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>return</span><span>;</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>&nbsp;}</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>&nbsp;previous=current;</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>current = current.</span><span>next</span><span>;</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>previous.</span><span>next</span><span> = newEntry;</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></p><p><span>&nbsp;&nbsp;&nbsp;}</span></p><p><span>&nbsp;&nbsp;&nbsp;</span><span>/**</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;* Method returns value corresponding to key.</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;* </span><span>@param</span><span> key</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;*/</span></p><p><span>&nbsp;&nbsp;&nbsp;</span><span>public</span><span> V get(K key)</span><span>{</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>int</span><span> hash = hash(key);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>if</span><span>(</span><span>table</span><span>[hash] == </span><span>null</span><span>){</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>return</span><span> </span><span>null</span><span>;</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span><span>else</span><span>{</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>Entry&lt;K,V&gt; temp = </span><span>table</span><span>[hash];</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>while</span><span>(temp!= </span><span>null</span><span>){</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>if</span><span>(temp.</span><span>key</span><span>.equals(key))</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>return</span><span> temp.</span><span>value</span><span>;</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>temp = temp.</span><span>next</span><span>; </span><span>//return value corresponding to key.</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span></span></span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>return</span><span> </span><span>null</span><span>; &nbsp;&nbsp;</span><span>//returns null if key is not found.</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></p><p><span>&nbsp;&nbsp;&nbsp;}</span></p><p><span>&nbsp;&nbsp;&nbsp;</span><span>/**</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;* Method removes key</span><span>-</span><span>value pair from HashMapCustom.</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;* </span><span>@param</span><span> key</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;*/</span></p><p><span>&nbsp;&nbsp;&nbsp;</span><span>public</span><span> </span><span>boolean</span><span> remove(K deleteKey)</span><span>{</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>int</span><span> hash=hash(deleteKey);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>if</span><span>(</span><span>table</span><span>[hash] == </span><span>null</span><span>){</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span></span><span>return</span><span> </span><span>false</span><span>;</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>}</span><span>else</span><span>{</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span></span><span><span></span></span><span>Entry&lt;K,V&gt; previous = </span><span>null</span><span>;</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span></span><span><span></span></span><span>Entry&lt;K,V&gt; current = </span><span>table</span><span>[hash];</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span></span><span><span></span></span><span>while</span><span>(current != </span><span>null</span><span>){</span><span><span> </span></span><span>//we have reached last entry node of bucket.</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span></span><span>if</span><span>(current.</span><span>key</span><span>.equals(deleteKey)){ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span></span></span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>if</span><span>(previous==</span><span>null</span><span>){ &nbsp;</span><span>//delete first entry node.</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>table</span><span>[hash]=</span><span>table</span><span>[hash].</span><span>next</span><span>;</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>return</span><span> </span><span>true</span><span>;</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>else</span><span>{</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>previous.</span><span>next</span><span>=current.</span><span>next</span><span>;</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>return</span><span> </span><span>true</span><span>;</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>previous=current;</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>current = current.</span><span>next</span><span>;</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span></span><span><span></span></span><span>return</span><span> </span><span>false</span><span>;</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>&nbsp;&nbsp;&nbsp;}</span></p><p><span>&nbsp;&nbsp;&nbsp;</span><span>/**</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;* Method displays all key</span><span>-</span><span>value pairs present in HashMapCustom.,</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;* insertion order is not guaranteed, for maintaining insertion order</span></p><div dir="ltr"><p><span>&nbsp;&nbsp;&nbsp;&nbsp;* refer </span><a href="http://javamadesoeasy.com/2015/02/linkedhashmap-custom-implementation.html"><span>LinkedHashMapCustom</span></a><span>.</span></p></div><p><span>&nbsp;&nbsp;&nbsp;&nbsp;* </span><span>@param</span><span> key</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;*/</span></p><p><span>&nbsp;&nbsp;&nbsp;</span><span>public</span><span> </span><span>void</span><span> display()</span><span>{</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>for</span><span>(</span><span>int</span><span> i=0;i&lt;</span><span>capacity</span><span>;i++){</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>if</span><span>(</span><span>table</span><span>[i]!=</span><span>null</span><span>){</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>Entry&lt;K, V&gt; entry=</span><span>table</span><span>[i];</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>while</span><span>(entry!=</span><span>null</span><span>){</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>System.</span><span>out</span><span>.print(</span><span>"{"</span><span>+entry.</span><span>key</span><span>+</span><span>"="</span><span>+entry.</span><span>value</span><span>+</span><span>"}"</span><span> +</span><span>" "</span><span>);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>entry=entry.</span><span>next</span><span>;</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span></span></span></p><p><span>&nbsp;&nbsp;&nbsp;}</span></p><p><span>&nbsp;&nbsp;&nbsp;</span><span>/**</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;* Method implements hashing functionality, which helps in finding the appropriate</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;* bucket location to store our data.</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;* This is very important method, as performance of HashMapCustom is very much</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;* dependent on &nbsp;this method's implementation.</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;* </span><span>@param</span><span> key</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;*/</span></p><p><span>&nbsp;&nbsp;&nbsp;</span><span>private</span><span> </span><span>int</span><span> hash(K key)</span><span>{</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>return</span><span> Math.</span><span>abs</span><span>(key.hashCode()) % </span><span>capacity</span><span>;</span></p><p><span>&nbsp;&nbsp;&nbsp;}</span></p><p><span>}</span></p><p><span>/**</span></p><p><span>* Main class</span><span>-</span><span> to test HashMap functionality.</span></p><p><span>*/</span></p><p><span>public</span><span> </span><span>class</span><span> </span><span>HashMapCustomApp</span><span> </span><span>{</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>public</span><span> </span><span>static</span><span> </span><span>void</span><span> main(String[] args) {</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>HashMapCustom&lt;Integer, Integer&gt; hashMapCustom = </span><span>new</span><span> HashMapCustom&lt;Integer, Integer&gt;();</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>hashMapCustom.put(21, 12);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>hashMapCustom.put(25, 121);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>hashMapCustom.put(30, 151);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>hashMapCustom.put(33, 15);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>hashMapCustom.put(35, 89);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>System.</span><span>out</span><span>.println(</span><span>"value corresponding to key 21="</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>+ hashMapCustom.get(21));</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>System.</span><span>out</span><span>.println(</span><span>"value corresponding to key 51="</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>+ hashMapCustom.get(51));</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>System.</span><span>out</span><span>.print(</span><span>"Displaying : "</span><span>);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>hashMapCustom.display();</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>System.</span><span>out</span><span>.println(</span><span>"\n\nvalue corresponding to key 21 removed: "</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>+ hashMapCustom.remove(21));</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>System.</span><span>out</span><span>.println(</span><span>"value corresponding to key 51 removed: "</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>+ hashMapCustom.remove(51));</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>System.</span><span>out</span><span>.print(</span><span>"Displaying : "</span><span>);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>hashMapCustom.display();</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>}</span></p><p><span>/*Output</span></p><p><span>value corresponding to key 21=12</span></p><p><span>value corresponding to key 51=null</span></p><p><span>Displaying : {21=12} {25=121} {33=15} {30=151} {35=89}</span></p><p><span>value corresponding to key 21 removed: true</span></p><p><span>value corresponding to key 51 removed: false</span></p><p><span>Displaying : {25=121} {33=15} {30=151} {35=89}</span></p><p><span>*/</span></p></td></tr></tbody></table>

7) Complexity calculation of put and get methods in HashMap in java >

7.1) put method - worst Case complexity >

O(n).

But how complexity is O(n)?

Initially, let's say map is like this -

![](https://lh3.googleusercontent.com/sw8E_x91d6535rl85yzJh_OQxxJvqqPh2EU_RSTeULyP4SV8Y9cfktUKV0EQUmfa5C0Ap6Bh093KZUiCWNGPR2MBiFMJbzB6ClgoYD7VAM7CjlRNCGy4ppsWA4kaNRYcXptKsyM)

And we have to insert newEntry Object with Key=25, value=121 ![](https://lh5.googleusercontent.com/WAMneXozUbmo2SmISMPRwt9IgIj9qq9f5Z5ZLCi7Gw-Bn4Kmf7390T89_FmYAXSxbQ5dH8ikrlPXuAhgC4eD-q6pwrTylfN21pa8s2v_8NlaXaooExXWafPSCvdGtLI079dqwqE)

We will calculate hash by using our hash(K key) method - in this case it returns

key/capacity= 25%4= 1.

So, 1 will be the index of bucket on which newEntry object will be stored.

We will go to 1st index, it contains entry with key=21, we will compare two keys(i.e. compare 21 with 25 by using equals method), as two keys are different we check whether entry with key=21’s next is null or not, if next is null we will put our newEntry object on next.

At completion of this step our HashMap will look like this-

![](https://lh6.googleusercontent.com/sXyrk3L4NqP8zPfHPBHv-n9tgEzsNlse5khcXpBAb7B2riL4BRxu2RpNdLBk6EhAp9wMLevs_mT2ZNMxllYzjrtrDDDsJf1mRdaJReKDRPIVJ_py6mhB3Mj0kiMRLLc49_n9Yg4)

Now let’s do complexity calculation -

Earlier there was 1 element in HashMap and for putting newEntry Object we iterated on it. Hence complexity was O(n).

Note: We may calculate complexity by adding more elements in HashMap as well, but to keep explanation simple i kept less elements in HashMap.

7.2) put method - best Case complexity >

O(1).

But how complexity is O(n)?

Let's say map is like this -

![](https://lh6.googleusercontent.com/sXyrk3L4NqP8zPfHPBHv-n9tgEzsNlse5khcXpBAb7B2riL4BRxu2RpNdLBk6EhAp9wMLevs_mT2ZNMxllYzjrtrDDDsJf1mRdaJReKDRPIVJ_py6mhB3Mj0kiMRLLc49_n9Yg4)

And we have to insert newEntry Object with Key=30, value=151 ![](https://lh5.googleusercontent.com/KNxdI03W4gzWoOb-m1PeoOO3dOLZUGyS2xvvFbeztrjJHf80LJ776BPI8iBqz1hy4DCvggmzHJ2ktQ89_r7mntnsiJ_dq3SJmc0i6Eh2LQt0a-wUboVGHItU1D_jrI-lAk6yKSI)

We will calculate hash by using our hash(K key) method \- in this case it returns

key/capacity= 30%4= 2.

So, 2 will be the index of bucket on which newEntry object will be stored.

We will go to 2nd  index as it is pointing to null we will put our newEntry object there.

At completion of this step our HashMap will look like this-

![](https://lh3.googleusercontent.com/xoDByX5MfTqXbS8DZLkNz_zZwl2d5NaQZjqbAEQc04FZu7iaVIjr-WflMpvDX1Pbm2HVrdTUUm5zgIw0QWpettc2ARirvjH_04gfA4Q2dmSXZYtS6u7yGEs8dG3SFGmIo49X77s)

Now let’s do complexity calculation -

Earlier there 2 elements in HashMap but we were able to put newEntry Object in first go. Hence complexity was O(1).

7.3) get method - worst Case complexity >

O(n).

But how complexity is O(n)?

Initially, let's say map is like this -

![](https://lh6.googleusercontent.com/sXyrk3L4NqP8zPfHPBHv-n9tgEzsNlse5khcXpBAb7B2riL4BRxu2RpNdLBk6EhAp9wMLevs_mT2ZNMxllYzjrtrDDDsJf1mRdaJReKDRPIVJ_py6mhB3Mj0kiMRLLc49_n9Yg4)

And we have to get Entry Object with Key=25, value=121 ![](https://lh5.googleusercontent.com/WAMneXozUbmo2SmISMPRwt9IgIj9qq9f5Z5ZLCi7Gw-Bn4Kmf7390T89_FmYAXSxbQ5dH8ikrlPXuAhgC4eD-q6pwrTylfN21pa8s2v_8NlaXaooExXWafPSCvdGtLI079dqwqE)

We will calculate hash by using our hash(K key) method - in this case it returns

key/capacity= 25%4= 1.

So, 1 will be the index of bucket on which Entry object is stored.

We will go to 1st index, it contains entry with key=21, we will compare two keys(i.e. compare 21 with 25 by using equals method), as two keys are different we check whether entry with key=21’s next is null or not,  next is not null so we will repeat same process and ultimately will be able to get Entry object.

Now let’s do complexity calculation -

There were 2 elements in HashMap and for getting Entry Object we iterated on both of them. Hence complexity was O(n).

Note: We may calculate complexity by using HashMap of larger size, but to keep explanation simple i kept less elements in HashMap.

7.4) get method - best Case complexity >

O(1).

But how complexity is O(n)?

Initially, let's say map is like this -

![](https://lh3.googleusercontent.com/xoDByX5MfTqXbS8DZLkNz_zZwl2d5NaQZjqbAEQc04FZu7iaVIjr-WflMpvDX1Pbm2HVrdTUUm5zgIw0QWpettc2ARirvjH_04gfA4Q2dmSXZYtS6u7yGEs8dG3SFGmIo49X77s)

And we have to get Entry Object with Key=30, value=151 ![](https://lh5.googleusercontent.com/KNxdI03W4gzWoOb-m1PeoOO3dOLZUGyS2xvvFbeztrjJHf80LJ776BPI8iBqz1hy4DCvggmzHJ2ktQ89_r7mntnsiJ_dq3SJmc0i6Eh2LQt0a-wUboVGHItU1D_jrI-lAk6yKSI)

We will calculate hash by using our hash(K key) method \- in this case it returns

key/capacity= 30%4= 2.

So, 2 will be the index of bucket on which Entry object is stored.

We will go to 2nd  index and get Entry object.

Now let’s do complexity calculation -

There were 3 elements in HashMap but we were able to get Entry Object in first go.

Hence complexity was O(1).

8) Summary of complexity of methods in HashMap in java >

<table><colgroup><col width="*"><col width="*"><col width="*"></colgroup><tbody><tr><td><p><span>Operation/ method</span></p></td><td><p><span>Worst case</span></p></td><td><p><span>Best case</span></p></td></tr><tr><td><p><span>put(K key, V value)</span></p></td><td><p><span>O(n)</span></p></td><td><p><span>O(1)</span></p></td></tr><tr><td><p><span>get(Object key)</span></p></td><td><p><span>O(n)</span></p></td><td><p><span>O(1)</span></p></td></tr></tbody></table>

Summary of article >

In this tutorial we learned how to create and implement own/custom [HashMap](http://www.javamadesoeasy.com/2015/04/hashmap-in-java.html) in java with full program, diagram and examples to insert and retrieve key-value pairs in it.

Having any doubt? or you you liked the tutorial! Please comment in below section.

RELATED LINKS>

### [Collection - List, Set and Map all properties in tabular form in java](http://www.javamadesoeasy.com/2015/04/collection-list-set-and-map-all.html)