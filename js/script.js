function toggleRoadmap(id){

    const roadmap =
    document.getElementById(id);

    if(
        roadmap.style.display === "block"
    ){

        roadmap.style.display = "none";
    }

    else{

        roadmap.style.display = "block";
    }
}


// AI CAREER

function getCareerSuggestion(){

    const interest =
    document.getElementById("interest").value;

    const suggestion =
    document.getElementById("suggestionBox");

    if(interest === ""){

        suggestion.innerHTML =
        "Please select your interest.";

        return;
    }

    if(interest === "coding"){

        suggestion.innerHTML =

        `
        <h2>Recommended Careers</h2>

        <ul>

        <li>Frontend Developer</li>

        <li>Backend Developer</li>

        <li>Full Stack Developer</li>

        <li>Software Engineer</li>

        </ul>
        `;
    }

    else if(interest === "security"){

        suggestion.innerHTML =

        `
        <h2>Recommended Careers</h2>

        <ul>

        <li>Cybersecurity Analyst</li>

        <li>Ethical Hacker</li>

        <li>Security Engineer</li>

        </ul>
        `;
    }

    else if(interest === "data"){

        suggestion.innerHTML =

        `
        <h2>Recommended Careers</h2>

        <ul>

        <li>Data Analyst</li>

        <li>Data Scientist</li>

        <li>ML Engineer</li>

        </ul>
        `;
    }

    else if(interest === "design"){

        suggestion.innerHTML =

        `
        <h2>Recommended Careers</h2>

        <ul>

        <li>UI/UX Designer</li>

        <li>Product Designer</li>

        <li>Graphic Designer</li>

        </ul>
        `;
    }

    else if(interest === "ai"){

        suggestion.innerHTML =

        `
        <h2>Recommended Careers</h2>

        <ul>

        <li>AI Engineer</li>

        <li>ML Engineer</li>

        <li>Prompt Engineer</li>

        </ul>
        `;
    }

    else if(interest === "cloud"){

        suggestion.innerHTML =

        `
        <h2>Recommended Careers</h2>

        <ul>

        <li>Cloud Engineer</li>

        <li>DevOps Engineer</li>

        <li>AWS Architect</li>

        </ul>
        `;
    }
}
function sendMessage(){

    const name =
    document.getElementById("name").value.trim();

    const email =
    document.getElementById("email").value.trim();

    const subject =
    document.getElementById("subject").value.trim();

    const message =
    document.getElementById("message").value.trim();

    // RESET

    document.getElementById("nameError").innerText = "";

    document.getElementById("emailError").innerText = "";

    document.getElementById("subjectError").innerText = "";

    document.getElementById("messageError").innerText = "";

    let valid = true;

    // NAME

    if(name === ""){

        document.getElementById("nameError")
        .innerText =
        "Name is required";

        valid = false;
    }

    // EMAIL

    if(email === ""){

        document.getElementById("emailError")
        .innerText =
        "Email is required";

        valid = false;
    }

    // SUBJECT

    if(subject === ""){

        document.getElementById("subjectError")
        .innerText =
        "Subject is required";

        valid = false;
    }

    // MESSAGE

    if(message.length < 10){

        document.getElementById("messageError")
        .innerText =
        "Message should contain minimum 10 characters";

        valid = false;
    }

    // STOP

    if(!valid){

        return;
    }

    // SUCCESS

    document.getElementById("successBox")
    .style.display = "block";

    // RESET FORM

    document.getElementById("name").value = "";

    document.getElementById("email").value = "";

    document.getElementById("subject").value = "";

    document.getElementById("message").value = "";
}
function generateResume(){

    const name =
    document.getElementById("name").value.trim();

    const role =
    document.getElementById("role").value.trim();

    const email =
    document.getElementById("email").value.trim();

    const phone =
    document.getElementById("phone").value.trim();

    const location =
    document.getElementById("location").value.trim();

    const about =
    document.getElementById("about").value.trim();

    const education =
    document.getElementById("education").value.trim();

    const experience =
    document.getElementById("experience").value.trim();

    const projects =
    document.getElementById("projects").value.trim();

    const skills =
    document.getElementById("skills").value.trim();

    // RESET ERRORS

    document.getElementById("nameError").innerText = "";
    document.getElementById("roleError").innerText = "";
    document.getElementById("emailError").innerText = "";
    document.getElementById("phoneError").innerText = "";
    document.getElementById("locationError").innerText = "";
    document.getElementById("aboutError").innerText = "";
    document.getElementById("educationError").innerText = "";
    document.getElementById("projectsError").innerText = "";
    document.getElementById("skillsError").innerText = "";

    let valid = true;

    // VALIDATION

    if(name === ""){

        document.getElementById("nameError")
        .innerText = "Required";

        valid = false;
    }

    if(role === ""){

        document.getElementById("roleError")
        .innerText = "Required";

        valid = false;
    }

    if(email === ""){

        document.getElementById("emailError")
        .innerText = "Required";

        valid = false;
    }

    if(phone === ""){

        document.getElementById("phoneError")
        .innerText = "Required";

        valid = false;
    }

    if(location === ""){

        document.getElementById("locationError")
        .innerText = "Required";

        valid = false;
    }

    if(about.length < 100){

        document.getElementById("aboutError")
        .innerText =
        "Minimum 100 characters required";

        valid = false;
    }

    if(education === ""){

        document.getElementById("educationError")
        .innerText = "Required";

        valid = false;
    }

    if(projects === ""){

        document.getElementById("projectsError")
        .innerText = "Required";

        valid = false;
    }

    if(skills === ""){

        document.getElementById("skillsError")
        .innerText = "Required";

        valid = false;
    }

    if(!valid){

        return;
    }

    // UPDATE PREVIEW

    document.getElementById("previewName")
    .innerText = name;

    document.getElementById("previewRole")
    .innerText = role;

    document.getElementById("previewEmail")
    .innerText =
    `${email} | ${phone}`;

    document.getElementById("previewLocation")
    .innerText = location;

    document.getElementById("previewAbout")
    .innerText = about;

    document.getElementById("previewEducation")
    .innerText = education;

    document.getElementById("previewExperience")
    .innerText =
    experience || "Fresher";

    document.getElementById("previewProjects")
    .innerText = projects;

    // SKILLS

    const skillsContainer =
    document.getElementById("previewSkills");

    skillsContainer.innerHTML = "";

    const skillsArray =
    skills.split(",");

    skillsArray.forEach(skill => {

        if(skill.trim() !== ""){

            skillsContainer.innerHTML +=

            `<span class="skill-tag">
            ${skill.trim()}
            </span>`;
        }
    });

    // IMAGE

    const file =
    document.getElementById("imageUpload").files[0];

    if(file){

        const reader =
        new FileReader();

        reader.onload = function(e){

            document.getElementById("previewImage")
            .src = e.target.result;
        }

        reader.readAsDataURL(file);
    }

    alert("Professional Resume Generated!");
}


