function openLock(deadends, target) {
    // Convert deadends to a Set for faster lookup
    let deadSet = new Set(deadends);
    // Check if the initial state is a deadend
    if (deadSet.has("0000")) return -1;
    
    let queue = [["0000", 0]]; // Initialize the queue with initial state and number of turns
    let visited = new Set(["0000"]); // Set to keep track of visited states
    
    // BFS
    while (queue.length > 0) {
        let [current, turns] = queue.shift();
        console.log(turns)
        // Check if the current state is the target
        if (current === target) return turns;
        
        // Generate next possible states by rotating each wheel
        for (let i = 0; i < 4; i++) {
            for (let increment of [1, -1]) {
                let nextWheel = (parseInt(current[i]) + increment + 10) % 10;
                let nextState = current.substring(0, i) + nextWheel + current.substring(i + 1);
                // console.log(nextState)
                
                // Check if the nextState is a deadend or already visited
                if (!deadSet.has(nextState) && !visited.has(nextState)) {
                    visited.add(nextState);
                    queue.push([nextState, turns + 1]);
                }
            }
        }
    }
    console.log(queue)
    return -1; // Target not reached
}

// Test cases
// let deadends1 = ["0201","0101","0102","1212","2002"];
// let target1 = "0202";
// console.log(openLock(deadends1, target1)); // Output: 6

let deadends2 = ["8888"];
let target2 = "0009";
console.log(openLock(deadends2, target2)); // Output: 1

// let deadends3 = ["8887","8889","8878","8898","8788","8988","7888","9888"];
// let target3 = "8888";
// console.log(openLock(deadends3, target3)); // Output: -1
