





// ახალი თემა





// ====================================================
// var, let, const – სხვადასხვა მასშტაბები
// ====================================================


// 1️⃣ var – function scope + hoisting (ძველი სტილი, აღარ გამოიყენება)
// // hoisting – ცვლადის გამოცხადება წინ წაიწევს, მაგრამ მნიშვნელობა არაა მინიჭებული
// // console.log(x); // ReferenceError: Cannot access 'x' before initialization




// console.log(x); // undefined
// var x =5;
// console.log(x); // 5

/* 2️⃣ let – ბლოკური მასშტაბი block scope, 
Temporal Dead Zone – ვერ გამოძახებ, სანამ ცვლადს მნიშვნელობა მიენიჭება */


// let y = 10;
// y = 20;
// console.log(y); // 20

// {
//     let y = 5;
//     console.log(y); // 5 (ბლოკში)
// }
// console.log(y); // 20 (გარე)



// 3️⃣ const – მუდმივი, ბლოკური მასშტაბი block scope
// const c = 5;
// // c = 10; ❌ შეცდომა



// {
//     const c = 20; // სხვა ბლოკური ცვლადი
//     console.log(c); // 20
// }
// console.log(c); // 5

// ====================================================
// განსხვავება ბლოკურ და ფუნქციურ სკოუპებს შორის
// ფუნქციური სკოუპი (Function Scope)

// function test() {
//   if (true) {
//     var x = 10;
//   }
//   console.log("x =" + " " + x); // 10  (x ხელმისაწვდომია მთელ ფუნქციაში)
// }

// test();

// ბლოკური სკოუპი (Block Scope)

// function test() {
//   if (true) {
//     let y = 20;
//     const z = 30;
//   }
//   console.log(y); // Error (y არ არსებობს ამ ბლოკის გარეთ)
// }
// test();
// ====================================================







// ====================================================
// დავალება
// ====================================================


// მოცემულია:


// let a = "3";
// let b = "8";
// მიზანი: ცვლადების შეცვლა ისე, რომ კონსოლში გამოჩნდეს:
// a is 8
// b is 3
// მოცემული წესები:
// 1. არ შეცვალოთ let a და let b.
// 2. არ შეგიძლიათ დაწეროთ რიცხვი პირდაპირ.
// 3. არ შეგიძლიათ ხელახლა გამოაცხადოთ ცვლადები.





// მე ეს შევძელი, მაგრამ სწორია თუ არა არ ვიცი

// let a = "3";
// let b = "8";

//  a = prompt("a is" +b);

//  b = prompt("b is" +a);

// // prompt("a is" +a);


// // prompt("b is" +b);  



// console.log("a is " + a); //8
// console.log("b is " + b);//3


// let a = "3";
// let b = "8";

// // ცვლადების გამოცვლა ცვლადის დახმარებით
// let temp = a;
// a = b;
// b = temp;

// console.log("a is " + a); // 8
// console.log("b is " + b); // 3


// ====================================================
// ოპერატორები
// ====================================================

// არითმეტიკული ოპერატორები 

// ესეც დავწერე

// let num1 = 5;
// let num2 = 3;



// console.log(num1 + num2);  შეკრება


// let num1 = 5;
// let num2 = 3;


// console.log(num1 - num2);  გამოკლება



// let num1 = 5;
// let num2 = 3;

// console.log(num1 * num2);  გამრავლება


// let num1 = 5;
// let num2 = 3;

// console.log(num1 / num2);  გაყოფა


// let num1 = 5;
// let num2 = 3;


// console.log(num2 / num1);  გაყოფა





// console.log(5 % 4);  ნაშთი

// console.log(5 % 2);  ნაშთი

// console.log(5 ** 3);  //ხარისხი


// let num1 = 5;
// let num2 = 3;


// console.log(++num1); // 6

// console.log(--num2); 

// console.log(num1 ++);


// console.log(num2 --);














// დარჩა ეს


// გადავხედოთ

/* მინიჭების ოპერატორები */
// let x = 5;
// x += 3;
// x -= 2;
// x *= 4;

// x /= 2;

// x %= 5;
// console.log(x);



// let x = 5;

