import kotlin.math.min

/**
 * Finds the minimum number of coins needed to make a specific amount.
 * This function uses a dynamic programming approach.
 *
 * @param coins A list of available coin denominations.
 * @param amount The target amount to make change for.
 * @return The minimum number of coins, or -1 if the amount cannot be made.
 */
fun dpCoinChange(coins: List<Int>, amount: Int): Int {
    // Sort coins in ascending order to optimize the inner loop.
    val sortedCoins = coins.sorted()
    
    // Initialize a DP array to store the minimum number of coins for each amount up to the target.
    // We use Int.MAX_VALUE to represent an amount that is not yet reachable.
    val dp = IntArray(amount + 1) { Int.MAX_VALUE }
    
    // Base case: 0 coins are needed to make an amount of 0.
    dp[0] = 0
    
    // Iterate through each amount from 1 up to the target amount.
    for (i in 1..amount) {
        var minCoins = Int.MAX_VALUE
        
        // For each amount, iterate through the available coins.
        for (coin in sortedCoins) {
            // If the current amount `i` is less than the coin value, we can't use this coin
            // or any larger coins (because the list is sorted), so we can break the loop.
            if (i - coin < 0) {
                break
            } else {
                // If the subproblem (amount - coin) is reachable (i.e., not Int.MAX_VALUE),
                //We can potentially update our minimum.
                if (dp[i - coin] != Int.MAX_VALUE) {
                    minCoins = min(minCoins, dp[i - coin] + 1)
                }
            }
        }
        // Store the minimum number of coins for the current amount `i`.
        dp[i] = minCoins
    }
    
    // If the final amount is still Int.MAX_VALUE means the amount is not reachable.
    return if (dp[amount] == Int.MAX_VALUE) -1 else dp[amount]
}

// Main function to demonstrate the usage.
fun main() {
    val coins = listOf(1, 5, 20, 50, 100)
    val amount = 125
    
    val result = dpCoinChange(coins, amount)
    
    if (result != -1) {
        println("The minimum number of coins for $amount is: $result")
    } else {
        println("It's not possible to make change for $amount with the given coins.")
    }
}
