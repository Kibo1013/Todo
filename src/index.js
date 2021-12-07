// const NAME = "sekine";
// const AGE = 28;
// console.log(`私の名前は${NAME}です。年齢は、${AGE}です。`);

// const func2 = () => {
//   console.log("Hello!");
// };
// func2();

// const func2 = (str) => str;
// console.log(func2("Test"));

// const sum = (num1, num2) => num1 + num2;
// console.log(sum(5, 10));

// const myProfiel = {
//   name: "sekine",
//   age: 27
// };
// const message = `名前は、${myProfiel.name}です。年齢は、${myProfiel.age}歳です。`;
// console.log(message);

// const { name, age } = myProfiel;
// const message2 = `名前は、${name}です。年齢は、${age}歳です。`;
// console.log(message2);

// const myProfiel = ["sekine", 27];
// const message = `名前は、${myProfiel[0]}です。年齢は、${myProfiel[1]}歳です。`;
// console.log(message);

// const [name, age] = myProfiel;
// const message2 = `名前は、${name}です。年齢は、${age}歳です。`;
// console.log(message2);

// const sayHello = (name = "Guest") => console.log(`Hello! ${name}さん`);
// sayHello();

// const ARRAY = [1, 2];
// console.log(...ARRAY);

// const sumFumc = (num1, num2) => console.log(num1 + num2);
// sumFumc(...ARRAY);

// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...num3] = arr2;
// console.log(num3);

// const arr4 = [10, 20];
// const arr5 = [30, 40];
// const arr6 = [...arr4];
// console.log(arr6);
// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const nameArr = ["a", "b", "c"];
// // // const nameArr2 = nameArr.map((name) => name);
// // // console.log(nameArr2);
// // nameArr.map((name, index) => console.log(`${index}/${name}`));
// const newNameArr = nameArr.map((name) => {
//   if (name === "b") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

// const numArr = [1, 2, 3];
// const newNummArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNummArr);

// 条件 ? true : false;
// const num = "ssss";
// // console.log(num.toLocaleString());
// const formattedNum =
//   typeof num === "number" ? num.toLocaleString() : "数値を入力してください。";
// console.log(formattedNum);
