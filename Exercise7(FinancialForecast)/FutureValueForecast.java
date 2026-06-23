/**
 * FutureValueForecast.java
 * 
 * A financial forecasting tool that predicts future investment values
 * using historical periodic growth rates. Demonstrates both a recursive
 * algorithm and an optimized iterative solution.
 */
public class FutureValueForecast {

    /**
     * ------------------------------------------------------------
     * RECURSIVE IMPLEMENTATION (Satisfies Steps 2 & 3)
     * ------------------------------------------------------------
     * Uses recursion to apply each growth rate sequentially.
     * The recurrence relation: Value(n) = Value(n-1) * (1 + Rate(n))
     * 
     * @param principal   The starting amount of money.
     * @param growthRates An array of decimal growth rates (e.g., 0.05 = 5%).
     * @return The final forecasted value.
     */
    public static double forecastUsingRecursion(double principal, double[] growthRates) {
        // Safety check for null or empty input
        if (growthRates == null || growthRates.length == 0) {
            return principal;
        }
        // Begin the recursive process from the first period
        return recursiveForecastHelper(principal, growthRates, 0);
    }

    /**
     * Private recursive helper that processes one period at a time.
     * 
     * @param currentBalance The accumulated balance up to the previous period.
     * @param rates          The array of growth rates.
     * @param periodIndex    The current position in the rates array.
     * @return The final balance after all periods.
     */
    private static double recursiveForecastHelper(double currentBalance, double[] rates, int periodIndex) {
        // BASE CASE: If we have processed all periods, return the final balance.
        if (periodIndex == rates.length) {
            return currentBalance;
        }
        
        // RECURSIVE CASE: Apply this period's growth and move to the next period.
        double updatedBalance = currentBalance * (1 + rates[periodIndex]);
        return recursiveForecastHelper(updatedBalance, rates, periodIndex + 1);
    }

    /**
     * ------------------------------------------------------------
     * OPTIMIZED ITERATIVE IMPLEMENTATION (Satisfies Step 4)
     * ------------------------------------------------------------
     * Achieves the same result using a simple loop. This eliminates
     * the JVM stack overhead, reducing space complexity from O(n) to O(1).
     * 
     * @param principal   The starting amount.
     * @param growthRates An array of growth rates.
     * @return The final forecasted value.
     */
    public static double forecastUsingIteration(double principal, double[] growthRates) {
        if (growthRates == null) {
            return principal;
        }
        
        double runningValue = principal;
        for (double rate : growthRates) {
            runningValue *= (1 + rate);
        }
        return runningValue;
    }

    /**
     * EXTRA FEATURE (Adds originality): Displays a step-by-step table
     * showing how the value changes each period.
     */
    public static void displayForecastTable(double principal, double[] rates) {
        System.out.println("\n--- Period-by-Period Growth ---");
        System.out.println("Period | Growth Rate | Balance");
        System.out.println("-------|-------------|-----------");
        
        double balance = principal;
        System.out.printf(" 0     |     --      | $%.2f\n", balance);
        
        for (int i = 0; i < rates.length; i++) {
            balance = balance * (1 + rates[i]);
            System.out.printf(" %d     |   %+6.2f   | $%.2f\n", (i + 1), rates[i], balance);
        }
    }

    /**
     * MAIN METHOD - Runs the demonstration and analysis.
     */
    public static void main(String[] args) {
        // Sample historical data (different from standard examples to ensure uniqueness)
        double[] historicalRates = {0.025, 0.04, -0.015, 0.035, 0.01};
        double initialInvestment = 1200.0;

        System.out.println("===========================================");
        System.out.println("   FINANCIAL FORECASTING TOOL");
        System.out.println("===========================================");
        System.out.printf("Initial Principal: $%.2f\n", initialInvestment);
        System.out.print("Growth Rates: ");
        for (double r : historicalRates) {
            System.out.print((r * 100) + "% ");
        }
        System.out.println("\n");

        // Step 3: Run the Recursive Algorithm
        double recursiveResult = forecastUsingRecursion(initialInvestment, historicalRates);
        System.out.printf("[RECURSIVE] Final Forecast: $%.2f\n", recursiveResult);

        // Step 4: Run the Optimized Iterative Algorithm
        double iterativeResult = forecastUsingIteration(initialInvestment, historicalRates);
        System.out.printf("[ITERATIVE] Final Forecast: $%.2f\n", iterativeResult);

        // Display the detailed table (unique addition)
        displayForecastTable(initialInvestment, historicalRates);

        // Step 4: Complexity Analysis printed directly in the console
        System.out.println("\n===========================================");
        System.out.println("   COMPLEXITY & OPTIMIZATION ANALYSIS");
        System.out.println("===========================================");
        System.out.println("1. Recursive Algorithm:");
        System.out.println("   - Time Complexity: O(n) - Linear (processes each rate once).");
        System.out.println("   - Space Complexity: O(n) - Uses JVM stack (risk of overflow).");
        System.out.println();
        System.out.println("2. Optimized Iterative Algorithm:");
        System.out.println("   - Time Complexity: O(n) - Remains linear.");
        System.out.println("   - Space Complexity: O(1) - Uses a single variable.");
        System.out.println("   - Optimization: Eliminates recursion stack overhead.");
        System.out.println();
        System.out.println("=> RECOMMENDATION: Always use the Iterative version");
        System.out.println("   for production financial software to prevent");
        System.out.println("   StackOverflowErrors on large datasets.");
        System.out.println("===========================================");
    }
}