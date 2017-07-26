//Given the hour and minute shown on a 12 hour Analog Clock, write a function to find the smaller angle between the two hands. 

function analog_clock(hour, min){
 var minDeg = min * 6;
 var hourDeg = (hour * 30) +  (min*0.5);
 var degDiff = 0;
 degDiff = Math.abs(minDeg - hourDeg);
 if(degDiff > 180){
   degDiff = 360  - degDiff;
 }
  return degDiff;
}
