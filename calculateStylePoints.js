const calculateStylePoints = (styleNotes) => {
    
      const sum = styleNotes.reduce((total, note) => total + note); 
      return sum - Math.max(...styleNotes) - Math.min(...styleNotes)};
      
  module.exports = calculateStylePoints;