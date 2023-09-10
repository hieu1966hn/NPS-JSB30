// In ra màn hình console
// console.log("Hello World!!");




///////// Khai báo biến: let (ưu tiên), var, const (hằng số);
// let a = 1;
// var b = 2;

// a = 10;
// console.log(a + b);// 12


// const PI = 3.14; // không thay đổi giá trị kể từ khi khai báo
// // PI = 3; //Sai
// console.log(PI);// In ra gì?



////// Câu điều kiện
/*
if(điều kiện){
  /// Chạy nếu điều kiện đúng
}
else if(điều kiện){
  // Chạy nếu điều kiện con này đúng
}
else{
  /// Chạy nếu điều kiện sai
}
*/


///// Thực hành bài toán
// let score;
// score = prompt("Mời người dùng nhập số điểm bài kiểm tra");
// console.log("score: ", score);

// if (score < 8 && score >= 10) {
//   alert("Học sinh đạt điều kiện vào lớp hạng A");
// }
// else if (score == 7.5) {
//   console.log("Hoc Sinh dat dieu kien vao lop hang A");
// }
// else if (score < 8 && score >= 6.5) {
//   alert("Học sinh đạt điều kiện vào lớp hạng B");
// }
// else if (score < 6.5 && score >= 5) {
//   alert("Học sinh đạt điều kiện vào lớp hạng C");
// }
// else if (score < 5 && score >= 0) {
//   alert("Học sinh đạt điều kiện vào lớp hạng D");
// }
// else {
//   alert("Học sinh không đạt điều kiện vào trường");
// }


/*
Bài 1: Kiểm tra năm nhuận. Cho phép người dùng nhập vào số năm
Kiểm tra năm đó có nhuận hay không biết
- Năm nhuận là năm có tháng 2 là 29 ngày
- Năm không nhuận là năm có tháng 2 là 28 ngày

hint:
+ year nhuận chia hết cho 400
+ year nhuận chia hết cho 4 và không chia hết cho 100

Gơi ý CHIA HẾT:  
- Phép toán chia lấy kết quả dư: VD: 3%2 => 1
- ĐÂY LÀ PHÉP TOÁN CHIA HẾT: VD: 6%3 => 0

Bài 2: Cho phép người dùng nhập vào số tháng: 1 -> 12. 
In ra số ngày tương ứng với tháng đó (lấy năm bên trên luôn)

VD:
year = 2024 (ko nhuận)
n = 12;
output: 31 ngày

*/


let year = Number(prompt("Mời người dùng nhập vào năm để kiểm tra"));
console.log("year: ", year);

// Lưu ý: khi sử dụng promt => dữ liệu nhận vào biến sẽ là String.
let flag;
if (year % 4 == 0 && year % 100 != 0) {
  alert(year + " là năm nhuận");
  flag = true;
}
else {
  alert(year + " Không là năm nhuận");
  flag = false;
}



// Chữa bài 2:
let month = Number(prompt("Mời người dùng nhập vào tháng"));// 8
if (
  month == 1 ||
  month == 3 ||
  month == 5 ||
  month == 7 ||
  month == 8 ||
  month == 10 ||
  month == 12
) {
  alert(`Tháng ${month} là tháng có 31 ngày`);
}
else if (month == 2 && flag == true) {
  alert(`Tháng ${month} là tháng có 29 ngày`)
}
else if (month == 2 && flag == false) {
  alert(`Tháng ${month} là tháng có 28 ngày`)
}
else {
  alert(`Tháng ${month} là tháng có 30 ngày`)
}