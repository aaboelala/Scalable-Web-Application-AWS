
// Save student data
document.getElementById("savestudent").addEventListener("click", function () {
  const studentID = document.getElementById("studentid").value.trim();
  const name = document.getElementById("name").value.trim();
  const className = document.getElementById("class").value.trim();
  const age = document.getElementById("age").value.trim();

  if (!studentID || !name || !className || !age) {
    alert("Please fill in all fields!");
    return;
  }

  const student = { studentID, name, class: className, age };
  const students = JSON.parse(localStorage.getItem("students") || "[]");
  students.push(student);
  localStorage.setItem("students", JSON.stringify(students));

  document.getElementById("studentSaved").textContent = "✅ Student data saved successfully!";
  document.getElementById("studentid").value = "";
  document.getElementById("name").value = "";
  document.getElementById("class").value = "";
  document.getElementById("age").value = "";
});

// Display students in table
document.getElementById("getstudents").addEventListener("click", function () {
  const students = JSON.parse(localStorage.getItem("students") || "[]");
  const tableBody = document.querySelector("#studentTable tbody");

  tableBody.innerHTML = "";

  students.forEach(student => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${student.studentID}</td>
      <td>${student.name}</td>
      <td>${student.class}</td>
      <td>${student.age}</td>
    `;

    tableBody.appendChild(row);
  });
});
