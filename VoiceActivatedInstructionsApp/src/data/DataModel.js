const instructionsMap = {
    'K1': 'Prepare Shrimp Tempura',
    'K2': 'Prepare Crab Meat Tempura',
    // Add more entries as needed
  };
  
  const sauceMap = {
    'K1': 'Mayo',
    'K2': 'Vinegar',
    // Add more entries as needed
  };
  
  const commentsMap = {
    'K1': 'Use fresh shrimp',
    'K2': 'Use fresh crab meat',
    // Add more entries as needed
  };
  
  const getInstructions = (command) => instructionsMap[command] || 'No instructions found';
  const getSauce = (command) => sauceMap[command] || 'No sauce found';
  const getComments = (command) => commentsMap[command] || 'No comments found';
  
  export default {
    getInstructions,
    getSauce,
    getComments,
  };
  