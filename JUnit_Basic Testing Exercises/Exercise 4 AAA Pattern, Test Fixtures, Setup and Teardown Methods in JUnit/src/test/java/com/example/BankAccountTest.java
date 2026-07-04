package com.example;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.fail;

import org.junit.After;
import org.junit.Before;
import org.junit.Test;

public class BankAccountTest {
    private BankAccount account;

    @Before
    public void setUp() {
        account = new BankAccount(100);
    }

    @After
    public void tearDown() {
        account = null;
    }

    @Test
    public void depositIncreasesBalance() {
        // Arrange
        int amountToDeposit = 50;

        // Act
        account.deposit(amountToDeposit);

        // Assert
        assertEquals(150, account.getBalance());
    }

    @Test
    public void withdrawDecreasesBalance() {
        // Arrange
        int amountToWithdraw = 40;

        // Act
        account.withdraw(amountToWithdraw);

        // Assert
        assertEquals(60, account.getBalance());
    }

    @Test
    public void withdrawWithInsufficientFundsThrowsException() {
        // Arrange
        int amountToWithdraw = 200;

        // Act
        try {
            account.withdraw(amountToWithdraw);
            fail("Expected IllegalArgumentException");
        } catch (IllegalArgumentException ex) {
            // Assert
            assertEquals("Insufficient funds", ex.getMessage());
        }
    }
}
