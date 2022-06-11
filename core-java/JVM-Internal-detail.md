Contents of page >

-   Diagram : HotSpot JVM (Java Virtual Machine) Architecture
    
-   1) Class Loader Subsystem of JVM >     
    
-   2) Runtime Data Areas of JVM >
    

-   2.1) Method Area >
    
-   2.2) Heap >
    
-   2.3) Java Threads (Java thread Stacks) >
    
-   2.4) Program counter registers (PC Registers) >
    
-   2.5) Native internal Threads (Native thread stack ) >
    

-   3) Execution Engine of JVM >
    

-   3.1) JIT(Just In Time) compiler >
    
-   3.2) Garbage Collector
    

-   Native method libraries of JVM >
    

-   Heap,
    
-   JIT (Just In Time) Compiler and
    
-   Garbage collector
    

-   Heap and Garbage collector for tuning JVM’s performance >
    
-   JIT (Just In Time) Compiler for tuning JVM’s performance >
    

-   Diagram to show java is platform independent\>
    

-   ### F) [JVM Heap memory (Hotspot heap structure) with diagram in java](http://www.javamadesoeasy.com/2016/10/jvm-heap-memory-hotspot-heap-structure.html)
    
-   ### G) [What are Young, Old (tenured) and Permanent Generation in JVM in java](http://www.javamadesoeasy.com/2016/10/what-are-young-old-tenured-and.html)
    
-   ### H) [What are Minor, Major and Full garbage collection in JVM in java](http://www.javamadesoeasy.com/2016/10/what-are-minor-major-and-full-garbage_29.html)
    
-   ### I) >[Most important and frequently used VM (JVM) PARAMETERS](http://www.javamadesoeasy.com/2016/10/most-important-vm-jvm-parameters-with.html)
    
-   ### [J) Apache tomcat server AND JVM >](http://www.javamadesoeasy.com/2015/06/jvm-java-virtual-machine.html#j)
    
-   ### [K) Monitor, analyze garbage collection and fix MEMORY LEAK >](http://www.javamadesoeasy.com/2015/06/jvm-java-virtual-machine.html#k)
    

-   ### [M) JVM AND ECLIPSE VM para >](http://www.javamadesoeasy.com/2015/06/jvm-java-virtual-machine.html#m)
    

A) What is JVM (Java virtual machine) in java?

JVM is the virtual machine on which java code executes.

JVM is responsible for converting byte code into machine specific code.

B) HotSpot JVM (Java Virtual Machine) Architecture >

![](https://lh3.googleusercontent.com/mI9DsbikQHpvY6nkdOxfdEyFzCHbiG7oqDwRCW7ty4golJPXp2RClTaxqMlQuDqHdo09IvQynIJlz4fC7P2zC0HwcfXTQLVOmzDT_foGKSe53CID8tn_ZulFjPXtX_k1OGiZ_8hw)

Diagram : HotSpot JVM (Java Virtual Machine) Architecture

Now, let’s discuss each and every component of JVM (Java Virtual Machine) Architecture in detail.

JVM (Java Virtual Machine) consists of Class Loader Subsystem, Runtime Data Areas and Execution Engine. Let’s discuss each of them in detail.

1) Class Loader Subsystem of JVM >     

Classloader is a subsystem of JVM.

Classloader is used to load class files.

Classloader verifies the class file using byte code verifier. Class file will only be loaded if it is valid.

2) Runtime Data Areas of JVM >

2.1) Method Area >

Method area is also called class area.

Method area stores data for each and every class like fields,constant pool,method’s data and information.

2.2) Heap >

Heap is place where all objects are stored in JVM (java virtual machine).

Heap even contains arrays because arrays are objects.

2.3) Java Threads (Java thread Stacks) >

How stack frames are created when thread calls new method?

As we know each and every thread has its own stack. Whenever new method is called new stack frame is created and it is pushed on top of that thread's stack.

What does thread stack contains?

The stack contain

-   All the local variables,
    
-   All the parameters,
    
-   All the return address.
    