// x += 3;   // x = x + 3 → x = 8
// x -= 2;   // x = x - 2 → x = 6
// x *= 4;   // x = x * 4 → x = 24
// x /= 2;   // x = x / 2 → x = 12
// x %= 5;   // x = x % 5 → x = 2 (ნაშთი 5-ზე გაყოფისას)

// console.log(x); // 2


/* შედარების ოპერატორები */
// console.log(5 == "5");
// console.log(5 === "5");
// console.log(5 != 3);
// console.log(5 !== "5");
// console.log(5 > 3);
// console.log(5 < 3);


// გადავხედოთ





// console.log(5 == "5");   // true (ღირებულება ემთხვევა, მაგრამ ტიპი არა)
// console.log(5 === "5");  // false (ღირებულება ემთხვევა, ტიპი არა)
// console.log(5 != 3);     // true (5 არ უდრის 3-ს)
// console.log(5 !== "5");  // true (ღირებულება ემთხვევა, ტიპი განსხვავდება)
// console.log(5 > 3);      // true
// console.log(5 < 3);      // false


/* ლოგიკური ოპერატორები */
// console.log(true && false);
// console.log(true || false);
// console.log(!true);
 



// //  გადავხედოთ


// console.log(true && false); // false → ორივე უნდა იყოს true
// console.log(true || false); // true → ერთი მაინც უნდა იყოს true
// console.log(!true);         // false → პირობის საწინააღმდეგო



// && → AND (და)

// || → OR (ან)

// ! → NOT (არა)
// // ====================================================
// საუკეთესო პრაქტიკა
// ====================================================
// - გამოიყენეთ ===, !== – თავიდან აგაცილებთ გაუგებარ შედეგებს
// - მინიჭების ოპერატორები გამოიყენეთ გასაგებად
// - ლოგიკური ოპერატორები უნდა იყვნენ მკაფიოები
// - არითმეტიკული ოპერატორები – მხოლოდ საჭიროების შემთხვევაში, მაგრამ გასაგებად

// <!-- script.js
// ნაჩვენებია script.js -
























// 10





// 14,09,2025 

///////////////
// 1. მარტივი შედარება (>)
// const age = prompt("ასაკი")

// if (age >= 18) {
//   console.log("You are an adult.");
// } else {
//   alert("You are a minor.");
// }
////////////////////////
// Strict Equality (===)
// const password = "1234";

// if (password === "1234") {
//   console.log("Access granted!");
// } else {
//   console.log("Access denied!");
// }
//
//
//////////
// ლოგიკური ოპერატორები (logical operators)
///////////////////////
// AND (&&) — ორი პირობა ერთდროულად
// const score = 55;
// if (score >= 35 && score < 72) {
//   console.log("you are right");
// } else if (score > 30 && score <= 70) {
//   console.log("Your score is in the middle range.");
// } else {
//   console.log("Your score is out of the range.");
// }

//////////////////////////////////////////////////////////////////////////////////////
// 4. OR (||) — მინიმუმ ერთი პირობა



// არის




// const day = "Saturday";
// const temperature = 35;

// if (day === "Saturday" || day === "Sunday") {
//   console.log("Enjoy the weekend!");
// } else {
//   console.log("Do some work.");
// }

//
///////////////
// NOT (!) — პირობის საწინააღმდეგო
// const isLoggedIn = false;

// if (!isLoggedIn) {
//   console.log("Please log in first.");
// } else {
//   console.log("Welcome back!");
// }
///////////////
// 6. კომბინირებული პირობა (AND + OR)
// const age = 20;
// const hasTicket = true;

// if ((age >= 18 && age <= 65) || hasTicket) {
//   console.log("You can enter the event.");
// } else {
//   console.log("You are not allowed to enter.");
// }
//////////////////////
// savarjiSo
// გამოიყენე let, შექმენი ცვლადი სახელად hungerLevel და მიანიჭე მნიშვნელობა 7.

// დაწერე if...else პირობა შედარების ოპერატორის გამოყენებით. პირობა უნდა ამოწმებდეს, არის თუ არა hungerLevel მეტი 7ზე.

// თუ პირობა მართალია, კონსოლში უნდა გამოიტანოს: 'Time to eat!'.

// წინააღმდეგ შემთხვევაში, კონსოლში გამოიტანოს: 'We can eat later!'.



