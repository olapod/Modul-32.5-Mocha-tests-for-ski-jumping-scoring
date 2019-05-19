const calculateDistancePoints = require('./calculateDistancePoints');
const calculateStylePoints = require('./calculateStylePoints');

const calculateTotalPoints = (distance, hillSize, kPoint, styleNotes, windFactor, gateFactor) => {
  const distancePoints = calculateDistancePoints(distance, hillSize, kPoint);
  const stylePoints = calculateStylePoints(styleNotes);
  if ((!isNaN(windFactor)) && (!isNaN(gateFactor)) && (windFactor !== null) && (gateFactor !== null) && (windFactor !== ' ') && (gateFactor !== ' ')) 

    {return (distancePoints + stylePoints + windFactor + gateFactor).toFixed(1)
    }
    else 
    {console.log("Wrong syntax!");
     return false}
}

module.exports = calculateTotalPoints;