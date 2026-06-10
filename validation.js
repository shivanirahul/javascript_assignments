function validateForm() {

    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let day = document.getElementById("day").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;
    let father = document.getElementById("father").value;
    let mother = document.getElementById("mother").value;
    let nationality = document.getElementById("nationality").value;
    let course = document.getElementById("course").value;
    let specialization = document.getElementById("specialization").value;
    let notes = document.getElementById("notes").value;

    let gender = document.querySelector('input[name="gender"]:checked');

    if (fname === "") {
        alert("Please enter First Name");
        return false;
    }

    if (lname === "") {
        alert("Please enter Last Name");
        return false;
    }

    if (day === "" || month === "" || year === "") {
        alert("Please select Date of Birth");
        return false;
    }

    if (father === "") {
        alert("Please enter Father's Name");
        return false;
    }

    if (mother === "") {
        alert("Please enter Mother's Name");
        return false;
    }

    if (!gender) {
        alert("Please select Gender");
        return false;
    }

    if (nationality === "") {
        alert("Please select Nationality");
        return false;
    }

    if (course === "") {
        alert("Please select Course");
        return false;
    }

    if (specialization === "") {
        alert("Please select Specialization");
        return false;
    }

    if (notes === "") {
        alert("Please enter Notes");
        return false;
    }

    alert("Form Submitted Successfully!");
    return true;
}