var katzDeli = [];

function takeANumber(katzDeliLine, Name){
 katzDeliLine.push(Name);
 var numberInLine = katzDeliLine.length;
 return "Welcome, " + Name + ". You are number " + numberInLine + " in line.";
}

function nowServing(katzDeliLine){
  if (katzDeliLine.length === 0){
    return "There is nobody waiting to be served!"
  }
  else{
    katzdeliLine.shift();
    return "Currently serving " + katzdeliLine.shift() +".";
  
  }
}

