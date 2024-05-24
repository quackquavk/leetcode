function numIslands(grid) {
    function dfs(grid, i, j) {
        if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] === '0') {
            return;
        }
        grid[i][j] = '0'; 
        dfs(grid, i + 1, j);
        dfs(grid, i - 1, j);
        dfs(grid, i, j + 1);
        dfs(grid, i, j - 1);
    }

    if (!grid || grid.length === 0) {
        return 0;
    }

    let numIslands = 0;
    const rows = grid.length;
    const cols = grid[0].length;

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === '1') { 
                numIslands++;
                dfs(grid, i, j); 
            }
        }
    }

    return numIslands;
}