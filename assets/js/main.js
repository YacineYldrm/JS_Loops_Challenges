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
        if(words[i].length >= lengthInput.value)
        {
            displayWords.innerHTML += ` ${words[i]} <br>`;
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
