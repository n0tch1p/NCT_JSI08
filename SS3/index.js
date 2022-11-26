/*
Lesson 3:
-reduce
-split
-slice
-map
-filter
-find
-indexOf 
*/


// VD về dom
// const h1 = document.getElementById("demo");
// console.log("h1: ", h1);


// const chao = document.querySelector(".chao");
// console.log("chao: ", chao);


// const query = document.querySelector("#demo")
// query.innerHTML= "chao xin"
// console.log("query: ", query);



//**reduce**
// const numbers = [175, 50, 25];

// document.getElementById("demo").innerHTML = numbers.reduce(myFunc);

// function myFunc(total, num) {
//   return total - num;
// }


//**split**
//let num =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//let str = "1,2,3,4,5,6,7,8,9,10"
//let result = str.split(",")
//console.log("result: ", result);


// ***Slice*** 
//const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
//const citrus = fruits.slice(1, 3);// => Cắt mảng: (hs1, hs2): hs1 => vị trí bắt đầu cắt mảng. hs2 => vị trí kết thúc cắt mảng
//console.log("citrus: ", citrus);



/// **Map**: là cú pháp dùng để thao tác với từng phần tử trong mảng theo 1 điều kiện nhất định => Kq là 1 mảng mới đã thực hiện câu lệnh đó
//// Đề bài: Gấp đôi từng phần tử mảng.
//let arr = [1, 4, 8, 10];
/// example 1 :
// for (let i = 0; i < arr.length; i++) {// duyệt từng phần tử mảng
//   arr[i] = arr[i] * 2
// }
// console.log("arr: ", arr);

//// example 2: sử dụng map
//let arr2 = arr.map(item => item * 2)// [2, 8, 16, 20]
//console.log("arr2: ", arr2);





///// **Filter**: Lọc mảng => kết quả trả về là 1 mảng mới thỏa mãn điều kiện lọc
//let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//// Đề bài: Lọc ra những số lẻ trong mảng:
///// example  1 : dùng for
// let arr2 = []; // mảng rỗng 
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 != 0) {
//     arr2.push(arr[i]);
//   }
// }
// console.log("arr2: ", arr2);

////// example 2: Dùng filter
//let arr2 = arr.filter(item => item % 2 != 0)// => mảng mới toàn số lẻ
//console.log("arr2: ", arr2);



///// ***Find**: Tìm giá trị đầu tiên thỏa mãn điều kiện muốn tìm và in ra nó
//const array1 = [5, 12, 8, 130, 44];

//const found = array1.find(item => item > 10);

//console.log(found);
// expected output: 12


///// indexOf: Hiển thị vị trí phần tử muốn tìm trong mảng
//let arr = [5, 12, 8, 130, 8, 44, "Hello", 8];
//// Đề bài Tìm vị trí phần tử nào có giá trị lớn hơn 100
// console.log(
//   arr.indexOf(8, 3)
// )


///// Đề bài: Tìm và hiển thị được 3 vị trí số 8 đang ở trong mảng lên màn hình console
//let last1 = arr.indexOf(8);//2
//let last2 = arr.indexOf(8, last1 + 1)
//let last3 = arr.indexOf(8, last2 + 1)
//console.log(last1, last2, last3);

//BAI TAP// 



//1) let arr1 = [1,2,4,5,6]; 
//arr2 = [1,6,8,9,0]
//let arr2 = arr2.filter(item => arr2.includes(item)  )//


//2) arr = [1,54,6,7]
//let arr2 = arr.map(item => item + 5)
//console.log()//

//3) m = [1,2,4,5,6,7];
//n = [3,5,675,8,96]
//let newarr = arr.filter(item => item == 1, 8,10,96,7)//



//{ id: 11, name: 'Messi', age: 33 }, 
//{ id: 12, name: 'Ronaldo', age: 34 }, 
//{ id: 13, name: 'Young', age: 35 }, 
//{ id: 14, name: 'Mane', age: 21 },     
//{ id: 15, name: 'Salah', age: 24 },//
// document.getElementById("demo").innerHTML = numbers.reduce(myFunc);

// function myFunc(total, num) {
//   return total - num;
// }

//// Reduce
// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 10;
// const sumWithInitial = array1.reduce(
//   (previousValue, currentValue) => previousValue + currentValue,
//   initialValue
// );

// console.log(sumWithInitial);
// // expected output: 10


//{ id: 11, name: 'Messi', age: 33 }, 
//{ id: 12, name: 'Ronaldo', age: 34 }, 
//{ id: 13, name: 'Young', age: 35 }, 
//{ id: 14, name: 'Mane', age: 21 },     
//{ id: 15, name: 'Salah', age: 24 },//
//function playermidified(){
    //return
//}