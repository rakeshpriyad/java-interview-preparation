Garbage collection is very important topic in java interview.

Interviewers always have great focus on [garbage collection](http://www.javamadesoeasy.com/2015/09/how-garbage-collection-works-internally.html). So, I have tried to covered this in 50 questions which could be framed from garbage collection. To answers these questions in comprehensive manner I have given programs and detailed explanation for for each and every question. These questions will be very handy for fresh learners, experienced and architect level java developers. Also read about [JVM (java virtual machine)](http://www.javamadesoeasy.com/2015/06/jvm-java-virtual-machine.html) and [Top 30 JVM(Java Virtual Machine) interview Questions and answers](http://www.javamadesoeasy.com/2017/03/top-30-jvmjava-virtual-machine.html)

Question 1. Where are objects created in memory? On stack or heap?

Answer.  Let’s start garbage collection interview question with very basic question. All Java objects are always created on heap in java.

Question 2. What is Garbage Collection process in java?

Answer.  Basic garbage collection interview question. Definitely all developers must know it :)

GC (Garbage collection) is the process by which JVM cleans objects (unused objects) from heap to reclaim heap space in java.

Question 3. What is Automatic Garbage Collection in JVM heap memory in java?

Answer.  Very important thing you must know in garbage collection interview.

Automatic garbage collection is the process of

-   Identifying objects which are in use in java heap memory and
    
-   Which objects are not in use in java heap memory and
    
-   deleting the unused objects in java heap memory.
    

Question 4. How to Identify objects which are in use in JVM heap memory in java?

Answer. It is very basic garbage collection interview question.

Objects in use (or referenced objects) are those objects which are still needed by java program, some part of java program is still pointing to that object.

Question 5. Which objects are not in use in JVM heap memory in java?

Answer. Another very basic garbage collection interview question.

Objects not in use (or unreferenced objects) are those objects which are not needed by java program, no part of java program is pointing to that object.

So, these unused objects can be cleaned in GC (garbage collection) process and memory used by an unreferenced object can be reclaimed.

Question 6. Explain JVM Heap memory (Hotspot heap structure) with diagram in java?

Answer.  A very very important garbage collection interview question for freshers, experienced software professionals. Architects must know it on finger tips.

![](https://lh3.googleusercontent.com/fw8HzY4cHl4cSRRRLWQEDOMqLp-hJMauGKbtIzSq2_KiagPomPALQyJ9paZkUZGncwsA_xVQyqMyIOvUJMW-MwjBRPtp7aj4sWcJ_f4IbZiKiv1UEvXel8vtAxaN4Qoa9uA4cenu)

JVM Heap memory (Hotspot heap structure)  in java consists of following elements>

1.  Young Generation
    

-   1a) Eden,
    
-   1b) S0 (Survivor space 0)
    
-   1c) S1 (Survivor space 1)
    

3.  Old Generation (Tenured)
    
4.  Permanent Generation.
    

So, JVM Heap memory (Hotspot heap structure) is divided into three parts Young Generation, Old Generation (tenured) and Permanent Generation.

Young Generation is further divided into Eden, S0 (Survivor space 0) and S1 (Survivor space 1).

Question 7. What is Throughput in gc(garbage collection) in java ?

Answer.  Basic terms you should know about garbage collection interview.

In short, Throughput is the time not spent in garbage collection (GC) ( in percent).

Throughput focuses on maximizing the amount of work by an application in a specific period of time. Examples of how throughput might be measured include >

-   The number of transactions completed in a given time.
    
-   The number of jobs that a batch program can complete in an hour.
    
-   The number of database queries that can be completed in an hour.
    

Question 8. What are pauses in gc(garbage collection) in java ?

Answer.  Another basic term which is used very often in garbage collection. Pauses is applications pauses i.e. when application doesn’t gives any response because of garbage collection (GC).

Question 9. What is Young Generation in JVM Heap memory in java?

Answer.  This is important garbage collection interview question.

New objects are allocated in Young generation.

Young Generation consists of >

-   1a) Eden,
    
-   1b) S0 (Survivor space 0)
    
-   1c) S1 (Survivor space 1)
    

Young Generation is further divided into three parts Eden, S0 (Survivor space 0) and S1 (Survivor space 1).

Question 10. What is Old Generation in JVM Heap memory in java?

Answer.  This is another important garbage collection interview question.

