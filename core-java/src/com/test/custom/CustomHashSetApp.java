package com.test.custom;

/**
 * Main class- to test HashMap functionality.
 */
public class CustomHashSetApp {

    public static void main(String[] args) {
        CustomHashSet<Integer> hashSetCustom = new CustomHashSet<Integer>();
        hashSetCustom.add(21);
        hashSetCustom.add(25);
        hashSetCustom.add(30);
        hashSetCustom.add(33);
        hashSetCustom.add(35);

        System.out.println("HashSetCustom contains 21 =" + hashSetCustom.contains(21));
        System.out.println("HashSetCustom contains 51 =" + hashSetCustom.contains(51));

        System.out.print("Displaying HashSetCustom: ");
        hashSetCustom.display();

        System.out.println("\n\n21 removed: " + hashSetCustom.remove(21));
        System.out.println("22 removed: " + hashSetCustom.remove(22));

        System.out.print("Displaying HashSetCustom: ");
        hashSetCustom.display();

    }
}
 
/*Output
 
HashSetCustom contains 21 =true
HashSetCustom contains 51 =false
Displaying HashSetCustom: 21 25 33 30 35
 
21 removed: true
22 removed: false
Displaying HashSetCustom: 25 33 30 35
 
*/