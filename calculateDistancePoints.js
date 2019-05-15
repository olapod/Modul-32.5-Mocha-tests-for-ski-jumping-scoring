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
  return basePoints + ((distance - kPoint) * addOrSub)
};
  
  module.exports = calculateDistancePoints;