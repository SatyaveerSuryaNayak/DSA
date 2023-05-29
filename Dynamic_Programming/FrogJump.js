//Frog Jumps

const frogJump = (n, arr, dp) => {
    //base case
    if (n === 0) return 0

    if (dp[n] != -1) return dp[n]
    //one jump
    let oneJump = frogJump(n - 1, arr, dp) + Math.abs(arr[n] - arr[n - 1])
    //twoJump 
    let twoJump = Infinity
    if (n - 2 >= 0) {
        twoJump = frogJump(n - 2, arr, dp) + Math.abs(arr[n] - arr[n - 2])
    }

    return dp[n] = Math.min(twoJump, oneJump)
}
const n = 6
const dp = Array(n).fill(-1)
const a = [30, 10, 60, 10, 60, 40]
console.log(frogJump(n - 1, [30, 10, 60, 10, 60, 40], dp))

const dp1 = Array(n).fill(0)

dp1[0] = 0
for (let i = 1; i < n; i++) {
    let oneJump = dp1[i - 1] + Math.abs(a[i] - a[i - 1])

    let twoJump = Infinity
    if (i > 1)
        twoJump = dp1[i - 2] + Math.abs(a[i] - a[i - 2])

    dp1[i] = Math.min(twoJump, oneJump)
}
console.log(dp1[n - 1])

//using two Pointer

prev2 = 0
prev1 = 0
for (let i = 1; i < n; i++) {
    let oneJump = prev1 + Math.abs(a[i] - a[i - 1])

    let twoJump = Infinity
    if (i > 1) {
        twoJump = prev2 + Math.abs(a[i] - a[i - 2])
    }

    const curr = Math.min(twoJump, oneJump)
    prev2 = prev1
    prev1 = curr
}
console.log(prev1)