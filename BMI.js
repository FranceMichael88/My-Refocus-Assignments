var weightKg = 63;
var cintemeter = 155;
var meter = cintemeter / 100;
var weigthMeter = weightKg / meter;
var bmiResult = weigthMeter / meter;
var bmi = (bmiResult * 100 / 100 ).toFixed(1);


function yourBmi (bmi){
    if (bmi <=18.5 ) {
        console.log(`your BMI is: ${bmi}`)
        console.log ("Under Weight")

    } if ((bmi >=18.6 ) && (bmi <=24.9)) {
        console.log(`BMI: ${bmi}`)
        console.log ("Normal")
    
    } if ((bmi>=25.0 ) && (bmi <=29.9)) {
        console.log(`BMI: ${bmi}`)
        console.log ("Over Weight")
    
    } if ((bmi >=30.0 ) && (bmi <=34.9)) {
        console.log(`BMI: ${bmi}`)
        console.log ("Obese")
    
    } if (bmi >34.9) {
        console.log(`BMI is: ${bmi}`)
        console.log ("Extreme Obese")
    
   }
    
  
}
yourBmi(bmi);

module.exports = weigthMeter;