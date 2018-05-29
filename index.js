var katzDeli = [];

function takeANumber(katzDeliLine, Name){
 katzDeliLine.push(Name);
 var numberInLine = katzDeliLine.length + 1;
 return "Welcome, " + Name + ". You are number " + numberInLine + " in line.";
  
}

