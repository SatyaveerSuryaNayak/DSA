
const fib = (n, dp) => {
    //base case
    if (n <= 1) return n
    if (dp[n] != -1) return dp[n]
    return dp[n] = fib(n - 1, dp) + fib(n - 2, dp)
}
const n = 4;
//fibo series-> 0 1 1 2 3 5 8
const dp = Array(n).fill(-1)
console.log(fib(n - 1, dp))

const dp1 = Array(n).fill(0)

dp1[0] = 0
dp1[1] = 1

for (let i = 2; i < n; i++) {
    dp1[i] = dp1[i - 1] + dp1[i - 2]
}

console.log(dp1[n - 1])

prev2 = 0
prev1 = 1

for (let i = 2; i < n; i++) {
    const curr = prev2 + prev1;
    prev2 = prev1;
    prev1 = curr
}
console.log(prev1)