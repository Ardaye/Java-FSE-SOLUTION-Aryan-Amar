package com.example;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertNull;
import static org.junit.Assert.assertTrue;

import org.junit.Test;

public class AssertionsTest {

    @Test
    public void testAssertions() {
        assertEquals("2 + 3 should equal 5", 5, 2 + 3);

        assertTrue("5 is greater than 3", 5 > 3);

        assertFalse("5 is not less than 3", 5 < 3);

        assertNull("This object should be null", null);

        assertNotNull("A new Object should not be null", new Object());
    }
}
