/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

let votingAge = 'true';
   if ('voting age' > 18){
   }
console.log(votingAge);



//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let conditional = "name1";
conditional = 'name2';
console.log(conditional);



//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

const num = '1999';
Number('1999');
console.log(num);




//Task d: Write a function to multiply a*b 

function multiply(num1, num2){
return num1 * num2;
}
console.log(multiply(6,2))



/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 




function doggyYears(humanYears){
    return humanYears * 7;
}
console.log(doggyYears(30));


/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996
  
function dogFeeder(weight, age){
    if(weight <= 5 && age > 1){
    return weight * .05;
    }
    else if(weight <= 10 && age >= 1){
        return weight * .04;
    }
    else if(weight <= 15 && age >= 1){
        return weight * .03;
    }
    else if(weight > 15 && age >= 1){
        return weight * .02;
    }
    else if(age >= .17 && age <= .33){
        return weight * .1;
    }
    else if(age >= .34 && age <= .58){
        return weight * .05;
    }
    else if(age >=.59 && age <= .99){
        return weight * .04;
    }
}

console.log(dogFeeder(15,1));



/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 







/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function miles (kilometers){
    return kilometers * .621371;
}
console.log(miles(1));


//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
function cm (feet){
    return feet * 30.48;
}
console.log(cm(1));



/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`
  
for let(i = 99; i = 0; i--){
    console.log
}



/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F

let grade = "72";

    if(grade > 90){
        console.log("A");
    }
    else if(grade > 80){
        console.log("B");
    }
    else if(grade > 70){
        console.log("Cs");
    }
    else if(grade >60){
        console.log("D");
    }
    else{
        console.log("F");
    }


  
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