Does stack stores/contains object OR what stack doesn’t contains?

Stack never stores object, but it stores object reference.

2.4) Program counter registers (PC Registers) >

Program counter registers contains >

-   the address of instructions currently being executed and
    
-   address of next instruction as well.
    

2.5) Native internal Threads (Native thread stack ) >

Native internal threads area contains all the informations related to native platform.

Example - If we are running JVM (java application) on windows, it will contain all information related to native platform i.e. windows.

If we are running JVM (java application) on linux, it will contain all information related to native platform i.e. linux.

3) Execution Engine of JVM >

Execution Engine contains JIT (Just In Time) Compiler and Garbage collector compiler. Execution Engine also contains Interpreter.

3.1) JIT(Just In Time) compiler >

JIT compiler compiles bytecodes to machine code at run time and improves the performance of Java applications.

JIT Compiler internal working >

JIT compilation does require processor time and memory usage. When the JVM first starts up, lots of methods are called. Compiling all of these methods might can affect startup time significantly, though program ultimately may achieve good performance.

Methods are not compiled when they are called first time. For each and every method JVM maintains a call count, which is incremented every time the method is called. The methods are interpreted by JVM until call count not exceeds JIT compilation threshold (The JIT compilation threshold improves performance and helps the JVM to start quickly. The threshold has been selected carefully by java developers to obtain an optimal performances. Balance between startup times and long term performance is maintained).

Therefore, very frequently used methods are compiled as soon as JVM has started, and less used methods are compiled later.

How JIT improves performance of Most frequently used methods ?

After a method is compiled, its call count is reset to zero and subsequent calls to the method increment it call count. When the call count of a method reaches a JIT recompilation threshold, the JIT compiler compiles method second time, applying more optimizations as compared to optimizations applied in previous compilation. This process is repeated until the maximum optimization level is reached. Most frequently used methods are always optimized to maximize the performance benefits of using the JIT compiler.

Example \-

Let’s say JIT recompilation threshold = 2

After a method is compiled, its call count is reset to zero and subsequent calls to the method increment it call count. When the call count of a method reaches a 2 (i.e. JIT recompilation threshold), the JIT compiler compiles method second time, applying more optimizations as compared to optimizations applied in previous compilation.

3.2) Garbage Collector

Garbage Collector Garbage collection is the process by which JVM clears objects (unused objects) from heap to reclaim heap space.

Interpreter > Interpreter is responsible for reading the bytecode and then executing the instructions.

Native method libraries of JVM >

Native method interface is an interface that connects JVM with the native method libraries for executing native methods.

Example of Native method libraries>

If we are running JVM (java application) on windows, then Native method interface(window method interface) will connect JVM with the window methods libraries(native method libraries) for executing window methods (native methods).

You must know about JNI, What is Java Native Interface(JNI)?

You may write your application purely in java but there are certain situations where java code might need meet your requirement.

Programmers uses the JNI (Java Native Interface) to write the Java native methods when an application cannot be written purely in Java.

C) The most important/key HotSpot JVM components related to performance are \>

-   Heap,
    
-   JIT (Just In Time) Compiler and
    
-   Garbage collector
    

![](https://lh4.googleusercontent.com/wz4k6ExesdvsT7g5kZanaPZL0RG7gU5McxmGdRzkNIS9N5EfNxMlwRSgeGY2q1BIC2ADl6w_gVJ8DXQO-kRXN6JU8SNLuskTBDSrg8fQj6FqeP0xYuLjNDTzr3behZTyn84MrVb_ "images/gcslides/Slide2.png")

Diagram : key components of HotSpot JVM (Java Virtual Machine) for performance.

Three components Heap, JIT (Just In Time) Compiler and Garbage collector are related to JVM’s performance tuning.

Heap and Garbage collector for tuning JVM’s performance >

All the objects are stored in heap. Garbage collector manages the heap at JVM initialization.

There are many VM (JVM) options for

-   Increasing and decreasing the heap size for managing object for best performance.
    
-   selecting the different garbage collector depending on your requirement.
    

JIT (Just In Time) Compiler for tuning JVM’s performance >

-   JIT compiler compiles bytecodes to machine code at run time and improves the performance of Java applications.
    
-   In newer versions of JVM tuning of JIT (Just In Time) Compiler is rarely needed.
    

D) How is java platform independent language?

