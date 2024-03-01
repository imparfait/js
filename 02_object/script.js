// object

// const user = new Object();

// user.Name = "John";
// user.LastName = "Thomson";
// user.Age = 25; 
// user["Email"] = "john@gmail.com";

// console.log(user);
// console.log(user['Age']);

// function PrintUser(user) {
//     alert("Ваше повне ім'я " + user.Name + " " + user.LastName + "\nВік " + String(user.Age));
// }

// const user = new Object();

// user.Name = prompt("Введіть своє ім'я");
// user.LastName = prompt("Введіть своє прізвище");
// user.Age = Number(prompt("Введіть свій вік"));

// PrintUser(user);


// if("Email" in user) {  // перевірка чи Age існує в object
//     console.log(true);
// }
// else {
//     console.log(false);
// }
// console.log(user);
// // Видалення змінних (властивостей (property))
// delete user.Age;
// delete user["Name"];



// const address = {
//     Country: "Ukraine",
//     City: "Rivne",
//     Street: "Soborna",
//     House: {
//         Number: 16,
//         Entrance: 1,
//         Code: 3445
//     }
// }

// console.log(address.House.Code);

// console.log(address);








                // Array
// const list = new Array();

// list[0] = 2;
// list[1] = 35;
// list[2] = 54;
// list[3] = 243;

// for (let i = 0; i < 4; i++) {
//     console.log(list[i]);
// }


// const arr = [];
// const arr2 = [4, 1,5,7,3,2,4,6,8,6,4, 4, 43, 5, 6, 4];

// for(let i = 0; i < arr2.length; i++) {
//     console.log(arr2[i]);
// }

// let startIndex = 0;
// let index = -1;
// do {
//     index = arr2.indexOf(4, startIndex);// повертає індекс елемента (якщо не існує то повертає -1)
//     console.log(index);
//     startIndex = index + 1;
// } while (index != -1 && index != arr2.length - 1);



// console.log(arr2.toString());

 
// const words = ["apple", "orange", "chery", "lemon"];

// const text = words.join(", ");
// console.log(text);

// words.push("banana");

// console.log(words);







//    text


// const str = "Hello my friend. It's Java Script";

// const res = str.split(" "); // ділить тест по розділювачу та формує масив
// // console.log(res);
// // console.log(res[2]);

// const friend = str.substring(9, 15); // substring(startIndex, endIndex) - endIndex не включно
// const js = str.substr(22);        // substr(startIndex, count)
// console.log(friend);
// console.log(js);




// Date

// const now = new Date() // поточна дата
// //console.log(now.getMilliseconds());
// const date = new Date(2023, 10, 24, 15, 2, 15, 25) // дата
//console.log(date);
//console.log(date.getMilliseconds());
// console.log(now.getDay());
// console.log(now.getDate());
// console.log(now.getFullYear());
// console.log(now.getHours());
// console.log(now.getMilliseconds());
// console.log(now.getMinutes());
// console.log(now.getMonth());
// console.log(now.getSeconds());
// console.log(now.getTime());

// now.setMonth(5);

// console.log(now);






// Interval

// const index = setInterval(test, 2000, 100, 78);
// let counter = 1;

// function test(value, val2) {

//     console.log("Test func");
//     console.log(counter);
//     console.log(value);
//     console.log(val2);
//     if(counter == 5) {
//         clearInterval(index);
//     }
//     counter++;
    
// }



function delay() {
    console.log("delay test");
}

setTimeout(delay, 10000);