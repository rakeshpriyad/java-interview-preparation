![](https://lh6.googleusercontent.com/ArQcR5qKwQlkiCdb_9rTcoqQyU54kdANyHWZ1IHziDdH1CUpyHjV50y0fH9-dP_TtAPmDhWwBgc9a-Uhy1QLxu9E3SPSdlOv2Tbirnn3LRfV2xPwOuviroKSK16juo2OppUo_00)This is set of most amazing, interesting and important core java interview questions and answers. Generally for java developers interviews start from core java questions only. And interviewers tend to proceed to next round only if they found you are well versed with core java concepts.

So, I have tried to cover maximum number of the possible question which could be framed in first round of interview in core java. To answers these questions in comprehensive manner I have given hyperlinks, programs and detailed explanation for each and every question. These questions will be very handy for fresh learners to experienced java developers.

Q1. What are 4 OOPS principal in java?

-   Encapsulation \- encapsulation means data hiding,
    

-   Abstraction \- Abstraction means hiding the implementation,
    

-   Inheritance \- Inheritance is a process where child class acquires the properties of super class, and
    

-   Polymorphism \-
    

-   ### Compile time polymorphism - can be achieved by using [Method overloading](http://www.javamadesoeasy.com/2015/06/method-overloading-in-java-in-detail.html) &
    
-   ### Runtime polymorphism - Runtime polymorphism can be achieved by using [Method overriding](http://www.javamadesoeasy.com/2015/06/method-overriding-in-java-in-detail.html)
    

### For detail Please read : [4 oops (object oriented programming) concepts in java > Encapsulation, Abstraction, Inheritance, Polymorphism in detail with programs, abstraction interface via Abstract classes, Inheritance via extends and implements,Compile Runtime polymorphism](http://www.javamadesoeasy.com/2015/06/4-oops-object-oriented-programming.html)

Q2. Is there any difference between creating string with and without new operator?

When String is created without new operator, it will be created in [string pool](http://www.javamadesoeasy.com/2015/05/string-pool-string-literal-pool-string.html).

When String is created using new operator, it will force JVM to create new string in heap (not in string pool).

Let’s discuss step-by-step what will happen when below 5 statements will be executed >

<table><colgroup><col width="*"></colgroup><tbody><tr><td><p><span><span></span></span><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>&nbsp;String s1 = </span><span>"abc"</span><span>;</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>String s2 = </span><span>new</span><span> String(</span><span>"abc"</span><span>);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>String s3 = </span><span>"abc"</span><span>;</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>String s4 = </span><span>new</span><span> String(</span><span>"abc"</span><span>);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>String s5 = </span><span>new</span><span> String(</span><span>"abc"</span><span>).intern();</span></p></td></tr></tbody></table>

String s1 = "abc";

No string with “abc” is there in pool, so JVM will create string in string pool and s1 will be a reference variable which will refer to it.

String s2 = new String("abc");

string is created using new operator, it will force JVM to create new string in heap (not in string pool).

String s3 = "abc";

string with “abc” is there in pool, so s3 will be a reference variable which will refer to “abc” in string pool.

String s4 = new String("abc");

string is created using new operator, it will force JVM to create new string in heap (not in string pool).

String s5 = new String("abc").intern();

string is created using new operator but intern method has been invoked on it, so s5 will be a reference variable which will refer to “abc” in string pool.

Q3. What is significance of final in java?

1.  Final memberVariable/instanceVariable of class must be initialized at time of declaration, once initialized final memberVariable cannot be assigned a new value.
    
2.  Final method cannot be overridden, any attempt to do so will cause compilation error.
    

![](https://lh4.googleusercontent.com/fDiIAk6cmt_8SN9A3uX8wQuePhIXxX-EibdxwYr89pveYOLTIj7y5IYkC1hhJ8qJus447ylB3z9RrNUf-Ia_A5NrvoiS7kiwksp2WzCzS2zSSrH9VAglr9l-Sb7FNo7EojRo-Ng)

Runtime polymorphism is not applicable on final methods because they cannot be overridden.

3.  Final class cannot be extended, any attempt to do so will cause compilation error.
    

![](https://lh5.googleusercontent.com/idZFhZFQow52uobf_LKGeDfbWlPmlfJ-FbFJz0JgbILqx16gCwQT8ThOVb-X2afRxlVZ5yMmBIA-ejLXb4JP3DMI9qEelTXtp3kmX6ZpyS2FES_qtlXMR4ptJeWaZjo1sK1edbo)

Q4. Can we use custom object as key in HashMap? If yes then how?

Q5. How do we override equals and hashcode method, write a code to use Employee(i.e. custom object) as key in HashMap? (Important)

After answering above question, immediately it will be followed up by this questions

We will override equals() and hashCode() like this -

By overriding equals() and hashCode() method we could use custom object as key in HashMap.

1)  Check whether obj is null or not.

  if(obj==null) //If obj is null, return without comparing obj & Employee class.

2)  check whether  obj is instance of Employee class or not.

if(this.getClass()!=obj.getClass()) //identifies whether obj is instance of Employee class or not.

3) Then, type cast obj into employee instance.

 Employee emp=(Employee)obj;  //type cast obj into employee instance.

<table><colgroup><col width="719"></colgroup><tbody><tr><td><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>@Override</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>public</span><span> </span><span>boolean</span><span> </span><span>equals</span><span>(Object obj){</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>if</span><span>(obj==</span><span>null</span><span>)</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>return</span><span> </span><span>false</span><span>;</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>if</span><span>(</span><span>this</span><span>.getClass()!=obj.getClass())</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>return</span><span> </span><span>false</span><span>;</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>Employee emp=(Employee)obj;</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>return</span><span> (emp.</span><span>id</span><span>==</span><span>this</span><span>.</span><span>id</span><span> || emp.</span><span>id</span><span>.equals(</span><span>this</span><span>.</span><span>id</span><span>))</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>&amp;&amp; (emp.</span><span>name</span><span>==</span><span>this</span><span>.</span><span>name</span><span> || emp.</span><span>name</span><span>.equals(</span><span>this</span><span>.</span><span>name</span><span>)); &nbsp;&nbsp;</span><span><span> </span></span><span>&nbsp;&nbsp;</span><span><span></span></span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>@Override</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>public</span><span> </span><span>int</span><span> </span><span>hashCode</span><span>(){</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>int</span><span> hash=(</span><span>this</span><span>.</span><span>id</span><span>==</span><span>null</span><span> ? 0: </span><span>this</span><span>.</span><span>id</span><span>.hashCode() ) +</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>(</span><span>this</span><span>.</span><span>name</span><span>==</span><span>null</span><span> ? 0: </span><span>this</span><span>.</span><span>name</span><span>.hashCode() );</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>return</span><span> hash; &nbsp;&nbsp;&nbsp;&nbsp;</span><span><span></span></span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><br></td></tr></tbody></table>

Let’s say in an organisation there exists a employee with id=1 and name=’sam’     and some data is stored corresponding to him, but if modifications have to be made in data, previous data must be overridden.

  
Q6. What classes should i prefer to use a key in HashMap? (Important)

This question will check your in depth knowledge of Java’s Collection Api’s. we should prefer String, Integer, Long, Double, Float, Short and any other wrapper class. Reason behind using them as a key is that they override equals() and hashCode() method, we need not to write any explicit code for overriding equals() and hashCode() method.

Let’s use Integer class as key in HashMap.

<table><colgroup><col width="624"></colgroup><tbody><tr><td><p><span>import</span><span> java.util.HashMap;</span></p><p><span>import</span><span> java.util.Map;</span></p><p><span>public</span><span> </span><span>class</span><span> StringInMap {</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>public</span><span> </span><span>static</span><span> </span><span>void</span><span> main(String...a){</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>//HashMap's key=Integer class &nbsp;(Integer’s api has already overridden </span><span>hashCode()</span><span> and equals() method for us )</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>Map&lt;Integer, String&gt; hm=</span><span>new</span><span> HashMap&lt;Integer, String&gt;();</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>hm.put(1, </span><span>"data"</span><span>);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>hm.put(1, </span><span>"data OVERRIDDEN"</span><span>);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>System.</span><span>out</span><span>.println(hm.get(1));</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>}</span></p><p><span>/*OUTPUT</span></p><p><span>data OVERRIDDEN</span></p><p><span>*/</span></p></td></tr></tbody></table>

If, we note above program, what we will see is we didn’t override equals() and hashCode() method, but still we were able to store data in HashMap, override data and retrieve data using get method.

\>Let’s check in Integer’s API, how Integer class has overridden equals() and hashCode() method :  

<table><colgroup><col width="424"></colgroup><tbody><tr><td><p><span>public</span><span> </span><span>int</span><span> </span><span>hashCode</span><span>() {</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>return</span><span> </span><span>value</span><span>;</span></p><p><span><span></span></span><span>}</span></p><p><span>public</span><span> </span><span>boolean</span><span> </span><span>equals</span><span>(Object obj) {</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>if</span><span> (obj </span><span>instanceof</span><span> Integer) {</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>return</span><span> </span><span>value</span><span> == ((Integer)obj).intValue();</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>return</span><span> </span><span>false</span><span>;</span></p><p><span><span></span></span><span>}</span></p></td></tr></tbody></table>

Q7. Can overriding of hashcode() method cause any performance issues?

Improper implementation of hashCode() can cause performance issues, because in that most of the key-value pairs will be stored on same bucket location and unnecessary time will be consumed while fetching value corresponding to key.

Q8. What are immutable classes in java? How we can create immutable classes in java? And what are advantages of using immutable classes?

Any change made to object of immutable class produces new object.

We must follow following steps for creating immutable classes -

1) [Final](http://www.javamadesoeasy.com/2015/05/final-keyword-in-java-20-salient.html) class - Make class final so that it cannot be inherited

2) private member variable -> Making member variables private ensures that fields cannot be accessed outside class.

3) final member variable -> Make member variables final so that once assigned their values cannot be changed

4) Constructor \-> Initialize all fields in constructor.

     assign all mutable member variable using new keyword.

5) Don't provide setter methods in class/ provide only getter methods.

### Please read : [Program for Creating Immutable class in java](http://www.javamadesoeasy.com/2015/05/creating-immutable-class-in-java.html)

Q9. What are some immutable classes in java?

Example of more immutable classes in java (Wrapper class)\>

-   Integer
    
-   Double
    
-   Long
    
-   Short
    
-   Byte
    
-   And all other Wrapper classes.
    

Important questions on Differences in Collection>

Q10. What are differences between List and Set?

### Please read : [List and Set - Similarity and Differences](http://www.javamadesoeasy.com/2015/04/list-vs-set-similarity-and-differences.html)

Q11. What are differences between HashMap and Hashtable?

Q12. What are differences between ArrayList and Vector?

### Please read : [ArrayList and Vector - Similarity and Differences](http://www.javamadesoeasy.com/2015/04/arraylist-vs-vector-similarity-and.html)

Q13. What are differences between ArrayList and LinkedList?

### Please read : [ArrayList and LinkedList - Similarity and Differences](http://www.javamadesoeasy.com/2015/04/arraylist-vs-linkedlist-similarity-and.html)

Q14. What are differences between HashSet vs LinkedHashSet vs TreeSet?

Q15. What are differences between HashMap and ConcurrentHashMap?

### Please read : [HashMap and ConcurrentHashMap - Similarity and Differences](http://www.javamadesoeasy.com/2015/04/hashmap-and-concurrenthashmap.html)

Q17. What are differences between HashMap vs IdentityHashMap?

### Please read : [HashMap and IdentityHashMap - Similarity and Differences with program](http://www.javamadesoeasy.com/2015/04/hashmap-vs-identityhashmap-similarity.html)

Q18. What are differences between Collection and Collections?

### Please read : [Collection and Collections - Differences](http://www.javamadesoeasy.com/2015/04/collection-vs-collections-differences.html)

Q19. What are differences between Comparable and Comparator?

Q20. What are differences between Iterator and ListIterator?

### Please read : [Iterator and ListIterator - Similarity and Differences](http://www.javamadesoeasy.com/2015/04/iterator-vs-listiterator-similarity-and.html)

Q21. What are differences between Iterator and ListIterator?

### Please read : [ArrayList and CopyOnWriteArrayList - Similarity and Differences with program](http://www.javamadesoeasy.com/2015/04/arraylist-vs-copyonwritearraylist.html)

Important questions on Similarity and Differences Collection classes in concurrent and non-concurrent packages >

Q22. What are differences between HashSet and CopyOnWriteArraySet?

### Please read : [HashSet and CopyOnWriteArraySet - Similarity and Differences with program](http://www.javamadesoeasy.com/2015/04/hashset-vs-copyonwritearrayset.html)

Q23. What are differences between TreeSet and ConcurrentSkipListSet?

### Please read : [TreeSet and ConcurrentSkipListSet - Similarity and Differences with program](http://www.javamadesoeasy.com/2015/04/treeset-vs-concurrentskiplistset.html)

Q24. What are differences between TreeMap and ConcurrentSkipListMap?

### Please read : [TreeMap and ConcurrentSkipListMap - Similarity and Differences with program](http://www.javamadesoeasy.com/2015/04/treemap-vs-concurrentskiplistmap.html)

Q25. How to implement own HashMap in java?

Answer.

[![](https://lh5.googleusercontent.com/yJW5RxiLqop4eZGK_ESX86RcmDAw2eL4Q8gurwFPj-Je2lgo6V9vN97D-1hb__T0h0Gptqw7Ls0U6b2USYQBBV6aH1NTaRW7qsz5aGUaOjTMMlDVE4QuEDqgJt3IBAB4FIU87Dg)](http://javamadesoeasy.com/2015/02/hashmap-custom-implementation.html)

Q26. What do you mean by fail-fast and fast-safe? What is ConcurrentModificationException?

Answer.

Iterator returned by few Collection framework Classes are fail-fast, means any structural modification made to these classes during iteration will throw ConcurrentModificationException.

Some important classes whose returned iterator is fail-fast >

Iterator returned by few Collection framework Classes are fail-safe, means any structural modification made to these classes during iteration won’t throw any Exception.

Some important classes whose returned iterator is fail-safe >

-   ### [CopyOnWriteArrayList](http://www.javamadesoeasy.com/2015/04/arraylist-vs-copyonwritearraylist.html)
    
-   ### [CopyOnWriteArraySet](http://www.javamadesoeasy.com/2015/04/hashset-vs-copyonwritearrayset.html)
    
-   ### [ConcurrentSkipListSet](http://www.javamadesoeasy.com/2015/04/treeset-vs-concurrentskiplistset.html)
    

### For more detail read : [ConcurrentModificationException, Fail-fast and Fail-safe in detail in java](http://www.javamadesoeasy.com/2015/04/concurrentmodificationexception-fail.html)

Few important Exception questions>

Q27. What are differences between Iterator and Enumeration?

### Please read : [Iterator and Enumeration - Differences and similarities](http://www.javamadesoeasy.com/2015/04/iterator-vs-enumeration-differences-and.html)

Q28. Does finally block always execute? Will finally block execute when System.exit is called?

Q29. What are differences between checked and unchecked exceptions?

Q30. What are exception handling keywords in java?

5 [keyword](http://www.javamadesoeasy.com/2015/05/keywords-in-java-language.html) in java exception handling

-   [try](http://www.javamadesoeasy.com/2015/05/try-catch-finally-block-in-java.html) \- Any exception occurring in try block is catched by catch block.
    

-   [catch](http://www.javamadesoeasy.com/2015/05/try-catch-finally-block-in-java.html) - catch block is always followed by try block.
    

-   [finally](http://www.javamadesoeasy.com/2015/05/try-catch-finally-block-in-java.html) finally block can can only exist if try or try-catch block is there, finally block can’t be used alone in java.
    

Features of finally >

-   finally block is always executed irrespective of exception is thrown or not.
    

-   finally block is optional in java, we may use it or not.
    

finally block is not executed in following scenarios >

-   finally is not executed when System.exit is called.
    
-   if in case JVM crashes because of some java.util.[Error](http://www.javamadesoeasy.com/2015/05/javalangerror-in-exception-handling-in.html).
    

-   [throw](http://www.javamadesoeasy.com/2015/05/throw-exception-in-java.html) throw is a keyword in java.
    

-   [throws](http://www.javamadesoeasy.com/2015/05/throws-exception-in-java.html) throws is written in method’s definition to indicate that method can throw [exception](http://www.javamadesoeasy.com/2015/05/exception-handling-exception-hierarchy.html).
    

Q31. What are differences between Exception and Error in java?

Q32. What is difference between throw and throws in java?

### Please read : [Difference between multiple catch block and multi catch syntax](http://www.javamadesoeasy.com/2015/05/difference-between-multiple-catch-block.html)

Q34. What is Difference between Final, Finally and Finalize?

### Please read : [Final, Finally and Finalize - difference and similarity in java](http://www.javamadesoeasy.com/2015/05/final-finally-and-finalize-difference.html)

Q35. What is exception propagation in java?

Whenever methods are called [stack](http://javamadesoeasy.com/2015/01/stacks.html) is formed and an exception is first thrown from the top of the stack and if it is not caught, it starts coming down the stack to previous methods until it is not caught.

If exception remains uncaught even after reaching bottom of the stack it is propagated to JVM and program is terminated.

Q36.  Mention few exception handling best practices ?

### Please read : [Exception handling best practices and guidelines for using exceptions in java](http://www.javamadesoeasy.com/2015/05/exception-handling-best-practices-and.html)

Q37. What is cloning in java?

Cloning is done for copying the object, cloning can be done using shallow or deep copy, we will discuss it later in post.

Few key points about clone method>

-   1) Definition of clone method -
    

<table><colgroup><col width="568"></colgroup><tbody><tr><td><p><span></span><span>protected</span><span> </span><span>native</span><span> Object clone() </span><span>throws</span><span> CloneNotSupportedException;</span></p></td></tr></tbody></table>

-   Clone is a protected method - clone method can’t be called outside class without inheritance.
    
-   Clone is native method, if not overridden its implementation is provided by JVM.
    
-   It returns Object - Means explicitly cast is needed to convert it to original object.
    

-   2) By default clone method do shallow copy.
    
-   3) Class must implement marker interface java.lang.Cloneable. If class doesn’t implement Cloneable than calling clone method on its object will throw CloneNotSupportedException.
    
-   4) shallow copy- If we implement Cloneable interface, we must override clone method and call super.clone() from it, invoking super.clone() will do shallow copy.
    
-   5) Deep copy \- We need to provide custom implementation of clone method for deep copying.  When the copied object contains some other object its references are copied recursively in deep copy.
    

### Please read more about cloning on : [Cloning in java using clone- Shallow and deep copy - 8 techniques for deep copying- 8 important points about cloning](http://www.javamadesoeasy.com/2015/05/cloning-in-java-using-clone-shallow-and.html)

Q38. Is overriding of static method allows in java?

Q39. Is overriding of private method allows in java?

No, private methods are inherited in subclass and hence cannot be overridden.

Though subclass can have same name of private method in superclass.

<table><colgroup><col width="*"></colgroup><tbody><tr><td><p><span>class</span><span> A {</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>private</span><span> </span><span>final</span><span> </span><span>void</span><span> m(){</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>System.</span><span>out</span><span>.println(1);</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>}</span></p><p><span>class</span><span> B </span><span>extends</span><span> A {</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>void</span><span> m(){</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>System.</span><span>out</span><span>.println(2);</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>}</span></p></td></tr></tbody></table>

Q40. What is difference between Interface and abstract class in java?

### Please read : [10 Differences between Interface and abstract class in java - in detail with programs](http://www.javamadesoeasy.com/2015/06/10-differences-between-interface-and.html)

Q41. What is difference between Method overloading and Method overriding in java?

### Please read : [10 Difference between Method overloading and Method overriding in java - in detail with programs](http://www.javamadesoeasy.com/2015/06/10-difference-between-method.html)

Q42. What is difference between equals method and == operator in java? And what will be output of following code snippets?

Code snippet 1 >

<table><colgroup><col width="574"></colgroup><tbody><tr><td><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String s1 = </span><span>new</span><span> String(</span><span>"abc"</span><span>);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;String s2 = </span><span>new</span><span> String(</span><span>"abc"</span><span>);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.</span><span>out</span><span>.println(s1.equals(s2));</span></p></td></tr></tbody></table>

Code snippet 2 >

<table><colgroup><col width="573"></colgroup><tbody><tr><td><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>StringBuffer sb1 = </span><span>new</span><span> StringBuffer(</span><span>"abc"</span><span>);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>StringBuffer sb2 = </span><span>new</span><span> StringBuffer(</span><span>"abc"</span><span>);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>System.</span><span>out</span><span>.println(sb1.equals(sb2));</span></p></td></tr></tbody></table>

\== operator

The \== operator checks for referential equality of object, it checks whether two references are referring to same object or not.

equals method

By default equals method checks for referential equality (Class may override the method and provide different functionality)

By default  if x == y returns true then equals method also returns true.

Example -

\>StringBuffer class doesn’t overrides equals method of Object class. The result is true if both references are referring to same StringBuffer object.

\>String class overrides equals method of Object class and compares one string object to the other string object. The result is true if characters in both String object appears in same order.

Output of Code snippet 1 > true

Output of Code snippet 2 > false

### Please read : [Difference between equals method and == operator in java - testing with String and StringBuffer](http://www.javamadesoeasy.com/2015/05/difference-between-equals-method-and.html)

Q43. What is constructor chaining in java?

whenever the object of class is created, implicitly default no-arg [constructor of class](http://www.javamadesoeasy.com/2015/06/constructor-in-java-constructor.html) and its super class constructor is called.

Q. But how constructor of superclass is called?

A. Implicitly first statement of constructor is super(), \[that means by default first statement of constructor super() is called, super() calls implicit/explicit no-arg constructor of superclass\].

Let’s we have superclass and subclass like this -

<table><colgroup><col width="572"></colgroup><tbody><tr><td><p><span>class</span><span> SuperClass{</span></p><p><span>}</span></p><p><span>class</span><span> SubClass </span><span>extends</span><span> SuperClass{</span></p><p><span>}</span></p></td></tr></tbody></table>

compiler will add default implicit no-arg constructor -

<table><colgroup><col width="576"></colgroup><tbody><tr><td><p><span>class</span><span> SuperClass{</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>SuperClass(){</span><span> //no-arg constructor</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>super</span><span>();</span></p><p><span><span></span></span><span>}</span></p><p><span>}</span></p><p><span>class</span><span> SubClass </span><span>extends</span><span> SuperClass{</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>SubClass(){</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>super</span><span>();</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>}</span></p></td></tr></tbody></table>

### For full program please :[Constructor in java - Constructor chaining, access modifiers with constructors, constructor overloading, exception thrown, constructors are not inherited](http://www.javamadesoeasy.com/2015/06/constructor-in-java-constructor.html)

Q44. What are 4 java platforms ?

-   Java SE/ J2SE - Standard Edition,
    
-   Java EE/ J2EE - Enterprise Edition,
    
-   Java ME/ J2ME - Micro Edition,
    
-   JavaFX
    

Q45. What are Differences between JDK, JRE and JVM, OpenJDK, JIT Compiler?

### 1) JDK (Java Development Kit)

### As the name suggests, JDK is required for java development.

### You need to have JDK in your system for >

-   ### developing, compiling and running Java programs.
    

### JDK = JRE + JVM.

### JDK diagram >

### ![](https://lh3.googleusercontent.com/fjCvI97BpsIyKHH8VCq37Yy1PJvSTvGyGBfKzyipFsVCunqHhXpJ-NW997Mfc7Tu0NLMO2xPq-dOWX18urXOBurwr4I0hSvvjpAIm5Fxwv1MZY8elvIRMmAOxASPjVvN1NgOVGI)

### 2) JRE (Java Runtime environment)

### JRE provides environment for running/executing programs.

### You need to have JRE in your system for >

-   ### running Java programs.
    

### JRE = JVM + class libraries (rt.jar)  + other libraries (if any).

### 3)  [JVM (java virtual machine)](http://www.javamadesoeasy.com/2015/06/jvm-java-virtual-machine.html)

### JVM is the virtual machine on which java code executes.

### JVM is responsible for converting byte code into machine specific code.

### Fore more read : [JDK (Java Development Kit), JRE (Java Runtime environment), JVM (java virtual machine), Differences between JDK, JRE and JVM, OpenJDK, JIT Compiler (Just In Time Compiler) internal working](http://www.javamadesoeasy.com/2015/06/jdk-java-development-kit-jre-java.html)

Q46. How many primitive data types are provided by java ?

Java provides 8 primitive data types

<table><colgroup><col width="312"><col width="278"></colgroup><tbody><tr><td><p><span>byte</span></p></td></tr><tr><td><p><span>short</span></p></td></tr><tr><td><p><span>char</span></p></td></tr><tr><td><p><span>int</span></p></td></tr><tr><td><p><span>long</span></p></td></tr><tr><td><p><span>float</span></p></td></tr><tr><td><p><span>boolean</span></p></td></tr></tbody></table>

Q47. Explain Implicit casting/promotion of primitive Data type in java?

Diagram of Implicit casting/promotion of primitive Data type in java >

![](https://lh6.googleusercontent.com/h-U9lryD1lKo3FPgYzaHNosVY6m1afQ-QYRnoHrbq7BWbWAHY9OCgWoFg8GQM5jizwWlNSLSEzblUbtG84IesiUzCRO12elpcpZ70Uszm9YCY_GEd1rQneMfBMHNKznUA1s2SWo)

boolean cannot be casted implicitly or explicitly to any other datatype.

Q48. What is Thread in java?

-   Threads consumes CPU in best possible manner, hence enables multi processing. Multi threading reduces idle time of CPU which improves performance of application.
    

Q49. How to implement Threads in java?

1.  Thread creation by  implementing java.lang.Runnable interface.
    

We will create object of class which implements Runnable interface :

<table><colgroup><col width="567"></colgroup><tbody><tr><td><p><span>MyRunnable runnable=</span><span>new</span><span> MyRunnable();</span></p><p><span>Thread thread=</span><span>new</span><span> Thread(runnable);</span></p></td></tr></tbody></table>

     2) And then create Thread object by calling constructor and passing reference of Runnable interface i.e.  runnable object :

<table><colgroup><col width="567"></colgroup><tbody><tr><td><p><span>Thread thread=</span><span>new</span><span> Thread(runnable);</span></p></td></tr></tbody></table>

Q50. We should implement Runnable interface or extend Thread class. What are differences between implementing Runnable and extending Thread?

Well the answer is you must [extend Thread](http://www.javamadesoeasy.com/2015/03/implementing-threads-in-java-by.html) only when you are looking to modify run() and other methods as well. If you are simply looking to modify only the run() method implementing Runnable is the best option (Runnable interface has only one abstract method i.e. run() ).  

1.  Multiple inheritance in not allowed in java : When we implement Runnable interface we can extend another class as well, but if we extend Thread class we cannot extend any other class because java does not allow multiple inheritance. So, same work is done by implementing Runnable and extending Thread but in case of implementing Runnable we are still left with option of extending some other class. So, it’s better to implement Runnable.
    

2.  [Thread safety](http://www.javamadesoeasy.com/2015/03/guidelines-to-thread-safe-code-most.html) : When we implement Runnable interface, same object is shared amongst multiple threads, but when we extend Thread class each and every thread gets associated with new object.
    

Q51. How can you ensure all threads that started from main must end in order in which they started and also main should end in last? (Important)

Interviewers tend to know interviewees knowledge about Thread methods. So this is time to prove your point by answering correctly. We can use [join() method](http://www.javamadesoeasy.com/2015/03/join-method-ensure-all-threads-that.html) to ensure all threads that started from main must end in order in which they started and also main should end in last.

Q52. What is difference between starting thread with run() and start() method? (Important)

When you call start() method, main thread internally calls run() method to start newly created thread. So run() method is ultimately called by newly created thread.

When you call run() method main thread rather than starting run() method with newly thread it start run() method by itself.

Q53. What is significance of using Volatile keyword?

Java allows threads to access shared variables. As a rule, to ensure that shared variables are consistently updated, a thread should ensure that it has exclusive use of such variables by obtaining a lock that enforces mutual exclusion for those shared variables.

If a field is declared volatile, in that case the Java memory model ensures that all threads see a consistent value for the variable.

### DETAILED DESCRIPTION : [Volatile keyword in java- difference between synchronized and volatile with programs, 10 key points about volatile keyword, why volatile variables are not cached in memory](http://www.javamadesoeasy.com/2015/03/volatile-keyword-in-java-difference.html)

Q54. Differences between synchronized and volatile keyword in Java? (Important)

Its very important question from interview perspective.

1.  [Volatile](http://www.javamadesoeasy.com/2015/03/volatile-keyword-in-java-difference.html) does not acquire any lock on variable or object, but [Synchronization](http://www.javamadesoeasy.com/2015/03/synchronization-blocks-and-methods.html) acquires lock on method or block in which it is used.
    

2.  Volatile variables are not cached, but variables used inside synchronized method or block are cached.
    

3.  When volatile is used will never create deadlock in program, as volatile never obtains any kind of lock . But in case if synchronization is not done properly, we might end up creating dedlock in program.
    

### DETAILED DESCRIPTION : [Differences between synchronized and volatile keyword in detail with programs.](http://www.javamadesoeasy.com/2015/03/differences-between-synchronized-and.html)

Q55. Can you again start Thread?

No, [we cannot start Thread again](http://www.javamadesoeasy.com/2015/03/can-we-start-thread-again.html), doing so will throw runtimeException java.lang.IllegalThreadStateException. The reason is once run() method is executed by Thread, it goes into [dead state](http://www.javamadesoeasy.com/2015/03/thread-states-thread-life-cycle-in-java.html).

Q56. What is race condition in multithreading and how can we solve it? (Important)

This is very important question, this forms the core of multi threading, you should be able to explain about [race condition in detail](http://www.javamadesoeasy.com/2015/03/race-condition-in-multithreading-and.html). When more than one thread try to access same resource without synchronization causes race condition.

So we can solve race condition by using either [synchronized block or synchronized method](http://www.javamadesoeasy.com/2015/03/synchronization-blocks-and-methods.html). When no two threads can access same resource at a time phenomenon is also called as mutual exclusion.

Q57. How threads communicate between each other?

This is very must know question for all the interviewees, you will most probably face this question in almost every time you go for interview.

Q58. Why wait(), notify()  and notifyAll() are in Object class and not in Thread class? (Important)

Q59. Is it important to acquire object lock before calling wait(), notify() and notifyAll()?

Yes, it’s mandatory to acquire object lock before calling these methods on object. As discussed above [wait(), notify()  and notifyAll()](http://www.javamadesoeasy.com/2015/03/wait-and-notify-methods-definition-8.html) methods are always called from [Synchronized block](http://www.javamadesoeasy.com/2015/03/synchronization-blocks-and-methods.html) only, and as soon as thread enters synchronized block it acquires object lock (by holding object monitor). If we call these methods without acquiring object lock i.e. from outside synchronize block then java.lang. IllegalMonitorStateException is thrown at runtime.

Wait() method needs to enclosed in try-catch block, because it throws compile time exception i.e. InterruptedException.

Q60. How can you solve consumer producer problem by using wait() and notify() method? (Important)

Here come the time to answer very very important question from interview perspective. Interviewers tends to check how sound you are in threads inter communication. Because for solving this problem we got to use synchronization blocks, wait() and notify() method very cautiously. If you misplace synchronization block or any of the method, that may cause your program to go horribly wrong. So, before going into this question first i’ll recommend you to understand how to use synchronized blocks, [wait() and notify() methods](http://www.javamadesoeasy.com/2015/03/wait-and-notify-methods-definition-8.html).

### DETAILED DESCRIPTION [with program : Solve Consumer Producer problem by using wait() and notify() methods in multithreading.](http://www.javamadesoeasy.com/2015/03/solve-consumer-producer-pattern-by.html)

Q61. How can you solve consumer producer pattern by using BlockingQueue? (Important)

Now it’s time to gear up to face question which is most probably going to be followed up by previous question i.e. after how to solve consumer producer problem using wait() and notify() method. Generally you might wonder why interviewer's are so much interested in asking about [solving consumer producer problem using BlockingQueue](http://www.javamadesoeasy.com/2015/03/solve-consumer-producer-problem-by.html), answer is they want to know how strong knowledge you have about java concurrent Api’s, this Api use consumer producer pattern in very optimized manner, BlockingQueue is designed is such a manner that it offer us the best performance.

Key methods for solving consumer producer pattern are >

<table><colgroup><col width="581"></colgroup><tbody><tr><td><p><span>put(i); &nbsp;&nbsp;</span><span>&nbsp;&nbsp;&nbsp;</span><span>//used by producer to put/produce in sharedQueue.</span></p><p><span>take();</span><span><span> </span></span><span>//used by consumer to take/consume from sharedQueue.</span></p></td></tr></tbody></table>

Q62. What is difference between String, StringBuffer and StringBuilder in java ?

Q63. What is reflection in java? Have you ever used reflection directly or directly?

[Reflection](http://www.javamadesoeasy.com/2015/05/reflection-in-java-methods-used-and.html) is used to load java classes at runtime. This is very interesting question, though you may not have used reflection directly in java, but definitely you must have used it indirectly, but you must be thinking how. answer is quite simple - Frameworks like struts, spring and hibernate uses reflection for loading classes at runtime.

Q64. What is significance of static in java?

1.  The static is a [keyword](http://www.javamadesoeasy.com/2015/05/keywords-in-java-language.html) in java.
    
2.  Static variable, method, class are stored in perm gen(permanent generation memory).
    

Static variable

3.  static variables are also known as class variables.
    
4.  We need not to create instance of class for accessing static variables.
    

Static method

5.  static methods are also known as class methods.
    
6.  We need not to create instance of class for accessing static methods.
    

Static class

7.  static class are also known as static nested class.
    
8.  Top level class can never be static in java.
    

Static block

10.  They are called as soon as class is loaded even before instance of class is created (i.e. before constructor is called).
    

### Please read more : [Static keyword in java - variable, method, class, block - 20 salient features](http://www.javamadesoeasy.com/2015/05/static-keyword-in-java-variable-method.html)

Q65. Can we override [static](http://www.javamadesoeasy.com/2015/05/static-keyword-in-java-variable-method.html) method in java?

Its one of the favourite question of interviewers. Intention is to test very basic core java concept.

[Static method cannot be overridden](http://www.javamadesoeasy.com/2015/05/why-static-method-cannot-be-overridden.html), any attempt to do this will not cause compilation error, but the results won’t be same when we would have overridden non-static methods.

But why?

Overriding in Java means that the method would be called on the run time based on type of the object and not on the compile time type of it .

But static methods are class methods access to them is always resolved during compile time only using the compile time type information.

Q66. How do you ensure different thread access different resources concurrently without deadlock?

Acquire lock on resources in a particular order and then releasing acquired lock in reverse order won’t create any deadlock.

Q67. Which method is called for garbage collection in java? What algorithm does garbage collector follows?

Mark and sweep algorithm internal working in 3 steps >  

STEP 1 > Unreferenced objects (garbage) are not reclaimed immediately.

-   Instead, garbage(unreferenced objects) is gathered until memory is not full.
    

STEP 2 >When memory becomes full >

-   execution of the program is suspended temporarily,
    
-   mark and sweep algorithm collects all the garbage (i.e. all unreferenced objects are reclaimed )
    

STEP 3 >Once garbage is collected >

-   execution of the program is resumed.
    

Q68. What is Singleton class/design pattern in java?

Singleton class means only one instance of class can exist.

Q69. objects and primitive types are passed by value or reference?

Q70. What are different type of classes in java?

-   1) Inner class/ nested class
    

-   3) Local inner class
    
-   4) Anonymous inner class
    

### For detailed explanation must read : [Inner class/ nested class, static nested class, local and anonymous inner class in java](http://www.javamadesoeasy.com/2015/06/inner-class-nested-class-static-local.html)

Q71. What is Differences between Instance initialization block and Static initialization block?

### Please read : [Differences between Instance initialization block and Static initialization block in java - Features in detail with programs](http://www.javamadesoeasy.com/2015/06/differences-between-instance.html)

Q72.  How ConcurrentHashMap works? Can 2 threads on same ConcurrentHashMap object access it concurrently?

[ConcurrentHashMap](http://www.javamadesoeasy.com/2015/04/hashmap-and-concurrenthashmap.html) is divided into different segments based on concurrency level. So different threads can access different segments concurrently.

Can threads read the segment locked by some other thread?

Yes. When thread locks one segment for updation it does not block it for retrieval (done by get method) hence some other thread can read the segment (by get method), but it will be able to read the data before locking.

Segments in ConcurrentHashMap with diagram \>

we have ConcurrentHashMap with 4 segments -

(Diagram shows how segments are formed in ConcurrentHashMap)

[![](https://lh5.googleusercontent.com/ny310qyA6gLl4BgY_CsQzNEUSq5QBY3Ke1IoDoVlStmZrdEESxwKB0Lhfceki0XRKiLFDOvx22P7rMiO-YMKu44IO6LQUDSqQsebbC5zCnr3h49RRzMHblSf3AzPnqiYFgWMXCM)](http://www.javamadesoeasy.com/2015/04/hashmap-and-concurrenthashmap.html)

Q73. What is deadlock in multithreading? Write a program to form DeadLock in multi threading and also how to solve DeadLock situation. What measures you should take to avoid deadlock? (Important)

 This is very important question from interview perspective. But, what makes this question important is it checks interviewees capability of creating and detecting deadlock. If you can write a code to form deadlock, than I am sure you must be well capable in solving that deadlock as well. If not, later on this post we will learn how to solve deadlock as well.

Deadlock is a situation where two threads are waiting for each other to release lock holded by them on resources.

Q74. What is life cycle of Thread, explain thread states? (Important)

Thread states/ Thread life cycle is very basic question, before going deep into concepts we must understand Thread life cycle.

Thread have following states >

-   New
    
-   Runnable
    
-   Running
    
-   Waiting/blocked/sleeping
    
-   Terminated (Dead)
    

Thread life cycle in diagram >

![](https://lh3.googleusercontent.com/a0cmi5p4H8oxVyF5FCMrWmJsJnJXEeAQYKHNzHRiiUKuXjH7y42if-Zl2cdSqu28oJR22c65FdFQTCcRZQmVKppGkUneLlcpb3r8gI_75V43imrugMb-9PiIQYnCPXzqySCQAno)

### You may like to have in depth knowledge of [Thread states/ Thread life cycle in java & explanation of thread methods which method puts thread from which state to which state.](http://www.javamadesoeasy.com/2015/03/thread-states-thread-life-cycle-in-java.html)

Q75. What are daemon threads?

[Daemon threads](http://www.javamadesoeasy.com/2015/03/daemon-threads-12-salient-features-of.html) are low priority threads which runs intermittently in background for doing garbage collection.

Q76. Difference between wait() and sleep() ? (Important)

Please read :

### [Difference between wait() and sleep() method in threads](http://www.javamadesoeasy.com/2015/03/difference-between-wait-and-sleep.html)

### [Sleep() method in threads - 10 key features with programs](http://www.javamadesoeasy.com/2015/03/sleep-method-in-threads-10-key-features.html)

### [Wait() and notify() methods- Definition, 8 key features](http://www.javamadesoeasy.com/2015/03/wait-and-notify-methods-definition-8.html)

Q77. Differences and similarities between yield() and sleep() ?

Please read :

### [Differences and similarities between yield() and sleep() in threads](http://www.javamadesoeasy.com/2015/03/differences-and-similarities-between.html)

In multithreading environment it’s important very important to [write thread safe code](http://www.javamadesoeasy.com/2015/03/guidelines-to-thread-safe-code-most.html), thread unsafe code can cause a major threat to your application. I have posted many articles regarding thread safety. So overall this will be revision of what we have learned so far i.e. writing thread safe healthy code and avoiding any kind of [deadlocks](http://www.javamadesoeasy.com/2015/03/deadlock-in-multithreading-program-to.html).

Q79.Difference between notify() and notifyAll() methods, can you write a code to prove your point?

Goodness. Theoretically you must have heard or you must be aware of differences between notify() and notifyAll().But have you created program to achieve it? If not let’s do it.

Q80. What will happen if we don’t override run method?

This question will test your basic knowledge how start and run methods work internally in Thread Api.

When we call start() method on thread, it internally calls run() method with newly created thread. So, if we don’t override run() method newly created thread won’t be called and nothing will happen.

Q81. What will happen if we override start method?

This question will again test your basic core java knowledge how overriding works at runtime, what what will be called at runtime and how start and run methods work internally in Thread Api.

When we call start() method on thread, it internally calls run() method with newly created thread. So, if we override start() method, run() method will not be called until we write code for calling run() method.

Q82. Can we acquire lock on class? What are ways in which you can acquire lock on class?

Thread can acquire lock on class’s class object by-

1.  Entering synchronized block
    

      synchronized (MyClass.class) {

        //thread has acquired lock on MyClass’s class object.

      }

Or,

2.  by entering static synchronized methods.
    

     public static synchronized void method1() {

        //thread has acquired lock on MyRunnable’s class object.

      }

Q83. Difference between object lock and class lock?

Q84.  How can you implement your own Thread Pool in java?

ThreadPool is a pool of threads which reuses a fixed number of threads  to execute tasks.

At any point, at most nThreads threads will be active processing tasks. If additional tasks are submitted when all threads are active, they will wait in the queue until a thread is available.

ThreadPool implementation internally uses [LinkedBlockingQueue](http://www.javamadesoeasy.com/2015/03/custom-implementation-of.html) for adding and removing tasks.

Q85. What is significance of using [ThreadLocal](http://www.javamadesoeasy.com/2015/03/threadlocal-in-multithreading-in-java.html)?

This question will test your command in multi threading, can you really create some perfect multithreading application or not. [ThreadLocal](http://www.javamadesoeasy.com/2015/03/threadlocal-in-multithreading-in-java.html) is a class which provides thread-local variables.

Q86. What is busy spin?

When one thread loops continuously waiting for another thread to signal.

Performance point of view - Busy spin is very bad from performance point of view, because one thread keeps on looping continuously ( and consumes CPU) waiting for another thread to signal.

Solution to busy spin -

Program - Consumer Producer problem with busy spin >

Consumer thread continuously execute (busy spin) in while loop till productionInProcess is true. Once producer thread has ended it will make boolean variable productionInProcess false and busy spin will be over.

<table><colgroup><col width="624"></colgroup><tbody><tr><td><p><span>while</span><span>(</span><span>productionInProcess</span><span>){</span><span><span></span></span></p><p><span>&nbsp;&nbsp;System.</span><span>out</span><span>.println(</span><span>"BUSY SPIN - Consumer waiting for production to get over"</span><span>);</span></p><p><span>}</span></p></td></tr></tbody></table>

Q87. What is executor framework?

Executor and ExecutorService are used for  following purposes >

-   creating thread,
    
-   starting threads,
    

Executor creates [pool of threads](http://www.javamadesoeasy.com/2015/03/implement-thread-pool-in-java.html) and manages life cycle of all threads in it.

In Executor framework, Executor interface and  ExecutorService  class are most prominently used.

Executor interface defines very important execute() method which executes command.

ExecutorService interface extends Executor interface.

An Executor interface provides following type of methods >

-   methods for managing termination and
    
-   methods that can produce a Future for tracking progress of tasks.
    

Q88. What are differences between execute() and submit() method of executor framework?

Q89. What is Semaphore in java 7?

A [semaphore](http://www.javamadesoeasy.com/2015/03/semaphore-in-java.html) controls access to a shared resource by using permits.

-   If permits are greater than zero, then semaphore allow access to shared resource.
    
-   If permits are zero or less than zero, then semaphore does not allow access to shared resource.
    

These permits are sort of counters, which allow access to the shared resource. Thus, to access the resource, a thread must be granted a permit from the semaphore.

Q90. How can you implement Producer Consumer pattern using Semaphore?

Q91. What is significance of atomic classes in java 7?

Classes found in java.util.concurrent.atomic are >

Q92. What are Future and Callable? How are they related?

[Future<V>](http://www.javamadesoeasy.com/2015/03/executor-and-executorservice-framework.html) interface provides method for >

-   for returning result of computation, wait until computation is not completed
    

[Callable<V>](http://www.javamadesoeasy.com/2015/03/executor-and-executorservice-framework.html) interface provides method for computing a result and returning that computed result or throws an exception if unable to do so

Any class implementing Callable interface must override call() method for computing a result.

How Callable and Future are related?

If you submit a Callable object to an Executor returned object is of Future type.

<table><colgroup><col width="624"></colgroup><tbody><tr><td><p><span>Future&lt;Double&gt; futureDouble=executor.submit(</span><span>new</span><span> SquareDoubleCallable(2.2));</span></p></td></tr></tbody></table>

where, SquareDoubleCallable is a class which implements Callable.

Q93. What is CountDownLatch?

There might be situation where we might like our thread to wait until one or more threads completes certain operation.

A CountDownLatch is initialized with a given count .

count specifies the number of events that must occur before latch is released.

Every time a event happens count is reduced by 1. Once count reaches 0 latch is released.

Q94. Where can you use CountDownLatch in real world?

When you go in amusement park, you must have seen on certain rides there is mandate that at least 3 people (3 is count) should be there to take a ride. So, ride keeper (ride keeper is main thread) waits for 3 persons (ride keeper has called await()).

Every time a person comes count is reduced by 1 (let’s say every person is calling countDown() method). Ultimately when 3 persons reach count becomes 0 & wait for ride keeper comes to end.

Q95.What is CyclicBarrier?

There might be situation where we might have to trigger event only when one or more threads completes certain operation.

2 or more threads wait for each other to reach a common barrier point. When all threads have reached common barrier point (i.e. when all threads have called await() method) >

-   All waiting threads are released, and
    
-   Event can be triggered as well.
    

Q96. Why is CyclicBarrier cyclic?

The barrier is called cyclic because CyclicBarrier can be reused after -

-   All the waiting threads are released and
    
-   event has been triggered.
    

Let’s say 10 friends (friends are threads) have planned for picnic on place A (Here place A is common barrier point). And they all decided to play certain game (game is event) only on everyone's arrival at place A. So, all 10 friends must wait for each other to reach place A before launching event.

Now, when all threads have reached common barrier point (i.e. all friends have reached place A) >

-   All waiting threads are released  (All friends can play game), and
    
-   Event can be triggered (they will start playing game).
    

Q98. Similarity and Difference between CyclicBarrier and CountDownLatch in Java?

CyclicBarrier can be awaited repeatedly, but CountDownLatch can’t be awaited repeatedly. i.e. once count has become 0 cyclicBarrier can be used again but CountDownLatch cannot be used again.

### For more Please read :[Similarity and Difference between CyclicBarrier and CountDownLatch in Java](http://www.javamadesoeasy.com/2015/03/similarity-and-difference-between.html)

Q99. What is Phaser in java? Is Phaser similar to CyclicBarrier?

Phaser provides us flexibility of registering and deRegistering parties at any time.

For registering parties, we may use any of the following -

-   constructors, or
    
-   int register(), or
    
-   bulkRegister().
    

For deRegistering parties, we may use any of the following -

-   arriveAndDeregister()
    

Q100. Differences and similarity between Phaser and CyclicBarrier?

But, in CyclicBarrier we used to register parties in constructor but Phaser provides us flexibility of registering and deRegistering parties at any time.

Q101. What is Lock in java?

The java.util.concurrent.locks.Locks is a  interface and its implementations provide more extensive locking operations than can be obtained using synchronized methods and statements.

A lock helps in controlling access to a shared resource by multiple threads. Only one thread at a time can acquire the lock and access the shared resource.

If a second thread attempts to acquire the lock on shared resource when it is acquired by another thread, the second thread will wait until the lock is released. In this way we can achieve [synchronization](http://www.javamadesoeasy.com/2015/03/synchronization-blocks-and-methods.html) and [race conditions](http://www.javamadesoeasy.com/2015/03/race-condition-in-multithreading-and.html) can be avoided.

Read lock of a ReadWriteLock may allow concurrent access to a shared resource.

Q102. Difference between synchronized and ReentrantLock?

Question 103. What is Fork/Join Framework ?

Fork/Join framework enables parallel programming. Parallel programming means taking advantage two or more processors (multicore) in computers.  Parallel programming improves program performance.

### Read more about [Fork/Join Framework - Parallel programming in java](http://www.javamadesoeasy.com/2015/03/forkjoin-framework-parallel-programming.html).

Question 104. What is Serialization in java?

Let’s start by understanding what is Serialization, it’s most basic question which you will have to answer almost in each and every java interview. Serialization is process of converting object into byte stream.

Serialized object (byte stream) can be:

\>Transferred over network.

\>Persisted/saved into file.

\>Persisted/saved into database.

Once, object have have been transferred over network or persisted in file or in database, we could deserialize the object and retain its state as it is in which it was serialized.

Q105 . Difference between Externalizable and Serialization interface ?

### [Difference between Externalizable and Serialization interface in java](http://www.javamadesoeasy.com/2015/07/difference-between-externalizable-and.html)

Q106. How can you avoid certain member variables of class from getting Serialized?

Mark member variables as [static](http://www.javamadesoeasy.com/2015/05/static-keyword-in-java-variable-method.html) or [transient](http://www.javamadesoeasy.com/2015/06/significance-of-using-static-and.html), and those member variables will no more be a part of Serialization.

## Q107. What is serialVersionUID? What will be impact of not defining serialVersionUID in class?

This is one my favourite question, The serialization at runtime associates with each serializable class a version number, called a serialVersionUID, which is used during deserialization to verify that the sender and receiver of a serialized object have loaded classes for that object that are compatible with respect to serialization.

If we  don’t define serialVersionUID in the class, and any modification is made in class, then we won’t be able to deSerialize our class because serialVersionUID generated by java compiler for modified class will be different from old serialized object. And deserialization process will end up throwing java.io.InvalidClassException  (because of serialVersionUID mismatch)

Q108. What are compatible and incompatible changes in Serialization process?

### [compatible and incompatible changes in Serialization and deSerialization process in java](http://www.javamadesoeasy.com/2015/06/compatible-and-incompatible-changes-in.html)

Q109. What will happen if one the member of class does not implement Serializable interface (Important)?

This is classy question which will check your in depth knowledge of Serialization concepts. If any of the member does not implement Serializable than  NotSerializableException is thrown. [Now, let’s see a program.](http://www.javamadesoeasy.com/2015/02/if-member-of-class-does-not-implement.html)

Q110. What will happen if we have used List, Set and Map as member of class?

This question which will check your in depth knowledge of Serialization and Java Api’s. ArrayList, HashSet and HashMap implements Serializable interface, so if we will use them as member of class they will get Serialized and DeSerialized as well.  [Now, let’s see a program.](http://www.javamadesoeasy.com/2015/02/can-list-set-and-maps-be-serialized-and.html)

Question 111. Is constructor of class called during DeSerialization process?

This question which will check your in depth knowledge of Serialization and constructor chaining concepts. It depends on whether our object has implemented Serializable or Externalizable.

If Serializable has been implemented - constructor is not called during DeSerialization process.

But, if Externalizable has been implemented - constructor is called during DeSerialization process.

Question 112. Is constructor of super class called during DeSerialization process of subclass?

Again your basic java concepts will be tested over here. It is depends on whether our superclass has implemented Serializable or not.

If superclass has implemented Serializable \- constructor is not called during DeSerialization process.

If superclass has not implemented Serializable \- constructor is called during DeSerialization process.

Q113. How you can avoid Deserialization process creating another instance of Singleton class?

This is another classy and very important question which will check your in depth knowledge of Serialization and Singleton concepts. I’ll prefer you must understand this concept in detail. We can simply use readResove() method to return same instance of class, rather than creating a new one.

<table><colgroup><col width="624"></colgroup><tbody><tr><td><p><span>&nbsp;</span><span>private</span><span> Object readResolve() </span><span>throws</span><span> ObjectStreamException {</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>return</span><span> </span><span>INSTANCE</span><span>;</span></p><p><span>&nbsp;}</span></p></td></tr></tbody></table>

Q114. How can subclass avoid Serialization if its superClass has implemented Serialization interface ?

If superClass has implemented Serializable that means subclass is also Serializable (as subclass always inherits all features from its parent class), for avoiding Serialization in sub-class we can define writeObject() method and throw NotSerializableException().

<table><colgroup><col width="624"></colgroup><tbody><tr><td><p><span>private</span><span> </span><span>void</span><span> writeObject(ObjectOutputStream os) </span><span>throws</span><span> NotSerializableException {</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>throw</span><span> </span><span>new</span><span> NotSerializableException(</span><span>"This class cannot be Serialized"</span><span>);</span></p><p><span>}</span></p></td></tr></tbody></table>

Q115. Are primitive types part of serialization process?

Q116. Name few methods of Object class?

toString()

RELATED LINKS >>>>

### [COLLECTION - Top 100 interview questions and answers in java for fresher and experienced in detail - Set-1 > Q1- Q50](http://www.javamadesoeasy.com/2015/05/collection-top-50-interview-questions.html)

### [EXCEPTIONS - Top 60 interview questions and answers in java for fresher and experienced - detailed explanation with diagrams Set-1 > Q1- Q25](http://www.javamadesoeasy.com/2015/05/exceptions-top-60-interview-questions_16.html)