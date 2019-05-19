const calculateStylePoints = (styleNotes) => {
  let notes = styleNotes.filter((note) => { return note >= 0 && note <=20 && note !== null && note !== ' '})

  if (notes.length === 5) {
    
      const sum = notes.reduce((total, note) => total + note); 
      return sum - Math.max(...notes) - Math.min(...notes)
    }
    else 
    {console.log("Wrong syntax!");
     return false}
};  
  module.exports = calculateStylePoints;