// არის

// let hungerLevel = 7;

// if (hungerLevel > 7) {
//   console.log('Time to eat!');
// } else {
//   console.log('We can eat later!');
// }

/////////////////

// გვაქვს ორი ცვლადი — mood და tirednessLevel.
// let mood = "sleepy";
// let tirednessLevel = 6;

//  შექმენი if...else პირობა, რომელიც შეამოწმებს, არის თუ არა mood–  'sleepy' და tirednessLevel მეტია 8-ზე.

// თუ ორივე პირობა არის true, კონსოლში გამოვიტანთ სტრინგს 'time to sleep'.




// არის


// let mood = "sleepy";
// let tirednessLevel = 6;

// if (mood === "sleepy" && tirednessLevel > 8) {
//   console.log("time to sleep");
// } else {
//   console.log("not bedtime yet");
// }

// წინააღმდეგ შემთხვევაში, გამოვიტანთ 'not bedtime yet'.
//
//

// რა მოხდება თუ && ოპერატორს შევცვლით ||, ხოლო === – ! ით?




// არის

// let mood = "sleepy";
// let tirednessLevel = 6;
// if (mood !== "sleepy" || tirednessLevel > 8) {
//   console.log("time to sleep");
// } else {
//   console.log("not bedtime yet");
// }




////////////////////

// Truthy და Falsy

// როგორ იყოფა არა–ბულეან ტიპები, –– strings ან numbers, როცა ისინი გამოიყენება პირობაში.

//  შეიძლება გჭირდებოდეს შეამოწმო, აქვს თუ არა ცვლადს მნიშვნელობა.

// მაგალითი:

// let myVariable = 'I Exist!';

// if (myVariable) {
//    console.log(myVariable)
// } else {
//    console.log('The variable does not exist.')
// }

// რომელი მნიშვნელობები ითვლება falsy-ად:

// 0

// ცარიელი სტრინგი "" ან ''

// null (ცვლადი არ აქვს მნიშვნელობა)

// undefined (ცვლადი დეკლარირებულია, მაგრამ არ აქვს მნიშვნელობა)

// NaN (Not a Number)

// მაგალითი ნუმერულ მნიშვნელობებთან:

// let numberOfApples = 0;

// if (numberOfApples){
//    console.log('Let us eat apples!');
// } else {
//    console.log('No apples left!');
// }


// 0 არის falsy → else ბლოკი შესრულდება.

// 
// Prints 'No apples left!'




// ამ შემთხვევაში პირობა აფასებს false, რადგან numberOfApples არის 0, რომელიც falsy მნიშვნელობაა, ამიტომ else ბლოკი შესრულდება.

//////////////////////////////





// სავარჯიშო
// შეცვალეთ wordCount-ის მნიშვნელობა ისე, რომ ის truthy იყოს. ეს მნიშვნელობა კვლავ უნდა იყოს ნუმერული.

// კონსოლში უნდა გამოისახოს: "Great! You've started your work!"
/////////
//




// let wordCount = 0;

// if (wordCount) {
//   console.log("Great! You've started your work!");
// } else {
//   console.log("Better get to work!");
// }




// შეცვალეთ favoritePhrase-ის მნიშვნელობა ისე, რომ ის კვლავ იყოს სტრინგი, მაგრამ falsy.

//  კონსოლში უნდა გამოისახოს: "This string is definitely empty."









// let favoritePhrase = "Hello World!";

// if (favoritePhrase) {
//   console.log("This string doesn't seem to be empty.");
// } else {
//   console.log("This string is definitely empty.");
// }





/////////////////////////

// Truthy და Falsy დავალება
// Truthy და falsy მნიშვნელობების გამოყენება იძლევა კოდში მოკლე, კომპაქტურ გამოხატვის შესაძლებლობებს.

// მაგალითად, თუ გვაქვს ვებგვერდი და გვსურს მომხმარებლის სახელის გამოყენება პერსონალიზებული მისალმებისთვის, ზოგჯერ მომხმარებელს ანგარიში არ აქვს და სახელის ცვლადი falsy იქნება.




// let username = "";
// let defaultName;

// if (username) {
//   defaultName = username;
// } else {
//   defaultName = 'Stranger';
// }

