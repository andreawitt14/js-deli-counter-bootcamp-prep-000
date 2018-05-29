var katzDeli = [];

function takeANumber(katzDeliLine, Name){
  var i = 0;
  while(katzDeliLine[i] != Name){
    i++;
  }
  return "Welcome, '${Name}'. You are number '${i+1}' in line.";
}
