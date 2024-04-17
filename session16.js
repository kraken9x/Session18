console.log("Hello world");

// Ex1:

// B0: Mô phỏng việc lấy dữ liệu từ 1 kho lưu trữ dữ liệu về
// const listItems = [
//   {
//     id: 1,
//     content: "List item number 1",
//   },
//   {
//     id: 2,
//     content: "List item number 2",
//   },
//   {
//     id: 3,
//     content: "List item number 3",
//   },
// ];

// B1:
// Tạo ra 1 thẻ ul - Chuỗi với định dạng HTML
// let ul = `<ul></ul>`;
// let ul2 = document.createElement("ul");
// console.log(ul2);

// B2:
// Gắn thẻ ul đó vào trong thẻ body
// let body = document.getElementsByTagName("body")[0]; // []
// // body.innerHTML = body.innerHTML + ul;
// body.appendChild(ul2);

// B3:
// Tạo ra các thẻ li lần lượt có nội dung giống
// trong đề bài
// let li = `<li>List item number 1</li>`;
// let li2 = `<li>List item number 2</li>`;
// let li3 = `<li>List item number 3</li>`;

// B4:
// Lần lượt mỗi lần tạo ra 1 thẻ li với nội dung
// như đề bài thì ngay lập tức gắn thẻ li đó vào trong
// thẻ ul đang được hiển thị trong file HTML ở bước 2
// let ulHTML = document.getElementsByTagName("ul")[0];
// ulHTML.innerHTML = ulHTML.innerHTML + li;
// ulHTML.innerHTML = ulHTML.innerHTML + li2;
// ulHTML.innerHTML = ulHTML.innerHTML + li3;

// for (let i = 1; i <= 3; i = i + 1) {
//   //   let li = `<li>List item number ${i}</li>`;
//   //   ulHTML.innerHTML = ulHTML.innerHTML + li;
//   //
//   let li = document.createElement("li");
//   li.innerHTML = `List item number ${i}`;
//   ul2.appendChild(li);
// }

// for (let item of listItems) {
//   //   let li = `<li>List item number ${i}</li>`;
//   //   ulHTML.innerHTML = ulHTML.innerHTML + li;
//   //
//   let li = document.createElement("li");
//   li.innerHTML = `${item.content}`;
//   ul2.appendChild(li);
// }

// Ex02:

// C1:
// B1: Tạo ra function dùng để chạy mỗi khi
// sự kiện onclick được trigger (Được bấm vào) tại phần tử
// HTML đang được gắn sự kiện
// function sayHi() {
//   alert("Xin chào");
// }

// B2: Gắn hàm sayHi vào phần tử HTML cần
// phải gắn sự kiện onclick
// Tìm phần tử HTML đó ở trong file HTML VÀ GẮNNNNNNN

// C2:
// B1: Gọi phần tử HTML cần phải gắn sự kiện onclick
// sang bên phía Javascript
// let btn = document.getElementById("btn");
// console.dir(btn);

// B2: Đi gắn sự kiện onclick cho phần tử vừa gọi sang phía JS
// btn.onclick = function () {
//   alert("xin chào !!!!!!!");
// };

// C3:
// Thay vì sử dụng thuộc tính onclick
// Sử dụng phương thức/hàm được xây dựng sẵn
// của các phần tử HTML ------> .addEventListener();

// btn.addEventListener("click", function () {
//   alert("Xin chào");
// });

// Ex03:
// B1: Tạo giao diện HTML

// B2: Gọi nút button ra và gắn sự kiện onclick

// B3: Mỗi khi click thì chúng ta sẽ gọi thẻ chứa nội dung
// ra và thay đổi nội dung mới cho thẻ đó

// Ex04:
// Giống hệt bài 3

// Ex05:
// Giống y hệt bài Ex01

// Ex06:

// B0: Lấy dữ liệu từ kho lưu trữ dữ liệu (CSDL) VẬT LÝ

// B1: Mô phỏng lại kho lưu trữ dữ liệu dùng để hiển thị
// ra các phần tử li ở trong ứng dụng
const todoListData = JSON.parse(localStorage.todoListData);

let ul = document.getElementById("list-container");
let btn = document.getElementById("btn");
let input = document.getElementById("input");

// B2: Mỗi khi truy cập vào ứng dụng
// Sử dụng dữ liệu được gọi từ server (Kho lưu trữ dữ liệu mô phỏng)
// để hiển thị ra màn hình HTML

