const calculateDistancePoints = (distance, hillSize, kPoint) => {
let basePoints, addOrSub;

  switch(hillSize) {
    case 'normal':
        basePoints = 60;
        addOrSub = 2;
        break;
    case 'large':
        basePoints = 60;
        addOrSub = 1.8;
        break;
    case 'flying':
        basePoints = 120;
        addOrSub = 1.2;
        break; 
    
  }

  if (((hillSize === 'normal') || (hillSize === 'large') || (hillSize ==='flying')) && (!isNaN(distance)) && (!isNaN(kPoint)) && (distance !== null) && (kPoint !== null) && (distance !== ' ') && (kPoint !== ' '))
  {return basePoints + ((distance - kPoint) * addOrSub);
  }
else 
  {console.log("Wrong syntax!");
   return false}
};

  
  module.exports = calculateDistancePoints;