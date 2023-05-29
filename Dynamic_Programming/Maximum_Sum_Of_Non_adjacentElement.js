//Maximum Sum of Non Adjacent Element in Array

const maximumSum = (n, a, dp) => {
    //base case
    if (n === 0) return a[n]
    if (n < 0) return 0

    if (dp[n] != -1) return dp[n]
    //pick
    let pick = a[n] + maximumSum(n - 2, a, dp)
    let notPick = maximumSum(n - 1, a, dp)

    return dp[n] = Math.max(pick, notPick)
}
const n = 3
const a = [1, 2, 4]
const dp = Array(n).fill(-1)
console.log(maximumSum(n - 1, a, dp))

const dp1 = Array(n).fill(0);
dp1[0] = a[0]

for (let i = 1; i < n; i++) {
    let pick = a[i]
    if (i > 1) pick += dp1[i - 2]

    let notPick = dp1[i - 1]

    dp1[i] = Math.max(pick, notPick)
}

console.log(dp1[n - 1])

//using two pointers

let prev2 = 0
let prev1 = a[0]

for (let i = 1; i < n; i++) {
    let pick = a[i]
    if (i > 1) pick += prev2;

    let notPick = prev1

    const curr = Math.max(pick, notPick)
    prev2 = prev1
    prev1 = curr
}
console.log(prev1)