function render() {
  ul.innerHTML = "";
  for (let index in todoListData) {
    // todoListData[index] // {}
    // Tại mỗi 1 lần lặp tạo ra 1 thẻ li
    // Kiểm tra xem todoListData[index].completed === true | false
    if (!todoListData[index].completed) {
      let li = `<li id="${todoListData[index].id}">
                  ${todoListData[index].content}
                  <button class="delete-btn">x</button>
              </li>`;

      // Sử dụng nội dung từ mỗi đối tượng để đổ dữ liệu vào trong thẻ li vừa tạo ra
      // Gắn thẻ li đó vào trong ul đang tồn tại sẵn ở HTML
      ul.innerHTML = ul.innerHTML + li;
    } else {
      let li = `<li class="completed" id="${todoListData[index].id}">
                  ${todoListData[index].content}
                  <button class="delete-btn">x</button>
              </li>`;
      ul.innerHTML = ul.innerHTML + li;
    }
  }

  // Gọi ra toàn bộ thẻ li và gắn sự kiện onclick cho thẻ li đó
  // Tại nơi tập hợp thẻ li đó được sinh
  let liList = document.getElementsByTagName("li");
  for (let li of liList) {
    li.onclick = function () {
      // Lấy ra được id của phần tử li click vào thông qua attribute id
      // đính kèm mỗi lần in thẻ li đó ra trong hàm render()
      console.log("Hello world", li.id);

      // Tiến hành tìm kiếm phần tử có id lấy ra được từ attribute của thẻ li
      // trong danh sách dữ liệu mô phỏng todoListData
      let index = todoListData.findIndex(function (el, index) {
        return el.id === +li.id;
      });

      // -1 Nếu không tìm thấy
      // chỉ số - nếu tìm thấy

      // Cập nhật lại giá trị cho thuộc tính completed (false -> true, true -> false)
      todoListData[index].completed = !todoListData[index].completed;
      localStorage.todoListData = JSON.stringify(todoListData);
      // Gọi lại hàm render() để danh sách dữ liệu có phần tử vừa được cập nhật
      // giá trị completed sẽ hiển thị ra màn hình trình duyệt
      render();
    };
  }
}

render();

btn.onclick = function () {
  // Thẻ input luôn có 1 attribute là value

  // Với phần tử HTML input lấy sang JS --> Để lấy ra giá trị của ô input
  // --> Sử dụng thuộc tính .value
  let content = input.value;

  let todoListItem = {
    // id: Bất kỳ logic nào để cho ra 1 giá trị độc nhất (chuỗi độc nhất, số độc nhất)
    id:
      todoListData.length > 0
        ? todoListData[todoListData.length - 1].id + 1
        : 1,
    content: content,
    completed: false,
  };

  todoListData.push(todoListItem);
  localStorage.todoListData = JSON.stringify(todoListData);
  // Từ danh sách dữ liệu đã được cập nhất --->
  render();
};

// Event Delagation - UỶ QUYỀN SỰ KIỆN
// HAYYYYYYYYYYYYYY - Event Bubbling (Nổi bọt sự kiện)

// Event delagation - Ngăn chặn được sự nổi bọt sự kiện giữa các
// phần tử HTML cha con

ul.onclick = function (event) {
  // UỶ quyền đích danh sự kiện onclick của cha ul
  // xuống dưới các button delete

  // Tham số event là một đối tượng được xây dựng sẵn trong Javascript
  // chứa toàn bộ các thông số về sự kiện vừa được thực hiện
  if (event.target.classList.contains("delete-btn")) {
    let li = event.target.parentElement; // btn.delete-btn --> li
    let index = todoListData.findIndex(function (el, i) {
      return el.id === +li.id;
    });
    // Tìm kiếm ra phần tử trong mảng thoả mãn điều kiện
    // nằm sau từ khoá return
    todoListData.splice(index, 1);
    localStorage.todoListData = JSON.stringify(todoListData);
    render();
  }
};

// Arrow function - Cú pháp khác của function thông thường
// Arrow function sẽ không có hoisting
// KHÔNG THỂ truy cập và thực thi arrow function
// trước khi khai báo

// Hoisting của Arrow function ????

// function sayHello(name) {
//   return "Hello " + name;
// }
// sayHello("nam");

// // let say = (name) => {
// //   return "Hello" + name;
// // };

// let say = (name) => "Hello" + name;

// say();

// Local Storage - Kho lưu trữ dữ liệu nội bộ của trình duyệt
// First choice - Ưu tiên hàng đầu trong thời điểm hiện tại
// Tính thao tác ĐƠN GIẢN CỦA nó

// Ứng dụng application FULLSTACK (FRONTEND + BACKEND) !!!!!

// Sử dụng các kho lưu trữ dữ liệu phức tạp
// (Bao gồm đầy đủ các tính năng để thao tác với dữ liệu)
// - Lưu trữ dữ liệu
// - Cập nhật dữ liệu
// - Xoá dữ liệu
// - Truy vấn dữ liệu
// - Truy vấn dữ liệu dạng phức tạp...

// - Kho lưu trữ dữ liệu dạng có quan hệ (MySQL, Postgres, Mssql, Oracle...)
// - Kho lưu trữ dữ liệu dạng 0 quan hệ (MongoDB, Firebase firestore ...)

console.log(localStorage.name);

localStorage.name = "Hồng có tóc mới";

console.log(localStorage.hobbies); // chuỗi mảng

// Bản chất dữ liệu được lưu trữ trong local storage KHÔNG PHẢI CHUỖI
// Mà là 1 dữ liệu có dạng JSON

// Biến đổi các kiểu dữ liệu phức tạp ([], {}) thành JSON và lưu vào local storage
// let arr = [1, 3, 5, 7];
// localStorage.arr = JSON.stringify(arr);

// let person = {
//   name: "Hello world",
//   age: 12,
//   gender: true,
// };

// localStorage.person = JSON.stringify(person);

// Lấy dữ liệu JSON từ local storage và biến đổi ngược lại JSON đó thành [], {}
// let person = JSON.parse(localStorage.person);
// console.log(person);