The Old Generation(tenured generation) is used for storing the long surviving aged objects (Some of the objects which aren't cleaned up survive in young generation and gets aged.  Eventually such objects are moved from young to old generation).

Major garbage collection occurs in Old Generation.

At what time (or what age) objects are moved from young to old generation in JVM heap?

There is some threshold set for young generation object and when that age is met, the object gets moved to the old generation.

What is major garbage collection in java? (We will read about it in detail in upcoming interview questions)

When the old generation fills up, this causes a major garbage collection. Objects are cleaned up from old generation.

Question 11. What is Permanent Generation in JVM Heap memory in java?

Answer.  This is third generation in java heap and hence is very important garbage collection interview question. It is complex question and hence experienced software professionals must know it.

Permanent generation (Permgen) Space contains metadata required by JVM to describe the classes and methods used in the application.

The permanent generation is included in a full garbage collection in java.

The permanent generation space is populated at runtime by JVM based on classes in use in the application.

The permanent generation space also contains Java SE library classes and methods in java.

JVM garbage collects those classes when classes are no longer required and space may be needed for other classes in java.

Question 12. What is Minor garbage collection in JVM Heap memory in java?

Answer.  It's important to know about minor garbage collection before interview.

Minor garbage collection occurs in Young Generation

New objects are allocated in Young generation.

When the young generation fills up, this causes a minor garbage collection.

All the unreferenced (dead) objects are cleaned up from young generation.

When objects are moved from young to old generation in JVM heap?

Some of the objects which aren't cleaned up survive in young generation and gets aged.  Eventually such objects are moved from young to old generation.

What is Stop the World Event?

Minor garbage collections are called Stop the World events.

All the non-daemon threads running in application are stopped during minor garbage collections (i.e. the application stops for while).

[Daemon threads](http://www.javamadesoeasy.com/2015/03/daemon-threads-12-salient-features-of.html) performs minor garbage collection. (Daemon threads are low [priority threads](http://www.javamadesoeasy.com/2015/03/thread-priorities-setpriority-and.html) which runs intermittently in background for doing garbage collection).

Question 13. What is Major garbage collection in JVM Heap memory in java?

Answer.  It’s easy garbage collection interview question. Prepare it well.

Major garbage collection occurs in Old Generation

The Old Generation is used for storing the long surviving aged objects.

At what time (or what age) objects are moved from young to old generation in JVM heap?

There is some threshold set for young generation object and when that age is met, the object gets moved to the old generation during garbage collection in java.

When the old generation fills up, this causes a major garbage collection. Objects are cleaned up from old generation.

Major collection is much slower than minor garbage collection in jvm heap because it involves all live objects.

Major garbage collection are Stop the World Event in java?

Major garbage collections are also called Stop the World events.

All the non-daemon threads running in application are stopped during major garbage collections.

Major garbage collections in responsive applications in java?

Major garbage collections should be minimized for responsive applications because applications must not be stopped for long.

Optimizing Major garbage collections in responsive applications in java?

Selection of appropriate garbage collector for the old generation space affects the length of the “Stop the World” event for a major garbage collection.

Question 14. What is Full garbage collection in JVM Heap memory in java?

Answer.  You must be able to differentiate between garbage collection and full garbage collection. Don’t mess up between two terms.

Full garbage collection occurs in permanent generation in java

Permanent generation Space contains metadata required by JVM to describe the classes and methods used in the application.

The permanent generation space is populated at runtime by JVM based on classes in use in the application.

JVM garbage collects those classes when classes are no longer required and space may be needed for other classes in java.

Question 15. Mention some of the most important VM (JVM) PARAMETERS you have used for Young Generation in JVM Heap memory?

Answer.  It is important and challenging garbage collection interview question for experienced developers to specifically identify and answer jvm parameters for young generation.

\-Xmn : -Xmn sets the size of young generation.

Example of using \-Xmn VM (JVM) option in java >

java -Xmn512m MyJavaProgram

[\-XX:NewRatio](http://www.javamadesoeasy.com/2016/10/what-is-xxnewratio-jvm-parameters-in.html) : NewRatio controls the size of young generation.

Example of using -XX:NewRatio  VM option in java >

\-XX:NewRatio=3 means that the ratio between the young and old/tenured generation is 1:3.

[\-XX:NewSize](http://www.javamadesoeasy.com/2016/10/what-are-xxnewsize-and-xxmaxnewsize-jvm.html) - NewSize is minimum size of young generation which is allocated at initialization of JVM.

\-XX:MaxNewSize \- MaxNewSize is the maximum size of young generation that JVM can use.

SurvivorRatio can be used to tune the size of the survivor spaces, but this is often not as important for performance.

Example of using -XX:SurvivorRatio > \-XX:SurvivorRatio=6 sets the ratio between each survivor space and eden to be 1:6.

Question 16. Mention some of the most important VM (JVM) PARAMETERS you have used for Old Generation (tenured) in JVM Heap memory?

Answer.   Another is difficult and challenging garbage collection interview question for experienced developers to specifically identify and answer jvm parameters for old generation.

\-XX:NewRatio : NewRatio controls the size of young and old generation.

Example of using -XX:NewRatio, \-XX:NewRatio=3 means that the ratio between the young and old/tenured generation is 1:3.

Question 17. Mention some of the most important VM (JVM) PARAMETERS you have used for Permanent Generation?

Answer.  Another difficult garbage collection interview question for experienced developers to specifically identify and answer jvm parameters for permanent generation.

\-XX:PermSize: It’s is initial value of Permanent Space which is allocated at startup of JVM.

Example of using -XX:PermSize VM (JVM) option in java >

java -XX:PermSize=512m MyJavaProgram

It will set initial value of Permanent Space as 512 megabytes to JVM

\-XX:MaxPermSize: It’s maximum value of Permanent Space that JVM can allot up to.

Example of using \-XX:MaxPermSize VM (JVM) option in java >

java -XX:MaxPermSize=512m MyJavaProgram

It will set maximum value of Permanent Space as 512 megabytes to JVM

### For more details - [What are \-XX:PermSize and \-XX:MaxPermSize with Differences](http://www.javamadesoeasy.com/2016/10/what-are-xxpermsize-and-xxmaxpermsize.html)

Question 18. What are different Garbage collectors available in JVM?

Answer.  Very very important garbage collection interview question. Experienced developers must know about all of them.

### Different type of garbage collectors in java>

### [Serial collector / Serial GC (Garbage collector) in java](http://www.javamadesoeasy.com/2016/10/serial-collector-serial-gc-garbage.html)

### [Throughput GC (Garbage collector) or Parallel collector in java](http://www.javamadesoeasy.com/2016/10/throughput-gc-garbage-collector-or.html)

### [Concurrent Mark Sweep (CMS) collector / concurrent low pause garbage collector](http://www.javamadesoeasy.com/2016/10/concurrent-mark-sweep-cms-collector.html)

### [G1 garbage collector / Garbage first collector](http://www.javamadesoeasy.com/2016/10/g1-garbage-collector-garbage-first.html)

### [PS Scavenge](http://www.javamadesoeasy.com/2016/11/ps-scavenge-and-ps-marksweep.html)

### [PS MarkSweep](http://www.javamadesoeasy.com/2016/11/ps-scavenge-and-ps-marksweep.html)

### [ParNew collector](http://www.javamadesoeasy.com/2016/11/parnew-collector.html)

Question 19 . What is Serial collector / Serial GC (Garbage collector) in java?

Answer.  Freshers must know about this garbage collection interview question.

-   Serial collector is also called Serial GC (Garbage collector) in java.
    
-   Serial collector is simply also called Serial collector in java.
    
-   Serial GC (Garbage collector) is rarely used in java.
    
-   Serial GC is designed for the single threaded environments in java.
    
-   In Serial GC (Garbage collector) , both minor and major garbage collections are done serially by one thread in java.
    
-   Serial GC uses a mark-compact collection method. The serial garbage collector is the default for client style machines in Java SE 5 and 6.
    

When to Use the Serial GC (garbage Collector) in java >

-   The Serial GC is the garbage collector of choice for most applications that do not have low pause time requirements and run on client-style machines.
    
-   Serial garbage collector is also popular in environments where a high number of JVMs are run on the same machine.
    

Vm (JVM) option for enabling serial GC (garbage Collector) in java \>

\-XX:+UseSerialGC

Example of Passing Serial GC in Command Line for starting jar>

java -Xms256m -Xms512m  \-XX:+UseSerialGC -jar d:\\MyJar.jar

Question 20. What is Throughput GC (Garbage collector) or Parallel collector in java?

Answer.  Experienced developers must know about this garbage collection interview question.

1\. Features of Throughput GC (Garbage collector) in java  >

-   Throughput GC (garbage collector)
    
-   ParallelGC (garbage collector)
    
-   Throughput collector
    
-   ParallelGC collector
    

-   Throughput garbage collector is the default garbage collector for JVM in java.
    
-   Throughput garbage collector uses multiple threads to execute a minor collection and so reduces the serial execution time of the application in java.
    

2\. When to Use the Throughput GC (Garbage collector) in java >

The Throughput garbage collector should be used when application can afford low pauses in java.

And application is running on host with multiple CPU’s in java.

3\. Vm (JVM) option for enabling throughput GC (Garbage collector) in java >

\-XX:+UseParallelGC

Example of using throughput collector in Command Line for starting jar>

java -Xms256m -Xms512m  \-XX:+UseParallelGC -jar d:\\MyJar.jar

With this Vm (JVM) option you get a

-   Multi-threaded young generation garbage collector in java,
    
-   single-threaded old generation garbage collector in java and
    
-   single-threaded compaction of old generation in java.
    

Vm (JVM) option for enabling throughput collector with n number of threads in java \>

\-XX:ParallelGCThreads=<numberOfThreads>

Another Vm (JVM) option for enabling throughput collector in java \>

\-XX:+UseParallelOldGC

4\. Goals for Throughput GC (Garbage collector) in java >

-   Maximum pause time goal (Highest priority)
    
-   Throughput goal
    
-   Minimum footprint goal (Lowest priority)
    

Question 21. What is Concurrent Mark Sweep (CMS) Collector / concurrent low pause collector in java?

Answer.  Very important garbage collection interview question for experienced developers and software architects.

1\. Features of Concurrent Mark Sweep (CMS) Collector / concurrent low pause collector in java  >

-   concurrent low pause collector
    
-   concurrent low pause GC (garbage collector)
    

-   CMS GC (garbage Collector)
    
-   CMS Collector
    

-   concurrent low pause collector
    
-   concurrent low pause GC (garbage collector)
    

-   Concurrent Mark Sweep (CMS) collector collects the old/tenured generation in java.
    
-   Concurrent Mark Sweep (CMS) Collector minimize the pauses by doing most of the garbage collection work concurrently with the application threads in java.
    
-   Concurrent Mark Sweep (CMS) Collector on live objects >
    

Concurrent Mark Sweep (CMS) Collector does not copy or compact the live objects. A garbage collection is done without moving the live objects. If fragmentation becomes a problem, allocate a larger heap in java.

### 2. When to Use the Concurrent Low Pause Collector in java

-   Concurrent Low Pause Collector should be used if your applications that require low garbage collection pause times in java.
    
-   Concurrent Low Pause Collector should be used when your application can afford to share processor resources with the garbage collector while the application is running in java.
    
-   Concurrent Low Pause Collector is beneficial to applications which have a relatively large set of long-lived data (a large tenured generation) and run on machines with two or more processors in java.
    

Examples when to use  Concurrent Mark Sweep (CMS) collector / concurrent low pause collector should be used for >

Example 1 - Desktop UI application that respond to events,

Example 2 - Web server responding to a request and

Example 3 - Database responding to queries.

3. Vm (JVM) option for enabling Concurrent Mark Sweep (CMS) Collector in java >

\-XX:+UseConcMarkSweepGC

Example of using Concurrent Mark Sweep (CMS) collector / concurrent low pause collector in Command Line for starting jar>

java -Xms256m -Xms512m  \-XX:+UseConcMarkSweepGC -jar d:\\MyJar.jar

### 4. Concurrent Mark Sweep (CMS) Collector / concurrent low pause collector working in detail in java >

As mentioned above Concurrent Mark Sweep (CMS) collector collects the old/tenured generation (i.e. performs Major garbage collection process).

5. Heap Structure for CMS garbage Collector

CMS garbage collectors didies heap into three sections: young generation, old generation, and permanent generation of a fixed memory size.

Young Generation is further divided into Eden, S0 (Survivor space 0) and S1 (Survivor space 1).

5.4.6. Detailed Steps in GC (garbage collection) cycle in Concurrent Mark Sweep (CMS) Collector / concurrent low pause garbage collector in java >

Young Generation GC (garbage Collection) in java

-   Live objects are copied from the Eden space and survivor space to the other survivor space.
    
-   Any older objects that have reached their aging threshold are promoted to old generation.
    

After Young generation GC (garbage Collection) in java

-   After a young GC, the Eden space and one of the survivor spaces is cleared.
    
-   promoted objects (older objects that have reached their aging threshold in young GC) are are available in old generation.
    

Old Generation GC (garbage Collection) with CMS in java

1.  Initial mark phase \- (First pause happens/ stop the world event ) - mark live/reachable objects (Example - objects on thread stack, static objects etc.) and elsewhere in the heap (Example - the young generation).
    

2.  Concurrent marking phase \- (No pause phase ) \-  finds live objects while the application continues to execute.
    

3.  Remark - (Second pause happens/ stop the world events) - It finds objects that were missed during the concurrent marking phase due to the concurrent execution of the application threads.
    

Old Generation GC (garbage Collection) - Sweep phase (Concurrent Sweep phase) in java

4.  Sweep phase -  do the concurrent sweep, memory is freed up.
    

-   Objects that were not marked in the previous phase are deallocated in place.
    
-   There is no compaction
    

Unmarked objects are equal to Dead Objects.

Old Generation GC (garbage Collection) - After Sweeping

5.  Reset phase - do the concurrent reset.
    

Question 22. What is G1 Garbage Collector (or Garbage First) in java?

Answer.  Very important garbage collection interview question for senior software developers. But I must say freshers must have at least some knowledge of this garbage collector.

1\. The G1 garbage collector features \-

-   G1 garbage collector
    
-   G1 collector
    
-   G1 GC (garbage collector)
    
-   Garbage first collector
    

-   G1 garbage collector was introduced in Java 7
    

-   G1 garbage collector  - default garbage collector in [Java 9](http://www.javamadesoeasy.com/2016/08/java-9-new-features.html)
    

-   G1 garbage collector was designed to replace CMS collector(Concurrent Mark-Sweep garbage Collector).
    
-   G1 garbage collector is parallel,
    

-   G1 garbage collector is concurrent, and
    
-   G1 garbage collector is incrementally compacting low-pause garbage collector in java.
    

-   G1 garbage collector has much better layout from the other garbage collectors like serial, throughput and CMS garbage collectors in java.
    
-   G1(Garbage First) collector compacts sufficiently to completely avoid the use of fine-grained free lists for allocation, and instead relies on regions.
    
-   G1(Garbage First) collector allows customizations by allowing users to specify pause times.
    
-   G1 Garbage Collector (or Garbage First) limits GC pause times and maximizes throughput.
    

2. Vm (JVM) option for enabling G1 Garbage Collector (or Garbage First) in java >

\-XX:+UseG1GC

Example of using G1 Garbage Collector in Command Line for starting jar>

java -Xms256m -Xms512m  \-XX:+UseG1GC -jar d:\\MyJar.jar

3. G1(Garbage First) collector functioning >

CMS garbage collectors divides heap into three sections: young generation, old generation, and permanent generation of a fixed memory size.

All memory objects end up in one of these three sections.

The G1 collector takes a different approach than CMS garbage collector in partitioning java heap memory.

The heap is split/partitioned into many fixed sized regions (eden, survivor, old generation regions), but there is not a fixed size for them. This provides greater flexibility in memory usage.

4\. When to use G1 garbage collector >

G1 must be used when applications that require large heaps with limited GC latency.

Example - Application that require

-   heaps around 5-6GB or larger and
    
-   pause time required below 0.5 seconds
    

5\. When to switch from CMS (or old garbage collectors) to G1 garbage collector \>

Applications using CMS garbage collector may switch to G1 when >

-   Full GC durations are too long or too frequent.
    
-   The rate of object allocation or promotion varies significantly.
    
-   Long garbage collection (longer than 0.5 to 1 second)
    

6. The G1(Garbage First) collector working Step by Step >

The G1 collector takes a different approach than CMS garbage collector in partitioning java heap memory.

6.1. G1(Garbage First) garbage collector Heap Structure >

The heap is split/partitioned into many fixed sized regions (eden, survivor, old generation regions), but there is not a fixed size for them. This provides greater flexibility in memory usage.

Each region’s size is chosen by JVM at startup.

Generally heap is divided into 2000 regions by JVM varying in size from 1 to 32Mb.

6.2. G1(Garbage First) garbage collector Heap Allocation >

As mentioned above there are following region in heap >

Eden, survivor and old generation region. Also,

Humongous and unused regions are there in heap.

6.3. Young Generation in G1 garbage collector

Generally heap is divided into 2000 regions by JVM.

Minimum size of region can be 1Mb and

Maximum size of region can be 32Mb.

Regions are not required to be contiguous like CMS garbage collector.

Young GC in G1 garbage collector

-   Live objects are copied or moved to survivor regions.
    
-   If objects aging threshold is met it get promoted to old generation regions.
    
-   It is STW (stop the world) event. Eden size and survivor size is calculated for the next young GC.
    
-   The young GC is done parallely using multiple threads.
    

End of a Young GC with G1 garbage collector

At this stage Live objects have been evacuated (copied or moved) to >

-   survivor regions or
    
-   old generation regions.
    

6.4. Old Generation Collection with G1 garbage collector

G1 collector is low pause collector for old generation objects.

Initial Mark -

-   It is STW (stop the world) event.
    
-   With G1, it is piggybacked on a normal young GC. Mark survivor regions (root regions) which may have references to objects in old generation.
    

Root Region Scanning -

-   Scan survivor regions for references into the old generation.
    
-   This happens while the application continues to run. The phase must be completed before a young GC can occur.
    

Concurrent Marking -

-   Find live objects over the entire heap.
    
-   This happens while the application is running.
    
-   This phase can be interrupted by young generation garbage collections.
    

Remark (Stop the World Event) -

-   Completes the marking of live object in the heap.
    
-   Uses an algorithm called snapshot-at-the-beginning (SATB) which is much faster than algorithm used in the CMS collector.
    

Cleanup (Stop the World Event and Concurrent) -

-   Performs accounting on live objects and completely free regions. (Stop the world)
    
-   Young generation and old generation are reclaimed at the same time
    
-   Old generation regions are selected based on their liveness.
    

-   Scrubs the Remembered Sets. (Stop the world)
    
-   Reset the empty regions and return them to the free list. (Concurrent)
    

Question 23. What are Difference Serial and Throughput gc (garbage Collector) ?

Answer.  It is important garbage collection interview question.

Serial collector uses one thread to execute garbage collection.

Throughput collector uses multiple threads to execute garbage collection.

Serial GC is the garbage collector of choice for applications that do not have low pause time requirements and run on client-style machines.

Throughput GC is the garbage collector of choice for applications that have low pause time requirements.

Question 24. Which methods is called for garbage collection in java?

Answer. It is very important garbage collection interview question.

Gc (garbage collector) calls finalize method for garbage collection.

finalize method is called only once by garbage collector for an object in java.

finalize method is in java.lang.Object class.

Program to call System.gc() method in Java >

<table><colgroup><col width="701"></colgroup><tbody><tr><td><p><span>public</span><span> </span><span>class</span><span> RunGarbageCollectorExample {</span></p><p><span>&nbsp;&nbsp;</span><span>public</span><span> </span><span>static</span><span> </span><span>void</span><span> main(String[] </span><span>args</span><span>) {</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.</span><span>out</span><span>.println(</span><span>"About to call garbage collection - using System.gc() method"</span><span>);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.</span><span>gc</span><span>();</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.</span><span>out</span><span>.println(</span><span>"garbage collection - using System.gc() method called"</span><span>);</span></p><p><span>&nbsp;&nbsp;}</span></p><p><span>}</span></p><p><span>/*OUTPUT</span></p><p><span>About to call garbage collection - using System.gc() method</span></p><p><span>garbage collection - using System.gc() method called</span></p><p><span>*/</span></p></td></tr></tbody></table>

Question 25. Can we force early garbage collection in java?

Answer. Another garbage collection interview question for experienced developers

Yes it is possible to force early garbage collection in java. But how?

We can force early gc (garbage collection) in java by using following methods >

      System.gc();

      Runtime.getRuntime().gc();

      System.runFinalization();

      Runtime.getRuntime().runFinalization();

Question 26. Is it good practice to call System.gc() in Java?

Answer. Answer in short is No, but let’s learn why we must not call System.gc() in java >

-   First of all calling System.gc() does not guarantee that it will immediately start performing garbage collection.
    
-   Even calling System.gc() may not do anything. Call to perform garbage collection may be ignored completely.
    
-   JVM is different for different platforms because [java is platform independent language](http://www.javamadesoeasy.com/2015/06/java-tutorial-advantage-where-is-java.html), so you never know about which garbage collector your jvm will run i.e. what algorithm does it follow to perform garbage collection.
    

Question 27. Is garbage collection guaranteed when we call finalize() methods?

Answer. Answer in short is No.

By calling finalize method JVM runs the finalize() methods of any objects pending finalization i.e. objects which have been discarded but there finalize method is yet to be run. After finalize method is executed JVM reclaims space from all the discarded objects in java.

Calling finalize methods does not guarantee that it will immediately start performing garbage collection.

Finalize method execution is not assured - We must not override finalize method to write some critical code of application because methods execution is not assured. Writing some critical code in finalize method and relying on it may make application to go horribly wrong in java.

Question 28. Which thread performs garbage collection in java?

Answer. It is simple garbage collection interview question.

[Daemon threads](http://www.javamadesoeasy.com/2015/03/daemon-threads-12-salient-features-of.html) are low priority threads which runs intermittently in background for doing garbage collection (gc) in java.

Question 29. Tell us something about ParNew collector in java?

Answer. This is garbage collection interview question for 5 years+ experienced developers only.  ParNew collector is the young generation collector. It is the parallel copy collector, it uses multiple threads in parallel. Vm parameter for enabling ParNew collector is -XX:+UseParNewGC.

Question 30. Do you know about PS Scavenge and PS MarkSweep in java?

Answer.  This is garbage collection interview question for 3 to 5 years+ experienced developers only.

PS Scavenge >

-   ## PS Scavenge is the Young generation collectors
    
-   ## It is the parallel scavenge collector.
    
-   ## PS Scavenge uses multiple threads in parallel for garbage collection.
    
-   ## Vm parameter for enabling PS Scavenge >
    

\-XX:+UseParallelGC

PS MarkSweep >

-   ## PS MarkSweep is the old generation collector.
    
-   ## PS MarkSweep is the parallel scavenge mark sweep collector.
    
-   ## It uses the multiple threads in parallel for garbage collection.
    
-   ## Vm parameter for enabling PS MarkSweep >
    

\-XX:+UseParallelOldGC

### Read : [PS Scavenge and PS MarkSweep](http://www.javamadesoeasy.com/2016/11/ps-scavenge-and-ps-marksweep.html)

Question 31. How garbage collection is done using Marking and deletion in java?

Answer.  It is very very important garbage collection interview question for all java developers.

1) Marking

Marking is a process in which gc (garbage collector) identifies which parts of memory (occupied by objects) are in use and which are not.

![](https://lh4.googleusercontent.com/ia6ojVZ1gdnL-f7An56GK_bMrPzsxfYPGWTuwIQQCgvvHVEFn1_-kNWJRd2W-RgL2UoKw0T4m4Tbw7Tfvyqf0CgKzl3NTvoxLflSsEj7O3_taggnbT2zpnzjj1dO83XFGYuoaX2O)

Before Marking >

All the objects are shown in blue, at this stage

-   some of objects might be in use (referenced objects)  and
    
-   some of objects might not be in use (unreferenced objects) .
    

After Marking >

Objects in use (or referenced objects or Alive objects) are shown in blue.

Objects not in use (or unreferenced objects) objects are shown in Orange.

2) Deletion

Step 2a : Normal Deletion

-   Normal deletion removes all the unreferenced objects and
    
-   leaves referenced objects and pointers to free space.
    

Step 2b : Deletion with Compacting

Deletion with Compacting is done to improve the performance than normal deleting.

-   Deletion with Compacting removes all the unreferenced objects and
    
-   compacts the remaining referenced objects by moving all the referenced objects together.
    

Question 32. Mention how to use different garbage collectors by passing vm parameters in java?

Answer.  It is very important to know how to use different garbage collectors by passing vm parameters.

1) Vm (JVM) option for enabling serial GC (garbage Collector) in java \>

Example of Passing Serial GC in Command Line for starting jar>

java -Xms256m -Xms512m  \-XX:+UseSerialGC -jar d:\\MyJar.jar

2) Vm (JVM) option for enabling throughput GC (Garbage collector) in java \>

Or  (throughput collector with n number of threads)

\-XX:ParallelGCThreads=<numberOfThreads>

Or

\-XX:+UseParallelOldGC

3) Vm (JVM) option for enabling Concurrent Mark Sweep (CMS) Collector in java >

Or  (CMS garbage collector with n number of threads)

\-XX:ParallelCMSThreads=<n>

4) Vm (JVM) option for enabling G1 Garbage Collector

Question 33. Can you make objects eligible for garbage collection in java?

Answer.  Another tricky and challenging garbage collection interview question for experienced developers in java.

Yes, we can make object explicitly eligible for garbage collection.

Object which is set explicitly set to null becomes eligible for gc (garbage collection) in java .

Example 1 >

String s=”abc”; //s is currently not eligible for gc (garbage collection) in java.

s = null;   //Now, s is currently eligible for gc (garbage collection) in java.

Example 2 >

 List list =new ArrayList(); //list is currently not eligible for gc (garbage collection).

 list = null;   //Now, list is currently eligible for gc (garbage collection).

Question 34. What is Difference in garbage collection in C/C++ and Java (Hint : In terms of memory allocation and deallocation of objects)?

Answer.  It will test of your awareness and skills to compare java with other languages.

In java garbage collection (memory allocation and deallocation of objects) is an automatic process.

But, In C and C++ memory allocation and deallocation of objects) is a manual process.

Question 35. Does variables declared inside block becomes eligible for gc (garbage collection) when we exit that block in java?

Answer.  Yes, All the variables declared inside block becomes eligible for gc (garbage collection) when we exit that block (As scope of those variable is only that block) in java.

Example of garbage collection while using block in java -

<table><colgroup><col width="694"></colgroup><tbody><tr><td><p><span>class</span><span> MyClass {</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>public</span><span> </span><span>static</span><span> </span><span>void</span><span> main(String[] </span><span>args</span><span>) {</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>boolean</span><span> </span><span>var</span><span> = </span><span>false</span><span>;</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>if</span><span> (</span><span>var</span><span>) { </span><span>// begin block 1</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>int</span><span> </span><span>x</span><span> = 1; </span><span>// x is declared inside block</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>//..........</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>//code inside block...</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>//..........</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>} </span><span>// end block 1 //And </span><span>now x is eligible for </span><span>gc</span><span> (garbage collection)</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>else</span><span> { </span><span>// begin block 2</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>int</span><span> </span><span>y</span><span> = 1;</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>//..........</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>//code inside block...</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>//..........</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>} </span><span>// end block 2 //And </span><span>now y is eligible for </span><span>gc</span><span> (garbage collection)</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>}</span></p></td></tr></tbody></table>

Question 36. Have you used verbose for understanding garbage collection?

Answer.  It is garbage collection interview question for experienced developers and software architects.

-   \[GC 325407K->83000K(776768K), 0.2300771 secs\]
    

-   GC \- GC indicates minor Garbage Collection (i.e. in young generation).
    
-   325407K - The combined size of live objects before gc(garbage collection).
    
-   83000K - The combined size of live objects after gc(garbage collection).
    
-   0.2300771 secs - time it took for gc(garbage collection) to occur.
    

-   .\[Full GC 325407K->83000K(776768K), 0.2300771 secs\]
    

-   Full GC - Full GC Indicates major garbage collection (i.e. in tenured generation).
    

Question 37. What is monitoring and analyzing the garbage collection in java?

Answer.  It is very important garbage collection interview question for specially 3 years+ experienced developers.

2.  Understanding how [JVM](http://www.javamadesoeasy.com/2015/06/jvm-java-virtual-machine.html) is currently working.
    
3.  What type of garbage collection [algorithms](http://www.javamadesoeasy.com/2016/10/marking-and-deleting-objects-for.html) are used
    

5.  Analyzing Java heap dumps,
    
6.  Monitoring live Java applications,
    
7.  Analyze profiling data,
    
8.  Detecting Memory leak for classes and arrays,
    

10.  Detecting abnormal thread termination,
    

12.  Finding System and process CPU utilization thresholds,
    
13.  Find Heap usage thresholds.
    
14.  Find time taken in Garbage collection and [Finalizer](http://www.javamadesoeasy.com/2015/05/finalize-method-in-java-10-salient.html) queue length.
    

Question 38. How to monitor and analyze the garbage collection in java ?

Answer.  This is in continuation to above garbage collection interview question. We can use different tools to generate the garbage collection information and then analyze it.

VisualVM is most popular way to generate Thread Dump and is most widely used by developers. It helps us in analyzing threads performance, [thread states](http://www.javamadesoeasy.com/2015/03/thread-states-thread-life-cycle-in-java.html), CPU consumed by threads etc.

For more details please read :

2.  [JSTACK](http://www.javamadesoeasy.com/2015/03/jstack-thread-dumps-generating-and.html) - Java stack traces
    

jstack is very easy way to generate Thread dump and is widely used by developers.

4.  [Jstat](http://www.javamadesoeasy.com/2016/11/how-to-use-jstat-for-monitoring-garbage.html)  - Java Virtual Machine Statistics Monitoring Tool
    

“The jstat command displays performance statistics for an instrumented Java HotSpot VM. The target JVM is identified by its virtual machine identifier, or vmid option.”

5.  [JHAT](http://www.javamadesoeasy.com/2016/11/how-to-use-jhat-to-analyze-heat-dump.html) \- Java Heap Analysis Tool.
    
6.  [jconsole](http://docs.oracle.com/javase/7/docs/technotes/tools/share/jconsole.html) - jconsole option can be used to obtain a heap dump.
    

10.  [JFR](https://docs.oracle.com/javase/8/docs/technotes/guides/troubleshoot/memleaks001.html) (Java Flight Recorder) can be used for detecting memory leak.
    

### Read in detail : [How to monitor and analyze the garbage collection in 10 ways in java](http://www.javamadesoeasy.com/2016/12/how-to-monitor-and-analyze-garbage.html)

Question 39. What is memory leak in java? Consequences of memory leak?

Answer.  It is must know question especially for experienced developers, freshers must at least have little information on it.

Memory leak happens when number of objects(these objects are not needed) created becomes large and time spent in [garbage collection](http://www.javamadesoeasy.com/2015/09/how-garbage-collection-works-internally.html) increases.

Ultimately application becomes very slow, non responsive and ends up throwing  OutOfmemoryError.

“Memory leaks ends up throwing [OutOfmemoryError](http://www.javamadesoeasy.com/2015/05/outofmemoryerror-in-java.html) but OutOfmemoryError doesn’t means memory leak in java”.

Consequences of memory leak >

-   Application becomes very slow.
    
-   Time spent in garbage collection increases.
    

Question 40. Can you please explain some scenarios where you have faced memory leak, OR scenarios where memory leak could happen in java?

Answer.   It is must know question for experienced developers, 3 to 5 years developers must know at least three scenarios and 5 years+ developes must know at least 5 scenarios. And for software architects this count must be eight.

Scenarios where memory leak can happen in java >

1) Static variables/ fields are not garbage collected and can cause memory leak in java >

Static variables are only garbage collected when the class loader which has loaded the class in which static field is there is garbage collected.

So, be cautious as these static variables can create a memory leak in java.

### For more details click here - [Static variables are not garbage collected?](http://www.javamadesoeasy.com/2016/11/static-variables-are-not-garbage.html)

2) Thread Local Variables can cause memory leak in java >

A [thread local](http://www.javamadesoeasy.com/2015/03/threadlocal-in-multithreading-in-java.html) variable is member field in the Thread class.

Such thread local variable can be used to hold the thread state.

But, thread local variable aren’t garbage collector till thread is alive.

3) Memory leak while using Autoboxing and unboxing in java >

For addition of numbers we must prefer to use primitive data type, not the Object wrapper class.

Addition of numbers using Integers turns out into very costly operation in terms of performance, boxing/unboxing and unnecessary object formations.

Just imagine a situation where 1000000’s... of number are being added using Integer, it will literally explode our heap memory and boxing/unboxing operations will have adverse effect on performance.

4) Avoid memory leak using WeakHashMap in java

An entry in a [WeakHashMap](http://www.javamadesoeasy.com/2015/04/weakhashmap-in-java.html) will be automatically removed by garbage collector when its key is no longer in ordinary use. So, using WeakHashMap in place of [HashMap](http://weakhashmap/) can help us in avoiding memory leaks.

If custom key is used and [equals() and hashCode() method](http://www.javamadesoeasy.com/2015/02/override-equals-and-hashcode-method.html) are not overridden then, key will not be retrieved by using get() method.

Because get() method internally calls equals() and hashCode() method for retrieving keys.

So, these keys will neither be used nor be garbage collected, so it’s a clear case of memory leak.

So, to avoid memory leak while using custom key you must always  

You must ensure that you close all the JDBC [Statement](http://www.javamadesoeasy.com/2015/11/jdbc-what-is-javasqlstatement-in-java.html), [PreparedStatement](http://www.javamadesoeasy.com/2015/11/jdbc-what-is-javasqlpreparedstatement.html), [CallableStatement](http://www.javamadesoeasy.com/2015/11/jdbc-what-is-javasqlcallablestatement.html) , [ResultSet](http://www.javamadesoeasy.com/2015/11/jdbc-what-is-resultset-in-java-types.html) and Connections in java to avoid memory leaks. You must always close all the above mentioned objects in [finally block](http://www.javamadesoeasy.com/2015/05/finally-block-in-java.html) in java because finally block is always executed irrespective of exception is thrown or not by java code.

### Also read : [Java JDBC best practices tutorial](http://www.javamadesoeasy.com/2015/12/java-jdbc-best-practices.html)

7) Memory leaks can also be caused by native methods in java > Memory allocated through native methods can cause some serious memory leak.

8) Memory leak in web applications in java >

Unused Objects stored in application scope are memory leak because they are not collected until web application is stopped.

Question 41. Comment on relation between OutOfMemoryError and garbage collection in java?

Answer.  There is huge relationship between [OutOfMemoryError](http://www.javamadesoeasy.com/2015/05/outofmemoryerror-in-java.html) and garbage collection in java.

OutOfMemoryError may be thrown when an excessive amount of time is being by jvm in performing garbage collection and very little memory is being freed.

A long lived application might be unintentionally holding references to objects and this prevents the objects from being garbage collected. Holding of objects for a long time is also a kind of memory leak in java.

Answer.  OutOfMemory[Error](http://www.javamadesoeasy.com/2015/05/javalangerror-in-exception-handling-in.html): GC Overhead limit exceeded - indicates that the garbage collector is running all the time and Java program is making very slow progress.

After a GC (garbage collection), if the garbage collector is spending more than 98% of its time in doing garbage collection and if less than 2% of the java heap memory space is reclaimed, then OutOfMemoryError - GC Overhead limit exceeded - is thrown in java.

This OutOfMemoryError is generally thrown because all the live objects are not getting garbage collected properly and java heap space is not available for new objects.

Answer.  Another tricky and important garbage collection interview question which will check your in depth knowledge about jvm and garbage collection. Generally when we are facing java.lang.[OutOfMemoryError - Java permgen space](http://www.javamadesoeasy.com/2015/05/outofmemoryerror-in-java.html), then we need to change permgen size of tomcat or eclipse or JVM wherever you are facing this error.

### Read In detail > [OutOfMemoryError: Permgen space - How to set or change permgen size in tomcat server, eclipse?](http://www.javamadesoeasy.com/2016/12/how-to-set-or-change-permgen-size-in.html)

Question 44. How to Solve OutOfMemoryError : unable to create new native Thread by passing appropriate jvm parameter?

Answer.  A

Solution 1 to “java.lang.OutOfMemoryError : unable to create new native Thread”  >

Try to increase the the -Xss value so that new threads gets enough stack space.

Solution 2 to “java.lang.OutOfMemoryError : unable to create new native Thread”  >

Alternatively you could also increase the heap size available using -[Xms and -Xmx options](http://www.javamadesoeasy.com/2016/10/what-are-xms-and-xmx-jvm-parameters-in.html) and then try to increase and set appropriate -Xss value.

Example of using -Xss

Pass memory value you want to allocate to thread stack with -Xss.

java -Xss512m MyJavaProgram

It will set the default stack size of JVM  to 512 megabytes.

Question 45. How to Solve OutOfMemoryError : Java heap space by passing appropriate jvm parameter?

Answer.  A

Does Exception in thread threadName - java.lang.OutOfMemoryError - Java heap space indicates memory leak?

No, this OutOfMemoryError does not necessarily means that it is memory leak.

Increase the heap size using [\-Xms and -Xmx](http://www.javamadesoeasy.com/2016/10/what-are-xms-and-xmx-jvm-parameters-in.html) [jvm](http://www.javamadesoeasy.com/2015/06/jvm-java-virtual-machine.html) parameters as a solution to this issue.

### Must read: [How to set, change, increase or decrease heap size in tomcat server and eclipse to avoid OutOfMemoryError ?](http://www.javamadesoeasy.com/2016/12/how-to-set-change-increase-or-decrease.html)

### \>[How to set or change permgen size in tomcat server, eclipse?](http://www.javamadesoeasy.com/2016/12/how-to-set-or-change-permgen-size-in.html)

Question 46. How to set appropriate heap size in eclipse in java?

Where we can configure

-   [\-Xms](http://www.javamadesoeasy.com/2016/10/what-are-xms-and-xmx-jvm-parameters-in.html) (minimum heap size which is allocated at initialization of JVM),
    
-   \-Xmx (maximum heap size that JVM can use. )
    

-   [\-XX:MaxPermSize](http://www.javamadesoeasy.com/2016/10/what-are-xxpermsize-and-xxmaxpermsize.html): It’s maximum value of Permanent Space that JVM can allot up to.
    

Question 47. What is default garbage collectors for Java 7?

Answer.  Another very important garbage collection interview question for all developers.

Question 48. What is default garbage collectors for Java 8 ?

Answer.  

What is default garbage collector for Java 8 >

Question 49. What is default garbage collectors for Java 9?

Answer.  Another very important garbage collection interview question for experienced developers.

default garbage collector for Java 9 >

### Read in detail : [What are default garbage collectors for Java 7, 8 and 9](http://www.javamadesoeasy.com/2016/12/what-is-default-garbage-collector-for.html)

interview Question 50. Throw some light on garbage collection and WeakHashMap in java?

Answer.  Another very tricky garbage collection interview question for experienced developers in java.

java.util.[WeakHashMap](http://www.javamadesoeasy.com/2015/04/weakhashmap-in-java.html) is hash table based implementation of the Map interface, with weak keys.

An entry in a WeakHashMap will be automatically removed by garbage collector when its key is no longer in ordinary use. Mapping for a given key will not prevent the key from being discarded by the garbage collector, (i.e. made finalizable, finalized, and then reclaimed). When a key has been discarded its entry is removed from the map in java.

java.util.WeakHashMap is implementation of the java.util.[Map](http://www.javamadesoeasy.com/2015/04/map-hierarchy-in-java-detailed-hashmap.html) interface in java.

The behavior of the java.util.WeakHashMap class depends upon garbage collector

The behavior of the WeakHashMap class depends upon garbage collector in java. Because the garbage collector may discard keys at any time, in WeakHashMap it may look like some unknown thread is silently removing entries.

Each key object in a WeakHashMap is stored indirectly as the referent of a weak reference. Therefore a key will be removed automatically only after the weak references to it, both inside and outside of the map, have been cleared by the garbage collector.

What is JVM (Java virtual machine) in java?

JVM is the virtual machine on which java code executes.

In next section we will discuss Top 20 JVM(Java Virtual Machine) interview Questions and answers  

Having any doubt? or you liked the tutorial! Please comment in below section.

RELATED LINKS>

### [Collection interview questions](http://www.javamadesoeasy.com/2015/05/collection-top-50-interview-questions.html)

### [Thread concurrency - Top 50 interview questions and answers](http://www.javamadesoeasy.com/2015/03/thread-concurrency-top-50-interview.html)

### [THREADS - Top 80 interview questions and answers, Set-2](http://www.javamadesoeasy.com/2015/03/threads-top-75-interview-questions-and_10.html)

### [EXCEPTIONS - Top 60 interview questions and answers](http://www.javamadesoeasy.com/2015/05/exceptions-top-60-interview-questions_16.html)

### Different type of garbage collectors in java>

### \>[Serial collector / Serial GC (Garbage collector) in java](http://www.javamadesoeasy.com/2016/10/serial-collector-serial-gc-garbage.html)

### \>[Throughput GC (Garbage collector) or Parallel collector in java](http://www.javamadesoeasy.com/2016/10/throughput-gc-garbage-collector-or.html)

### \>[Concurrent Mark Sweep (CMS) collector / concurrent low pause garbage collector in java](http://www.javamadesoeasy.com/2016/10/concurrent-mark-sweep-cms-collector.html)

### \>[G1 garbage collector / Garbage first collector in java](http://www.javamadesoeasy.com/2016/10/g1-garbage-collector-garbage-first.html)

### JVM in detail

### \>[JVM Heap memory (Hotspot heap structure) with diagram in java](http://www.javamadesoeasy.com/2016/10/jvm-heap-memory-hotspot-heap-structure.html)

### \>[What are Young, Old (tenured) and Permanent Generation in JVM](http://www.javamadesoeasy.com/2016/10/what-are-young-old-tenured-and.html)

### \>[What are Minor, Major and Full garbage collection in JVM in java](http://www.javamadesoeasy.com/2016/10/what-are-minor-major-and-full-garbage_29.html)

### Important VM parameters >

### \>[Most important and frequently used VM (JVM) PARAMETERS with examples in JVM Heap memory in java](http://www.javamadesoeasy.com/2016/10/most-important-vm-jvm-parameters-with.html)

### \> [\-Xms and \-Xmx](http://www.javamadesoeasy.com/2016/10/what-are-xms-and-xmx-jvm-parameters-in.html)

### \> [\-Xmn](http://www.javamadesoeasy.com/2016/10/xmn-jvm-parameters-in-java-setting.html)

### \> [\-XX:NewRati](http://www.javamadesoeasy.com/2016/10/what-is-xxnewratio-jvm-parameters-in.html)o,

### \> [\-XX:NewSize and \-XX:MaxNewSize](http://www.javamadesoeasy.com/2016/10/what-are-xxnewsize-and-xxmaxnewsize-jvm.html)

### \> [\-XX:PermSize and \-XX:MaxPermSize](http://www.javamadesoeasy.com/2016/10/what-are-xxpermsize-and-xxmaxpermsize.html)

### \>[Solve java.lang.OutOfMemoryError : unable to create new native Thread - Xss JVM option](http://www.javamadesoeasy.com/2016/11/solve-javalangoutofmemoryerror-unable.html)

### \> [\-verbose:gc](http://www.javamadesoeasy.com/2016/11/how-to-use-verbosegc-vm-argument.html) and [\-Xverify option in java](http://www.javamadesoeasy.com/2016/10/xverify-option-in-java-speed-up-eclipse.html)

### Monitor, analyze garbage collection and fix MEMORY LEAK >

### \>[How to monitor and analyze the garbage collection in 10 ways in java](http://www.javamadesoeasy.com/2016/12/how-to-monitor-and-analyze-garbage.html)

### \>[Detecting and fixing memory leak in java](http://www.javamadesoeasy.com/2016/12/detecting-and-fixing-memory-leak-in-java.html)

### \> [\-verbose:gc,](http://www.javamadesoeasy.com/2016/11/how-to-use-verbosegc-vm-argument.html) [Jstat,](http://www.javamadesoeasy.com/2016/11/how-to-use-jstat-for-monitoring-garbage.html) [vmid \- JPS,](http://www.javamadesoeasy.com/2016/11/what-is-vmid-and-how-to-find-it-using.html) [JHAT jmap](http://www.javamadesoeasy.com/2016/11/how-to-use-jhat-to-analyze-heat-dump.html), [generate Heap dump](http://www.javamadesoeasy.com/2016/11/how-to-generate-heap-dump-when.html)

### Apache tomcat server,outOfMemory and Garbage collection in java >

### \>[set or change permgen size in tomcat server, eclipse?](http://www.javamadesoeasy.com/2016/12/how-to-set-or-change-permgen-size-in.html)

### \>[How to set, change, increase or decrease heap size in tomcat server and eclipse to avoid OutOfMemoryError ?](http://www.javamadesoeasy.com/2016/12/how-to-set-change-increase-or-decrease.html)

### \>[How to pass VM argument to tomcat in eclipse](http://www.javamadesoeasy.com/2016/12/how-to-pass-vm-argument-to-tomcat-in.html)