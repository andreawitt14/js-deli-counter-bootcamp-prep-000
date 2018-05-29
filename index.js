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
    var person = katzDeliLine.shift();
    return "Currently serving " + person + ".";
   }
}

function currentline(katzDeliLine){
  if(katzDeliLine.length === 0){
    return "The line is currently empty"
  }
  
  else{
    for(let i = 0; i < katzDeliLine.length; i++){
      return "The line is currently:" + i + katzDeliLine[i]
    }
  }
}

