package com.example;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertTrue;

import java.util.ArrayList;
import java.util.List;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

public class ListTest {

    private List<String> fruits;

    @Before
    public void setUp() {
        fruits = new ArrayList<>();
        fruits.add("Apple");
        fruits.add("Banana");
        System.out.println("Setup: List created and initialized.");
    }

    @After
    public void tearDown() {
        fruits.clear();
        fruits = null;
        System.out.println("Teardown: List cleared and set to null.");
    }

    @Test
    public void testAddFruit_IncreasesSize() {
        System.out.println("Test: testAddFruit_IncreasesSize");

        fruits.add("Cherry");

        assertEquals(3, fruits.size());
        assertTrue(fruits.contains("Cherry"));
    }

    @Test
    public void testRemoveFruit_DecreasesSize() {
        fruits.remove("Apple");

        assertEquals(1, fruits.size());
        assertFalse(fruits.contains("Apple"));
    }

    @Test
    public void testFruitsList_ContainsCorrectItems() {
        assertEquals(2, fruits.size());
        assertEquals("Apple", fruits.get(0));
        assertEquals("Banana", fruits.get(1));
    }
}
