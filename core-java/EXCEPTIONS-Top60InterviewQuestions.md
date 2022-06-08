Time to impress interviewer, crack EXCEPTION interview questions in java. Best set of questions, your interview will comprise of mostly these questions. I have tried to cover almost all the possible questions which could be framed in an interview by interviewer.

Exception interview Question 1. What is exception in java?

Answer. It’s the basic Exception framework interview question. Freshers must know about this. Java Exception handling provides a mechanism to handle compile and runtime errors in java.

-   To make application robust Exception must be handled appropriately,
    
-   by handling exceptions we end up giving some meaningful message to end user rather than giving meaningless message in java.
    

Exception interview Question 2. Explain exception hierarchy in java?

Answer. It’s also the basic Exception handling interview question. Freshers must know about this.

Exception hierarchy in java > ![](https://lh3.googleusercontent.com/ULSZt5051OdQHFX8xwFfNYjwNkZ8Zszc2waDqKjae6jIinRFLc9JYngUq9oYfB7ADpb7O-bc2_lVmMrFXVEO8Fq-L1YS2_lwMZfKuol-0oyyExFbdnyCNvRDNhI6D9KpLwjvSG0)

java.lang.Object is superclass of all classes in java.

java.lang.Throwable is superclass of java.lang.Exception and java.lang.Error

java.lang.Exception is superclass of java.lang.RuntimeException, IOException, SQLException, [BrokenBarrierException](http://www.javamadesoeasy.com/2015/03/cyclicbarrier-in-java.html) and many more other classes in java.

java.lang.[Error](http://www.javamadesoeasy.com/2015/05/javalangerror-in-exception-handling-in.html) is superclass of java.lang.VirtualMachineError, IOError, AssertionError, [ThreadDeath](http://www.javamadesoeasy.com/2015/04/threaddeath-error-calling-stop-method.html) and many more other classes in java.

java.lang.VirtualMachineError is superclass of java.lang.OutOfMemoryError, StackOverflowError and many more other classes in java.

Exception interview Question 3. What are differences between checked and unchecked exceptions in java?

Answer. This is very important Exception handling interview question in java.

<table><colgroup><col width="24"><col width="106"><col width="265"><col width="324"></colgroup><tbody><tr><td><br></td><td><p><span>Property</span></p></td><td><p><span>checked exception</span></p></td><td><p><span>unchecked exception</span></p></td></tr><tr><td><p><span>1</span></p></td><td><p><span>Also known as</span></p></td><td><p><span>checked </span><span>exceptions are also known as </span><span>compileTime </span><span>exceptions in java.</span></p></td><td><p><span>unchecked </span><span>exceptions are also known as </span><span>runtime </span><span>exceptions in java.</span></p></td></tr><tr><td><p><span>2</span></p></td><td><p><span>Should be solved at compile or runtime?</span></p></td><td><p><span>Checked exceptions are those which need to be taken care at compile time in java.</span></p></td><td><p><span>Unchecked exceptions are those which need to be taken care at runtime in java.</span></p></td></tr><tr><td><p><span>3</span></p></td><td><p><span>Benefit/ Advantage</span></p></td><td><p><span>We cannot proceed until we fix compilation issues which are most likely to happen in program, this helps us in avoiding runtime problems upto lot of extent in java.</span></p></td><td><p><span>Whenever runtime exception occurs execution of program is interrupted, but by handling these kind of exception we avoid such interruptions and end up giving some meaningful message to user in java.</span></p></td></tr><tr><td><p><span>4</span></p></td><td><p><span>Creating custom/own exception</span></p></td><td><br><div dir="ltr"><table><colgroup><col width="*"></colgroup><tbody><tr><td><p><span>class</span><span> UserException </span><span>extends</span><span> Exception </span><span>{</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>UserException(String s) {</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>super</span><span>(s);</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>}</span></p></td></tr></tbody></table></div><p><span>By extending java.lang.</span><span>Exception</span><span>, we can create checked exception.</span></p></td><td><br><div dir="ltr"><table><colgroup><col width="*"></colgroup><tbody><tr><td><p><span>class</span><span> UserException </span><span>extends</span><span> RuntimeException</span><span> {</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>UserException(String s) {</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>super</span><span>(s);</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>}</span></p></td></tr></tbody></table></div><p><span>By extending java.lang.</span><span>RuntimeException</span><span>, we can create unchecked exception.</span></p><br></td></tr><tr><td><p><span>5</span></p></td><td><div dir="ltr"><p><a href="http://www.javamadesoeasy.com/2015/05/exception-propagation-in-java-deep.html"><span>Exception propagation</span></a></p></div></td><td><p><span>For </span><span>propagating checked </span><span>exceptions method must throw exception by using </span><span>throws </span><span>keyword.</span></p></td><td><div dir="ltr"><p><span>unchecked </span><span>exceptions are </span><a href="http://www.javamadesoeasy.com/2015/05/exception-propagation-in-java-deep.html"><span>automatically propagated</span></a><span> </span><span>in java.</span></p></div></td></tr><tr><td><p><span>6</span></p></td><td><p><span>handling checked and unchecked exception while overriding superclass method</span></p></td><td><p><span>If superclass method throws/declare </span><span>checked</span><span> </span><span>exception </span><span>&gt;</span></p><ul><li dir="ltr"><p><span>overridden method of subclass </span><span>can </span><span>declare/</span><span>throw</span><span> </span><span>narrower </span><span>(subclass of) </span><span>checked exception </span><span>(As shown in </span><a href="http://www.javamadesoeasy.com/2015/05/program-to-show-overridden-method-of_93.html"><span>Program</span></a><span>)</span><span>, or</span></p></li><li dir="ltr"><p><span>overridden method of subclass </span><span>cannot </span><span>declare/</span><span>throw</span><span> </span><span>broader </span><span>(superclass of) </span><span>checked exception </span><span>(As shown in </span><a href="http://www.javamadesoeasy.com/2015/05/program-to-show-overridden-method-of_94.html"><span>Program</span></a><span>)</span><span>, or</span></p></li><li dir="ltr"><p><span>overridden method of subclass </span><span>can </span><span>declare/</span><span>throw any unchecked /RuntimeException </span><span>(As shown in </span><a href="http://www.javamadesoeasy.com/2015/05/program-to-show-overridden-method-of_37.html"><span>Program</span></a><span>)</span></p></li></ul></td><td><p><span>If superclass method throws/declare </span><span>unchecked</span><span> &gt;</span></p><ul><li dir="ltr"><p><span>overridden method of subclass </span><span>can </span><span>declare/</span><span>throw any unchecked /RuntimeException (superclass or subclass) </span><span>(As shown in </span><a href="http://www.javamadesoeasy.com/2015/05/program-to-show-overridden-method-of.html"><span>Program</span></a><span>)</span><span>, or</span></p></li><li dir="ltr"><p><span>overridden method of subclass </span><span>cannot </span><span>declare/</span><span>throw</span><span> </span><span>any checked exception </span><span>(As shown in </span><a href="http://www.javamadesoeasy.com/2015/05/program-to-show-overridden-method-of_6.html"><span>Program</span></a><span>)</span><span>,</span></p></li></ul></td></tr><tr><td><br></td><td><p><span>Which classes are which type of exception? &nbsp;either</span></p><p><span>checked or</span><span> </span><span>unchecked</span><span> exception?</span></p></td><td><p><span>The class </span><span>Exception and all its subclasses</span><span> that are </span><span>not also subclasses of RuntimeException</span><span> are checked exceptions in java.</span></p></td><td><p><span>The class </span><span>RuntimeException and all its subclasses</span><span> are unchecked exceptions.</span></p><p><span>Likewise,</span></p><p><span>The class </span><span>Error and all its subclasses</span><span> are unchecked exceptions in java.</span></p></td></tr><tr><td><p><span>7</span></p></td><td><p><span>Most frequently faced exceptions</span></p></td><td><div dir="ltr"><p><a href="http://www.javamadesoeasy.com/2015/05/sqlexception-in-java.html"><span>SQLException</span></a><span>,</span></p></div><p><span>IOException,</span></p><p><span>ClassNotFoundException</span></p></td><td><div dir="ltr"><p><a href="http://www.javamadesoeasy.com/2015/05/nullpointerexception-in-java.html"><span>NullPointerException</span></a><span>,</span></p></div><p><span>ArithmeticException ArrayIndexOutOfBoundsException.</span></p></td></tr></tbody></table>

Exception interview Question 4. What are 5 exception handling keywords in java?

Answer. This is another very important exception handling interview question in java.

5 [keyword](http://www.javamadesoeasy.com/2015/05/keywords-in-java-language.html) in java exception handling in java

-   [try](http://www.javamadesoeasy.com/2015/05/try-catch-finally-block-in-java.html) \- Any exception occurring in try block is catched by catch block.
    

-   [catch](http://www.javamadesoeasy.com/2015/05/try-catch-finally-block-in-java.html) - catch block is always followed by try block in java.
    

-   [finally](http://www.javamadesoeasy.com/2015/05/try-catch-finally-block-in-java.html) finally block can can only exist if try or try-catch block is there, finally block can’t be used alone in java.
    

Features of finally >

-   finally block is always executed irrespective of exception is thrown or not.
    

-   finally is keyword in java.
    
-   finally block is optional in java, we may use it or not.
    

finally block is not executed in following scenarios >

-   finally is not executed when System.exit is called.
    
-   if in case JVM crashes because of some java.util.[Error](http://www.javamadesoeasy.com/2015/05/javalangerror-in-exception-handling-in.html).
    

-   [throw](http://www.javamadesoeasy.com/2015/05/throw-exception-in-java.html) throw is a keyword in java.
    

-   [throws](http://www.javamadesoeasy.com/2015/05/throws-exception-in-java.html) throws is written in method’s definition to indicate that method can throw [exception](http://www.javamadesoeasy.com/2015/05/exception-handling-exception-hierarchy.html) in java.
    

Exception interview Question 5. Explain what is Error in java?

Answer. Experienced developers must know in detail about Exception handling interview question in java. java.lang.[Error](http://www.javamadesoeasy.com/2015/05/javalangerror-in-exception-handling-in.html)

-   Error is a subclass of Throwable  in java.
    
-   Error indicates some serious problems that our application should not try to catch in java.
    
-   Errors are abnormal conditions in application.
    
-   Error and its subclasses are regarded as unchecked exceptions in java
    

Must know :

[ThreadDeath](http://www.javamadesoeasy.com/2015/04/threaddeath-error-calling-stop-method.html) is an error which application must not try to catch but it is normal condition in java.

Exception interview Question 6. What are differences between Exception and Error in java?

Answer. It is another very important exception interview question to differentiate between Exception and Error in java.

<table><colgroup><col width="24"><col width="117"><col width="287"><col width="291"></colgroup><tbody><tr><td><br></td><td><p><span>Property</span></p></td><td><div dir="ltr"><p><a href="http://www.javamadesoeasy.com/2015/05/exception-handling-exception-hierarchy.html"><span>Exception</span></a></p></div></td><td><div dir="ltr"><p><a href="http://www.javamadesoeasy.com/2015/05/javalangerror-in-exception-handling-in.html"><span>Error</span></a></p></div></td></tr><tr><td><p><span>1</span></p></td><td><p><span>serious problem?</span></p></td><td><p><span>Exception does </span><span>not indicate any serious problem</span><span>.</span></p></td><td><p><span>Error </span><span>indicates some serious problems</span><span> that our </span><span>application should not try to catch.</span><span></span></p></td></tr><tr><td><p><span>2</span></p></td><td><p><span>divided into</span></p><div dir="ltr"><p><a href="http://www.javamadesoeasy.com/2015/05/checked-compile-time-exceptions-and.html"><span>checked </span><span>and </span><span>unchecked</span></a><span></span></p></div></td><td><p><span>Exception are divided into </span><span>checked </span><span>and </span><span>unchecked exceptions in java</span><span>.</span></p></td><td><p><span>Error are </span><span>not divided</span><span> further into such classifications in java.</span></p></td></tr><tr><td><p><span>3</span></p></td><td><p><span>Which classes are which type of exception? either</span></p><p><span>checked or</span><span> </span><span>unchecked</span><span> exception?</span></p></td><td><p><span>The class </span><span>Exception and all its subclasses</span><span> that are </span><span>not also subclasses of RuntimeException</span><span> are checked exceptions.</span></p><p><span>The class </span><span>RuntimeException and all its subclasses</span><span> are unchecked exceptions.</span></p><p><span>Likewise,</span></p><p><span>The class </span><span>Error and all its subclasses</span><span> are unchecked exceptions in java.</span></p></td><td><p><span>Error and its subclasses are regarded as </span><span>unchecked </span><span>exceptions in java</span></p></td></tr><tr><td><p><span>4</span></p></td><td><p><span>Most frequently faced exception and errors</span></p></td><td><p><span>checked exceptions&gt;</span></p><p><span>SQLException,</span></p><p><span>IOException,</span></p><p><span>ClassNotFoundException</span></p><p><span>unchecked exceptions&gt;</span></p><div dir="ltr"><p><a href="http://www.javamadesoeasy.com/2015/05/nullpointerexception-in-java.html"><span>NullPointerException</span></a><span>, ArithmeticException,</span></p></div></td><td><p><span>VirtualMachineError, IOError, AssertionError, </span><a href="http://www.javamadesoeasy.com/2015/04/threaddeath-error-calling-stop-method.html"><span>ThreadDeath</span></a><span>,</span></p><p><span>OutOfMemoryError, StackOverflowError.</span></p></td></tr><tr><td><p><span>5</span></p></td><td><p><span>Why to catch or not to catch?</span></p></td><td><p><span>Application </span><span>must catch </span><span>the Exception because they does not cause any major threat to application in java.</span></p></td><td><p><span>Application </span><span>must not catch </span><span>the Error because they does cause any major threat to application.</span></p><p><span>Example &gt;</span></p><p><span>Let’s say errors like </span><span>OutOfMemoryError and StackOverflowError occur and are caught then JVM might not be able to free up memory for rest of application to execute, so it will be better if application don’t catch these errors and is allowed to terminate in java.</span></p></td></tr></tbody></table>

Exception interview Question 7. Explain throw keyword in java?

Answer. This is also frequently asked exception handling interview question.

-   [throw](http://www.javamadesoeasy.com/2015/05/throw-exception-in-java.html) is a keyword in java.
    

throw unchecked exception in java >

-   We need not to handle unChecked exception either by catching it or throwing it in java.
    

![](https://lh6.googleusercontent.com/Eygv04PCU3nLx-0HGrwkB2uutZVlcS1QiAHpq82NJzJfGFahWIgBkpxdC1zjKs9e84We7hDwATKtuWpd2osv1taSo3GLr9oHWZ_b_bDJiggJmQhEzaoe80g7REFr19QZmYypvqs)

We throw NullPointerException (unChecked exception) and didn’t handled it, no compilation error was thrown in java.

throw checked exception >

-   We need to handle checked exception either by catching it, or
    
-   throwing it by using throws keyword. (When thrown, exception must be handled in calling environment)
    

Exception interview Question 8. Explain throws keyword in java?

Answer. This exception interview question will be covered in below question but it give you more detailed information about throw keyword in java.

[throws](http://www.javamadesoeasy.com/2015/05/throws-exception-in-java.html) is written in method’s definition to indicate that method can throw [exception](http://www.javamadesoeasy.com/2015/05/exception-handling-exception-hierarchy.html).

-   We need not to handle unChecked exception either by catching it or throwing it.
    

![](https://lh5.googleusercontent.com/Mc_-xlEAgkbF0hh_9nVZYZdwQPCkMLsR3AQG5CE_gpLadreajcWiwRvnnfUG_Wpgvz1MbjCKzOz3tCj30Gbwl2NKjsTPXded79gaXWx_gL67o5r44nbt7uv4ur0hVdZBSHoh4h4)

Above code throws NullPointerException (unChecked exception) and didn’t handled it from where method m() was called and no compilation error was thrown.

throws Checked exception in java >

-   We need to handle checked exception either by catching it or throwing it further, if not handled we will face compilation error.
    

        ![](https://lh6.googleusercontent.com/PPn399suz86MJTcoxXk7LRMmBhBHj9V9yZVbAc1PibeyCD9_ZiTyKFmePQNYhL9lJ_X91UaOJNR5qDVCH6M3-PLBxzgKuu3ez65khxdN6o3xWmgiGP9y8CVYbzkafZosW35DyZM)

Exception interview Question 9. What is difference between throw and throws in java?

Answer. This is also another important and frequently asked exception handling interview question. To confuse interviewees Interviewers might give you code snippet and ask you to insert throw or throws keyword in java.

<table><colgroup><col width="24"><col width="335"><col width="362"></colgroup><tbody><tr><td><br></td><td><div dir="ltr"><p><a href="http://www.javamadesoeasy.com/2015/05/throw-exception-in-java.html"><span>throw</span></a></p></div></td><td><div dir="ltr"><p><a href="http://www.javamadesoeasy.com/2015/05/throws-exception-in-java.html"><span>throws</span></a></p></div></td></tr><tr><td><p><span>1</span></p></td><td><div dir="ltr"><p><span>throw</span><span> </span><a href="http://www.javamadesoeasy.com/2015/05/keywords-in-java-language.html"><span>keyword</span></a><span> is used to throw an </span><a href="http://www.javamadesoeasy.com/2015/05/exception-handling-exception-hierarchy.html"><span>exception</span></a><span> explicitly in java.</span></p></div></td><td><p><span>throws</span><span> </span><span>keyword is used to declare an exception in java.</span></p></td></tr><tr><td><p><span>2</span></p></td><td><p><span>throw</span><span> </span><span>is used </span><span>inside method</span><span>.</span></p><p><span>Example in java &gt;</span></p><p><span></span><span>static</span><span> </span><span>void</span><span> m(){</span></p><p><span>&nbsp;&nbsp;&nbsp;</span><span>throw</span><span> </span><span>new</span><span> FileNotFoundException();</span></p><p><span>}</span></p></td><td><p><span>throws</span><span> </span><span>is used</span><span> in</span><span> </span><span>method declaration</span><span>.</span></p><p><span>Example in java &gt;</span></p><p><span></span><span>static</span><span> </span><span>void</span><span> m() </span><span>throws</span><span> FileNotFoundException{</span></p><p><span>}</span></p></td></tr><tr><td><p><span>3</span></p></td><td><p><span>throw</span><span> </span><span>is always </span><span>followed by</span><span> </span><span>instanceof </span><span>Exception class in java.</span></p><p><span>Example &gt;</span></p><p><span>throw</span><span> </span><span>new</span><span> FileNotFoundException()</span></p></td><td><p><span>throws</span><span> </span><span>is always </span><span>followed by name of Exception class in java</span><span>.</span></p><p><span>Example &gt;</span></p><p><span>throws</span><span> </span><span>FileNotFoundException</span></p></td></tr><tr><td><p><span>4</span></p></td><td><p><span>throw</span><span> </span><span>can be used to throw </span><span>only one exception at time</span><span>.</span></p><p><span>Example &gt;</span></p><p><span>throw</span><span> </span><span>new</span><span> FileNotFoundException()</span></p></td><td><p><span>throws</span><span> </span><span>can be used to throw </span><span>multiple exception at time</span><span>.</span></p><p><span>Example &gt;</span></p><p><span>throws</span><span> </span><span>FileNotFoundException, NullPointerException</span></p><p><span>and many more...</span></p></td></tr><tr><td><p><span>5</span></p></td><td><p><span>throw</span><span> </span><span>cannot propagate exception to calling method in java.</span></p><p><span><img height="126" src="https://lh4.googleusercontent.com/gO7Xp7MlqokGsbfiqCTCq0Px1YrtSGeLXjSP53nxwSHuKsTKmTmY2vd2g5Fd7shnyP3YRLNGrJcP7J5S1jfJPkdEWLOywBluAEoMQPKp3l4oIDHDK2ugUU4tvSmt_HDX5Q3DMBI" width="312"></span></p></td><td><div dir="ltr"><p><span>throws</span><span> </span><span>can </span><a href="http://www.javamadesoeasy.com/2015/05/exception-propagation-in-java-deep.html"><span>propagate exception</span></a><span> to calling method.</span></p></div><p><span>Please see these programs to understand how exception is propagated to calling method.</span></p><p><a href="http://www.javamadesoeasy.com/2015/05/exception-propagation-in-java-deep.html"><span>Program 1</span></a><span> - Handling Exception by throwing it from m() method (using throws keyword) and handling it in try-catch block from where call to method m() was made.</span></p><p><a href="http://www.javamadesoeasy.com/2015/05/exception-propagation-in-java-deep.html"><span>Program 2</span></a><span> </span><span>- Throwing Exception from m() method and then again throwing it from calling method [ i.e. main method]</span></p></td></tr></tbody></table>

Exception interview Question 10. How to create user defined checked and unchecked Exception in java?

Answer. Very important exception handling interview question. Interviewers generally expects interviewees  to write code to create checked and unchecked Exception in java.

Creating user defined [checked](http://www.javamadesoeasy.com/2015/05/checked-compile-time-exceptions-and.html) exception in java >

<table><colgroup><col width="*"></colgroup><tbody><tr><td><p><span>class</span><span> UserDefinedException </span><span>extends</span><span> Exception </span><span>{</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>UserDefinedException(String s) {</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>super</span><span>(s);</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>}</span></p></td></tr></tbody></table>

By extending java.lang.Exception, we can create checked exception.

Creating user defined [unchecked](http://www.javamadesoeasy.com/2015/05/checked-compile-time-exceptions-and.html) exception in java >

<table><colgroup><col width="*"></colgroup><tbody><tr><td><p><span>class</span><span> UserDefinedException </span><span>extends</span><span> RuntimeException</span><span> {</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>UserDefinedException(String s) {</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>super</span><span>(s);</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>}</span></p></td></tr></tbody></table>

By extending java.lang.RuntimeException, we can create unchecked exception.

Exception interview Question 11. How to use try-catch-finally in java? Can we use try,catch or finally block alone in java?

Answer. This exception handling interview question will test your practical/basic understanding of Exception handling in java.

We can enclose exception prone code in >

-   try-finally block, or
    
-   try-catch-finally block.
    

Using try-catch block  in java

<table><colgroup><col width="*"></colgroup><tbody><tr><td><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>try</span><span>{</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>//Code to be enclosed in try-catch block</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>}</span><span>catch</span><span>(Exception e){</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p></td></tr></tbody></table>

Using try-finally block  in java

<table><colgroup><col width="*"></colgroup><tbody><tr><td><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>try</span><span>{</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>//Code to be enclosed in try-finally block</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>}</span><span>finally</span><span>{</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span></span></span></p></td></tr></tbody></table>

We cannot use try block alone, it must be followed by either catch or finally.

Using only try block will cause compilation error

<table><colgroup><col width="*"></colgroup><tbody><tr><td><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>try</span><span>{</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>//only try block will cause </span><span>compilation error</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p></td></tr></tbody></table>

Likewise, we cannot use catch block alone, it always follows try block.

Using only catch block will cause compilation error

<table><colgroup><col width="*"></colgroup><tbody><tr><td><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>catch</span><span>{</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>//only catch block will cause </span><span>compilation error</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p></td></tr></tbody></table>

Likewise, we cannot use finally block alone, it always follows try block.

Using only finally block will cause compilation error

<table><colgroup><col width="*"></colgroup><tbody><tr><td><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>finally</span><span>{</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>//only finally block will cause </span><span>compilation error</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p></td></tr></tbody></table>

Exception interview Question 12. Is it allowed to use multiple catch block in java?

Answer. Another exception handling interview question which will test your practical knowledge and understanding of Exception handling in java. [Java exception handling](http://www.javamadesoeasy.com/2015/05/exception-handling-exception-hierarchy.html) allows us to use [multiple catch block](http://www.javamadesoeasy.com/2015/05/multiple-catch-block-in-java.html) in java.

Important Point  about multiple catch block in java >

1.  Exception class handled in starting catch block must be subclass of Exception class handled in following catch blocks (otherwise we will face compilation error).
    
2.  Either one of the multiple catch block will handle exception at time in java.
    

Program - Let’s understand the concept of multiple catch block in java>

<table><colgroup><col width="*"></colgroup><tbody><tr><td><div dir="ltr"><p><span>/** Copyright (c), AnkitMittal <a href="http://javamadesoeasy.com/" rel="nofollow"><span>JavaMadeSoEasy</span><span>.</span><span>com</span></a> */</span></p></div><p><span>public</span><span> </span><span>class</span><span> ExceptionTest {</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>public</span><span> </span><span>static</span><span> </span><span>void</span><span> main(String[] args) {</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>try</span><span>{</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>int</span><span> </span><span>i</span><span>=10/0; </span><span>//will throw ArithmeticException</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>}</span><span>catch</span><span>(</span><span>ArithmeticException</span><span> ae){</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>System.</span><span>out</span><span>.println(</span><span>"Exception handled - ArithmeticException"</span><span>);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>}</span><span>catch</span><span>(</span><span>RuntimeException</span><span> re){</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>System.</span><span>out</span><span>.println(</span><span>"Exception handled - RuntimeException"</span><span>);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>}</span><span>catch</span><span>(</span><span>Exception</span><span> e){</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>System.</span><span>out</span><span>.println(</span><span>"Exception handled - Exception"</span><span>);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span></span></span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>}</span></p><p><span>/*OUTPUT</span></p><p><span>Exception handled - ArithmeticException</span></p><p><span>*/</span></p></td></tr></tbody></table>

In the above above >

ArithmeticException has been used in first catch block

RuntimeException has been used in second catch block

Exception has been used in third catch block

Exception is superclass of RuntimeException and

RuntimeException is superclass of ArithmeticException.

Exception interview Question 13. What is Automatic resource management in java 7?

Answer. Experienced java developers must be well versed with this exception interview question. As we know java allows us to handle multiple exceptions by using [multiple catch blocks](http://www.javamadesoeasy.com/2015/05/multiple-catch-block-in-java.html).  
  
Now, java 7 has done improvements in multiple exception handling by introducing multi catch syntax which helps in [**automatic resource management**](http://www.javamadesoeasy.com/2015/05/catch-block-and-automatic-resource.html).

Features of multi catch syntax in java \>

-   Has improved way of catching multiple [exceptions](http://www.javamadesoeasy.com/2015/05/exception-handling-exception-hierarchy.html).
    
-   This syntax does not looks clumsy in java.
    
-   Reduces developer efforts of writing multiple catch blocks in java.
    
-   Allows us to catch more than one exception in one catch block.
    

Here is the multi catch syntax >

<table><colgroup><col width="*"></colgroup><tbody><tr><td><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>try</span><span>{</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;//code . . . . .</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>}</span><span>catch</span><span>(IOException</span><span> |</span><span> SQLException ex){</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>//code . . . . .</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></p></td></tr></tbody></table>

We could separate different exceptions using pipe ( | ) in java.

Exception interview Question 14. Explain try-with-resource in java?

Answer. Again experienced java developers must be well versed with this exception interview question. Before java 7, we used to write explicit code for closing file in [finally](http://www.javamadesoeasy.com/2015/05/finally-block-in-java.html) block by using [try-finally block](http://www.javamadesoeasy.com/2015/05/try-catch-finally-block-in-java.html) like this >

<table><colgroup><col width="624"></colgroup><tbody><tr><td><div dir="ltr"><p><span>/** Copyright (c), AnkitMittal <a href="http://javamadesoeasy.com/" rel="nofollow"><span>JavaMadeSoEasy</span><span>.</span><span>com</span></a> */</span></p></div><p><span>public</span><span> </span><span>class</span><span> TryWithResourseTest {</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>public</span><span> </span><span>static</span><span> </span><span>void</span><span> main(String[] args) </span><span>throws</span><span> IOException {</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>InputStream inputStream = </span><span>null</span><span>;</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>try</span><span>{</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>inputStream = </span><span>new</span><span> FileInputStream(</span><span>"c:/txtFile.txt"</span><span>);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>//code......</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>}</span><span>finally</span><span>{</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>if</span><span>(inputStream!=</span><span>null</span><span>)</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>inputStream.close();</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>}</span></p></td></tr></tbody></table>

In java 7, using Try-with-resources >

-   we need not to write explicit code for closing file.
    

<table><colgroup><col width="624"></colgroup><tbody><tr><td><p><span>import</span><span> java.io.FileInputStream;</span></p><p><span>import</span><span> java.io.IOException;</span></p><p><span>import</span><span> java.io.InputStream;</span></p><div dir="ltr"><p><span>/** Copyright (c), AnkitMittal <a href="http://javamadesoeasy.com/" rel="nofollow"><span>JavaMadeSoEasy</span><span>.</span><span>com</span></a> */</span></p></div><p><span>public</span><span> </span><span>class</span><span> TryWithResourseTest {</span></p><p><span>&nbsp;&nbsp;</span><span>public</span><span> </span><span>static</span><span> </span><span>void</span><span> main(String[] args) </span><span>throws</span><span> IOException {</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>try</span><span> (InputStream inputStream = </span><span>new</span><span> FileInputStream(</span><span>"c:/txtFile.txt"</span><span>))</span><span> {</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>//code...</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></p><p><span>&nbsp;&nbsp;}</span></p><p><span>}</span></p></td></tr></tbody></table>

Using multiple resources inside Try-with-resources is also allowed in java.

Exception interview Question  15. Now, question comes why we need not to close file when we are using Try-with-resources in java?

Answer.  Again experienced java developers must be well versed with this exception interview question. Because FileInputStream implements java.lang.AutoCloseable interface (AutoCloseable interface’s close method automatically closes resources which are no longer needed) in java.

Which classes can be used inside Try-with-resources in java?

All the classes which implements AutoCloseable interface can be used inside Try-with-resources in java.

Exception interview Question 16. Explain finally keyword in java?

Answer. Fresher and experienced java developers must be well versed with this exception handling interview question in java.

try or [try-catch](http://www.javamadesoeasy.com/2015/05/try-catch-finally-block-in-java.html) block can be followed by finally block in java >

-   try\-finally block, or
    

<table><colgroup><col width="542"></colgroup><tbody><tr><td><p><span><span></span></span><span>try</span><span>{</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>//Code to be enclosed in try-finally block</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>}</span><span>finally</span><span>{</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>} &nbsp;&nbsp;</span></p></td></tr></tbody></table>

-   try-catch\-finally block.
    

<table><colgroup><col width="538"></colgroup><tbody><tr><td><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>try</span><span>{</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>//Code to be enclosed in try-catch-finally block</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>}</span><span>catch</span><span>(Exception e){</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>}</span><span>finally</span><span>{</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p></td></tr></tbody></table>

finally block can can only exist if try or try-catch block is there, finally block can’t be used alone in java.

Features of finally in java >

-   finally block is always executed irrespective of exception is thrown or not.
    

finally block is not executed in following scenarios in java >

-   finally is not executed when System.exit is called.
    
-   if in case JVM crashes because of some java.util.[Error](http://www.javamadesoeasy.com/2015/05/javalangerror-in-exception-handling-in.html).
    

Application of finally block in java programs in java >

-   We may use finally block to execute code for database connection closing, because closing connection in try or catch block may not be safe.
    

-   Why closing connection in try block may not be safe?
    
-   Because exception may be thrown in try block before reaching connection closing statement.
    

-   Why closing connection in catch block may not be safe?
    
-   Because inappropriate exception may be thrown in try block and we might not enter catch block to close connection in java.
    

Exception interview Question 17. Is it allowed to use nested try-catch in java?

Answer. It’s basic java exception handling interview question.

Nested [try-catch](http://www.javamadesoeasy.com/2015/05/try-catch-finally-block-in-java.html) block means using try-catch block inside another try-catch block in java.

<table><colgroup><col width="719"></colgroup><tbody><tr><td><div dir="ltr"><p><span>/** Copyright (c), AnkitMittal <a href="http://javamadesoeasy.com/" rel="nofollow"><span>JavaMadeSoEasy</span><span>.</span><span>com</span></a> */</span></p></div><p><span>public</span><span> </span><span>class</span><span> ExceptionTest {</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>public</span><span> </span><span>static</span><span> </span><span>void</span><span> main(String[] args) {</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>try</span><span>{</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>int</span><span> </span><span>i</span><span>=10/0; </span><span>//will throw ArithmeticException</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>}</span><span>catch</span><span>(ArithmeticException ae){</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>System.</span><span>out</span><span>.println(</span><span>"try-catch block handled - ArithmeticException"</span><span>);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>//using nested try-catch block</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>try</span><span>{</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>String s=</span><span>null</span><span>;</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>s</span><span>.charAt(0); </span><span>//will throw NullPointerException</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>}</span><span>catch</span><span>(NullPointerException npe){</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>System.</span><span>out</span><span>.println(</span><span>"NESTED try-catch block handled - "</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;+ </span><span>"NullPointerException"</span><span>);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>}</span></p></td></tr></tbody></table>

Exception interview Question 18. Discuss which checked and unchecked exception can be thrown/declared by subclass method while overriding superclass method in java?

Answer. It’s very very important exception handling interview question. Experienced and freshers all must be able to answer this question.

If superclass method throws/declare unchecked/RuntimeException in java >

-   overridden method of subclass can declare/throw any unchecked /RuntimeException (superclass or subclass), or
    
-   overridden method of subclass cannot declare/throw any checked exception in java, or
    
-   overridden method of subclass can declare/throw same exception in java, or
    
-   overridden method of subclass may not declare/throw any exception in java.
    

If superclass method throws/declare checked/compileTime exception in java \>

-   overridden method of subclass can declare/throw narrower (subclass of) checked exception, or
    
-   overridden method of subclass cannot declare/throw broader (superclass of) checked exception, or
    
-   overridden method of subclass can declare/throw any unchecked /RuntimeException, or
    
-   overridden method of subclass can declare/throw same exception, or
    
-   overridden method of subclass may not declare/throw any exception in java.
    

If superclass method does not throw/declare any exception in java \>

-   overridden method of subclass can declare/throw any unchecked /RuntimeException , or
    
-   overridden method of subclass cannot declare/throw any checked exception, or
    
-   overridden method of subclass may not declare/throw any exception in java.
    

Exception interview Question 19. What will happen when catch and finally block both return value, also when try and finally both return value in java?

Answer. This is very important exception handling interview question for experienced developers.

When catch and finally block both return value, method will ultimately return value returned by [finally](http://www.javamadesoeasy.com/2015/05/finally-block-in-java.html) block irrespective of value returned by [catch](http://www.javamadesoeasy.com/2015/05/catch-block-and-automatic-resource.html) block.

<table><colgroup><col width="*"></colgroup><tbody><tr><td><div dir="ltr"><p><span>/** Copyright (c), AnkitMittal <a href="http://javamadesoeasy.com/" rel="nofollow"><span>JavaMadeSoEasy</span><span>.</span><span>com</span></a> */</span></p></div><p><span>public</span><span> </span><span>class</span><span> ExceptionTest {</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>public</span><span> </span><span>static</span><span> </span><span>void</span><span> main(String[] args) {</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>System.</span><span>out</span><span>.println(</span><span>"method return -&gt; "</span><span>+</span><span>m</span><span>());</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>static</span><span> String m(){</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>try</span><span>{</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>int</span><span> i=10/0; </span><span>//will throw ArithmeticException</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>}</span><span>catch</span><span>(ArithmeticException e){</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>return</span><span> </span><span>"catch"</span><span>;</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>}</span><span>finally</span><span>{</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>return</span><span> </span><span>"finally"</span><span>; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span></span></span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>}</span></p><p><span>/*OUTPUT</span></p><p><span>method return -&gt; finally</span></p><p><span>*/</span></p></td></tr></tbody></table>

In above program, i=10/0 will throw ArithmeticException and enter catch block to return "catch", but ultimately control will enter finally block to return "finally".

Likewise, when [try and finally](http://www.javamadesoeasy.com/2015/05/try-catch-finally-block-in-java.html) block both return value, method will ultimately return value returned by finally block irrespective of value returned by try block. For program [please refer](http://www.javamadesoeasy.com/2015/05/what-will-happen-when-catch-and-finally.html).

Exception interview Question 20. What is exception propagation in java?

Answer.

Experienced developers must know in detail about Exception handling interview question in java. Even freshers must try and understand this in depth concept of exception propagation in java.

Whenever methods are called [stack](http://javamadesoeasy.com/2015/01/stacks.html) is formed and an exception is first thrown from the top of the stack and if it is not caught, it starts coming down the stack to previous methods until it is not caught.

If exception remains uncaught even after reaching bottom of the stack it is propagated to JVM and program is terminated in java.

Propagating [unchecked](http://www.javamadesoeasy.com/2015/05/checked-compile-time-exceptions-and.html) exception (NullPointerException) >

unchecked exceptions are automatically propagated in java.

[![](https://lh3.googleusercontent.com/ULwpAxZbnqPGuNIDiSTbIV7PCqasqi2pjTkej1g414B-vCEpa74J2QzHFtWGAHukPnwenUwRb1osPFyLTIABeMU7M9ofkRri4pWp6_6TpoLZw2pRy_IVIj4tR43iGDwSzZgI6uA)](http://www.javamadesoeasy.com/2015/05/exception-propagation-in-java-deep.html)

[stack](http://javamadesoeasy.com/2015/01/stacks.html) of methods is formed >

![](https://lh5.googleusercontent.com/VhXHrxrZfbchdFHtHFCX-ieJ1n7xRWypX167nks9U84-nLWbyjbUu_QXkfYJiF_e4f13KN2Tdh69IjJJ6t-QWcpH7lT97dZwJp2peM2PBBOgyzRiGCvXjhSouht3Ubd6A60gry4)

In the above program, stack is formed and an exception is first thrown from the top of the stack \[ method3() \] and it remains uncaught there, and starts coming down the stack to previous methods to method2(), then to method1(), than to main() and it remains uncaught throughout.

exception remains uncaught even after reaching bottom of the stack \[ main() \] so it is propagated to JVM and ultimately program is terminated by throwing exception \[ as shown in output \] in java.

Propagating checked exception (FileNotFoundException) using throws keyword >

For propagating checked exceptions method must throw exception by using [throws](http://www.javamadesoeasy.com/2015/05/throws-exception-in-java.html) keyword.

![](https://lh6.googleusercontent.com/PZH79z2tzYd46_InEVoE4V-iyhGDuJdAW3IIiIV5htgaI8-KqvZA82VEHrLTjKEF6OXpYaKK8GtzWt8aTezMpVtHyY7C295QZe6p7788FbuXGaemoJymOyJfWPYQJG-uxBRI_ks)

Exception interview Question 21. Can a catch or finally block throw exception in java?

Answer. Yes, catch or finally block can throw checked or unchecked exception but it must be handled accordingly. Please refer this post for [handling checked and unchecked exceptions](http://www.javamadesoeasy.com/2015/05/checked-compile-time-exceptions-and.html) in java.

Exception interview Question 22. Why shouldn’t you use Exception for catching all exceptions in java?

Answer. Catching Exception rather than handling specific exception can be vulnerable to our application. [Multiple catch blocks](http://www.javamadesoeasy.com/2015/05/multiple-catch-block-in-java.html) must be used to catch specific exceptions, because handling specific exception gives developer the liberty of taking appropriate action and develop robust application.

Answer. Experienced developers must know in detail about this Exception handling interview question in java

<table><colgroup><col width="24"><col width="309"><col width="365"></colgroup><tbody><tr><td><br></td><td><p><span>multiple catch block</span></p></td><td><p><span>multi catch syntax</span></p></td></tr><tr><td><p><span>1</span></p></td><td><p><span>multiple catch blocks were introduced in prior versions of Java 7 and does not provide any automatic resource management in java.</span></p></td><td><p><span>multi catch syntax was introduced in </span><span>java 7 for improvements in multiple exception handling which helps in </span><span>automatic resource management in java.</span></p></td></tr><tr><td><p><span>2</span></p></td><td><p><span>Here is the syntax for writing </span><span>multiple catch block in java</span><span> &gt;</span></p><div dir="ltr"><table><colgroup><col width="284"></colgroup><tbody><tr><td><p><span>try</span><span>{</span></p><p><span>//code . . . . .</span></p><p><span>}</span><span>catch</span><span>(</span><span>IOException </span><span>ex1){</span></p><p><span></span><span>//code . . . . .</span></p><p><span>} </span><span>catch</span><span>(</span><span>SQLException</span><span> ex2){</span></p><p><span></span><span>//code . . . . .</span></p><p><span>} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></p></td></tr></tbody></table></div><br></td><td><p><span>Here is the </span><span>multi catch syntax in java</span><span> &gt;</span></p><br><div dir="ltr"><table><colgroup><col width="311"></colgroup><tbody><tr><td><p><span>try</span><span>{</span></p><p><span>//code . . . . .</span></p><p><span>}</span><span>catch</span><span>(IOException</span><span> |</span><span> SQLException ex){</span></p><p><span>//code . . . . .</span></p><p><span>} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></p></td></tr></tbody></table></div><p><span>We could separate different exceptions using </span><span>pipe </span><span>(</span><span> | </span><span>)</span></p></td></tr><tr><td><p><span>3</span></p></td><td><p><span>For catching IOException and SQLException we need to write </span><span>two catch block</span><span> like this &gt;</span></p><p><span><img height="308" src="https://lh4.googleusercontent.com/Y8Pt2V80aY5BXlcs1viypo_8NBeNoVmA1Awad1o9oGIQhY02xSTW3M2fGrPGK0THNJP6yBczP-QuNHAiJjR9fMSGm1uawbwgaslhJh4KOihK-gbhHaBsPD7UYSsU2inbOxb4JPdn" width="301"></span></p></td><td><p><span>with the help of multi catch syntax we can catch IOException and SQLException in one catch block using </span><span>multi catch syntax </span><span>like this &gt;</span></p><p><span><img height="334" src="https://lh5.googleusercontent.com/EDfjTrfY38x6H8uhRZ4ebbMwEdssvXcHaVb7dRVIr7r58vkNW4rtA8dpntIaHul_whEsS5no1B2EaawfQPTwwmOIyhjX-f0gAaRPzIHCpY36LafMmBjFpb6qPM4rQEhVb-XCEk0W" width="349"></span></p></td></tr><tr><td><p><span>4</span></p></td><td><p><span>When multiple catch blocks</span><span> are used , first catch block could be subclass of Exception class handled in following catch blocks like this &gt;</span></p><p><span>IOException is subclass of Exception in java.</span><span><img height="242" src="https://lh5.googleusercontent.com/dDTyOichrPKc2g2d_KU_BLjUdPs1LpRqNum51I_x0iSD4KRaXe4T-gHeXLHEUELu4vE3W1jYt2ifV80dl0ZMaZZeRBYuIqSekdNpbUW_LdoQ30ms9gSi5Oj8kY43yAzcly5m29UC" width="301"></span></p><br></td><td><p><span>If </span><span>Multi catch syntax</span><span> is used to catch subclass and its superclass than </span><span>compilation error</span><span> will be thrown.</span></p><p><span>IOException and Exception in </span><span>multi catch syntax </span><span>will cause compilation error </span><span>“The exception </span><span>IOException </span><span>is already caught by the alternative </span><span>Exception</span><span>”</span><span>.</span></p><p><span><img height="218" src="https://lh4.googleusercontent.com/SFnwBVq0EsP5hKSaU7EdH35tTemyCbiqh35H-A_yd2KPEvoyzVJ7WU0y3yyafvAa0lFqSFW40Gm4b64_YaiopsmSx-hObaF6EoTNEhKihbyCIFwCb0k0lTyLU3F1pPjd5YNxuimg" width="331"></span></p><p><span>Solution &gt;</span></p><p><span>We must use only </span><span>Exception </span><span>to catch its subclass like this &gt;</span></p><p><span><img height="190" src="https://lh3.googleusercontent.com/ClWKvKo_sJKavB7eyyAgwQOHmkx_uCo3xZGxhX3_9kRUaavmPVd6dN6MM3Ix7HJ7m9ZXd5pbwyLwZ3ex8raeVavEkunmc3OyWemcUmra2fuaNtSZG1pNqz58wmSepXcuaUnaU2QF" width="375"></span></p><br></td></tr><tr><td><p><span>5</span></p></td><td><p><span>Does not provide such features.</span></p></td><td><p><span>Features of </span><span>multi catch syntax </span><span>&gt;</span></p><ul><li dir="ltr"><p><span>Has </span><span>improved way of catching multiple </span><a href="http://www.javamadesoeasy.com/2015/05/exception-handling-exception-hierarchy.html"><span>exceptions</span></a><span>.</span></p></li><li dir="ltr"><p><span>This syntax does </span><span>not looks clumsy</span><span>.</span></p></li><li dir="ltr"><p><span>Reduces developer efforts</span><span> of writing multiple catch blocks.</span></p></li><li dir="ltr"><p><span>Allows us to </span><span>catch more than one exception in one catch block</span><span>.</span></p></li><li dir="ltr"><p><span>Helps in </span><span>automatic resource management.</span></p></li></ul></td></tr></tbody></table>

Exception interview Question 24.  can a method be overloaded on basis of  exceptions in java ?

Answer.

Another Exception handling interview question which will test your practical understanding of exception in java.

Yes a method be overloaded on basis of  exceptions in java.

But now question which overloaded exception will be called.

Let’s take an example :

Ques. Let's say one method handles Exception and other handles ArithmeticException. Which method will be invoked when ArithmeticException is thrown?

Ans. Method which handles more specific exception will be called.

Program >

<table><colgroup><col width="*"></colgroup><tbody><tr><td><p><span>import</span><span> java.io.IOException;</span></p><div dir="ltr"><p><span>/** Copyright (c), AnkitMittal <a href="http://javamadesoeasy.com/" rel="nofollow"><span>JavaMadeSoEasy</span><span>.</span><span>com</span></a></span></p></div><p><span>* Main class */</span></p><p><span>public</span><span> </span><span>class</span><span> ExceptionTest {</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>void</span><span> method(Exception e){</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>System.</span><span>out</span><span>.println(e+</span><span>" caught in Exception method"</span><span>);</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>void</span><span> method(ArithmeticException ae){</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>System.</span><span>out</span><span>.println(ae+</span><span>" caught in ArithmeticException method"</span><span>);</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>public</span><span> </span><span>static</span><span> </span><span>void</span><span> main(String[] args) {</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>ExceptionTest obj=</span><span>new</span><span> ExceptionTest();</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>obj.method(</span><span>new</span><span> ArithmeticException());</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>obj.method(</span><span>new</span><span> IOException());</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>}</span></p><p><span>/* OUTPUT</span></p><p><span>java.lang.ArithmeticException caught in ArithmeticException method</span></p><p><span>java.io.IOException caught in Exception method</span></p><p><span>*/</span></p></td></tr></tbody></table>

Exception interview Question 25.  Mention few exception handling best practices in java?

Answer. Experienced developers must be able to answer this Exception handling interview question in detail in java.

-   [Throw](http://www.javamadesoeasy.com/2015/05/throw-exception-in-java.html) [exceptions](http://www.javamadesoeasy.com/2015/05/exception-handling-exception-hierarchy.html) when the method cannot handle the exception, and more importantly, must be handled by the caller.
    

Example -

In Servlets - doGet() and doPost() throw ServletException or IOException in certain circumstances where the request could not be read correctly. Neither of these methods are in a position to handle the exception, but the container is (which generally results in the 404 error page in most cases).

-   Bubble the exception if the method cannot handle it. This is a corollary of the above point, but applicable to methods that must catch the exception. If the caught exception cannot be handled correctly by the method, then it is preferable to bubble it.
    

-   Throw the exception right away. If an exception scenario is encountered, then it is a good practice to throw an exception indicating the original point of failure, instead of attempting to handle the failure via error codes, until a point deemed suitable for throwing the exception. In other words, attempt to minimize mixing exception handling with error handling.
    

-   Either log the exception or bubble it, but don't do both. Logging an exception often indicates that the exception stack has been completely unwound, indicating that no further bubbling of the exception has occurred. Hence, it is not recommended to do both at the same time, as it often leads to a frustrating experience in debugging.
    

-   Application should not try to catch [Error](http://www.javamadesoeasy.com/2015/05/javalangerror-in-exception-handling-in.html) - Because, in most of cases recovery from an Error is almost impossible. So, application must be allowed to terminate.
    

Example>

Let’s say errors like OutOfMemoryError and StackOverflowError occur and are caught then JVM might not be able to free up memory for rest of application to execute, so it will be better if application don’t catch these errors and is allowed to terminate.

Exception interview Question 26.  Difference between Final, Finally and Finalize in java?

Answer. It is another very very important exception interview question to differentiate between final, finally and finalize in java.

<table><colgroup><col width="24"><col width="244"><col width="192"><col width="245"></colgroup><tbody><tr><td><br></td><td><div dir="ltr"><p><a href="http://www.javamadesoeasy.com/2015/05/final-keyword-in-java-20-salient.html"><span>final</span></a><span></span></p></div></td><td><div dir="ltr"><p><a href="http://www.javamadesoeasy.com/2015/05/finally-block-in-java.html"><span>finally</span></a></p></div></td><td><div dir="ltr"><p><a href="http://www.javamadesoeasy.com/2015/05/finalize-method-in-java-10-salient.html"><span>finalize</span></a></p></div></td></tr><tr><td><p><span>1</span></p></td><td><p><a href="http://www.javamadesoeasy.com/2015/05/final-keyword-in-java-20-salient.html"><span>final</span></a><span> can be applied to </span><span>variable</span><span>, </span><span>method </span><span>and </span><span>class </span><span>in java.</span></p></td><td><div dir="ltr"><p><a href="http://www.javamadesoeasy.com/2015/05/finally-block-in-java.html"><span>finally</span></a><span> is a block.</span></p></div></td><td><div dir="ltr"><p><a href="http://www.javamadesoeasy.com/2015/05/finalize-method-in-java-10-salient.html"><span>finalize</span></a><span> is a method.</span></p></div></td></tr><tr><td><p><span>2</span></p></td><td><p><span>2.1) Final variable</span></p><p><span>final memberVariable</span></p><p><span>final local variable</span></p><p><span>final static variable</span></p><p><span>Final memberVariable</span><span> of class must be initialized at time of declaration, once initialized final memberVariable cannot be assigned a new value.</span></p><p><span>Final variables are called </span><span>constants </span><span>in java.</span></p><div dir="ltr"><table><colgroup><col width="*"></colgroup><tbody><tr><td><p><span>class</span><span> FinalTest {</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>final</span><span> </span><span>int</span><span> </span><span>x</span><span>=1; </span><span>//memberVariable/instanceVariable</span></p><p><span>}</span></p></td></tr></tbody></table></div><p><span>If constructor is defined then final memberVariable can be initialized in constructor but &nbsp;once initialized cannot be assigned a new value.</span></p><div dir="ltr"><table><colgroup><col width="*"></colgroup><tbody><tr><td><p><span>class</span><span> FinalTest {</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>final</span><span> </span><span>int</span><span> </span><span>x</span><span>; </span><span>//memberVariable/instanceVariable</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>FinalTest() {</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>x</span><span> = 1; </span><span>//final memberVariable can be initialized in constructor.</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>}</span></p></td></tr></tbody></table></div><p><span>Final local variable</span><span> can be left uninitialized at time of declaration and can be initialized later, but once initialized cannot be assigned a new value in java.</span></p><div dir="ltr"><table><colgroup><col width="*"></colgroup><tbody><tr><td><p><span>class</span><span> FinalTest {</span></p><p><span>&nbsp;&nbsp;</span><span>void</span><span> method(){ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span></span></span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>final</span><span> </span><span>int</span><span> x; </span><span>//uninitialized at time of declaration</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;x=1;</span></p><p><span>&nbsp;&nbsp;} &nbsp;</span><span><span></span></span></p><p><span>}</span></p></td></tr></tbody></table></div><p><span>Final static variable</span><span> of class must be initialized at time of declaration or can be initialized in static block, once initialized final static variable cannot be assigned a new value.</span></p><p><span>If static block is defined then final static variable can be initialized in static block, once initialized final static variable cannot be assigned a new value.</span></p><div dir="ltr"><table><colgroup><col width="*"></colgroup><tbody><tr><td><p><span>class</span><span> FinalTest {</span></p><p><span>&nbsp;</span><span>final</span><span> </span><span>static</span><span> </span><span>int</span><span> </span><span>x</span><span>; </span><span>//static variable</span></p><p><span>&nbsp;</span><span>static</span><span>{ //</span><span>static block</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>x</span><span>=1;</span></p><p><span>&nbsp;}</span></p><p><span>}</span></p></td></tr></tbody></table></div><p><span>2.2) Final method</span></p><p><span>Final method </span><span>cannot be overridden, any attempt to do so will cause </span><span>compilation error</span><span>.</span></p><p><span><img height="88" src="https://lh6.googleusercontent.com/9O1O5MRwg1NVPsVCuL-i3-M2HsZ4vFfyEkajayflbtUXS3PMil96r-z69VJigDDJKXyy4KE8UJbosx66qyqbojmEcvGAW__dHg6oKVB8-_cus4a6r_peqKFO-hmqx8CWgoWIOgh8" width="227"></span></p><p><span>Runtime polymorphism is not applicable on final methods because they cannot be inherited.</span></p><p><span>2.3) Final class</span></p><p><span>Final class</span><span> cannot be extended, any attempt to do so will cause </span><span>compilation error</span><span>.</span></p><p><span><img height="66" src="https://lh3.googleusercontent.com/OWVRfY8Eqw9fRdxNxyFG6OAnxBnLo79ffiMTMK6vWzNgcb0yjyW9d5FzlIaRSNH9i4TazrkZxRnlN3spCOmw54iXR6AHwegwwF-3R1tZKHB0I3K88aCVaqHxvsWlr9ZFL5TYDbaK" width="232"></span></p></td><td><p><span>try or </span><a href="http://www.javamadesoeasy.com/2015/05/try-catch-finally-block-in-java.html"><span>try-catch</span></a><span> block can be followed by finally block &gt;</span></p><p><span>try</span><span>-finally </span><span>block, or</span></p><div dir="ltr"><table><colgroup><col width="148"></colgroup><tbody><tr><td><p><span>try</span><span>{</span></p><p><span>//Code to be enclosed in try-finally block</span></p><p><span>}</span><span>finally</span><span>{</span></p><p><span>} </span><span>&nbsp;&nbsp;</span></p></td></tr></tbody></table></div><p><span>try-catch</span><span>-finally </span><span>block.</span></p><div dir="ltr"><table><colgroup><col width="154"></colgroup><tbody><tr><td><p><span>try</span><span>{</span></p><p><span>//Code to be enclosed in try-catch-finally block</span></p><p><span>}</span><span>catch</span><span>(Exception e){</span></p><p><span>}</span><span>finally</span><span>{</span></p><p><span>}</span></p></td></tr></tbody></table></div><p><span>finally block </span><span>can can only exist if try or try-catch block is there, finally block can’t be used alone in java.</span></p><p><span>finally block is not executed in following scenarios &gt;</span></p><p><span>finally is not executed when </span><span>System.exit</span><span> is called.</span></p><p><span>if in case </span><span>JVM crashes</span><span> because of some java.util.</span><a href="http://www.javamadesoeasy.com/2015/05/javalangerror-in-exception-handling-in.html"><span>Error</span></a><span>.</span><span><span></span></span></p></td><td><p><span>finalize method is called before garbage collection by JVM,</span></p><p><span>finalize method is called for any cleanup action that may be required before garbage collection.</span></p><div dir="ltr"><table><colgroup><col width="184"></colgroup><tbody><tr><td><div dir="ltr"><p><span>/** Copyright (c), AnkitMittal <a href="http://javamadesoeasy.com/" rel="nofollow"><span>JavaMadeSoEasy</span><span>.</span><span>com</span></a> */</span></p></div><p><span>@Override</span></p><p><span>protected</span><span> </span><span>void</span><span> finalize() </span><span>throws</span><span> Throwable </span><span>{</span></p><p><span></span><span>try</span><span> {</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;System.</span><span>out</span><span>.println(</span><span>"in</span></p><p><span>&nbsp;finalize() method, "</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>+ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></p><p><span>&nbsp;"doing cleanup activity"</span><span>);</span></p><p><span>} </span><span>catch</span><span> (Throwable throwable) {</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>throw</span><span> throwable;</span></p><p><span>}</span></p><p><span>}</span></p></td></tr></tbody></table></div><p><span>finalize() method is defined </span><span>in java.lang.Object</span></p></td></tr><tr><td><p><span>3</span></p></td><td><p><span>-</span></p></td><td><p><span>finally block can only exist if try or try-catch block is there, finally block can’t be used alone in java.</span></p><br></td><td><p><span>We can </span><span>force early garbage collection in java</span><span> by using following methods &gt;</span></p><p><span>System.</span><span>gc</span><span>();</span><span><span> </span></span><span>Runtime.</span><span>getRuntime</span><span>().gc();</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>System.</span><span>runFinalization</span><span>(); Runtime.</span><span>getRuntime</span><span>().runFinalization();</span></p></td></tr><tr><td><p><span>4</span></p></td><td><p><span>-</span></p></td><td><p><span>finally is always executed irrespective of exception thrown in java.</span></p></td><td><p><span>If any uncaught </span><a href="http://www.javamadesoeasy.com/2015/05/checked-compile-time-exceptions-and.html"><span>exception</span></a><span> is thrown inside finalize method -</span></p><p><span>exception is ignored,</span></p><p><span>thread is terminated and</span></p><p><span>object is discarded.</span></p><p><span>Note :</span><span> Any exception thrown by the finalize method causes the finalization of this object to be halted, but is otherwise ignored.</span></p></td></tr><tr><td><p><span>5</span></p></td><td><p><span>-</span></p></td><td><p><span>Currently executing thread calls finally method in java.</span></p></td><td><p><span>JVM does not guarantee which </span><a href="http://www.javamadesoeasy.com/2015/03/daemon-threads-12-salient-features-of.html"><span>daemon</span></a><span> </span><a href="http://www.javamadesoeasy.com/2015/03/what-is-thread-in-java.html"><span>thread</span></a><span> will invoke the finalize method for an object.</span></p></td></tr><tr><td><p><span>6</span></p></td><td><p><span>final is a keyword in java.</span></p></td><td><p><span>finally Is a keyword in java.</span></p></td><td><p><span>finalize is not a keyword in java.</span></p></td></tr></tbody></table>

Answer.

<table><colgroup><col width="24"><col width="292"><col width="308"></colgroup><tbody><tr><td><br></td><td><p><span>ClassNotFoundException</span></p></td><td><p><span>NoClassDefFoundError</span></p></td></tr><tr><td><p><span>1</span></p></td><td><div dir="ltr"><p><span>ClassNotFoundException is </span><a href="http://www.javamadesoeasy.com/2015/05/checked-compile-time-exceptions-and.html"><span>Checked (compile time) </span><span>Exception</span><span> in java.</span></a></p></div></td><td><h3 dir="ltr"><span>NoClassDefFoundError is a </span><a href="http://www.javamadesoeasy.com/2015/05/javalangerror-in-exception-handling-in.html"><span>Error</span></a><span> in java</span><span>. </span><span>Error and its subclasses are regarded as </span><span>unchecked </span><span>exceptions in java.</span></h3></td></tr><tr><td><h3 dir="ltr"><span>2</span></h3></td><td><h3 dir="ltr"><span>Here is the </span><span>hierarchy </span><span>of java.lang.ClassNotFoundException -</span></h3><p><span>-java.lang.Object</span></p><p><span>-java.lang.Throwable</span></p><div dir="ltr"><p><span>&nbsp;-java.lang.</span><a href="http://www.javamadesoeasy.com/2015/05/exception-handling-exception-hierarchy.html"><span>Exception</span></a></p></div><p><span>&nbsp;&nbsp;-java.lang.ReflectiveOperationException</span></p><p><span>&nbsp;&nbsp;&nbsp;-java.lang.ClassNotFoundException</span></p></td><td><h3 dir="ltr"><span>Here is the </span><span>hierarchy </span><span>of java.lang.NoClassDefFoundError -</span></h3><p><span>-java.lang.Object</span></p><p><span>-java.lang.Throwable</span></p><div dir="ltr"><p><span>&nbsp;-java.lang.</span><a href="http://www.javamadesoeasy.com/2015/05/javalangerror-in-exception-handling-in.html"><span>Error</span></a></p></div><p><span>&nbsp;&nbsp;-java.lang.LinkageError</span></p><p><span>&nbsp;&nbsp;&nbsp;-java.lang.NoClassDefFoundError</span></p></td></tr><tr><td><p><span>3</span></p></td><td><p><span>ClassNotFoundException</span><span> </span><span>is thrown when JVM tries to class from classpath but it does not find that class.</span></p></td><td><p><span>NoClassDefFoundError</span><span> </span><span>is thrown when JVM tries to load class which &gt;</span></p><ul><li dir="ltr"><p><span>was NOT </span><span>available at </span><span>runtime </span><span>but</span></p></li><li dir="ltr"><p><span>was </span><span>available at </span><span>compile </span><span>time.</span></p></li></ul></td></tr><tr><td><br></td><td><p><span>ExceptionInInitializerError </span><span>has got nothing to do with </span><span>ClassNotFoundException</span><span>.</span></p></td><td><p><span>You must ensure that class does not throws </span><span>java.lang.ExceptionInInitializerError</span><span> because that is likely to be followed by </span><span>NoClassDefFoundError</span><span>.</span></p></td></tr></tbody></table>

Another very important Exception interview Question.  What are the most important frequently occurring Exception and Errors which you faced in java?

Answer. Most common and frequently occurring checked (compile time) and Errors in java >

-   ### [FileNotFoundException in java](http://www.javamadesoeasy.com/2015/05/filenotfoundexception-in-java.html)
    
-   ### [SQLException in java](http://www.javamadesoeasy.com/2015/05/sqlexception-in-java.html)
    
-   ### [What is java.lang.InterruptedException in java](http://www.javamadesoeasy.com/2015/12/what-is-javalanginterruptedexception-in.html)
    
-   ### [when java.lang.ClassNotFoundException occurs in java](http://www.javamadesoeasy.com/2015/12/when-javalangclassnotfoundexception.html)
    

Most common and frequently occurring unchecked (runtime) in java.

-   ### [What is java.lang.NullPointerException in java, when it occurs,how to handle, avoid and fix it](http://www.javamadesoeasy.com/2016/01/what-is-javalangnullpointerexception-in.html)
    
-   ### [NumberFormatException in java](http://www.javamadesoeasy.com/2015/05/numberformatexception-in-java.html)
    
-   ### [IndexOutOfBoundsException in java](http://www.javamadesoeasy.com/2016/01/indexoutofboundsexception-in-java.html)
    
-   ### [When java.lang.ArrayIndexOutOfBoundsException occurs in java](http://www.javamadesoeasy.com/2015/12/when-javalangarrayindexoutofboundsexcep.html)
    
-   ### [When java.lang.StringIndexOutOfBoundsException occurs in java](http://www.javamadesoeasy.com/2015/12/when-javalangstringindexoutofboundsexce.html)
    
-   ### [java.lang.ArithmeticException in java - Divide number by zero](http://www.javamadesoeasy.com/2015/12/javalangarithmeticexception-in-java.html)
    
-   ### [When dividing by zero does not throw ArithmeticException in java](http://www.javamadesoeasy.com/2015/12/when-dividing-by-zero-does-not-throw.html)
    
-   ### [When java.lang.IllegalStateException occurs in java](http://www.javamadesoeasy.com/2015/12/when-javalangillegalstateexception.html)
    
-   ### [when java.lang.IllegalMonitorStateException is thrown in java](http://www.javamadesoeasy.com/2015/12/when-javalangillegalmonitorstateexcepti.html)
    
-   ### [Solve java.lang.UnsupportedOperationException in java](http://www.javamadesoeasy.com/2015/12/solve-javalangunsupportedoperationexcep.html)
    

Most common and frequently occurring Errors in java >

-   ### [OutOfMemoryError in java](http://www.javamadesoeasy.com/2015/05/outofmemoryerror-in-java.html)
    
-   ### [When java.lang.StackOverflowError occurs in java](http://www.javamadesoeasy.com/2015/12/when-javalangstackoverflowerror-occurs.html)
    
-   ### [Solve java.lang.ExceptionInInitializerError in java](http://www.javamadesoeasy.com/2015/12/solve-javalangexceptionininitializererr.html)
    
-   ### [How to solve java.lang.NoClassDefFoundError in java](http://www.javamadesoeasy.com/2015/12/how-to-solve-javalangnoclassdeffounderr.html)
    

Having any doubt? or you you liked the tutorial! Please comment in below section.

RELATED LINKS>