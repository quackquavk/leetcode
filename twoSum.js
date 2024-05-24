var twoSum = function (nums, target) {
    let m = new Map();
    console.log(m)
    for (let i = 0; ; i++) {
        const x = nums[i];
        const y = target - x;
        if (m.has(y)) {
            m = [m.get(y), i];
            return m;
        }
        m.set(x, i);
    }
};

console.log(twoSum([3, 2, 95, 4, -3], 92));