Once source code (i.e. .java file) is compiled on one platform(bytecode is formed). That bytecode can be executed (interpreted) on any other platform running a JVM.

Every platform have different JVM implementation. From [here](http://www.oracle.com/technetwork/java/javase/downloads/jdk7-downloads-1880260.html) you can download JVM for different platforms.

Example -

JVM for windows platform is different from JVM for linux platform.

Diagram to show java is platform independent\>

![](https://lh6.googleusercontent.com/iBOjgtJePy75D_7lpGcsAup7iEutIfMHwPV9dDmbyWG2dr3T14El-TR9QPzPOjKCLOZHT1V0vpP9ugN9HNPtVZ2pDcVN-2d6UhJylyGDnS0YwZweTluGve6OXP3o-OmrHuJ6anIy)

The JVM is an very powerful and flexible runtime platform for languages  such as Java, Groovy, Scala and Clojure. JVM provides large number of libraries and is completely interoperable with Java.

### F) [JVM Heap memory (Hotspot heap structure) with diagram in java](http://www.javamadesoeasy.com/2016/10/jvm-heap-memory-hotspot-heap-structure.html)

[![](https://lh3.googleusercontent.com/N9x6zcoVSJofzpsWjdNltaFGUpFMMaGmt4xb2geE8lIuZbXPIiL5qculp7DjHWEPqDjJeDird4lzw5-wN0GY60P_SkUexQAtM-sAfkBGUMQGCXMeClMktkM9XFqo9l9W-tzvaoqJ)](http://www.javamadesoeasy.com/2016/10/jvm-heap-memory-hotspot-heap-structure.html)

### G) [What are Young, Old (tenured) and Permanent Generation in JVM in java](http://www.javamadesoeasy.com/2016/10/what-are-young-old-tenured-and.html)

### H) [What are Minor, Major and Full garbage collection in JVM in java](http://www.javamadesoeasy.com/2016/10/what-are-minor-major-and-full-garbage_29.html)

### I) >[Most important and frequently used VM (JVM) PARAMETERS with examples in JVM Heap memory in java](http://www.javamadesoeasy.com/2016/10/most-important-vm-jvm-parameters-with.html)

### J) Apache tomcat server AND JVM >

### \>[How to set or change permgen size in tomcat server, eclipse?](http://www.javamadesoeasy.com/2016/12/how-to-set-or-change-permgen-size-in.html)

### \>[How to set, change, increase or decrease heap size in tomcat server and eclipse to avoid OutOfMemoryError ?](http://www.javamadesoeasy.com/2016/12/how-to-set-change-increase-or-decrease.html)

### \>[How to pass VM argument to tomcat in eclipse](http://www.javamadesoeasy.com/2016/12/how-to-pass-vm-argument-to-tomcat-in.html)

### K) Monitor, analyze garbage collection and fix MEMORY LEAK >

### \>[How to monitor and analyze the garbage collection in 10 ways in java](http://www.javamadesoeasy.com/2016/12/how-to-monitor-and-analyze-garbage.html)

### \>[Detecting and fixing memory leak in java](http://www.javamadesoeasy.com/2016/12/detecting-and-fixing-memory-leak-in-java.html)

### TOOLS for Monitoring garbage collection >

### \>[How to use \-verbose:gc VM argument](http://www.javamadesoeasy.com/2016/11/how-to-use-verbosegc-vm-argument.html)

### \>[How to use Jstat for monitoring the garbage collection in java](http://www.javamadesoeasy.com/2016/11/how-to-use-jstat-for-monitoring-garbage.html)

### \>[What is vmid \- and how to find it using JPS](http://www.javamadesoeasy.com/2016/11/what-is-vmid-and-how-to-find-it-using.html)

### \>[How to use JHAT to analyze the heat dump - Using jmap as well](http://www.javamadesoeasy.com/2016/11/how-to-use-jhat-to-analyze-heat-dump.html)

### \>[How to generate Heap dump when OutOfMemoryError is thrown in java?](http://www.javamadesoeasy.com/2016/11/how-to-generate-heap-dump-when.html)

L) garbage collectors in jvm>

### \>[Serial collector / Serial GC (Garbage collector) in java](http://www.javamadesoeasy.com/2016/10/serial-collector-serial-gc-garbage.html)

### \>[Throughput GC (Garbage collector) or Parallel collector in java](http://www.javamadesoeasy.com/2016/10/throughput-gc-garbage-collector-or.html)

### \>[Concurrent Mark Sweep (CMS) collector / concurrent low pause garbage collector in java](http://www.javamadesoeasy.com/2016/10/concurrent-mark-sweep-cms-collector.html)

### \>[G1 garbage collector / Garbage first collector in java](http://www.javamadesoeasy.com/2016/10/g1-garbage-collector-garbage-first.html)

### \>[PS Scavenge and PS MarkSweep](http://www.javamadesoeasy.com/2016/11/ps-scavenge-and-ps-marksweep.html)

### M) JVM AND ECLIPSE VM para >

### \>[How to write java program to pass VM/JVM parameters through CMD](http://www.javamadesoeasy.com/2016/10/java-program-to-pass-vmjvm-parameters.html)

### \>[How to pass vmArgs(JVM parameters) to java program in eclipse](http://www.javamadesoeasy.com/2016/11/how-to-pass-vmargsjvm-parameters-to.html)

### \>[How to pass VM argument to tomcat in eclipse](http://www.javamadesoeasy.com/2016/12/how-to-pass-vm-argument-to-tomcat-in.html)

N) JVM PROGRAMS >

### [Find out total number of available processors to JVM](http://www.javamadesoeasy.com/2016/07/find-out-total-number-of-available.html)

### [Find Total Amount Of Memory In JVM](http://www.javamadesoeasy.com/2016/07/find-total-amount-of-memory-in-jvm.html)

### [Find Free Memory Available In Java virtual machine](http://www.javamadesoeasy.com/2016/07/find-free-memory-available-in-java.html)

### [Find Maximum Memory That JVM can use](http://www.javamadesoeasy.com/2016/07/find-maximum-memory-that-jvm-can-use.html)

### [How to terminate JVM in java](http://www.javamadesoeasy.com/2016/07/how-to-terminate-jvm-in-java.html)

O) JVM ERRORS - Error occurred during initialization of VM >

### \>[Error occurred during initialization of VM - Too small initial heap](http://www.javamadesoeasy.com/2016/11/error-occurred-during-initialization-of.html)

### \>[There is insufficient memory for the Java Runtime Environment to continue. Native memory allocation (malloc) failed to allocate 1048576 bytes for AllocateHeap](http://www.javamadesoeasy.com/2016/11/there-is-insufficient-memory-for-java.html)

P) JVM (Java virtual machine) Summary -

