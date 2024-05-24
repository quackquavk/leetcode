function gaussSeidel(a, b, tolerance, maxIterations) {
    const n = a.length;
    let x = new Array(n).fill(0);
    let y = new Array(n).fill(0);
    let iteration = 0;
    let error = tolerance + 1;

    while (error > tolerance && iteration < maxIterations) {
        let maxError = 0;

        for (let i = 0; i < n; i++) {
            let sum = 0;

            for (let j = 0; j < n; j++) {
                if (j !== i) {
                    sum += a[i][j] * x[j];
                }
            }

            y[i] = (b[i] - sum) / a[i][i];

            let currentError = Math.abs((y[i] - x[i]) / y[i]);
            if (currentError > maxError) {
                maxError = currentError;
            }
            x[i] = y[i];
        }

        error = maxError;
        iteration++;
    }

    return { x, iteration, error };
}

const coefficients = [[3,5], [-4, -7]];
const constants = [16, 27];
const tolerance = 0.0001;
const maxIterations = 100;

const { x, iteration, error } = gaussSeidel(coefficients, constants, tolerance, maxIterations);

console.log("Solution:");
console.log("x =", x[0]);
console.log("y =", x[1]);
console.log("Iterations:", iteration);
console.log("Error:", error);