// console.log(defaultName);

// შეგვიძლია უფრო მოკლე ჩანაწერიც გამოვიყენოთ. short-circuit evaluation.

// let username = '';
// let defaultName = username || 'Stranger';

// console.log(defaultName);
//////////////////////









// სავარჯიშო
// კინოს ბილეთის ყიდვის სისტემა
// წარმოიდგინე, რომ ვებ-გვერდზე მომხმარებელს უნდა შეიყვანოს რომელი ფილმის ბილეთი უნდა იყიდოს.
// თუ მომხმარებელმა არაფერი შეიყვანა, ავტომატურად ავიღოთ ფილმი „Default Movie“.
// შემდეგ დავბეჭდოთ, რა ფილმის ბილეთი შეიძინა მომხმარებელმა.
// შემდეგ მომხმარებელი გადაწყვეტს ფილმის შეცვლას და ირჩევს "Inception"-ს.




// არის


// let chosenMovie = "";

// // თუ მომხმარებელი არაფერს არ ირჩევს, ჩავანაცვლოთ "Default Movie"
// let finalMovie = chosenMovie || "Default Movie";

// console.log(`Ticket booked for: ${finalMovie}.`);

// // მომხმარებელი შეცვლის ფილმს
// chosenMovie = "Inception";
// finalMovie = chosenMovie || "Default Movie";

// console.log(`Ticket booked for: ${finalMovie}.`);

//////////////////////////////////////////////////////






//ტერნარი ოპერატორი if...else –ის  შემოკლებული ვარიანტი/
//
// condition ? valueIfTrue : valueIfFalse


// სტანდარტული მაგალითი
// let isNightTime = true;

// if (isNightTime) {
//   console.log("Turn on the lights!");
// } else {
//   console.log("Turn off the lights!");
// }




//
//
// შემოკლებული ვარიანტი
// isNightTime
//   ? console.log("Turn on the lights!")
//   : console.log("Turn off the lights!");



//////////////////////
// სავარჯიშო; შეცვალე ეს ჩანაწერი მოკლე ჩანაწერით
///


// let isLocked = false;

// if (isLocked) {
//   console.log("You will need a key to open the door.");
// } else {
//   console.log("You will not need a key to open the door.");
// }

// let isCorrect = true;

// if (isCorrect) {
//   console.log("Correct!");
// } else {
//   console.log("Incorrect!");
// }

// let favoritePhrase = "Love That!";

// if (favoritePhrase === "Love That!") {
//   console.log("I love that!");
// } else {
//   console.log("I don't love that!");
// }



// მოკლე ჩანაწერი, ოპერატორების გადაკეთება, condition ? valueIfTrue : valueIfFalse;

// let isLocked = false;
// isLocked
//   ? console.log("You will need a key to open the door.")
//   : console.log("You will not need a key to open the door.");

// let isCorrect = true;
// isCorrect
//   ? console.log("Correct!")
//   : console.log("Incorrect!");

// let favoritePhrase = "Love That!";
// favoritePhrase === "Love That!"
//   ? console.log("I love that!")
//   : console.log("I don't love that!");



/////////////////////////
// საუკეთესო პრაქტიკა (DO / AVOID)

// მარტივი, მოკლე ლოგიკა:
// const canVote = age >= 18 ? 'yes' : 'no';
// სასურველია ერთი და იგივე ტიპი დააბრუნონ
// const amount = hasDiscount ? 10 : 0; // ორივე number

// if...else — სტეიტმენტია (ბლოკი), კარგია მრავალ ხაზზე, მრავლ ხელსაწყოზე.

// ტერნარი — ექსპრესიაა (აბრუნებს მნიშვნელობას), კარგია მოკლე არჩევანებისთვის.
/////////////////////////////////
//
// Else If Statements

// let stopLight = "black";

// if (stopLight === "red") {
//   console.log("Stop!");
// } else if (stopLight === "yellow") {
//   console.log("Slow down.");
// } else if (stopLight === "green") {
//   console.log("Go!");
// } else {
//   console.log("Caution, unknown!");
// }


// let stopLight = "green";

// if (stopLight === "red") {
//   console.log("Stop!");
// } else if (stopLight === "yellow") {
//   console.log("Slow down.");
// } else if (stopLight === "green") {
//   console.log("Go!");
// } else {
//   console.log("Caution, unknown!");
// }



