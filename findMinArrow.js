var findMinArrowShots = function(points) {
    if (points.length === 0) {
        return 0;
    }
    
    // Sort the points based on the end value of each interval
    points.sort((a, b) => a[1] - b[1]);

    let arrows = 1; // At least one arrow is needed
    let currentEnd = points[0][1]; // The end point of the first interval

    for (let i = 1; i < points.length; i++) {
        // If the current point starts after the end of the previous interval
        if (points[i][0] > currentEnd) {
            arrows++; // We need a new arrow
            currentEnd = points[i][1]; // Update the end point to the current interval's end
        }
    }

    return arrows;
};

let points =[[1,2],[2,3],[3,4],[4,5]]

console.log(findMinArrowShots(points))