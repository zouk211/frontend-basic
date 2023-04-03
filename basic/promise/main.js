// // Tạo một mảng chứa các đối tượng sinh viên
// let students = [
//   { name: "John", age: 20, major: "Computer Science" },
//   { name: "Jane", age: 21, major: "Mathematics" },
//   { name: "Bob", age: 19, major: "English Literature" },
// ];

// // Tạo một hàm để hiển thị danh sách sinh viên
// function displayStudents() {
//   // Lấy thẻ ul để chèn danh sách sinh viên vào
//   let ul = document.getElementById("student-list");

//   // Lặp qua mảng sinh viên và tạo các thẻ li để hiển thị thông tin của từng sinh viên
//   for (let i = 0; i < students.length; i++) {
//     let li = document.createElement("li");
//     li.innerHTML =
//       students[i].name + " - " + students[i].age + " - " + students[i].major;
//     ul.appendChild(li);
//   }
// }

// Gọi hàm để hiển thị danh sách sinh viên
displayStudents();

fetch('https://reqres.in/api/users?page=2')
        .then(response => response.json())
        .then(data => {
          const studentList = document.getElementById('student-list');
          data.forEach(student => {
            const li = document.createElement('li');
            li.textContent = `${student.name} - ${student.age} - ${student.major}`;
            studentList.appendChild(li);
          });
        })
        .catch(error => console.error(error));

// Lấy object từ API URL hoặc sử dụng object mẫu của bạn


let obj = {
  page: 2,
  per_page: 6,
  total: 12,
  total_pages: 2,
  data: [
    {
      id: 7,
      email: "michael.lawson@reqres.in",
      first_name: "Michael",
      last_name: "Lawson",
      avatar: "https://reqres.in/img/faces/7-image.jpg",
    },
    {
      id: 8,
      email: "lindsay.ferguson@reqres.in",
      first_name: "Lindsay",
      last_name: "Ferguson",
      avatar: "https://reqres.in/img/faces/8-image.jpg",
    },
    {
      id: 9,
      email: "tobias.funke@reqres.in",
      first_name: "Tobias",
      last_name: "Funke",
      avatar: "https://reqres.in/img/faces/9-image.jpg",
    },
    {
      id: 10,
      email: "byron.fields@reqres.in",
      first_name: "Byron",
      last_name: "Fields",
      avatar: "https://reqres.in/img/faces/10-image.jpg",
    },
    {
      id: 11,
      email: "george.edwards@reqres.in",
      first_name: "George",
      last_name: "Edwards",
      avatar: "https://reqres.in/img/faces/11-image.jpg",
    },
    {
      id: 12,
      email: "rachel.howell@reqres.in",
      first_name: "Rachel",
      last_name: "Howell",
      avatar: "https://reqres.in/img/faces/12-image.jpg",
    },
  ],
  support: {
    url: "https://reqres.in/#support-heading",
    text: "To keep ReqRes free, contributions towards server costs are appreciated!",
  },
};

// Lấy danh sách sinh viên từ object
let students = obj.data;

// Lặp qua từng sinh viên và tạo thẻ li
let studentList = document.getElementById("student-list");
students.forEach(function (student) {
  let li = document.createElement("li");
  li.innerHTML = `<img src="${student.avatar}" alt=""> <strong>ID:</strong> ${student.id} - <strong>Name:</strong> ${student.first_name} ${student.last_name} - <strong>Email:</strong> ${student.email}`;
  //li.firstChild.textContent = li.firstChild.textContent.replace(".", "");
  studentList.appendChild(li);
});