// let stopLight = "yellow";

// if (stopLight === "red") {
//   console.log("Stop!");
// } else if (stopLight === "yellow") {
//   console.log("Slow down.");
// } else if (stopLight === "green") {
//   console.log("Go!");
// } else {
//   console.log("Caution, unknown!");
// }

// let stopLight = "red";

// if (stopLight === "red") {
//   console.log("Stop!");
// } else if (stopLight === "yellow") {
//   console.log("Slow down.");
// } else if (stopLight === "green") {
//   console.log("Go!");
// } else {
//   console.log("Caution, unknown!");
// }





// სავარჯიშო
/// დაამატე else if პირობა, რომელიც ამოწმებს: season === "winter";
// და თუ პირობა შესრულდა გამოიტანე console.log("It's winter! Everything is covered in snow.");
// თუ fall ––– 'It\'s fall! Leaves are falling!
// თუ summer - It\'s sunny and warm because it\'s summer!

// let season = "summer";

// if (season === "spring") {
//   console.log("It's spring! The trees are budding!");
// } else {
//   console.log("Invalid season.");
// }





// არის 






// let season = "summer";

// if (season === "spring") {
//   console.log("It's spring! The trees are budding!");
// } else if (season === "summer") {
//   console.log("It's sunny and warm because it's summer!");
// } else if (season === "fall") {
//   console.log("It's fall! Leaves are falling!");
// } else if (season === "winter") {
//   console.log("It's winter! Everything is covered in snow.");
// } else {
//   console.log("Invalid season.");
// }


// let season = "fall";

// if (season === "spring") {
//   console.log("It's spring! The trees are budding!");
// } else if (season === "summer") {
//   console.log("It's sunny and warm because it's summer!");
// } else if (season === "fall") {
//   console.log("It's fall! Leaves are falling!");
// } else if (season === "winter") {
//   console.log("It's winter! Everything is covered in snow.");
// } else {
//   console.log("Invalid season.");
// }


// let season = "sun";

// if (season === "spring") {
//   console.log("It's spring! The trees are budding!");
// } else if (season === "summer") {
//   console.log("It's sunny and warm because it's summer!");
// } else if (season === "fall") {
//   console.log("It's fall! Leaves are falling!");
// } else if (season === "winter") {
//   console.log("It's winter! Everything is covered in snow.");
// } else {
//   console.log("Invalid season.");
// }
//////////////////////////

//
// //
// switch case
//
// else if სტეიტმენტები კარგია მაშინ, როცა რამდენიმე პირობას ამოწმებ.
// მაგრამ ხშირად გვიწევს იმდენად ბევრ მნიშვნელობას შევამოწმოთ, რომ else if სტრუქტურა რთულად წასაკითხი და გრძელდება.

// let groceryItem = "papaya";

// if (groceryItem === "tomato") {
//   console.log("Tomatoes are $0.49");
// } else if (groceryItem === "papaya") {
//   console.log("Papayas are $1.29");
// } else {
//   console.log("Invalid item");
// }



// let groceryItem = "tomato";

// if (groceryItem === "tomato") {
//   console.log("Tomatoes are $0.49");
// } else if (groceryItem === "papaya") {
//   console.log("Papayas are $1.29");
// } else {
//   console.log("Invalid item");
// }




// let groceryItem = "";

// if (groceryItem === "tomato") {
//   console.log("Tomatoes are $0.49");
// } else if (groceryItem === "papaya") {
//   console.log("Papayas are $1.29");
// } else {
//   console.log("Invalid item");
// }
//
//
//

// switch გვაძლევს ალტერნატიულ, უფრო სუფთა და წაკითხვად სინტაქსს:

// let groceryItem = 'papaya';

// switch (groceryItem) {
//   case 'tomato':
//     console.log('Tomatoes are $0.49');

// //     break; //თუ break არ დაწერე, შესრულდება ყველა მომდევნო case, სანამ break ან default არ შეგხვდება — ამას fall-through ეწოდება.
// //   case 'lime':
//     console.log('Limes are $1.49');
//     break;
//   case 'papaya':
//     console.log('Papayas are $1.29');
//     break;
// //   default: //default:// მუშაობს როგორც else.// თუ არცერთი case არ დაემთხვა, მაშინ შესრულდება default-ის კოდი.
//     console.log('Invalid item');
//     break;
// }
// Prints: Papayas are $1.29
// //




