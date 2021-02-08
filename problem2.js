
/*
Write a function called powerCalculator() that takes two parameters,
an integer as a base, and another integer as an exponent. The function 
returns the value of the base raised to the power of the exponent. Use only 
exponents greater than or equal to 0 (positive numbers)
*/

function powerCalc(num, exponentNum, answer = num){
    if(exponentNum < 0){
        const phrase = 'Exponent should be greater than or equal to 0';
        console.log(phrase);
    }
    else if(exponentNum === 0){
        console.log(1);
    }
    else if(exponentNum === 1){
        console.log(answer);
    }
    else{
        answer *= num;  // answer = answer * num
        powerCalc(num, exponentNum - 1, answer);
    }
}

powerCalc(10, 2);
