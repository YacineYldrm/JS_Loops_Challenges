// =====================================
// 
//     JavaScript ––> loops level I
// 
// =====================================

console.log("%c level_1_1", "color: blue; background-color: gold");

for(let i = 0; i <= 10; i++)
{
    console.log(`Hello Word ${i}`);
};

console.log("%c level_1_2", "color: blue; background-color: gold");

let numArr = [];

for(let i = 0; i < 10; i++)
{
    numArr.push(i);
};
console.log(numArr);

console.log("%c level_1_4", "color: blue; background-color: gold");

const nameArr = ["Georg", "Anass", "Elaine", "Hakan", "Eric", "Kim", "Sergio"];

for(let i = 0; i < nameArr.length; i++)
{
    console.log(nameArr[i]);
};

console.log("%c level_1_5", "color: blue; background-color: gold");

let apple1 = { color: "red", size: "big" };
let apple2 = { color: "green", size: "small" };
let apple3 = { color: "yellow", size: "big" };
let apples = [apple1, apple2, apple3];

for(let i = 0; i < apples.length; i++)
{
    console.log(apples[i].size);
};

console.log("%c level_1_6", "color: blue; background-color: gold");

let retArr = [];

for(let i = 0; i < 100; i++)
{
    retArr.push(`image_${i}.jpg`);
};

console.log(retArr);

console.log("%c level_1_9", "color: blue; background-color: gold");

let words = ['hallo', 'Auto', 'Waschmaschine', 'Schrank', 'Katze', 'Beispiel', 'Eltern', 'Fenster', 'Geburtstag', 'Himmel', 'schwimmen', 'Zeitung'];

const filterWords = document.body.querySelector('#filterBtn');
const addWords = document.body.querySelector('#addWord');
const inputWord = document.body.querySelector('#inputWord');
const lengthInput = document.body.querySelector('#inputNum');
const displayWords = document.body.querySelector('#displayWords');

filterWords.addEventListener('click', () =>
{
    event.preventDefault();
    displayWords.innerHTML = "";
    for(let i = 0; i < words.length; i++)
    {
        if(Number(words[i].length) === Number(lengthInput.value))
        {
            displayWords.innerHTML += `<p>${words[i]}</p>`;
        };
    };
});

addWord.addEventListener('click', () =>
{
    event.preventDefault();
    if(inputWord.value.length > 0)
    {
        words.push(inputWord.value);
    }
    console.log(words);
});

// =============================================
// 
//      JavaScript ––> loops level II & III
// 
// =============================================

console.log("%c level_2_1", "color: blue; background-color: gold");

const imageArr = () =>
{
    returnArray = [];
    for(let i = 0; i <= 100; i++)
    {
        i = i.toString();
        returnArray.push(`image_${i.padStart(3, '0')}.img`);
    }
    console.log(returnArray);
}
imageArr();

console.log("%c level_2_2", "color: blue; background-color: gold");

const inputLength = document.body.querySelector('#inputLength');
const addLengthBtn = document.body.querySelector('#addLengthBtn');
const displayText = document.body.querySelector('#displayText');
displayText.style.color = "green";

addLengthBtn.addEventListener('click', () =>
{
    event.preventDefault();
    displayText.textContent = "L";
    for(let i = 0; i < inputLength.value; i++)
    {
        displayText.textContent += "o";
    }
    displayText.textContent += "p";
});

console.log("%c level_3_2", "color: blue; background-color: gold");

const displayResult = document.body.querySelector('#displayResult'); 

let numArray = [5, 22, 15, 100, 55];

for (let i = 0 ; i < numArray.length; i++)
{
    for(let j = 2; j < numArray[i]; j++)
    {
        // console.log(numArray[i]);
        if(numArray[i] % j === 0)
        {
            console.log(numArray[i]);
            const result = Number(numArray[i]) / Number(j);
            displayResult.innerHTML += `${numArray[i]} is dividable by ${j}. The result is: ${result} <br>`;
        }
    }
};

console.log("%c level_3_3", "color: blue; background-color: gold");

const inputLength2 = document.body.querySelector('#inputLength2');
const addLengthBtn2 = document.body.querySelector('#addLengthBtn2');
const displayText2 = document.body.querySelector('#displayText2');
displayText2.style.color = "green";

addLengthBtn2.addEventListener('click', () =>
{
    const inputValue = inputLength2.value;
    event.preventDefault();
    displayText2.textContent = "L";
    for(let i = 0; i < inputValue; i++)
    {
        if(i % 2 === 0)
        {
            displayText2.textContent += "o";
        }
        else
        {
            displayText2.textContent += "0";
        }
    }
    displayText2.textContent += "p";
});