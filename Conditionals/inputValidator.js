function validateUserInput (input) {
    const trimmed = input.trim();
  if (trimmed === ""){
    return "Input is required" 
  }
  else if (trimmed.length <= 3){
    return "Input must be at least three characters"
  }
  else if (!/[a-zA-Z]/.test(trimmed)){
    return "Input must contain letters"
  }
  else{
    return `Valid input: ${trimmed}`
  }
};

console.log(validateUserInput("68977"));