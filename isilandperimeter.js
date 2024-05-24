var islandPerimeter = function(grid) {
    let perimeter = [];
    for(let i=0;i<grid.length; i++){
        for(let j=0;j<grid[i].length;j++){
            let area =4;
            if(grid[i][j]===0){
                perimeter.push(0)
                continue;
                
            }else{
                if(i !== grid.length-1 && grid[i+1][j] === 1){
                        area -= 1;
                }if(j< grid[i].length && grid[i][j+1] === 1 ){
                    area -= 1;
                }if( j>0 && grid[i][j-1] === 1){
                    area -= 1
                }if( i>0 && grid[i-1][j]===1){
                    area -=1
                }perimeter.push(area);
            }
        }
    }return perimeter.reduce((acc, curr) => acc + curr, 0);;
};
let grif =[[1,0]]
console.log(islandPerimeter(grif))

// console.log(grid[1][0])
