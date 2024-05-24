
var timeRequiredToBuy = function (tickets, k) {
    let time = 0;
    while (tickets[k] !== 0) {
      for (let i = 0; i < tickets.length; i++) {
        if (tickets[i] === 0) {
          continue; // This line might skip an index if tickets[i] === 0
        }
        if ( i === k &&tickets[i] === 0) {
          break; // This condition will never be reached because of the previous if statement
        } 
          tickets[i] -= 1;
          time += 1;
          if (i === k && tickets[i] === 0) {
            break;
          }
      }
    }
    return time;
  };
  

const ticket = [84, 49, 5, 24, 70, 77, 87, 8];
console.log(timeRequiredToBuy(ticket, 3));
