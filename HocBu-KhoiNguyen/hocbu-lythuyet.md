- Lập trình web? Xây dựng trang web bằng câu lệnh.

- Web được cấu tạo bởi những ngôn ngữ: HTML, CSS, JS

- HTML: Nội dung (văn bản, ảnh, video, .... nhìn được trên web)
- CSS: Thiết kế nội dung (bố cục, màu sắc, hình ảnh, hiệu ứng...)
  => Web đã chạy được chưa? rồi (web tĩnh)

- Javascript: Tính năng(phản hồi lại tương tác người dùng, người - người, người - máy, máy - máy)

1 vài thẻ HTML thông dụng thường được sử dụng

- h1 -> h6: Thẻ tiêu đề (tiêu đề cấp 1 lớn nhất và giảm dần tới cấp 6)
- p: Thẻ đoạn văn
- div: Dùng để bọc khối (công dụng như thẻ p)
- b: Dùng để in đậm chữ (bold)
- i: Dùng để in nghiêng chữ (italic)
- mark: Dùng để dánh dấu nội dung văn bản
- span: Dùng để style cho nội dung trong dòng nói chung.

Mẹo style: Muốn style cho các con như nào => style cho thẻ cha

---

Lý thuyết buổi 2:

thuộc tính: display: .....;

- inline: Trong dòng => các thẻ nào là inline thì được phép nằm cùng dòng
- block: Khối => Các thẻ block thì thường có width - chiều rộng thẻ = 100% chiều rộng màn hình
- inline-block: Kết hợp giữa 2 thẻ trên ...

Các thẻ mặc định có display: inline;

- b,i,a, span, mark, ....

Các thẻ mặc định có display: block;

- h1->h6, p, div, ....

Các dạng style

- inline style: style tại thẻ mở
- internal style: style bên trong thẻ <head></head> với cặp thẻ <style></style>
- external style: Code CSS bên trong 1 file riêng rồi liên kết file đó tới file HTML.
