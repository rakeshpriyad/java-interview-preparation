**Q1. What are 4 OOPS principal in java?**

1. 	Encapsulation - encapsulation means data hiding, 
2. 	Abstraction - Abstraction means hiding the implementation, 
3. 	Inheritance - Inheritance is a process where child class acquires the properties of super class, and 
4. 	Polymorphism -
	a. Compile time polymorphism - can be achieved by using Method overloading &
	b. Runtime polymorphism - Runtime polymorphism can be achieved by using Method overriding
	

1. Encapsulation 
In short, encapsulation means data hiding.
To achieve encapsulation : Make fields/memberVariables private (private can be accessed only within the same class, hence we are hiding the fields within the class), and 
access those private fields via public methods. (Public are accessible from everywhere)

**Advantages of using encapsulation :**
* Encapsulation prevents other classes to access the class data (i.e. preventing access to private fields).
* Encapsulation allow us to modify implemented java code without breaking others code who have implemented the code.
* Outside users who are accessing this class don’t know about the private fields of class, 
* Example - field may be Integer or  String type, but user won’t have any such information.
* So, class at any time can change data type of a field and users won’t know about it, even they need not to. (This point is related to above point)
* Class fields could be made read-only or write-only.
* 
* Encapsulation makes our java code maintainable, extensible and flexible.
* 
Program 1.1 to demonstrate Encapsulation:
```
public class Employee{
    private String id; //private field
 
    public String getId() { //private field accessed inside public method
           return id;
    }
 
    public void setId(String id) {
           this.id = id;
    }
    
}

 

public class EncapsulationTest {
    public static void main(String[] args) {
           Employee emp=new Employee();
           emp.setId("1"); //public method can be accessed outside class.
           System.out.println("emp.getId()  >  "+emp.getId());
    }
}
``` 
/* OUTPUT
 
emp.getId()  >  1
 
*/


What would happen without encapsulation:
No encapsulation means fields won’t be private and could be used outside class.
Program 1.2 - What would happen without encapsulation >

```
class Employee{
    String id;  //No encapsulation - field isn’t private
}
 

public class EncapsulationTest {
    public static void main(String[] args) {
           Employee emp=new Employee();
           emp.id="1";  //As field isn't private, it could be accessed outside class.
           
    }
}
```

What could be impact of not using encapsulation:
Let’s say data type of id was changed from String to Integer, in that case compilation error will be generated wherever id has been used, because code was written considering id is String not a Integer. 
So, by not using encapsulation we will end up breaking others code.
You must be thinking that in below program id has been accessed only at one place, we could make necessary adjustments, but what about id being used at thousands of places in other programs.
Program 1.3 - impact of not using encapsulation
```
class Employee{
    String id;  //No encapsulation - field isn’t private
}

public class EncapsulationTest {
    public static void main(String[] args) {
           Employee emp=new Employee();
           emp.id="1";  //As field isn't private, it could be accessed outside class.
           
    }
}
```
program 1.4 - Now, lets understand how Encapsulation allows to modify implemented java code without breaking others code who have implemented the code via program.

If id would have been private, other classes would have been accessing id outside class only via public methods of class. So, in that case if we were to change data type of id from String to Integer than to avoid breaking of others code we could make relevant changes in setter and getter methods.

In below program : As compared to other programs data type of id has been changed from String to Integer,and to avoid breaking of others code we make relevant changes in setter and getter methods. ( Please compare setter and getter methods with above program)

```
class Employee{
    Integer id;
 
    public String getId() {
           return String.valueOf(id);
    }
 
    public void setId(String id) {
           this.id = Integer.parseInt(id);
    }
    
}
 

public class EncapsulationTest {
    public static void main(String[] args) {
           Employee emp=new Employee();
           emp.setId("1");
           System.out.println("emp.getId()  >  "+emp.getId());
           
    }
}
 
/* OUTPUT
 
emp.getId()  >  1
 
*/
```


**2. Abstraction 
**
In short, Abstraction means hiding the implementation.
Abstraction means representing only the essential things without including background details.
In java abstraction can be achieved by using Interfaces and Abstract classes 

| Interface      | Abstract class |
| ----------- | ----------- |
| Interface helps in achieving pure abstraction in java.      |Abstract class aren’t purely abstraction in java       |
|All Interface are abstract by default. So, it’s not mandatory to write abstract keyword with interface. ```interface MyInterface {//compiler will add  abstract 
}
```
Because of default additions done by compiler, above code will be same as writing below code-
```

abstract interface MyInterface {
}
```| It’s mandatory to write abstract keyword to make class abstract.


Example-

abstract class MyAbstractClass{
    
    abstract void m();
    
} ```
|

Example-