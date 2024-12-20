var form = document.getElementById("resume-form");
var resumeDisplayElement = document.getElementById("result-display");
// Handle form Submission
form.addEventListener("submit", function (event) {
    event.preventDefault();
    // Collect input value
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var dob = document.getElementById("dob").value;
    var gender = document.getElementById("gender").value;
    var education = document.getElementById("education")
        .value;
    var experience = document.getElementById("experience")
        .value;
    var skills = document.getElementById("skills").value;
    // Generate Dynamic Resume content dynamically
    var resumeHtml = "\n    <h2>Editable Dynamic Resume</h2>\n    <br/>\n    <h3>Personal Information </h3>\n    <p><b>Name : </b> <span contenteditable=\"true\">".concat(name, "</span></p>\n      <p><b>Email : </b> <span contenteditable=\"true\">").concat(email, "</span></p>\n         <p><b>Phone : </b> <span contenteditable=\"true\">").concat(phone, "</span></p>\n        <p><b>Date of Birth : </b> <span contenteditable=\"true\">").concat(dob, "</span></p>\n          <p><b>Gender : </b> <span contenteditable=\"true\">").concat(gender, "</span></p>\n             <h3>Education </h3>\n                <p contenteditable=\"true\"><b>Education : </b> ").concat(education, "</p>\n                  <h3>Experience </h3>\n                <p contenteditable=\"true\"><b>Experience : </b>").concat(experience, "</p>\n                  <h3>Skills </h3>\n                <p contenteditable=\"true\" ><b>Skills : </b>").concat(skills, "</p>\n\n\n    ");
    // Display the Generate Resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHtml;
    }
    else {
        console.error("The resume display element is missing.");
    }
});
