Contents of page >

-   1) What is memory leak in java?
    
-   2) Consequences of memory leak in java>
    
-   3) Scenarios where memory leak can happen in java >
    

-   3.1) Static variables/ fields are not garbage collected and can cause memory leak in java >
    
-   3.2) Thread Local Variables can cause memory leak in java >
    
-   3.3) Memory leak while using Autoboxing and unboxing in java >
    
-   3.4) Avoid memory leak using WeakHashMap in java >
    

-   3.7) Memory leaks can also be caused by native methods in java >
    
-   3.8) Memory leak in web applications in java >
    

-   4) You can detect memory leaks using following 10 ways \-
    

At times detecting a slow memory leak can become very difficult.

1) What is memory leak in java?

Memory leak happens when number of objects(these objects are not needed) created becomes large and time spent in [garbage collection](http://www.javamadesoeasy.com/2015/09/how-garbage-collection-works-internally.html) increases.

Ultimately application becomes very slow, non responsive and ends up throwing  OutOfmemoryError.

“Memory leaks ends up throwing [OutOfmemoryError](http://www.javamadesoeasy.com/2015/05/outofmemoryerror-in-java.html) but OutOfmemoryError doesn’t means memory leak in java”.

2) Consequences of memory leak in java>

-   Application becomes very slow.
    

-   And ultimately OutOfmemoryError is thrown in java.
    

3) Scenarios where memory leak can happen in java >

3.1) Static variables/ fields are not garbage collected and can cause memory leak in java >

Can Static variables be garbage collected in some scenario?

Static variables are only garbage collected when the class loader which has loaded the class in which static field is there is garbage collected.

So, be cautious as these static variables can create a memory leak in java.

### For more details click here - [Static variables are not garbage collected?](http://www.javamadesoeasy.com/2016/11/static-variables-are-not-garbage.html)

3.2) Thread Local Variables can cause memory leak in java >

A thread local variable is member field in the Thread class.

Such thread local variable can be used to hold the thread state.

But, thread local variable aren’t garbage collector till thread is alive.

So, be cautious as these thread local variable can create a memory leak in java.

### Also read about [ThreadLocal in multithreading in java](http://www.javamadesoeasy.com/2015/03/threadlocal-in-multithreading-in-java.html)

3.3) Memory leak while using Autoboxing and unboxing in java >

For addition of numbers we must prefer to use primitive data type, not the Object wrapper class.

Addition of numbers using Integers turns out into very costly operation in terms of performance, boxing/unboxing and unnecessary object formations.

Just imagine a situation where 1000000’s... of number are being added using Integer, it will literally explode our heap memory and boxing/unboxing operations will have adverse effect on performance.

If Integer has to added to Integer than first both will be converted to int in java \>