So in this core java tutorial we learned following

-   What is JVM (Java virtual machine) in java?
    

JVM is the virtual machine on which java code executes.

-   HotSpot JVM (Java Virtual Machine) Architecture >
    

-   1) Class Loader Subsystem of JVM >     
    

Classloader is used to load class files.

-   2) Runtime Data Areas of JVM >
    

-   2.1) Method Area > Method area stores data for each and every class like fields,constant pool,method’s data and information
    
-   2.2) Heap > Heap is place where all objects are stored in JVM
    
-   2.3) Java Threads (Java thread Stacks) >Whenever new method is called new stack frame is created and it is pushed on top of that thread's stack
    
-   2.4) Program counter registers (PC Registers) > the address of instructions currently and next address being executed.
    
-   2.5) Native internal Threads (Native thread stack ) >Native internal threads area contains all the informations related to native platform.
    

-   3) Execution Engine of JVM >
    

-   3.1) JIT(Just In Time) compiler > JIT compiler compiles bytecodes to machine code at run time and improves the performance of Java applications.
    

-   3.2) Garbage Collector - Garbage Collector Garbage collection is the process by which JVM clears objects (unused objects) from heap to reclaim heap space.
    

-   Native method libraries of JVM > Native method interface is an interface that connects JVM with the native method libraries for executing native methods.
    

