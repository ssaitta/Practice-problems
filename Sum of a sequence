//Make a function, which returns the sum of a sequence of integers.
//The sequence is defined by 3 non-negative values: begin, end, step.
//If begin value is greater than the end, function should returns 0
//Step is the size steps to take starting at begin

function sequenceSums(begin, end, step){
  if(begin>end){
    return 0;
  }
  return sequenceSums((begin+step),end,step) + begin;
}
