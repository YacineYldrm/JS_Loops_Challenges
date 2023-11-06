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


// =============================================
// 
//          JavaScript ––> loops Bonus
// 
// =============================================

console.log("%c loops bonus", "color: blue; background-color: gold");

let text2 = `I didn't ask for a completely reasonable excuse! I asked you to get busy! But I know you in the future. I cleaned your poop. What are you hacking off? Is it my torso?! 'It is!' My precious torso! Please, Don-Bot… look into your hard drive, and open your mercy file! Shut up and get to the point! I barely knew Philip, but as a clergyman I have no problem telling his most intimate friends all about him. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. Moving along… Well, then good news! It's a suppository. I'll get my kit! And when we woke up, we had these bodies. Daddy Bender, we're hungry. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. Man, I'm sore all over. I feel like I just went ten rounds with mighty Thor. Alright, let's mafia things up a bit. Joey, burn down the ship. Clamps, burn down the crew. That could be 'my' beautiful soul sitting naked on a couch. If I could just learn to play this stupid thing. Well, thanks to the Internet, I'm now bored with sex. Is there a place on the web that panders to my lust for violence? I was all of history's great robot actors - Acting Unit 0.8; Thespomat; David Duchovny! Bender, I didn't know you liked cooking. That's so cute. Fatal. You don't know how to do any of those. Who are you, my warranty?! Shut up and get to the point! Fry, you can't just sit here in the dark listening to classical music. That's not soon enough! And why did 'I' have to take a cab? Bender?! You stole the atom. You know, I was God once. For the last time, I don't like lilacs! Your 'first' wife was the one who liked lilacs! And yet you haven't said what I told you to say! How can any of us trust you? Your best is an idiot! I found what I need. And it's not friends, it's things. No! The kind with looting and maybe starting a few fires! When will that be? Ugh, it's filthy! Why not create a National Endowment for Strip Clubs while we're at it? I'm just glad my fat, ugly mama isn't alive to see this day. Why did you bring us here? And until then, I can never die? I'm sure those windmills will keep them cool. You don't know how to do any of those. Fry, you can't just sit here in the dark listening to classical music. You know the worst thing about being a slave? They make you work, but they don't pay you or let you go. This opera's as lousy as it is brilliant! Your lyrics lack subtlety. You can't just have your characters announce how they feel. That makes me feel angry! Oh, but you can. But you may have to metaphorically make a deal with the devil. And by "devil",`

// Erstelle eine Variable mit einem Text (siehe Code-Snippet).
// Erstelle eine Funktion, die den Text in einem Abstand von 100 Zeichen trennt.
// Füge nach den 100 Zeichen " - 1 of gesamte-Nachrichten", " - 2 of gesamte-Nachrichten" usw. hinzu.
// Jedes Element dieser Zeichenkette (100 Zeichen + - 1 of x ) soll in ein Array gepusht werden.
// Gib dir am Ende das Ergebnis in der Konsole aus.
// Rufe die Funktion mit der Variable als Argument auf.

let textArray = [];
let breakPoint = 0;
let subStartPoint = 0;
const divTextlength = Math.ceil(text2.length / 100);

const every100thChar = () =>
{
    for(let i = 100; i <= text2.length || subStartPoint < text2.length; i += 100)
    {
        
        textArray.push(`${text2.substring(subStartPoint, i)} - ${breakPoint} of ${divTextlength} `);
        breakPoint++
        subStartPoint = i;
    }
    console.log(textArray);
};

every100thChar();

// const textTeile = [];
// const trennen = () => {
//   for (let i = 0; i < text2.length; i += 100) {
//     const teil = text2.slice(i, i + 100);
//     const teilNummer = Math.floor(i / 100) + 1;
//     const teilMitNummer = `${teil} - ${teilNummer} of gesamte-Nachrichten`;
//     textTeile.push(teilMitNummer);
//   }
//   return textTeile;
// };
// console.log(trennen(text2));