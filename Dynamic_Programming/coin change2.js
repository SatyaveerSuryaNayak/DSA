/**
 * in this problem we have to Find the total number of ways we can take
 * coins given in array to get the Target , Remember we can take coin in
 * unlimited Quantity
 */

/**
 * I have Implemented different approaches Depending the the Time Complexity
 * And Space Complexity
 */

/**
 * Input-> Array[1,2,3],target- 4
 * output -> Total No of ways -> 4
 * explanation :
 * 1 way - [1,1,1,1]
 * 2 way - [2,2]
 * 3 way - [1,3]
 * 4 way - [1,1,2]
 * So total No of ways is 4
 * 
 */

/**
 * 1 Approach -> using Recursion
 * T.C -> O(exponential)
 * S.C -> >>O(index)
 */
const totalNoOfWays1 = (coins, index, target) => {
    //Base case
    if (index === 0) { return target % coins[0] === 0 }
    //if we Don't take the coins 
    let notTake = totalNoOfWays1(coins, index - 1, target)
    //we take the coin only if coin value is less than or equal to Target
    let take = 0
    if (coins[index] <= target) take = totalNoOfWays1(coins, index, target - coins[index])

    //will return the total no of ways
    return take + notTake
}

//giving input to the function 
console.log(totalNoOfWays1([1, 2, 3], 2, 4))


/**
 * 2 Approach -> using Memoization
 * T.C -> O(N*target)
 * S.C -> O(N*target)+O(target)
 */

const totalNoOfWays2 = (coins, index, target, dp) => {
    //Base case
    if (index === 0) { return target % coins[0] === 0 }

    if (dp[index][target] != -1) return dp[index[target]]
    //if we Don't take the coins 
    let notTake = totalNoOfWays2(coins, index - 1, target, dp)
    //we take the coin only if coin value is less than or equal to Target
    let take = 0
    if (coins[index] <= target) take = totalNoOfWays2(coins, index, target - coins[index], dp)

    //will return the total no of ways
    return dp[index][target] = take + notTake
}

//declaring a 2D Array with initial value of -1
// dp[index][taget+1]=-1
const n = 3
const target = 4
const dp = Array(3).fill(Array(target + 1).fill(-1))
//will pass this array to recursion call
//giving input to the function 
console.log(totalNoOfWays2([1, 2, 3], 2, target, dp))

/**
 * 3 Approach -> using Tabluation
 * T.C -> O(N*target)
 * S.C -> O(N*target)
 */

const totalNoOfWays3 = (arr, n, target, dp) => {
    for (let t = 0; t <= target; t++) {
        dp[0][t] = target % arr[0] === 0
    }

    for (let i = 1; i < n; i++) {
        for (let t = 0; t <= target; t++) {
            let notTake = dp[i - 1][t]
            let take = 0
            if (arr[i] <= t) take = dp[i][t - arr[i]]

            dp[i][t] = take + notTake
        }
    }
    return dp[n - 1][target]
}

const n1 = 3
const target1 = 4
const dp1 = Array(3).fill(Array(target + 1).fill(-1))
//will pass this array to recursion call
//giving input to the function 
console.log(totalNoOfWays3([1, 2, 3], n1, target1, dp1))


/**
 * 4 Approach -> space optimization
 * T.C -> O(N*target)
 * S.C -> O(target)
 */

const totalNoOfWays4 = (arr, n, target, prev, curr) => {
    for (let t = 0; t <= target; t++) {
        prev[t] = target % arr[0] === 0
    }

    for (let i = 1; i < n; i++) {
        for (let t = 0; t <= target; t++) {
            let notTake = prev[t]
            let take = 0
            if (arr[i] <= t) take = curr[t - arr[i]]

            curr[t] = take + notTake
        }
        prev = curr
    }
    return prev[target]
}

const n2 = 3
const target2 = 4
const prev = Array(target + 1).fill(-1)
const curr = Array(target + 1).fill(-1)
//will pass this array to recursion call
//giving input to the function 
console.log(totalNoOfWays4([1, 2, 3], n2, target2, prev, curr))
