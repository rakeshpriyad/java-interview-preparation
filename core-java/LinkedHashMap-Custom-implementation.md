1) Custom LinkedHashMap >

![](https://lh4.googleusercontent.com/5M89iub9wNrKR-jmctcmLtGIHiy0lbqL5Oz18AvQyuHdFXGDC4qKgCVZO73WPujj3qqquh_WXlKp7zem4vCfEynJzcN-t0a_wa_mSxDO62G2C-YgEvUhQRBdXdWvpBIhDDM0BxE)This is very important and trending topic. In this post i will be explaining LinkedHashMap custom implementation with diagrams which will help you in visualizing the LinkedHashMap implementation.

  

I will be explaining how we will put and get key-value pair in HashMap by overriding-

\>equals method - helps in checking equality of entry objects.

\>hashCode method - helps in finding bucket’s index on which data will be stored.

  

We will maintain bucket ([ArrayList](http://www.javamadesoeasy.com/2015/02/arraylist-custom-implementation.html)) which will store Entry ([LinkedList](http://www.javamadesoeasy.com/2015/01/doublylinkedlist-insert-and-delete-at.html)).

Most salient feature of LinkedHashMap is that it maintains insertion order of key-value pairs. We will maintain [doubly Linked List](http://www.javamadesoeasy.com/2015/01/doublylinkedlist-insert-and-delete-at.html) for doing so.

While our [HashMap](http://www.javamadesoeasy.com/2015/02/hashmap-custom-implementation.html) didn’t maintained insertion order.

  

2) Entry<K,V>

We store key-value pair by using Entry<K,V>

By using,  Entry<K,V> before, after -  we keep track of newly added entry in LinkedHashMap, which helps us in maintaining insertion order.

  

Entry contains

-   K key,
    
-   V value,
    
-   Entry<K,V> next  (i.e. next entry on that location of bucket),
    
-   Entry<K,V> before and
    
-   Entry<K,V> after
    

  

<table style="border-collapse: collapse; border: none; width: 468pt;"><colgroup><col width="*"></colgroup><tbody><tr style="height: 0pt;"><td style="border-bottom: solid #000000 1pt; border-left: solid #000000 1pt; border-right: solid #000000 1pt; border-top: solid #000000 1pt; padding: 5pt 5pt 5pt 5pt; vertical-align: top;"><div dir="ltr" style="line-height: 1.2; margin-bottom: 0pt; margin-top: 0pt;"><span style="background-color: transparent; color: black; font-family: &quot;consolas&quot;; font-size: 10pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="background-color: transparent; color: #7f0055; font-family: &quot;consolas&quot;; font-size: 10pt; font-style: normal; font-variant: normal; font-weight: 700; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">static</span><span style="background-color: transparent; color: black; font-family: &quot;consolas&quot;; font-size: 10pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;"> </span><span style="background-color: transparent; color: #7f0055; font-family: &quot;consolas&quot;; font-size: 10pt; font-style: normal; font-variant: normal; font-weight: 700; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">class</span><span style="background-color: transparent; color: black; font-family: &quot;consolas&quot;; font-size: 10pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;"> Entry&lt;K, V&gt; {</span></div><div dir="ltr" style="line-height: 1.2; margin-bottom: 0pt; margin-top: 0pt;"><span style="background-color: transparent; color: black; font-family: &quot;consolas&quot;; font-size: 10pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">&nbsp;&nbsp;</span><span style="background-color: transparent; color: black; font-family: &quot;consolas&quot;; font-size: 10pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;"><span class="Apple-tab-span" style="white-space: pre;"> </span></span><span style="background-color: transparent; color: black; font-family: &quot;consolas&quot;; font-size: 10pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">&nbsp;&nbsp;&nbsp;</span><span style="background-color: transparent; color: black; font-family: &quot;consolas&quot;; font-size: 10pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;"><span class="Apple-tab-span" style="white-space: pre;"> </span></span><span style="background-color: transparent; color: black; font-family: &quot;consolas&quot;; font-size: 10pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">K </span><span style="background-color: transparent; color: #0000c0; font-family: &quot;consolas&quot;; font-size: 10pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">key</span><span style="background-color: transparent; color: black; font-family: &quot;consolas&quot;; font-size: 10pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">;</span></div><div dir="ltr" style="line-height: 1.2; margin-bottom: 0pt; margin-top: 0pt;"><span style="background-color: transparent; color: black; font-family: &quot;consolas&quot;; font-size: 10pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">&nbsp;&nbsp;</span><span style="background-color: transparent; color: black; font-family: &quot;consolas&quot;; font-size: 10pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;"><span class="Apple-tab-span" style="white-space: pre;"> </span></span><span style="background-color: transparent; color: black; font-family: &quot;consolas&quot;; font-size: 10pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">&nbsp;&nbsp;&nbsp;</span><span style="background-color: transparent; color: black; font-family: &quot;consolas&quot;; font-size: 10pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;"><span class="Apple-tab-span" style="white-space: pre;"> </span></span><span style="background-color: transparent; color: black; font-family: &quot;consolas&quot;; font-size: 10pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">V </span><span style="background-color: transparent; color: #0000c0; font-family: &quot;consolas&quot;; font-size: 10pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">value</span><span style="background-color: transparent; color: black; font-family: &quot;consolas&quot;; font-size: 10pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">;</span></div><div dir="ltr" style="line-height: 1.2; margin-bottom: 0pt; margin-top: 0pt;"><span style="background-color: transparent; color: black; font-family: &quot;consolas&quot;; font-size: 10pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">&nbsp;&nbsp;</span><span style="background-color: transparent; color: black; font-family: &quot;consolas&quot;; font-size: 10pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;"><span class="Apple-tab-span" style="white-space: pre;"> </span></span><span style="background-color: transparent; color: black; font-family: &quot;consolas&quot;; font-size: 10pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">&nbsp;&nbsp;&nbsp;</span><span style="background-color: transparent; color: black; font-family: &quot;consolas&quot;; font-size: 10pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;"><span class="Apple-tab-span" style="white-space: pre;"> </span></span><span style="background-color: transparent; color: black; font-family: &quot;consolas&quot;; font-size: 10pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">Entry&lt;K,V&gt; </span><span style="background-color: transparent; color: #0000c0; font-family: &quot;consolas&quot;; font-size: 10pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">next</span><span style="background-color: transparent; color: black; font-family: &quot;consolas&quot;; font-size: 10pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">;</span></div><div dir="ltr" style="line-height: 1.2; margin-bottom: 0pt; margin-top: 0pt;"><span style="background-color: transparent; color: black; font-family: &quot;consolas&quot;; font-size: 10pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">&nbsp;&nbsp;</span><span style="background-color: transparent; color: black; font-family: &quot;consolas&quot;; font-size: 10pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;"><span class="Apple-tab-span" style="white-space: pre;"> </span></span><span style="background-color: transparent; color: black; font-family: &quot;consolas&quot;; font-size: 10pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">&nbsp;&nbsp;&nbsp;</span><span style="background-color: transparent; color: black; font-family: &quot;consolas&quot;; font-size: 10pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;"><span class="Apple-tab-span" style="white-space: pre;"> </span></span><span style="background-color: transparent; color: black; font-family: &quot;consolas&quot;; font-size: 11pt; font-style: normal; font-variant: normal; font-weight: 700; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">Entry&lt;K,V&gt; </span><span style="background-color: transparent; color: #0000c0; font-family: &quot;consolas&quot;; font-size: 11pt; font-style: normal; font-variant: normal; font-weight: 700; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">before</span><span style="background-color: transparent; color: black; font-family: &quot;consolas&quot;; font-size: 11pt; font-style: normal; font-variant: normal; font-weight: 700; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">, </span><span style="background-color: transparent; color: #0000c0; font-family: &quot;consolas&quot;; font-size: 11pt; font-style: normal; font-variant: normal; font-weight: 700; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">after</span><span style="background-color: transparent; color: black; font-family: &quot;consolas&quot;; font-size: 11pt; font-style: normal; font-variant: normal; font-weight: 700; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;"> </span><span style="background-color: transparent; color: black; font-family: &quot;consolas&quot;; font-size: 10pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">;</span></div><div dir="ltr" style="line-height: 1.2; margin-bottom: 0pt; margin-top: 0pt;"><span style="background-color: transparent; color: black; font-family: &quot;consolas&quot;; font-size: 10pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">&nbsp;&nbsp;</span><span style="background-color: transparent; color: black; font-family: &quot;consolas&quot;; font-size: 10pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;"><span class="Apple-tab-span" style="white-space: pre;"> </span></span><span style="background-color: transparent; color: black; font-family: &quot;consolas&quot;; font-size: 10pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">&nbsp;&nbsp;</span><span style="background-color: transparent; color: black; font-family: &quot;consolas&quot;; font-size: 10pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;"><span class="Apple-tab-span" style="white-space: pre;"> </span></span><span style="background-color: transparent; color: black; font-family: &quot;consolas&quot;; font-size: 10pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">&nbsp;&nbsp;</span><span style="background-color: transparent; color: black; font-family: &quot;consolas&quot;; font-size: 10pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;"><span class="Apple-tab-span" style="white-space: pre;"></span></span></div><div dir="ltr" style="line-height: 1.2; margin-bottom: 0pt; margin-top: 0pt;"><span style="background-color: transparent; color: black; font-family: &quot;consolas&quot;; font-size: 10pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">&nbsp;&nbsp;</span><span style="background-color: transparent; color: black; font-family: &quot;consolas&quot;; font-size: 10pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;"><span class="Apple-tab-span" style="white-space: pre;"> </span></span><span style="background-color: transparent; color: black; font-family: &quot;consolas&quot;; font-size: 10pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">&nbsp;&nbsp;&nbsp;</span><span style="background-color: transparent; color: black; font-family: &quot;consolas&quot;; font-size: 10pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;"><span class="Apple-tab-span" style="white-space: pre;"> </span></span><span style="background-color: transparent; color: #7f0055; font-family: &quot;consolas&quot;; font-size: 10pt; font-style: normal; font-variant: normal; font-weight: 700; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">public</span><span style="background-color: transparent; color: black; font-family: &quot;consolas&quot;; font-size: 10pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;"> Entry(K key, V value, Entry&lt;K,V&gt; next){</span></div><div dir="ltr" style="line-height: 1.2; margin-bottom: 0pt; margin-top: 0pt;"><span style="background-color: transparent; color: black; font-family: &quot;consolas&quot;; font-size: 10pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">&nbsp;&nbsp;</span><span style="background-color: transparent; color: black; font-family: &quot;consolas&quot;; font-size: 10pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;"><span class="Apple-tab-span" style="white-space: pre;"> </span></span><span style="background-color: transparent; color: black; font-family: &quot;consolas&quot;; font-size: 10pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="background-color: transparent; color: black; font-family: &quot;consolas&quot;; font-size: 10pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;"><span class="Apple-tab-span" style="white-space: pre;"> </span></span><span style="background-color: transparent; color: #7f0055; font-family: &quot;consolas&quot;; font-size: 10pt; font-style: normal; font-variant: normal; font-weight: 700; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">this</span><span style="background-color: transparent; color: black; font-family: &quot;consolas&quot;; font-size: 10pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">.</span><span style="background-color: transparent; color: #0000c0; font-family: &quot;consolas&quot;; font-size: 10pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">key</span><span style="background-color: transparent; color: black; font-family: &quot;consolas&quot;; font-size: 10pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;"> = key;</span></div><div dir="ltr" style="line-height: 1.2; margin-bottom: 0pt; margin-top: 0pt;"><span style="background-color: transparent; color: black; font-family: &quot;consolas&quot;; font-size: 10pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">&nbsp;&nbsp;</span><span style="background-color: transparent; color: black; font-family: &quot;consolas&quot;; font-size: 10pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;"><span class="Apple-tab-span" style="white-space: pre;"> </span></span><span style="background-color: transparent; color: black; font-family: &quot;consolas&quot;; font-size: 10pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="background-color: transparent; color: black; font-family: &quot;consolas&quot;; font-size: 10pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;"><span class="Apple-tab-span" style="white-space: pre;"> </span></span><span style="background-color: transparent; color: #7f0055; font-family: &quot;consolas&quot;; font-size: 10pt; font-style: normal; font-variant: normal; font-weight: 700; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">this</span><span style="background-color: transparent; color: black; font-family: &quot;consolas&quot;; font-size: 10pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">.</span><span style="background-color: transparent; color: #0000c0; font-family: &quot;consolas&quot;; font-size: 10pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">value</span><span style="background-color: transparent; color: black; font-family: &quot;consolas&quot;; font-size: 10pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;"> = value;</span></div><div dir="ltr" style="line-height: 1.2; margin-bottom: 0pt; margin-top: 0pt;"><span style="background-color: transparent; color: black; font-family: &quot;consolas&quot;; font-size: 10pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">&nbsp;&nbsp;</span><span style="background-color: transparent; color: black; font-family: &quot;consolas&quot;; font-size: 10pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;"><span class="Apple-tab-span" style="white-space: pre;"> </span></span><span style="background-color: transparent; color: black; font-family: &quot;consolas&quot;; font-size: 10pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span style="background-color: transparent; color: black; font-family: &quot;consolas&quot;; font-size: 10pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;"><span class="Apple-tab-span" style="white-space: pre;"> </span></span><span style="background-color: transparent; color: #7f0055; font-family: &quot;consolas&quot;; font-size: 10pt; font-style: normal; font-variant: normal; font-weight: 700; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">this</span><span style="background-color: transparent; color: black; font-family: &quot;consolas&quot;; font-size: 10pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">.</span><span style="background-color: transparent; color: #0000c0; font-family: &quot;consolas&quot;; font-size: 10pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">next</span><span style="background-color: transparent; color: black; font-family: &quot;consolas&quot;; font-size: 10pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;"> = next;</span></div><div dir="ltr" style="line-height: 1.2; margin-bottom: 0pt; margin-top: 0pt;"><span style="background-color: transparent; color: black; font-family: &quot;consolas&quot;; font-size: 10pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">&nbsp;&nbsp;</span><span style="background-color: transparent; color: black; font-family: &quot;consolas&quot;; font-size: 10pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;"><span class="Apple-tab-span" style="white-space: pre;"> </span></span><span style="background-color: transparent; color: black; font-family: &quot;consolas&quot;; font-size: 10pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">&nbsp;&nbsp;&nbsp;</span><span style="background-color: transparent; color: black; font-family: &quot;consolas&quot;; font-size: 10pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;"><span class="Apple-tab-span" style="white-space: pre;"> </span></span><span style="background-color: transparent; color: black; font-family: &quot;consolas&quot;; font-size: 10pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">}</span></div><div dir="ltr" style="line-height: 1.2; margin-bottom: 0pt; margin-top: 0pt;"><span style="background-color: transparent; color: black; font-family: &quot;consolas&quot;; font-size: 10pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">&nbsp;&nbsp;</span><span style="background-color: transparent; color: black; font-family: &quot;consolas&quot;; font-size: 10pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;"><span class="Apple-tab-span" style="white-space: pre;"> </span></span><span style="background-color: transparent; color: black; font-family: &quot;consolas&quot;; font-size: 10pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">}</span></div></td></tr></tbody></table>

3) Putting 5 key-value pairs in own/custom LinkedHashMap (step-by-step)>

I will explain you the whole concept of LinkedHashMap by putting 5 key-value pairs in HashMap.

  

Initially, we have bucket of capacity=4. (all indexes of bucket i.e. 0,1,2,3 are pointing to null)

  

![](https://lh5.googleusercontent.com/IzITTFsTZdvJ0F8hGwCq8XoJOiocI5aUHWVCtmFJ36XBrec5Rk-J5XVMKTo2OdA8qkgIv_Ja9VPYntv_AXH2Oz5VWJ8-50nqkkrPvQRJ_Cxu0VdT6IIU3GAHKnVDVd_T9mVHjK4)

  

Let’s put first key-value pair in LinkedHashMap-

Key=21, value=12

newEntry Object will be formed like this >![](https://lh6.googleusercontent.com/R3j5HBGwAd4lFYBipmw_l_8XFrVJl-bGwNyulFzBbAqswwso4wLnlqmkNUNngsA7GWFLBl0dapAPNqb7qdxhN604_WYoMhpqagfZ9RYMd6nu001APaTJLZaTPRq4wP2cm8gBBz0)

  

We will calculate hash by using our hash(K key) method \- in this case it returns

key/capacity= 21%4= 1.

So, 1 will be the index of bucket on which newEntry object will be stored.

We will go to 1st index as it is pointing to null we will put our newEntry object there.

  

Additionally, for maintaining insertion order-

Update header, it will start pointing to newEntry object

  

At completion of this step, our HashMap will look like this-

  

![](https://lh4.googleusercontent.com/PWAKBBSdW4N_1ogNTiumgDbGHc5F5tuHQWjeRdiLCAY0-5niV5gZxvDpNvcOAqWjs7oYbiLNEL78utNodffuRbrq5Ub8G8P4qaBXZPH1QkMDebAVDW-iV87HXGufE_Jjn_vgbKY)

  

Let’s put second key-value pair in LinkedHashMap-

Key=25, value=121

newEntry Object will be formed like this >![](https://lh3.googleusercontent.com/ZMj5CORN8RMLcWhSTH6AkCzGh07y8vGabejEcBAHIVLQ9wfWuvd9uqQpf5UITrHW8w1jzOoBceSlBMKXTMwU42w2wfsPH9gGGMux9wdIAThifH1QwoAWP_3NB60VV6nMd1dfLBw)

  

We will calculate hash by using our hash(K key) method - in this case it returns

key/capacity= 25%4= 1.

So, 1 will be the index of bucket on which newEntry object will be stored.

We will go to 1st index, it contains entry with key=21, we will compare two keys(i.e. compare 21 with 25 by using equals method), as two keys are different we check whether entry with key=21’s next is null or not, if next is null we will put our newEntry object on next.

Additionally, for maintaining insertion order-

Update header.after, it will start pointing to newEntry object (i.e make Entry with key=21’s after point to newEntry object\], and also make  newEntry object’s before point to header (Entry with key=21’)

  

At completion of this step our HashMap will look like this-

![](https://lh6.googleusercontent.com/qp_7yvhU-2MRM6gbK7vLnIr7tkAR46EKjDMqJrxSHkz_OIKaJPdSkaVlaBmXqad95R7gZyy5ga7FjPWZDJDvFUlfnlW2gLQ5WRgkEh_EfK6PoQOncy6bfAX6M9lqICjkhUYrN8U)

  

Let’s put third key-value pair in HashMap-

Key=30, value=151

newEntry Object will be formed like this >![](https://lh3.googleusercontent.com/4DQEx_HuxmyhYEs7dvJ1WImRtJ8a58wgrTcBtgPS_H32ciYSntzhSC4Y_7mxeWBhYWaB3S8ws2iHs6AqbLXWP1xCQyQVOOcUCHzlonPa6qtpEu-haY38YRH4Gpo-BYSwnjAjfY4)

We will calculate hash by using our hash(K key) method \- in this case it returns

key/capacity= 30%4= 2.

So, 2 will be the index of bucket on which newEntry object will be stored.

We will go to 2nd  index as it is pointing to null we will put our newEntry object there.

  

Additionally, for maintaining insertion order-

Update doubly linked list ’s after and before.

  

At completion of this step, our HashMap will look like this-

![](https://lh5.googleusercontent.com/fay9JvLAvOAB8QT8Q_EacOdzQAx0IZ6XcUE-NIzuokw0SSRanguyvKUhBEMp8P4kOKDu0H_3dK4tN4I0GXCNhsP3nEvctRGRb26LHZhnMBxX6IfC4Awjx4K8a83rNq4J-v9MjOc)

  

Let’s put fourth key-value pair in LinkedHashMap-

Key=33, value=15

Entry Object will be formed like this >![](https://lh5.googleusercontent.com/wWA0JcPNxtNyE3988zTI7IQphONtKlo_dDT2moRNaIRQmdSfl3OY6pyFnmULVsE1gTqW6sRQ9mZIaScWl1P_AxtBkxxAW4d-FI4OZSkx_BjscXaj-shM4ZXpZuAnMH6AR-jDQv4)

  

We will calculate hash by using our hash(K key) method - in this case it returns

key/capacity= 33%4= 1,

So, 1 will be the index of bucket on which newEntry object will be stored.

  

We will go to 1st index -

\>it contains entry with key=21, we will compare two keys (i.e. compare 21 with 33 by using equals method, as two keys are different,  proceed to next  of entry with key=21 (proceed only if next is not null).

\>now, next contains entry with key=25, we will compare two keys (i.e. compare 25 with 33 by using equals method, as two keys are different,  now next of entry with key=25 is pointing to null so we won’t proceed further, we will put our newEntry object on next.

  

Additionally, for maintaining insertion order-

Update doubly linked list’s after and before  (for maintaining insertion order)

  

At completion of this step our HashMap will look like this-

  

![](https://lh5.googleusercontent.com/_GHBlUPP6_NIUHFB4QXe-z11NyBJIIl4Jfk3nVskOUvw8fxKZ8fte5bm0oGu2dwYIhKpTtgv4vWd08lDZueKIVdO8g-UpDuIWx51aX9JX8ZnojH-FwD3tHErqti-S3icmCzuGHY)

  

Let’s put fifth key-value pair in LinkedHashMap-

Key=35, value=89

  

Repeat above mentioned steps.

  

At completion of this step our HashMap will look like this-

![](https://lh4.googleusercontent.com/mffFu7Y9kwCFL9hTiIadZpD-MSQZCKfd-AdaJc0x06m7wkSCjhD8APOHlJHeZmOLcfoC7PW4v_D3nL3vTbJu2aT_dQMrfbhRD8uz0s_koSiwDgRRJ-3R6qtir3PMOzEKPsFrcps)

  

Must read: [Set Custom implementation](http://javamadesoeasy.com/2015/02/set-custom-implementation.html).

4) Methods used in custom LinkedHashMap >

<table style="border-collapse: collapse; border: none;"><colgroup><col width="285"><col width="396"></colgroup><tbody><tr style="height: 0pt;"><td style="border-bottom: solid #000000 1pt; border-left: solid #000000 1pt; border-right: solid #000000 1pt; border-top: solid #000000 1pt; padding: 5pt 5pt 5pt 5pt; vertical-align: top;"><div dir="ltr" style="line-height: 1.2; margin-bottom: 0pt; margin-top: 0pt;"><span style="background-color: transparent; color: black; font-family: &quot;arial&quot;; font-size: 11pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">public void </span><span style="background-color: transparent; color: black; font-family: &quot;arial&quot;; font-size: 11pt; font-style: normal; font-variant: normal; font-weight: 700; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">put</span><span style="background-color: transparent; color: black; font-family: &quot;arial&quot;; font-size: 11pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">(K newKey, V data)</span></div></td><td style="border-bottom: solid #000000 1pt; border-left: solid #000000 1pt; border-right: solid #000000 1pt; border-top: solid #000000 1pt; padding: 5pt 5pt 5pt 5pt; vertical-align: top;"><div dir="ltr" style="line-height: 1.2; margin-bottom: 0pt; margin-top: 0pt;"><span style="background-color: transparent; color: black; font-family: &quot;arial&quot;; font-size: 11pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">-Method allows you put key-value pair in HashMap</span></div><div dir="ltr" style="line-height: 1.2; margin-bottom: 0pt; margin-top: 0pt;"><span style="background-color: transparent; color: black; font-family: &quot;arial&quot;; font-size: 11pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">-If the map already contains a mapping for the key, the old value is replaced.</span></div><div dir="ltr" style="line-height: 1.2; margin-bottom: 0pt; margin-top: 0pt;"><span style="background-color: transparent; color: black; font-family: &quot;arial&quot;; font-size: 11pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">-provide complete functionality how to override equals method.</span></div><div dir="ltr" style="line-height: 1.2; margin-bottom: 0pt; margin-top: 0pt;"><span style="background-color: transparent; color: black; font-family: &quot;arial&quot;; font-size: 11pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">-provide complete functionality how to override hashCode method.</span></div></td></tr><tr style="height: 0pt;"><td style="border-bottom: solid #000000 1pt; border-left: solid #000000 1pt; border-right: solid #000000 1pt; border-top: solid #000000 1pt; padding: 5pt 5pt 5pt 5pt; vertical-align: top;"><div dir="ltr" style="line-height: 1.2; margin-bottom: 0pt; margin-top: 0pt;"><span style="background-color: transparent; color: black; font-family: &quot;arial&quot;; font-size: 11pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">public V </span><span style="background-color: transparent; color: black; font-family: &quot;arial&quot;; font-size: 11pt; font-style: normal; font-variant: normal; font-weight: 700; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">get</span><span style="background-color: transparent; color: black; font-family: &quot;arial&quot;; font-size: 11pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">(K key)</span></div></td><td style="border-bottom: solid #000000 1pt; border-left: solid #000000 1pt; border-right: solid #000000 1pt; border-top: solid #000000 1pt; padding: 5pt 5pt 5pt 5pt; vertical-align: top;"><div dir="ltr" style="line-height: 1.2; margin-bottom: 0pt; margin-top: 0pt;"><span style="background-color: transparent; color: black; font-family: &quot;arial&quot;; font-size: 11pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">Method returns value corresponding to key.</span></div></td></tr><tr style="height: 0pt;"><td style="border-bottom: solid #000000 1pt; border-left: solid #000000 1pt; border-right: solid #000000 1pt; border-top: solid #000000 1pt; padding: 5pt 5pt 5pt 5pt; vertical-align: top;"><div dir="ltr" style="line-height: 1.2; margin-bottom: 0pt; margin-top: 0pt;"><span style="background-color: transparent; color: black; font-family: &quot;arial&quot;; font-size: 11pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">public boolean </span><span style="background-color: transparent; color: black; font-family: &quot;arial&quot;; font-size: 11pt; font-style: normal; font-variant: normal; font-weight: 700; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">remove</span><span style="background-color: transparent; color: black; font-family: &quot;arial&quot;; font-size: 11pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">(K deleteKey)</span></div></td><td style="border-bottom: solid #000000 1pt; border-left: solid #000000 1pt; border-right: solid #000000 1pt; border-top: solid #000000 1pt; padding: 5pt 5pt 5pt 5pt; vertical-align: top;"><div dir="ltr" style="line-height: 1.2; margin-bottom: 0pt; margin-top: 0pt;"><span style="background-color: transparent; color: black; font-family: &quot;arial&quot;; font-size: 11pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">Method removes key-value pair from </span><span style="background-color: transparent; color: black; font-family: &quot;arial&quot;; font-size: 11pt; font-style: normal; font-variant: normal; font-weight: 700; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">LinkedHashMapCustom</span><span style="background-color: transparent; color: black; font-family: &quot;arial&quot;; font-size: 11pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">.</span></div></td></tr><tr style="height: 0pt;"><td style="border-bottom: solid #000000 1pt; border-left: solid #000000 1pt; border-right: solid #000000 1pt; border-top: solid #000000 1pt; padding: 5pt 5pt 5pt 5pt; vertical-align: top;"><div dir="ltr" style="line-height: 1.2; margin-bottom: 0pt; margin-top: 0pt;"><span style="background-color: transparent; color: black; font-family: &quot;arial&quot;; font-size: 11pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">public void </span><span style="background-color: transparent; color: black; font-family: &quot;arial&quot;; font-size: 11pt; font-style: normal; font-variant: normal; font-weight: 700; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">display</span><span style="background-color: transparent; color: black; font-family: &quot;arial&quot;; font-size: 11pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">()</span></div></td><td style="border-bottom: solid #000000 1pt; border-left: solid #000000 1pt; border-right: solid #000000 1pt; border-top: solid #000000 1pt; padding: 5pt 5pt 5pt 5pt; vertical-align: top;"><div dir="ltr" style="line-height: 1.2; margin-bottom: 0pt; margin-top: 0pt;"><span style="background-color: transparent; color: black; font-family: &quot;arial&quot;; font-size: 11pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">-Method displays all key-value pairs present in </span><span style="background-color: transparent; color: black; font-family: &quot;arial&quot;; font-size: 11pt; font-style: normal; font-variant: normal; font-weight: 700; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">LinkedHashMapCustom</span><span style="background-color: transparent; color: black; font-family: &quot;arial&quot;; font-size: 11pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">.,</span></div><div dir="ltr" style="line-height: 1.2; margin-bottom: 0pt; margin-top: 0pt;"><span style="background-color: transparent; color: black; font-family: &quot;arial&quot;; font-size: 11pt; font-style: normal; font-variant: normal; font-weight: 700; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">-insertion order is guaranteed</span><span style="background-color: transparent; color: black; font-family: &quot;arial&quot;; font-size: 11pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">.</span></div></td></tr><tr style="height: 0pt;"><td style="border-bottom: solid #000000 1pt; border-left: solid #000000 1pt; border-right: solid #000000 1pt; border-top: solid #000000 1pt; padding: 5pt 5pt 5pt 5pt; vertical-align: top;"><div dir="ltr" style="line-height: 1.2; margin-bottom: 0pt; margin-top: 0pt;"><span style="background-color: transparent; color: black; font-family: &quot;arial&quot;; font-size: 11pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">private int </span><span style="background-color: transparent; color: black; font-family: &quot;arial&quot;; font-size: 11pt; font-style: normal; font-variant: normal; font-weight: 700; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">hash</span><span style="background-color: transparent; color: black; font-family: &quot;arial&quot;; font-size: 11pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">(K key)</span></div></td><td style="border-bottom: solid #000000 1pt; border-left: solid #000000 1pt; border-right: solid #000000 1pt; border-top: solid #000000 1pt; padding: 5pt 5pt 5pt 5pt; vertical-align: top;"><div dir="ltr" style="line-height: 1.2; margin-bottom: 0pt; margin-top: 0pt;"><span style="background-color: transparent; color: black; font-family: &quot;arial&quot;; font-size: 11pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">-Method implements hashing functionality, which helps in finding the appropriate bucket location to store our data.</span></div><div dir="ltr" style="line-height: 1.2; margin-bottom: 0pt; margin-top: 0pt;"><span style="background-color: transparent; color: black; font-family: &quot;arial&quot;; font-size: 11pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">-This is very important method, as performance of </span><span style="background-color: transparent; color: black; font-family: &quot;arial&quot;; font-size: 11pt; font-style: normal; font-variant: normal; font-weight: 700; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">LinkedHashMapCustom </span><span style="background-color: transparent; color: black; font-family: &quot;arial&quot;; font-size: 11pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">is very much dependent on &nbsp;this method's implementation.</span></div></td></tr><tr style="height: 0pt;"><td style="border-bottom: solid #000000 1pt; border-left: solid #000000 1pt; border-right: solid #000000 1pt; border-top: solid #000000 1pt; padding: 5pt 5pt 5pt 5pt; vertical-align: top;"><div dir="ltr" style="line-height: 1.2; margin-bottom: 0pt; margin-top: 0pt;"><span style="background-color: transparent; color: black; font-family: &quot;arial&quot;; font-size: 11pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">private void </span><span style="background-color: transparent; color: black; font-family: &quot;arial&quot;; font-size: 11pt; font-style: normal; font-variant: normal; font-weight: 700; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">maintainOrderAfterInsert</span><span style="background-color: transparent; color: black; font-family: &quot;arial&quot;; font-size: 11pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">(Entry&lt;K, V&gt; newEntry)</span></div></td><td style="border-bottom: solid #000000 1pt; border-left: solid #000000 1pt; border-right: solid #000000 1pt; border-top: solid #000000 1pt; padding: 5pt 5pt 5pt 5pt; vertical-align: top;"><div dir="ltr" style="line-height: 1.2; margin-bottom: 0pt; margin-top: 0pt;"><span style="background-color: transparent; color: black; font-family: &quot;arial&quot;; font-size: 11pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">Methods helps in maintaining insertion order after insertion of key-value pair.</span></div></td></tr><tr style="height: 0pt;"><td style="border-bottom: solid #000000 1pt; border-left: solid #000000 1pt; border-right: solid #000000 1pt; border-top: solid #000000 1pt; padding: 5pt 5pt 5pt 5pt; vertical-align: top;"><div dir="ltr" style="line-height: 1.2; margin-bottom: 0pt; margin-top: 0pt;"><span style="background-color: transparent; color: black; font-family: &quot;arial&quot;; font-size: 11pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">private void </span><span style="background-color: transparent; color: black; font-family: &quot;arial&quot;; font-size: 11pt; font-style: normal; font-variant: normal; font-weight: 700; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">maintainOrderAfterDeletion</span><span style="background-color: transparent; color: black; font-family: &quot;arial&quot;; font-size: 11pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">(Entry&lt;K, V&gt; deleteEntry)</span></div></td><td style="border-bottom: solid #000000 1pt; border-left: solid #000000 1pt; border-right: solid #000000 1pt; border-top: solid #000000 1pt; padding: 5pt 5pt 5pt 5pt; vertical-align: top;"><div dir="ltr" style="line-height: 1.2; margin-bottom: 0pt; margin-top: 0pt;"><span style="background-color: transparent; color: black; font-family: &quot;arial&quot;; font-size: 11pt; font-style: normal; font-variant: normal; font-weight: 400; text-decoration: none; vertical-align: baseline; white-space: pre-wrap;">Methods helps in maintaining insertion order after deletion of &nbsp;key-value pair.</span></div></td></tr></tbody></table>

```
package com.test.custom;

/**
 * This class provides custom implementation of LinkedHashMap
 * which allows us to store data in key\-value pair form.
 * If key which already exists is added again, its value is overridden but
 * insertion order does not change,
 * BUT, if key\-value pair is removed and value is again added than insertion order
 * changes(which is quite natural behavior).
 *
 * @param <K>
 * @param <V>
 **/
class CustomLinkedHashMap<K, V> {
    private Entry<K, V>[] table;  //Array of Entry.
    private int capacity = 4; //Initial capacity of HashMap
    private Entry<K, V> header; //head of the doubly linked list.
    private Entry<K, V> last; //last of the doubly linked list.

    @SuppressWarnings("unchecked")
    public CustomLinkedHashMap() {
        table = new Entry[capacity];
    }

    /**
     * Method allows you put key\-value pair in LinkedHashMapCustom.
     * If the map already contains a mapping for the key, the old value is replaced.
     * Note: method does not allows you to put null key thought it allows null values.
     * Implementation allows you to put custom objects as a key as well.
     * Key Features: implementation provides you with following features:\-
     * \>provide complete functionality how to override equals method.
     * >provide complete functionality how to override hashCode method.
     *
     * @param newKey
     * @param data
     */
    public void put(K newKey, V data) {
        if (newKey == null)
            return;  //does not allow to store null.
        int hash = hash(newKey);
        Entry<K, V> newEntry = new Entry<K, V>(newKey, data, null);
        maintainOrderAfterInsert(newEntry);
        if (table[hash] == null) {
            table[hash] = newEntry;
        } else {
            Entry<K, V> previous = null;
            Entry<K, V> current = table[hash];
            while (current != null) { //we have reached last entry of bucket.
                if (current.key.equals(newKey)) {
                    if (previous == null) { //node has to be insert on first of bucket.
                        newEntry.next = current.next;
                        table[hash] = newEntry;
                        return;
                    } else {
                        newEntry.next = current.next;
                        previous.next = newEntry;
                        return;
                    }
                }
                previous = current;
                current = current.next;
            }
            previous.next = newEntry;
        }
    }

    /**
     * below method helps us in ensuring insertion order of LinkedHashMapCustom
     * after new key\-value pair is added.
     */
    private void maintainOrderAfterInsert(Entry<K, V> newEntry) {
        if (header == null) {
            header = newEntry;
            last = newEntry;
            return;
        }
        if (header.key.equals(newEntry.key)) {
            deleteFirst();
            insertFirst(newEntry);
            return;
        }
        if (last.key.equals(newEntry.key)) {
            deleteLast();
            insertLast(newEntry);
            return;
        }
        Entry<K, V> beforeDeleteEntry = deleteSpecificEntry(newEntry);
        if (beforeDeleteEntry == null) {
            insertLast(newEntry);
        } else {
            insertAfter(beforeDeleteEntry, newEntry);
        }
    }

    /**
     * below method helps us in ensuring insertion order of LinkedHashMapCustom,
     * after deletion of key\-value pair.
     */
    private void maintainOrderAfterDeletion(Entry<K, V> deleteEntry) {
        if (header.key.equals(deleteEntry.key)) {
            deleteFirst();
            return;
        }
        if (last.key.equals(deleteEntry.key)) {
            deleteLast();
            return;
        }
        deleteSpecificEntry(deleteEntry);
    }

    /**
     * returns entry after which new entry must be added.
     */
    private void insertAfter(Entry<K, V> beforeDeleteEntry, Entry<K, V> newEntry) {
        Entry<K, V> current = header;
        while (current != beforeDeleteEntry) {
            current = current.after; //move to next node.
        }
        newEntry.after = beforeDeleteEntry.after;
        beforeDeleteEntry.after.before = newEntry;
        newEntry.before = beforeDeleteEntry;
        beforeDeleteEntry.after = newEntry;
    }

    /**
     * deletes entry from first.
     */
    private void deleteFirst() {
        if (header == last) { //only one entry found.
            header = last = null;
            return;
        }
        header = header.after;
        header.before = null;
    }

    /**
     * inserts entry at first.
     */
    private void insertFirst(Entry<K, V> newEntry) {
        if (header == null) { //no entry found
            header = newEntry;
            last = newEntry;
            return;
        }
        newEntry.after = header;
        header.before = newEntry;
        header = newEntry;
    }

    /**
     * inserts entry at last.
     */
    private void insertLast(Entry<K, V> newEntry) {
        if (header == null) {
            header = newEntry;
            last = newEntry;
            return;
        }
        last.after = newEntry;
        newEntry.before = last;
        last = newEntry;
    }

    /**
     * deletes entry from last.
     */
    private void deleteLast() {
        if (header == last) {
            header = last = null;
            return;
        }
        last = last.before;
        last.after = null;
    }

    /**
     * deletes specific entry and returns before entry.
     */
    private Entry<K, V> deleteSpecificEntry(Entry<K, V> newEntry) {
        Entry<K, V> current = header;
        while (!current.key.equals(newEntry.key)) {
            if (current.after == null) { //entry not found
                return null;
            }
            current = current.after; //move to next node.
        }
        Entry<K, V> beforeDeleteEntry = current.before;
        current.before.after = current.after;
        current.after.before = current.before; //entry deleted
        return beforeDeleteEntry;
    }

    /**
     * Method returns value corresponding to key.
     *
     * @param key
     */
    public V get(K key) {
        int hash = hash(key);
        if (table[hash] == null) {
            return null;
        } else {
            Entry<K, V> temp = table[hash];
            while (temp != null) {
                if (temp.key.equals(key))
                    return temp.value;
                temp = temp.next; //return value corresponding to key.
            }
            return null; //returns null if key is not found.
        }
    }

    /**
     * Method removes key\-value pair from HashMapCustom.
     *
     * @param key
     */
    public boolean remove(K deleteKey) {
        int hash = hash(deleteKey);
        if (table[hash] == null) {
            return false;
        } else {
            Entry<K, V> previous = null;
            Entry<K, V> current = table[hash];
            while (current != null) { //we have reached last entry node of bucket.
                if (current.key.equals(deleteKey)) {
                    maintainOrderAfterDeletion(current);
                    if (previous == null) { //delete first entry node.
                        table[hash] = table[hash].next;
                        return true;
                    } else {
                        previous.next = current.next;
                        return true;
                    }
                }
                previous = current;
                current = current.next;
            }
            return false;
        }
    }

    /**
     * Method displays all key\-value pairs present in HashMapCustom.,
     * insertion order is not guaranteed, for maintaining insertion order
     * refer linkedHashMapCustom.
     *
     * @param key
     */
    public void display() {
        Entry<K, V> currentEntry = header;
        while (currentEntry != null) {
            System.out.print("{" + currentEntry.key + "=" + currentEntry.value + "}" + " ");
            currentEntry = currentEntry.after;
        }
    }

    /**
     * Method implements hashing functionality, which helps in finding the appropriate
     * bucket location to store our data.
     * This is very important method, as performance of HashMapCustom is very much
     * dependent on this method's implementation.
     *
     * @param key
     */
    private int hash(K key) {
        return Math.abs(key.hashCode()) % capacity;
    }

    /*
     * before and after are used for maintaining insertion order.
     */
    static class Entry<K, V> {
        K key;
        V value;
        Entry<K, V> next;
        Entry<K, V> before, after;

        public Entry(K key, V value, Entry<K, V> next) {
            this.key = key;
            this.value = value;
            this.next = next;
        }
    }
}

package com.test.custom;

public class CustomLinkedHashMapApp {

    public static void main(String[] args) {
        LinkedHashMapCustom<Integer, Integer> linkedHashMapCustom = new LinkedHashMapCustom<Integer, Integer>();
        linkedHashMapCustom.put(21, 12);
        linkedHashMapCustom.put(25, 121);
        linkedHashMapCustom.put(30, 151);
        linkedHashMapCustom.put(33, 15);
        linkedHashMapCustom.put(35, 89);
        System.out.println("Display values corresponding to keys>");
        System.out.println("value corresponding to key 21=" + linkedHashMapCustom.get(21));
        System.out.println("value corresponding to key 51=" + linkedHashMapCustom.get(51));
        System.out.print("Displaying : ");
        linkedHashMapCustom.display();
        System.out.println("\n\nvalue corresponding to key 21 removed: " + linkedHashMapCustom.remove(21));
        System.out.println("value corresponding to key 22 removed: " + linkedHashMapCustom.remove(22));
        System.out.print("Displaying : ");
        linkedHashMapCustom.display();
    }
}
```



/\*Output

Display values corresponding to keys>

value corresponding to key 21=12

value corresponding to key 51=null

Displaying : {21=12} {25=121} {30=151} {33=15} {35=89}

value corresponding to key 21 removed: true

value corresponding to key 22 removed: false

Displaying : {25=121} {30=151} {33=15} {35=89}

\*/