let form = document.getElementById("register-form");
console.log("form: ", form);


// Cách để collect dữ liệu người dùng như sau
form.addEventListener("submit", function (event) {
  // Ngăn sự kiện reload mặc định của trình duyệt
  event.preventDefault();

  // console.log("Bạn đã ấn nút đăng ký thành công => chạy vào phạm vi hoạt đọng của hàm này");

  // Lấy ra dữ liệu người dùng nhập vào gồm
  console.log(
    form.username.value.trim()
  );

  console.log(
    form.email.value.trim()
  );

});