// არის


// let groceryItem = 'papaya';

// switch (groceryItem) {
//   case 'tomato':
//     console.log('Tomatoes are $0.49');
//     break;
//   case 'lime':
//     console.log('Limes are $1.49');
//     break;
//   case 'papaya':
//     console.log('Papayas are $1.29');
//     break;
//   default: // თუ არცერთი case არ დაემთხვა
//     console.log('Invalid item');
//     break;
// }





// let groceryItem = 'lime';

// switch (groceryItem) {
//   case 'tomato':
//     console.log('Tomatoes are $0.49');
//     break;
//   case 'lime':
//     console.log('Limes are $1.49');
//     break;
//   case 'papaya':
//     console.log('Papayas are $1.29');
//     break;
//   default: // თუ არცერთი case არ დაემთხვა
//     console.log('Invalid item');
//     break;
// }
// Prints: Papayas are $1.29

//////////////////////










// savarjiSo
// შექმენი პროგრამა, რომელიც სპორტსმენს მედალს გადასცემს მისი პოზიციის მიხედვით.

// დაწერე switch statement, სადაც athleteFinalPosition იქნება მთავარი expression.

// თითოეულ case-ში გამოუტანე შესაბამისი ტექსტი console.log-ით.

// არ დაგავიწყდეს break და default !

// switch statement-ის შიგნით დაამატე სამი case:

// პირველი case:

// ამოწმებს მნიშვნელობას 'first place'.

// თუ ემთხვევა, console.log() უნდა დაბეჭდოს:You get the gold medal!
// მეორე case:

// ამოწმებს მნიშვნელობას 'second place'.

// თუ ემთხვევა, console.log() უნდა დაბეჭდოს:

// You get the silver medal!
// მესამე case:

// ამოწმებს მნიშვნელობას 'third place'.

// თუ ემთხვევა, console.log() უნდა დაბეჭდოს:

// You get the bronze medal!



// არის 


// let athleteFinalPosition = "second place";

// switch (athleteFinalPosition) {
//   case "first place":
//     console.log("You get the gold medal!");
//     break;
//   case "second place":
//     console.log("You get the silver medal!");
//     break;
//   case "third place":
//     console.log("You get the bronze medal!");
//     break;
//   default:
//     console.log("No medal awarded.");
//     break;
// }




// let athleteFinalPosition = "third place";

// switch (athleteFinalPosition) {
//   case "first place":
//     console.log("You get the gold medal!");
//     break;
//   case "second place":
//     console.log("You get the silver medal!");
//     break;
//   case "third place":
//     console.log("You get the bronze medal!");
//     break;
//   default:
//     console.log("No medal awarded.");
//     break;
// }




// let athleteFinalPosition = "";

// switch (athleteFinalPosition) {
//   case "first place":
//     console.log("You get the gold medal!");
//     break;
//   case "second place":
//     console.log("You get the silver medal!");
//     break;
//   case "third place":
//     console.log("You get the bronze medal!");
//     break;
//   default:
//     console.log("No medal awarded.");
//     break;
// }




// let athleteFinalPosition = "first place";

// switch (athleteFinalPosition) {
//   case "first place":
//     console.log("You get the gold medal!");
//     break;
//   case "second place":
//     console.log("You get the silver medal!");
//     break;
//   case "third place":
//     console.log("You get the bronze medal!");
//     break;
//   default:
//     console.log("No medal awarded.");
//     break;
// }

// 💡 არ დაგავიწყდეს break თითოეული console.log()-ის შემდეგ, რათა შემდეგ case-ები აღარ შესრულდეს.
// ახლა დაამატე default განყოფილება switch-ის ბოლოს, სადაც გამოიყენებ console.log()-ს ტექსტის დასაბეჭდად:

// 'No medal awarded.'
// გაიხსენე, რომ default-ის ბოლოშიც უნდა დაამატო break საკვანძო სიტყვა.
// script.js
// ნაჩვენებია script.js

