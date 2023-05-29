// count unique path to reach end of the matrix
// only allowed to move right and down

const totalUniquePath = (i, j, dp) => {
    //base case
    if (i === 0 && j === 0) return 1

    if (i < 0 || j < 0) return 0

    if (dp[i][j] != -1) return dp[i][j]
    //going up
    let up = totalUniquePath(i - 1, j, dp)
    //going left
    let left = totalUniquePath(i, j - 1, dp)

    return dp[i][j] = up + left
}

const n = 2, m = 2
const dp = Array(n).fill().map(() => Array(m).fill(-1))
console.log(totalUniquePath(n - 1, m - 1, dp))

const dp1 = Array(n).fill().map(() => Array(m).fill(0))

dp1[0][0] = 1
for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
        if (i === 0 && j === 0) dp1[0][0] = 1
        else {
            let right = 0
            if (j > 0) right += dp1[i][j - 1]

            let down = 0
            if (i > 0) down += dp1[i - 1][j]

            dp1[i][j] = down + right
        }
    }
}
console.log(dp1[n - 1][m - 1])

//using single 2 array

let prev = Array(m).fill(0)

for (let i = 0; i < n; i++) {
    const curr = Array(m).fill(0)
    for (let j = 0; j < m; j++) {
        if (i == 0 && j == 0) { prev[0] = 1, curr[0] = 1 }
        else {
            let right = 0
            if (j > 0) right += curr[j - 1]

            let down = 0
            if (i > 0) down += prev[i - 1]
            
            curr[j] = down + right
        }
    }
    prev = curr
}

console.log(prev[m - 1])
