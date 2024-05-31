/**
 * @param {number[]} favorite
 * @return {number}
 */
var maximumInvitations = function (favorite) {
    let n = favorite.length;
    let likeMap = new Array(n).fill().map((_) => new Array());
    let maxPathLength = new Array(n).fill(1);
    let maxCycleLength = 0;
    for (let i = 0; i < n; i++) {
        likeMap[favorite[i]].push(i);
    }

    const dfs = function (i, invites = new Set()) {
        console.log(invites)
        if (invites.has(i)) {
            maxCycleLength = Math.max(invites.size, maxCycleLength);
            return;
        }

        let likes = likeMap[i];
        while (likes.length) {
            let next = likes.pop();
            if (favorite[i] === next) continue;
            invites.add(i);
            maxPathLength[i] = Math.max(dfs(next, invites) + 1, maxPathLength[i]);
            invites.delete(i);
        }

        return maxPathLength[i];
    }

    let sumOfPathLength = 0;
    for (let i = 0; i < n; i++) {
        if (likeMap[i]) {
            dfs(i);
            if (favorite[favorite[i]] === i) {
                sumOfPathLength += maxPathLength[i];
            }
        }
    }

    return Math.max(sumOfPathLength, maxCycleLength);
};

const testCase = [2,2,1,2]

console.log(maximumInvitations(testCase))