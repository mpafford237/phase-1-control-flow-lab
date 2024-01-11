let ride = 199
let tip = 20

function scuberGreetingForFeet(ride){
  let response;
  
  if (ride <= 400) {
    response = "This one is on me!";
  } else if (ride >= 2500) {
    response = "No can do.";
  } else if (ride >= 2000) {
    response = "I will gladly take your thirty bucks.";
  } else if (ride > 400) {
    response = "That will be twenty bucks.";
  }
  return response;
};

function ternaryCheckCity(city){
  let response;
  city === "NYC" ? response = "Ok, sounds good." : response = "No go.";
  return response
};

function switchOnCharmFromTip(tip){
  let response;
  switch (tip) {
    case "generous":
      response = "Thank you so much.";
      break;
    case "not as generous":
      response = "Thank you.";
      break;
    default:
      response = "Bye.";
  }
  return response
};
