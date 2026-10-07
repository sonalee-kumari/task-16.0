
    const students = [
      { name: "Aarav Sharma", marks: 88, class: "10-A", address: "12 MG Road, Bengaluru" },
      { name: "Priya Patel", marks: 94, class: "10-B", address: "45 Ring Road, Ahmedabad" },
      { name: "Rohan Verma", marks: 76, class: "9-A", address: "88 Civil Lines, Delhi" },
      { name: "Sneha Nair", marks: 91, class: "10-A", address: "3 Park Street, Kolkata" },
      { name: "Kabir Khan", marks: 82, class: "9-C", address: "19 Marine Drive, Mumbai" }
    ];

    const studentContainer = document.getElementById("studentContainer");
    const searchInput = document.getElementById("searchInput");

   
    function displayStudents(records) {
      if (records.length === 0) {
        studentContainer.innerHTML = `<p class="no-results">No students found.</p>`;
        return;
      }

      
      const cardsHtml = records.map(student => `
        <div class="card">
          <h3>${student.name}</h3>
          <p><strong>Class:</strong> ${student.class}</p>
          <p><strong>Marks:</strong> ${student.marks}</p>
          <p><strong>Address:</strong> ${student.address}</p>
        </div>
      `).join("");

      
      studentContainer.innerHTML = cardsHtml;
    }


    searchInput.addEventListener("input", function (event) {
      const keyword = event.target.value.trim().toLowerCase();

      const filteredStudents = students.filter(student =>
        student.name.toLowerCase().includes(keyword)
      );

      displayStudents(filteredStudents);
    });

    displayStudents(students);


