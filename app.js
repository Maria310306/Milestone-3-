function generateResume() {
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value;
    // Create resume preview
    var resumePreview = "\n      <h1>".concat(name, "</h1>\n      <p><strong>Email:</strong> ").concat(email, "</p>\n      <h2>Education</h2>\n      <p>").concat(education, "</p>\n      <h2>Work Experience</h2>\n      <p>").concat(experience, "</p>\n      <h2>Skills</h2>\n      <p>").concat(skills, "</p>\n    ");
    // Display resume preview
    document.getElementById('resume-preview').innerHTML = resumePreview;
}
