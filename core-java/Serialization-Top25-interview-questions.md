![](https://lh6.googleusercontent.com/BiR0F5peTgedkWU0YrUIqpwBvBrpymERqzAng_vN5IHCuoqdfK7MKm6dRzwNOw-l64YbZ1VTI0xX6TffhpK-RySu4h38rPuWVcfKRC76TacIpnHo6g8UBOr-7sqbov6pJt6V4a8)Java Serialization is one the most important topic when it comes to interviews, developers are frequently using Serialization in their projects, interviewers are interested in knowing whether interviewees know about Serialization in depth or not, whether they can customize Serialization process or not and lot more. I will be covering all the classy questions which could be framed around Serialization and provide you with program for each and every question.

Question 1. What is Serialization in java?

Answer. Let’s start by understanding what is Serialization, it’s most basic question which you will have to answer almost in each and every java interview. Serialization is process of converting object into byte stream.

Serialized object (byte stream) can be:

\>Transferred over network.

\>Persisted/saved into file.

\>Persisted/saved into database.

Once, object have have been transferred over network or persisted in file or in database, we could deserialize the object and retain its state as it is in which it was serialized.

Question 2. How do we Serialize object, write a program to serialize and deSerialize object and persist it in file (Important)?

Answer. You must be able to write Serialization code to impress interviewer. In order to serialize object our class needs to implement java.io.Serializable interface. Serializable interface is Marker interface i.e. it does not have any methods of its own, but it tells Jvm that object has to converted into byte stream.

Create object of ObjectOutput and give it’s reference variable name oout and call writeObject() method and pass our employee object as parameter \[oout.writeObject(object1) \]

<table><colgroup><col width="634"></colgroup><tbody><tr><td><p><span>OutputStream fout = </span><span>new</span><span> FileOutputStream(</span><span>"ser.txt"</span><span>);</span></p><p><span>ObjectOutput oout = </span><span>new</span><span> ObjectOutputStream(fout);</span></p><p><span>System.</span><span>out</span><span>.println(</span><span>"</span><span>Serialization process has started, serializing employee objects...</span><span>"</span><span>);</span></p><p><span>oout.writeObject(object1);</span></p></td></tr></tbody></table>

Create object of ObjectInput and give it’s reference variable name oin and call readObject() method \[oin.readObject() \]

<table><colgroup><col width="*"></colgroup><tbody><tr><td><p><span>InputStream fin=</span><span>new</span><span> FileInputStream(</span><span>"ser.txt"</span><span>);</span></p><p><span>ObjectInput oin=</span><span>new</span><span> ObjectInputStream(fin);</span></p><p><span>System.</span><span>out</span><span>.println(</span><span>"</span><span>DeSerialization process has started, displaying employee objects..."</span><span>);</span></p><p><span>Employee emp;</span></p><p><span>emp=(Employee)</span><span>oin.readObject();</span></p></td></tr></tbody></table>

Question 3 . Difference between Externalizable and Serialization interface (Important)?

Answer. Here comes the time to impress interviewer by differentiating Serializable and Externalizable use.

<table><colgroup><col width="162"><col width="254"><col width="303"></colgroup><tbody><tr><td><br></td><td><div dir="ltr"><p><a href="http://www.javamadesoeasy.com/2015/02/serialize-and-deserialize-object.html"><span>SERIALIZABLE</span></a></p></div></td><td><div dir="ltr"><p><a href="http://www.javamadesoeasy.com/2015/02/serialize-and-deserialize-object-by.html"><span>EXTERNALIZABLE</span></a></p></div></td></tr><tr><td><p><span>Methods</span></p></td><td><p><span>It is a </span><span>marker </span><span>interface it doesn’t have any method.</span></p></td><td><p><span>It’s not a marker interface.</span></p><p><span>It has method’s called </span><span>writeExternal()</span><span> and </span><span>readExternal()</span><span></span></p></td></tr><tr><td><p><span>Default Serialization process</span></p></td><td><p><span>YES</span><span>, Serializable provides its own </span><span>default serialization process</span><span>, we just need to implement Serializable interface.</span></p></td><td><p><span>NO</span><span>, we need to override </span><span>writeExternal()</span><span> and </span><span>readExternal()</span><span> for serialization process to happen.</span></p></td></tr><tr><td><p><span>Customize serialization process</span></p></td><td><p><span>We </span><span>can </span><span>customize </span><span>default serialization process</span><span> by </span><span>defining following </span><span>methods in our class &gt;</span><span>readObject()</span><span> and </span><span>writeObject()</span><span> &nbsp;</span></p><p><span>Note</span><span>: We are not overriding these methods, we are defining them in our class.</span></p></td><td><p><span>Serialization process is completely customized</span></p><p><span>We need to </span><span>override </span><span>Externalizable interface’s </span><span>writeExternal()</span><span> and </span><span>readExternal()</span><span> methods.</span></p></td></tr><tr><td><p><span>Control over Serialization</span></p></td><td><p><span>It provides </span><span>less control</span><span> over Serialization as it’s not mandatory to define </span><span>readObject()</span><span> and </span><span>writeObject()</span><span> methods.</span></p></td><td><p><span>Externalizable provides you </span><span>great control</span><span> over serialization process as it is important to override &nbsp;</span><span>writeExternal()</span><span> and </span><span>readExternal()</span><span> methods.</span></p></td></tr><tr><td><p><span>Constructor call during </span><span>deSerialization</span></p></td><td><p><span>Constructor is </span><span>not </span><span>called during deSerialization.</span></p></td><td><p><span>Constructor</span><span> is called</span><span> during deSerialization.</span></p></td></tr></tbody></table>

Question 4. How can you customize Serialization and DeSerialization process when you have implemented Serializable interface (Important)?

Let’s customize Serialization process by defining writeObject()  method :

<table><colgroup><col width="*"></colgroup><tbody><tr><td><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>private</span><span> </span><span>void</span><span> writeObject(ObjectOutputStream os) {</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>System.</span><span>out</span><span>.println(</span><span>"In, writeObject() method."</span><span>); &nbsp;&nbsp;</span><span><span></span></span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>try</span><span> {</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>os.writeInt(</span><span>this</span><span>.</span><span>id</span><span>);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>os.writeObject(</span><span>this</span><span>.</span><span>name</span><span>);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>} </span><span>catch</span><span> (Exception e) {</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>e.printStackTrace();</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p></td></tr></tbody></table>

We have serialized id and name manually by writing them in file.

Let’s customize DeSerialization process by defining readObject()  method :

<table><colgroup><col width="*"></colgroup><tbody><tr><td><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>private</span><span> </span><span>void</span><span> readObject(ObjectInputStream ois) {</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>System.</span><span>out</span><span>.println(</span><span>"In, readObject() method."</span><span>);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>try</span><span> {</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>id</span><span>=ois.readInt();</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>name</span><span>=(String)ois.readObject();</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>} </span><span>catch</span><span> (Exception e) {</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>e.printStackTrace();</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p></td></tr></tbody></table>

We have DeSerialized id and name manually by reading them from file.

Question 5. Wap to explain how can we Serialize and DeSerialize object by implementing Externalizable interface (Important)?

For Serialization process override writeExternal()  method & for DeSerialization process by override readExternal() method.

Let’s customize Serialization process by overriding [writeExternal()](http://www.javamadesoeasy.com/2015/02/serialize-and-deserialize-object-by.html) method :

<table><colgroup><col width="663"></colgroup><tbody><tr><td><p><span>&nbsp;&nbsp;</span><span>public</span><span> </span><span>void</span><span> </span><span>writeExternal</span><span>(ObjectOutput oo) </span><span>throws</span><span> IOException {</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>System.</span><span>out</span><span>.println(</span><span>"in writeExternal()"</span><span>);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>oo.writeInt(</span><span>id</span><span>);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>oo.writeObject(</span><span>name</span><span>);</span></p><p><span>&nbsp;&nbsp;}</span></p></td></tr></tbody></table>

We have serialized id and name manually by writing them in file.

Let’s customize DeSerialization process by overriding [readExternal()](http://www.javamadesoeasy.com/2015/02/serialize-and-deserialize-object-by.html)  method :

<table><colgroup><col width="664"></colgroup><tbody><tr><td><p><span>&nbsp;&nbsp;</span><span>public</span><span> </span><span>void</span><span> </span><span>readExternal</span><span>(ObjectInput in) </span><span>throws</span><span> IOException, ClassNotFoundException {</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>System.</span><span>out</span><span>.println(</span><span>"in readExternal()"</span><span>);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>this</span><span>.</span><span>id</span><span>=in.readInt();</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>this</span><span>.</span><span>name</span><span>=(String)in.readObject();</span></p><p><span>&nbsp;&nbsp;}</span></p></td></tr></tbody></table>

We have DeSerialized id and name manually by reading them from file.

Question 6. How can you avoid certain member variables of class from getting Serialized?

Answer. Mark member variables as [static](http://www.javamadesoeasy.com/2015/05/static-keyword-in-java-variable-method.html) or transient, and those member variables will no more be a part of Serialization.

## Question 7. What is serialVersionUID?

Answer. The serialization at runtime associates with each serializable class a version number, called a serialVersionUID, which is used during deserialization to verify that the sender and receiver of a serialized object have loaded classes for that object that are compatible with respect to serialization.

We can use eclipse to generate serialVersionUID for our class (as done in below snapshot)

![](https://lh3.googleusercontent.com/MwumInnCHx4Wbl5Tq3uyPAbXBrqa3g7bS7ua0OOH7OXnqYwdI5BuTo8Ab2xiPWCCskt13-ySJ7qfrff4K5UjPbZQPB7YGIQ8s7cjKsoes0x6-mytVbK-oVnSxxCdt6owq_Qt8Z8)

How to avoid warning ‘The serializable class Employee does not declare a static final serialVersionUID field of type long’ ?

Again answer is we can use eclipse to generate serialVersionUID for our class (as mentioned in above screenshot, click on warning button on left in line 10).

Answer.  This is one my favourite question, i am going to discuss it in a very detailed manner. serialVersionUID is used for version control of object.

If we  don’t define serialVersionUID in the class, and any modification is made in class, then we won’t be able to deSerialize our class because serialVersionUID generated by java compiler for modified class will be different from old serialized object. And deserialization process will end up throwing java.io.InvalidClassException  (because of serialVersionUID mismatch)

Let’s frame another question by twisting few words in it.

If you have serialized a class & then added few fields in it and then deserialize already serialized version of class, how can you ensure that you don’t end up throwing InvalidClassException?

\>Simply we need to define serialVersionUID in class.

When we Deserialize class ( class which has been modified after Serialization and also class doesn’t declare SerialVersionUID) InvalidClassException is thrown.

When we Deserialize class ( class which has been modified after Serialization and also class declare SerialVersionUID) its gets DeSerialized successfully.

Question 9. What are compatible and incompatible changes in Serialization process?

Answer.

Compatible Changes :  Compatible changes are those changes which does not affect deSerialization process even if class was updated after being serialized (provided serialVersionUID has been declared)

-   Adding new fields - We can add new member variables in class.
    
-   Adding writeObject()/readObject()  methods - We may add these methods to customize serialization process.
    
-   Removing writeObject()/readObject() methods - We may remove these methods and then default customization process will be used.
    
-   Changing access modifier of a field - The change to access modifiers i.e. public, default, protected, and private have no effect on the ability of serialization to assign values to the fields.
    
-   Changing a field from static to non static OR changing transient filed to non transient field. - it’s like addition of fields.
    

InCompatible Changes :  InCompatible changes are those changes which affect deSerialization process if class was updated after being serialized (provided serialVersionUID has been declared)

-   Deletion of fields.
    
-   Changing a nonstatic field to static or  non transient field to transient field. - it’s equal to deletion of fields.
    
-   Modifying the writeObject() / readObject() method - we must not modify these method, though adding or removing them completely is compatible change.
    

Question 10. What if Serialization is not available, is any any other alternative way to transfer object over network?

Answer.

\>We can can convert JSON to transfer the object. JSON is helpful in stringifying and de stringifying object.

\>Hibernate (ORM tool) helps in persisting object as it in database and later we can read persisted object.

\>We can convert object into XML (as done in web services) and transfer object over network.

Question 11. Why static member variables are not part of java serialization process (Important)?

Answer. Serialization is applicable on objects or primitive data types only, but [static](http://www.javamadesoeasy.com/2015/05/static-keyword-in-java-variable-method.html) members are class level variables, therefore, different object’s of same class have same value for static member.

So, serializing static member will consume unnecessary space and time.

Also, if modification is made in static member by any of the object, it won’t be in sync with other serialized object’s value.

Question 12. What is significance of transient variables?

Answer. Serialization is not applicable on transient variables (it helps in saving time and space during Serialization process), we must mark all rarely used variables as transient. We can initialize transient variables during deSerialization by customizing deSerialization process.

Question 13. What will happen if one the member of class does not implement Serializable interface (Important)?

Answer. This is classy question which will check your in depth knowledge of Serialization concepts. If any of the member does not implement Serializable than  NotSerializableException is thrown. [Now, let’s see a program.](http://www.javamadesoeasy.com/2015/02/if-member-of-class-does-not-implement.html)

Question 14. What will happen if we have used List, Set and Map as member of class?

Answer. This question which will check your in depth knowledge of Serialization and Java Api’s. ArrayList, HashSet and HashMap implements Serializable interface, so if we will use them as member of class they will get Serialized and DeSerialized as well.  [Now, let’s see a program.](http://www.javamadesoeasy.com/2015/02/can-list-set-and-maps-be-serialized-and.html)

Question 15. Is constructor of class called during DeSerialization process?

Answer. This question which will check your in depth knowledge of Serialization and constructor chaining concepts. It depends on whether our object has implemented Serializable or Externalizable.

If Serializable has been implemented - constructor is not called during DeSerialization process.

But, if Externalizable has been implemented - constructor is called during DeSerialization process.

Question 16 . Are primitive types part of serialization process?

Question 17. Is constructor of super class called during DeSerialization process of subclass (Important)?

Answer. Again your basic java concepts will be tested over here. It is depends on whether our superclass has implemented Serializable or not.

If superclass has implemented Serializable \- constructor is not called during DeSerialization process.

If superclass has not implemented Serializable \- constructor is called during DeSerialization process.

Question 18. What values will int and Integer will be initialized to during DeSerialization process if they were not part of Serialization?

Question 19. How you can avoid Deserialization process creating another instance of Singleton class (Important)?

Answer. This is another classy and very important question which will check your in depth knowledge of Serialization and Singleton concepts. I’ll prefer you must understand this concept in detail. We can simply use readResove() method to return same instance of class, rather than creating a new one.

Defining readResolve() method ensures that we don't break singleton pattern during DeSerialization process.

<table><colgroup><col width="674"></colgroup><tbody><tr><td><p><span>&nbsp;</span><span>private</span><span> Object readResolve() </span><span>throws</span><span> ObjectStreamException {</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>return</span><span> </span><span>INSTANCE</span><span>;</span></p><p><span>&nbsp;}</span></p></td></tr></tbody></table>

Also define readObject() method, rather than creating new instance, assign current object to INSTANCE like done below :

<table><colgroup><col width="672"></colgroup><tbody><tr><td><p><span>&nbsp;</span><span>private</span><span> </span><span>void</span><span> </span><span>readObject</span><span>(ObjectInputStream ois) </span><span>throws</span><span> IOException,ClassNotFoundException{</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ois.defaultReadObject();</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>synchronized</span><span> (SingletonClass.</span><span>class</span><span>) {</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>if</span><span> (</span><span>INSTANCE</span><span> == </span><span>null</span><span>) {</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>INSTANCE</span><span> = </span><span>this</span><span>;</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></p><p><span>&nbsp;}</span></p></td></tr></tbody></table>

Question 20. Can you Serialize Singleton class such that object returned by Deserialization process  is in same state as it was during Serialization time (regardless of any change made to it after Serialization)  (Important)?

Answer. It’s another very important question which will be important in testing your Serialization and Singleton related concepts, you must try to understand the concept and question in detail.

YES, we can Serialize Singleton class such that object returned by Deserialization process is in same state as it was during Serialization time (regardless of any change made to it after Serialization)

Defining readResolve() method ensures that we don't break singleton pattern during DeSerialization process.

<table><colgroup><col width="673"></colgroup><tbody><tr><td><p><span>&nbsp;</span><span>private</span><span> Object readResolve() </span><span>throws</span><span> ObjectStreamException {</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>return</span><span> </span><span>INSTANCE</span><span>;</span></p><p><span>&nbsp;}</span></p></td></tr></tbody></table>

Also define readObject() method, rather than creating new instance, assign current object to INSTANCE like done below :

<table><colgroup><col width="674"></colgroup><tbody><tr><td><p><span>&nbsp;</span><span>private</span><span> </span><span>void</span><span> </span><span>readObject</span><span>(ObjectInputStream ois) </span><span>throws</span><span> IOException,ClassNotFoundException{</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ois.defaultReadObject();</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>synchronized</span><span> (SingletonClass.</span><span>class</span><span>) {</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>if</span><span> (</span><span>INSTANCE</span><span> == </span><span>null</span><span>) {</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>INSTANCE</span><span> = </span><span>this</span><span>;</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}</span></p><p><span>&nbsp;}</span></p></td></tr></tbody></table>

Question 21. Purpose of serializing Singleton class OR  purpose of saving singleton state?

Answer. Let’s take example of our laptop, daily eod we need to shut it down, but rather than shutting it down hibernate (save state of  laptop) is better option because it enables us to resume at same point where we leaved it, like wise serializing singleton OR saving state of Singleton can be very handy.

Question 22. How can subclass avoid Serialization if its superClass has implemented Serialization interface (Important)?

Answer. If superClass has implemented Serializable that means subclass is also Serializable (as subclass always inherits all features from its parent class), for avoiding Serialization in sub-class we can define writeObject() method and throw NotSerializableException() from there as done below.

<table><colgroup><col width="625"></colgroup><tbody><tr><td><p><span>private</span><span> </span><span>void</span><span> writeObject(ObjectOutputStream os) </span><span>throws</span><span> NotSerializableException {</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>throw</span><span> </span><span>new</span><span> NotSerializableException(</span><span>"This class cannot be Serialized"</span><span>);</span></p><p><span>}</span></p></td></tr></tbody></table>

You might be given code snippets in interviews and asked to give output -

Question 23. Find output of following code :  

<table><colgroup><col width="719"></colgroup><tbody><tr><td><p><span>package</span><span> serDeser6ListSetMap;</span></p><p><span>import</span><span> java.io.FileInputStream;</span></p><p><span>import</span><span> java.io.FileOutputStream;</span></p><p><span>import</span><span> java.io.IOException;</span></p><p><span>import</span><span> java.io.InputStream;</span></p><p><span>import</span><span> java.io.ObjectInput;</span></p><p><span>import</span><span> java.io.ObjectInputStream;</span></p><p><span>import</span><span> java.io.ObjectOutput;</span></p><p><span>import</span><span> java.io.ObjectOutputStream;</span></p><p><span>import</span><span> java.io.OutputStream;</span></p><p><span>import</span><span> java.io.Serializable;</span></p><p><span>import</span><span> java.util.ArrayList;</span></p><p><span>import</span><span> java.util.HashMap;</span></p><p><span>import</span><span> java.util.HashSet;</span></p><p><span>import</span><span> java.util.List;</span></p><p><span>import</span><span> java.util.Map;</span></p><p><span>import</span><span> java.util.Set;</span></p><p><span>/*Author : AnkitMittal &nbsp;Copyright- contents must not be reproduced in any form*/</span></p><p><span>class</span><span> MyClass </span><span>implements</span><span> Serializable {</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>private</span><span> </span><span>static</span><span> </span><span>final</span><span> </span><span>long</span><span> </span><span>serialVersionUID</span><span> = 1L;</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>private</span><span> List&lt;Integer&gt; </span><span>list</span><span>;</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>private</span><span> Set&lt;Integer&gt; </span><span>set</span><span>;</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>private</span><span> Map&lt;Integer,Integer&gt; </span><span>map</span><span>;</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>public</span><span> MyClass(List&lt;Integer&gt; list, Set&lt;Integer&gt; set,</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>Map&lt;Integer, Integer&gt; map) {</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>super</span><span>();</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>this</span><span>.</span><span>list</span><span> = list;</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>this</span><span>.</span><span>set</span><span> = set;</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>this</span><span>.</span><span>map</span><span> = map;</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>@Override</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>public</span><span> String toString() {</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>return</span><span> </span><span>"MyClass [list="</span><span> + </span><span>list</span><span> + </span><span>", set="</span><span> + </span><span>set</span><span> + </span><span>", map="</span><span> + </span><span>map</span><span> + </span><span>"]"</span><span>;</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>}</span></p><p><span>public</span><span> </span><span>class</span><span> SerializeEmployee {</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>public</span><span> </span><span>static</span><span> </span><span>void</span><span> main(String[] args) {</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>List&lt;Integer&gt; list=</span><span>new</span><span> ArrayList&lt;Integer&gt;();</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>list.add(2);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>list.add(3);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>Set&lt;Integer&gt; set=</span><span>new</span><span> HashSet&lt;Integer&gt;();</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>set.add(4);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>set.add(5);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>Map&lt;Integer, Integer&gt; map=</span><span>new</span><span> HashMap&lt;Integer,Integer&gt;();</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>map.put(6, 34);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>map.put(7, 35);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>MyClass object1 = </span><span>new</span><span> MyClass(list,set,map);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>try</span><span> {</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>OutputStream fout = </span><span>new</span><span> FileOutputStream(</span><span>"ser.txt"</span><span>);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>ObjectOutput oout = </span><span>new</span><span> ObjectOutputStream(fout);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>System.</span><span>out</span><span>.println(</span><span>"Serialization process has started, serializing objects..."</span><span>);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>oout.writeObject(object1);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>fout.close();</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>oout.close();</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>System.</span><span>out</span><span>.println(</span><span>"Object Serialization completed."</span><span>);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>//DeSerialization process &gt;</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>InputStream fin=</span><span>new</span><span> FileInputStream(</span><span>"ser.txt"</span><span>);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>ObjectInput oin=</span><span>new</span><span> ObjectInputStream(fin);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>System.</span><span>out</span><span>.println(</span><span>"\nDeSerialization process has started, displaying objects..."</span><span>);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>MyClass object=(MyClass)oin.readObject();</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>System.</span><span>out</span><span>.println(object);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>fin.close();</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>oin.close();</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>System.</span><span>out</span><span>.println(</span><span>"Object DeSerialization completed."</span><span>);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>} </span><span>catch</span><span> (IOException | ClassNotFoundException &nbsp;e) {</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>e.printStackTrace();</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>}</span></p></td></tr></tbody></table>

Answer. Here intention of interviewer will be to find out whether you know that list, set and map can be serialized or not.

/\*OUTPUT

Serialization process has started, serializing objects...

Object Serialization completed.

DeSerialization process has started, dispalying objects...

MyClass \[list=\[2, 3\], set=\[4, 5\], map={6=34, 7=35}\]

Object DeSerialization completed.

\*/

Question 24.  Find output of following code  (Important):

<table><colgroup><col width="719"></colgroup><tbody><tr><td><p><span>package</span><span> SerDeser10memberNotSer;</span></p><p><span>import</span><span> java.io.FileOutputStream;</span></p><p><span>import</span><span> java.io.IOException;</span></p><p><span>import</span><span> java.io.ObjectOutput;</span></p><p><span>import</span><span> java.io.ObjectOutputStream;</span></p><p><span>import</span><span> java.io.OutputStream;</span></p><p><span>import</span><span> java.io.Serializable;</span></p><p><span>class</span><span> MyClass {}</span></p><p><span>/*Author : AnkitMittal &nbsp;Copyright- contents must not be reproduced in any form*/</span></p><p><span>class</span><span> Employee </span><span>implements</span><span> Serializable {</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>private</span><span> </span><span>static</span><span> </span><span>final</span><span> </span><span>long</span><span> </span><span>serialVersionUID</span><span> = 1L;</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>private</span><span> Integer </span><span>id</span><span>;</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>private</span><span> MyClass </span><span>myClass</span><span> ;</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>public</span><span> Employee(Integer id) {</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>this</span><span>.</span><span>id</span><span> = id;</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>myClass</span><span>=</span><span>new</span><span> MyClass();</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>@Override</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>public</span><span> String toString() {</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>return</span><span> </span><span>"Employee [id="</span><span> + </span><span>id</span><span> + </span><span>"]"</span><span>;</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>}</span></p><p><span>public</span><span> </span><span>class</span><span> SerializeDeser {</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>public</span><span> </span><span>static</span><span> </span><span>void</span><span> main(String[] args) {</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>Employee object1 = </span><span>new</span><span> Employee(8);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>try</span><span> {</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>OutputStream fout = </span><span>new</span><span> FileOutputStream(</span><span>"ser.txt"</span><span>);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>ObjectOutput oout = </span><span>new</span><span> ObjectOutputStream(fout);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>System.</span><span>out</span><span>.println(</span><span>"Serialization process has started, serializing objects..."</span><span>);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>oout.writeObject(object1);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>System.</span><span>out</span><span>.println(</span><span>"Object Serialization completed."</span><span>);</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>fout.close();</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>oout.close();</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>} </span><span>catch</span><span> (IOException &nbsp;e) {</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>e.printStackTrace();</span></p><p><span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>&nbsp;&nbsp;</span><span><span> </span></span><span>}</span></p><p><span>}</span></p></td></tr></tbody></table>

Answer. Here intention of interviewer will be to find out whether you know that if any of the member does not implement Serializable than  NotSerializableException is thrown.

/\*OUTPUT

Serialization process has started, serializing objects...

java.io.NotSerializableException: SerDeser10memberNotSer.MyClass

   at java.io.ObjectOutputStream.writeObject0(Unknown Source)

   at java.io.ObjectOutputStream.defaultWriteFields(Unknown Source)

   at java.io.ObjectOutputStream.writeSerialData(Unknown Source)

   at java.io.ObjectOutputStream.writeOrdinaryObject(Unknown Source)

   at java.io.ObjectOutputStream.writeObject0(Unknown Source)

   at java.io.ObjectOutputStream.writeObject(Unknown Source)

   at SerDeser10memberNotSer.SerializeConstructorCheck.main(SerializeConstructorCheck.java:42)

\*/