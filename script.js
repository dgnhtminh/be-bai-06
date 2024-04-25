// 1.1 và 1.2
// var a = 10;
// var b = 20;
// if(a > b){
//     console.log("a lớn hơn b");
// } else{
//     console.log("a nhỏ hơn hoặc bằng b");
// }

// 1.3
// var diemthi = 7.5;
// if(diemthi >= 8){
//     console.log("Học sinh Giỏi");
// } else if(diemthi >= 6.5 && diemthi < 8){
//     console.log("Học sinh Khá");
// } else{
//     console.log("Học sinh Tiên Tiến");
// }

// 1.4
// var age = 17;
// var result = age >= 18 ? "Đủ tuổi" : "Không đủ tuổi";
// console.log(result);

// 2
var number = 0;
// switch (number) {
//   case 0:
//     console.log("Đây là số 0");
//     break;
//   case 1:
//     console.log("Đây là số 1");
//     break;
//   case 2:
//     console.log("Đây là số 2");
//     break;
//   default:
//     console.log("Không thỏa mãn!");
//     break;
// }

//   var string = "Hello";
//   switch (string) {
//     case "Hello":
//     case "Hi":
//       console.log("Xin chào");
//       break;
//     case "Bye":
//       console.log("Tạm biệt");
//       break;
//     default:
//       console.log("Không thỏa mãn!");
//       break;
//   }

// 3
// var n = 10;
// for(var i = 0; i <= n; i++){
//     console.log(i);
// }

// for(var i = 1; i <= 10; i++) {
//   for(var j = 1; j <= 10; j++) {
//     console.log(`Hàng ${i} Cột ${j}`);
//   }
// }


// 4
// var infoUser = {
//     fullName: "Dương Nhật Minh",
//     email: "toilaminhhh@gmail.com",
//     phone: "0869652698"
// };

// for (key in infoUser) {
//     console.log(key);
//     console.log(infoUser[key]);
// }

// var key = "fullName";
// console.log(infoUser.fullName);
// console.log(infoUser.key);
// console.log(infoUser[key]);


// 5
var list = ["HTML", "CSS3", "Javascript"];
// for(var i = 0; i < list.length; i++){
//     console.log(i);
//     console.log(list[i]);
// }

// for(var i of list){
//     console.log(i);
// }

var string = "Dương Nhật Minh";
// for(var i = 0; i < string.length; i++){
//     console.log(string[i]);
// }

// for(var i of string){
//     console.log(i);
// }

// 6
// var i = 1;
// while(i <= 10){
//     console.log(i);
//     i++;
// }

// var i = 20;
// do{
//     console.log(i);
//     i++;
// } while(i <= 10);

// 7
// var n = 10;
// for(var i = 0; i <= n; i++){
//     if(i == 5) break;
//     console.log(i);
// }


// 8
// var n = 10;
// for(var i = 0; i <= 10; i++){
//     if(i == 5) continue;
//     console.log(i);
// }


// 9
  // Từ khóa var
    // var a = 10;

    // if(a == 10) {
    //   var b = 20;
    //   console.log(b);
    // }

    // if(true) {
    //   var b = 30;
    //   console.log(b);
    // }

    // console.log(b);







//   Từ khóa let
    // var a = 10;
    
    // if(a == 10) {
    //   let b = 20;
    //   b = 30;
    //   console.log(b);
    // }

    // if(true) {
    //   let b = 30;
    //   console.log(b);
    // }

    // console.log(b);




  // Từ khóa const
    // var a = 10;

    // if(a == 10) {
    //   const b = 20;
    //   // b = 30;
    //   console.log(b);
    // }

    // console.log(b);




    // if(true) {
    //   const PI = 3.14;
    //   // PI = 5; // Gán lại giá trị là sai
    //   console.log(PI);
    // }