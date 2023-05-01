function scuberGreetingForFeet(distance){
  // Write your code here!
  let message 
  if (distance <= 400) {
    message = 'This one is on me!';
  }
  else if (distance <= 2000) {
    message = 'That will be twenty bucks.';
  }
  else if (distance <= 2500) {
    message = 'I will gladly take your thirty bucks.'
  }
  else {
    message = 'No can do.';
  }
  return message;
}

function ternaryCheckCity(city){
  let cityMessage;
  city === 'NYC' ? (cityMessage = 'Ok, sounds good.') : (cityMessage = 'No go.')
  return cityMessage;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let tipMessage;
  switch (tip) {
    case 'generous':
      tipMessage = 'Thank you so much.';
      break;
    case 'not as generous':
      tipMessage = 'Thank you.';
      break;
    default:
      tipMessage = 'Bye.';
  }
  return tipMessage;
}
