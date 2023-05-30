//a maze with obstacles

const totalUniquePath = (n, m, a, dp) => {
    //base case
    if (a[n][m] === -1) return 0 //only difference lies here
    if (n === 0 && m === 0) return 1
    if (n < 0 || m < 0) return 0

    if (dp[n][m] != -1) return dp[n][m]
    //left
    let left = totalUniquePath(n, m - 1, dp)
    //up
    let up = totalUniquePath(n - 1, m, dp)

    return dp[n][m] = up + left
}

const n = 2, m = 2
const dp = Array(n).fill().map(() => Array(m).fill(-1))
console.log(totalUniquePath(n - 1, m - 1, dp))

const dp1 = Array(n).fill().map(() => Array(m).fill(0))

for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if (a[i][j] === -1) dp1[i][j] = 0//only difference lies here 
        if (i === 0 && j === 0) dp1[i][j] = 1
        else {
            let right = 0, down = 0
            if (i > 0) down += dp1[i - 1][j]

            if (j > 0) right += dp1[i][j - 1]


            dp1[i][j] = down + right
        }
    }
}
console.log(dp1[n - 1][m - 1])