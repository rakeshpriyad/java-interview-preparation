package com.test.custom;

public class CustomLinkedHashSetApp {

    public static void main(String[] args) {
        CustomLinkedHashSet<Integer> linkedHashSetCustom = new CustomLinkedHashSet<Integer>();
        linkedHashSetCustom.add(21);
        linkedHashSetCustom.add(25);
        linkedHashSetCustom.add(30);
        linkedHashSetCustom.add(33);
        linkedHashSetCustom.add(35);

        System.out.println("LinkedHashSetCustom contains 21 =" + linkedHashSetCustom.contains(21));
        System.out.println("LinkedHashSetCustom contains 51 =" + linkedHashSetCustom.contains(51));

        System.out.print("Displaying LinkedHashSetCustom: ");
        linkedHashSetCustom.display();

        System.out.println("\n\n21 removed: " + linkedHashSetCustom.remove(21));
        System.out.println("22 removed: " + linkedHashSetCustom.remove(22));

        System.out.print("Displaying LinkedHashSetCustom: ");
        linkedHashSetCustom.display();

    }
}
 
/*Output
 
LinkedHashSetCustom contains 21 =true
LinkedHashSetCustom contains 51 =false
Displaying LinkedHashSetCustom: 21 25 30 33 35
 
21 removed: true
22 removed: false
Displaying LinkedHashSetCustom: 25 30 33 35
 
*/