// CHARACTER COUNTER

document
.getElementById("about")
.addEventListener("input", function(){

    document.getElementById("charCount")
    .innerText =
    `${this.value.length} / 300`;
});


// DOWNLOAD PDF

function downloadPDF(){

    const previewName =
    document.getElementById("previewName").innerText;

    if(previewName === "Your Name"){

        alert(
        "Generate resume before downloading!"
        );

        return;
    }

    const element =
    document.getElementById("resumePreview");

    const options = {

        margin:0,

        filename:'Professional_Resume.pdf',

        image:{
            type:'jpeg',
            quality:1
        },

        html2canvas:{
            scale:2,
            scrollY:0
        },

        jsPDF:{
            unit:'px',
            format:[850,1100],
            orientation:'portrait'
        }
    };

    html2pdf()
    .set(options)
    .from(element)
    .save();
}
function sendMessage(){

    const name =
    document.getElementById("name").value.trim();

    const email =
    document.getElementById("email").value.trim();

    const subject =
    document.getElementById("subject").value.trim();

    const message =
    document.getElementById("message").value.trim();

    // RESET

    document.getElementById("nameError").innerText = "";

    document.getElementById("emailError").innerText = "";

    document.getElementById("subjectError").innerText = "";

    document.getElementById("messageError").innerText = "";

    let valid = true;

    if(name === ""){

        document.getElementById("nameError")
        .innerText =
        "Name is required";

        valid = false;
    }

    if(email === ""){

        document.getElementById("emailError")
        .innerText =
        "Email is required";

        valid = false;
    }

    if(subject === ""){

        document.getElementById("subjectError")
        .innerText =
        "Subject is required";

        valid = false;
    }

    if(message.length < 10){

        document.getElementById("messageError")
        .innerText =
        "Message should contain minimum 10 characters";

        valid = false;
    }

    if(!valid){

        return;
    }

    document.getElementById("successBox")
    .style.display = "block";

    document.getElementById("name").value = "";

    document.getElementById("email").value = "";

    document.getElementById("subject").value = "";

    document.getElementById("message").value = "";
}