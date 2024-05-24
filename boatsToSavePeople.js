var numRescueBoats = function (people, limit) {
  people = people.sort();
  let boats = [];
  console.log(people)
  console.log(boats)
  for (let i = 0; i < people.length; i++) {
    console.log(i)
    if (people[i] === limit) {
      boats.push(1);
      break;
    }
    if (people[i] + people[i + 1] < limit) {
      for (let j = i + 1; j < people.length; j++) {
        if (people[i] + people[j] < limit) {
          j++;
        }
        if (people[i] + people[j] === limit) {
          boats.push(1);
          i = j;
          break;
        }
        if (people[i] + people[j] > limit) {
          boats.push(1);
          break;
        }
      }
    }
    if (people[i] + people[i + 1] > limit) {
      console.log(boats)

      boats.push(1);
    }
    if (people[i] + people[i + 1] === limit) {
      boats.push(1);
      i=i+1
    }
    if(people[i] < limit && people[i] + people[i+1] > limit){
      boats +=1
    }

  }
  return boats.length;
};

console.log(numRescueBoats([3,2,2,1], 3));
