/*****Quadratic Roots *****/

let coefAInput = document.getElementById('coef-a');
let coefBInput = document.getElementById('coef-b');
let coefCInput = document.getElementById('coef-c');
let quadrBtn = document.getElementById('quadr-btn');
let quadraticAnswer = document.getElementById('quadratic-answer');

function getSquareRoot() {

    let coefA = coefAInput.value;
    let coefB = coefBInput.value;
    let coefC = coefCInput.value;

    let D = coefB ** 2 - 4 * coefA * coefC;

    if (D > 0) {
        quadraticAnswer.innerHTML = '2 корня';
    } else if (D == 0) {
        quadraticAnswer.innerHTML = '1 корень'
    } else {
        quadraticAnswer.innerHTML = 'нет корней'
    }
}

quadrBtn.addEventListener('click', getSquareRoot);

/*****Pythagorean Triplet *****/

//Тройка Пифагора - квадрат самого большого числа 
//должен быть равен сумме квадратов двух остальных

let ptNumAInput = document.getElementById('pt-num-a');
let ptNumBInput = document.getElementById('pt-num-b');
let ptNumCInput = document.getElementById('pt-num-c');
let ptBtn = document.getElementById('pt-btn');
let ptAnswer = document.getElementById('pt-answer');

function isItPythagoreanTriplet() {
    let numbers = [];

    let numA = Math.pow(parseFloat(ptNumAInput.value), 2);
    let numB = Math.pow(parseFloat(ptNumBInput.value), 2);
    let numC = Math.pow(parseFloat(ptNumCInput.value), 2);

    numbers.push(numA, numB, numC);
    numbers.sort((a, b) => a - b);

    let minNums = numbers[0] + numbers[1];

    if (minNums == numbers[2]) {
        ptAnswer.innerHTML = "Да";
    } else {
        ptAnswer.innerHTML = "Нет";
    }
}

ptBtn.addEventListener('click', isItPythagoreanTriplet);

/*****Divisors *****/

let numberInput = document.getElementById('number');
let divBtn = document.getElementById('div-btn');
let divAnswer = document.getElementById('divisors-answer');

function getAllDivisors () {
    let number = numberInput.value;
    let divisors = [];

    for(let i = 1; i <=number; i++){
        if (number%i == 0) {
            divisors.push(i);
        }
    };

    divAnswer.innerHTML = divisors.join(', ');
}

divBtn.addEventListener('click', getAllDivisors);

/*****Shared Divisors *****/

let sdNumAInput = document.getElementById('sd-num-a');
let sdNumBInput = document.getElementById('sd-num-b');
let sdBtn = document.getElementById('sd-btn');
let sdAnswer = document.getElementById('shared-divisors-answer');

function getSharedDivisors (numA, numB) { //Получаем общие делители двух чисел

    let divisorsA = [];
    let divisorsB = [];
    let sharedDivisors = [];

    for(let i = 1; i <= numA; i++) { 
        if (numA%i == 0) {
            divisorsA.push(i);
        };   
    };

    for(let j = 1; j <= numB; j++) {
        if(numB%j == 0) {
            divisorsB.push(j);
        };
    };
   
    for (divisorA of divisorsA) {
        for(divisorB of divisorsB) {
            if(divisorA == divisorB){
                sharedDivisors.push(divisorA);
            };
        };
    };

    return sharedDivisors;
};

function getSDREsult () {
    let resultSD = getSharedDivisors(sdNumAInput.value, sdNumBInput.value);
    sdAnswer.innerHTML = resultSD.join(', ');
}

sdBtn.addEventListener('click', getSDREsult);

/*****Max Shared Divisor *****/

let maxSdNumAInput = document.getElementById('max-sd-num-a');
let maxSdNumBInput = document.getElementById('max-sd-num-b');
let maxSdBtn = document.getElementById('max-sd-btn');
let maxSdAnswer = document.getElementById('max-shared-divisor-answer');

function getMaxSharedDivisor (a, b) {
    let maxSaredDivisor = getSharedDivisors(a, b);
    maxSaredDivisor.sort((a, b) => b-a);
    return maxSaredDivisor[0];
};

function getMSDResult () {  
    let resultMSD = getMaxSharedDivisor(maxSdNumAInput.value, maxSdNumBInput.value); 
    return maxSdAnswer.innerHTML = resultMSD;
};

maxSdBtn.addEventListener('click', getMSDResult);

/*****Min Shared Multiple *****/

let minSmNumAInput = document.getElementById('min-sm-num-a');
let minSmNumBInput = document.getElementById('min-sm-num-b');
let minSmBtn = document.getElementById('min-sm-btn');
let minSmAnswer = document.getElementById('min-shared-multiple-answer');

function getMinMultiple () {
    let minSmNumA = minSmNumAInput.value;
    let minSmNumB = minSmNumBInput.value;
    let MSD = getMaxSharedDivisor(minSmNumA, minSmNumB);
    
    let minMultiple = (minSmNumA*minSmNumB)/MSD;
    
   return minSmAnswer.innerHTML = minMultiple;
}

minSmBtn.addEventListener('click', getMinMultiple);





