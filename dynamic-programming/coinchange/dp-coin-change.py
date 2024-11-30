

def dp_coin_change(coins, amount):
    """
        ### FIND MINIMUM COINS RETURN WITH AMOUNT ###
        - Sort coins to asc
        - Create DP array  => dp = [0] (amount + 1)
        - Iterate initial value = 1 with range of amount + 1, 
            - initial min with float('inf')
                - Iterate coins, find diff value -> i - coin
                - if coin < 0, break # not do anything means fill 0
                - else set min value -> min(minn, dp[diff] + 1)
        - set minn into that dp[i] -> d[i] = minn
        - return DP Array amount if < initial else -1
    """
    
    # sort coins
    coins.sort()
    # inital DP Array
    dp = [0] * (amount + 1)
    
    # iterate 1
    for i in range(1, amount + 1):
        minn = float('inf')
        
        # iterate 2
        for coin in coins:
            # find diff
            diff = i - coin
            
            # can't return coin
            if diff < 0:
                break;
            else:
                # find min coin
                # print(minn, dp[diff] + 1)
                minn = min(minn, dp[diff] + 1)
                # print("Min", minn)
            
            # set minn into current dp array
            dp[i] = minn
            print(dp)
        
    return dp[amount] if dp[amount] < float('inf') else -1
     
  

if __name__ == '__main__':
  print(dp_coin_change([1, 5, 20, 50, 100], 10))