<table><colgroup><col width="624"></colgroup><tbody><tr><td><p><span>public</span><span> </span><span>class</span><span> AutoboxingCanCauseMemoryLeak1 {</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>public</span><span> </span><span>static</span><span> </span><span>void</span><span> main(String[] </span><span>args</span><span>) {</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>Integer </span><span>i1</span><span> = </span><span>4</span><span>;</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>Integer </span><span>i2</span><span> = </span><span>5</span><span>;</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>Integer </span><span>i3</span><span> = </span><span>0</span><span>;</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>for</span><span> (</span><span>int</span><span> </span><span>i</span><span> = 0; </span><span>i</span><span> &lt; 100; </span><span>i</span><span>++) {</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>i3</span><span> = </span><span>i1</span><span> + </span><span>i2</span><span> + </span><span>i3</span><span> ;</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>System.</span><span>out</span><span>.println(</span><span>i3</span><span>);</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>}</span></p><p><span>/* output</span></p><p><span>900</span></p><p><span>*/</span></p></td></tr></tbody></table>

In above program we are adding Integer to Integer.

-   First Integers will be unboxed to int,
    
-   then ints are added and result is int
    
-   Ultimate result (i.e. int) is autoboxed to Integer.
    

Java compiler will convert above code into -

<table><colgroup><col width="700"></colgroup><tbody><tr><td><p><span>public</span><span> </span><span>class</span><span> AutoboxingCanCauseMemoryLeak2 {</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>public</span><span> </span><span>static</span><span> </span><span>void</span><span> main(String[] </span><span>args</span><span>) {</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>Integer </span><span>i1</span><span> = Integer.</span><span>valueOf</span><span>(4);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>Integer </span><span>i2</span><span> = Integer.</span><span>valueOf</span><span>(5);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>Integer </span><span>i3</span><span> = </span><span>new</span><span> Integer(0) ;</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>for</span><span> (</span><span>int</span><span> </span><span>i</span><span> = 0; </span><span>i</span><span> &lt; 100; </span><span>i</span><span>++) {</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>i3</span><span> = Integer.</span><span>valueOf</span><span>(</span><span>i1</span><span>.intValue() + </span><span>i2</span><span>.intValue() + </span><span>i3</span><span>.intValue());</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>System.</span><span>out</span><span>.println(</span><span>i3</span><span>);</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>}</span></p><p><span>/* output</span></p><p><span>900</span></p><p><span>*/</span></p></td></tr></tbody></table>

So, Addition of numbers using Integers turns out into very costly operation in terms of performance, boxing/unboxing and unnecessary object formations, because it creates memory leak.

Solution of above memory leak >

For addition of numbers we must prefer to use primitive data type, not the Object wrapper class.

<table><colgroup><col width="*"></colgroup><tbody><tr><td><p><span>public</span><span> </span><span>class</span><span> AutoboxingMemoryLeakSolved {</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>public</span><span> </span><span>static</span><span> </span><span>void</span><span> main(String[] </span><span>args</span><span>) {</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>int</span><span> </span><span>i1</span><span> = 4;</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>int</span><span> </span><span>i2</span><span> = 5;</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>int</span><span> </span><span>i3</span><span> = 0;</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>for</span><span> (</span><span>int</span><span> </span><span>i</span><span> = 0; </span><span>i</span><span> &lt; 100; </span><span>i</span><span>++) {</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>i3</span><span> = </span><span>i1</span><span> + </span><span>i2</span><span> + </span><span>i3</span><span> ;</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>System.</span><span>out</span><span>.println(</span><span>i3</span><span>);</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>}</span></p><p><span>/* output</span></p><p><span>900</span></p><p><span>*/</span></p></td></tr></tbody></table>

3.4) Avoid memory leak using WeakHashMap in java >

WeakHashMap is hash table based implementation of the [Map](http://www.javamadesoeasy.com/2015/04/map-hierarchy-in-java-detailed-hashmap.html) interface, with weak keys.

An entry in a WeakHashMap will be automatically removed by garbage collector when its key is no longer in ordinary use. Mapping for a given key will not prevent the key from being discarded by the garbage collector, (i.e. made finalizable, finalized, and then reclaimed). When a key has been discarded its entry is removed from the map in java.

So, using WeakHashMap in place of [HashMap](http://weakhashmap/) can help us in avoiding memory leaks.

### For more details read : [WeakHashMap in java](http://www.javamadesoeasy.com/2015/04/weakhashmap-in-java.html)

If custom key is used and equals() and hashCode() method are not overridden then, key will not be retrieved by using get() method.

Because get() method internally calls equals() and hashCode() method for retrieving keys.

So, these keys will neither be used nor be garbage collected, so it’s a clear case of memory leak.

This also causes memory leak when keys are added using put() method.

So,  to avoid memory leak while using custom key you must always  

You must ensure that you close all the JDBC [Statement](http://www.javamadesoeasy.com/2015/11/jdbc-what-is-javasqlstatement-in-java.html), [PreparedStatement](http://www.javamadesoeasy.com/2015/11/jdbc-what-is-javasqlpreparedstatement.html), [CallableStatement](http://www.javamadesoeasy.com/2015/11/jdbc-what-is-javasqlcallablestatement.html) , [ResultSet](http://www.javamadesoeasy.com/2015/11/jdbc-what-is-resultset-in-java-types.html) and Connections in java to avoid memory leaks. You must always close all the above mentioned objects in [finally block](http://www.javamadesoeasy.com/2015/05/finally-block-in-java.html) in java because finally block is always executed irrespective of exception is thrown or not by java code.

Example of closing PreparedStatement, ResultSet and Connections in finally block in java-

<table><colgroup><col width="708"></colgroup><tbody><tr><td><p><span>import</span><span> java.sql.Connection;</span></p><p><span>import</span><span> java.sql.DriverManager;</span></p><p><span>import</span><span> java.sql.PreparedStatement;</span></p><p><span>import</span><span> java.sql.ResultSet;</span></p><p><span>import</span><span> java.sql.SQLException;</span></p><div dir="ltr"><p><span>/** Copyright (c), AnkitMittal <a href="http://javamadesoeasy.com/" rel="nofollow"><span>JavaMadeSoEasy</span><span>.</span><span>com</span></a> */</span></p></div><p><span>public</span><span> </span><span>class</span><span> JdbcBestPracticeExampleInJava {</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>public</span><span> </span><span>static</span><span> </span><span>void</span><span> main(String... </span><span>arg</span><span>) {</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>Connection </span><span>con</span><span> = </span><span>null</span><span>;</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>PreparedStatement </span><span>prepStmt</span><span> = </span><span>null</span><span>;</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>ResultSet </span><span>rs</span><span> = </span><span>null</span><span>; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span></span></span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>try</span><span> {</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>// Logic ..</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>} </span><span>catch</span><span> (ClassNotFoundException </span><span>e</span><span>) {</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>e</span><span>.printStackTrace();</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>} </span><span>catch</span><span> (SQLException </span><span>e</span><span>) {</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>e</span><span>.printStackTrace();</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>finally</span><span>{</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>try</span><span> {</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>if</span><span>(</span><span>rs</span><span>!=</span><span>null</span><span>) </span><span>rs</span><span>.close(); </span><span>//close resultSet</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>if</span><span>(</span><span>prepStmt</span><span>!=</span><span>null</span><span>) </span><span>prepStmt</span><span>.close(); </span><span>//close PreparedStatement</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>if</span><span>(</span><span>con</span><span>!=</span><span>null</span><span>) </span><span>con</span><span>.close(); </span><span>// close connection</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>} </span><span>catch</span><span> (SQLException </span><span>e</span><span>) {</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>e</span><span>.printStackTrace();</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>}</span></p></td></tr></tbody></table>

### For more read : [Java JDBC best practices tutorial](http://www.javamadesoeasy.com/2015/12/java-jdbc-best-practices.html)

3.7) Memory leaks can also be caused by native methods in java >

Memory allocated through native methods can cause some serious memory leak.

3.8) Memory leak in web applications in java >

Unused Objects stored in application scope are memory leak because they are not collected until web application is stopped.

2.  [JSTACK](http://www.javamadesoeasy.com/2015/03/jstack-thread-dumps-generating-and.html) - Java stack traces
    

4.  [Jstat](http://www.javamadesoeasy.com/2016/11/how-to-use-jstat-for-monitoring-garbage.html)  - Java Virtual Machine Statistics Monitoring Tool
    
5.  [JHAT](http://www.javamadesoeasy.com/2016/11/how-to-use-jhat-to-analyze-heat-dump.html) \- Java Heap Analysis Tool.
    
6.  jconsole
    
7.  hprof
    
8.  eclipse plugin
    

10.  [JFR](https://docs.oracle.com/javase/8/docs/technotes/guides/troubleshoot/memleaks001.html) (Java Flight Recorder)
    

Summary -

So in this core java tutorial we learned how to detect and fix memory leak in java.

Having any doubt? or you liked the tutorial! Please comment in below section.

RELATED LINKS>

### [Most important and frequently used VM (JVM) PARAMETERS with examples in JVM Heap memory in java](http://www.javamadesoeasy.com/2016/10/most-important-vm-jvm-parameters-with.html)