/**
 * This is Problem is Same as The 0/1 KnapSack Problem Where We are being give
 * a weight=[], and a value=[] and a bag with some weight and we have to find 
 * what is the maximum profit we can get taking element from the weight array 
 * only difference s that we can take element multiple times under a constraint
 * taken items total wight must not exceed the bag weight
 */

/**
 * input -> wt=[2,4,6] , val=[5,11,13],W=10
 * output -> Maximum Profit -> 26
 * explanation:
 * wt->[6,4],val->[13,11], profit->24
 * wt->[4,4,2],val->[11,11,5], profit->27
 * wt->[2,2,2,2,2],val->[5,5,5,5,5], profit->25
 * wt->[2,2,6],val->[5,5,13],profit->23
 * 
 * so Maximpum Profit is 27
 */

/**
 * 1 Approach -> using Recursion
 * T.C -> O(exponential)
 * S.C -> >>O(weight)
 */

const maximumProfit1 = (index, wt, val, W) => {
    //Base case
    if (index === 0) return parseInt(W / wt[0]) * val[0]

    let notTake = 0 + maximumProfit1(index - 1, wt, val, W)
    let take = -Infinity
    if (wt[index] <= W) take = val[index] + maximumProfit1(index, wt, val, W - wt[index])

    return Math.max(take, notTake)
}
const n = 3
const wt = [2, 4, 6]
const val = [5, 11, 13]
const W = 10
console.log(maximumProfit1(n - 1, wt, val, W))

/**
 * 2 Approach -> using Memoization
 * T.C -> O(len(wt)*W)
 * S.C -> O(len(wt)*W)
 */

const maximumProfit2 = (index, wt, val, W, dp) => {
    //Base case
    if (index === 0) return parseInt(W / wt[0]) * val[0]

    if (dp[index][W] != -1) return dp[index][W]
    let notTake = 0 + maximumProfit2(index - 1, wt, val, W, dp)
    let take = -Infinity
    if (wt[index] <= W) take = val[index] + maximumProfit2(index, wt, val, W - wt[index], dp)

    return dp[index][W] = Math.max(take, notTake)
}
const dp = Array(n).fill(Array(W + 1).fill(-1))
console.log(maximumProfit2(n - 1, wt, val, W, dp))


/**
 * 3 Approach -> using Tabluation
 * T.C -> O(len(wt) * W)
 * S.C -> O(n * W)
 */

const maximumProfit3 = (n, wt, val, W) => {
    const dp = Array(n).fill(Array(W + 1).fill(0))

    for (let w = 0; w <= W; w++) {
        dp[0][w] = parseInt(w / wt[0]) * val[0]
    }

    for (let i = 1; i < n; i++) {
        for (let w = 0; w <= W; w++) {
            dp[i][w] = Math.max(dp[i - 1][w], wt[i] <= w ? val[i] + dp[i][w - wt[i]] : -Infinity)
        }
    }
    return dp[n - 1][W]
}
console.log(maximumProfit3(n, wt, val, W))

/**
 * 4 Approach -> space optimization
 * T.C -> O(n * W)
 * S.C -> O(W)+O(W)
 */
const maximumProfit4 = (n, wt, val, W) => {
    let prev = Array(W + 1).fill(0)
    let curr = Array(W + 1).fill(0)

    for (let w = 0; w <= W; w++) {
        prev[w] = parseInt(w / wt[0]) * val[0]
    }

    for (let i = 1; i < n; i++) {
        for (let w = 0; w <= W; w++) {
            curr[w] = Math.max(prev[w], wt[i] <= w ? val[i] + curr[w - wt[i]] : -Infinity)
        }
        prev = curr
    }
    return prev[W]
}
console.log(maximumProfit4(n, wt, val, W))

/**
 * 5 Approach -> 1 array space optimization
 * T.C -> O(n * W)
 * S.C -> O(W)
 */

 const maximumProfit5 = (n, wt, val, W) => {
    let prev = Array(W + 1).fill(0)

    for (let w = 0; w <= W; w++) {
        prev[w] = parseInt(w / wt[0]) * val[0]
    }

    for (let i = 1; i < n; i++) {
        for (let w = 0; w <= W; w++) {
            prev[w] = Math.max(prev[w], wt[i] <= w ? val[i] + prev[w - wt[i]] : -Infinity)
        }
    }
    return prev[W]
}
console.log(maximumProfit5(n, wt, val, W))
