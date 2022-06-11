package com.test.custom;

/**
 * @param <K>
 * @param <V>
 * This class provides custom implementation of LinkedHashSet(without using java api's\- we will be using HashMapCustom)\- which allows does not allow you to store duplicate values.
 * Note\- implementation does not allow you to store null values.
 * maintains insertion order.
 */
class CustomLinkedHashSet<E> {
    private CustomLinkedHashMap<E, Object> linkedHashMapCustom;

    public CustomLinkedHashSet() {
        linkedHashMapCustom = new CustomLinkedHashMap<>();
    }

    /**
     * add objects in LinkedHashSetCustom.
     */
    public void add(E value) {
        linkedHashMapCustom.put(value, null);
    }

    /**
     * Method returns true if LinkedHashSetCustom contains the object.
     *
     * @param obj
     */
    public boolean contains(E obj) {
        return linkedHashMapCustom.contains(obj) != null ? true : false;
    }


    /**
     * Method displays all objects in LinkedHashSetCustom.
     * insertion order is not guaranteed, for maintaining insertion order refer LinkedHashSet.
     */
    public void display() {
        linkedHashMapCustom.displaySet();
    }

    /**
     * Method removes object from setCustom.
     * insertion order is not guaranteed, for maintaining insertion order refer LinkedHashSet.
     *
     * @param obj
     */
    public boolean remove(E obj) {
        return linkedHashMapCustom.remove(obj);
    }
}
