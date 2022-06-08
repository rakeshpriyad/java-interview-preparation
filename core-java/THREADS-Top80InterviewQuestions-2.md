![](https://lh3.googleusercontent.com/jmwUKNZF3N0vPw54clR3j7TRyS31XTKsBA99MPkCjtVdGxf3eg3OzPBdjz1kg22Cc8tLf-JI0mY9q8YYcgmgvMRWbtgbvm7fprmKDVMVJpROhDIfu0FALB-UZMbsJJtrUPboNtI) Interviewers always have great focus on checking interviewees in depth knowledge about overriding equals and hashCode() related question. So, I have tried to cover most of the possible question which could be framed related to this topic.

Question1. Why do we need to override equals and hashcode method?

Answer. Equals() and hashCode() are methods of java.lang.Object

It’s important to override equals equals() and hashCode() method of class if we are want to use class as key in HashMap.

If we don’t override equals() and hashCode() method we will be able to put object, but we won’t be able to retrieve object.

Before understanding the concept of overriding equals() and hashCode() method, we must understand what is bucket, Entry, and Entry.next

[![](https://lh6.googleusercontent.com/muTpxNFjMM3EE2Xa-83u6l9M-U95C3kklVavPXPyGq1v3KmrAbNkyzDhGre5f5OrVkXAvHoeWjpWmCRmSC_7hNFxOGTEWEQc3pvSTXMGedoJy2vVCwFeZhJJ-8u9zQ8cI9rN7A4)](http://javamadesoeasy.com/2015/02/hashmap-custom-implementation.html)

Entry is [LinkedList](http://javamadesoeasy.com/2015/01/doublylinkedlist-insert-and-delete-at.html) which contains information about key, value and next.

Entry.next points to next Entry in LinkedList.

\>Why to override hashcode method?

It helps in finding bucket location, where entry(with key-value pair) will be stored .

Entry (of type LinkedList) is stored in bucket (ArrayList).

If, hashCode() method is overridden properly, we will find bucket location using hashCode() method, we will obtain Entry on that bucket location, then iterate over each and every Entry (by calling Entry.next) and check whether new and existing keys are equal or not. If keys are equal replace key-value in Entry with new one, else call Entry.next But, now the question comes how to check whether two keys are equal or not. So, it’s time to implement equals() method.

If, hashcode method is not overridden for same key every time hashCode() method is called it might produce different hashcode, there might happen 2 cases i.e. when put and get method are called.

Case 1 : when put() method is called-

There might be possibility that same Entry (with key-value pair)  will

get stored at multiple locations in bucket.

Conclusion> key- value pair may get stored multiple times in HashMap.

Case 2 : when get() method is called-

As there is possibility that hashCode() method might return different hashcode & rather than searching on bucket location where Entry(with key) exists we might be searching for key on some other bucket location.

Conclusion>  key existed in HashMap, but still we were not able to locate the bucket location in which it was stored.

\>Why to override equals method?

Once we have located bucket location in which our Entry (with key-value pair) will be stored, Equals method helps us in finding whether new and existing keys are equal or not.

If we equals method is not overridden - though we will be able to find out correct bucket location if hashCode() method is overridden correctly, but still if equals method is not overridden, there might happen 2 cases i.e. when put and get method are called.

Case 1 : when put() method is called-

we might end up storing new Entry (with new key-value pair) multiple times on same bucket location (because of absence of equals method, we don’t have any way of comparing key’s),

In this case, even if keys are equal, we will keep on calling Entry.next until we reach last Entry on that bucket location and ultimately we will end up storing new Entry (with new key) again in same bucket location.

Conclusion> key- value pair stored multiple times in HashMap.

Case 2 : when get() method is called-

we won’t be able to compare two keys (new key with existing Entry.key) and we will call Entry.next and again we won’t be able to compare two keys and ultimately when Entry.next is null - we will return false.

Conclusion>  key existed in HashMap, but still we were not able to retrieve it.

So, it’s important to override equals method to check equality of two keys.

Question2. How do we override equals and hashcode method, write a code to use Employee as key in HashMap? (Important)

Answer. We will override equals() and hashCode() like this -

By overriding equals() and hashCode() method we could use custom object as key in HashMap.

1)  Check whether obj is null or not.

  if(obj==null) //If obj is null, return without comparing obj & Employee class.

2)  check whether  obj is instance of Employee class or not.

if(this.getClass()!=obj.getClass()) //identifies whether obj is instance of Employee class or not.

3) Then, type cast obj into employee instance.

 Employee emp=(Employee)obj;  //type cast obj into employee instance.

<table><colgroup><col width="684"></colgroup><tbody><tr><td><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>@Override</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>public</span><span> </span><span>boolean</span><span> </span><span>equals</span><span>(Object obj){</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>if</span><span>(obj==</span><span>null</span><span>)</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>return</span><span> </span><span>false</span><span>;</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>if</span><span>(</span><span>this</span><span>.getClass()!=obj.getClass())</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>return</span><span> </span><span>false</span><span>;</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>Employee emp=(Employee)obj;</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>return</span><span> (emp.</span><span>id</span><span>==</span><span>this</span><span>.</span><span>id</span><span> || emp.</span><span>id</span><span>.equals(</span><span>this</span><span>.</span><span>id</span><span>))</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>&amp;&amp; (emp.</span><span>name</span><span>==</span><span>this</span><span>.</span><span>name</span><span> || emp.</span><span>name</span><span>.equals(</span><span>this</span><span>.</span><span>name</span><span>)); &nbsp;&nbsp;</span><span><span> </span></span><span>&nbsp;&nbsp;</span><span><span></span></span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>@Override</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>public</span><span> </span><span>int</span><span> </span><span>hashCode</span><span>(){</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>int</span><span> hash=(</span><span>this</span><span>.</span><span>id</span><span>==</span><span>null</span><span> ? 0: </span><span>this</span><span>.</span><span>id</span><span>.hashCode() ) +</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>(</span><span>this</span><span>.</span><span>name</span><span>==</span><span>null</span><span> ? 0: </span><span>this</span><span>.</span><span>name</span><span>.hashCode() );</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>return</span><span> hash; &nbsp;&nbsp;&nbsp;&nbsp;</span><span><span></span></span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><br></td></tr></tbody></table>

Let’s say in an organisation there exists a employee with id=1 and name=’sam’     and some data is stored corresponding to him, but if modifications have to be made in data, previous data must be overridden.

Question3. What classes should i prefer to use a key in HashMap? (Important)

Answer. This question will check your in depth knowledge of Java’s Collection Api’s. we should prefer String, Integer, Long, Double, Float, Short and any other wrapper class. Reason behind using them as a key is that they override equals() and hashCode() method, we need not to write any explicit code for overriding equals() and hashCode() method.

Let’s use Integer class as key in HashMap.

<table><colgroup><col width="719"></colgroup><tbody><tr><td><p><span>import</span><span> java.util.HashMap;</span></p><p><span>import</span><span> java.util.Map;</span></p><p><span>public</span><span> </span><span>class</span><span> StringInMap {</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>public</span><span> </span><span>static</span><span> </span><span>void</span><span> main(String...a){</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>//HashMap's key=Integer class &nbsp;(Integer’s api has already overridden </span><span>hashCode()</span><span> and equals() method for us )</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>Map&lt;Integer, String&gt; hm=</span><span>new</span><span> HashMap&lt;Integer, String&gt;();</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>hm.put(1, </span><span>"data"</span><span>);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>hm.put(1, </span><span>"data OVERRIDDEN"</span><span>);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>System.</span><span>out</span><span>.println(hm.get(1));</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>}</span></p><p><span>/*OUTPUT</span></p><p><span>data OVERRIDDEN</span></p><p><span>*/</span></p></td></tr></tbody></table>

If, we note above program, what we will see is we didn’t override equals() and hashCode() method, but still we were able to store data in HashMap, override data and retrieve data using get method.

\>Let’s check in Integer’s API, how Integer class has overridden equals() and hashCode() method :  

<table><colgroup><col width="424"></colgroup><tbody><tr><td><p><span>public</span><span> </span><span>int</span><span> </span><span>hashCode</span><span>() {</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>return</span><span> </span><span>value</span><span>;</span></p><p><span><span></span></span><span>}</span></p><p><span>public</span><span> </span><span>boolean</span><span> </span><span>equals</span><span>(Object obj) {</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>if</span><span> (obj </span><span>instanceof</span><span> Integer) {</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>return</span><span> </span><span>value</span><span> == ((Integer)obj).intValue();</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>return</span><span> </span><span>false</span><span>;</span></p><p><span><span></span></span><span>}</span></p></td></tr></tbody></table>

Question4. If two objects have same hashcode, are they always equal?

Answer. No, It’s not necessary that object’s having same hashcode are always equal. Because same hashcode means object are stored on same bucket location, as key/object in bucket is stored in Entry([Linked List](http://javamadesoeasy.com/search/label/Linked%20List)), key/object’s might be stored on Entry.next (i.e. on some different entry)

Question5. If two objects equals() method return true, do objects always have same hashcode?

Answer. Yes, two objects can return true only if they are stored on same bucket location.

First, hashCode() method must have returned same hashcode for both objects, than on that bucket location’s Entry key.equals()  is called, which returns true to confirm objects/keys are equal.

So, if object’s equals return true, they always have same hashcode.

Question6. Can two unequal objects have same hashcode?

Answer. Yes, two unequal objects can have same hashcode.

Question7. What is difference between using instanceOf operator and getClass() in equals method?

Answer. If we use instanceOf it will return true for comparing current class with its subclass as well,

but getClass() will return true only if exactly same class is compared. Comparison with any subclass will return false.

Question8. How we can implement [HashMap](http://javamadesoeasy.blogspot.in/2015/02/hashmap-custom-implementation.html) for using Integer as key? (Important)

Answer. Here Interviewer tends to check your knowledge of overriding equals and hashCode method, and also how Api’s use Integer internally as key in HashMap.

Let’s understand in detail how Integer is used as key in [Hashmap](http://javamadesoeasy.blogspot.in/2015/02/hashmap-custom-implementation.html).

Initially, we have bucket of capacity=4. (all indexes of bucket i.e. 0,1,2,3 are pointing to null).

Note: Initial capacity provided by Java Api is different.

![](https://lh5.googleusercontent.com/UO4oUyDWA38ilQnMuYuHOQrv1ZzQWf2JvDkBmo7J8sh1cbgHANjA5hA-Xy2F8KeK_lDAyTO_SLX2T29zSgNOZ7J5BLiJ9bgdCrgkze5Zx0UqO3Vxgr5od6u6dnu-HSJRrBpNdjk)

Let’s put first key-value pair in HashMap-

Key=21, value=12

newEntry Object will be formed like this >![](https://lh5.googleusercontent.com/3OSzQoLOGFiSdpvjEArlvPiW6E_vXMu9dDamumPZqPvDVG3Vyli3ixqWmlAz6YQ5geRKIk9tRWF7UlHgAb0RmeNqAnZkLsA3pmTy-8X3iyTRliFhyyMIKNtKcxXUgElkB9WwSFQ)

We will calculate hash by using our hash(K key) method \- in this case it returns

key/capacity= 21%4= 1.

So, 1 will be the index of bucket on which newEntry object will be stored.

We will go to 1st index as it is pointing to null we will put our newEntry object there.

At completion of this step, our HashMap will look like this-

![](https://lh4.googleusercontent.com/5ToUlvBRb0flWucmg3ilzOFis7h7ydPJ4ixZaX9-685PgXK8peHOmzm-VaTMgUhWVvUgkH92gXCUgf-uRkESx4pIi5TdyGsvWfm5cI4ol63Ro8rA2ZQCWXdCFcK0LMDWyLHi4J4)

Interviewers sometimes tend to confuse interviewees by framing different question by overriding either of equals() or hashCode() method. Interviewers aims to check in depth knowledge of interviewees that how many buckets are formed, what is sizeOf HashMap after each experiment and get() method returns object or not (Important).

Question10. How many buckets will be there and what will be size of HashMap?

<table><colgroup><col width="*"></colgroup><tbody><tr><td><p><span>package</span><span> p1;</span></p><p><span>import</span><span> java.util.HashMap;</span></p><p><span>class</span><span> Employee {</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>private</span><span> String </span><span>name</span><span>;</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>public</span><span> Employee(String name) { </span><span>// constructor</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>this</span><span>.</span><span>name</span><span> = name;</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>//no hashCode() method</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>//no equals() method</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>@Override</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>public</span><span> String toString() {</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>return</span><span> </span><span>"Employee[ name="</span><span> + </span><span>name</span><span> + </span><span>"] "</span><span>;</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>}</span></p><div dir="ltr"><p><span>/** Copyright (c), AnkitMittal <a href="http://javamadesoeasy.com/" rel="nofollow"><span>JavaMadeSoEasy</span><span>.</span><span>com</span></a> */</span></p></div><p><span>public</span><span> </span><span>class</span><span> Program1 {</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>public</span><span> </span><span>static</span><span> </span><span>void</span><span> main(String...a){</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>HashMap&lt;Employee, String&gt; hm=</span><span>new</span><span> HashMap&lt;Employee, String&gt;();</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>hm.put(</span><span>new</span><span> Employee(</span><span>"a"</span><span>), </span><span>"emp1"</span><span>);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>hm.put(</span><span>new</span><span> Employee(</span><span>"b"</span><span>), </span><span>"emp2"</span><span>);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>hm.put(</span><span>new</span><span> Employee(</span><span>"a"</span><span>), </span><span>"emp1 OVERRIDDEN"</span><span>);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>System.</span><span>out</span><span>.println(</span><span>"HashMap's data&gt; "</span><span>+hm);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>System.</span><span>out</span><span>.println(</span><span>"HashMap's size&gt; "</span><span>+hm.size());</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>System.</span><span>out</span><span>.println(hm.get(</span><span>new</span><span> Employee(</span><span>"a"</span><span>)));</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>}</span></p></td></tr></tbody></table>

Answer.

/\*OUTPUT

HashMap's data> {Employee\[ name=a\] =emp1 OVERRIDDEN, Employee\[ name=a\] =emp1, Employee\[ name=b\] =emp2}

HashMap's size> 3

null

\*/

Buckets\= As hashCode() method is not there, hashcode generated for 3 objects will be different and we will end up using 3 buckets.

Size\= As equals() method is not their, size will be 3.

get()\=we won’t be able to get object.

Question11. How many buckets will be there and what will be size of HashMap?

<table><colgroup><col width="*"></colgroup><tbody><tr><td><p><span>package</span><span> p2;</span></p><p><span>import</span><span> java.util.HashMap;</span></p><p><span>class</span><span> Employee {</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>private</span><span> String </span><span>name</span><span>;</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>public</span><span> Employee(String name) { </span><span>// constructor</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>this</span><span>.</span><span>name</span><span> = name;</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>@Override</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>public</span><span> </span><span>int</span><span> hashCode(){</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>return</span><span> (</span><span>this</span><span>.</span><span>name</span><span>==</span><span>null</span><span> ? 0: </span><span>this</span><span>.</span><span>name</span><span>.hashCode() ); &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span></span></span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>@Override</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>public</span><span> </span><span>boolean</span><span> equals(Object obj){ &nbsp;&nbsp;</span><span><span></span></span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>Employee emp=(Employee)obj;</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>return</span><span> (emp.</span><span>name</span><span>==</span><span>this</span><span>.</span><span>name</span><span> || emp.</span><span>name</span><span>.equals(</span><span>this</span><span>.</span><span>name</span><span>)); &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span></span></span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>@Override</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>public</span><span> String toString() {</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>return</span><span> </span><span>"Employee[ name="</span><span> + </span><span>name</span><span> + </span><span>"] "</span><span>;</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>}</span></p><div dir="ltr"><p><span>/** Copyright (c), AnkitMittal <a href="http://javamadesoeasy.com/" rel="nofollow"><span>JavaMadeSoEasy</span><span>.</span><span>com</span></a> */</span></p></div><p><span>public</span><span> </span><span>class</span><span> Program2 {</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>public</span><span> </span><span>static</span><span> </span><span>void</span><span> main(String...a){</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>HashMap&lt;Employee, String&gt; hm=</span><span>new</span><span> HashMap&lt;Employee, String&gt;();</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>hm.put(</span><span>new</span><span> Employee(</span><span>"a"</span><span>), </span><span>"emp1"</span><span>);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>hm.put(</span><span>new</span><span> Employee(</span><span>"b"</span><span>), </span><span>"emp2"</span><span>);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>hm.put(</span><span>new</span><span> Employee(</span><span>"a"</span><span>), </span><span>"emp1 OVERRIDDEN"</span><span>);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>System.</span><span>out</span><span>.println(</span><span>"HashMap's data&gt; "</span><span>+hm);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>System.</span><span>out</span><span>.println(</span><span>"HashMap's size&gt; "</span><span>+hm.size());</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>System.</span><span>out</span><span>.println(hm.get(</span><span>new</span><span> Employee(</span><span>"a"</span><span>)));</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>}</span></p></td></tr></tbody></table>

Answer.

/\*OUTPUT

HashMap's data> {Employee\[ name=b\] =emp2, Employee\[ name=a\] =emp1 OVERRIDDEN}

HashMap's size> 2

emp1 OVERRIDDEN

\*/

Buckets\= As hashCode() method is overridden perfectly, 2 bucket locations will be used.

Size\= As equals() method is their, size will be 2,

value corresponding to Employee with id=1 and name=’sam’ was employee1 data   

& was overridden by value employee1 data OVERRIDDEN

get()\=we will be able to get object.

Question12. How many buckets will be there and what will be size of HashMap?

<table><colgroup><col width="*"></colgroup><tbody><tr><td><p><span>package</span><span> p3;</span></p><p><span>import</span><span> java.util.HashMap;</span></p><p><span>class</span><span> Employee {</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>private</span><span> String </span><span>name</span><span>;</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>public</span><span> Employee(String name) { </span><span>// constructor</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>this</span><span>.</span><span>name</span><span> = name;</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>@Override</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>public</span><span> </span><span>int</span><span> hashCode(){</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>return</span><span> 1; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span></span></span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>@Override</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>public</span><span> </span><span>boolean</span><span> equals(Object obj){ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span></span></span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>return</span><span> </span><span>true</span><span>; &nbsp;&nbsp;&nbsp;&nbsp;</span><span><span></span></span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>@Override</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>public</span><span> String toString() {</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>return</span><span> </span><span>"Employee[ name="</span><span> + </span><span>name</span><span> + </span><span>"] "</span><span>;</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>}</span></p><div dir="ltr"><p><span>/** Copyright (c), AnkitMittal <a href="http://javamadesoeasy.com/" rel="nofollow"><span>JavaMadeSoEasy</span><span>.</span><span>com</span></a> */</span></p></div><p><span>public</span><span> </span><span>class</span><span> Program3 {</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>public</span><span> </span><span>static</span><span> </span><span>void</span><span> main(String...a){</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>HashMap&lt;Employee, String&gt; hm=</span><span>new</span><span> HashMap&lt;Employee, String&gt;();</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>hm.put(</span><span>new</span><span> Employee(</span><span>"a"</span><span>), </span><span>"emp1"</span><span>);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>hm.put(</span><span>new</span><span> Employee(</span><span>"b"</span><span>), </span><span>"emp2"</span><span>);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>hm.put(</span><span>new</span><span> Employee(</span><span>"a"</span><span>), </span><span>"emp1 OVERRIDDEN"</span><span>);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>System.</span><span>out</span><span>.println(</span><span>"HashMap's data&gt; "</span><span>+hm);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>System.</span><span>out</span><span>.println(</span><span>"HashMap's size&gt; "</span><span>+hm.size());</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>System.</span><span>out</span><span>.println(hm.get(</span><span>new</span><span> Employee(</span><span>"a"</span><span>)));</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>}</span></p></td></tr></tbody></table>

Answer.

/\*OUTPUT

HashMap's data> {Employee\[ name=a\] =emp1 OVERRIDDEN}

HashMap's size> 1

emp1 OVERRIDDEN

\*/

Buckets\= As hashCode() method returns 1, only 1 bucket location will be used.

Size\= As equals() method always returns true, size will be 1, all three employees will be stored on same bucket location in one Entry (new Entry will keep on overriding previous Entry). We will always get last stored key-value pair only.

get()\=we will be able to get object.

Question13. How many buckets will be there and what will be size of HashMap?

<table><colgroup><col width="*"></colgroup><tbody><tr><td><p><span>package</span><span> p4;</span></p><p><span>import</span><span> java.util.HashMap;</span></p><p><span>class</span><span> Employee {</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>private</span><span> String </span><span>name</span><span>;</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>public</span><span> Employee(String name) { </span><span>// constructor</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>this</span><span>.</span><span>name</span><span> = name;</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>@Override</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>public</span><span> </span><span>int</span><span> hashCode(){</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>return</span><span> 1; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span></span></span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>//no equals() method</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>@Override</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>public</span><span> String toString() {</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>return</span><span> </span><span>"Employee[ name="</span><span> + </span><span>name</span><span> + </span><span>"] "</span><span>;</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>}</span></p><div dir="ltr"><p><span>/** Copyright (c), AnkitMittal <a href="http://javamadesoeasy.com/" rel="nofollow"><span>JavaMadeSoEasy</span><span>.</span><span>com</span></a> */</span></p></div><p><span>public</span><span> </span><span>class</span><span> Program4 {</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>public</span><span> </span><span>static</span><span> </span><span>void</span><span> main(String...a){</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>HashMap&lt;Employee, String&gt; hm=</span><span>new</span><span> HashMap&lt;Employee, String&gt;();</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>hm.put(</span><span>new</span><span> Employee(</span><span>"a"</span><span>), </span><span>"emp1"</span><span>);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>hm.put(</span><span>new</span><span> Employee(</span><span>"b"</span><span>), </span><span>"emp2"</span><span>);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>hm.put(</span><span>new</span><span> Employee(</span><span>"a"</span><span>), </span><span>"emp1 OVERRIDDEN"</span><span>);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>System.</span><span>out</span><span>.println(</span><span>"HashMap's data&gt; "</span><span>+hm);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>System.</span><span>out</span><span>.println(</span><span>"HashMap's size&gt; "</span><span>+hm.size());</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>System.</span><span>out</span><span>.println(hm.get(</span><span>new</span><span> Employee(</span><span>"a"</span><span>)));</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>}</span></p></td></tr></tbody></table>

Answer.

/\*OUTPUT

HashMap's data> {Employee\[ name=a\] =emp1 OVERRIDDEN, Employee\[ name=b\] =emp2, Employee\[ name=a\] =emp1}

HashMap's size> 3

null

\*/

Buckets\= As hashCode() method returns 1, only 1 bucket location will be used.

Size\= As equals() method doesn’t exist, size will be 3, all three employees will be stored on same bucket location but in different Entry.

get()\=we won’t be able to get object.

Question14. How many buckets will be there and what will be size of HashMap?

<table><colgroup><col width="*"></colgroup><tbody><tr><td><p><span>package</span><span> p5;</span></p><p><span>import</span><span> java.util.HashMap;</span></p><p><span>class</span><span> Employee {</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>private</span><span> String </span><span>name</span><span>;</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>public</span><span> Employee(String name) { </span><span>// constructor</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>this</span><span>.</span><span>name</span><span> = name;</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>//no hashCode() method</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>@Override</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>public</span><span> </span><span>boolean</span><span> equals(Object obj){ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span></span></span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>return</span><span> </span><span>true</span><span>; &nbsp;&nbsp;&nbsp;&nbsp;</span><span><span></span></span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>@Override</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>public</span><span> String toString() {</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>return</span><span> </span><span>"Employee[ name="</span><span> + </span><span>name</span><span> + </span><span>"] "</span><span>;</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>}</span></p><div dir="ltr"><p><span>/** Copyright (c), AnkitMittal <a href="http://javamadesoeasy.com/" rel="nofollow"><span>JavaMadeSoEasy</span><span>.</span><span>com</span></a> */</span></p></div><p><span>public</span><span> </span><span>class</span><span> Program5 {</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>public</span><span> </span><span>static</span><span> </span><span>void</span><span> main(String...a){</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>HashMap&lt;Employee, String&gt; hm=</span><span>new</span><span> HashMap&lt;Employee, String&gt;();</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>hm.put(</span><span>new</span><span> Employee(</span><span>"a"</span><span>), </span><span>"emp1"</span><span>);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>hm.put(</span><span>new</span><span> Employee(</span><span>"b"</span><span>), </span><span>"emp2"</span><span>);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>hm.put(</span><span>new</span><span> Employee(</span><span>"a"</span><span>), </span><span>"emp1 OVERRIDDEN"</span><span>);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>System.</span><span>out</span><span>.println(</span><span>"HashMap's data&gt; "</span><span>+hm);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>System.</span><span>out</span><span>.println(</span><span>"HashMap's size&gt; "</span><span>+hm.size());</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>System.</span><span>out</span><span>.println(hm.get(</span><span>new</span><span> Employee(</span><span>"a"</span><span>)));</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>}</span></p></td></tr></tbody></table>

Answer.

/\*OUTPUT

HashMap's data> {Employee\[ name=b\] =emp2, Employee\[ name=a\] =emp1 OVERRIDDEN, Employee\[ name=a\] =emp1}

HashMap's size> 3

null

\*/

Buckets\= As hashCode() method is not there, hashcode generated for 3 objects will be different and we will end up using 3 buckets.

Size\= Though equals() method is their(but because of hashCode() method’s absence) which always returns true, we won’t be able to locate correct bucket location for calling equals() method, so, size will be 3.

get()\=we won’t be able to get object.

Question15. How many buckets will be there and what will be size of HashMap?

<table><colgroup><col width="*"></colgroup><tbody><tr><td><p><span>package</span><span> p6;</span></p><p><span>import</span><span> java.util.HashMap;</span></p><p><span>class</span><span> Employee {</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>private</span><span> String </span><span>name</span><span>;</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>public</span><span> Employee(String name) { </span><span>// constructor</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>this</span><span>.</span><span>name</span><span> = name;</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>@Override</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>public</span><span> </span><span>int</span><span> hashCode(){</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>return</span><span> (</span><span>this</span><span>.</span><span>name</span><span>==</span><span>null</span><span> ? 0: </span><span>this</span><span>.</span><span>name</span><span>.hashCode() ); &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span></span></span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>//no equals() method</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>@Override</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>public</span><span> String toString() {</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>return</span><span> </span><span>"Employee[ name="</span><span> + </span><span>name</span><span> + </span><span>"] "</span><span>;</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>}</span></p><div dir="ltr"><p><span>/** Copyright (c), AnkitMittal <a href="http://javamadesoeasy.com/" rel="nofollow"><span>JavaMadeSoEasy</span><span>.</span><span>com</span></a> */</span></p></div><p><span>public</span><span> </span><span>class</span><span> Program6 {</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>public</span><span> </span><span>static</span><span> </span><span>void</span><span> main(String...a){</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>HashMap&lt;Employee, String&gt; hm=</span><span>new</span><span> HashMap&lt;Employee, String&gt;();</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>hm.put(</span><span>new</span><span> Employee(</span><span>"a"</span><span>), </span><span>"emp1"</span><span>);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>hm.put(</span><span>new</span><span> Employee(</span><span>"b"</span><span>), </span><span>"emp2"</span><span>);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>hm.put(</span><span>new</span><span> Employee(</span><span>"a"</span><span>), </span><span>"emp1 OVERRIDDEN"</span><span>);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>System.</span><span>out</span><span>.println(</span><span>"HashMap's data&gt; "</span><span>+hm);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>System.</span><span>out</span><span>.println(</span><span>"HashMap's size&gt; "</span><span>+hm.size());</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>System.</span><span>out</span><span>.println(hm.get(</span><span>new</span><span> Employee(</span><span>"a"</span><span>)));</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>}</span></p></td></tr></tbody></table>

Answer.

/\*OUTPUT

HashMap's data> {Employee\[ name=b\] =emp2, Employee\[ name=a\] =emp1 OVERRIDDEN, Employee\[ name=a\] =emp1}

HashMap's size> 3

null

\*/

Buckets\= As hashCode() method is overridden perfectly, 2 bucket locations will be used.

Size\= As equals() method is not their, size will be 3,

get()\=we won’t be able to get object.

Question16. How many buckets will be there and what will be size of HashMap?

<table><colgroup><col width="*"></colgroup><tbody><tr><td><p><span>package</span><span> p7;</span></p><p><span>import</span><span> java.util.HashMap;</span></p><p><span>class</span><span> Employee {</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>private</span><span> String </span><span>name</span><span>;</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>public</span><span> Employee(String name) { </span><span>// constructor</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>this</span><span>.</span><span>name</span><span> = name;</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>//no hashCode() method</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>@Override</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>public</span><span> </span><span>boolean</span><span> equals(Object obj){ &nbsp;&nbsp;</span><span><span></span></span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>Employee emp=(Employee)obj;</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>return</span><span> (emp.</span><span>name</span><span>==</span><span>this</span><span>.</span><span>name</span><span> || emp.</span><span>name</span><span>.equals(</span><span>this</span><span>.</span><span>name</span><span>)); &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span></span></span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>@Override</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>public</span><span> String toString() {</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>return</span><span> </span><span>"Employee[ name="</span><span> + </span><span>name</span><span> + </span><span>"] "</span><span>;</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>}</span></p><div dir="ltr"><p><span>/** Copyright (c), AnkitMittal <a href="http://javamadesoeasy.com/" rel="nofollow"><span>JavaMadeSoEasy</span><span>.</span><span>com</span></a> */</span></p></div><p><span>public</span><span> </span><span>class</span><span> Program7 {</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>public</span><span> </span><span>static</span><span> </span><span>void</span><span> main(String...a){</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>HashMap&lt;Employee, String&gt; hm=</span><span>new</span><span> HashMap&lt;Employee, String&gt;();</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>hm.put(</span><span>new</span><span> Employee(</span><span>"a"</span><span>), </span><span>"emp1"</span><span>);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>hm.put(</span><span>new</span><span> Employee(</span><span>"b"</span><span>), </span><span>"emp2"</span><span>);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>hm.put(</span><span>new</span><span> Employee(</span><span>"a"</span><span>), </span><span>"emp1 OVERRIDDEN"</span><span>);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>System.</span><span>out</span><span>.println(</span><span>"HashMap's data&gt; "</span><span>+hm);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>System.</span><span>out</span><span>.println(</span><span>"HashMap's size&gt; "</span><span>+hm.size());</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>System.</span><span>out</span><span>.println(hm.get(</span><span>new</span><span> Employee(</span><span>"a"</span><span>)));</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>}</span></p></td></tr></tbody></table>

Answer.

/\*OUTPUT

HashMap's data> {Employee\[ name=a\] =emp1, Employee\[ name=a\] =emp1 OVERRIDDEN, Employee\[ name=b\] =emp2}

HashMap's size> 3

null

\*/

Buckets\= As hashCode() method is not there, hashcode generated for 3 objects will be different and we will end up using 3 buckets.

Size\= Though equals() method is their(but because of hashCode() method’s absence), we won’t be able to locate correct bucket location for calling equals() method, so, size will be 3.

get()\=we won’t be able to get object.

Must Read :  [![](https://lh6.googleusercontent.com/8IQnatHEJEXV8qJOR4PWm8U8hQAdlHXYGpCa7GAiV2DXfOsL6nOM83CM9YxrL4zov9Yx3KziKEW70xk3keEB-daG-gszuhBqGVrNaYPU53T-RnQM_lOeoK4ScA7pUwvP_ygd1gg)HashMap Custom implementation](http://javamadesoeasy.com/2015/02/hashmap-custom-implementation.html) for detailed implementation of equals and hashcode method and for understanding bucket and Entry )