-   The most important/key HotSpot JVM  components related to performance are \>
    

-   Heap,
    
-   JIT (Just In Time) Compiler and
    
-   Garbage collector
    

-   Heap and Garbage collector for tuning JVM’s performance > All the objects are stored in heap. Garbage collector manages the heap at JVM initialization.
    
-   JIT (Just In Time) Compiler for tuning JVM’s performance > JIT compiler compiles bytecodes to machine code at run time and improves the performance of Java applications.
    

-   How is java platform independent language? Once source code (i.e. .java file) is compiled on one platform(bytecode is formed). That bytecode can be executed (interpreted) on any other platform running a JVM.
    

Having any doubt? or you you liked the tutorial! Please comment in below section.

RELATED LINKS>

### Important VM parameters >

### \>[Most important and frequently used VM (JVM) PARAMETERS with examples in JVM Heap memory in java](http://www.javamadesoeasy.com/2016/10/most-important-vm-jvm-parameters-with.html)

### \>[What are \-Xms and \-Xmx JVM parameters in java, And differences between them with examples](http://www.javamadesoeasy.com/2016/10/what-are-xms-and-xmx-jvm-parameters-in.html)

### \>[\-Xmn JVM parameters in java with examples - Setting young generation size](http://www.javamadesoeasy.com/2016/10/xmn-jvm-parameters-in-java-setting.html)

### \>[What is \-XX:NewRatio JVM parameters in java with examples - Setting young and old generation ratio](http://www.javamadesoeasy.com/2016/10/what-is-xxnewratio-jvm-parameters-in.html)

### \>[What are -XX:NewSize and \-XX:MaxNewSize JVM parameters in java](http://www.javamadesoeasy.com/2016/10/what-are-xxnewsize-and-xxmaxnewsize-jvm.html)

### \>[\-XX:SurvivorRatio JVM parameters in java with examples - Setting survivor spaces size](http://www.javamadesoeasy.com/2016/10/xxsurvivorratio-jvm-parameters-in-java.html)

### \>[\-XX:+AggressiveHeap VM parameters](http://www.javamadesoeasy.com/2016/10/xxaggressiveheap-vm-parameters.html)

### \>[What are \-XX:PermSize and \-XX:MaxPermSize JVM parameters with examples in java | Differences](http://www.javamadesoeasy.com/2016/10/what-are-xxpermsize-and-xxmaxpermsize.html)

### \>[Solve java.lang.OutOfMemoryError : unable to create new native Thread - Xss JVM option](http://www.javamadesoeasy.com/2016/11/solve-javalangoutofmemoryerror-unable.html)

### More VM parameters >

### \>[How to use \-verbose:gc VM argument](http://www.javamadesoeasy.com/2016/11/how-to-use-verbosegc-vm-argument.html)

### \>[\-Xverify option in java](http://www.javamadesoeasy.com/2016/10/xverify-option-in-java-speed-up-eclipse.html)

Setting appropriate values of [xmx and xms](http://www.javamadesoeasy.com/2016/10/what-are-xms-and-xmx-jvm-parameters-in.html) to avoid - Error occurred during initialization of VM >

### \>[Error occurred during initialization of VM - Too small initial heap](http://www.javamadesoeasy.com/2016/11/error-occurred-during-initialization-of.html)

### \>[There is insufficient memory for the Java Runtime Environment to continue. Native memory allocation (malloc) failed to allocate 1048576 bytes for AllocateHeap](http://www.javamadesoeasy.com/2016/11/there-is-insufficient-memory-for-java.html)