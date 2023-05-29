const climbingStairs = (n) => {
    //base case
    if (n === 1 || n === 0) return 1
    if (n < 0) return 0
    if (dp[n] != -1) return dp[n]
    return dp[n] = climbingStairs(n - 1) + climbingStairs(n - 2)
}
const n = 3
const dp = Array(n + 1).fill(-1)
console.log(climbingStairs(n))

const dp1 = Array(n + 1).fill(0);

dp[0] = 1, dp[1] = 1

for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
}
console.log(dp[n])

//using two pointers

prev2 = 1
prev1 = 1
for (let i = 2; i <= n; i++) {
    const curr = prev2 + prev1;
    prev2 = prev1
    prev1 = curr
}
console.log(prev1)