//Exercise 1 : Temperature check
var temp = 25;

if(temp < 0)
    {
        console.log("It's freezing cold!");
    }
    else if(temp >= 0 && temp<= 15)
        {
            console.log("It's cold.");
        }
        else if(temp>= 16 && temp<= 25)
            {
                console.log("It's mild")
            }
            else
            {
                console.log("It's warm.");
            }

   //Rewritten code using switch statement
            var temp = -1;
            switch(true)
            {
                case temp < 0:
                    console.log("It's freezing!");
                    break;

                case temp>= 0 && temp<= 15:
                        console.log("It's mild!");
                        break; 

                case temp>= 16 && temp<= 25:
                            console.log("It's mild!");
                            break;       
                default:
                    console.log("It's warm.");
            }        
console.log("\n");                 
//Exercise 2 : Divisibility Check
function checkDivisibility(number) 
{
    if (number % 2 === 0 && number % 3 === 0)
         {
        console.log("Divisible by both.");

    } else if (number % 2 === 0) 
        {
        console.log("Divisible by 2.");

    } else if (number % 3 === 0) 
        {
        console.log("Divisible by 3.");

    } else 
    {
        console.log("Not divisible by 2 or 3.");
    }
}
checkDivisibility(0);
checkDivisibility(2);
checkDivisibility(3);
checkDivisibility(5);
console.log("\n");   
//Switch statement
function checkDivisibilitySwitcch(number) {
    let result;
    switch (true) {
        case (number % 2 === 0 && number % 3 === 0):
            result = "Divisible by both.";
            break;
        case (number % 2 === 0):
            result = "Divisible by 2.";
            break;
        case (number % 3 === 0):
            result = "Divisible by 3.";
            break;
        default:
            result = "Not divisible by 2 or 3.";
    }
    console.log(result);
}
checkDivisibility(0);
checkDivisibility(2);
checkDivisibility(3);
checkDivisibility(5);

console.log("\n");   
//Exercise 3: For loop
//Print numbers from 1 to 10.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
//Print all even numbers between 1 and 20.
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}
//Calculate the sum of all numbers from 1 to 100 and print the result.
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("The sum of numbers from 1 to 100 is:", sum);

//Print all multiples of 5 less than 50.
for (let j = 5; j < 50; j++)
    {
    if (j % 5 === 0)
        {
        console.log(j);
        }
    }

//Exercise 4:
//Print numbers from 1 to 10.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
//Print all even numbers between 1 and 20:
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}
//Calculate the sum of all numbers from 1 to 100 and print the result.
let suM = 0;
for (let i = 1; i <= 100; i++) {
    suM += i;
}
console.log("The sum of numbers from 1 to 100 is:", suM);

for (let i = 5; i < 50; i++) {
    if (i % 5 === 0) {
        console.log(i);
    }
}
