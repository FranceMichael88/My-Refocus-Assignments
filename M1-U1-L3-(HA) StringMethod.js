//task 1:   -Finding the first uppercase of the article,
//          -Create and algorithm which checks the 1st uppercase letter,
//          -result "E"
let article = "there is a storm coming to the East of the Philippines";
let firstCap = /[A-Z]/;
let result = article.match(firstCap).join();
console.log(result);

// task 2:  -Check if no uppercase letter,
//          -Use console message to make sure users are aware of this fact

let advisory = "no more rainy days here, sun is about to show up";
let noCaps = advisory.toLowerCase();
let checkedLetter = advisory === noCaps;
//if (advisory.toLowerCase() === advisory){
  //console.log('✅ no upperCase');
//} else {
  //console.log('🚫 found upperCase');
//}
console.log(checkedLetter)
