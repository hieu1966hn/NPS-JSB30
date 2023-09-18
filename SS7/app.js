//// Khai báo hàm kiểm tra năm nhuận

function kiemTraNamNhuan(year) {
  let flag;
  if (year % 4 == 0 && year % 100 != 0) {
    alert(year + " là năm nhuận");
    flag = true;
  }
  else {
    alert(year + " Không là năm nhuận");
    flag = false;
  }

  return flag; // TRUE/ FALSE
}

///// Gọi hàm
console.log(
  // kiemTraNamNhuan(2024) /// Kết quả là gì?
);

///// Xây dựng hàm có tên sum với đầu vào là nhận vào 3 số và kết quả là tổng của 3 số đó
function sum(a, b, c) {
  return a + b + c;
}

console.log(
  sum(1, 2, 3) // 1
);



// HÀM KHÔNG tham số
function test() {
  alert("Đây là hàm không tham số")
}

// Gọi hàm
// test();


// Hàm so sánh 2 số với nhau 
function sapXepTheoThuTuTangDan(a, b) {
  if (a > b) {
    console.log(`${b}, ${a}`);
  }
  else {
    console.log(`${a}, ${b}`);
  }
}

// Gọi hàm
sapXepTheoThuTuTangDan(1, 2);
sapXepTheoThuTuTangDan(4, 3);


test1(); /////?

function test1() {
  console.log("Đây là hàm test1");
}


function test1() {
  console.log("Đây là hàm test 1 nhưng đã được thay đổi nội dung bên trong");
}
