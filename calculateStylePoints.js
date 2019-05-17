const calculateStylePoints = (styleNotes) => {
  let notes = styleNotes.filter((note) => { return note >= 0 && note <=20 && note !== null})

  if (notes.length = 5) {
    
      const sum = notes.reduce((total, note) => total + note); 
      return sum - Math.max(...notes) - Math.min(...notes)
    }
  else {
    const err = 'Wrong syntax'
    return err
  };
}  
  module.exports = calculateStylePoints;